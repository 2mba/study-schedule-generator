// ============================================================
// SHARED UTILITIES
// ============================================================

function applyTheme(themeName) {
  document.documentElement.className = 'theme-' + themeName;
  localStorage.setItem('theme', themeName);
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.theme === themeName);
  });
}

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  }
}

function showCopyFeedback(btn, success) {
  const original = btn.textContent;
  btn.textContent = success ? 'Copied!' : 'Failed';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = original;
    btn.disabled = false;
  }, 1800);
}

// ============================================================
// STUDY SCHEDULE TOOL
// ============================================================

function getMode() {
  return document.querySelector('.mode-btn.active')?.dataset.mode ?? 'fill';
}

function getInputs() {
  const mode = getMode();
  const examDateVal = document.getElementById('examDate').value;
  const totalHoursVal = document.getElementById('totalHours').value;
  const maxHoursVal = document.getElementById('maxHours').value;
  const restDaysVal = document.getElementById('restDays').value;

  const errors = [];

  if (!examDateVal) errors.push('Exam date is required.');
  if (mode === 'target' && (!totalHoursVal || isNaN(totalHoursVal) || Number(totalHoursVal) <= 0))
    errors.push('Total study hours must be a positive number.');
  if (!maxHoursVal || isNaN(maxHoursVal) || Number(maxHoursVal) <= 0)
    errors.push('Hours per day must be a positive number.');
  if (isNaN(restDaysVal) || Number(restDaysVal) < 0 || Number(restDaysVal) > 6)
    errors.push('Rest days per week must be between 0 and 6.');

  if (errors.length) throw new Error(errors.join(' '));

  const examDate = new Date(examDateVal + 'T00:00:00');
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (examDate <= today) throw new Error('Exam date must be in the future.');

  return {
    mode,
    examDate,
    totalHours: mode === 'target' ? Number(totalHoursVal) : null,
    maxHoursPerDay: Number(maxHoursVal),
    restDaysPerWeek: Number(restDaysVal) || 0,
  };
}

function buildWorkDays(examDate, restDaysPerWeek) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const allDays = [];
  const cursor = new Date(today);
  cursor.setDate(cursor.getDate() + 1);
  while (cursor < examDate) {
    allDays.push(new Date(cursor));
    cursor.setDate(cursor.getDate() + 1);
  }

  if (restDaysPerWeek === 0) return allDays;

  const workDaysPerWeek = 7 - restDaysPerWeek;
  return allDays.filter((_, i) => (i % 7) < workDaysPerWeek);
}

function generateSchedule(inputs) {
  const { mode, examDate, totalHours, maxHoursPerDay, restDaysPerWeek } = inputs;

  const workDays = buildWorkDays(examDate, restDaysPerWeek);

  if (workDays.length === 0) {
    return {
      schedule: [], mode, examDate, restDaysPerWeek,
      warning: { type: 'impossible', msg: 'No available study days before the exam. Try removing rest days or choosing a later date.' },
    };
  }

  if (mode === 'fill') {
    const schedule = workDays.map(day => ({ date: new Date(day), hours: maxHoursPerDay }));
    return { schedule, mode, examDate, restDaysPerWeek, warning: null };
  }

  let warning = null;
  if (totalHours > workDays.length * maxHoursPerDay) {
    const minNeeded = Math.ceil((totalHours / workDays.length) * 10) / 10;
    warning = {
      type: 'overflow',
      msg: `${totalHours}h doesn't fit in ${workDays.length} days at ${maxHoursPerDay}h/day. You need at least ${minNeeded}h/day — try raising your max or reducing rest days.`,
    };
  }

  let remaining = totalHours;
  const schedule = [];
  for (const day of workDays) {
    if (remaining <= 0) break;
    const assign = Math.min(maxHoursPerDay, remaining);
    remaining = Math.round((remaining - assign) * 100) / 100;
    schedule.push({ date: new Date(day), hours: assign });
  }

  return { schedule, mode, examDate, restDaysPerWeek, warning };
}

