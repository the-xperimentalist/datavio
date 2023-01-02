
import requests
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from pprint import pprint
import time

"""
To do:
1. Product Details - Done
2. ASIN - NA
3. Brand - Done
4. Price - Done
5. Sales - NA
6. Sales Graph - NA
7. Revenue - NA
8. BSR - can be calculated as position in supercategory,  for eg shown on 32nd position on first page - 32 rank - Done
9. FBA Fees - 
10. Active Sellers - Done
11. Rating - Done
12. Review count - Done
13. Images(Number) - Done
14. Review Velocity. - NA
15. Buy Box
16. Category - Modified to all categories and sub-categories - Done
17. Size Tier - NA
18. Fulfilment - NA
19. Dimensions - NA
20. Weight - NA
21. Creation Date - NA
22. Country Of Origin - Done
23. FAssured - Yes/No - Done
24. Page title - Done
25. Product title - Done
26. Brand Name - Done
27. Description - Done
28. Number of ratings - Done
29. Packer info - Not sure if required - Can be done on capturing click
30. Manufacturer info - Not sure if required - Done - may be removed later
31. Importer info - Not sure if required
32. Reviews fetch
"""


# def get_brand_list(list_url):
#     pass


# def get_cat_items_list_view(soup_instance)


def get_reviews_for_listing(review_url):
    # updated_url = f"https://www.flipkart.com{list_url}"
    # reviews_link = requests.get(updated_url)
    if not "https://www.flipkart.com" in review_url:
        list_url = f"https://www.flipkart.com{review_url}"
    else:
        list_url = review_url
    reviews_link = requests.get(list_url)
    reviews_soup = BeautifulSoup(reviews_link.content, "html5lib")

    output_dict = {}
    # print(type(reviews_soup.find("div", {"class": "_2d4LTz"})))
    output_dict["review"] = reviews_soup.find("div", attrs={"class": "_2d4LTz"}).text
    rating_review_elem = reviews_soup.findAll("div", attrs={"class": "row _2afbiS"})
    output_dict["no_of_ratings"] = rating_review_elem[0].text[:-10]
    output_dict["no_of_reviews"] = rating_review_elem[1].text[:-8]
    total_reviews_pages = int(reviews_soup.find("div", attrs={"class": "_2MImiq _1Qnn1K"}).findChildren("span", recursive=False)[0].text[10:])
    all_reviews = []
    print("total_reviews_pages: ", total_reviews_pages)
    ct=0
    for review_page in range(total_reviews_pages):
        review_page_url = f"{list_url}&page={review_page+1}"
        print("Review page url: ", review_page_url)
        # print("review_page: ", review_page_url)
        # Current review doesn't take into consideration the read more present in some reviews
        reviews_page_link = requests.get(review_page_url)
        reviews_page_soup = BeautifulSoup(reviews_page_link.content, "html5lib")

        reviews_body_items = reviews_page_soup.findAll("div", attrs={"class": "col _2wzgFH K0kLPL"})

        # review_items_description = reviews_page_soup.findAll("div", {"class": "t-ZTKy"})
        # print(len(review_items_description))
        # review_items_title = reviews_page_soup.findAll("p", {"class": "_2-N8zT"})
        # print(len(review_items_title))
        # review_items_stars = reviews_page_soup.findAll("div", {"class": "_3LWZlK _1BLPMq"})
        # print(len(review_items_stars))
        for body_item in reviews_body_items:
            item_descr = body_item.find("div", attrs={"class": "t-ZTKy"})
            item_title = body_item.find("p", attrs={"class": "_2-N8zT"})
            item_stars = body_item.find("div", attrs={"class": "_3LWZlK _1BLPMq"})
            all_reviews.append({
                "title": item_title.text if item_title else "",
                "description": item_descr.text if item_descr else "",
                "star": item_stars.text if item_stars else "",
                "page": review_page+1
                })
            ct = ct+1
        # print("new body items: ", len(all_reviews))
    print(ct)
    return all_reviews


