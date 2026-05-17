const STORAGE_KEY = "antonki.tutor.data.v1";

const seedData = {
  people: {
    teacher: {
      id: "teacher",
      name: "Антон Антонкин",
      title: "репетитор по биологии и химии",
      initials: "АА"
    },
    parent: {
      id: "parent",
      name: "Мария Орлова",
      title: "родитель",
      initials: "МО",
      studentId: "s1"
    }
  },
  students: [
    {
      id: "s1",
      name: "Варя Орлова",
      title: "9 класс",
      initials: "ВО",
      streak: 5,
      target: "ОГЭ по биологии",
      parentId: "parent"
    },
    {
      id: "s2",
      name: "Илья Морозов",
      title: "10 класс",
      initials: "ИМ",
      streak: 3,
      target: "ЕГЭ по химии",
      parentId: "parent"
    },
    {
      id: "s3",
      name: "Алина Ким",
      title: "8 класс",
      initials: "АК",
      streak: 2,
      target: "Школьная программа",
      parentId: "parent"
    }
  ],
  courses: [
    {
      id: "bio",
      title: "Биология",
      subject: "Естественные науки",
      accent: "#22c55e",
      modules: [
        {
          id: "bio-general",
          title: "Общая биология",
          summary: "Клетка, наследственность и обмен веществ",
          lessons: [
            {
              id: "bio-1",
              number: 1,
              title: "Клетка как система",
              due: "2026-05-18",
              videoUrl: "https://www.youtube.com/watch?v=URUJD5NEXC8",
              material: "Строение клетки, органоиды и их функции. Отдельно проверь мембраны и ядро.",
              task: "Составить схему животной клетки и подписать 8 органоидов.",
              assignedTo: ["s1", "s2"],
              quiz: [
                {
                  id: "bio-1-q1",
                  type: "single",
                  prompt: "Какой органоид отвечает за синтез белка?",
                  options: ["Рибосома", "Лизосома", "Вакуоль", "Клеточная стенка"],
                  answer: "Рибосома"
                },
                {
                  id: "bio-1-q2",
                  type: "match",
                  prompt: "Соотнесите органоид и функцию.",
                  pairs: [
                    ["Митохондрия", "Энергия"],
                    ["Ядро", "Хранение ДНК"],
                    ["Рибосома", "Синтез белка"]
                  ]
                },
                {
                  id: "bio-1-q3",
                  type: "image",
                  prompt: "На схеме выделена структура с двойной мембраной. Что это?",
                  imageLabel: "клетка",
                  options: ["Митохондрия", "Рибосома", "Цитоплазма"],
                  answer: "Митохондрия"
                }
              ]
            },
            {
              id: "bio-2",
              number: 2,
              title: "Деление клетки",
              due: "2026-05-20",
              videoUrl: "https://www.youtube.com/watch?v=VzDMG7ke69g",
              material: "Митоз, мейоз, интерфаза. Сфокусируйся на отличиях набора хромосом.",
              task: "Решить 10 задач на определение фаз митоза.",
              assignedTo: ["s1"],
              quiz: [
                {
                  id: "bio-2-q1",
                  type: "single",
                  prompt: "В какой фазе хромосомы расходятся к полюсам?",
                  options: ["Профаза", "Метафаза", "Анафаза", "Телофаза"],
                  answer: "Анафаза"
                }
              ]
            },
            {
              id: "bio-3",
              number: 3,
              title: "Основы генетики",
              due: "2026-05-23",
              videoUrl: "https://www.youtube.com/watch?v=Qcmdb25Rnyo",
              material: "Моногибридное скрещивание, генотип, фенотип, доминантный признак.",
              task: "Оформить две задачи по законам Менделя.",
              assignedTo: ["s1", "s3"],
              quiz: [
                {
                  id: "bio-3-q1",
                  type: "single",
                  prompt: "Как обозначают гетерозиготу?",
                  options: ["AA", "aa", "Aa", "A0"],
                  answer: "Aa"
                }
              ]
            },
            {
              id: "bio-4",
              number: 4,
              title: "Обмен веществ",
              due: "2026-05-25",
              videoUrl: "https://www.youtube.com/watch?v=RJXrY9b7Z8A",
              material: "Фотосинтез, дыхание, АТФ и ферменты.",
              task: "Заполнить таблицу: пластический и энергетический обмен.",
              assignedTo: ["s1", "s2", "s3"],
              quiz: [
                {
                  id: "bio-4-q1",
                  type: "single",
                  prompt: "Что является универсальным источником энергии клетки?",
                  options: ["АТФ", "ДНК", "Белок", "Вода"],
                  answer: "АТФ"
                }
              ]
            }
          ]
        },
        {
          id: "anatomy",
          title: "Анатомия",
          summary: "Органы и системы человека",
          lessons: [
            {
              id: "anatomy-1",
              number: 1,
              title: "Кровь и иммунитет",
              due: "2026-05-24",
              videoUrl: "https://www.youtube.com/watch?v=9rL2qOlkFh0",
              material: "Форменные элементы крови, иммунный ответ и группы крови.",
              task: "Сделать конспект по типам лейкоцитов.",
              assignedTo: ["s1", "s3"],
              quiz: [
                {
                  id: "anatomy-1-q1",
                  type: "single",
                  prompt: "Какие клетки переносят кислород?",
                  options: ["Эритроциты", "Тромбоциты", "Нейроны"],
                  answer: "Эритроциты"
                }
              ]
            }
          ]
        },
        {
          id: "botany",
          title: "Ботаника",
          summary: "Растения, ткани и жизненные циклы",
          lessons: [
            {
              id: "botany-1",
              number: 1,
              title: "Ткани растений",
              due: "2026-05-28",
              videoUrl: "https://www.youtube.com/watch?v=bEl2oxH0j4c",
              material: "Образовательная, покровная, проводящая и механическая ткани.",
              task: "Найти примеры тканей в листе и стебле.",
              assignedTo: ["s1"],
              quiz: []
            }
          ]
        }
      ]
    },
    {
      id: "chem",
      title: "Химия",
      subject: "Естественные науки",
      accent: "#38bdf8",
      modules: [
        {
          id: "chem-base",
          title: "Основы химии",
          summary: "Атомы, валентность и реакции",
          lessons: [
            {
              id: "chem-1",
              number: 1,
              title: "Строение атома",
              due: "2026-05-19",
              videoUrl: "https://www.youtube.com/watch?v=FSyAehMdpyI",
              material: "Протоны, нейтроны, электроны, изотопы и заряд ядра.",
              task: "Определить состав атома для пяти элементов.",
              assignedTo: ["s2"],
              quiz: [
                {
                  id: "chem-1-q1",
                  type: "single",
                  prompt: "Какая частица имеет отрицательный заряд?",
                  options: ["Протон", "Нейтрон", "Электрон"],
                  answer: "Электрон"
                }
              ]
            },
            {
              id: "chem-2",
              number: 2,
              title: "Типы реакций",
              due: "2026-05-27",
              videoUrl: "https://www.youtube.com/watch?v=4_qkR3PZQKc",
              material: "Соединение, разложение, замещение и обмен.",
              task: "Классифицировать 12 уравнений реакций.",
              assignedTo: ["s1", "s2"],
              quiz: []
            }
          ]
        }
      ]
    }
  ],
  submissions: [
    {
      id: "sub-1",
      studentId: "s1",
      lessonId: "bio-1",
      score: 92,
      completedAt: "2026-05-14T14:30:00.000Z",
      minutes: 38,
      answers: {
        "bio-1-q1": "Рибосома"
      }
    },
    {
      id: "sub-2",
      studentId: "s1",
      lessonId: "bio-2",
      score: 76,
      completedAt: "2026-05-15T16:15:00.000Z",
      minutes: 31,
      answers: {
        "bio-2-q1": "Анафаза"
      }
    },
    {
      id: "sub-3",
      studentId: "s2",
      lessonId: "chem-1",
      score: 84,
      completedAt: "2026-05-16T12:10:00.000Z",
      minutes: 28,
      answers: {
        "chem-1-q1": "Электрон"
      }
    }
  ],
  messages: [
    {
      id: "msg-1",
      from: "teacher",
      to: "s1",
      text: "Варя, в заданиях по клетке отлично пошла схема. Проверь подписи у мембраны.",
      at: "2026-05-16T13:45:00.000Z"
    },
    {
      id: "msg-2",
      from: "s1",
      to: "teacher",
      text: "Поняла, сегодня исправлю и пройду следующий урок.",
      at: "2026-05-16T14:05:00.000Z"
    }
  ]
};

