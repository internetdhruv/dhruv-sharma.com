function fetchJSONFile(path, callback) {
  const httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = () => {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        const data = JSON.parse(httpRequest.responseText);
        if (callback) callback(data);
      }
    }
  };
  httpRequest.open('GET', path);
  httpRequest.send();
}

function generateTechUsedHTML(tech) {
  let generatedHTML = 'Technologies Used:   ';
  tech.forEach((t) => {
    generatedHTML += t[0] === '<' ? t : `, ${t}, `;
  });

  if (generatedHTML[generatedHTML.length - 2] === ',') {
    generatedHTML = generatedHTML.substr(0, generatedHTML.length - 2);
  }

  return generatedHTML;
}

function generateLinksHTML(links) {
  let generatedHTML = '';
  if (links.github) {
    generatedHTML += `
      <a href="${links.github}" class="social-icon">
        <i class="fab fa-github"></i>
      </a>
      `;
  }
  if (links.project) {
    generatedHTML += `
      <a href="${links.project}">
        <i class="fas fa-external-link-alt"></i>
      </a>
      `;
  }
  return generatedHTML;
}

function generateProjectHTML(project) {
  const { title, summary, links, techUsed, imgSrc } = project;
  const majorLink = links.project ? links.project : links.github;
  const techUsedDiv = generateTechUsedHTML(techUsed);
  const projectLinksDiv = generateLinksHTML(links);
  return `
    <div class="project">
        <a href=${majorLink}>
            <img src=${imgSrc} alt=${title} class="project-image" />
        </a>
        <div class="project-description">
            <h1 class="project-title">${title}</h1>
            <p class="project-summary">${summary}</p>
            <div class="project-footer">
                <div class="tech">
                    ${techUsedDiv}
                </div>
                <div class="links">
                    ${projectLinksDiv}
                </div>
            </div>
        </div>
    </div>
    `;
}

fetchJSONFile('../data/project_data.json', (data) => {
  let htmlToSet = '';
  const projects = document.getElementById('projects-container');
  data.projects.forEach((project) => {
    htmlToSet += generateProjectHTML(project);
  });
  projects.innerHTML = htmlToSet;
});