def get_product_sellers(list_url):
    if not "https://www.flipkart.com" in list_url:
        updated_url = f"https://www.flipkart.com{list_url}"
    else:
        updated_url = list_url
    seller_list_html = requests.get(updated_url)
    # seller_list_soup = BeautifulSoup(seller_list_html.content, "html5lib")
    # print("H1")

    # Selenium. Current series. Eventually in parallel
    ops = Options()
    ops.headless = True
    driver = webdriver.Chrome(options=ops)
    # driver = webdriver.Chrome()
    driver.get(updated_url)

    seller_list_soup = BeautifulSoup(driver.page_source, "html5lib")

    seller_names = seller_list_soup.findAll("div", {"class": "_3enH42"})
    seller_scores = seller_list_soup.findAll("div", {"class": "_3LWZlK _2GCNvL"})
    # print(seller_names)
    # print(seller_scores)

    output_dict = []

    for i in range(len(seller_names)):
        x_path = f"/html/body/div/div/div[3]/div/div/div/div[2]/div[2]/div[{i+1}]/div[1]/div[1]/span"
        # print("x_path: ", x_path)
        seller_click_element = driver.find_element(By.XPATH, x_path)
        seller_click_element.click()
        time.sleep(5)

        clicked_seller_soup = BeautifulSoup(driver.page_source, "html5lib")
        score_items = clicked_seller_soup.findAll("text", {"class": "_2Ix0io"})
        # print(score_items)

        output_dict.append({
            "sellerName": seller_names[i].text,
            "sellerScore": seller_scores[i].text,
            "productQuality": score_items[0].text,
            "serviceQuality": score_items[1].text
            })
        # print(output_dict)

        # seller_popup_close_btn_xpath = "/html/body/div/div/div[1]/div/button"
        seller_popup_close_btn_xpath = "/html/body/div[1]/div/div[1]/div/button"
        seller_popup_close_btn = driver.find_element(By.XPATH, seller_popup_close_btn_xpath)
        seller_popup_close_btn.click()

        time.sleep(0.1)

    driver.quit()

    return output_dict


def get_category_ranking(list_url, link_url, get_cat_comparison=True):
    # print("h2")/
    updated_url = f"https://www.flipkart.com{list_url}"
    # print(updated_url)
    category_listing_html = requests.get(updated_url)
    category_listing_soup = BeautifulSoup(category_listing_html.content, "html5lib")

    category_items = category_listing_soup.findAll("div", {"class": "_2kHMtA"})
    output_dict = {}
    # print("h3\n\n")
    # pprint(category_items)
    if len(category_items):
        # List view
        count = 0
        # print("h4_1\n\n")
        for item in category_items:
            is_ad = item.findAll("div", {"class": "_2tfzpE"})
            # print("is_ad: ", is_ad)
            if len(is_ad):
                continue
            a_item = item.findAll("a", {"class": "_1fQZEK"})[0]
            # print("a_item: ", a_item)
            a_item_href = a_item.attrs["href"]
            # print("a_item_href: ", a_item_href)
            count = count + 1
            if a_item_href in link_url:
                break
            if get_cat_comparison:
                output_dict["items"] = []
                output_dict["items"].append(scrape_fk_link(f"https://www.flipkart.com{a_item_href}", get_cat_comparison=False))
        output_dict["first_page"] = True if count < len(category_items) else False
        output_dict["first_page_pos"] = count
        output_dict["no_of_first_page"] = len(category_items)
    else:
        # Grid view
        category_items = category_listing_soup.findAll("div", {"class": "_4ddWXP"})
        count = 0
        # print("h4_2\n\n")
        # pprint(category_items)
        for item in category_items:
            is_ad = item.findAll("div", {"class": "_4HTuuX"})
            # print("is_ad: ", is_ad)
            if len(is_ad):
                continue
            a_item = item.findAll("a", {"class": "_2rpwqI"})[0]
            # print("a_item: ", a_item)
            a_item_href = a_item.attrs["href"]
            # print("a_item_href: ", a_item_href)
            count = count + 1
            if a_item_href in link_url:
                break
        output_dict["first_page"] = True if count < len(category_items) else False
        output_dict["first_page_pos"] = count
        output_dict["no_of_first_page"] = len(category_items)
    # pprint(output_dict)
    return output_dict


