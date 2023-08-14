import React, { Component } from 'react'
import NewsItems from './NewsItems'

export default class News extends Component {
    articles =[
        {
          "source": {
            "id": "associated-press",
            "name": "Associated Press"
          },
          "author": null,
          "title": "Sen. Dianne Feinstein, 90, falls at home and goes to hospital, but scans are clear, her office says - The Associated Press",
          "description": "Senate Majority Leader Chuck Schumer says he spoke with Sen. Dianne Feinstein after she fell in her home and went to the hospital for a short time. Schumer says the 90-year-old Democratic California senator told him she suffered no injuries and went to the ho…",
          "url": "https://apnews.com/article/dianne-feinstein-fall-hospital-31a1358e1c25839b45bb699d83c75d58",
          "urlToImage": "https://dims.apnews.com/dims4/default/74e26e7/2147483647/strip/true/crop/4424x2489+0+230/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F62%2F58%2F64ca8cbf3006eb693b7f2f60cc68%2F6e246767ef7540e4bc245547779a3ac7",
          "publishedAt": "2023-08-09T18:33:00Z",
          "content": "WASHINGTON (AP) U.S. Sen. Dianne Feinstein, the oldest member of Congress, fell in her home and went to a hospital for a short time, her office said on Wednesday.\r\nThe 90-year-old California Democrat… [+3485 chars]"
        },
        {
          "source": {
            "id": "cnn",
            "name": "CNN"
          },
          "author": "Tierney Sneed, Katelyn Polantz, Hannah Rabinowitz",
          "title": "Special counsel obtained search warrant for Donald Trump’s Twitter account - CNN",
          "description": "The special counsel investigation into Donald Trump secured a search warrant of the former president’s Twitter account, @realDonaldTrump, according to a newly unsealed court filing.",
          "url": "https://www.cnn.com/2023/08/09/politics/special-counsel-trump-twitter-search-warrant/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230808122421-03-donald-trump-080423.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2023-08-09T18:06:00Z",
          "content": "The special counsel investigation into Donald Trump secured a search warrant of the former presidents Twitter account, @realDonaldTrump, according to a newly unsealed court filing. \r\nThe search was s… [+4539 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Variety"
          },
          "author": "Ethan Shanfeld",
          "title": "Lil Tay, Teen Internet Rapper, Has Died - Variety",
          "description": "Claire Hope, the Canadian pre-teen internet rapper known as Lil Tay, has died, her management confirmed in a statement to Variety. “It is with a heavy heart that we share the devastating news…",
          "url": "https://variety.com/2023/music/news/lil-tay-dead-instagram-rapper-1235692008/",
          "urlToImage": "https://variety.com/wp-content/uploads/2023/08/Lil-Tay-Obit-Dead.jpg?w=1000&h=518&crop=1",
          "publishedAt": "2023-08-09T17:13:00Z",
          "content": "Claire Hope, the Canadian pre-teen internet rapper known as Lil Tay, has died, her management confirmed in a statement to Variety.\r\n“It is with a heavy heart that we share the devastating news of our… [+2719 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "CNBC"
          },
          "author": "Sarah Whitten",
          "title": "Disney set to report earnings after the bell. Here's what to expect - CNBC",
          "description": "Investors are looking for more clarity on how Iger plans to fix Disney's TV business and juggle the decline of subscribers at Disney+.",
          "url": "https://www.cnbc.com/2023/08/09/disney-dis-earnings-report-q3-2023.html",
          "urlToImage": "https://image.cnbcfm.com/api/v1/image/107276138-1690288922817-gettyimages-1540932552-AFP_33PE66G.jpeg?v=1691598944&w=1920&h=1080",
          "publishedAt": "2023-08-09T16:35:44Z",
          "content": "When the markets close Wednesday, all eyes will be on Bob Iger.\r\nThe Disney CEO has a laundry list of issues to address during the company's fiscal third-quarter earnings call.\r\nLinear advertising an… [+1473 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hollywood Reporter"
          },
          "author": "Etan Vlessing",
          "title": "Mattel and Hasbro Took Different Hollywood Paths — One Found a $1B Hit This Year - Hollywood Reporter",
          "description": "While Hasbro spent billions on eOne in the hopes of producing films like Marvel Studios, the Barbie company launched a film division but emphasized licensing for film and TV properties.",
          "url": "https://www.hollywoodreporter.com/business/business-news/hasbro-mattel-movies-barbie-1235559021/",
          "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2023/08/MCDBARB_WB069.jpg?w=1024",
          "publishedAt": "2023-08-09T16:30:15Z",
          "content": "In September 2018, newly installed Mattel CEO Ynon Kreiz revamped the toy company’s Hollywood aspirations and launched a films division with plans to bring its toy franchises to the big screen in lic… [+7283 chars]"
        },
        {
          "source": {
            "id": "fox-news",
            "name": "Fox News"
          },
          "author": "Julia Musto",
          "title": "Omicron subvariant EG.5 now dominant strain in US, CDC data shows - Fox News",
          "description": "Recent data from the Centers for Disease Control and Prevention shows the omicron subvariant EG.5 is now the dominant COVID-19 strain in the U.S., replacing XBB.1.16.",
          "url": "https://www.foxnews.com/health/omicron-subvariant-eg-5-now-dominant-strain-us-cdc-data-shows",
          "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/03/CDC.jpg",
          "publishedAt": "2023-08-09T16:28:00Z",
          "content": "The EG.5 omicron subvariant is now the dominant COVID-19 strain in the U.S., according to data from the Centers for Disease Control and Prevention. \r\nIn projected estimates of variant proportions for… [+2420 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Billboard"
          },
          "author": "Hannah Dailey",
          "title": "Taylor Swift Left Wonderstruck Over 8-Minute Standing Ovation at L.A. Eras Tour Show - Billboard",
          "description": "“I’m going to spend several decades trying to figure out words for how that just made me feel,” she gushed.",
          "url": "https://www.billboard.com/music/music-news/taylor-swift-standing-ovation-eras-tour-show-reaction-1235388168/",
          "urlToImage": "https://www.billboard.com/wp-content/uploads/2023/08/Taylor-Swift-performs-during-The-Eras-Tour-concert-at-SoFi-Stadium-a-7-billboard-1548.jpg?w=1024",
          "publishedAt": "2023-08-09T16:26:36Z",
          "content": "Taylor Swift was definitely wonderstruck, blushing all the way home after her Tuesday (Aug. 8) concert. The pop star was left in awe in the middle of her fifth consecutive Eras Tour show at SoFi Stad… [+2032 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "CNBC"
          },
          "author": "Annika Kim Constantino",
          "title": "Insurers face long road, high cost to cover obesity drugs after promising Wegovy heart health data - CNBC",
          "description": "There is likely a long way to go before the U.S. sees increased insurance coverage of obesity drugs, but Novo Nordisk's new data is a meaningful start.",
          "url": "https://www.cnbc.com/2023/08/09/wegovy-heart-health-data-insurance-hurdles-costs.html",
          "urlToImage": "https://image.cnbcfm.com/api/v1/image/107277195-16903922372023-03-31t203903z_893253181_rc2450a5osia_rtrmadp_0_health-wegovy.jpeg?v=1691597963&w=1920&h=1080",
          "publishedAt": "2023-08-09T16:19:23Z",
          "content": "A selection of injector pens for the Saxenda weight loss drug are shown in this photo illustration in Chicago, Illinois, U.S., March 31, 2023. \r\nNovo Nordisk's obesity drug Wegovy slashed the risk of… [+8431 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "FOX5 Las Vegas"
          },
          "author": null,
          "title": "Ex-Raiders player Henry Ruggs sentenced in fatal 2021 Las Vegas DUI crash - Fox 5 Las Vegas",
          "description": "In an August 9 hearing at the Regional Justice Center in downtown Las Vegas, former Raiders wide receiver Henry Ruggs III was sentenced to a minimum of three years and a maximum of ten years in prison after he agreed to plead guilty to a pair of charges follo…",
          "url": "https://www.fox5vegas.com/2023/08/09/former-raiders-player-ruggs-sentenced-3-10-years-prison-deadly-2021-dui-crash/",
          "urlToImage": "https://gray-kvvu-prod.cdn.arcpublishing.com/resizer/XMJO37d4GPtxYiXmQkYMR02RfHg=/1200x600/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/2JVFXUMXSFFWZBSW5P65VSQH7E.jpeg",
          "publishedAt": "2023-08-09T16:19:00Z",
          "content": "LAS VEGAS, Nev. (FOX5) - In an August 9 hearing at the Regional Justice Center in downtown Las Vegas, former Raiders wide receiver Henry Ruggs III was sentenced to a minimum of three years and a maxi… [+2393 chars]"
        },
        {
          "source": {
            "id": "associated-press",
            "name": "Associated Press"
          },
          "author": "JENNIFER SINCO KELLEHER",
          "title": "People in Hawaii flee into ocean to escape wildfires that are burning a popular Maui tourist town - The Associated Press",
          "description": "Wind-whipped wildfires are racing through parts of Hawaii, burning structures in a historic town on the island of Maui, forcing evacuations and leading some to flee to the relative safety of the ocean, where they were rescued by the Coast Guard. The County of…",
          "url": "https://apnews.com/article/hawaii-wildfire-maui-dora-winds-ec23c16abfbeb6ba689f1a98263720db",
          "urlToImage": "https://dims.apnews.com/dims4/default/8b35666/2147483647/strip/true/crop/1339x753+81+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F1a%2F4a%2Feeb20f8921d5ad64067f3b32a0b3%2F535d80b24ddc49089034444a114e6795",
          "publishedAt": "2023-08-09T15:53:00Z",
          "content": "HONOLULU (AP) Wind-whipped wildfires raced through parts of Hawaii on Wednesday, burning down businesses in a historic town on the island of Maui, forcing evacuations and leading some to flee to the … [+6104 chars]"
        },
        {
          "source": {
            "id": "usa-today",
            "name": "USA Today"
          },
          "author": "Savannah Kuchar",
          "title": "Ohio election result could be bellwether on abortion after Roe v. Wade - USA TODAY",
          "description": "Ohio voters rejected a proposal to limit constitutional amendments. The special election could have national repercussions going into 2024.",
          "url": "https://www.usatoday.com/story/news/politics/2023/08/09/ohio-election-results-issue-1-abortion/70557773007/",
          "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/08/09/USAT/70556782007-ap-election-2023-ohio-1.jpg?crop=5106,2886,x0,y259&width=3200&height=1809&format=pjpg&auto=webp",
          "publishedAt": "2023-08-09T15:23:50Z",
          "content": "A win for Ohio Democrats this week could have implications for abortion rights advocates across the country. \r\nBuckeye State voters rejected a measure late Tuesday that proposed tightening rules arou… [+3325 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Investopedia"
          },
          "author": "Colin Laidley",
          "title": "Dow Jones Today: Nasdaq, S&P 500 Fall Further on Moody's Downgrade - Investopedia",
          "description": "Stocks, still feeling the shock of Moody's downgrading the credit ratings of several U.S. banks, added to Tuesday's losses, tumbling ahead of tomorrow's July inflation reading          The Nasdaq led stock indexes lower, losing 1.2%. The S&P 500 fell 0.7% and the Dow Jones Industrial Average dropped 0.5%. After yesterday's report that Chinese exports fell in July at their steepest pace in years, today brings more bad news out of the world's second-largest economy. China slipped into deflation in July as weak consumer spending stalled the economy's Covid rebound. Plus, Country Garden, one of the country's largest real estate developers, has missed payments on two bonds, raising concerns of a repeat of the collapse of Evergrande, which rocked the Chinese real estate sector in 2021",
          "url": "https://www.investopedia.com/dow-jones-today-08092023-7574408",
          "urlToImage": "https://www.investopedia.com/thmb/tsnFyrtGsfzvm-GqOV3H4PcS_mk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1584917971-da7c2c7b97034cffa4e838e016e78976.jpg",
          "publishedAt": "2023-08-09T15:11:00Z",
          "content": "Midday Market Movers\r\nToast Inc. (TOST): Shares of the restaurant payment services company gained 15% after it reported second-quarter sales grew 45% over last year, surpassing analysts estimates. \r\n… [+8966 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Yahoo Entertainment"
          },
          "author": "Daniel Howley",
          "title": "Microsoft debuts AI for frontline workers - Yahoo Finance",
          "description": "Microsoft is rolling out a new AI platform for frontline workers as the AI wars rage.",
          "url": "https://finance.yahoo.com/news/microsoft-debuts-ai-for-frontline-workers-150118325.html",
          "urlToImage": "https://s.yimg.com/ny/api/res/1.2/zft6A4IOzQBXL8obMSLfAQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-08/a8263370-3630-11ee-aefa-35d66cec2ded",
          "publishedAt": "2023-08-09T15:01:18Z",
          "content": "Microsoft (MSFT) continued its AI push on Wednesday with the debut of an AI-powered version of its Dynamics 365 Field Service platform. The software, which is meant to be used by frontline managers a… [+3027 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Gobankingrates.com"
          },
          "author": "Jennifer Taylor",
          "title": "10 Awesome Back-to-School Items From Walmart for Less Than $20 - GOBankingRates",
          "description": "Summer is coming to a close, which means it's time to start tackling those back-to-school shopping lists. If you're like many parents, you've been dreading this...",
          "url": "https://www.gobankingrates.com/saving-money/education/back-to-school-items-from-walmart-for-less-than-20/",
          "urlToImage": "https://cdn.gobankingrates.com/wp-content/uploads/2023/04/walmart-exterior-iStock-1205217071.jpg",
          "publishedAt": "2023-08-09T15:01:02Z",
          "content": "Summer is coming to a close, which means its time to start tackling those back-to-school shopping lists. If youre like many parents, youve been dreading this activity largely because of the high pric… [+776 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "KABC-TV"
          },
          "author": null,
          "title": "1 ticket sold in Florida hits Mega Millions record-setting $1.58 billion lottery jackpot - KABC-TV",
          "description": "Tickets matching five of the six winning numbers and worth more than $1 million were sold in California, Texas, Pennsylvania and West Virginia.",
          "url": "https://abc7.com/mega-millions-winning-numbers-drawing-megamillions/13616929/",
          "urlToImage": "https://cdn.abcotvs.com/dip/images/13602961_mega-millions-2.png?w=1600",
          "publishedAt": "2023-08-09T15:00:00Z",
          "content": "NEPTUNE BEACH, Fla. -- A single ticket sold in Florida is good for a $1.58 billion Mega Millions jackpot, ending a stretch of lottery futility that had stretched for nearly four months.\r\nA Publix gro… [+1391 chars]"
        },
        {
          "source": {
            "id": "espn",
            "name": "ESPN"
          },
          "author": "John Keim",
          "title": "Ron Rivera - 'I put my foot in my mouth' with Eric Bieniemy comments - ESPN - ESPN",
          "description": "Ron Rivera said of discussing Eric Bieniemy's intensity, \"I put my foot in my mouth,\" insisting he did not want to portray the new offensive coordinator as too demanding.",
          "url": "https://www.espn.com/nfl/story/_/id/38161433/ron-rivera-put-my-foot-my-mouth-eric-bieniemy-comments",
          "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0808%2Fr1207944_1296x729_16%2D9.jpg",
          "publishedAt": "2023-08-09T14:59:00Z",
          "content": "ASHBURN, Va. -- Washington Commanders coach Ron Rivera said Wednesday that \"I put my foot in my mouth\" when discussing Eric Bieniemy's intensity Tuesday, insisting he did not want to portray his play… [+4332 chars]"
        },
        {
          "source": {
            "id": "nfl-news",
            "name": "NFL News"
          },
          "author": null,
          "title": "Fantasy football 2023: Cowboys' Tony Pollard among top 10 RB values - NFL.com",
          "description": "Which running backs will provide the best bang for your buck in fantasy football this season? Michelle Magdziuk helps you prepare for your draft by revealing the top 10 values at the position.",
          "url": "https://www.nfl.com/news/fantasy-football-2023-cowboys-tony-pollard-among-top-10-rb-values",
          "urlToImage": "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/wvo4hlu2txuyompbuklu",
          "publishedAt": "2023-08-09T14:57:00Z",
          "content": "Projected draft position: Round 6\r\nAkers has yet to prove that he is a reliable fantasy asset over the course of a full season, but he should have every chance to finally carry a large workload in 20… [+621 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Android Police"
          },
          "author": "Arol Wright",
          "title": "YouTube stops showing home screen when history is turned off - Android Police",
          "description": "Subscriptions? Nah, who needs those? You need your recommendations",
          "url": "https://www.androidpolice.com/youtube-no-home-screen-no-history/",
          "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/06/youtube-generic-ap-hero.jpg",
          "publishedAt": "2023-08-09T14:46:00Z",
          "content": "Most of us are pretty well-acquainted with YouTube's home screen and how it looks. It shows you recommended videos and content that's floated by the algorithm in addition to what creators you're actu… [+2105 chars]"
        },
        {
          "source": {
            "id": "associated-press",
            "name": "Associated Press"
          },
          "author": "SYLVIE CORBET",
          "title": "Fire at French vacation home for adults with disabilities leaves 11 dead - The Associated Press",
          "description": "Eleven people have died after a fire ripped through a vacation home for adults with disabilities in eastern France. The deputy prosecutor of Colmar said 11 people who were sleeping on the upper floor and in a mezzanine area of the private accommodation were t…",
          "url": "https://apnews.com/article/france-fire-disabled-holiday-wintzenheim-f9596984346f4fc30b831df834e8e705",
          "urlToImage": "https://dims.apnews.com/dims4/default/ecfcbcc/2147483647/strip/true/crop/6283x3534+6+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F5f%2Ff1%2F77d104105b50aeb298ff34be379f%2Faf682cd95b7547949fdd3cad9a4cc7d7",
          "publishedAt": "2023-08-09T14:44:00Z",
          "content": "PARIS (AP) A devastating fire that raged through a vacation home for adults with disabilities in eastern France on Wednesday left 11 people dead, an official said.\r\nNathalie Kielwasser, deputy prosec… [+2208 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "nj.com"
          },
          "author": "Len Melisurgo | NJ Advance Media for NJ.com",
          "title": "Perseid meteor shower 2023 may be the best one in years. When to see this big sky show. - NJ.com",
          "description": "Experts say the August moon won't be giving off too much light to spoil views of the Perseid meteor shower.",
          "url": "https://www.nj.com/news/2023/08/perseid-meteor-shower-2023-may-be-the-best-one-in-years-when-to-see-this-big-sky-show.html",
          "urlToImage": "https://www.nj.com/resizer/hdwsFo0pzA_KtV0ik9BsG3x5CL0=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/JVS3ELKF2BBR5D77DZUHXGRTEM.JPG",
          "publishedAt": "2023-08-09T14:30:00Z",
          "content": "The Perseid meteor shower is known as the king of all meteor showers, because of the large number of shooting stars it generates in the summer sky. But some years the big sky show gets spoiled by bri… [+3291 chars]"
        }
      ]
        
    constructor(){
        super();
        console.log("thi is all Articles.");
        this.state={
            articles: [],
            loading: false
        } 
    


    }
    async componentDidMount(){
              console.log("helooo");
              let url = "https://newsapi.org/v2/everything?q=apple&from=2023-08-12&to=2023-08-12&sortBy=popularity&apiKey=f42f14a0bfa749688cd636167d8bed86";
              let data = await fetch(url);
              let parseData = await data.json()  
              console.log(parseData);
              this.setState({articles: parseData.articles})
    }
    render() {
        return (
            <div className='container my-3'>
                <h2>Top News </h2>
               
                <div className="row">
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                    <NewsItems title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 80):""} imageUrl={element.urlToImage}
                     newsUrl={element.url}/> 
                    </div>
    })}
                                                          
                </div>               
            </div>
        )
    }
}