// ── Date helpers ─────────────────────────────────────────────

function dateKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function getMondayOf(date) {
  const d = new Date(date);
  const diff = (d.getDay() + 6) % 7; // days since Monday (0=Mon … 6=Sun)
  d.setDate(d.getDate() - diff);
  return d;
}

function formatDate(date) {
  return date.toLocaleDateString(undefined, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
}

// ── Rendering ────────────────────────────────────────────────

function renderListView(container, schedule, mode) {
  const isFill = mode === 'fill';
  const table = document.createElement('table');
  table.className = 'schedule-table';
  table.innerHTML = `
    <thead>
      <tr>
        <th class="col-check"></th>
        <th class="col-num">#</th>
        <th>Date</th>
        <th>Hours</th>
        <th>${isFill ? 'Cumulative' : 'Remaining'}</th>
        <th class="col-notes">Notes</th>
      </tr>
    </thead>
  `;
  const tbody = document.createElement('tbody');

  let running = isFill ? 0 : schedule.reduce((s, d) => s + d.hours, 0);
  schedule.forEach((entry, i) => {
    running = isFill
      ? Math.round((running + entry.hours) * 100) / 100
      : Math.round((running - entry.hours) * 100) / 100;
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="col-check"><input type="checkbox" class="schedule-check" /></td>
      <td class="col-num">${i + 1}</td>
      <td>${formatDate(entry.date)}</td>
      <td>${entry.hours}h</td>
      <td>${running}h</td>
      <td class="col-notes"></td>
    `;
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  container.appendChild(table);
}

function renderCalendarView(container, schedule, examDate, restDaysPerWeek) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const startDay = new Date(today);
  startDay.setDate(today.getDate() + 1);

  // Locale-aware Mon–Sun day names (Jan 6–12, 2025 = Mon–Sun)
  const DAY_NAMES = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(2025, 0, 6 + i);
    return d.toLocaleDateString(undefined, { weekday: 'short' });
  });

  // Schedule lookup and work-day set for rest/free distinction
  const scheduleMap = new Map(schedule.map(e => [dateKey(e.date), e.hours]));
  const workDaySet = new Set(buildWorkDays(examDate, restDaysPerWeek).map(d => dateKey(d)));

  // Calendar bounds
  const weekStart = getMondayOf(startDay);
  const lastStudyDay = new Date(examDate);
  lastStudyDay.setDate(lastStudyDay.getDate() - 1);
  const weekEnd = getMondayOf(lastStudyDay);
  weekEnd.setDate(weekEnd.getDate() + 6); // Sunday of last week

  const table = document.createElement('table');
  table.className = 'cal-table';

  // Header
  const thead = document.createElement('thead');
  thead.innerHTML = `<tr>
    <th class="cal-week-label-header"></th>
    ${DAY_NAMES.map(n => `<th>${n}</th>`).join('')}
  </tr>`;
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  const cursor = new Date(weekStart);
  let weekNum = 0;

  while (cursor <= weekEnd) {
    weekNum++;
    const weekLabel = cursor.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });

    const tr = document.createElement('tr');

    // Week row header
    const th = document.createElement('th');
    th.className = 'cal-week-label';
    th.textContent = `W${weekNum} · ${weekLabel}`;
    tr.appendChild(th);

    // 7 day cells
    for (let d = 0; d < 7; d++) {
      const day = new Date(cursor);
      day.setDate(cursor.getDate() + d);
      const key = dateKey(day);

      const td = document.createElement('td');
      td.className = 'cal-cell';

      if (day < startDay || day >= examDate) {
        // Out of study period
        td.classList.add('cal-empty');
        if (day.getTime() === examDate.getTime()) {
          td.classList.add('cal-exam');
          td.textContent = '★';
        }
      } else if (scheduleMap.has(key)) {
        // Scheduled study day
        td.classList.add('cal-study');
        td.innerHTML = `${scheduleMap.get(key)}h<span class="cal-print-check"><input type="checkbox" /></span>`;
      } else if (!workDaySet.has(key)) {
        // Planned rest day
        td.classList.add('cal-rest');
        td.textContent = '—';
      } else {
        // Work day but target already met
        td.classList.add('cal-free');
        td.textContent = '·';
      }

      tr.appendChild(td);
    }

    tbody.appendChild(tr);

    // Print-only notes row after each week
    const notesRow = document.createElement('tr');
    notesRow.className = 'cal-notes-row';
    notesRow.innerHTML = `<td colspan="8" class="cal-notes-cell"></td>`;
    tbody.appendChild(notesRow);

    cursor.setDate(cursor.getDate() + 7);
  }

  table.appendChild(tbody);
  container.appendChild(table);
}

function renderOutput(result) {
  const { schedule, mode, examDate, restDaysPerWeek, warning } = result;
  const container = document.getElementById('output');
  container.innerHTML = '';

  // Title
  const examDateFormatted = examDate.toLocaleDateString(undefined, {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });
  const titleBlock = document.createElement('div');
  titleBlock.className = 'output-title';
  titleBlock.innerHTML = `
    <div class="output-title-main">Study Schedule</div>
    <div class="output-title-sub">Exam on ${examDateFormatted}</div>
  `;
  container.appendChild(titleBlock);

  // Warning
  if (warning) {
    const warn = document.createElement('div');
    warn.className = 'warning-banner';
    warn.textContent = warning.msg;
    container.appendChild(warn);
    if (warning.type === 'impossible') return;
  }

  // Summary
  const totalAssigned = schedule.reduce((s, d) => s + d.hours, 0);
  const summary = document.createElement('div');
  summary.className = 'schedule-summary';
  summary.innerHTML = `<span>${schedule.length} study days</span><span>${totalAssigned}h total</span>`;
  container.appendChild(summary);

  // View toggle (screen only)
  const viewToggle = document.createElement('div');
  viewToggle.className = 'view-toggle no-print';
  viewToggle.innerHTML = `
    <button class="view-btn active" data-view="list">List</button>
    <button class="view-btn" data-view="calendar">Calendar</button>
  `;
  container.appendChild(viewToggle);

  // Table area — swapped by view toggle
  const tableArea = document.createElement('div');
  container.appendChild(tableArea);

  // Default: list view
  renderListView(tableArea, schedule, mode);

  // Wire view toggle
  viewToggle.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      viewToggle.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      tableArea.innerHTML = '';
      if (btn.dataset.view === 'list') {
        renderListView(tableArea, schedule, mode);
      } else {
        renderCalendarView(tableArea, schedule, examDate, restDaysPerWeek);
      }
    });
  });

  document.getElementById('exportActions').classList.remove('hidden');
  window._lastResult = result;
}

// ── Export formatters ─────────────────────────────────────────

function formatForNotion(schedule) {
  const lines = ['# Study Schedule\n'];
  schedule.forEach((entry, i) => {
    lines.push(`## Day ${i + 1} — ${formatDate(entry.date)}`);
    lines.push(`- [ ] Study for ${entry.hours} hour${entry.hours !== 1 ? 's' : ''}\n`);
  });
  const total = schedule.reduce((s, d) => s + d.hours, 0);
  lines.push(`---`);
  lines.push(`**Total: ${total}h across ${schedule.length} days**`);
  return lines.join('\n');
}

function formatAsPlainText(schedule) {
  const lines = ['STUDY SCHEDULE', '==============', ''];
  schedule.forEach((entry, i) => {
    lines.push(`Day ${i + 1}  ${formatDate(entry.date)}  —  ${entry.hours}h`);
  });
  const total = schedule.reduce((s, d) => s + d.hours, 0);
  lines.push('');
  lines.push(`Total: ${total}h across ${schedule.length} days`);
  return lines.join('\n');
}

function formatForICalendar(schedule, eventName, startTime) {
  const [startHour, startMin] = startTime.split(':').map(Number);
  const name = eventName.trim() || 'Study Session';

  const fmt = d => {
    const p = n => String(n).padStart(2, '0');
    return `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}T${p(d.getHours())}${p(d.getMinutes())}00`;
  };

  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Study Schedule Generator//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
  ];

  schedule.forEach((entry, i) => {
    const start = new Date(entry.date);
    start.setHours(startHour, startMin, 0, 0);
    const end = new Date(start.getTime() + Math.round(entry.hours * 60) * 60000);

    lines.push(
      'BEGIN:VEVENT',
      `DTSTART:${fmt(start)}`,
      `DTEND:${fmt(end)}`,
      `SUMMARY:${name}`,
      `UID:day${i + 1}-${dateKey(entry.date)}@study-schedule-generator`,
      'END:VEVENT',
    );
  });

  lines.push('END:VCALENDAR');
  return lines.join('\r\n');
}