def summary_fk_link(link_url):
    product_html = requests.get(link_url)
    product_soup = BeautifulSoup(product_html.content, "html5lib")
    fk_out_json = {}
    page_title = product_soup.title.text
    fk_out_json["page_title"] = page_title
    product_title = product_soup.find("span", attrs={"class": "B_NuCI"}).text
    fk_out_json["product_title"] = product_title

    product_pagn = product_soup.findAll("a", attrs={"class": "_2whKao"})
    print(product_pagn[1:-1])
    cats = [i.text for i in product_pagn[1:-1]]
    product_brand = product_pagn[-1]
    product_brand_name = product_brand.text
    fk_out_json["product_brand_name"] = product_brand_name
    product_brand_href = product_brand.attrs["href"]
    fk_out_json["fk_assured"] = not isinstance(product_soup.find("img", {"class": "jMnjzX"}), type(None))
    fk_descr =  product_soup.find("div",{'class':'_1mXcCf RmoJUa'})
    fk_out_json["description"] =  fk_descr.text if fk_descr else ""
    fk_out_json["rating"] = product_soup.find("div",{"class":"_2d4LTz"}).text
    fk_out_json["no_of_ratings"] = product_soup.findAll("div",{"class":"row _2afbiS"})[0].text[:-10]
    fk_out_json["no_of_reviews"] = product_soup.findAll("div",{"class":"row _2afbiS"})[1].text[:-8]
    fk_out_json["no_of_images"] = len(product_soup.findAll("li",{"class":"_20Gt85 _1Y_A6W"}))
    # fk_out_json["category"] = product_soup.findAll("a", {"class": "_2whKao"})
    fk_out_json["final_price"] = product_soup.find("div", {"class": "_30jeq3 _16Jk6d"}).text
    fk_out_json["mrp"] = product_soup.find("div", {"class": "_3I9_wc _2p6lqe"}).text
    fk_out_json["discount"] = product_soup.find("div", {"class": "_3Ay6Sb _31Dcoz"}).text
    # fk_out_json["categories"] = {}
    fk_out_json["category"] = cats[0]
    fk_out_json["sub_category"] = cats[1]
    # print("h1")
    # print(fk_out_json)
    # print(product_pagn)
    # for item in product_pagn[1:-1]:
    #     fk_out_json["categories"][item.text] = get_category_ranking(item.attrs["href"], link_url, get_cat_comparison)
    fk_out_json["top_seller_name"] = product_soup.findAll("div", {"class": "_1RLviY", "id": "sellerName"})[0].text
    fk_out_json["top_seller_stars"] = product_soup.findAll("div", {"class": "_3LWZlK _1D-8OL"})[0].text

    fk_sellers_listing_class = "_38I6QT"
    sellers_href_link = product_soup.find("li", {"class": "_38I6QT"}).findChildren("a", recursive=False)[0].attrs["href"]
    fk_out_json["top_seller_name"] = product_soup.findAll("div", {"class": "_1RLviY", "id": "sellerName"})[0].text
    fk_out_json["top_seller_stars"] = product_soup.findAll("div", {"class": "_3LWZlK _1D-8OL"})[0].text

    return fk_out_json


