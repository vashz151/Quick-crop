from newsdataapi import NewsDataApiClient
import api


def news_fetch(nextPage):
    newsapi = NewsDataApiClient(apikey=api.newsdata_api_key)
    if nextPage == "1":
        response = newsapi.news_api(
            country="in", q="Agricultutre OR Farming OR Farmers", language="en,hi")
    else:
        response = newsapi.news_api(
            country="in", q="Agricultutre OR Farming OR Farmers", language="en,hi", page=nextPage)
    return response