let db = loadData();
let state = {
  role: "student",
  view: "courses",
  courseId: null,
  moduleId: null,
  lessonId: null,
  selectedStudentId: "s1",
  answers: {}
};

const app = document.querySelector("#app");
const toast = document.querySelector("#toast");

const navByRole = {
  student: [
    ["account", "аккаунт", "user"],
    ["courses", "курсы", "folder"],
    ["assignments", "задания", "check"],
    ["chat", "чат", "message"]
  ],
  teacher: [
    ["dashboard", "обзор", "chart"],
    ["students", "ученики", "users"],
    ["builder", "конструктор", "plus"],
    ["chat", "чат", "message"]
  ],
  parent: [
    ["overview", "статистика", "chart"],
    ["grades", "оценки", "check"],
    ["chat", "чат", "message"]
  ]
};

const roleMeta = {
  student: ["ученик", "ВО"],
  teacher: ["учитель", "АА"],
  parent: ["родитель", "МО"]
};

const icons = {
  user: '<path d="M20 21a8 8 0 0 0-16 0"/><circle cx="12" cy="7" r="4"/>',
  folder: '<path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',
  check: '<path d="m20 6-11 11-5-5"/>',
  message: '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/>',
  chart: '<path d="M4 19V5"/><path d="M4 19h16"/><path d="M8 16v-5"/><path d="M12 16V8"/><path d="M16 16v-3"/>',
  plus: '<path d="M12 5v14"/><path d="M5 12h14"/>',
  play: '<path d="M8 5v14l11-7Z"/>',
  arrow: '<path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>',
  send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
  refresh: '<path d="M21 12a9 9 0 1 1-2.64-6.36"/><path d="M21 3v6h-6"/>',
  edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'
};

function svg(name) {
  return `<svg aria-hidden="true" viewBox="0 0 24 24">${icons[name] || icons.check}</svg>`;
}

function loadData() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return structuredClone(seedData);

  try {
    return JSON.parse(saved);
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return structuredClone(seedData);
  }
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
}

