const uclaIT = document.getElementById('UCLA-IT');
const blueDome = document.getElementById('Blue-DOME');
const racing = document.getElementById('Racing');
const esri2 = document.getElementById('ESRI-2');
const esri1 = document.getElementById('ESRI-1');

let selectedJob = 'Blue-DOME';
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

let jobData = null;

function setData(data) {
  jobData = data;
}

fetchJSONFile('../data/job_data.json', setData);

const setJobText = (data) => {
  let dateText;
  dateText = `${data.startMonth}, ${data.startYear}`;
  if (data.endYear === null) {
    dateText += ' - Present';
  } else {
    dateText += ` - ${data.endMonth}, ${data.endYear}`;
  }
  document.getElementById('company').innerHTML = data.company;
  document.getElementById('title').innerHTML = data.title;
  document.getElementById('date').innerHTML = dateText;
  document.getElementById('location').innerHTML = data.location;
  document.getElementById('description').innerHTML = data.description;
};

const updateDisplayedJob = () => {
  document
    .getElementById(lastSelectedJob)
    .classList.remove('job-title-selected');
  document.getElementById(selectedJob).classList.add('job-title-selected');
  if (jobData === null) {
    fetchJSONFile('../data/job_data.json', (res) => {
      setJobText(res.jobs.find((job) => job.code === selectedJob));
    });
  } else {
    setJobText(jobData.jobs.find((job) => job.code === selectedJob));
  }
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
