const getApi = () => {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {
      data;
      document.getElementById("activity-name").textContent = data.activity;
    });
};
getApi();

button = document.getElementById("btn");
button.addEventListener("click", getApi);
