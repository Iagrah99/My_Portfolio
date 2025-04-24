import { skills } from './skills.js';
import { projects } from './projects.js';

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const heroContent = document.getElementsByClassName('hero-content')[0];
const footer = document.querySelector('.page-footer');
document.addEventListener("DOMContentLoaded", setupImageSwitcher);

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
  heroContent.classList.toggle('push');
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    footer.classList.add('scrolled-down');
    footer.classList.remove('scrolled-top')
    footer.classList.remove("page-footer")
  } else {
    footer.classList.remove('scrolled-down');
    footer.classList.add('scrolled-top')
  }
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
    <div class="project-info">
    ${renderProjectInfo(project)}
    </div>
    <div class="tech-stack">
    <div class="project-icons">
     ${renderTechStack(project)}
    </div>
  </div>
  </div>
    
    `;
  });

  document.querySelector('.js-projects-container').innerHTML = projectsHTML;
}

function renderProjectInfo(project) {
  return `
  <div>
    <figure>
        <a href="${project.links.live}" target="_blank">
          <img class="project-img"
               data-images='${JSON.stringify(project.image)}'
               src="${project.image[0].src}"
               alt="${project.image[0].alt}"
               width="${project.image[0].width}"
               height="${project.image[0].height}" />
        </a>
        <figcaption class="offscreen">${project.fig}</figcaption>
    </figure>

    <div class="project-paragraphs">

      <h3 class="project-title">
        ${project.title}
      </h3>
      <p>${project.paragraphs.p1}</p>
    </div>

    <div class="project-links">
        <a class="btn btn-small nowrap" href="${project.links.live}" target="_blank"
          title="View Live Version">
         
          ${project.title.includes('Mobile') ? '<i class="fa-brands fa-youtube fa-2x"></i> App Demo' : ' <i class="fa-solid fa-arrow-up-right-from-square fa-2x"></i> Live Version'}
        </a>
        <a class="btn btn-small nowrap" href="${project.links.source}" target="_blank"
          title="View Source Code"><i class="fa-brands fa-github fa-2x"></i>Source Code</a>
      </div>
    </div>
  `;
}

function setupImageSwitcher() {
  const imgElements = document.querySelectorAll(".project-img");

  imgElements.forEach((img) => {
    const images = JSON.parse(img.dataset.images); // grab array
    let index = 0;

    setInterval(() => {
      index = (index + 1) % images.length;
      img.src = images[index].src;
      img.alt = images[index].alt;
    }, 5000);
  });
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
      <figcaption class="nowrap">${stack.name}</figcaption>
    </figure>
    `;
  });

  return projectTechStack;
}

renderProjects();
renderSkills();