import feedparser
import pandas as pd
import re
class FeedParser():

    def CNN_parser():
        CNN_URLS = {
        "Top Stories": "http://rss.cnn.com/rss/edition.rss",
        "World": "http://rss.cnn.com/rss/edition_world.rss",
        "Africa": "http://rss.cnn.com/rss/edition_africa.rss",
        "Americas": "http://rss.cnn.com/rss/edition_americas.rss",
        "Asia": "http://rss.cnn.com/rss/edition_asia.rss",
        "Europe": "http://rss.cnn.com/rss/edition_europe.rss",
        "Middle East": "http://rss.cnn.com/rss/edition_meast.rss",
        "U.S.": "http://rss.cnn.com/rss/edition_us.rss",
        "Money": "http://rss.cnn.com/rss/money_news_international.rss",
        "Technology": "http://rss.cnn.com/rss/edition_technology.rss",
        "Science & Space": "http://rss.cnn.com/rss/edition_space.rss",
        "Entertainment":"http://rss.cnn.com/rss/edition_entertainment.rss",
        "World Sport":"http://rss.cnn.com/rss/edition_sport.rss",
        "Football" : "http://rss.cnn.com/rss/edition_football.rss",
        "Golf": "http://rss.cnn.com/rss/edition_golf.rss",
        "Motorsport": "http://rss.cnn.com/rss/edition_motorsport.rss",
        "Tennis": "http://rss.cnn.com/rss/edition_tennis.rss",
        "Travel":"http://rss.cnn.com/rss/edition_travel.rss",
        "Video":"http://rss.cnn.com/rss/cnn_freevideo.rss",
        "Most Recent":"http://rss.cnn.com/rss/cnn_latest.rss"}

        def getSubtitle(i):
            try: 
                return CNN_RSS.entries[i].summary_detail.value
            except:
                return "N/A"
        def getPublished(i):
            try: 
                return CNN_RSS.entries[i].published
            except:
                return "N/A"
        def getMedia(i):
            try: 
                return CNN_RSS.entries[i].media_content[0]['url']
            except:
                return "N/A"

        CNN_feed = []
        for k in range(len(CNN_URLS)):
            CNN_RSS = feedparser.parse(list(CNN_URLS.values())[k])
            for i in range(len(CNN_RSS.entries)):
                title = [CNN_RSS.entries[i].title for i in range(len(CNN_RSS.entries))]
                subtitle = [ getSubtitle(i) for i in range(len(CNN_RSS.entries))]
                url = [CNN_RSS.entries[i].links[0].href for i in range(len(CNN_RSS.entries))]
                timestamp = [getPublished(i) for i in range(len(CNN_RSS.entries))]
                original_image = [getMedia(i) for i in range(len(CNN_RSS.entries))]
                section = [list(CNN_URLS.keys())[k] for i in range(len(CNN_RSS.entries))]
                CNN_feed.append([title, subtitle, url, timestamp, original_image])

        return CNN_feed

    def NYT_parser():
        NYT_URLS = {
        "World":"https://rss.nytimes.com/services/xml/rss/nyt/World.xml",
        "Africa":"https://rss.nytimes.com/services/xml/rss/nyt/Africa.xml",
        "Americas":"https://rss.nytimes.com/services/xml/rss/nyt/Americas.xml",
        "Asia Pacific":"https://rss.nytimes.com/services/xml/rss/nyt/AsiaPacific.xml",
        "Europe":"https://rss.nytimes.com/services/xml/rss/nyt/Europe.xml",
        "Middle East":"https://rss.nytimes.com/services/xml/rss/nyt/MiddleEast.xml",
        "US":"https://rss.nytimes.com/services/xml/rss/nyt/US.xml",
        "Education":"https://rss.nytimes.com/services/xml/rss/nyt/Education.xml",
        "Politics":"https://rss.nytimes.com/services/xml/rss/nyt/Politics.xml",
        "Business":"https://rss.nytimes.com/services/xml/rss/nyt/Business.xml",
        "Technology":"https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml",
        "Sports":"https://rss.nytimes.com/services/xml/rss/nyt/Sports.xml",
        "Science":"https://rss.nytimes.com/services/xml/rss/nyt/Science.xml",
        "Environment":"https://rss.nytimes.com/services/xml/rss/nyt/Climate.xml",
        "Health":"https://www.nytimes.com/services/xml/rss/nyt/Health.xml",
        "Art":"https://rss.nytimes.com/services/xml/rss/nyt/Arts.xml"
    }
        NYT_feed = []
        def getNYTMedia(i):
            try: 
                return NYT_RSS.entries[i].media_content[0]['url']
            except:
                return "N/A"

        for k in range(len(NYT_URLS)):
            NYT_RSS = feedparser.parse(list(NYT_URLS.values())[k]).entries
            for i in range(len(NYT_RSS)):
                title = [NYT_RSS.entries[i].title for i in range(len(NYT_RSS))]
                url = [NYT_RSS.entries[i].link for i in range(len(NYT_RSS))]
                summary = [NYT_RSS.entries[i].summary for i in range(len(NYT_RSS))]
                timestamp = [NYT_RSS.entries[i].published for i in range(len(NYT_RSS))]
                media = [getNYTMedia(i) for i in range(len(NYT_RSS))]
                section = [list(NYT_URLS.keys())[k] for i in range(len(NYT_RSS))]
                NYT_feed.append([title, summary, url, timestamp, media, section])

        return NYT_feed

    def FOX_parser():
        FOX_RSS = {
        "Latest": "http://feeds.foxnews.com/foxnews/latest",
        "National" : "http://feeds.foxnews.com/foxnews/national",
        "World" : "http://feeds.foxnews.com/foxnews/world",
        "Politics" : "http://feeds.foxnews.com/foxnews/politics",
        "Business" : "http://feeds.foxnews.com/foxnews/business",
        "SciTech" : "http://feeds.foxnews.com/foxnews/scitech",
        "Health" : "http://feeds.foxnews.com/foxnews/health",
        "Entertainment" : "http://feeds.foxnews.com/foxnews/entertainment",
        "Views" : "http://feeds.foxnews.com/foxnews/views"
            }
        def getFoxMedia(i):
            try:
                return FOX_RSS.entries[0].media_content[0]['url']
            except:
                return "N/A"

        FOX_feed = []
        for k in range(len(USAT_URLS)):
            FOX_RSS = feedparser.parse(list(USAT_URLS.values())[k])
            for i in range(len(USAT_RSS)):
                title = [FOX_RSS.entries[0].title for i in range(len(FOX_RSS))]
                summary = [FOX_RSS.entries[0].summary for i in range(len(FOX_RSS))]
                url = [FOX_RSS.entries[i].link for i in range(len(FOX_RSS))]
                timestamp = [FOX_RSS.entries[0].published for i in range(len(FOX_RSS))]
                image = [getFoxMedia(i) for i in range(len(FOX_RSS))]
                section = [list(USAT_URLS.keys())[k] for i in range(len(USAT_RSS))]
                FOX_feed.append([title, summary, url, timestamp, image, section])
        return FOX_feed

    def WSJ_parser():
        #Proxys?? Da error 503, hay que ver como hacerle
        WSJ_URLS = {
        "World": "https://feeds.a.dj.com/rss/RSSWorldNews.xml",
        "Opinion": "https://feeds.a.dj.com/rss/RSSOpinion.xml",
        "Business":"https://feeds.a.dj.com/rss/WSJcomUSBusiness.xml",
        "Markets":"https://feeds.a.dj.com/rss/RSSMarketsMain.xml",
        "Technology":"https://feeds.a.dj.com/rss/RSSWSJD.xml",
        "Lifestyle":"https://feeds.a.dj.com/rss/RSSLifestyle.xml"}

    def BBC_parser():
        BBC_URLS = {
        "World":"http://feeds.bbci.co.uk/news/world/rss.xml",
        "UK":"http://feeds.bbci.co.uk/news/uk/rss.xml",
        "Business":"http://feeds.bbci.co.uk/news/business/rss.xml",
        "Politics": "http://feeds.bbci.co.uk/news/politics/rss.xml",
        "Health": "http://feeds.bbci.co.uk/news/health/rss.xml",
        "Education": "http://feeds.bbci.co.uk/news/education/rss.xml",
        "Science": "http://feeds.bbci.co.uk/news/science_and_environment/rss.xml",
        "Technology": "http://feeds.bbci.co.uk/news/technology/rss.xml",
        "Entretainment & Arts": "http://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml"}

        BBC_feed = pd.DataFrame()
        for k in range(len(BBC_URLS)):
            BBC_RSS = feedparser.parse(list(BBC_URLS.values())[k])
            for i in range(len(BBC_RSS.entries)):
                title = [BBC_RSS.entries[i].title for i in range(len(BBC_RSS.entries))]
                subtitle = [ BBC_RSS.entries[i].summary for i in range(len(BBC_RSS.entries))]
                url = [BBC_RSS.entries[i].links[0].href for i in range(len(BBC_RSS.entries))]
                timestamp = [BBC_RSS.entries[0].published for i in range(len(BBC_RSS.entries))]
                section = [list(BBC_RSS.keys())[k] for i in range(len(BBC_RSS.entries))]
                BBC_RSS_feed_p = pd.DataFrame([title, subtitle, url, timestamp, section]).transpose()
                BBC_feed.append(CNN_RSS_feed_p, ignore_index=True)

        return BBC_feed

    def USAT_parser():

        USAT_URLS = {
        "US":"http://rssfeeds.usatoday.com/UsatodaycomNation-TopStories",
        "World":"http://rssfeeds.usatoday.com/UsatodaycomWorld-TopStories",
        "Opinion":"http://rssfeeds.usatoday.com/News-Opinion",
        "Sports":"http://rssfeeds.usatoday.com/UsatodaycomSports-TopStories",
        "Lifestyle":"http://rssfeeds.usatoday.com/usatoday-LifeTopStories",
        "Money":"http://rssfeeds.usatoday.com/UsatodaycomMoney-TopStories",
        "Tech":"http://rssfeeds.usatoday.com/usatoday-TechTopStories",
        "Travel":"http://rssfeeds.usatoday.com/UsatodaycomTravel-TopStories"}

        def getUSATMedia(i):
            try: 
                return USAT_feed_p.entries[i].links[1].href
            except:
                return "N/A"
        USAT_feed = []
        for k in range(len(USAT_URLS)):
            USAT_RSS = feedparser.parse(list(USAT_URLS.values())[k])
            for i in range(len(USAT_RSS)):
                title =  [USAT_feed_p.entries[i].title for i in range(len(USAT_RSS))]
                summary = [re.findall('(?<=<p>).*(?=</p>)', USAT_feed_p.entries[i].content[0].value[0]) for i in range(len(USAT_RSS))]
                url = [USAT_feed_p.entries[i].feedburner_origlink for i in range(len(USAT_RSS))]
                timestamp = [USAT_feed_p.entries[i].published for i in range(len(USAT_RSS))]
                image = [getUSATMedia(i) for i in range(len(USAT_RSS))]
                section = [list(USAT_URLS.keys())[k] for i in range(len(USAT_RSS))]
                USAT_feed.append([title, summary, url, timestamp, image, section])

        return USAT_feed
    
    def main(self):
        resultMatrix = [CNN_parser(), USAT_parser(), BBC_parser(), FOX_parser(), NYT_parser()]
        return pd.DataFrame(resultMatrix).transpose()

news = NewsManager()
news11 = news.main()
