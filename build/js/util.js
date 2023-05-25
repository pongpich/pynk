
function getServiceUrl() {
  var baseUrl = window.location.href;
  return baseUrl.includes("staging") || baseUrl.includes("localhost") || baseUrl.includes("127.0.0.1")
    ? "https://api.planforfit.com/course"
    : "https://api.planforfit.com/course";
}
function checkData() {
  var summaryInfo = JSON.parse(window.localStorage.getItem('summaryInfo'));
  if (!summaryInfo) {
    window.location = "./index.html";
  }
  return summaryInfo;
}

function getData() {
  var summaryInfo = JSON.parse(window.localStorage.getItem('summaryInfo'));
  return summaryInfo;
}