function downloadFile(content, filename, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function showError(msg) {
  const el = document.getElementById('errorMsg');
  el.textContent = msg;
  el.classList.remove('hidden');
}

function clearError() {
  const el = document.getElementById('errorMsg');
  el.textContent = '';
  el.classList.add('hidden');
}

// ============================================================
// EVENT WIRING
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  // Restore theme
  const savedTheme = localStorage.getItem('theme') || 'pastel';
  applyTheme(savedTheme);

  // Theme switcher
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', () => applyTheme(btn.dataset.theme));
  });

  // Mode toggle (input form)
  const modeHints = {
    fill:   'Fills every available day up to your daily limit.',
    target: 'Distributes hours to hit an exact total, then stops.',
  };
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const mode = btn.dataset.mode;
      document.getElementById('totalHoursField').style.display = mode === 'target' ? '' : 'none';
      document.getElementById('modeHint').textContent = modeHints[mode];
      document.getElementById('output').innerHTML = '';
      document.getElementById('exportActions').classList.add('hidden');
      window._lastResult = null;
    });
  });

  // Generate
  document.getElementById('generateBtn').addEventListener('click', () => {
    clearError();
    document.getElementById('output').innerHTML = '';
    document.getElementById('exportActions').classList.add('hidden');
    document.getElementById('calExportPanel').classList.add('hidden');
    window._lastResult = null;

    try {
      const inputs = getInputs();
      const result = generateSchedule(inputs);
      renderOutput(result);
    } catch (err) {
      showError(err.message);
    }
  });

  // Print
  document.getElementById('printBtn').addEventListener('click', () => window.print());

  // Copy for Notion
  document.getElementById('copyNotionBtn').addEventListener('click', async function () {
    if (!window._lastResult) return;
    const ok = await copyToClipboard(formatForNotion(window._lastResult.schedule));
    showCopyFeedback(this, ok);
  });

  // Copy raw text
  document.getElementById('copyRawBtn').addEventListener('click', async function () {
    if (!window._lastResult) return;
    const ok = await copyToClipboard(formatAsPlainText(window._lastResult.schedule));
    showCopyFeedback(this, ok);
  });

  // Calendar export — toggle panel
  document.getElementById('calExportBtn').addEventListener('click', () => {
    document.getElementById('calExportPanel').classList.toggle('hidden');
  });

  document.getElementById('calExportClose').addEventListener('click', () => {
    document.getElementById('calExportPanel').classList.add('hidden');
  });

  // Calendar export — download
  document.getElementById('calDownloadBtn').addEventListener('click', () => {
    if (!window._lastResult) return;
    const eventName = document.getElementById('calEventName').value;
    const startTime = document.getElementById('calStartTime').value || '09:00';
    const ics = formatForICalendar(window._lastResult.schedule, eventName, startTime);
    downloadFile(ics, 'study-schedule.ics', 'text/calendar;charset=utf-8');
  });
});