function resetData() {
  db = structuredClone(seedData);
  state = {
    role: "student",
    view: "courses",
    courseId: null,
    moduleId: null,
    lessonId: null,
    selectedStudentId: "s1",
    answers: {}
  };
  saveData();
  notify("Демо-данные восстановлены");
  render();
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function uid(prefix) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

function notify(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(notify.timer);
  notify.timer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function allLessons() {
  return db.courses.flatMap((course) =>
    course.modules.flatMap((module) =>
      module.lessons.map((lesson) => ({ course, module, lesson }))
    )
  );
}

function findCourse(courseId = state.courseId) {
  return db.courses.find((course) => course.id === courseId);
}

function findModule(courseId = state.courseId, moduleId = state.moduleId) {
  return findCourse(courseId)?.modules.find((module) => module.id === moduleId);
}

function findLesson(lessonId = state.lessonId) {
  return allLessons().find((entry) => entry.lesson.id === lessonId);
}

function selectedStudent() {
  return db.students.find((student) => student.id === state.selectedStudentId) || db.students[0];
}

function activePerson() {
  if (state.role === "teacher") return db.people.teacher;
  if (state.role === "parent") return db.people.parent;
  return selectedStudent();
}

function submissionsFor(studentId) {
  return db.submissions.filter((submission) => submission.studentId === studentId);
}

function submissionFor(studentId, lessonId) {
  return db.submissions.find(
    (submission) => submission.studentId === studentId && submission.lessonId === lessonId
  );
}

function lessonsForStudent(studentId) {
  return allLessons().filter(({ lesson }) => lesson.assignedTo.includes(studentId));
}

function progressFor(studentId) {
  const lessons = lessonsForStudent(studentId);
  const submissions = submissionsFor(studentId);
  const completed = lessons.filter(({ lesson }) => submissionFor(studentId, lesson.id)).length;
  const average = submissions.length
    ? Math.round(submissions.reduce((sum, item) => sum + item.score, 0) / submissions.length)
    : 0;
  return {
    total: lessons.length,
    completed,
    average,
    pending: Math.max(lessons.length - completed, 0),
    percent: lessons.length ? Math.round((completed / lessons.length) * 100) : 0
  };
}

function aggregateProgress() {
  const assigned = db.students.reduce((sum, student) => sum + lessonsForStudent(student.id).length, 0);
  const completed = db.submissions.length;
  const average = db.submissions.length
    ? Math.round(db.submissions.reduce((sum, item) => sum + item.score, 0) / db.submissions.length)
    : 0;

  return {
    total: assigned,
    completed,
    average,
    pending: Math.max(assigned - completed, 0),
    percent: assigned ? Math.round((completed / assigned) * 100) : 0
  };
}

function topbarProgress() {
  if (state.role === "teacher") return aggregateProgress();
  if (state.role === "parent") {
    const childId = db.people.parent.studentId;
    return progressFor(childId);
  }
  return progressFor(selectedStudent().id);
}

function lessonState(studentId, lesson) {
  const submission = submissionFor(studentId, lesson.id);
  if (submission) return submission.score >= 80 ? "done" : "review";
  return "todo";
}

function stateLabel(value) {
  return {
    done: "готово",
    review: "разобрать",
    todo: "к выполнению"
  }[value];
}

function displayDate(value) {
  return new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
    month: "short"
  }).format(new Date(value));
}

function scoreTone(score) {
  if (score >= 80) return "good";
  if (score >= 60) return "warn";
  return "bad";
}

function render() {
  app.innerHTML = `
    <div class="app-shell">
      ${renderSidebar()}
      <main class="workspace">
        ${renderTopbar()}
        ${renderView()}
      </main>
    </div>
  `;
}

function renderAtTop() {
  render();
  requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: "auto" }));
}

function renderSidebar() {
  const person = activePerson();
  const nav = navByRole[state.role];

  return `
    <aside class="sidebar">
      <button class="account-tile" data-action="set-view" data-view="${state.role === "parent" ? "overview" : "account"}">
        <span class="avatar">${escapeHtml(person.initials)}</span>
        <span>
          <strong>аккаунт</strong>
          <small>${escapeHtml(roleMeta[state.role][0])}</small>
        </span>
      </button>

      <div class="role-switch" role="group" aria-label="Роль">
        ${Object.entries(roleMeta)
          .map(
            ([role, [label]]) => `
              <button class="${state.role === role ? "active" : ""}" data-action="set-role" data-role="${role}">
                ${escapeHtml(label)}
              </button>
            `
          )
          .join("")}
      </div>

      <nav class="main-nav" aria-label="Основная навигация">
        ${nav
          .map(
            ([view, label, icon]) => `
              <button class="${state.view === view ? "active" : ""}" data-action="set-view" data-view="${view}">
                ${svg(icon)}
                <span>${escapeHtml(label)}</span>
              </button>
            `
          )
          .join("")}
      </nav>

      <button class="reset-button" data-action="reset-data">
        ${svg("refresh")}
        <span>сброс</span>
      </button>
    </aside>
  `;
}

function renderTopbar() {
  const person = activePerson();
  const progress = topbarProgress();
  const title = state.role === "student" ? "antonki.tutor" : person.name;

  return `
    <header class="topbar">
      <div>
        <p>${escapeHtml(person.title)}</p>
        <h1>${escapeHtml(title)}</h1>
      </div>
      <div class="topbar-stats">
        <span><strong>${progress.percent}%</strong> прогресс</span>
        <span><strong>${progress.average}</strong> средний балл</span>
      </div>
    </header>
  `;
}

function renderView() {
  if (state.role === "teacher") return renderTeacherView();
  if (state.role === "parent") return renderParentView();
  return renderStudentView();
}

function renderStudentView() {
  if (state.view === "account") return renderStudentAccount();
  if (state.view === "assignments") return renderStudentAssignments();
  if (state.view === "chat") return renderChat();
  return renderCourses();
}

function renderTeacherView() {
  if (state.view === "students") return renderTeacherStudents();
  if (state.view === "builder") return renderBuilder();
  if (state.view === "chat") return renderChat();
  return renderTeacherDashboard();
}

function renderParentView() {
  if (state.view === "grades") return renderParentGrades();
  if (state.view === "chat") return renderChat();
  return renderParentOverview();
}

