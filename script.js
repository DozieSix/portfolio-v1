// Insert current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Example project list
const projects = [
  { title: "Portfolio v1", link: "#", repo: "#", tags: ["HTML", "CSS"] },
  { title: "Task Tracker", link: "#", repo: "#", tags: ["JavaScript"] },
];

// Render projects
const grid = document.getElementById("projectGrid");

function renderProjects(list) {
  grid.innerHTML = list
    .map(
      (p) => `
      <article class="card" tabindex="0">
        <h3>${p.title}</h3>
        <p>${p.tags.join(" • ")}</p>
        <p>
          <a href="${p.link}" target="_blank">Live</a> ·
          <a href="${p.repo}" target="_blank">Code</a>
        </p>
      </article>
    `
    )
    .join("");
}

renderProjects(projects);

// Smooth scroll
document.getElementById("cta-projects").addEventListener("click", () => {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
});
