// // Background code goes here
// chrome.browserAction.onClicked.addListener((/* tab */) => {
//   // Opens our extension in a new browser window.
//   // Only if a popup isn't defined in the manifest.
//   chrome.tabs.create({
//     url: chrome.extension.getURL('www/index.html')
//   }, (/* newTab */) => {
//     // Tab opened.
//   })
// })


chrome.browserAction.onClicked.addListener(executeContentFunc);


function executeContentFunc(){
  chrome.tabs.query({currentWindow: true, active: true},
    function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {type: 'executeContentFunc'})
    })
}
// Background code goes here
chrome.browserAction.onClicked.addListener((/* tab */) => {
  // Opens our extension in a new browser window.
  // Only if a popup isn't defined in the manifest.
  chrome.tabs.create({
    url: chrome.extension.getURL('www/index.html')
  }, (/* newTab */) => {
    // Tab opened.
  })
})
