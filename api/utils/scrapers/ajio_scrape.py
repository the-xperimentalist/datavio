
"""
1. Product Details  -
2. ASIN - NA
3. Brand - filter
4. Price - 
5. Sales - NA
6. Sales Graph - NA
7. Revenue - NA
8. BSR - can be calculated as position in supercategory,  for eg shown on 32nd position on first page - 32 rank
9. FBA Fees - 
10. Active Sellers - NA
11. Ratings - NA
12. Review count - NA
13. Images(Number) - 
14. Review Velocity. - NA
15. Buy Box - NA
16. Category 
17. Size Tier - NA
18. Fulfilment - NA
19. Dimensions - NA
20. Weight - NA
21. Creation Date - NA
22. Country Of Origin - 
23. FAssured - Yes/No

"""

import requests
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from pprint import pprint


# def scrape_ajio_link(link_url):
#     product_html = requests.get(link_url)
#     product_soup = BeautifulSoup(product_html.content, "html5lib")
#     ajio_out_json = {}
#     ajio_out_json["brand_name"] = product_soup.find("h2", {"class": "brand-name"})
#     ajio_out_json["product_name"] = product_soup.find("h1", {"class": "prod-name"})
#     ajio_out_json["price"] = product_soup.find("div", {"class": "prod-sp"}).text
#     driver = webdriver.Chrome()
#     driver.get(link_url)
#     read_more_x_path = "/html/body/div[1]/div/div/div[2]/div/div/div[2]/div/div[3]/div/section/h2/ul/div"
#     read_more_click_element = driver.find_element(By.XPATH, x_path_read_more)
#     read_more_click_element.click()
#     clicked_soup = BeautifulSoup(driver.page_source, "html5lib")
#     all_details = clicked_soup.findAll("li", {"class": "detail-list"})
#     ajio_out_json["details"] = []
#     for i in all_details:
#         ajio_out_json["details"].append(i.text)
#     return ajio_out_json


def scrape_ajio_link(link_url):
    driver = webdriver.Chrome()
    driver.get(link_url)
    read_more_x_path = "/html/body/div[1]/div/div/div[2]/div/div/div[2]/div/div[3]/div/section/h2/ul/div"
    read_more_click_element = driver.find_element(By.XPATH, read_more_x_path)
    read_more_click_element.click()
    product_soup = BeautifulSoup(driver.page_source, "html5lib")
    ajio_out_json = {}
    ajio_out_json["brand_name"] = product_soup.find("h2", {"class": "brand-name"})
    ajio_out_json["product_name"] = product_soup.find("h1", {"class": "prod-name"})
    ajio_out_json["price"] = product_soup.find("div", {"class": "prod-sp"}).text
    all_details = product_soup.findAll("li", {"class": "detail-list"})
    pprint(ajio_out_json)
    ajio_out_json["details"] = []
    for i in all_details:
        ajio_out_json["details"].append(i.text)
    return ajio_out_json



ajio_link = "https://www.ajio.com/kotty-colourblock-full-sleeves-bomber-jacket/p/461622395_multi"
scrape_ajio_link(ajio_link)
