import { skills } from './skills.js';
import { projects } from './projects.js';

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const heroContent = document.getElementsByClassName('hero-content')[0];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
  heroContent.classList.toggle('pushed');
});

function renderSkills() {
  let skillsHTML = '';

  skills.forEach((skill) => {
    skillsHTML += `
     <figure>
      <img src="${skill.image}" width="512" height="512" alt="${skill.altText}" title="${skill.titleText}" />
      <figcaption>${skill.name}</figcaption>
    </figure>
    `;
  });

  document.querySelector('.js-skill-icons').innerHTML = skillsHTML;
}

function renderProjects() {
  let projectsHTML = '';

  projects.forEach((project) => {
    projectsHTML += `
    
  <div class="project-section">
   ${renderProjectTitle(project)}
    <div class="project-info">
    ${renderProjectInfo(project)}
    </div>
    <div class="tech-stack">
    <h3>Tech Stack</h3>

    <div class="project-icons">
     ${renderTechStack(project)}
    </div>
  </div>
  </div>
    
    `;
  });

  document.querySelector('.js-projects-container').innerHTML = projectsHTML;
}

function renderProjectTitle(project) {
  return `
  <h3 class="project-title">
    ${project.title}
  </h3>
  `;
}

function renderProjectInfo(project) {
  return `
    <figure ${project.title.includes('Mobile') ? 'class=phone-figure' : ''}>
        <a href="${project.links.live}" target="_blank">
          <img class="project-img" src="${project.image.src}" alt="${
    project.image.alt
  }"
            width="${project.image.width}" height="${project.image.height}" />
        </a>
        <figcaption class="offscreen">${project.fig}</figcaption>
    </figure>

    <div class="project-paragraphs">
      <p>
        ${project.paragraphs.p1}
      </p>

      <p>
        ${project.paragraphs.p2}
      </p>

      <p class="project-links">
        <a class="btn btn-small nowrap" href="${
          project.links.live
        }" target="_blank"
          title="View Live Version">${
            project.title.includes('Mobile') ? 'App Demo' : 'Live Version'
          }</a>
        <a class="btn btn-small nowrap" href="${
          project.links.source
        }" target="_blank"
          title="View Source Code">Source Code</a>
      </p>
    </div>
  `;
}

function renderTechStack(project) {
  let projectTechStack = '';

  project.techStack.forEach((stack) => {
    projectTechStack += `
    <figure>
      <img
        src="${stack.image.src}"
        width="512"
        height="512"
        alt="${stack.image.alt}"
        title="${stack.image.title}"
      />
      <figcaption>${stack.name}</figcaption>
    </figure>
    `;
  });

  return projectTechStack;
}

renderProjects();
renderSkills();
