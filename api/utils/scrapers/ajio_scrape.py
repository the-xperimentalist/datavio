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


def scrape_ajio_link(link_url):
    product_html = requests.get(link_url)
    product_soup = BeautifulSoup(product_html.content, "html5lib")

    ajio_out_json = {}
    ajio_out_json["brand_name"] = product_soup.find("h2", {"class": "brand-name"})
    ahio
    pass
