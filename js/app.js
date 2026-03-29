// ============================================================
// LOCALIZATION
// ============================================================

const STRINGS = {
  en: {
    page_title:            'Study Schedule Generator',
    page_subtitle:         'Enter your exam details and get a day-by-day study plan.',
    nav_tools:             'Utility Tools',
    nav_tool_name:         'Study Scheduler',
    mode_fill:             'Fill my schedule',
    mode_target:           'Hit a target',
    hint_fill:             'Fills every available day up to your daily limit.',
    hint_target:           'Distributes hours to hit an exact total, then stops.',
    label_exam_date:       'Exam Date',
    label_total_hours:     'Total Study Hours',
    label_hours_day:       'Hours Per Day',
    label_rest_days:       'Rest Days Per Week',
    label_optional:        '(optional)',
    placeholder_total:     'e.g. 40',
    placeholder_hours:     'e.g. 4',
    placeholder_rest:      'e.g. 1',
    btn_generate:          'Generate Schedule',
    btn_print:             'Print / Save PDF',
    btn_notion:            'Copy for Notion',
    btn_raw:               'Copy Raw Text',
    btn_export_cal:        'Export to Calendar',
    btn_download_ics:      'Download .ics',
    cal_panel_title:       'Export to Calendar (.ics)',
    label_event_name:      'Event Name',
    label_start_time:      'Start Time',
    event_name_default:    'Study Session',
    view_list:             'List',
    view_calendar:         'Calendar',
    output_title:          'Study Schedule',
    exam_on:               'Exam on {date}',
    summary_days:          '{n} study days',
    summary_total:         '{n}h total',
    col_date:              'Date',
    col_hours:             'Hours',
    col_cumulative:        'Cumulative',
    col_remaining:         'Remaining',
    col_notes:             'Notes',
    week_label:            'W{n} · {date}',
    copied:                'Copied!',
    copy_failed:           'Failed',
    err_exam_required:     'Exam date is required.',
    err_hours_invalid:     'Total study hours must be a positive number.',
    err_max_hours_invalid: 'Hours per day must be a positive number no greater than 23.',
    err_rest_invalid:      'Rest days per week must be between 0 and 6.',
    err_exam_future:       'Exam date must be in the future.',
    warn_impossible:       'No available study days before the exam. Try removing rest days or choosing a later date.',
    warn_overflow:         "{hours}h doesn't fit in {days} days at {maxH}h/day. You need at least {minH}h/day — try raising your max or reducing rest days.",
    notion_study_hour:     'Study for {n} hour',
    notion_study_hours:    'Study for {n} hours',
    notion_total:          'Total: {total}h across {days} days',
  },
  tr: {
    page_title:            'Çalışma Programı Oluşturucu',
    page_subtitle:         'Sınav bilgilerinizi girin ve günlük çalışma planınızı oluşturun.',
    nav_tools:             'Araçlar',
    nav_tool_name:         'Program Oluşturucu',
    mode_fill:             'Programı doldur',
    mode_target:           'Hedefe ulaş',
    hint_fill:             'Günlük limitinize kadar tüm müsait günleri doldurur.',
    hint_target:           'Belirli toplam saate ulaşana kadar saatleri dağıtır.',
    label_exam_date:       'Sınav Tarihi',
    label_total_hours:     'Toplam Çalışma Saati',
    label_hours_day:       'Günlük Saat',
    label_rest_days:       'Haftalık Dinlenme Günü',
    label_optional:        '(isteğe bağlı)',
    placeholder_total:     'örn. 40',
    placeholder_hours:     'örn. 4',
    placeholder_rest:      'örn. 1',
    btn_generate:          'Program Oluştur',
    btn_print:             'Yazdır / PDF Kaydet',
    btn_notion:            'Notion için Kopyala',
    btn_raw:               'Düz Metin Kopyala',
    btn_export_cal:        'Takvime Aktar',
    btn_download_ics:      '.ics İndir',
    cal_panel_title:       'Takvime Aktar (.ics)',
    label_event_name:      'Etkinlik Adı',
    label_start_time:      'Başlangıç Saati',
    event_name_default:    'Çalışma Seansı',
    view_list:             'Liste',
    view_calendar:         'Takvim',
    output_title:          'Çalışma Programı',
    exam_on:               'Sınav: {date}',
    summary_days:          '{n} çalışma günü',
    summary_total:         'Toplam {n} saat',
    col_date:              'Tarih',
    col_hours:             'Saat',
    col_cumulative:        'Toplam',
    col_remaining:         'Kalan',
    col_notes:             'Notlar',
    week_label:            'H{n} · {date}',
    copied:                'Kopyalandı!',
    copy_failed:           'Başarısız',
    err_exam_required:     'Sınav tarihi gereklidir.',
    err_hours_invalid:     'Toplam çalışma saati pozitif bir sayı olmalıdır.',
    err_max_hours_invalid: 'Günlük saat 0 ile 23 arasında pozitif bir sayı olmalıdır.',
    err_rest_invalid:      'Haftalık dinlenme günü 0 ile 6 arasında olmalıdır.',
    err_exam_future:       'Sınav tarihi gelecekte olmalıdır.',
    warn_impossible:       'Sınava kadar müsait çalışma günü yok. Dinlenme günlerini azaltın veya daha ileri bir tarih seçin.',
    warn_overflow:         '{hours} saat, {days} günde günlük {maxH} saatle sığmıyor. En az {minH} saat/gün gerekiyor — limitinizi artırın veya dinlenme günlerini azaltın.',
    notion_study_hour:     '{n} saat çalış',
    notion_study_hours:    '{n} saat çalış',
    notion_total:          'Toplam: {total} saat, {days} gün',
  },
  es: {
    page_title:            'Generador de Horario de Estudio',
    page_subtitle:         'Ingresa los detalles de tu examen y obtén un plan de estudio diario.',
    nav_tools:             'Herramientas',
    nav_tool_name:         'Planificador',
    mode_fill:             'Llenar mi horario',
    mode_target:           'Alcanzar un objetivo',
    hint_fill:             'Llena cada día disponible hasta tu límite diario.',
    hint_target:           'Distribuye las horas para alcanzar un total exacto.',
    label_exam_date:       'Fecha del Examen',
    label_total_hours:     'Total de Horas de Estudio',
    label_hours_day:       'Horas por Día',
    label_rest_days:       'Días de Descanso por Semana',
    label_optional:        '(opcional)',
    placeholder_total:     'ej. 40',
    placeholder_hours:     'ej. 4',
    placeholder_rest:      'ej. 1',
    btn_generate:          'Generar Horario',
    btn_print:             'Imprimir / Guardar PDF',
    btn_notion:            'Copiar para Notion',
    btn_raw:               'Copiar Texto',
    btn_export_cal:        'Exportar al Calendario',
    btn_download_ics:      'Descargar .ics',
    cal_panel_title:       'Exportar al Calendario (.ics)',
    label_event_name:      'Nombre del Evento',
    label_start_time:      'Hora de Inicio',
    event_name_default:    'Sesión de Estudio',
    view_list:             'Lista',
    view_calendar:         'Calendario',
    output_title:          'Horario de Estudio',
    exam_on:               'Examen el {date}',
    summary_days:          '{n} días de estudio',
    summary_total:         '{n}h en total',
    col_date:              'Fecha',
    col_hours:             'Horas',
    col_cumulative:        'Acumulado',
    col_remaining:         'Restante',
    col_notes:             'Notas',
    week_label:            'S{n} · {date}',
    copied:                '¡Copiado!',
    copy_failed:           'Error',
    err_exam_required:     'La fecha del examen es obligatoria.',
    err_hours_invalid:     'Las horas totales deben ser un número positivo.',
    err_max_hours_invalid: 'Las horas por día deben ser un número positivo no mayor a 23.',
    err_rest_invalid:      'Los días de descanso deben estar entre 0 y 6.',
    err_exam_future:       'La fecha del examen debe ser en el futuro.',
    warn_impossible:       'No hay días de estudio disponibles antes del examen. Reduce los días de descanso o elige una fecha posterior.',
    warn_overflow:         '{hours}h no caben en {days} días a {maxH}h/día. Necesitas al menos {minH}h/día — aumenta tu límite o reduce los días de descanso.',
    notion_study_hour:     'Estudiar {n} hora',
    notion_study_hours:    'Estudiar {n} horas',
    notion_total:          'Total: {total}h en {days} días',
  },
  fr: {
    page_title:            "Générateur de Planning d'Étude",
    page_subtitle:         "Entrez les détails de votre examen et obtenez un plan d'étude jour par jour.",
    nav_tools:             'Outils',
    nav_tool_name:         'Planificateur',
    mode_fill:             'Remplir mon planning',
    mode_target:           'Atteindre un objectif',
    hint_fill:             "Remplit chaque jour disponible jusqu'à votre limite quotidienne.",
    hint_target:           'Répartit les heures pour atteindre un total exact.',
    label_exam_date:       "Date de l'Examen",
    label_total_hours:     "Total d'Heures d'Étude",
    label_hours_day:       'Heures par Jour',
    label_rest_days:       'Jours de Repos par Semaine',
    label_optional:        '(optionnel)',
    placeholder_total:     'ex. 40',
    placeholder_hours:     'ex. 4',
    placeholder_rest:      'ex. 1',
    btn_generate:          'Générer le Planning',
    btn_print:             'Imprimer / Sauvegarder PDF',
    btn_notion:            'Copier pour Notion',
    btn_raw:               'Copier le Texte',
    btn_export_cal:        'Exporter vers Calendrier',
    btn_download_ics:      'Télécharger .ics',
    cal_panel_title:       'Exporter vers Calendrier (.ics)',
    label_event_name:      "Nom de l'Événement",
    label_start_time:      'Heure de Début',
    event_name_default:    "Session d'Étude",
    view_list:             'Liste',
    view_calendar:         'Calendrier',
    output_title:          "Planning d'Étude",
    exam_on:               'Examen le {date}',
    summary_days:          "{n} jours d'étude",
    summary_total:         '{n}h au total',
    col_date:              'Date',
    col_hours:             'Heures',
    col_cumulative:        'Cumulé',
    col_remaining:         'Restant',
    col_notes:             'Notes',
    week_label:            'S{n} · {date}',
    copied:                'Copié !',
    copy_failed:           'Échec',
    err_exam_required:     "La date de l'examen est requise.",
    err_hours_invalid:     'Le total des heures doit être un nombre positif.',
    err_max_hours_invalid: 'Les heures par jour doivent être un nombre positif inférieur ou égal à 23.',
    err_rest_invalid:      'Les jours de repos doivent être entre 0 et 6.',
    err_exam_future:       "La date de l'examen doit être dans le futur.",
    warn_impossible:       "Aucun jour d'étude disponible avant l'examen. Réduisez les jours de repos ou choisissez une date ultérieure.",
    warn_overflow:         "{hours}h ne rentrent pas dans {days} jours à {maxH}h/jour. Il vous faut au moins {minH}h/jour — augmentez votre limite ou réduisez les jours de repos.",
    notion_study_hour:     'Étudier {n} heure',
    notion_study_hours:    'Étudier {n} heures',
    notion_total:          'Total : {total}h sur {days} jours',
  },
  de: {
    page_title:            'Lernplan-Generator',
    page_subtitle:         'Gib deine Prüfungsdetails ein und erhalte einen täglichen Lernplan.',
    nav_tools:             'Werkzeuge',
    nav_tool_name:         'Lernplaner',
    mode_fill:             'Plan füllen',
    mode_target:           'Ziel erreichen',
    hint_fill:             'Füllt jeden verfügbaren Tag bis zu deinem täglichen Limit.',
    hint_target:           'Verteilt Stunden, um eine genaue Gesamtstundenzahl zu erreichen.',
    label_exam_date:       'Prüfungsdatum',
    label_total_hours:     'Gesamte Lernstunden',
    label_hours_day:       'Stunden pro Tag',
    label_rest_days:       'Ruhetage pro Woche',
    label_optional:        '(optional)',
    placeholder_total:     'z.B. 40',
    placeholder_hours:     'z.B. 4',
    placeholder_rest:      'z.B. 1',
    btn_generate:          'Plan erstellen',
    btn_print:             'Drucken / PDF speichern',
    btn_notion:            'Für Notion kopieren',
    btn_raw:               'Text kopieren',
    btn_export_cal:        'In Kalender exportieren',
    btn_download_ics:      '.ics herunterladen',
    cal_panel_title:       'In Kalender exportieren (.ics)',
    label_event_name:      'Ereignisname',
    label_start_time:      'Startzeit',
    event_name_default:    'Lernsitzung',
    view_list:             'Liste',
    view_calendar:         'Kalender',
    output_title:          'Lernplan',
    exam_on:               'Prüfung am {date}',
    summary_days:          '{n} Lerntage',
    summary_total:         '{n}h gesamt',
    col_date:              'Datum',
    col_hours:             'Stunden',
    col_cumulative:        'Kumuliert',
    col_remaining:         'Verbleibend',
    col_notes:             'Notizen',
    week_label:            'W{n} · {date}',
    copied:                'Kopiert!',
    copy_failed:           'Fehlgeschlagen',
    err_exam_required:     'Prüfungsdatum ist erforderlich.',
    err_hours_invalid:     'Gesamte Lernstunden müssen eine positive Zahl sein.',
    err_max_hours_invalid: 'Stunden pro Tag müssen eine positive Zahl bis maximal 23 sein.',
    err_rest_invalid:      'Ruhetage pro Woche müssen zwischen 0 und 6 liegen.',
    err_exam_future:       'Das Prüfungsdatum muss in der Zukunft liegen.',
    warn_impossible:       'Keine verfügbaren Lerntage vor der Prüfung. Reduziere Ruhetage oder wähle ein späteres Datum.',
    warn_overflow:         '{hours}h passen nicht in {days} Tage bei {maxH}h/Tag. Du brauchst mindestens {minH}h/Tag — erhöhe dein Limit oder reduziere Ruhetage.',
    notion_study_hour:     '{n} Stunde lernen',
    notion_study_hours:    '{n} Stunden lernen',
    notion_total:          'Gesamt: {total}h über {days} Tage',
  },
  ru: {
    page_title:            'Генератор расписания занятий',
    page_subtitle:         'Введите данные экзамена и получите пошаговый план учёбы.',
    nav_tools:             'Инструменты',
    nav_tool_name:         'Планировщик',
    mode_fill:             'Заполнить расписание',
    mode_target:           'Достичь цели',
    hint_fill:             'Заполняет каждый доступный день до вашего дневного лимита.',
    hint_target:           'Распределяет часы для достижения точной суммы.',
    label_exam_date:       'Дата экзамена',
    label_total_hours:     'Всего часов занятий',
    label_hours_day:       'Часов в день',
    label_rest_days:       'Дней отдыха в неделю',
    label_optional:        '(необязательно)',
    placeholder_total:     'напр. 40',
    placeholder_hours:     'напр. 4',
    placeholder_rest:      'напр. 1',
    btn_generate:          'Составить расписание',
    btn_print:             'Печать / Сохранить PDF',
    btn_notion:            'Скопировать для Notion',
    btn_raw:               'Скопировать текст',
    btn_export_cal:        'Экспорт в календарь',
    btn_download_ics:      'Скачать .ics',
    cal_panel_title:       'Экспорт в календарь (.ics)',
    label_event_name:      'Название события',
    label_start_time:      'Время начала',
    event_name_default:    'Учебная сессия',
    view_list:             'Список',
    view_calendar:         'Календарь',
    output_title:          'Расписание занятий',
    exam_on:               'Экзамен {date}',
    summary_days:          '{n} учебных дней',
    summary_total:         'Всего {n}ч',
    col_date:              'Дата',
    col_hours:             'Часы',
    col_cumulative:        'Накопленные',
    col_remaining:         'Остаток',
    col_notes:             'Заметки',
    week_label:            'Н{n} · {date}',
    copied:                'Скопировано!',
    copy_failed:           'Ошибка',
    err_exam_required:     'Укажите дату экзамена.',
    err_hours_invalid:     'Количество часов должно быть положительным числом.',
    err_max_hours_invalid: 'Часов в день должно быть от 0 до 23.',
    err_rest_invalid:      'Дней отдыха в неделю должно быть от 0 до 6.',
    err_exam_future:       'Дата экзамена должна быть в будущем.',
    warn_impossible:       'Нет доступных дней для учёбы до экзамена. Уберите дни отдыха или выберите более позднюю дату.',
    warn_overflow:         '{hours}ч не помещается в {days} дней при {maxH}ч/день. Нужно минимум {minH}ч/день — увеличьте лимит или уменьшите дни отдыха.',
    notion_study_hour:     'Учиться {n} час',
    notion_study_hours:    'Учиться {n} часа',
    notion_total:          'Итого: {total}ч за {days} дней',
  },
};

