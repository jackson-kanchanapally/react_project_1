import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
 
  articles= [
    //  {
          
    //       "source": {
    //           "id": null,
    //           "name": "CNBC"
    //       },
    //       "author": "Joanna Tan",
    //       "title": "Beijing loyalist John Lee will be Hong Kong's next leader - CNBC",
    //       "description": "John Lee, a Beijing loyalist, has been elected as Hong Kong's next Chief Executive.",
    //       "url": "https://www.cnbc.com/2022/05/08/china-loyalist-john-lee-will-be-hong-kongs-next-leader.html",
    //       "urlToImage": "https://image.cnbcfm.com/api/v1/image/107057726-1651984618669-gettyimages-1240480519-HK_JOHN_LEE.jpeg?v=1651985515&w=1920&h=1080",
    //       "publishedAt": "2022-05-08T05:00:55Z",
    //       "content": "John Lee, a Beijing loyalist, has been elected as Hong Kong's next Chief Executive.\r\nLee, the only candidate for Hong Kong's top post, won more than 1,416 votes in Sunday's election. He only needed a… [+1766 chars]"
    //   },
      
    //   {
          
    //       "source": {
    //           "id": "abc-news",
    //           "name": "ABC News"
    //       },
    //       "author": "KATHY GANNON Associated Press",
    //       "title": "Afghanistan's Taliban order women to cover up head to toe - ABC News",
    //       "description": "",
    //       "url": "https://abcnews.go.com/International/wireStory/afghanistans-taliban-order-women-wear-burqa-public-84560059",
    //       "urlToImage": "https://s.abcnews.com/images/International/WireAP_09691bf4105040a89838d11c63412ee4_16x9_992.jpg",
    //       "publishedAt": "2022-05-08T03:45:00Z",
    //       "content": "KABUL, Afghanistan -- Afghanistans Taliban rulers on Saturday ordered all Afghan women to wear head-to-toe clothing in public a sharp, hard-line pivot that confirmed the worst fears of rights activis… [+5335 chars]"
    //   },
    //   {
          
    //       "source": {
    //           "id": "cbs-news",
    //           "name": "CBS News"
    //       },
    //       "author": null,
    //       "title": "Rich Strike crowned winner of 2022 Kentucky Derby - CBS News",
    //       "description": "Rich Strike came back from behind to pull off a stunning win Saturday at Churchill Downs.",
    //       "url": "https://www.cbsnews.com/live-updates/rich-strike-kentucky-derby-2022/",
    //       "urlToImage": "https://cbsnews2.cbsistatic.com/hub/i/r/2022/05/07/9be479d1-d9a9-4ff6-ba47-c3e048a28772/thumbnail/1200x630/96f1a2319c1529dc1b9a21136fe68921/kentucky-derby.jpg",
    //       "publishedAt": "2022-05-08T03:22:00Z",
    //       "content": "With favorite Epicenter and Zandon dueling in front, Rich Strike came charging up the rail for a stunning 80-1 upset in the Kentucky Derby on Saturday.\r\nJockey Sonny Leon guided Rich Strike from far … [+3259 chars]"
    //   },
      
    //   {
    //       "source": {
    //           "id": null,
    //           "name": "SciTechDaily"
    //       },
    //       "author": null,
    //       "title": "This Week @NASA: Crew-3 Astronauts Return to Earth, Boeing's CST-100 Starliner, Black Holes - SciTechDaily",
    //       "description": "The Crew-3 astronauts return from the space station … The spacecraft for another commercial crew mission is on the move …. And discussing NASA’s budget … a few of the stories to tell you about – This Week at NASA! https://youtu.be/7rGj_Q9g6bE The Crew-3 Astro…",
    //       "url": "https://scitechdaily.com/this-week-nasa-crew-3-astronauts-return-to-earth-boeings-cst-100-starliner-black-holes/",
    //       "urlToImage": "https://scitechdaily.com/images/Crew-3-Astronauts-Inside-SpaceX-Crew-Dragon-Endurance-After-Splashdown-scaled.jpg",
    //       "publishedAt": "2022-05-08T03:15:21Z",
    //       "content": "ByNASAMay 7, 2022\r\nFrom left to right, ESA (European Space Agency) astronaut Matthais Maurer, NASA astronauts Tom Marshburn, Raja Chari, and Kayla Barron, are seen inside the SpaceX Crew Dragon Endur… [+4050 chars]"
    //   },    
    //   {
          
    //       "source": {
    //           "id": null,
    //           "name": "New York Times"
    //       },
    //       "author": "Maria Jimenez Moya, Scott Atkinson, Robert Chiarito, Lola Fadulu",
    //       "title": "Abortion Rally Draws Thousands in Houston - The New York Times",
    //       "description": "The event was among numerous protests planned across the country this weekend.",
    //       "url": "https://www.nytimes.com/2022/05/07/us/abortion-rights-rally.html",
    //       "urlToImage": "https://static01.nyt.com/images/2022/05/07/us/07abortionprotests-houston/07abortionprotests-houston-facebookJumbo.jpg",
    //       "publishedAt": "2022-05-08T02:56:54Z",
    //       "content": "Greta Powell, an attorney from suburban Oak Park, attended the protest with her husband, mother and two young daughters, 4 and 10 months. She said that even though she felt that Illinois would keep a… [+2243 chars]"
    //   },
      
    //   {
          
    //       "source": {
    //           "id": null,
    //           "name": "NBC Southern California"
    //       },
    //       "author": "City News Service",
    //       "title": "As COVID Hospitalizations Rise, Public Health Asks LA County to Keep Each Other Safe on Mother's Day - NBC Southern California",
    //       "description": "The number of COVID-positive patients in LA County hospitals rose, while the number of patients in the ICU went down. The Public Health Department urged caution…",
    //       "url": "https://www.nbclosangeles.com/news/coronavirus/southern-california-coronavirus/as-covid-hospitalizations-rise-public-health-asks-la-county-to-keep-each-other-safe-on-mothers-day/2888104/",
    //       "urlToImage": "https://media.nbclosangeles.com/2021/04/GettyImages-1284834824.jpg?quality=85&strip=all&resize=1200%2C675",
    //       "publishedAt": "2022-05-08T02:49:46Z",
    //       "content": "The number of COVID-positive patients in Los Angeles County hospitals has risen by 19 people to 258, according to the latest state data out Saturday.\r\nThe number of those patients being treated in in… [+3107 chars]"
    //   },
      
    //   {
          
    //       "source": {
    //           "id": null,
    //           "name": "CNBC"
    //       },
    //       "author": "David Faber",
    //       "title": "Ford is selling 8 million shares of once high-flying EV maker Rivian, sources say - CNBC",
    //       "description": "Ford Motor is selling 8 million of its Rivian Automotive shares as the insider lockup for the stock expires on Sunday, sources told CNBC's David Faber.",
    //       "url": "https://www.cnbc.com/2022/05/08/ford-is-selling-8-million-rivian-shares-sources-say.html",
    //       "urlToImage": "https://image.cnbcfm.com/api/v1/image/107047519-R1TR.JPG?v=1650289126&w=1920&h=1080",
    //       "publishedAt": "2022-05-08T02:30:00Z",
    //       "content": "Ford Motor is selling 8 million of its Rivian Automotive shares, with the insider lockup for the stock of the once high-flying electric vehicle maker is set to expire on Sunday, sources told CNBC's D… [+1196 chars]"
    //   }
    ]
      constructor(){
        super();
        this.state={
          articles:this.articles,
          loading:false
        }
      }
      async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=28a9ea3b0f5a44aab5a5a12800a3e78f"
        let data=await fetch(url)
        let parseD=await data.json()
        this.setState({articles:parseD.articles})
      }
      render() {
        return (
          <div className="container my-4" >
            <center><h1 style={{fontSize:"40px"}}>NewsEast Breaking</h1></center>
          <div className="container mx-5 my-5">
          <div className="row">
              {this.state.articles.map((e)=>{
              return <div className="col-md-3" key={e.url}>
              <NewsItem title={e.title?e.title.slice(0,40):""}imgUrl={e.urlToImage} des={e.description?e.description.slice(0,90):""} newsUrl={e.url}/>
              </div>
              })}
    
         
          </div>
         
          </div>
          </div>
      
    )
  }
}
