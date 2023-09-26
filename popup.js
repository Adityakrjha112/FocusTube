// popup.js
document.getElementById("hideElements").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "hideElements" }, () => {});
  });
});
