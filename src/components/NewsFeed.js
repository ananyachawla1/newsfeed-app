import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import NewsFeedCard from './NewsFeedCard';

const NewsFeed = () => {
//   const newsItems = [
//     { title: 'News Item 1', content: 'Content of news item 1.' },
//     { title: 'News Item 2', content: 'Content of news item 2.' },
//     // Add more news items here
//   ];

//   const newsItems = [
//     {
//         "news_url": "https://www.youtube.com/watch?v=mokbPedgwPQ",
//         "image_url": "https://cdn.snapi.dev/images/v1/q/s/tesla-analyst-uses-full-self-driving-nearly-crashes-2555105.jpg",
//         "title": "Tesla Analyst Uses 'Full Self-Driving,' Nearly Crashes",
//         "text": "Elon Musk has said that investors won't understand the company unless they're using the driver-assistance system marketed as Full Self-Driving. William Stein, Truist Securities managing director and senior analyst for semiconductors and AI, took this as his cue to test-drive one of the carmaker's vehicles, and narrowly avoided a crash.",
//         "source_name": "Bloomberg Technology",
//         "date": "Tue, 30 Jul 2024 13:53:59 -0400",
//         "topics": [],
//         "sentiment": "Negative",
//         "type": "Video",
//         "tickers": [
//             "TSLA"
//         ]
//     },
//     {
//         "news_url": "https://www.investopedia.com/tesla-recalls-vehicles-to-address-hood-latch-error-issues-software-update-8685802",
//         "image_url": "https://cdn.snapi.dev/images/v1/x/q/tsla46-659261-2555054.jpg",
//         "title": "Tesla Recalls 1.85M Vehicles to Address Hood Latch Error, Issues Software Update",
//         "text": "Tesla (TSLA) has issued a software update to address a recall over an issue with certain vehicles not alerting the driver that the hood latch is still open, which could lead to the hood opening while the car is in motion, the National Highway Traffic Safety Administration (NHTSA) said.",
//         "source_name": "Investopedia",
//         "date": "Tue, 30 Jul 2024 13:41:36 -0400",
//         "topics": [],
//         "sentiment": "Negative",
//         "type": "Article",
//         "tickers": [
//             "TSLA"
//         ]
//     },
//     {
//         "news_url": "https://www.businessinsider.com/analyst-says-near-tesla-crash-tesla-shows-fsd-not-ready-2024-7",
//         "image_url": "https://cdn.snapi.dev/images/v1/y/q/tsla5-2479766-2554895.jpg",
//         "title": "Tesla keeps touting self-driving but one analyst's near-crash shows it's 'not even close' to autonomy",
//         "text": "Truist analyst William Stein tested Tesla's Full Self-Driving and said it still lacks full autonomy. Stein said he had to make three interventions, one of which would have led to a \"certain accident.",
//         "source_name": "Business Insider",
//         "date": "Tue, 30 Jul 2024 12:39:27 -0400",
//         "topics": [
//             "paywall"
//         ],
//         "sentiment": "Negative",
//         "type": "Article",
//         "tickers": [
//             "TSLA"
//         ]
//     },
//     {
//         "news_url": "https://investorplace.com/2024/07/tesla-resistance-levels-bulls-must-clear-post-earnings-hurdles/",
//         "image_url": "https://cdn.snapi.dev/images/v1/h/m/tsla43-658964-2554721.jpg",
//         "title": "Tesla Resistance Levels: Bulls Must Clear Post-Earnings Hurdles!",
//         "text": "Trend line watchers, pay attention! In the wake of electric vehicle manufacturer Tesla's (NASDAQ: TSLA ) second quarter 2024 earnings disappointment, Tesla stock investors could be headed for persistent problems.",
//         "source_name": "InvestorPlace",
//         "date": "Tue, 30 Jul 2024 11:39:16 -0400",
//         "topics": [
//             "earnings"
//         ],
//         "sentiment": "Negative",
//         "type": "Article",
//         "tickers": [
//             "TSLA"
//         ]
//     },
//     {
//         "news_url": "https://nypost.com/2024/07/30/business/tesla-recalls-nearly-2m-vehicles-over-fear-of-hood-popping-open-while-driving/",
//         "image_url": "https://cdn.snapi.dev/images/v1/i/w/tsla36-657701-2554685.jpg",
//         "title": "Tesla recalls nearly 2M vehicles over fear of hood popping open while driving",
//         "text": "This is not the first major Tesla recall in recent memory.",
//         "source_name": "New York Post",
//         "date": "Tue, 30 Jul 2024 11:34:33 -0400",
//         "topics": [],
//         "sentiment": "Negative",
//         "type": "Article",
//         "tickers": [
//             "TSLA"
//         ]
//     },
//     {
//         "news_url": "https://www.businessinsider.com/tesla-cant-impress-new-ev-buyers-thats-a-problem-2024-7",
//         "image_url": "https://cdn.snapi.dev/images/v1/l/w/tsla43-658964-2554678.jpg",
//         "title": "Tesla is having trouble wooing new EV shoppers",
//         "text": "Tesla is struggling to impress new owners, according to JD Power. Traditional automakers are providing EVs for a new contingent of EV shoppers.",
//         "source_name": "Business Insider",
//         "date": "Tue, 30 Jul 2024 11:31:49 -0400",
//         "topics": [
//             "paywall"
//         ],
//         "sentiment": "Negative",
//         "type": "Article",
//         "tickers": [
//             "TSLA"
//         ]
//     },
//     {
//         "news_url": "https://www.globenewswire.com/news-release/2024/07/30/2921209/28124/en/Australia-Electric-Vehicle-Charging-Stations-Market-Forecasts-2024-2029-Featuring-ChargeFox-Tesla-Evie-Jolt-ABB-Delta-Electronics-and-Chargemaster.html",
//         "image_url": "https://cdn.snapi.dev/images/v1/e/f/press6-2554629.jpg",
//         "title": "Australia Electric Vehicle Charging Stations Market Forecasts 2024-2029 Featuring ChargeFox, Tesla, Evie, Jolt, ABB, Delta Electronics, and Chargemaster",
//         "text": "Dublin, July 30, 2024 (GLOBE NEWSWIRE) -- The \"Australia Electric Vehicle Charging Stations Market - Forecasts from 2024 to 2029\" report has been added to ResearchAndMarkets.com's offering. The Australian electric vehicle charging stations market is projected to rise at a compound annual growth rate (CAGR) of 12.61% to reach a market valuation of US$50.856 million by 2029, from US$22.150 million in 2022. Australia's infrastructure for charging electric vehicles (EVs) has been progressively growing. Government and corporate sector initiatives seek to encourage the increasing number of EVs on the road. Cost and accessibility issues are still present, especially in rural regions. However, continuing government initiatives are attempting to overcome these obstacles, to create a nationwide network for EV charging that is more extensive and easily accessible. The need for charging infrastructure is also rising as a result of people and companies switching to electric cars, growing awareness of climate change, and the need to cut emissions. Furthermore, Australia's growing car sales are driving up demand for EV charging stations, which encourages infrastructure development and investment. On the other hand, weaker car sales might temporarily obstruct expansion while stakeholders reorder their priorities for investments. The correlation emphasizes the importance of EV adoption rates in determining the future course of the charging station sector. As per the Australian Automobile Association, the vehicle sales were significant in 2024. The sales of ICE were 2,48,943, and that for hybrid vehicles was 28,708. Whereas the sales of BEV and PHEV were 21,474 and 4,476, respectively, in January 2024. Moreover, to encourage the market expansion for EV charging stations, the Australian government has implemented financial incentives, including subsidies and tax credits. Regulations require EV charging stations to be included in new construction, guaranteeing public availability. The goal of funding R&D initiatives is to promote innovation by advancing EV technology and charging infrastructure. These programs demonstrate Australia's dedication to cutting emissions and advancing sustainable transportation. The industry is also being propelled ahead by technological developments in EV batteries and charging systems, which result in quicker charging times and greater range. Moreover, collaborations among governmental bodies, utility companies, and commercial enterprises are expediting the investment in charging infrastructure, hence augmenting its proliferation. The EV charging stations market in Australia is expanding overall due to the emergence of renewable energy sources like solar and wind power, which present prospects for the integration of sustainable charging solutions, further fueling the market. Growing investments in electric vehicle charging stations The Australian electric vehicle charging stations market is expected to be considerably driven due to the increase in investment in the charging station infrastructure. For instance, the Australian government has been aggressively subsidizing to boost EV adoption. Consequently, the Australian Renewable Energy Agency (ARENA) announced $871,000 in funding to Intellihub in August 2022 for an Australian first deployment of 50 EV chargers installed on street-side power poles for EV owners without off-street parking across New South Wales on behalf of the Australian Government. Intellihub would install EV chargers on power poles in nine New South Wales local government areas to serve EV owners who live in apartments, townhouses, or units without on-site EV charging. The trial will demonstrate that there are currently no regulatory impediments to using existing infrastructure that already has power going to it, such as street power poles, and it will also aid in understanding the impact of EV chargers on the electricity network. The Australian electric vehicle charging stations market for the public segment is anticipated to grow Australia is seeing an increase in demand for public EV charging stations due to record-breaking sales of battery-powered automobiles. For instance, as of September 2022, 3.39% of new cars sold in Australia were electric vehicles, up from 2.05% in 2021. Furthermore, the inability of 1.9 million Australian homes to obtain off-street parking makes it challenging to charge an EV at home. As a result, the demand for public EV charging stations is on the rise. According to the Electric Vehicle Council, Australia's infrastructure for charging is growing at a notable pace.",
//         "source_name": "GlobeNewsWire",
//         "date": "Tue, 30 Jul 2024 11:18:00 -0400",
//         "topics": [
//             "PressRelease"
//         ],
//         "sentiment": "Neutral",
//         "type": "Article",
//         "tickers": [
//             "TSLA"
//         ]
//     },
//     {
//         "news_url": "https://investorplace.com/2024/07/tsla-stock-drops-as-tesla-recalls-1-8-million-evs-over-hood-issue/",
//         "image_url": "https://cdn.snapi.dev/images/v1/a/e/tsla10-2479543-2554462.jpg",
//         "title": "TSLA Stock Drops as Tesla Recalls 1.8 Million EVs Over Hood Issue",
//         "text": "Tesla (NASDAQ: TSLA ) stock is falling on Tuesday after the electric vehicle (EV) company announced new recalls over hood issues. The problem behind the recalls affecting 1.85 million Tesla EVs concerns a software bug.",
//         "source_name": "InvestorPlace",
//         "date": "Tue, 30 Jul 2024 10:48:12 -0400",
//         "topics": [],
//         "sentiment": "Negative",
//         "type": "Article",
//         "tickers": [
//             "TSLA"
//         ]
//     },
//     {
//         "news_url": "https://www.accesswire.com/viewarticle.aspx?id=894280&lang=en",
//         "image_url": "https://cdn.snapi.dev/images/v1/f/t/press14-2554331.jpg",
//         "title": "Tesla Being Investigated on Behalf of Tesla, Inc. Investors. Contact Levi & Korsinsky For Details",
//         "text": "NEW YORK, NY / ACCESSWIRE / July 30, 2024 / Levi & Korsinsky notifies investors that it has commenced an investigation of Tesla, Inc. (\"Tesla\") (NASDAQ:TSLA) concerning possible violations of federal securities laws. On July 23, 2024, after the market closed, Tesla announced its Q2 2024 results, reporting lower earnings-per-share (\"EPS\") and operating income than anticipated.",
//         "source_name": "Accesswire",
//         "date": "Tue, 30 Jul 2024 10:30:00 -0400",
//         "topics": [
//             "PressRelease"
//         ],
//         "sentiment": "Neutral",
//         "type": "Article",
//         "tickers": [
//             "TSLA"
//         ]
//     },
//     {
//         "news_url": "https://www.accesswire.com/viewarticle.aspx?id=892604&lang=en",
//         "image_url": "https://cdn.snapi.dev/images/v1/h/m/press3-2554149.jpg",
//         "title": "Tesla, Inc. (TSLA) Investigation: Bronstein, Gewirtz & Grossman, LLC Encourages Investors to Seek Compensation for Alleged Wrongdoings",
//         "text": "NEW YORK, NY / ACCESSWIRE / July 30, 2024 / Bronstein, Gewirtz & Grossman, LLC is investigating potential claims on behalf of purchasers of Tesla, Inc. (\"Tesla\" or \"the Company\") (NASDAQ:TSLA). Investors who purchased Tesla securities are encouraged to obtain additional information and assist the investigation by visiting the firm's site: bgandg.com/TSLA.",
//         "source_name": "Accesswire",
//         "date": "Tue, 30 Jul 2024 10:00:00 -0400",
//         "topics": [
//             "PressRelease"
//         ],
//         "sentiment": "Neutral",
//         "type": "Article",
//         "tickers": [
//             "TSLA"
//         ]
//     },
//     {
//         "news_url": "https://invezz.com/news/2024/07/30/tesla-to-recall-1-8-million-vehicles-in-us-over-faulty-hood-latch-detection/?utm_source=snapi",
//         "image_url": "https://cdn.snapi.dev/images/v1/o/7/tsla9-2479646-2554014.jpg",
//         "title": "Tesla to recall 1.8 million vehicles in US over faulty hood latch detection",
//         "text": "Tesla is recalling over 1.8 million vehicles in the United States due to a potential software failure that may prevent the detection of an unlatched hood, posing a significant safety risk.  The National Highway Traffic Safety Administration (NHTSA) announced the recall on Tuesday, highlighting the importance of maintaining rigorous safety standards in the automotive industry.",
//         "source_name": "Invezz",
//         "date": "Tue, 30 Jul 2024 09:26:20 -0400",
//         "topics": [],
//         "sentiment": "Negative",
//         "type": "Article",
//         "tickers": [
//             "TSLA"
//         ]
//     },
//     {
//         "news_url": "https://www.zacks.com/stock/news/2311571/tesla-etfs-time-to-buy-or-hold-post-lackluster-q2-earnings?cid=CS-STOCKNEWSAPI-FT-etf_news_and_commentary-2311571",
//         "image_url": "https://cdn.snapi.dev/images/v1/8/v/tsla38-657838-2553840.jpg",
//         "title": "Tesla ETFs: Time to Buy or Hold Post Lackluster Q2 Earnings?",
//         "text": "Tesla TSLA shares gained 5.6% on Monday after Morgan Stanley named the most valuable automaker its \"top pick\" in the U.S. automotive industry, replacing Ford F, as quoted on Reuters.",
//         "source_name": "Zacks Investment Research",
//         "date": "Tue, 30 Jul 2024 09:01:12 -0400",
//         "topics": [],
//         "sentiment": "Positive",
//         "type": "Article",
//         "tickers": [
//             "TSLA"
//         ]
//     },
//     {
//         "news_url": "https://www.investopedia.com/watch-these-tesla-price-levels-as-ev-maker-stock-continues-rollercoaster-ride-8685762",
//         "image_url": "https://cdn.snapi.dev/images/v1/q/4/tsla35-657439-2553661.jpg",
//         "title": "Watch These Tesla Price Levels as EV Maker's Stock Continues Rollercoaster Ride",
//         "text": "Tesla (TSLA) shares jumped on Monday after Morgan Stanley named the EV maker its top U.S. automaker pick, replacing Ford (F). The investment bank touted the company's energy business, arguing that it could surpass its vehicle business in value over time as investors gravitate to firms that address climate-related issues.",
//         "source_name": "Investopedia",
//         "date": "Tue, 30 Jul 2024 08:20:39 -0400",
//         "topics": [],
//         "sentiment": "Positive",
//         "type": "Article",
//         "tickers": [
//             "TSLA"
//         ]
//     },
//     {
//         "news_url": "https://investorplace.com/2024/07/tsla-forecast-why-betting-against-ev-pioneer-tesla-could-be-a-costly-mistake/",
//         "image_url": "https://cdn.snapi.dev/images/v1/7/z/tsla22-2479276-2553638.jpg",
//         "title": "TSLA Forecast: Why Betting Against EV Pioneer Tesla Could Be a Costly Mistake",
//         "text": "When Tesla (NASDAQ: TSLA ) stock was listed in 2010, it commanded a market capitalization of $2.23 billion. After almost a decade and a half, Tesla's market valuation is at $690 billion.",
//         "source_name": "InvestorPlace",
//         "date": "Tue, 30 Jul 2024 08:00:00 -0400",
//         "topics": [],
//         "sentiment": "Negative",
//         "type": "Article",
//         "tickers": [
//             "TSLA"
//         ]
//     },
//     {
//         "news_url": "https://www.businessinsider.com/tesla-recalls-1-8-million-vehicles-hood-issues-2024-7",
//         "image_url": "https://cdn.snapi.dev/images/v1/k/y/tsla16-2479420-2553504.jpg",
//         "title": "Tesla faces fresh headache as it recalls 1.8 million vehicles over hood problems",
//         "text": "Tesla is recalling 1.8 million cars in the US, the NHTSA said. The concerns revolve around issues with the software that detects when a hood is unlatched.",
//         "source_name": "Business Insider",
//         "date": "Tue, 30 Jul 2024 07:28:16 -0400",
//         "topics": [
//             "paywall"
//         ],
//         "sentiment": "Negative",
//         "type": "Article",
//         "tickers": [
//             "TSLA"
//         ]
//     },
//     {
//         "news_url": "https://www.marketwatch.com/story/tesla-recalling-over-1-8-million-cars-in-the-u-s-over-hood-issue-says-nhtsa-49e37eaf",
//         "image_url": "https://cdn.snapi.dev/images/v1/l/a/tsla5-2479766-2553544.jpg",
//         "title": "Tesla recalling over 1.8 million cars in the U.S. over hood issue, says NHTSA",
//         "text": "Tesla Inc. TSLA is recalling over 1.8 million vehicles in the U.S. because software may fail to detect an unlatched hood, according to the National Highway Traffic Safety Administration. “The hood latch assembly may fail to detect an unlatched hood condition after the hood has been opened,” said the NHTSA, in a notice.",
//         "source_name": "Market Watch",
//         "date": "Tue, 30 Jul 2024 07:24:00 -0400",
//         "topics": [
//             "paylimitwall"
//         ],
//         "sentiment": "Negative",
//         "type": "Article",
//         "tickers": [
//             "TSLA"
//         ]
//     },
//     {
//         "news_url": "https://www.wsj.com/business/autos/tesla-to-recall-more-than-1-8-million-vehicles-due-to-hood-issues-8291aa00",
//         "image_url": "https://cdn.snapi.dev/images/v1/3/4/tsla28-2479134-2554797.jpg",
//         "title": "Tesla Recalls More Than 1.8 Million Vehicles Due to Hood Issue",
//         "text": "Tesla TSLA -2.63%decrease; red down pointing triangle is recalling more than 1.8 million vehicles in the U.S. due to a software issue that could result in the hood fully opening and obstructing the driver's view.",
//         "source_name": "WSJ",
//         "date": "Tue, 30 Jul 2024 07:09:00 -0400",
//         "topics": [
//             "paywall"
//         ],
//         "sentiment": "Negative",
//         "type": "Article",
//         "tickers": [
//             "TSLA"
//         ]
//     },
//     {
//         "news_url": "https://finbold.com/teslas-us-market-share-shrinks-33-in-2-years-as-competition-intensifies/?utm_source=snapi",
//         "image_url": "https://cdn.snapi.dev/images/v1/d/y/tsla12-2479476-2553397.jpg",
//         "title": "Tesla's US market share shrinks 33% in 2 years as competition intensifies",
//         "text": "At the start of 2024, the term ‘EV winter ‘ – referring to the slowdown faced by the electric vehicle (EV) industry – started getting popularized. Perhaps the most shocking report showing the state of the sector was that Tesla Motors (NASDAQ: TSLA) sold only a single car in South Korea in January of the year.",
//         "source_name": "Finbold",
//         "date": "Tue, 30 Jul 2024 07:05:42 -0400",
//         "topics": [],
//         "sentiment": "Negative",
//         "type": "Article",
//         "tickers": [
//             "TSLA"
//         ]
//     },
//     {
//         "news_url": "https://www.proactiveinvestors.com/companies/news/1052975?SNAPI",
//         "image_url": "https://cdn.snapi.dev/images/v1/n/g/tsla11-2479532-2553313.jpg",
//         "title": "Tesla reportedly recalling 1.8m cars in the US",
//         "text": "Tesla Inc (NASDAQ:TSLA) is recalling over 1.8 million vehicles in the United States due to a potential software failure that might not detect an unlatched hood, according to Reuters citing the the National Highway Traffic Safety Administration (NHTSA). This issue could cause the hood to fully open and obstruct the driver's view, increasing the risk of a crash, the report said.",
//         "source_name": "Proactive Investors",
//         "date": "Tue, 30 Jul 2024 06:52:04 -0400",
//         "topics": [],
//         "sentiment": "Negative",
//         "type": "Article",
//         "tickers": [
//             "TSLA"
//         ]
//     },
//     {
//         "news_url": "https://investorplace.com/2024/07/7-top-tech-stocks-to-buy-and-hold-for-the-long-haul/",
//         "image_url": "https://cdn.snapi.dev/images/v1/a/a/computer-electronic38-2553312.jpg",
//         "title": "7 Top Tech Stocks to Buy and Hold for the Long Haul",
//         "text": "Investing in the technology sector continues to be an excellent choice overall. This chart shows the sector-by-sector returns from the S&P 500 between 2009 and 2023.",
//         "source_name": "InvestorPlace",
//         "date": "Tue, 30 Jul 2024 06:45:00 -0400",
//         "topics": [
//             "StocksToWatch"
//         ],
//         "sentiment": "Positive",
//         "type": "Article",
//         "tickers": [
//             "AAPL",
//             "ASML",
//             "CRM",
//             "MSFT",
//             "NEE",
//             "TSLA",
//             "TSM"
//         ]
//     }
// ];
 const newsItems =
 [
    {
        "uuid": "4470c60e-2ad2-40e8-95ba-9bf7d6ce2305",
        "title": "Tue: Northern tensions weigh on TASE",
        "description": "Camtek fell sharply after yesterday’s big gains as Strauss bucked the market.",
        "keywords": "",
        "snippet": "The Tel Aviv Stock Exchange fells today as the situation in the north weighed on the market. The Tel Aviv 35 Index fell 0.78%, to 2,005.23 points; the Tel Aviv ...",
        "url": "https://en.globes.co.il/en/article-tue-northern-tensions-weigh-on-tase-1001485526",
        "image_url": "https://images.globes.co.il/images/NewGlobes/big_image_800/2018/Globes_Archive_800x392.2018729T150619.jpg",
        "language": "en",
        "published_at": "2024-07-30T19:06:22.000000Z",
        "source": "en.globes.co.il",
        "relevance_score": null,
        "entities": [
            {
                "symbol": "ICL",
                "name": "ICL Group Ltd",
                "exchange": null,
                "exchange_long": null,
                "country": "us",
                "type": "equity",
                "industry": "Basic Materials",
                "match_score": 41.36129,
                "sentiment_score": 0,
                "highlights": [
                    {
                        "highlight": "(NYSE: TEVA; TASE: TEVA) fell 2.17% and <em>ICL</em> (TASE: <em>ICL</em>: <em>NYSE</em>: <em>ICL</em>) fell 1.98%. Israel Discount Bank (TASE: DSCT) fell 1.47%.\n\nBank Leumi (TASE:LUMI) led the market today, rising 0.09% on the day's biggest trading turnover and Mizrahi Tefahot Bank rose 0.67%.",
                        "sentiment": 0,
                        "highlighted_in": "main_text"
                    }
                ]
            },
            {
                "symbol": "TEVA",
                "name": "Teva Pharmaceutical Industries Limited",
                "exchange": null,
                "exchange_long": null,
                "country": "us",
                "type": "equity",
                "industry": "Healthcare",
                "match_score": 48.62619,
                "sentiment_score": 0,
                "highlights": [
                    {
                        "highlight": "(Nasdaq:NVMI; TASE:NVMI) fell 0.73%, <em>Teva</em> <em>Pharmaceutical</em> <em>Industries</em> Ltd. (<em>NYSE</em>: <em>TEVA</em>; TASE: TEVA) fell 2.17% and ICL (TASE: ICL: NYSE: ICL) fell 1.98%. Israel Discount Bank (TASE: DSCT) fell 1.47%.\n\nBank Leumi (TASE:LUMI) led the market today, rising 0.09% on the day's biggest trading turnover and Mizrahi Tefahot Bank rose 0.67%.",
                        "sentiment": 0,
                        "highlighted_in": "main_text"
                    }
                ]
            }
        ],
        "similar": []
    },
    {
        "uuid": "59fca27d-a3d7-42d2-9ff8-b3978373a9b7",
        "title": "Housing affordability is 'moving in the right direction,' economist says. Here's what to know",
        "description": "Some signs are pointing towards a rebalancing in the housing market that favors homebuyers, experts say. Here's what to pay attention to.",
        "keywords": "Mortgages, Investment strategy, Breaking News: Investing, Real estate, Housing, Personal finance, business news",
        "snippet": "Sdi Productions | E+ | Getty Images\n\n'The bigger picture' shows payments are still high\n\nThe median loan amount on new applications fell to $320,512 in June, fr...",
        "url": "https://www.cnbc.com/2024/07/30/here-are-the-signs-of-an-improving-housing-market.html",
        "image_url": "https://image.cnbcfm.com/api/v1/image/108013479-1722343408521-gettyimages-1178376514-20190820_homemoveincouples_sdm49019.jpeg?v=1722343469&w=1920&h=1080",
        "language": "en",
        "published_at": "2024-07-30T18:07:30.000000Z",
        "source": "cnbc.com",
        "relevance_score": null,
        "entities": [
            {
                "symbol": "FMCKL",
                "name": "Freddie Mac",
                "exchange": null,
                "exchange_long": null,
                "country": "us",
                "type": "equity",
                "industry": "Financial Services",
                "match_score": 27.260944,
                "sentiment_score": 0.507,
                "highlights": [
                    {
                        "highlight": "The 30-year fixed rate mortgage declined to 6.78% on July 25, down from 7.22% on May 2, according to <em>Freddie</em> <em>Mac</em> data via the Fed.\n\nBut it's a \"very small improvement\" in context, he said — the typical monthly mortgage payment has essentially doubled from pre-Covid years.",
                        "sentiment": 0.507,
                        "highlighted_in": "main_text"
                    }
                ]
            },
            {
                "symbol": "FMCCI",
                "name": "Freddie Mac",
                "exchange": null,
                "exchange_long": null,
                "country": "us",
                "type": "equity",
                "industry": "Financial Services",
                "match_score": 27.260944,
                "sentiment_score": 0.507,
                "highlights": [
                    {
                        "highlight": "The 30-year fixed rate mortgage declined to 6.78% on July 25, down from 7.22% on May 2, according to <em>Freddie</em> <em>Mac</em> data via the Fed.\n\nBut it's a \"very small improvement\" in context, he said — the typical monthly mortgage payment has essentially doubled from pre-Covid years.",
                        "sentiment": 0.507,
                        "highlighted_in": "main_text"
                    }
                ]
            }
        ],
        "similar": []
    },
    {
        "uuid": "c606826c-92d8-4122-993d-f79a1e7b3023",
        "title": "Why Merck Shares Are Trading Lower By 10%? Here Are Other Stocks Moving In Tuesday's Mid-Day Session - Merck & Co (NYSE:MRK)",
        "description": "",
        "keywords": "",
        "snippet": "Shares of Merck & Co., Inc. MRK fell sharply during Tuesday's session after the company reported second-quarter financial results and cut its FY24 adjusted EPS ...",
        "url": "https://www.benzinga.com/news/24/07/40047213/why-merck-shares-are-trading-lower-by-10-here-are-other-stocks-moving-in-tuesdays-mid-day-session",
        "image_url": "https://cdn.benzinga.com/files/images/story/2024/07/30/Headquarters-Rahway-Site-Entrance-HI_0.jpeg?width=1200&height=800&fit=crop",
        "language": "en",
        "published_at": "2024-07-30T17:53:26.000000Z",
        "source": "benzinga.com",
        "relevance_score": null,
        "entities": [
            {
                "symbol": "DGEAF",
                "name": "Diageo plc",
                "exchange": null,
                "exchange_long": null,
                "country": "us",
                "type": "equity",
                "industry": "Consumer Defensive",
                "match_score": 11.500831,
                "sentiment_score": 0.5994,
                "highlights": [
                    {
                        "highlight": "<em>Diageo</em> <em>plc</em> DEO fell 5.5% to $124.30 after the company missed annual profit expectations.\n\nfell 5.5% to $124.30 after the company missed annual profit expectations. Fresenius Medical Care AG FMS shares declined 4.5% to $19.45 following weak quarterly sales.\n\nNow Read This:",
                        "sentiment": 0.5994,
                        "highlighted_in": "main_text"
                    }
                ]
            },
            {
                "symbol": "PHGUF",
                "name": "Pharming Group N.V.",
                "exchange": null,
                "exchange_long": null,
                "country": "us",
                "type": "equity",
                "industry": "Healthcare",
                "match_score": 24.671017,
                "sentiment_score": 0.8225,
                "highlights": [
                    {
                        "highlight": "<em>Pharming</em> <em>Group</em> <em>N.V</em> . PHAR shares gained 9.8% to $8.28. <em>Pharming</em> <em>Group</em> will report second quarter financial results on Aug. 1.\n\n. shares gained 9.8% to $8.28. <em>Pharming</em> <em>Group</em> will report second quarter financial results on Aug. 1. PayPal Holdings, Inc .",
                        "sentiment": 0.8225,
                        "highlighted_in": "main_text"
                    }
                ]
            }
        ],
        "similar": []
    },
    {
        "uuid": "fab19f78-b46f-419b-8fda-2817419fd3ac",
        "title": "Leonardo S.p.a. 2024 Q2 - Results - Earnings Call Presentation (OTCMKTS:FINMF)",
        "description": "The following slide deck was published by Leonardo S.p.a.",
        "keywords": "",
        "snippet": "To ensure this doesn’t happen in the future, please enable Javascript and cookies in your browser.\n\nIf you have an ad-blocker enabled you may be blocked from ...",
        "url": "https://seekingalpha.com/article/4708111-leonardo-s-p-2024-q2-results-earnings-call-presentation",
        "image_url": "https://static.seekingalpha.com/assets/og_image_1200-29b2bfe1a595477db6826bd2126c63ac2091efb7ec76347a8e7f81ba17e3de6c.png",
        "language": "en",
        "published_at": "2024-07-30T17:40:42.000000Z",
        "source": "seekingalpha.com",
        "relevance_score": null,
        "entities": [
            {
                "symbol": "FINMY",
                "name": "Leonardo S.p.a.",
                "exchange": null,
                "exchange_long": null,
                "country": "us",
                "type": "equity",
                "industry": "Industrials",
                "match_score": 129.25684,
                "sentiment_score": 0,
                "highlights": [
                    {
                        "highlight": "<em>Leonardo</em> <em>S.p.a</em>. 2024 Q2 - Results - Earnings Call Presentation (OTCMKTS:FINMF)",
                        "sentiment": 0,
                        "highlighted_in": "title"
                    }
                ]
            },
            {
                "symbol": "FINMF",
                "name": "Leonardo S.p.a.",
                "exchange": null,
                "exchange_long": null,
                "country": "us",
                "type": "equity",
                "industry": "Industrials",
                "match_score": 129.25684,
                "sentiment_score": 0,
                "highlights": [
                    {
                        "highlight": "<em>Leonardo</em> <em>S.p.a</em>. 2024 Q2 - Results - Earnings Call Presentation (OTCMKTS:FINMF)",
                        "sentiment": 0,
                        "highlighted_in": "title"
                    }
                ]
            }
        ],
        "similar": []
    },
    {
        "uuid": "54b7ed45-26d3-498d-a0ba-73eeb3aa2d81",
        "title": "VitalHub Corp. to Acquire MedCurrent Corporation By Investing.com",
        "description": "VitalHub Corp. to Acquire MedCurrent Corporation",
        "keywords": "",
        "snippet": "TORONTO, July 30, 2024 (GLOBE NEWSWIRE) -- VitalHub Corp. (TSX: VHI) (OTCQX: VHIBF) (the Company or VitalHub) is pleased to announce that it has signed a defini...",
        "url": "https://www.investing.com/news/press-releases/vitalhub-corp-to-acquire-medcurrent-corporation-93CH-3544325",
        "image_url": "https://i-invdn-com.investing.com/news/World_News_8_800x533_L_1420026210.jpg",
        "language": "en",
        "published_at": "2024-07-30T17:28:22.000000Z",
        "source": "investing.com",
        "relevance_score": null,
        "entities": [
            {
                "symbol": "MEDD",
                "name": "Medical Imaging Corp.",
                "exchange": null,
                "exchange_long": null,
                "country": "us",
                "type": "equity",
                "industry": "Healthcare",
                "match_score": 18.684639,
                "sentiment_score": 0.318233,
                "highlights": [
                    {
                        "highlight": "To date, the development of OrderWise has been primarily focused on improving appropriateness of orders for <em>medical</em> <em>imaging</em> tests. MedCurrent provides its solutions in over 80 customer installations in Canada, the United Kingdom, the United States of America, and Australia.",
                        "sentiment": 0.8934,
                        "highlighted_in": "main_text"
                    },
                    {
                        "highlight": "Hospital diagnostics, including <em>medical</em> <em>imaging</em> and laboratory testing, are critical components of healthcare delivery, accounting for a sizable portion of hospital expenditures1. In Canada alone, hospitals spend over $3 billion annually on <em>medical</em> <em>imaging</em> and $5.9 billion on laboratory testing2.",
                        "sentiment": -0.5106,
                        "highlighted_in": "main_text"
                    },
                    {
                        "highlight": "Canadian Association of Radiologists, Addressing the <em>Medical</em> <em>Imaging</em> Dilemma in Canada: Restoring Timely Access for Patients Post-Pandemic. Canadian Institute for Health Information, Unnecessary Care in Canada, April 2017.\n\nSource: VitalHub Corp.",
                        "sentiment": 0.5719,
                        "highlighted_in": "main_text"
                    }
                ]
            },
            {
                "symbol": "TSCC",
                "name": "Technology Solutions Company",
                "exchange": null,
                "exchange_long": null,
                "country": "us",
                "type": "equity",
                "industry": "Technology",
                "match_score": 9.06354,
                "sentiment_score": 0.25,
                "highlights": [
                    {
                        "highlight": "VitalHub's acquisition of MedCurrent aligns with VitalHub's strategic vision to integrate cutting-edge <em>technology</em> <em>solutions</em> that streamline healthcare delivery.",
                        "sentiment": 0.25,
                        "highlighted_in": "main_text"
                    }
                ]
            }
        ],
        "similar": [
            {
                "uuid": "4042e51e-dfe3-46e0-ac01-01b348d10bf6",
                "title": "Savi Financial Corporation Reports Second Quarter 2024 Results",
                "description": "MOUNT VERNON, Wash., July  30, 2024  (GLOBE NEWSWIRE) -- Savi Financial Corporation, Inc. (OTC Pink: SVVB), the bank holding company for SaviBank, today...",
                "keywords": "Other OTC:SVVB, SaviBank",
                "snippet": "MOUNT VERNON, Wash., July 30, 2024 (GLOBE NEWSWIRE) -- Savi Financial Corporation, Inc. (OTC Pink: SVVB), the bank holding company for SaviBank, today announced...",
                "url": "https://www.globenewswire.com/news-release/2024/07/30/2921048/0/en/Savi-Financial-Corporation-Reports-Second-Quarter-2024-Results.html",
                "image_url": "https://ml.globenewswire.com/Resource/Download/812b9f43-fccd-4046-a843-f3f153dff85e",
                "language": "en",
                "published_at": "2024-07-30T13:00:00.000000Z",
                "source": "globenewswire.com",
                "relevance_score": null,
                "entities": [
                    {
                        "symbol": "CNGGF",
                        "name": "Cann Group Limited",
                        "exchange": null,
                        "exchange_long": null,
                        "country": "us",
                        "type": "equity",
                        "industry": "Healthcare",
                        "match_score": 11.779714,
                        "sentiment_score": 0.8246,
                        "highlights": [
                            {
                                "highlight": "<em>Cann</em>, Chairman and President of Savi Financial Corporation. “We are encouraged by our strong pipeline of SBA loans and anticipate an improvement in our non-interest income in future quarters.",
                                "sentiment": 0.8316,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "“We look forward to working with Harborstone Credit Union to continue our tradition of fostering meaningful customer relationships while having a positive impact in our local communities,” said <em>Cann</em>.",
                                "sentiment": 0.8176,
                                "highlighted_in": "main_text"
                            }
                        ]
                    },
                    {
                        "symbol": "SVVB",
                        "name": "Savi Financial Corporation, Inc.",
                        "exchange": null,
                        "exchange_long": null,
                        "country": "us",
                        "type": "equity",
                        "industry": "Financial Services",
                        "match_score": 84.13216,
                        "sentiment_score": -0.005275,
                        "highlights": [
                            {
                                "highlight": "., July 30, 2024 (GLOBE NEWSWIRE) -- <em>Savi</em> <em>Financial</em> <em>Corporation</em>, <em>Inc</em>. (OTC Pink: SVVB), the bank holding company for SaviBank, today announced a net loss of $5,000, or a loss of $0.00 per diluted share, for the second quarter of 2024, compared to a net loss of $416,000, or a loss of $0.09 per diluted share, in the first quarter of 2024.",
                                "sentiment": -0.5859,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "Cann, Chairman and President of <em>Savi</em> <em>Financial</em> Corporation. “We are encouraged by our strong pipeline of SBA loans and anticipate an improvement in our non-interest income in future quarters.",
                                "sentiment": 0.8316,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "The transaction is anticipated to be completed in the first quarter of 2025, subject to receiving all regulatory approvals, approval by the stockholders of <em>Savi</em> <em>Financial</em>, and other customary closing conditions.",
                                "sentiment": 0.4767,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "Sources:\n\nhttps://www.nwmls.com/real-estate-news/monthly-market-snapshot/\n\nhttps://www.capitaliq.spglobal.com/\n\nAbout <em>Savi</em> <em>Financial</em> <em>Corporation</em> <em>Inc</em>. and SaviBank\n\n<em>Savi</em> <em>Financial</em> Corporation is the bank holding company which owns SaviBank.",
                                "sentiment": 0,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "savings and any revenue synergies from the acquisition may not be fully realized within the expected timeframes, disruption from the acquisition may make it more difficult to maintain relationships with customers, associates, or suppliers, the required governmental approvals of the acquisition may not be obtained on the proposed terms and schedule, or <em>Savi</em>",
                                "sentiment": -0.6444,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "<em>Financial</em> shareholders may not approve the acquisition, any of which could cause actual results to differ materially from future results expressed or implied by such forward-looking statements.",
                                "sentiment": 0,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "None of Harborstone Credit Union, <em>Savi</em> <em>Financial</em> or SaviBank undertake any obligation to publicly update or revise any forward-looking statements, whether as a result of new information, future events, or otherwise, to reflect circumstances or events that occur after the date the forward-looking statements are made.",
                                "sentiment": -0.1202,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "<em>Savi</em> <em>Financial</em> Corporation Reports Second Quarter 2024 Results",
                                "sentiment": 0,
                                "highlighted_in": "title"
                            }
                        ]
                    },
                    {
                        "symbol": "SKLTF",
                        "name": "SEEK Limited",
                        "exchange": null,
                        "exchange_long": null,
                        "country": "us",
                        "type": "equity",
                        "industry": "Industrials",
                        "match_score": 6.177958,
                        "sentiment_score": 0.6369,
                        "highlights": [
                            {
                                "highlight": "“We continue to <em>seek</em> out lending opportunities from new and existing customers and anticipate slightly slower than historic loan growth in the year ahead.”",
                                "sentiment": 0.6369,
                                "highlighted_in": "main_text"
                            }
                        ]
                    }
                ]
            },
            {
                "uuid": "8289a35b-a972-47dc-a974-557fa1868db2",
                "title": "VitalHub Corp. to Acquire MedCurrent Corporation",
                "description": "TORONTO, July  30, 2024  (GLOBE NEWSWIRE) — VitalHub Corp. (TSX: VHI) (OTCQX: VHIBF) (the “Company” or “VitalHub”) is pleased to announce that it has signed a defin…",
                "keywords": "",
                "snippet": "This advertisement has not loaded yet, but your article continues below.\n\nVitalHub Corp. to Acquire MedCurrent Corporation\n\nArticle content TORONTO, July 30, 20...",
                "url": "https://financialpost.com/globe-newswire/vitalhub-corp-to-acquire-medcurrent-corporation",
                "image_url": "https://dcs-static.gprod.postmedia.digital/16.6.2/websites/images/fp/favicon-fp.ico",
                "language": "en",
                "published_at": "2024-07-30T11:33:12.000000Z",
                "source": "financialpost.com",
                "relevance_score": null,
                "entities": [
                    {
                        "symbol": "MEDD",
                        "name": "Medical Imaging Corp.",
                        "exchange": null,
                        "exchange_long": null,
                        "country": "us",
                        "type": "equity",
                        "industry": "Healthcare",
                        "match_score": 16.124397,
                        "sentiment_score": 0.438425,
                        "highlights": [
                            {
                                "highlight": "To date, the development of OrderWise has been primarily focused on improving appropriateness of orders for <em>medical</em> <em>imaging</em> tests. MedCurrent provides its solutions in over 80 customer installations in Canada, the United Kingdom, the United States of America, and Australia.",
                                "sentiment": 0.8934,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "Sign In or Create an Account Email Address Continue or View more offers\n\nArticle content Hospital diagnostics, including <em>medical</em> <em>imaging</em> and laboratory testing, are critical components of healthcare delivery, accounting for a sizable portion of hospital expenditures1.",
                                "sentiment": -0.0516,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "In Canada alone, hospitals spend over $3 billion annually on <em>medical</em> <em>imaging</em> and $5.9 billion on laboratory testing2. Addressing inefficiencies and improving appropriateness in these areas is essential to reducing costs and enhancing patient outcomes.",
                                "sentiment": 0.2023,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "Canadian Association of Radiologists, “Addressing the <em>Medical</em> <em>Imaging</em> Dilemma in Canada: Restoring Timely Access for Patients Post-Pandemic.” Canadian Institute for Health Information, “Unnecessary Care in Canada”, April 2017.\n\n\n\n\n\nArticle content\n\nShare this article in your social network",
                                "sentiment": 0.7096,
                                "highlighted_in": "main_text"
                            }
                        ]
                    },
                    {
                        "symbol": "TSCC",
                        "name": "Technology Solutions Company",
                        "exchange": null,
                        "exchange_long": null,
                        "country": "us",
                        "type": "equity",
                        "industry": "Technology",
                        "match_score": 7.396865,
                        "sentiment_score": 0.25,
                        "highlights": [
                            {
                                "highlight": "VitalHub’s acquisition of MedCurrent aligns with VitalHub’s strategic vision to integrate cutting-edge <em>technology</em> <em>solutions</em> that streamline healthcare delivery.",
                                "sentiment": 0.25,
                                "highlighted_in": "main_text"
                            }
                        ]
                    },
                    {
                        "symbol": "VHIBF",
                        "name": "Vitalhub Corp.",
                        "exchange": null,
                        "exchange_long": null,
                        "country": "us",
                        "type": "equity",
                        "industry": "Healthcare",
                        "match_score": 142.17505,
                        "sentiment_score": 0.181282,
                        "highlights": [
                            {
                                "highlight": "<em>VitalHub</em> <em>Corp</em>. to Acquire MedCurrent Corporation\n\nArticle content TORONTO, July 30, 2024 (GLOBE NEWSWIRE) — <em>VitalHub</em> <em>Corp</em>.",
                                "sentiment": 0,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "(TSX: VHI) (OTCQX: <em>VHIBF</em>) (the “Company” or “<em>VitalHub</em>”) is pleased to announce that it has signed a definitive agreement (the “Definitive Agreement”) to acquire MedCurrent Corporation and its subsidiaries (“MedCurrent”), by way of a court-approved plan of arrangement under the provisions of the Business Corporations Act (Ontario) (the “Transaction”)",
                                "sentiment": 0.7269,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "Try refreshing your browser, or <em>VitalHub</em> <em>Corp</em>. to Acquire MedCurrent Corporation Back to video MedCurrent is a physician-founded Clinical Decision Support (CDS) company focused on improving the quality of care and managing health system costs through its innovative and scalable solution, OrderWise.",
                                "sentiment": 0.9382,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "Article content “This acquisition represents a significant step forward in our mission to enhance healthcare delivery through technology,” said Dan Matlow, CEO of <em>VitalHub</em>. “MedCurrent’s unique CDS software addresses a clear and critical need in the healthcare system.",
                                "sentiment": 0.2732,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "Upon completion of the Transaction, MedCurrent will become a wholly owned subsidiary of <em>VitalHub</em>.",
                                "sentiment": 0,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "ABOUT <em>VITALHUB</em> Software for Health and Human Services providers designed to simplify the user experience and optimize outcomes.\n\nAdvertisement 6 Story continues below This advertisement has not loaded yet, but your article continues below.",
                                "sentiment": 0.2732,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "Article content <em>VitalHub</em> is a leading software company dedicated to empowering Health and Human Services providers.",
                                "sentiment": 0.4588,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "Currently <em>VitalHub</em> serves more than 1,000 clients across Canada, USA, UK, Australia, the Middle East, and Europe. <em>VitalHub</em> is based in Toronto, Canada, with an offshore development hub in Sri Lanka. The <em>VitalHub</em> team comprises more than 400 team members globally.",
                                "sentiment": 0,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "The Company is publicly traded on the Toronto Stock Exchange (TSX) under the symbol “VHI” and on the OTC Markets OTCQX Exchange under the symbol “<em>VHIBF</em>”.\n\nAdvertisement 7 Story continues below This advertisement has not loaded yet, but your article continues below.\n\nArticle content https://www.vitalhub.com/ CONTACT INFORMATION <em>VitalHub</em> <em>Corp</em>.",
                                "sentiment": 0,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "<em>VitalHub</em> made certain material assumptions, including but not limited to: prevailing market conditions; general business, economic, competitive, political and social uncertainties; delay or failure to receive board, shareholder or regulatory approvals; and the ability of <em>VitalHub</em> and MedCurrent to execute and achieve its business objectives, to develop",
                                "sentiment": -0.6762,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "<em>VitalHub</em> <em>Corp</em>. to Acquire MedCurrent Corporation",
                                "sentiment": 0,
                                "highlighted_in": "title"
                            }
                        ]
                    },
                    {
                        "symbol": "VHI.V",
                        "name": "Vitalhub Corp.",
                        "exchange": null,
                        "exchange_long": null,
                        "country": "ca",
                        "type": "equity",
                        "industry": "Healthcare",
                        "match_score": 128.31631,
                        "sentiment_score": 0.188427,
                        "highlights": [
                            {
                                "highlight": "<em>VitalHub</em> <em>Corp</em>. to Acquire MedCurrent Corporation\n\nArticle content TORONTO, July 30, 2024 (GLOBE NEWSWIRE) — <em>VitalHub</em> <em>Corp</em>.",
                                "sentiment": 0,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "Try refreshing your browser, or <em>VitalHub</em> <em>Corp</em>. to Acquire MedCurrent Corporation Back to video MedCurrent is a physician-founded Clinical Decision Support (CDS) company focused on improving the quality of care and managing health system costs through its innovative and scalable solution, OrderWise.",
                                "sentiment": 0.9382,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "Article content “This acquisition represents a significant step forward in our mission to enhance healthcare delivery through technology,” said Dan Matlow, CEO of <em>VitalHub</em>. “MedCurrent’s unique CDS software addresses a clear and critical need in the healthcare system.",
                                "sentiment": 0.2732,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "Upon completion of the Transaction, MedCurrent will become a wholly owned subsidiary of <em>VitalHub</em>.",
                                "sentiment": 0,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "ABOUT <em>VITALHUB</em> Software for Health and Human Services providers designed to simplify the user experience and optimize outcomes.\n\nAdvertisement 6 Story continues below This advertisement has not loaded yet, but your article continues below.",
                                "sentiment": 0.2732,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "Article content <em>VitalHub</em> is a leading software company dedicated to empowering Health and Human Services providers.",
                                "sentiment": 0.4588,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "Currently <em>VitalHub</em> serves more than 1,000 clients across Canada, USA, UK, Australia, the Middle East, and Europe. <em>VitalHub</em> is based in Toronto, Canada, with an offshore development hub in Sri Lanka. The <em>VitalHub</em> team comprises more than 400 team members globally.",
                                "sentiment": 0,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "Article content https://www.vitalhub.com/ CONTACT INFORMATION <em>VitalHub</em> <em>Corp</em>.\n\nDan Matlow\n\nChief Executive Officer, Director\n\n(416) 727-9061\n\ndan.matlow@vitalhub.com CAUTIONARY STATEMENT This news release contains “forward-looking information” within the meaning of Canadian securities legislation.",
                                "sentiment": 0.296,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "<em>VitalHub</em> made certain material assumptions, including but not limited to: prevailing market conditions; general business, economic, competitive, political and social uncertainties; delay or failure to receive board, shareholder or regulatory approvals; and the ability of <em>VitalHub</em> and MedCurrent to execute and achieve its business objectives, to develop",
                                "sentiment": -0.6762,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "<em>VitalHub</em> assumes no obligation to update or revise the forward-looking information in this news release unless it is required to do so under Canadian securities legislation. CD Howe Institute, Commentary No. 533, “What the Doctor Ordered: Improving the Use and Value of Laboratory Testing”.",
                                "sentiment": 0.5095,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "<em>VitalHub</em> <em>Corp</em>. to Acquire MedCurrent Corporation",
                                "sentiment": 0,
                                "highlighted_in": "title"
                            }
                        ]
                    }
                ]
            },
            {
                "uuid": "13e7ee25-b517-4eec-8e60-abcc50f6facd",
                "title": "Getty Realty Corp. Announces Pricing of Public Offering of 3,500,000 Shares of Common Stock",
                "description": "NEW YORK, July  30, 2024  (GLOBE NEWSWIRE) -- Getty Realty Corp. (NYSE: GTY) (the “Company”) today announced the pricing of an underwritten public offering...",
                "keywords": "NYSE:GTY, Getty Realty Corp.",
                "snippet": "NEW YORK, July 30, 2024 (GLOBE NEWSWIRE) -- Getty Realty Corp. (NYSE: GTY) (the “Company”) today announced the pricing of an underwritten public offering of...",
                "url": "https://www.globenewswire.com/news-release/2024/07/30/2920847/0/en/Getty-Realty-Corp-Announces-Pricing-of-Public-Offering-of-3-500-000-Shares-of-Common-Stock.html",
                "image_url": "https://ml.globenewswire.com/Resource/Download/2ea9e743-9449-4e3e-9688-dd3351056799",
                "language": "en",
                "published_at": "2024-07-30T11:00:00.000000Z",
                "source": "globenewswire.com",
                "relevance_score": null,
                "entities": [
                    {
                        "symbol": "BR",
                        "name": "Broadridge Financial Solutions, Inc.",
                        "exchange": null,
                        "exchange_long": null,
                        "country": "us",
                        "type": "equity",
                        "industry": "Technology",
                        "match_score": 15.905083,
                        "sentiment_score": 0.296,
                        "highlights": [
                            {
                                "highlight": "Morgan Securities LLC, c/o <em>Broadridge</em> <em>Financial</em> <em>Solutions</em>, 1155 Long Island Avenue, Edgewood, New York 11717 or by email at : prospectus-eq_fi@jpmchase.com and postsalemanualrequests@broadridge.com; or KeyBanc Capital Markets Inc., Attn: Equity Syndicate, 127 Public Square, 7th Floor, Cleveland, Ohio 44114, phone: 1(800) 859-1783.",
                                "sentiment": 0.296,
                                "highlighted_in": "main_text"
                            }
                        ]
                    },
                    {
                        "symbol": "GTY",
                        "name": "Getty Realty Corp.",
                        "exchange": null,
                        "exchange_long": null,
                        "country": "us",
                        "type": "equity",
                        "industry": "Real Estate",
                        "match_score": 144.63797,
                        "sentiment_score": 0.322167,
                        "highlights": [
                            {
                                "highlight": "NEW YORK, July 30, 2024 (GLOBE NEWSWIRE) -- <em>Getty</em> <em>Realty</em> <em>Corp</em>. (<em>NYSE</em>: <em>GTY</em>) (the “Company”) today announced the pricing of an underwritten public offering of 3,500,000 shares of its common stock, sold on a forward basis in connection with the forward sale agreements described below, at a public offering price of $30.10 per share.",
                                "sentiment": 0.6705,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "About <em>Getty</em> <em>Realty</em> <em>Corp</em> .\n\n<em>Getty</em> <em>Realty</em> <em>Corp</em>. is a publicly traded, net lease REIT specializing in the acquisition, financing and development of convenience, automotive and other single tenant retail real estate.",
                                "sentiment": 0,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "<em>Getty</em> <em>Realty</em> <em>Corp</em>. Announces Pricing of Public Offering of 3,500,000 Shares of Common Stock",
                                "sentiment": 0.296,
                                "highlighted_in": "title"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "uuid": "ccdfb37f-13ad-4609-bcc7-506fea5ecdec",
        "title": "DeFi Technologies and Zero Computing Announce Strategic Partnership over Integrating Validator, Trading and ZK Infrastructure By Investing.com",
        "description": "DeFi Technologies and Zero Computing Announce Strategic Partnership over Integrating Validator, Trading and ZK Infrastructure",
        "keywords": "",
        "snippet": "Strategic Partnership : DeFi Technologies partners with Zero Computing to build critical infrastructure, enhancing DeFi Alpha, the Company's arbitrage trading d...",
        "url": "https://www.investing.com/news/press-releases/defi-technologies-and-zero-computing-announce-strategic-partnership-over-integrating-validator-trading-and-zk-infrastructure-93CH-3544324",
        "image_url": "https://i-invdn-com.investing.com/news/international_newspapers_69x52._800x533_L_1419494241.jpg",
        "language": "en",
        "published_at": "2024-07-30T17:28:12.000000Z",
        "source": "investing.com",
        "relevance_score": null,
        "entities": [
            {
                "symbol": "RDNAF",
                "name": "DeFi Technologies Inc.",
                "exchange": null,
                "exchange_long": null,
                "country": "us",
                "type": "equity",
                "industry": "N/A",
                "match_score": 64.79072,
                "sentiment_score": 0.287609,
                "highlights": [
                    {
                        "highlight": "Strategic Partnership : <em>DeFi</em> <em>Technologies</em> partners with Zero Computing to build critical infrastructure, enhancing DeFi Alpha, the Company's arbitrage trading desk. This partnership aims to improve arbitrage discovery and execution capabilities while advancing zero-knowledge enabled Maximal Extractable Value (MEV) strategies.",
                        "sentiment": 0.4588,
                        "highlighted_in": "main_text"
                    },
                    {
                        "highlight": "Pomp Podcast: CEO of Zero Computing, Christopher Tam , will be featured on the Pomp Podcast next week to explain the value of zero-knowledge and how it complements <em>DeFi</em> <em>Technologies</em>' infrastructure business line.",
                        "sentiment": 0.34,
                        "highlighted_in": "main_text"
                    },
                    {
                        "highlight": "TORONTO , July 30, 2024 /PRNewswire/ - <em>DeFi</em> <em>Technologies</em> <em>Inc</em>.",
                        "sentiment": 0,
                        "highlighted_in": "main_text"
                    },
                    {
                        "highlight": "This partnership aims to build critical infrastructure to enhance the arbitrage discovery and execution capabilities of <em>DeFi</em> <em>Technologies</em>' specialized trading desk, DeFi Alpha, and advance capabilities for capturing zero-knowledge enabled Maximal Extractable Value (\"MEV\").",
                        "sentiment": 0.0258,
                        "highlighted_in": "main_text"
                    },
                    {
                        "highlight": "By integrating these innovative technologies, Zero Computing, in collaboration with <em>DeFi</em> <em>Technologies</em>, is poised to reshape the landscape of decentralized finance.",
                        "sentiment": 0.5994,
                        "highlighted_in": "main_text"
                    },
                    {
                        "highlight": "Additionally, CEO of Zero Computing, Christopher Tam , will be featured on the Pomp Podcast next week to explain the value of zero-knowledge and how it complements <em>DeFi</em> <em>Technologies</em>' infrastructure business line.",
                        "sentiment": 0.34,
                        "highlighted_in": "main_text"
                    },
                    {
                        "highlight": "\"Our partnership with Zero Computing marks a significant milestone in enhancing our trading capabilities and infrastructure,\" said Olivier Roussy Newton , CEO of <em>DeFi</em> <em>Technologies</em>.",
                        "sentiment": 0.2023,
                        "highlighted_in": "main_text"
                    },
                    {
                        "highlight": "For more information please visit https://zerocomputing.xyz/\n\nAbout <em>DeFi</em> <em>Technologies</em>\n\n<em>DeFi</em> <em>Technologies</em> <em>Inc</em>. (CBOE CA: DEFI) (GR: R9B) (OTC: DEFTF) is a financial technology company that pioneers the convergence of traditional capital markets with the world of decentralized finance (DeFi).",
                        "sentiment": 0.3774,
                        "highlighted_in": "main_text"
                    },
                    {
                        "highlight": "With a dedicated focus on industry-leading Web3 technologies, <em>DeFi</em> <em>Technologies</em> aims to provide widespread investor access to the future of finance.",
                        "sentiment": 0.4588,
                        "highlighted_in": "main_text"
                    },
                    {
                        "highlight": "Valour is part of the asset management business line of <em>DeFi</em> <em>Technologies</em> <em>Inc</em>. (CBOE CA: DEFI) (GR: R9B) (OTC: DEFTF).",
                        "sentiment": 0.3612,
                        "highlighted_in": "main_text"
                    },
                    {
                        "highlight": "<em>DeFi</em> <em>Technologies</em> and Zero Computing Announce Strategic Partnership over Integrating Validator, Trading and ZK Infrastructure By Investing.com",
                        "sentiment": 0,
                        "highlighted_in": "title"
                    }
                ]
            },
            {
                "symbol": "DCYHY",
                "name": "Discovery Limited",
                "exchange": null,
                "exchange_long": null,
                "country": "us",
                "type": "equity",
                "industry": "Financial Services",
                "match_score": 13.438372,
                "sentiment_score": 0.377733,
                "highlights": [
                    {
                        "highlight": "This partnership aims to improve arbitrage <em>discovery</em> and execution capabilities while advancing zero-knowledge enabled Maximal Extractable Value (MEV) strategies.\n\n\n\n\n\nTechnologies partners with Zero Computing to build critical infrastructure, enhancing Alpha, the Company's arbitrage trading desk.",
                        "sentiment": 0.4588,
                        "highlighted_in": "main_text"
                    },
                    {
                        "highlight": "This partnership aims to improve arbitrage <em>discovery</em> and execution capabilities while advancing zero-knowledge enabled Maximal Extractable Value (MEV) strategies.",
                        "sentiment": 0.6486,
                        "highlighted_in": "main_text"
                    },
                    {
                        "highlight": "This partnership aims to build critical infrastructure to enhance the arbitrage <em>discovery</em> and execution capabilities of DeFi Technologies' specialized trading desk, DeFi Alpha, and advance capabilities for capturing zero-knowledge enabled Maximal Extractable Value (\"MEV\").",
                        "sentiment": 0.0258,
                        "highlighted_in": "main_text"
                    }
                ]
            }
        ],
        "similar": []
    },
    {
        "uuid": "b9917185-9178-4b7f-83ec-dcbfb14d51cb",
        "title": "SoFi Technologies: From Skeptic To Believer - My Journey With The Ticker (NASDAQ:SOFI)",
        "description": "SoFi Technologies offers lending and financial services and products that allows its members to borrow, save, spend, invest, and protect money. Learn more on SOFI stock here.",
        "keywords": "",
        "snippet": "ALFSnaiper\n\nInvestment Thesis\n\nI typically steer clear of crowded trades, and for a long time, I avoided SoFi Technologies, Inc. (NASDAQ:SOFI) (\"Sofi\"). The com...",
        "url": "https://seekingalpha.com/article/4708066-sofi-technologies-from-skeptic-to-believer-my-journey-with-the-ticker",
        "image_url": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1672545117/image_1672545117.jpg?io=getty-c-w1536",
        "language": "en",
        "published_at": "2024-07-30T17:20:22.000000Z",
        "source": "seekingalpha.com",
        "relevance_score": null,
        "entities": [
            {
                "symbol": "OPFI",
                "name": "OppFi Inc.",
                "exchange": null,
                "exchange_long": null,
                "country": "us",
                "type": "equity",
                "industry": "Technology",
                "match_score": 20.1823,
                "sentiment_score": 0.2815,
                "highlights": [
                    {
                        "highlight": "(PGY), <em>OppFi</em> <em>Inc</em>. (<em>OPFI</em>) and Enova International, Inc. (ENVA), among many others.\n\nSofi also has a well-diversified source of revenue. This also sets it apart from other fintechs, barely validating their underwriting tech for a single financial product. For example, Upstart Holdings, Inc.",
                        "sentiment": 0.2815,
                        "highlighted_in": "main_text"
                    }
                ]
            }
        ],
        "similar": [
            {
                "uuid": "574bc24f-1913-4954-a091-481c77a89012",
                "title": "SoFi issues strong Q3 guidance, boosts 2024 outlook after Q2 earnings beat (NASDAQ:SOFI)",
                "description": "SoFi Technologies (SOFI) boosted its 2024 guidance after Q2 earnings beat Wall Street expectations as its Financial Services and Tech Platform units become bigger drivers of its revenue.",
                "keywords": "",
                "snippet": "SoFi Technologies (NASDAQ:SOFI) boosted its 2024 earnings and revenue guidance after Q2 earnings and revenue beat Wall Street expectations as its Financial Serv...",
                "url": "https://seekingalpha.com/news/4129817-sofi-q2-earnings",
                "image_url": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1372185819/image_1372185819.jpg?io=getty-c-w750",
                "language": "en",
                "published_at": "2024-07-30T11:53:30.000000Z",
                "source": "seekingalpha.com",
                "relevance_score": null,
                "entities": [
                    {
                        "symbol": "SOFI",
                        "name": "SoFi Technologies Inc",
                        "exchange": null,
                        "exchange_long": null,
                        "country": "us",
                        "type": "equity",
                        "industry": "Financial Services",
                        "match_score": 83.75941,
                        "sentiment_score": 0.33088,
                        "highlights": [
                            {
                                "highlight": "<em>SoFi</em> <em>Technologies</em> (<em>NASDAQ:SOFI</em>) boosted its 2024 earnings and revenue guidance after Q2 earnings and revenue beat Wall Street expectations as its Financial Services and Tech Platform businesses become bigger drivers of its revenue.",
                                "sentiment": 0.3612,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "<em>SoFi</em> (<em>SOFI</em>) continues to expect growth in tangible book value of ~$800M-$1B and to add at least 2.3M new members in 2024. It reaffirmed its expectation for ending the year with total capital ratio above 16%.\n\nAdjusted net revenue guidance for the year was revised upward to $2.425M-$2.465M, vs. $2.42B consensus, from $2.39B-$2.43B.",
                                "sentiment": 0.6124,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "SoFi's (<em>SOFI</em>) origination volume of $5.35B climbed 22% Y/Y. Personal loan originations of $4.19B rose 12%, while student loans originations of $736.5M surged 86%, and home loans originations of $416.9B soared 71% Y/Y.",
                                "sentiment": 0,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "<em>SoFi</em> (<em>SOFI</em>) stock rose 1.0% in premarket trading.\n\nConference call at 8:00 AM ET.\n\nEarlier, <em>SoFi</em> <em>Technologies</em> beats top-line and bottom-line estimates, initiates Q3 and updates FY24 outlook",
                                "sentiment": 0,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "<em>SoFi</em> issues strong Q3 guidance, boosts 2024 outlook after Q2 earnings beat (<em>NASDAQ:SOFI</em>)",
                                "sentiment": 0.6808,
                                "highlighted_in": "title"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "uuid": "e760f2e3-b6f0-4c3c-99d1-c68025137c7f",
        "title": "Insider Sale: President and CEO Padraig Mcdonnell Sells Shares of Agilent Technologies Inc (A)",
        "description": "On July 26, 2024, Padraig Mcdonnell, President and Chief Executive Officer of Agilent Technologies Inc (A), sold 1,958 shares of the company. The transaction wa",
        "keywords": "GuruFocus, Article, News, GuruFocus Research, A",
        "snippet": "On July 26, 2024, Padraig Mcdonnell, President and Chief Executive Officer of Agilent Technologies Inc (A, Financial), sold 1,958 shares of the company. The tra...",
        "url": "https://www.gurufocus.com/news/2485733/insider-sale-president-and-ceo-padraig-mcdonnell-sells-shares-of-agilent-technologies-inc-a",
        "image_url": "https://static.gurufocus.com/logos/0C000009AO.png?14",
        "language": "en",
        "published_at": "2024-07-30T17:01:26.000000Z",
        "source": "gurufocus.com",
        "relevance_score": null,
        "entities": [
            {
                "symbol": "A",
                "name": "Agilent Technologies, Inc.",
                "exchange": null,
                "exchange_long": null,
                "country": "us",
                "type": "equity",
                "industry": "Healthcare",
                "match_score": 118.17114,
                "sentiment_score": 0.41135,
                "highlights": [
                    {
                        "highlight": "On July 26, 2024, Padraig Mcdonnell, President and Chief Executive Officer of <em>Agilent</em> <em>Technologies</em> <em>Inc</em> (A, Financial), sold 1,958 shares of the company. The transaction was documented in a recent SEC Filing. Following this sale, the insider now owns 26,076 shares of <em>Agilent</em> <em>Technologies</em> <em>Inc</em>.",
                        "sentiment": 0.5267,
                        "highlighted_in": "main_text"
                    },
                    {
                        "highlight": "<em>Agilent</em> <em>Technologies</em> <em>Inc</em>, a global leader in life sciences, diagnostics, and applied chemical markets, provides laboratories worldwide with instruments, services, consumables, applications, and expertise. The company enables customers to gain the insights they seek.",
                        "sentiment": 0.5267,
                        "highlighted_in": "main_text"
                    },
                    {
                        "highlight": "This recent transaction is part of a broader trend observed over the past year, where there have been 14 insider sells and only 2 insider buys at <em>Agilent</em> <em>Technologies</em> <em>Inc</em>.\n\nShares of <em>Agilent</em> <em>Technologies</em> <em>Inc</em> were priced at $140 on the day of the transaction, positioning the company with a market cap of approximately $40.23 billion.",
                        "sentiment": 0.296,
                        "highlighted_in": "main_text"
                    },
                    {
                        "highlight": "Insider Sale: President and CEO Padraig Mcdonnell Sells Shares of <em>Agilent</em> <em>Technologies</em> <em>Inc</em> (A)",
                        "sentiment": 0.296,
                        "highlighted_in": "title"
                    }
                ]
            }
        ],
        "similar": [
            {
                "uuid": "972f6128-ac06-4df4-9110-f0a2dd98374a",
                "title": "Insider Sale at Thermo Fisher Scientific Inc (TMO): Sr. VP and Chief HR Officer Lisa Britt Sells 3,624 Shares",
                "description": "On July 26, 2024, Lisa Britt, Senior Vice President and Chief Human Resources Officer of Thermo Fisher Scientific Inc (TMO), sold 3,624 shares of the company. T",
                "keywords": "GuruFocus, Article, News, GuruFocus Research, TMO",
                "snippet": "On July 26, 2024, Lisa Britt, Senior Vice President and Chief Human Resources Officer of Thermo Fisher Scientific Inc (TMO, Financial), sold 3,624 shares of the...",
                "url": "https://www.gurufocus.com/news/2485732/insider-sale-at-thermo-fisher-scientific-inc-tmo-sr-vp-and-chief-hr-officer-lisa-britt-sells-3624-shares",
                "image_url": "https://static.gurufocus.com/logos/0C00000CMT.png?14",
                "language": "en",
                "published_at": "2024-07-30T17:01:24.000000Z",
                "source": "gurufocus.com",
                "relevance_score": null,
                "entities": [
                    {
                        "symbol": "TMO",
                        "name": "Thermo Fisher Scientific Inc.",
                        "exchange": null,
                        "exchange_long": null,
                        "country": "us",
                        "type": "equity",
                        "industry": "Healthcare",
                        "match_score": 156.6152,
                        "sentiment_score": 0.414675,
                        "highlights": [
                            {
                                "highlight": "On July 26, 2024, Lisa Britt, Senior Vice President and Chief Human Resources Officer of <em>Thermo</em> <em>Fisher</em> <em>Scientific</em> <em>Inc</em> (TMO, Financial), sold 3,624 shares of the company. The transaction was reported in a recent SEC Filing. Following this sale, the insider now owns 13,699.106 shares of <em>Thermo</em> <em>Fisher</em> <em>Scientific</em> <em>Inc</em>.",
                                "sentiment": 0.5267,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "<em>Thermo</em> <em>Fisher</em> <em>Scientific</em> <em>Inc</em> is a global leader in serving science, with revenues of more than $40 billion and approximately 100,000 employees globally. The company helps its customers accelerate life sciences research, solve complex analytical challenges, improve patient diagnostics and therapies, and increase laboratory productivity.",
                                "sentiment": 0.836,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "This recent transaction is part of a broader trend observed over the past year at <em>Thermo</em> <em>Fisher</em> <em>Scientific</em> <em>Inc</em>, where there have been 25 insider sells and no insider buys.\n\nShares of <em>Thermo</em> <em>Fisher</em> <em>Scientific</em> <em>Inc</em> were trading at $613.02 on the day of the sale. The company has a market cap of approximately $230.67 billion.",
                                "sentiment": 0,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "Insider Sale at <em>Thermo</em> <em>Fisher</em> <em>Scientific</em> <em>Inc</em> (TMO): Sr. VP and Chief HR Officer Lisa Britt Sells 3,624 Shares",
                                "sentiment": 0.296,
                                "highlighted_in": "title"
                            }
                        ]
                    }
                ]
            },
            {
                "uuid": "5d0e843c-a11b-4098-b4dd-60f9a72826c1",
                "title": "Insider Sale: Executive Vice President Gianluca Pettiti Sells Shares of Thermo Fisher Scientific Inc (TMO)",
                "description": "On July 26, 2024, Gianluca Pettiti, Executive Vice President of Thermo Fisher Scientific Inc (TMO), sold 300 shares of the company at a price of $600.85 per sha",
                "keywords": "GuruFocus, Article, News, GuruFocus Research, TMO",
                "snippet": "On July 26, 2024, Gianluca Pettiti, Executive Vice President of Thermo Fisher Scientific Inc (TMO, Financial), sold 300 shares of the company at a price of $600...",
                "url": "https://www.gurufocus.com/news/2485731/insider-sale-executive-vice-president-gianluca-pettiti-sells-shares-of-thermo-fisher-scientific-inc-tmo",
                "image_url": "https://static.gurufocus.com/logos/0C00000CMT.png?14",
                "language": "en",
                "published_at": "2024-07-30T17:01:11.000000Z",
                "source": "gurufocus.com",
                "relevance_score": null,
                "entities": [
                    {
                        "symbol": "TMO",
                        "name": "Thermo Fisher Scientific Inc.",
                        "exchange": null,
                        "exchange_long": null,
                        "country": "us",
                        "type": "equity",
                        "industry": "Healthcare",
                        "match_score": 175.53018,
                        "sentiment_score": 0.56028,
                        "highlights": [
                            {
                                "highlight": "On July 26, 2024, Gianluca Pettiti, Executive Vice President of <em>Thermo</em> <em>Fisher</em> <em>Scientific</em> <em>Inc</em> (TMO, Financial), sold 300 shares of the company at a price of $600.85 per share. The transaction was documented in a recent SEC Filing. Following this sale, the insider now owns 17,887.234 shares of <em>Thermo</em> <em>Fisher</em> <em>Scientific</em> <em>Inc</em>.",
                                "sentiment": 0.6808,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "<em>Thermo</em> <em>Fisher</em> <em>Scientific</em> <em>Inc</em> is a global leader in serving science, with revenues of more than $40 billion and approximately 100,000 employees globally. The company helps its customers accelerate life sciences research, solve complex analytical challenges, improve patient diagnostics and therapies, and increase productivity in laboratories.",
                                "sentiment": 0.836,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "The insider transaction history for <em>Thermo</em> <em>Fisher</em> <em>Scientific</em> <em>Inc</em> shows a total of 25 insider sells and no insider buys over the past year.\n\nShares of <em>Thermo</em> <em>Fisher</em> <em>Scientific</em> <em>Inc</em> were trading at $600.85 on the day of the transaction, giving the company a market cap of approximately $230.67 billion.",
                                "sentiment": 0.34,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "This suggests that <em>Thermo</em> <em>Fisher</em> <em>Scientific</em> <em>Inc</em> is Fairly Valued based on its GF Value.",
                                "sentiment": 0.6486,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "Insider Sale: Executive Vice President Gianluca Pettiti Sells Shares of <em>Thermo</em> <em>Fisher</em> <em>Scientific</em> <em>Inc</em> (TMO)",
                                "sentiment": 0.296,
                                "highlighted_in": "title"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "uuid": "a818b530-5348-48b7-be88-8b0fb85b69ab",
        "title": "Raiffeisen Bank International (RAIFF) Q2 2024 Earnings Call Transcript",
        "description": "Raiffeisen Bank International (OTCPK:RAIFF) Q2 2024 Earnings Conference Call July 30, 2024 8:00 AM ETCompany ParticipantsJohann Strobl - Chief Executive...",
        "keywords": "",
        "snippet": "Raiffeisen Bank International (OTCPK:RAIFF) Q2 2024 Earnings Conference Call July 30, 2024 8:00 AM ET\n\nCompany Participants\n\nJohann Strobl - Chief Executive Off...",
        "url": "https://seekingalpha.com/article/4708085-raiffeisen-bank-international-raiff-q2-2024-earnings-call-transcript",
        "image_url": "https://static.seekingalpha.com/assets/og_image_1200-29b2bfe1a595477db6826bd2126c63ac2091efb7ec76347a8e7f81ba17e3de6c.png",
        "language": "en",
        "published_at": "2024-07-30T17:00:27.000000Z",
        "source": "seekingalpha.com",
        "relevance_score": null,
        "entities": [
            {
                "symbol": "RAIFF",
                "name": "Raiffeisen Bank International AG",
                "exchange": null,
                "exchange_long": null,
                "country": "us",
                "type": "equity",
                "industry": "Financial Services",
                "match_score": 126.02602,
                "sentiment_score": 0.145467,
                "highlights": [
                    {
                        "highlight": "<em>Raiffeisen</em> <em>Bank</em> <em>International</em> (OTCPK:RAIFF) Q2 2024 Earnings Conference Call July 30, 2024 8:00 AM ET\n\nCompany Participants\n\nJohann Strobl - Chief Executive Officer\n\nHannes Mosenbacher - Chief Risk Officer\n\nConference Call Participants\n\nMehmet Sevim - JPMorgan\n\nMatt Nimetz - UBS\n\nGabor Kemeny - Autonomous Research\n\nJohannes Thormann - HSBC\n\nLee Street",
                        "sentiment": -0.2732,
                        "highlighted_in": "main_text"
                    },
                    {
                        "highlight": "- Citigroup\n\nSimon Nellis - Citibank\n\nIuliana Golub - Goldman Sachs\n\nKrishnendra Dubey - Barclays\n\nOperator\n\nGood afternoon, ladies and gentlemen, and welcome to the Q2 2024 Results Conference Call of <em>Raiffeisen</em> <em>Bank</em> <em>International</em>.",
                        "sentiment": 0.7096,
                        "highlighted_in": "main_text"
                    },
                    {
                        "highlight": "<em>Raiffeisen</em> <em>Bank</em> <em>International</em> (<em>RAIFF</em>) Q2 2024 Earnings Call Transcript",
                        "sentiment": 0,
                        "highlighted_in": "title"
                    }
                ]
            }
        ],
        "similar": [
            {
                "uuid": "74950b8a-e6cd-4af3-91d8-43ba25d0ab38",
                "title": "Bank of Marin Bancorp (NASDAQ:BMRC) Q2 2024 Earnings Call Transcript",
                "description": "Krissy Meyer: Good morning, and thank you for joining Bank of Marin Bancorp's Earnings Call for the Second Quarter ended June 30, 2024.",
                "keywords": "",
                "snippet": "Bank of Marin Bancorp (NASDAQ:BMRC) Q2 2024 Earnings Call Transcript July 29, 2024\n\nBank of Marin Bancorp misses on earnings expectations. Reported EPS is $0.06...",
                "url": "https://www.insidermonkey.com/blog/bank-of-marin-bancorp-nasdaqbmrc-q2-2024-earnings-call-transcript-1327738/",
                "image_url": "https://d2gr5kl7dt2z3t.cloudfront.net/blog/wp-content/uploads/2023/11/24165350/BMRC-insidermonkey-1700862827939.jpg",
                "language": "en",
                "published_at": "2024-07-30T12:11:48.000000Z",
                "source": "insidermonkey.com",
                "relevance_score": null,
                "entities": [
                    {
                        "symbol": "BMRC",
                        "name": "Bank of Marin Bancorp",
                        "exchange": null,
                        "exchange_long": null,
                        "country": "us",
                        "type": "equity",
                        "industry": "Financial Services",
                        "match_score": 218.45934,
                        "sentiment_score": 0.135575,
                        "highlights": [
                            {
                                "highlight": "<em>Bank</em> <em>of</em> <em>Marin</em> <em>Bancorp</em> (<em>NASDAQ:BMRC</em>) Q2 2024 Earnings Call Transcript July 29, 2024\n\n<em>Bank</em> <em>of</em> <em>Marin</em> <em>Bancorp</em> misses on earnings expectations. Reported EPS is $0.06 EPS, expectations were $0.19.\n\nKrissy Meyer: Good morning, and thank you for joining Bank of Marin Bancorp’s Earnings Call for the Second Quarter ended June 30, 2024.",
                                "sentiment": 0.5423,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "I am Krissy Meyer, Corporate Secretary for <em>Bank</em> <em>of</em> <em>Marin</em> <em>Bancorp</em>. [Operator Instructions] Joining us on the call today are Tim Myers, President and CEO; and Tani Girton, Executive Vice President and Chief Financial Officer.",
                                "sentiment": 0,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "Q&A Session\n\nFollow <em>Bank</em> <em>Of</em> <em>Marin</em> <em>Bancorp</em> (<em>NASDAQ:BMRC</em>) Follow <em>Bank</em> <em>Of</em> <em>Marin</em> <em>Bancorp</em> (<em>NASDAQ:BMRC</em>) or Subscribe with Google We may use your email to send marketing emails about our services. Click here to read our privacy policy.\n\nOperator: [Operator Instructions] Our first question will be from Matthew Clark at Piper Jaffray.",
                                "sentiment": 0,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "<em>Bank</em> <em>of</em> <em>Marin</em> <em>Bancorp</em> (<em>NASDAQ:BMRC</em>) Q2 2024 Earnings Call Transcript",
                                "sentiment": 0,
                                "highlighted_in": "title"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "uuid": "a2d8ebdd-ec29-449b-a81f-fef27796b205",
        "title": "Q1 2025 Dr Reddy's Laboratories Ltd Earnings Call Transcript",
        "description": "Jul 27, 2024 / 11:00AM GMTOperator Ladies and gentlemen, good day, and welcome to Q1 FY25 earnings conference call of Dr. Reddy's Laboratories Limited. (Operato",
        "keywords": "GuruFocus, Article, News, GuruFocus Research, NYSE:RDY",
        "snippet": "Jul 27, 2024 / 11:00AM GMT\n\nOperator\n\n\n\nLadies and gentlemen, good day, and welcome to Q1 FY25 earnings conference call of Dr. Reddy's Laboratories Limited. (Op...",
        "url": "https://www.gurufocus.com/news/2485729/q1-2025-dr-reddys-laboratories-ltd-earnings-call-transcript",
        "image_url": "https://static.gurufocus.com/images/global_logo_twitter_card.png",
        "language": "en",
        "published_at": "2024-07-30T17:00:12.000000Z",
        "source": "gurufocus.com",
        "relevance_score": null,
        "entities": [
            {
                "symbol": "RDY",
                "name": "Dr. Reddy's Laboratories Limited",
                "exchange": null,
                "exchange_long": null,
                "country": "us",
                "type": "equity",
                "industry": "Healthcare",
                "match_score": 134.65958,
                "sentiment_score": 0.5979,
                "highlights": [
                    {
                        "highlight": "Jul 27, 2024 / 11:00AM GMT\n\nOperator\n\n\n\nLadies and gentlemen, good day, and welcome to Q1 FY25 earnings conference call of <em>Dr</em>. <em>Reddy's</em> <em>Laboratories</em> <em>Limited</em>. (Operator Instructions) Please note that this conference is being recorded.\n\n\n\nI now hand the conference over to Ms. Richa Periwal. Thank you, and over to you.\n\n\n\nRicha Periwal - <em>Dr</em>.",
                        "sentiment": 0.9169,
                        "highlighted_in": "main_text"
                    },
                    {
                        "highlight": "<em>Reddy's</em> <em>Laboratories</em> <em>Limited</em>-IR Executive\n\n\n\nThank you. A very good morning and good evening to all of you, and thank you for joining us today for the Dr. Reddy's quarter one FY25 earnings conference call. We have with us the leadership team of Dr. Reddy's comprising Mr. Erez Israeli, our CEO; Mr. Parag Agarwal, our CFO; Mr. M. V.",
                        "sentiment": 0.8768,
                        "highlighted_in": "main_text"
                    },
                    {
                        "highlight": "Q1 2025 <em>Dr</em> <em>Reddy's</em> <em>Laboratories</em> Ltd Earnings Call Transcript",
                        "sentiment": 0,
                        "highlighted_in": "title"
                    }
                ]
            }
        ],
        "similar": [
            {
                "uuid": "cdb56165-a0dc-48b5-95f6-a29779f3d2e6",
                "title": "CVRx, Inc. (NASDAQ:CVRX) Q2 2024 Earnings Call Transcript",
                "description": "Operator: Ladies and gentlemen, good afternoon and welcome to the CVRx Second Quarter 2024 Earnings Conference Call. [Operator Instructions] As a reminder, this conference is being recorded.",
                "keywords": "",
                "snippet": "CVRx, Inc. (NASDAQ:CVRX) Q2 2024 Earnings Call Transcript July 29, 2024\n\nOperator: Ladies and gentlemen, good afternoon and welcome to the CVRx Second Quarter 2...",
                "url": "https://www.insidermonkey.com/blog/cvrx-inc-nasdaqcvrx-q2-2024-earnings-call-transcript-1327730/",
                "image_url": "https://d2gr5kl7dt2z3t.cloudfront.net/blog/wp-content/uploads/2023/11/03005623/CVRX-insidermonkey-1698987381146.jpg",
                "language": "en",
                "published_at": "2024-07-30T12:11:13.000000Z",
                "source": "insidermonkey.com",
                "relevance_score": null,
                "entities": [
                    {
                        "symbol": "CVRX",
                        "name": "CVRx, Inc.",
                        "exchange": null,
                        "exchange_long": null,
                        "country": "us",
                        "type": "equity",
                        "industry": "Healthcare",
                        "match_score": 200.51628,
                        "sentiment_score": 0.59602,
                        "highlights": [
                            {
                                "highlight": "<em>CVRx</em>, <em>Inc</em>. (<em>NASDAQ:CVRX</em>) Q2 2024 Earnings Call Transcript July 29, 2024\n\nOperator: Ladies and gentlemen, good afternoon and welcome to the <em>CVRx</em> Second Quarter 2024 Earnings Conference Call. [Operator Instructions] As a reminder, this conference is being recorded. It is now my pleasure to introduce your host Mike Vallie. Thank you.",
                                "sentiment": 0.9022,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "During my time at <em>CVRx</em> so far, I’ve repeatedly heard from physicians that the benefits they observe in their Barostim patients exceed those described in the literature published to date. Because of this, they continue to encourage us to support further publications on the wide range of benefits that their patients experience with Barostim.",
                                "sentiment": 0.8807,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "Q&A Session\n\nFollow <em>Cvrx</em> <em>Inc</em>. Follow <em>Cvrx</em> <em>Inc</em>. or Subscribe with Google We may use your email to send marketing emails about our services. Click here to read our privacy policy.\n\nOperator: Thank you. [Operator Instructions] Our first question comes from the line of Robbie Marcus with JPMorgan. Please go ahead.\n\nRobbie Marcus: Oh, great.",
                                "sentiment": 0.836,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "The conference of <em>CVRx</em> has now concluded. Thank you for your participation. You may now disconnect your lines.",
                                "sentiment": 0.3612,
                                "highlighted_in": "main_text"
                            },
                            {
                                "highlight": "<em>CVRx</em>, <em>Inc</em>. (<em>NASDAQ:CVRX</em>) Q2 2024 Earnings Call Transcript",
                                "sentiment": 0,
                                "highlighted_in": "title"
                            }
                        ]
                    }
                ]
            }
        ]
    }
]



  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        {newsItems.map((newsItem, index) => (
          <Grid item key={index} xs={12} md={4}>
            <NewsFeedCard
                title={newsItem.title}
                url={newsItem.url}
                description={newsItem.text}
                date={newsItem.date}
                image={newsItem.image_url}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default NewsFeed;