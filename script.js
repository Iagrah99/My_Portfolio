import { skills } from './skills.js';

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

renderSkills();
