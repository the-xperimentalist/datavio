chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.url && tab.url.includes("amazon.com")) {

    chrome.tabs.sendMessage(tabId, {
      type: "AMAZON",
      sitePage: tab.url
    })
  }
  else if (tab.url && tab.url.includes("flipkart.com")) {

    chrome.tabs.sendMessage(tabId, {
      type: "FLIPKART",
      siteUrl: tab.url
    })
   }
})