const LOCALE = (() => {
  const lang = (navigator.language || 'en').split('-')[0].toLowerCase();
  return Object.prototype.hasOwnProperty.call(STRINGS, lang) ? lang : 'en';
})();

function t(key, params = {}) {
  const str = STRINGS[LOCALE]?.[key] ?? STRINGS.en[key] ?? key;
  return str.replace(/\{(\w+)\}/g, (_, k) => String(params[k] ?? ''));
}

function applyLocale() {
  document.documentElement.lang = LOCALE;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.querySelectorAll('[data-i18n-value]').forEach(el => {
    el.value = t(el.dataset.i18nValue);
  });
}

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
  btn.textContent = success ? t('copied') : t('copy_failed');
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

  if (!examDateVal) errors.push(t('err_exam_required'));
  if (mode === 'target' && (!totalHoursVal || isNaN(totalHoursVal) || Number(totalHoursVal) <= 0))
    errors.push(t('err_hours_invalid'));
  if (!maxHoursVal || isNaN(maxHoursVal) || Number(maxHoursVal) <= 0 || Number(maxHoursVal) > 23)
    errors.push(t('err_max_hours_invalid'));
  if (isNaN(restDaysVal) || Number(restDaysVal) < 0 || Number(restDaysVal) > 6)
    errors.push(t('err_rest_invalid'));

  if (errors.length) throw new Error(errors.join(' '));

  const examDate = new Date(examDateVal + 'T00:00:00');
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (examDate <= today) throw new Error(t('err_exam_future'));

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
      warning: { type: 'impossible', msg: t('warn_impossible') },
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
      msg: t('warn_overflow', { hours: totalHours, days: workDays.length, maxH: maxHoursPerDay, minH: minNeeded }),
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
  const diff = (d.getDay() + 6) % 7;
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
        <th>${t('col_date')}</th>
        <th>${t('col_hours')}</th>
        <th>${isFill ? t('col_cumulative') : t('col_remaining')}</th>
        <th class="col-notes">${t('col_notes')}</th>
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

  const DAY_NAMES = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(2025, 0, 6 + i);
    return d.toLocaleDateString(undefined, { weekday: 'short' });
  });

  const scheduleMap = new Map(schedule.map(e => [dateKey(e.date), e.hours]));
  const workDaySet = new Set(buildWorkDays(examDate, restDaysPerWeek).map(d => dateKey(d)));

  const weekStart = getMondayOf(startDay);
  const lastStudyDay = new Date(examDate);
  lastStudyDay.setDate(lastStudyDay.getDate() - 1);
  const weekEnd = getMondayOf(lastStudyDay);
  weekEnd.setDate(weekEnd.getDate() + 6);

  const table = document.createElement('table');
  table.className = 'cal-table';

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

    const th = document.createElement('th');
    th.className = 'cal-week-label';
    th.textContent = t('week_label', { n: weekNum, date: weekLabel });
    tr.appendChild(th);

    for (let d = 0; d < 7; d++) {
      const day = new Date(cursor);
      day.setDate(cursor.getDate() + d);
      const key = dateKey(day);

      const td = document.createElement('td');
      td.className = 'cal-cell';

      if (day < startDay || day >= examDate) {
        td.classList.add('cal-empty');
        if (day.getTime() === examDate.getTime()) {
          td.classList.add('cal-exam');
          td.textContent = '★';
        }
      } else if (scheduleMap.has(key)) {
        td.classList.add('cal-study');
        td.innerHTML = `${scheduleMap.get(key)}h<span class="cal-print-check"><input type="checkbox" /></span>`;
      } else if (!workDaySet.has(key)) {
        td.classList.add('cal-rest');
        td.textContent = '—';
      } else {
        td.classList.add('cal-free');
        td.textContent = '·';
      }

      tr.appendChild(td);
    }

    tbody.appendChild(tr);

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
    <div class="output-title-main">${t('output_title')}</div>
    <div class="output-title-sub">${t('exam_on', { date: examDateFormatted })}</div>
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
  summary.innerHTML = `<span>${t('summary_days', { n: schedule.length })}</span><span>${t('summary_total', { n: totalAssigned })}</span>`;
  container.appendChild(summary);

  // View toggle
  const viewToggle = document.createElement('div');
  viewToggle.className = 'view-toggle no-print';
  viewToggle.innerHTML = `
    <button class="view-btn active" data-view="list">${t('view_list')}</button>
    <button class="view-btn" data-view="calendar">${t('view_calendar')}</button>
  `;
  container.appendChild(viewToggle);

  const tableArea = document.createElement('div');
  container.appendChild(tableArea);

  renderListView(tableArea, schedule, mode);

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
  const lines = [`# ${t('output_title')}\n`];
  schedule.forEach((entry, i) => {
    lines.push(`## ${t('col_date')} ${i + 1} — ${formatDate(entry.date)}`);
    const studyLine = entry.hours === 1
      ? t('notion_study_hour', { n: entry.hours })
      : t('notion_study_hours', { n: entry.hours });
    lines.push(`- [ ] ${studyLine}\n`);
  });
  const total = schedule.reduce((s, d) => s + d.hours, 0);
  lines.push('---');
  lines.push(`**${t('notion_total', { total, days: schedule.length })}**`);
  return lines.join('\n');
}

function formatAsPlainText(schedule) {
  const title = t('output_title').toUpperCase();
  const lines = [title, '='.repeat(title.length), ''];
  schedule.forEach((entry, i) => {
    lines.push(`${t('col_date')} ${i + 1}  ${formatDate(entry.date)}  —  ${entry.hours}h`);
  });
  const total = schedule.reduce((s, d) => s + d.hours, 0);
  lines.push('');
  lines.push(t('notion_total', { total, days: schedule.length }));
  return lines.join('\n');
}

function formatForICalendar(schedule, eventName, startTime) {
  const [startHour, startMin] = startTime.split(':').map(Number);
  const name = eventName.trim() || t('event_name_default');

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
  // Apply locale first
  applyLocale();

  // Restore theme
  const savedTheme = localStorage.getItem('theme') || 'pastel';
  applyTheme(savedTheme);

  // Theme switcher
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', () => applyTheme(btn.dataset.theme));
  });

  // Mode toggle
  const modeHints = {
    fill:   t('hint_fill'),
    target: t('hint_target'),
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
