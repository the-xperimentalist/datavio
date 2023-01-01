
from celery import shared_task
from api.utils.scrapers.fk_scrape import *
from api.models import AnalyzeSite, ContactUser
from api.utils.constants import (
    REVIEW_INSIGHTS_STATE,
    KEYWORD_ANALYSIS_STATE,
    PRICE_HISTORY_STATE,
    PRODUCT_SPY_STATE,
    REVENUE_INSIGHTS_STATE,
    SELLER_INFO_STATE,
    SUMMARY_STATE)


@shared_task
def get_fk_reviews(to_analyse_id, review_url):
    """
    The method adds the fk reviews of the related link to the url
    """
    print("review H1")
    site_details = AnalyzeSite.objects.get(id=to_analyse_id)
    reviews_for_url = get_reviews_for_listing(review_url)
    older_site_data = site_details.site_data
    if not older_site_data:
        older_site_data = {}
    print("review H2")
    older_site_data[REVIEW_INSIGHTS_STATE] = reviews_for_url
    site_details.site_data = older_site_data
    site_fetched_info = site_details.fetched_infos
    site_fetched_info.append(REVIEW_INSIGHTS_STATE)
    site_details.fetched_infos = site_fetched_info
    print("review H2")
    site_details.save()
    print("review H3")
    return "Done"


@shared_task
def get_sellers_info(to_analyse_id, seller_link):
    """
    The method gets all the sellers info for the related link to the url
    """
    print("seller H1")
    site_details = AnalyzeSite.objects.get(id=to_analyse_id)
    product_sellers = get_product_sellers(seller_link)
    older_site_data = site_details.site_data
    print("seller H2")
    if not older_site_data:
        older_site_data = {}
    older_site_data[SELLER_INFO_STATE] = product_sellers
    site_details.site_data = older_site_data
    site_fetched_info = site_details.fetched_infos
    site_fetched_info.append(SELLER_INFO_STATE)
    site_details.fetched_infos = site_fetched_info
    site_details.save()
    print("seller H3")
    return "Done"


@shared_task
def get_product_summary(to_analyse_id):
    """
    The method gets the product listing summary from flipkart
    """
    print("summary H1")
    site_details = AnalyzeSite.objects.get(id=to_analyse_id)
    listing_summary = summary_fk_link(site_details.url)
    older_site_data = site_details.site_data
    if not older_site_data:
        older_site_data = {}
    print("summary H2")
    older_site_data[SUMMARY_STATE] = listing_summary
    site_details.site_data = older_site_data
    site_fetched_info = site_details.fetched_infos
    site_fetched_info.append(SUMMARY_STATE)
    site_details.fetched_infos = site_fetched_info
    site_details.save()
    print("summary H3")
    return "Done"
