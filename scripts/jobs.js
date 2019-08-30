const uclaIT = document.getElementById('UCLA-IT');
const blueDome = document.getElementById('Blue-DOME');
const racing = document.getElementById('Racing');
const esri2 = document.getElementById('ESRI-2');
const esri1 = document.getElementById('ESRI-1');

let selectedJob = 'UCLA-IT';
let lastSelectedJob = selectedJob;

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

const updateDisplayedJob = () => {
  document
    .getElementById(lastSelectedJob)
    .classList.remove('job-title-selected');
  document.getElementById(selectedJob).classList.add('job-title-selected');
  fetchJSONFile('../data/job_data.json', (res) => {
    const foundJob = res.jobs.find((job) => job.code === selectedJob);
    document.getElementById('company').innerHTML = foundJob.company;
    document.getElementById('title').innerHTML = foundJob.title;
    document.getElementById('location').innerHTML = foundJob.location;
    document.getElementById('description').innerHTML = foundJob.description;
  });
};

uclaIT.addEventListener('click', () => {
  lastSelectedJob = selectedJob;
  selectedJob = 'UCLA-IT';
  updateDisplayedJob();
});

blueDome.addEventListener('click', () => {
  lastSelectedJob = selectedJob;
  selectedJob = 'Blue-DOME';
  updateDisplayedJob();
});

racing.addEventListener('click', () => {
  lastSelectedJob = selectedJob;
  selectedJob = 'Racing';
  updateDisplayedJob();
});

esri2.addEventListener('click', () => {
  lastSelectedJob = selectedJob;
  selectedJob = 'ESRI-2';
  updateDisplayedJob();
});

esri1.addEventListener('click', () => {
  lastSelectedJob = selectedJob;
  selectedJob = 'ESRI-1';
  updateDisplayedJob();
});

updateDisplayedJob();
