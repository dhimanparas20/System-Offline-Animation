// script.js
document.addEventListener("DOMContentLoaded", function () {
  checkInternetConnection();
});

function checkInternetConnection() {
  if (!navigator.onLine) {
      const offlineContainer = document.querySelector(".offline-container");
      const offlineText = document.createElement("p");
      offlineText.classList.add("offline-text");
      offlineText.textContent = "Oops! You are offline.";
      offlineContainer.appendChild(offlineText);

      // Create a div for the animation and add the .offline-animation class
      const offlineAnimation = document.createElement("div");
      offlineAnimation.classList.add("offline-animation");

      // Append the animation div to the offline container
      offlineContainer.appendChild(offlineAnimation);
  }
}
