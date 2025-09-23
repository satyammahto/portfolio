// Init AOS & Feather
AOS.init({ duration: 800, once: true });
feather.replace();

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

if (localStorage.getItem('theme') === 'dark') {
  html.classList.add('dark');
  themeToggle.innerHTML = feather.icons.sun.toSvg();
} else {
  themeToggle.innerHTML = feather.icons.moon.toSvg();
}

themeToggle.addEventListener('click', () => {
  html.classList.toggle('dark');
  if (html.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
    themeToggle.innerHTML = feather.icons.sun.toSvg();
  } else {
    localStorage.setItem('theme', 'light');
    themeToggle.innerHTML = feather.icons.moon.toSvg();
  }
});

// ✅ Skills Data
const skills = [
  { title: "Programming", details: "Java, C, C++, Python (basics)" },
  { title: "Web Development", details: "HTML, CSS, JavaScript (basic)" },
  { title: "Databases", details: "MySQL" },
  { title: "Tools", details: "Git, GitHub, VS Code" }
];

// Render Skills
const skillsContainer = document.getElementById("skills-container");
skills.forEach(skill => {
  skillsContainer.innerHTML += `
    <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <h3 class="text-xl font-semibold mb-4">${skill.title}</h3>
      <p>${skill.details}</p>
    </div>
  `;
});

// ✅ Projects Data
const projects = [
  {
    title: "Course Feedback & Review Database",
    description: "A GUI application built with Python, Data Structures, and DBMS to collect and manage student feedback.",
    tags: ["Python", "MySQL", "Tkinter"],
    image: "assets/feedback.png",
    code: "https://github.com/satyammahto/Mini-Project"
  },
  {
    title: "Personal Portfolio Website",
    description: "A responsive personal portfolio website designed using HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "assets/portfolio.png",
    code: "https://github.com/satyammahto/portfolio"
  }
];

// Render Projects
const projectsContainer = document.getElementById("projects-container");
projects.forEach((project, index) => {
  projectsContainer.innerHTML += `
    <div class="project-card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md" data-aos="fade-up">
      <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
      <div class="p-6">
        <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
        <p class="text-gray-600 dark:text-gray-300 mb-4">${project.description}</p>
        <div class="flex flex-wrap gap-2 mb-4">
          ${project.tags.map(tag => `<span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">${tag}</span>`).join("")}
        </div>
        <button class="view-project-btn w-full bg-primary text-white py-2 rounded-lg hover:bg-blue-700 transition" data-project="${index}">View Details</button>
      </div>
    </div>
  `;
});

// Modal Logic
const projectButtons = document.querySelectorAll('.view-project-btn');
const projectModal = document.getElementById('project-modal');
const modalClose = document.getElementById('modal-close');

projectButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const project = projects[btn.dataset.project];
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-description').textContent = project.description;
    document.getElementById('modal-image').src = project.image;

    const tagsContainer = document.getElementById('modal-tags');
    tagsContainer.innerHTML = '';
    project.tags.forEach(tag => {
      const span = document.createElement('span');
      span.className = "text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded";
      span.textContent = tag;
      tagsContainer.appendChild(span);
    });

    document.getElementById('modal-code').href = project.code;
    projectModal.classList.remove('hidden');
  });
});

modalClose.addEventListener('click', () => projectModal.classList.add('hidden'));