def scrape_fk_link(link_url, get_cat_comparison=True):
    """
    We fetch the details from the flipkart product link
    """
    product_html = requests.get(link_url)
    product_soup = BeautifulSoup(product_html.content, "html5lib")
    fk_out_json = {}
    page_title = product_soup.title.text
    fk_out_json["page_title"] = page_title
    product_title = product_soup.find("span", attrs={"class": "B_NuCI"}).text
    fk_out_json["product_title"] = product_title

    product_pagn = product_soup.findAll("a", attrs={"class": "_2whKao"})
    product_brand = product_pagn[-1]
    product_brand_name = product_brand.text
    fk_out_json["product_brand_name"] = product_brand_name
    product_brand_href = product_brand.attrs["href"]
    fk_out_json["fk_assured"] = not isinstance(product_soup.find("img", {"class": "jMnjzX"}), type(None))
    fk_out_json["description"] =  product_soup.find("div",{'class':'_1mXcCf RmoJUa'}).text
    fk_out_json["rating"] = product_soup.find("div",{"class":"_2d4LTz"}).text
    fk_out_json["no_of_ratings"] = product_soup.findAll("div",{"class":"row _2afbiS"})[0].text[:-10]
    fk_out_json["no_of_reviews"] = product_soup.findAll("div",{"class":"row _2afbiS"})[1].text[:-8]
    fk_out_json["no_of_images"] = len(product_soup.findAll("li",{"class":"_20Gt85 _1Y_A6W"}))
    # fk_out_json["category"] = product_soup.findAll("a", {"class": "_2whKao"})
    fk_out_json["final_price"] = product_soup.find("div", {"class": "_30jeq3 _16Jk6d"}).text
    fk_out_json["mrp"] = product_soup.find("div", {"class": "_3I9_wc _2p6lqe"}).text
    fk_out_json["discount"] = product_soup.find("div", {"class": "_3Ay6Sb _31Dcoz"}).text
    fk_out_json["categories"] = {}
    # print("h1")
    # print(fk_out_json)
    # print(product_pagn)
    for item in product_pagn[1:-1]:
        fk_out_json["categories"][item.text] = get_category_ranking(item.attrs["href"], link_url, get_cat_comparison)
    fk_out_json["top_seller_name"] = product_soup.findAll("div", {"class": "_1RLviY", "id": "sellerName"})[0].text
    fk_out_json["top_seller_stars"] = product_soup.findAll("div", {"class": "_3LWZlK _1D-8OL"})[0].text

    # fk_sellers_listing_class = "_38I6QT"
    # sellers_href_link = product_soup.find("li", {"class": "_38I6QT"}).findChildren("a", recursive=False)[0].attrs["href"]

    # pprint(fk_out_json)
    # fk_out_json["sellers"] = get_product_sellers(sellers_href_link)
    # print("h1")
    # print(fk_out_json)



    # Selenium stuff. Eventually, parallelism

    ops = Options()
    ops.headless = True
    driver = webdriver.Chrome(options=ops)
    # driver = webdriver.Chrome()
    driver.get(link_url)

    x_path_read_more = '//*[@id="container"]/div/div[3]/div[1]/div[2]/div[9]/div[5]/div/div[2]/button'
    read_more_click_element = driver.find_element(By.XPATH, x_path_read_more)
    read_more_click_element.click()

    xpath_manufacturing_info = '//*[@id="container"]/div/div[3]/div[1]/div[2]/div[9]/div[5]/div/div[2]/div[2]'
    manufacturing_info_click_element = driver.find_element(By.XPATH, xpath_manufacturing_info)
    manufacturing_info_click_element.click()

    after_click_source = BeautifulSoup(driver.page_source, "html5lib")

    info_headers = after_click_source.findAll("div", {"class": "hxgRu0"})
    info_values = after_click_source.findAll("span", {"class": "IMpCl_"})
    for i in range(len(info_headers)):
        fk_out_json[info_headers[i].text] = info_values[i].text

    manufacturer_details = after_click_source.findAll("li", {"class": "_3_27HS"})[0].text
    # print("manufacturer_details: ", manufacturer_details)
    fk_out_json["manufacturer_details"] = manufacturer_details

    # pprint(fk_out_json)

    driver.quit()

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

    return fk_out_json
