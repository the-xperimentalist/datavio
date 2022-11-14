import requests
from bs4 import BeautifulSoup


def get_brand_list(list_url):
    pass


def scrape_fk_link(link_url):
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
    product_brand = product_soup.findAll("a", attrs={"class": "_2whKao"})[-1]
    product_brand_name = product_brand.text
    fk_out_json["product_brand_name"] = product_brand_name
    product_brand_href = product_brand.attrs["href"]
