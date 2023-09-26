// content.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "hideElements") {
    const css = `
        .ytd-rich-grid-renderer,
        .ytd-compact-video-renderer,
        .ytd-reel-item-renderer,
        #title-container {
          display: none !important;
        }
      `;

    const style = document.createElement("style");
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
  }
});