function renderStudentAccount() {
  const student = selectedStudent();
  const progress = progressFor(student.id);
  const last = submissionsFor(student.id).at(-1);

  return `
    <section class="view-grid account-view">
      <article class="identity-panel">
        <span class="avatar hero-avatar">${escapeHtml(student.initials)}</span>
        <div>
          <p>личный кабинет</p>
          <h2>${escapeHtml(student.name)}</h2>
          <span>${escapeHtml(student.title)} · ${escapeHtml(student.target)}</span>
        </div>
      </article>
      <article class="metric-board">
        ${metric("пройдено", `${progress.completed}/${progress.total}`)}
        ${metric("средний балл", progress.average || "—")}
        ${metric("серия", `${student.streak} занятий`)}
        ${metric("к выполнению", progress.pending)}
      </article>
      <article class="wide-panel">
        <div class="section-heading">
          <h2>ближайший фокус</h2>
          <button class="icon-button" data-action="set-view" data-view="assignments" title="Открыть задания">${svg("arrow")}</button>
        </div>
        ${renderUpcoming(student.id)}
      </article>
      <article class="wide-panel">
        <div class="section-heading">
          <h2>последний результат</h2>
        </div>
        ${
          last
            ? `<div class="result-line">
                <span class="score ${scoreTone(last.score)}">${last.score}</span>
                <div>
                  <strong>${escapeHtml(findLesson(last.lessonId)?.lesson.title || "урок")}</strong>
                  <small>${displayDate(last.completedAt)} · ${last.minutes} мин</small>
                </div>
              </div>`
            : `<p class="muted">Пока нет завершённых уроков.</p>`
        }
      </article>
    </section>
  `;
}

