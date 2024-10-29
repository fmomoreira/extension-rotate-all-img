document.getElementById("rotateButton").addEventListener("click", () => {
    const rotationValue = document.getElementById("rotationInput").value;
    if (rotationValue) {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          func: rotateImages,
          args: [rotationValue]
        });
      });
    }
  });
  
  function rotateImages(rotationValue) {
    document.querySelectorAll("img").forEach((img) => {
      img.style.transform = `rotate(${rotationValue}deg)`;
    });
  }
  