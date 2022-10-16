import { getActiveTabURL } from "./utils.js"

let amazonProductDetailsDOM = document.querySelector("div#amazon-product-details.card")
let flipkartProductDetailsDOM = document.querySelector("div#flipkart-product-details.card")


function fillAmazonProductDetails () {}

function fillFlipkartProductDetails () {}

document.addEventListener("DOMContentLoaded", async () => {
  let activeTab = await getActiveTabURL()
  let invalidSiteDOMElement = document.querySelector("div#invalid-site.card")
  let validSiteDOMElement = document.getElementById("select-feature")
  let reviewTitleDOMElement = document.querySelector("h4#parent-id.card-title")

  if (activeTab.url.includes("amazon.com") || activeTab.url.includes("amazon.in")) {
    console.log("Amazon")
    reviewTitleDOMElement.innerHTML = "Get details for amazon"
    invalidSiteDOMElement.style.display = "none"
    flipkartProductDetailsDOM.style.display = "none"
    amazonProductDetailsDOM.style.display ="none"
    let container = document.getElementsByClassName("container")[0]

    container.innerHTML = "<div className='title'>Welcome to amazon product optimization</div>"
    chrome.sync.storage.get([activeTab.url], (data) => {
      let pageDetails = data[activeTab.url] ? JSON.parse(data[activeTab.url]) : []
      console.log(pageDetails)

      // const element = document.createElement("h1")
      // element.innerHTML = pageDetails.productName
      container.innerHTML = "<div className='title'>Welcome to amazon product optimization</div><h1>" + pageDetails.productName + "</h1>"
    })
  }
  else if (activeTab.url.includes("flipkart.com") || activeTab.url.includes("flipkart.com")) {
    console.log("flipkart")
    reviewTitleDOMElement.innerHTML = "Get details for flipkart"
    invalidSiteDOMElement.style.display = "none"
    amazonProductDetailsDOM.style.display = "none"
    flipkartProductDetailsDOM.style.display ="none"
    let container = document.getElementsByClassName("container")[0]

    container.innerHTML = "<div className='title'>Welcome to flipkart product optimization</div>"
    chrome.sync.storage.get([activeTab.url], (data) => {
      let pageDetails = data[activeTab.url] ? JSON.parse(data[activeTab.url]) : []
      console.log(pageDetails)

      // const element = document.createElement("h1")
      // element.innerHTML = pageDetails.productName
      container.innerHTML = "<div className='title'>Welcome to flipkart product optimization</div><h1>" + pageDetails.productName + "</h1>"
    })
  }
  else {
    validSiteDOMElement.style.display = "none"
    invalidSiteDOMElement.style.display = "block"
  }
})

function getProductDetails () {}

function analyzeReviews () {}