function renderCourses() {
  if (state.lessonId) return renderLesson();
  if (state.moduleId) return renderLessonGrid();
  if (state.courseId) return renderModuleGrid();

  return `
    <section class="content-flow">
      <div class="page-title">
        <h2>курсы</h2>
        <p>Папки предметов с назначенными модулями и уроками.</p>
      </div>
      <div class="folder-grid">
        ${db.courses
          .map((course) => {
            const total = course.modules.reduce((sum, module) => sum + module.lessons.length, 0);
            return `
              <button class="folder-card" data-action="open-course" data-course-id="${course.id}">
                <span class="folder-shape" style="--accent:${course.accent}"></span>
                <strong>${escapeHtml(course.title)}</strong>
                <small>${total} уроков · ${escapeHtml(course.subject)}</small>
              </button>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderModuleGrid() {
  const course = findCourse();
  if (!course) return renderCourses();

  return `
    <section class="content-flow">
      ${breadcrumb("курсы", course.title, "back-courses")}
      <div class="page-title">
        <h2>модули</h2>
        <p>${escapeHtml(course.subject)}</p>
      </div>
      <div class="module-grid">
        ${course.modules
          .map(
            (module) => `
              <button class="module-card" data-action="open-module" data-module-id="${module.id}">
                <strong>${escapeHtml(module.title)}</strong>
                <span>${escapeHtml(module.summary || "Новый модуль")}</span>
                <small>${module.lessons.length} уроков</small>
              </button>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderLessonGrid() {
  const course = findCourse();
  const module = findModule();
  if (!course || !module) return renderCourses();
  const studentId = selectedStudent().id;

  return `
    <section class="lesson-map">
      ${breadcrumb(course.title, module.title, "back-modules")}
      <div class="page-title">
        <h2>уроки</h2>
        <p>${escapeHtml(module.summary || course.title)}</p>
      </div>
      <div class="lesson-dot-grid">
        ${module.lessons
          .map((lesson) => {
            const status = lessonState(studentId, lesson);
            return `
              <button
                class="lesson-dot ${status}"
                data-action="open-lesson"
                data-lesson-id="${lesson.id}"
                aria-label="${escapeHtml(lesson.title)}"
              >
                <strong>${lesson.number}</strong>
                <span>${escapeHtml(stateLabel(status))}</span>
              </button>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderLesson() {
  const entry = findLesson();
  if (!entry) return renderCourses();
  const { course, module, lesson } = entry;
  const studentId = selectedStudent().id;
  const submission = submissionFor(studentId, lesson.id);

  return `
    <section class="lesson-detail">
      ${breadcrumb(module.title, lesson.title, "back-lessons")}
      <div class="lesson-layout">
        <aside class="lesson-side">
          <h2>уроки</h2>
          <div class="mini-dots">
            ${module.lessons
              .map(
                (item) => `
                <button class="${item.id === lesson.id ? "active" : ""} ${lessonState(studentId, item)}" data-action="open-lesson" data-lesson-id="${item.id}">
                  ${item.number}
                </button>
              `
              )
              .join("")}
          </div>
        </aside>
        <article class="lesson-stage">
          <div class="video-frame" style="--accent:${course.accent}">
            ${svg("play")}
            <span>${escapeHtml(videoHost(lesson.videoUrl))}</span>
          </div>
          <div class="lesson-actions">
            <a href="${escapeHtml(lesson.videoUrl)}" target="_blank" rel="noreferrer" class="command-button">
              ${svg("play")}
              <span>открыть видео</span>
            </a>
            <button class="command-button secondary" data-action="complete-lesson" data-lesson-id="${lesson.id}">
              ${svg("check")}
              <span>${submission ? "обновить результат" : "сдать тест"}</span>
            </button>
          </div>
        </article>
        <article class="lesson-notes">
          <div>
            <h3>материалы</h3>
            <p>${escapeHtml(lesson.material)}</p>
          </div>
          <div>
            <h3>задание</h3>
            <p>${escapeHtml(lesson.task)}</p>
          </div>
          ${
            submission
              ? `<div class="result-line compact">
                  <span class="score ${scoreTone(submission.score)}">${submission.score}</span>
                  <div>
                    <strong>результат сохранён</strong>
                    <small>${displayDate(submission.completedAt)} · видно учителю</small>
                  </div>
                </div>`
              : ""
          }
        </article>
      </div>
      ${renderQuiz(lesson)}
    </section>
  `;
}

function renderQuiz(lesson) {
  if (!lesson.quiz.length) {
    return `
      <article class="quiz-panel">
        <div class="section-heading">
          <h2>тест</h2>
          <span class="pill">без вопросов</span>
        </div>
        <p class="muted">Для этого урока пока прикреплены только видео, материалы и задание.</p>
      </article>
    `;
  }

  return `
    <article class="quiz-panel">
      <div class="section-heading">
        <h2>тест</h2>
        <span class="pill">${lesson.quiz.length} вопроса</span>
      </div>
      <div class="quiz-list">
        ${lesson.quiz.map((question, index) => renderQuestion(question, index)).join("")}
      </div>
      <button class="command-button submit-quiz" data-action="submit-quiz" data-lesson-id="${lesson.id}">
        ${svg("send")}
        <span>отправить ответы</span>
      </button>
    </article>
  `;
}

function renderQuestion(question, index) {
  if (question.type === "match") return renderMatchQuestion(question, index);

  return `
    <section class="question-card">
      <div class="question-top">
        <span>${index + 1}</span>
        <h3>${escapeHtml(question.prompt)}</h3>
      </div>
      ${
        question.type === "image"
          ? `<div class="image-question"><span>${escapeHtml(question.imageLabel || "схема")}</span></div>`
          : ""
      }
      <div class="option-grid">
        ${question.options
          .map((option) => {
            const active = state.answers[question.id] === option ? "selected" : "";
            return `
              <button class="option-button ${active}" data-action="answer-question" data-question-id="${question.id}" data-value="${escapeHtml(option)}">
                ${escapeHtml(option)}
              </button>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderMatchQuestion(question, index) {
  const choices = question.pairs.map((pair) => pair[1]).sort();

  return `
    <section class="question-card">
      <div class="question-top">
        <span>${index + 1}</span>
        <h3>${escapeHtml(question.prompt)}</h3>
      </div>
      <div class="match-list">
        ${question.pairs
          .map(([left]) => {
            const selected = state.answers[question.id]?.[left] || "";
            return `
              <label>
                <span>${escapeHtml(left)}</span>
                <select data-match-question="${question.id}" data-match-left="${escapeHtml(left)}">
                  <option value="">выбрать</option>
                  ${choices
                    .map(
                      (choice) => `
                        <option value="${escapeHtml(choice)}" ${choice === selected ? "selected" : ""}>${escapeHtml(choice)}</option>
                      `
                    )
                    .join("")}
                </select>
              </label>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderStudentAssignments() {
  const student = selectedStudent();
  const lessons = lessonsForStudent(student.id);

  return `
    <section class="content-flow">
      <div class="page-title">
        <h2>задания</h2>
        <p>Все назначенные уроки, тесты и домашняя работа.</p>
      </div>
      <div class="assignment-list">
        ${lessons
          .map(({ course, module, lesson }) => {
            const submission = submissionFor(student.id, lesson.id);
            return `
              <article class="assignment-row">
                <span class="status-dot ${lessonState(student.id, lesson)}"></span>
                <div>
                  <strong>${escapeHtml(lesson.title)}</strong>
                  <small>${escapeHtml(course.title)} · ${escapeHtml(module.title)} · до ${displayDate(lesson.due)}</small>
                </div>
                <span class="row-score">${submission ? submission.score : "—"}</span>
                <button class="icon-button" data-action="jump-lesson" data-course-id="${course.id}" data-module-id="${module.id}" data-lesson-id="${lesson.id}" title="Открыть урок">
                  ${svg("arrow")}
                </button>
              </article>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderTeacherDashboard() {
  const aggregate = aggregateProgress();
  const recent = [...db.submissions]
    .sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt))
    .slice(0, 5);

  return `
    <section class="view-grid">
      <article class="metric-board wide">
        ${metric("ученики", db.students.length)}
        ${metric("сдано уроков", aggregate.completed)}
        ${metric("ожидают", aggregate.pending)}
        ${metric("средний балл", aggregate.average)}
      </article>

      <article class="wide-panel">
        <div class="section-heading">
          <h2>ученики</h2>
          <button class="command-button small" data-action="set-view" data-view="students">
            ${svg("users")}
            <span>журнал</span>
          </button>
        </div>
        <div class="student-strip">
          ${db.students
            .map((student) => {
              const progress = progressFor(student.id);
              return `
                <button class="student-chip" data-action="select-student" data-student-id="${student.id}">
                  <span class="avatar">${escapeHtml(student.initials)}</span>
                  <strong>${escapeHtml(student.name)}</strong>
                  <small>${progress.percent}% · ${progress.average || "—"} баллов</small>
                </button>
              `;
            })
            .join("")}
        </div>
      </article>

      <article class="wide-panel">
        <div class="section-heading">
          <h2>последние сдачи</h2>
          <button class="command-button small" data-action="set-view" data-view="builder">
            ${svg("plus")}
            <span>создать</span>
          </button>
        </div>
        <div class="activity-list">
          ${recent.map(renderSubmissionLine).join("")}
        </div>
      </article>
    </section>
  `;
}

function renderTeacherStudents() {
  const student = selectedStudent();
  const progress = progressFor(student.id);
  const lessons = lessonsForStudent(student.id);

  return `
    <section class="view-grid">
      <article class="student-selector">
        <h2>ученики</h2>
        ${db.students
          .map(
            (item) => `
              <button class="${item.id === student.id ? "active" : ""}" data-action="select-student" data-student-id="${item.id}">
                <span class="avatar">${escapeHtml(item.initials)}</span>
                <span>
                  <strong>${escapeHtml(item.name)}</strong>
                  <small>${escapeHtml(item.target)}</small>
                </span>
              </button>
            `
          )
          .join("")}
      </article>
      <article class="student-profile">
        <div class="section-heading">
          <div>
            <h2>${escapeHtml(student.name)}</h2>
            <p>${escapeHtml(student.title)} · ${escapeHtml(student.target)}</p>
          </div>
          <span class="score ${scoreTone(progress.average)}">${progress.average || "—"}</span>
        </div>
        <div class="progress-track">
          <span style="width:${progress.percent}%"></span>
        </div>
        <div class="metric-board compact-board">
          ${metric("готово", `${progress.completed}/${progress.total}`)}
          ${metric("к выполнению", progress.pending)}
          ${metric("серия", student.streak)}
        </div>
      </article>
      <article class="wide-panel full-span">
        <div class="section-heading">
          <h2>журнал</h2>
          <span class="pill">${lessons.length} назначений</span>
        </div>
        <div class="grade-table">
          ${lessons
            .map(({ course, module, lesson }) => {
              const submission = submissionFor(student.id, lesson.id);
              return `
                <div>
                  <strong>${escapeHtml(lesson.title)}</strong>
                  <span>${escapeHtml(course.title)} · ${escapeHtml(module.title)}</span>
                  <span>${displayDate(lesson.due)}</span>
                  <span class="score ${submission ? scoreTone(submission.score) : ""}">${submission ? submission.score : "—"}</span>
                </div>
              `;
            })
            .join("")}
        </div>
      </article>
    </section>
  `;
}

function renderBuilder() {
  const moduleOptions = db.courses.flatMap((course) =>
    course.modules.map((module) => ({
      value: `${course.id}::${module.id}`,
      label: `${course.title} / ${module.title}`
    }))
  );
  const lessonOptions = allLessons();

  return `
    <section class="builder-layout">
      <article class="builder-panel">
        <div class="section-heading">
          <h2>конструктор</h2>
          <span class="pill">курсы · модули · уроки</span>
        </div>

        <form id="course-form" class="form-grid">
          <h3>новая папка предмета</h3>
          <label>
            <span>Название</span>
            <input name="title" placeholder="Например, История" required />
          </label>
          <label>
            <span>Раздел</span>
            <input name="subject" placeholder="Например, гуманитарные науки" required />
          </label>
          <label>
            <span>Цвет</span>
            <input name="accent" type="color" value="#f59e0b" />
          </label>
          <button class="command-button" type="submit">${svg("plus")}<span>создать курс</span></button>
        </form>

        <form id="module-form" class="form-grid">
          <h3>новый модуль</h3>
          <label>
            <span>Курс</span>
            <select name="courseId" required>
              ${db.courses.map((course) => `<option value="${course.id}">${escapeHtml(course.title)}</option>`).join("")}
            </select>
          </label>
          <label>
            <span>Название</span>
            <input name="title" placeholder="Например, Экология" required />
          </label>
          <label>
            <span>Кратко</span>
            <input name="summary" placeholder="Что внутри модуля" />
          </label>
          <button class="command-button" type="submit">${svg("plus")}<span>добавить модуль</span></button>
        </form>
      </article>

      <article class="builder-panel">
        <form id="lesson-form" class="form-grid">
          <h3>новый урок</h3>
          <label>
            <span>Модуль</span>
            <select name="modulePath" required>
              ${moduleOptions.map((item) => `<option value="${item.value}">${escapeHtml(item.label)}</option>`).join("")}
            </select>
          </label>
          <label>
            <span>Название</span>
            <input name="title" placeholder="Например, Пищевые цепи" required />
          </label>
          <label>
            <span>Видео</span>
            <input name="videoUrl" type="url" placeholder="https://..." required />
          </label>
          <label>
            <span>Материалы</span>
            <textarea name="material" placeholder="Краткий текст, ссылки, план занятия"></textarea>
          </label>
          <label>
            <span>Задание</span>
            <textarea name="task" placeholder="Что должен выполнить ученик"></textarea>
          </label>
          <div class="check-group">
            ${db.students
              .map(
                (student) => `
                  <label>
                    <input type="checkbox" name="assignedTo" value="${student.id}" checked />
                    <span>${escapeHtml(student.name)}</span>
                  </label>
                `
              )
              .join("")}
          </div>
          <button class="command-button" type="submit">${svg("plus")}<span>добавить урок</span></button>
        </form>

        <form id="question-form" class="form-grid">
          <h3>вопрос к уроку</h3>
          <label>
            <span>Урок</span>
            <select name="lessonId" required>
              ${lessonOptions
                .map(
                  ({ course, module, lesson }) =>
                    `<option value="${lesson.id}">${escapeHtml(course.title)} / ${escapeHtml(module.title)} / ${escapeHtml(lesson.title)}</option>`
                )
                .join("")}
            </select>
          </label>
          <label>
            <span>Тип</span>
            <select name="type">
              <option value="single">один ответ</option>
              <option value="image">с картинкой</option>
              <option value="match">соотношение</option>
            </select>
          </label>
          <label>
            <span>Вопрос</span>
            <textarea name="prompt" required placeholder="Текст вопроса"></textarea>
          </label>
          <label>
            <span>Варианты</span>
            <textarea name="options" placeholder="Каждый вариант с новой строки"></textarea>
          </label>
          <label>
            <span>Ответ / пары</span>
            <textarea name="answer" placeholder="Для теста: правильный ответ. Для соотношения: Термин = Ответ"></textarea>
          </label>
          <button class="command-button" type="submit">${svg("plus")}<span>добавить вопрос</span></button>
        </form>
      </article>

      <article class="wide-panel full-span">
        <div class="section-heading">
          <h2>структура</h2>
          <span class="pill">${allLessons().length} уроков</span>
        </div>
        <div class="tree-list">
          ${db.courses
            .map(
              (course) => `
                <div>
                  <strong>${escapeHtml(course.title)}</strong>
                  ${course.modules
                    .map(
                      (module) => `
                        <p>${escapeHtml(module.title)} <span>${module.lessons.length} уроков</span></p>
                      `
                    )
                    .join("")}
                </div>
              `
            )
            .join("")}
        </div>
      </article>
    </section>
  `;
}

function renderParentOverview() {
  const child = db.students.find((student) => student.id === db.people.parent.studentId) || db.students[0];
  const progress = progressFor(child.id);

  return `
    <section class="view-grid">
      <article class="identity-panel">
        <span class="avatar hero-avatar">${escapeHtml(child.initials)}</span>
        <div>
          <p>статистика ученика</p>
          <h2>${escapeHtml(child.name)}</h2>
          <span>${escapeHtml(child.title)} · ${escapeHtml(child.target)}</span>
        </div>
      </article>
      <article class="metric-board">
        ${metric("прогресс", `${progress.percent}%`)}
        ${metric("сдано", `${progress.completed}/${progress.total}`)}
        ${metric("средний балл", progress.average || "—")}
        ${metric("ожидают", progress.pending)}
      </article>
      <article class="wide-panel">
        <div class="section-heading">
          <h2>динамика</h2>
          <span class="pill">последние сдачи</span>
        </div>
        <div class="activity-list">
          ${submissionsFor(child.id).map(renderSubmissionLine).join("") || '<p class="muted">Пока нет сдач.</p>'}
        </div>
      </article>
      <article class="wide-panel">
        <div class="section-heading">
          <h2>ближайшие задания</h2>
        </div>
        ${renderUpcoming(child.id)}
      </article>
    </section>
  `;
}

function renderParentGrades() {
  const child = db.students.find((student) => student.id === db.people.parent.studentId) || db.students[0];
  const lessons = lessonsForStudent(child.id);

  return `
    <section class="content-flow">
      <div class="page-title">
        <h2>оценки</h2>
        <p>${escapeHtml(child.name)}</p>
      </div>
      <div class="grade-table parent-table">
        ${lessons
          .map(({ course, module, lesson }) => {
            const submission = submissionFor(child.id, lesson.id);
            return `
              <div>
                <strong>${escapeHtml(lesson.title)}</strong>
                <span>${escapeHtml(course.title)} · ${escapeHtml(module.title)}</span>
                <span>${displayDate(lesson.due)}</span>
                <span class="score ${submission ? scoreTone(submission.score) : ""}">${submission ? submission.score : "—"}</span>
              </div>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderChat() {
  const studentId = state.role === "student" ? selectedStudent().id : state.selectedStudentId;
  const messages = db.messages.filter(
    (message) => message.to === studentId || message.from === studentId || message.to === "teacher"
  );

  return `
    <section class="chat-layout">
      <aside class="chat-people">
        <h2>чат</h2>
        ${db.students
          .map(
            (student) => `
              <button class="${student.id === studentId ? "active" : ""}" data-action="select-chat-student" data-student-id="${student.id}">
                <span class="avatar">${escapeHtml(student.initials)}</span>
                <span>${escapeHtml(student.name)}</span>
              </button>
            `
          )
          .join("")}
      </aside>
      <article class="chat-window">
        <div class="chat-thread">
          ${messages
            .map(
              (message) => `
                <div class="bubble ${message.from === "teacher" ? "teacher" : "student"}">
                  <p>${escapeHtml(message.text)}</p>
                  <small>${displayDate(message.at)}</small>
                </div>
              `
            )
            .join("")}
        </div>
        <form id="message-form" class="message-form">
          <input name="text" placeholder="Сообщение" required ${state.role === "parent" ? "disabled" : ""} />
          <button class="icon-button" type="submit" title="Отправить" ${state.role === "parent" ? "disabled" : ""}>${svg("send")}</button>
        </form>
      </article>
    </section>
  `;
}

function renderUpcoming(studentId) {
  const next = lessonsForStudent(studentId)
    .filter(({ lesson }) => !submissionFor(studentId, lesson.id))
    .sort((a, b) => new Date(a.lesson.due) - new Date(b.lesson.due))
    .slice(0, 4);

  if (!next.length) return '<p class="muted">Все назначенные задания закрыты.</p>';

  return `
    <div class="assignment-list compact-list">
      ${next
        .map(
          ({ course, module, lesson }) => `
            <article class="assignment-row">
              <span class="status-dot todo"></span>
              <div>
                <strong>${escapeHtml(lesson.title)}</strong>
                <small>${escapeHtml(course.title)} · ${escapeHtml(module.title)} · до ${displayDate(lesson.due)}</small>
              </div>
              <button class="icon-button" data-action="jump-lesson" data-course-id="${course.id}" data-module-id="${module.id}" data-lesson-id="${lesson.id}" title="Открыть урок">
                ${svg("arrow")}
              </button>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderSubmissionLine(submission) {
  const entry = findLesson(submission.lessonId);
  const student = db.students.find((item) => item.id === submission.studentId);
  if (!entry || !student) return "";

  return `
    <div class="activity-row">
      <span class="avatar">${escapeHtml(student.initials)}</span>
      <div>
        <strong>${escapeHtml(student.name)} · ${escapeHtml(entry.lesson.title)}</strong>
        <small>${escapeHtml(entry.course.title)} / ${escapeHtml(entry.module.title)} · ${displayDate(submission.completedAt)}</small>
      </div>
      <span class="score ${scoreTone(submission.score)}">${submission.score}</span>
    </div>
  `;
}

function metric(label, value) {
  return `
    <div class="metric">
      <strong>${escapeHtml(value)}</strong>
      <span>${escapeHtml(label)}</span>
    </div>
  `;
}

function breadcrumb(first, second, action) {
  return `
    <div class="breadcrumb">
      <button class="icon-button" data-action="${action}" title="Назад">${svg("arrow")}</button>
      <span>${escapeHtml(first)}</span>
      <strong>${escapeHtml(second)}</strong>
    </div>
  `;
}

function videoHost(url) {
  try {
    return new URL(url).hostname.replace("www.", "");
  } catch {
    return "видео";
  }
}

function gradeQuiz(lesson) {
  if (!lesson.quiz.length) return 100;

  let correct = 0;
  lesson.quiz.forEach((question) => {
    const answer = state.answers[question.id];
    if (question.type === "match") {
      const solved = question.pairs.every(([left, right]) => answer?.[left] === right);
      if (solved) correct += 1;
      return;
    }
    if (answer === question.answer) correct += 1;
  });

  return Math.round((correct / lesson.quiz.length) * 100);
}

function completeLesson(lessonId) {
  const entry = findLesson(lessonId);
  if (!entry) return;
  const student = selectedStudent();
  const score = gradeQuiz(entry.lesson);
  const existingIndex = db.submissions.findIndex(
    (submission) => submission.studentId === student.id && submission.lessonId === lessonId
  );
  const record = {
    id: existingIndex >= 0 ? db.submissions[existingIndex].id : uid("sub"),
    studentId: student.id,
    lessonId,
    score,
    completedAt: new Date().toISOString(),
    minutes: 25 + Math.round(Math.random() * 18),
    answers: structuredClone(state.answers)
  };

  if (existingIndex >= 0) db.submissions[existingIndex] = record;
  else db.submissions.push(record);

  state.answers = {};
  saveData();
  notify(`Результат ${score} сохранён`);
  render();
}

function handleAction(target) {
  const { action } = target.dataset;

  if (action === "set-role") {
    state.role = target.dataset.role;
    state.view = navByRole[state.role][0][0];
    state.courseId = null;
    state.moduleId = null;
    state.lessonId = null;
    state.answers = {};
    renderAtTop();
  }

  if (action === "set-view") {
    state.view = target.dataset.view;
    state.courseId = null;
    state.moduleId = null;
    state.lessonId = null;
    state.answers = {};
    renderAtTop();
  }

  if (action === "open-course") {
    state.view = "courses";
    state.courseId = target.dataset.courseId;
    state.moduleId = null;
    state.lessonId = null;
    renderAtTop();
  }

  if (action === "open-module") {
    state.moduleId = target.dataset.moduleId;
    state.lessonId = null;
    renderAtTop();
  }

  if (action === "open-lesson") {
    state.lessonId = target.dataset.lessonId;
    state.answers = {};
    renderAtTop();
  }

  if (action === "jump-lesson") {
    state.role = state.role === "parent" ? "student" : state.role;
    state.view = "courses";
    state.courseId = target.dataset.courseId;
    state.moduleId = target.dataset.moduleId;
    state.lessonId = target.dataset.lessonId;
    state.answers = {};
    renderAtTop();
  }

  if (action === "back-courses") {
    state.courseId = null;
    state.moduleId = null;
    state.lessonId = null;
    renderAtTop();
  }

  if (action === "back-modules") {
    state.moduleId = null;
    state.lessonId = null;
    renderAtTop();
  }

  if (action === "back-lessons") {
    state.lessonId = null;
    state.answers = {};
    renderAtTop();
  }

  if (action === "answer-question") {
    state.answers[target.dataset.questionId] = target.dataset.value;
    render();
  }

  if (action === "complete-lesson" || action === "submit-quiz") {
    completeLesson(target.dataset.lessonId);
  }

  if (action === "select-student") {
    state.selectedStudentId = target.dataset.studentId;
    state.view = "students";
    renderAtTop();
  }

  if (action === "select-chat-student") {
    state.selectedStudentId = target.dataset.studentId;
    render();
  }

  if (action === "reset-data") resetData();
}

function handleSubmit(event) {
  const form = event.target;
  const data = new FormData(form);

  if (form.id === "course-form") {
    db.courses.push({
      id: uid("course"),
      title: data.get("title").trim(),
      subject: data.get("subject").trim(),
      accent: data.get("accent"),
      modules: []
    });
    form.reset();
    saveData();
    notify("Курс создан");
    render();
  }

  if (form.id === "module-form") {
    const course = db.courses.find((item) => item.id === data.get("courseId"));
    course.modules.push({
      id: uid("module"),
      title: data.get("title").trim(),
      summary: data.get("summary").trim(),
      lessons: []
    });
    form.reset();
    saveData();
    notify("Модуль добавлен");
    render();
  }

  if (form.id === "lesson-form") {
    const [courseId, moduleId] = data.get("modulePath").split("::");
    const module = findModule(courseId, moduleId);
    const assignedTo = data.getAll("assignedTo");
    module.lessons.push({
      id: uid("lesson"),
      number: module.lessons.length + 1,
      title: data.get("title").trim(),
      due: new Date(Date.now() + 1000 * 60 * 60 * 24 * 5).toISOString(),
      videoUrl: data.get("videoUrl").trim(),
      material: data.get("material").trim() || "Материалы будут добавлены позже.",
      task: data.get("task").trim() || "Задание будет добавлено позже.",
      assignedTo,
      quiz: []
    });
    form.reset();
    saveData();
    notify("Урок добавлен");
    render();
  }

  if (form.id === "question-form") {
    const entry = findLesson(data.get("lessonId"));
    const type = data.get("type");
    const prompt = data.get("prompt").trim();
    const options = data
      .get("options")
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean);
    const answerText = data.get("answer").trim();

    if (type === "match") {
      const pairs = answerText
        .split("\n")
        .map((line) => line.split("=").map((part) => part.trim()))
        .filter((pair) => pair.length === 2 && pair[0] && pair[1]);
      entry.lesson.quiz.push({
        id: uid("q"),
        type,
        prompt,
        pairs
      });
    } else {
      entry.lesson.quiz.push({
        id: uid("q"),
        type,
        prompt,
        imageLabel: type === "image" ? "картинка" : "",
        options,
        answer: answerText
      });
    }

    form.reset();
    saveData();
    notify("Вопрос добавлен");
    render();
  }

  if (form.id === "message-form") {
    const text = data.get("text").trim();
    if (!text) return;
    const studentId = state.role === "student" ? selectedStudent().id : state.selectedStudentId;
    db.messages.push({
      id: uid("msg"),
      from: state.role === "student" ? studentId : "teacher",
      to: state.role === "student" ? "teacher" : studentId,
      text,
      at: new Date().toISOString()
    });
    form.reset();
    saveData();
    render();
  }
}

app.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  handleAction(target);
});

app.addEventListener("submit", (event) => {
  event.preventDefault();
  handleSubmit(event);
});

app.addEventListener("change", (event) => {
  const target = event.target;
  if (!target.matches("[data-match-question]")) return;

  const questionId = target.dataset.matchQuestion;
  const left = target.dataset.matchLeft;
  state.answers[questionId] = state.answers[questionId] || {};
  state.answers[questionId][left] = target.value;
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js");
  });
}

render();
