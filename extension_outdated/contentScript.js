import { amazonProductTitleCSS, amazonProductTableDetailsValueCSS, amazonProductTableDetailsAttributeCSS } from "./constants.js"

(() => {
  let siteType, sitePage
  let currentSitePage = ""

  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { type, siteUrl } = obj

    if (type === "AMAZON") {
      siteType = "AMAZON"
      sitePage = siteUrl
      fetchAmazonProductDetails()
    }
    else if (type === "FLIPKART") {
      siteType = "FLIPKART"
      sitePage = siteUrl
      fetchFlipkartProductDetails()
    }
  })

  const fetchAmazonProductDetails = () => {
    const headerElement = document.querySelector("span#productTitle.a-size-large.product-title-word-break")
    // const headerData = headerElement.split("|")

    const amazonProductDetailsAttr = document.querySelectorAll(amazonProductTableDetailsAttributeCSS)
    const amazonProductDetailsValue = document.querySelectorAll(amazonProductTableDetailsValueCSS)
    let valueToSetInCache = {}
    valueToSetInCache[productName] = headerElement.innerHTML
    for (let i=0; i<amazonProductDetailsAttr.length; i++) {
      let attrName = amazonProductDetailsAttr[i].innerHTML
      let attrVal = amazonProductDetailsValue[i].innerHTML
      if ("ASIN" in attrName) {
        valueToSetInCache["ASIN"] = attrVal
      } else if ("Release Date" in attrName) {
        valueToSetInCache["CreationDate"] = attrVal
      } else if ("Reviews" in attrName) {
        let reviewDOMElement = document.querySelector("span#acrCustomerReviewText.a-size-base")
        valueToSetInCache["ReviewCount"] = reviewDOMElement.innerHTML
      } else if ("Manufacturer" in attrName) {
        valueToSetInCache["Manufacturer"] = attrVal
      } else if ("Dimensions" in attrName) {
        valueToSetInCache["Dimensions"] = attrVal
      }
    }
    console.log(valueToSetInCache)
    chrome.sync.storage.set({
      [siteUrl]: JSON.stringify(valueToSetInCache)
    })
  }

  const fetchFlipkartProductDetails = () => {}

})