import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.select import Select
# from selenium.webdriver.common.action_chain import ActionChains

from bs4 import BeautifulSoup

start_time = time.time()

# url = "https://www.youtube.com/c/JohnWatsonRooney/videos"
url = "https://www.flipkart.com/infinix-x1-slim-series-core-i3-10th-gen-8-gb-256-gb-ssd-windows-11-home-xl21-thin-light-laptop/p/itma1003dc991f9f?pid=COMGEHP5EFEGWZW5&lid=LSTCOMGEHP5EFEGWZW5AGHTBE&marketplace=FLIPKART&fm=personalisedRecommendation%2Fp2p-same&iid=R%3As%3Bp%3ACOMGG3S9XZV4PWHB%3Bpt%3Ahp%3Buid%3A38c7eb78-643a-11ed-9e9c-bf909c01bc4b%3B.COMGEHP5EFEGWZW5&ssid=o1o2uwp56107l4ao1668443675346&otracker=hp_reco_You%2BMay%2BLike..._3_8.productCard.PMU_V2_Infinix%2BX1%2BSlim%2BSeries%2BCore%2Bi3%2B10th%2BGen%2B-%2B%25288%2BGB%252F256%2BGB%2BSSD%252FWindows%2B11%2BHome%2529%2BXL21%2BThin%2Band%2BLight%2BLaptop_COMGEHP5EFEGWZW5_personalisedRecommendation%2Fp2p-same_2&otracker1=hp_reco_WHITELISTED_personalisedRecommendation%2Fp2p-same_You%2BMay%2BLike..._DESKTOP_HORIZONTAL_productCard_cc_3_NA_view-all&cid=COMGEHP5EFEGWZW5"

print("H1")
options = Options()
print("H2")
options.headless = True
# driver = webdriver.Chrome(options=options)
driver = webdriver.Chrome()
print("H3")

driver.get(url)
print(driver)
# Comment later as required to get this using beautifulsoup
# print(driver.title)
print("H4")

# style-scope ytd-grid-video-renderer
# //*[@id="video-title"]

# videos = driver.find_elements_by_class_name("style-scope ytd-grid-video-renderer")
# videos = driver.find_elements(By.CLASS_NAME, "style-scope ytd-grid-video-renderer")
# items_to_check = driver.find_elements(By.CLASS_NAME, "_38I6QT")
# print(items_to_check)
# print(videos)
# print("H5")

# # get manufacturing, packaging, import info: _1JDTUN
# div_item = driver.find_elements(By.CLASS_NAME, "_1JDTUN")
# driver.execute_script("arguments[0].click()", div_item)

x_path_manufacturing_packaging_info = '//*[@id="container"]/div/div[3]/div[1]/div[2]/div[6]/div[3]/div/div[2]/button'

x_path_read_more = '//*[@id="container"]/div/div[3]/div[1]/div[2]/div[9]/div[5]/div/div[2]/button'
x_path_read_more_2 = '//*[@id="container"]/div/div[3]/div[1]/div[2]/div[9]/div[5]/div/div[2]/div[2]'

print("H5")
to_click = driver.find_element(By.XPATH, x_path_read_more)
# to_click = driver.find_element(By.XPATH, x_path_read_more_2)
print("H6")
to_click.click()

xpath_manufacturing_info = '//*[@id="container"]/div/div[3]/div[1]/div[2]/div[9]/div[5]/div/div[2]/div[2]'
print("H7")
time.sleep(10)
manufacturing_info = driver.find_element(By.XPATH, xpath_manufacturing_info)
manufacturing_info.click()

print("H8")
time.sleep(10)

clicked_source = driver.page_source
soup = BeautifulSoup(clicked_source, "html5lib")

# Save country of
info_headers = soup.findAll("div", {"class": "hxgRu0"})
info_values = soup.findAll("span", {"class": "IMpCl_"})
print(info_headers)
print("info headers length: ", len(info_headers))
print(info_values)
print("info values length: ", len(info_values))
req_dict = {}
for i in range(len(info_headers)):
    req_dict[info_headers[i].text] = info_values[i].text
print(req_dict)


# xpath_manufacturer_details_btn = "/html/body/div[1]/div/div[1]/div/div/div[2]/div[2]/div/div[1]/ul/div[1]/div/li"
# manufacturing_details_info = driver.find_element(By.XPATH, xpath_manufacturer_details_btn)
# manufacturing_details_info.click()

# soup = BeautifulSoup(driver.page_source, "html5lib")

# manufacturer_details = soup.findAll("li", {"class": "_3_27HS"}).text
# print("manufacturer_details: ", manufacturer_details)

# xpath_importer_details_btn = "/html/body/div[1]/div/div[1]/div/div/div[2]/div[2]/div/div[1]/ul/div[2]/div/li"
# importer_details_info = driver.find_element(By.XPATH, xpath_importer_details_btn)
# importer_details_info.click()

# soup = BeautifulSoup(driver.page_source, "html5lib")

# packaging_details = soup.findAll("li", {"class": "_3_27HS"})[0].text
# print("packaging_details: ", packaging_details)

# xpath_packer_details_btn = "/html/body/div[1]/div/div[1]/div/div/div[2]/div[2]/div/div[1]/ul/div[3]/div/li"
# /html/body/div[1]/div/div[1]/div/div/div[2]/div[2]/div/div[1]/ul/div[2]/div/li
# /html/body/div[1]/div/div[1]/div/div/div[2]/div[2]/div/div[1]/ul/div[3]/div/li

# packer_details_info = driver.find_element(By.XPATH, xpath_packer_details_btn)
# packer_details_info.click()

# soup = BeautifulSoup(driver.page_source, "html5lib")

# packer_details = soup.findAll("li", {"class": "_3_27HS"}).text
# print("packer_details: ", packer_details)

# for video in videos:
#     title = video.find_element_by_xpath('.//*[@id="video-title"]').text
#     print(title)

stop = time.time()
print("Time taken: ", stop - start_time)
