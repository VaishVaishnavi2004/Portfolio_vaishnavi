const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const iconOpen = document.getElementById("icon-open");
const iconClose = document.getElementById("icon-close");

const closeMenu = () => {
  mobileMenu.classList.add("hidden");
  iconOpen.classList.remove("hidden");
  iconClose.classList.add("hidden");
  menuBtn.setAttribute("aria-expanded", "false");
};

menuBtn.addEventListener("click", () => {
  const isOpen = !mobileMenu.classList.contains("hidden");
  mobileMenu.classList.toggle("hidden");
  iconOpen.classList.toggle("hidden");
  iconClose.classList.toggle("hidden");
  menuBtn.setAttribute("aria-expanded", String(!isOpen));
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

// icon = any Iconify icon name → https://icon-sets.iconify.design
const skills = [
  {
    category: "Programming & Analytics",
    skills: [
      { name: "Python", icon: "logos:python", color: "" },
      { name: "Pandas", icon: "simple-icons:pandas", color: "text-blue-600" },
      { name: "NumPy", icon: "simple-icons:numpy", color: "text-blue-500" },
      { name: "SQL", icon: "mdi:database", color: "text-slate-700" },
    ],
  },
  {
    category: "Data & Reporting",
    skills: [
      { name: "Excel", icon: "mdi:microsoft-excel", color: "text-green-600" },
      {
        name: "Power BI",
        icon: "simple-icons:powerbi",
        color: "text-yellow-500",
      },
    ],
  },
  {
    category: "Database",
    skills: [
      {
        name: "PostgreSQL",
        icon: "simple-icons:postgresql",
        color: "text-blue-600",
      },
    ],
  },
  {
    category: "Automation & ETL",
    skills: [
      { name: "Power Query", icon: "mdi:sync", color: "text-blue-600" },
      { name: "Python Automation", icon: "logos:python", color: "" },
    ],
  },
  {
    category: "Statistical Analysis",
    skills: [
      {
        name: "Hypothesis Testing",
        icon: "mdi:chart-bell-curve",
        color: "text-purple-600",
      },
      {
        name: "A/B Testing",
        icon: "mdi:chart-multiple",
        color: "text-purple-600",
      },
      { name: "Data Cleaning", icon: "mdi:sync", color: "text-cyan-600" },
      {
        name: "Data Visualization",
        icon: "mdi:table-large",
        color: "text-indigo-600",
      },
    ],
  },
  {
    category: "Tools & Deployment",
    skills: [
      { name: "Git", icon: "simple-icons:git", color: "text-orange-600" },
      { name: "GitHub", icon: "simple-icons:github", color: "text-slate-900" },
      {
        name: "VS Code",
        icon: "simple-icons:visualstudiocode",
        color: "text-sky-600",
      },
      { name: "Netlify", icon: "simple-icons:netlify", color: "text-cyan-600" },
      {
        name: "MS Office",
        icon: "mdi:microsoft-office",
        color: "text-red-500",
      },
      { name: "Vercel", icon: "simple-icons:vercel", color: "text-slate-900" },
    ],
  },
];

const container = document.getElementById("skills-container");

skills.forEach((category) => {
  const categoryBlock = document.createElement("div");

  // Category title
  const title = document.createElement("h3");
  title.className = "text-xl sm:text-2xl font-semibold text-slate-900 mb-5";
  title.textContent = category.category;
  categoryBlock.appendChild(title);

  // Cards grid
  const grid = document.createElement("div");
  grid.className =
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5";

  category.skills.forEach((skill) => {
    const card = document.createElement("div");
    card.className =
      "group flex items-center gap-5 min-h-[110px] px-6 py-2 bg-[#FFF8F1] border border-slate-200 rounded-2xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5)] hover:-translate-y-1 hover:border-slate-300 transition-all duration-300";

    card.innerHTML = `
          <div class="shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-[#f9e5d3] ${skill.color} group-hover:scale-110 transition-transform duration-300">
            <iconify-icon icon="${skill.icon}" style="font-size: 32px;"></iconify-icon>
          </div>
          <span class="text-lg font-medium text-slate-800">${skill.name}</span>
        `;

    grid.appendChild(card);
  });

  categoryBlock.appendChild(grid);
  container.appendChild(categoryBlock);
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetEl = document.querySelector(targetId);

    if (targetEl) {
      targetEl.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
