import { Injectable } from "@angular/core";
import { PreferencesService } from "../preferences/preferences.service";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  private news = {
    status: "ok",
    totalResults: 38,
    articles: [
      {
        source: {
          id: "rte",
          name: "RTE"
        },
        author: "RTÉ Sport",
        title: "LOI Preview: Alan Cawley's team-by-team guide - RTE.ie",
        description:
          "Former Shelbourne and St Patrick's Athletic midfielder Alan Cawley casts his eye over every Premier Division club ahead of the start of the SSE Airtricity League season.",
        url:
          "https://www.rte.ie/sport/soccer/2020/0213/1115113-loi-preview-alan-cawleys-team-by-team-guide/",
        urlToImage: "https://img.rasset.ie/001399ed-1600.jpg",
        publishedAt: "2020-02-14T09:29:29Z",
        content:
          "Former Shelbourne and St Patrick's Athletic midfielder Alan Cawley casts his eye over every Premier Division club ahead of the start of the SSE Airtricity League season.\r\nThe RTÉ soccer pundit believes the top two will remain unchanged by the time the 2020 ca… [+7393 chars]"
      },
      {
        source: {
          id: "the-irish-times",
          name: "The Irish Times"
        },
        author: "Colin Gleeson",
        title:
          "Lidl seals €40m supply deal with O’Brien Fine Foods - The Irish Times",
        description:
          "Retailer will list O’Brien Fine Foods products in a total of 7,438 Lidl stores internationally",
        url:
          "https://www.irishtimes.com/business/retail-and-services/lidl-seals-40m-supply-deal-with-o-brien-fine-foods-1.4173591",
        urlToImage:
          "https://www.irishtimes.com/image-creator/?id=1.4173590&origw=1440",
        publishedAt: "2020-02-14T09:21:00Z",
        content:
          "Lidl Ireland has announced a two-year supply deal with Kildare-based cooked meats producer, OBrien Fine Foods worth 40 million.\r\nLidl has also made a further 50,000 investment in OBrien Fine Foods which will see its Irish beef produce exported to more than 3,… [+2136 chars]"
      },
      {
        source: {
          id: "the-irish-times",
          name: "The Irish Times"
        },
        author: "The Irish Times",
        title:
          "Fianna Fáil arrogant and reckless for snubbing Sinn Féin, says Ó Broin - The Irish Times",
        description:
          "Prospect of new government being formed in near future recedes towards stalemate",
        url:
          "https://www.irishtimes.com/news/politics/fianna-f%C3%A1il-arrogant-and-reckless-for-snubbing-sinn-f%C3%A9in-says-%C3%B3-broin-1.4173581",
        urlToImage:
          "https://www.irishtimes.com/image-creator/?id=1.4173580&origw=1440",
        publishedAt: "2020-02-14T09:18:48Z",
        content:
          "Sinn Féin has admitted it cannot form a stable government without either Fine Gael or Fianna Fáil, who it accuses of arrogance and recklessness for refusing to talk to the party about a coalition.\r\nThe prospect of a new government being formed in the near fut… [+1916 chars]"
      },
      {
        source: {
          id: null,
          name: "Breakingnews.ie"
        },
        author: "Digital Desk staff",
        title:
          "'They are already enormously high' - Students hit out at universities' rent increases - BreakingNews.ie",
        description:
          "Universities are raising rents for on-campus accommodation this September.",
        url:
          "https://www.breakingnews.ie/ireland/they-are-already-enormously-high-students-hit-out-at-universities-rent-increases-981703.html",
        urlToImage:
          "https://www.breakingnews.ie/remote/media.central.ie/media/images/r/RentCalculator_large.jpg?width=600&s=bn-981703",
        publishedAt: "2020-02-14T09:13:00Z",
        content:
          "Universities are raising rents for on-campus accommodation this September.\r\nRents for student accommodation at DCU, UCD and NUI Galway will be increased by the maximum legal limit of 4%.\r\nThe cap was applied to student apartments last August to ensure rent pr… [+626 chars]"
      },
      {
        source: {
          id: null,
          name: "Breakingnews.ie"
        },
        author: "Digital Desk staff",
        title:
          "In like Flynn: Detector dog helps Revenue seize €280k thought to be proceeds of crime - Irish Examiner",
        description:
          "Revenue officers have seized €280,000 in cash at Rosslare Port.",
        url:
          "https://www.breakingnews.ie/ireland/in-like-flynn-detector-dog-helps-revenue-seize-280k-thought-to-be-proceeds-of-crime-981714.html",
        urlToImage:
          "https://www.breakingnews.ie/remote/media.central.ie/media/images/r/RosslarePort280kCashSeizureFeb2020_large.jpg?width=600&s=bn-981714",
        publishedAt: "2020-02-14T08:51:00Z",
        content:
          "Revenue officers have seized â¬280,000 in cash at Rosslare Port.\r\nJudge Gerard Furlong, at a special sitting of Gorey District Court last night, granted officers a three-month cash detention of the money.\r\nThe â¬280,000 in cash found on Wednesday.\r\nThe â¬2… [+541 chars]"
      },
      {
        source: {
          id: null,
          name: "Breakingnews.ie"
        },
        author: "By Press Association",
        title:
          "Body of missing British hiker found in New Zealand national park - Irish Examiner",
        description:
          "Stephanie Simpson was reported missing after failing to return to work following a hiking trip.",
        url:
          "https://www.breakingnews.ie/world/body-of-missing-british-hiker-found-in-new-zealand-national-park-981711.html",
        urlToImage:
          "https://www.irishexaminer.com/remote/image.assets.pressassociation.io/v2/image/production/0d4fb4a8922b1e78dab241edd583e95aY29udGVudHNlYXJjaCwxNTgxNzU0OTEx/2.50321473.jpg?crop=0,187,3000,1874&ext=.jpg&width=648&s=ie-981711",
        publishedAt: "2020-02-14T08:30:00Z",
        content:
          "A British woman who disappeared during a hiking trip in New Zealand has been found dead.\r\nStephanie Simpson, 32, was reported missing on Monday after she failed to turn up for her job as a gardener in the Wanaka area, where she had been living.\r\nShe reportedl… [+1065 chars]"
      },
      {
        source: {
          id: null,
          name: "Dailysabah.com"
        },
        author: "www.dailysabah.com",
        title:
          "Mysterious 'ghost population' of ancient humans discovered in African DNA - Daily Sabah",
        description:
          "Scientists examining the genomes of West Africans have detected signs that a mysterious extinct human species interbred with our own species tens of thousands of years ago in Africa, the latest evidence of humankind's complicated genetic ancestry. The study i…",
        url:
          "https://www.dailysabah.com/history/2020/02/14/mysterious-ghost-population-of-ancient-humans-discovered-in-african-dna",
        urlToImage:
          "https://iadsb.tmgrup.com.tr/7cecdd/645/344/0/30/1000/564?u=https://idsb.tmgrup.com.tr/2020/02/14/1581666423188.jpg",
        publishedAt: "2020-02-14T08:17:20Z",
        content:
          "Scientists examining the genomes of West Africans have detected signs that a mysterious extinct human species interbred with our own species tens of thousands of years ago in Africa, the latest evidence of humankind's complicated genetic ancestry.\r\nThe study … [+2474 chars]"
      },
      {
        source: {
          id: null,
          name: "The42.ie"
        },
        author: "Sean Farrell",
        title:
          "Ringrose a doubt for rest of Six Nations, calf keeps Addison out again - The42",
        description:
          "The centre had been ruled out of the upcoming England match, but is doubtful for round five and six.",
        url:
          "https://www.the42.ie/garry-ringrose-injury-ireland-six-nations-5006890-Feb2020/",
        urlToImage:
          "https://img2.thejournal.ie/article/5006890/river/?height=400&version=5007084",
        publishedAt: "2020-02-14T08:13:00Z",
        content:
          "GARRY RINGROSES PROJECTED return date has been pushed back and may not play any further part in Irelands Six Nations campaign, while Ulsters Will Addison is again set to fall short of full fitness for next weeks clash with England.\r\nAddison was named in Farre… [+1520 chars]"
      },
      {
        source: {
          id: "rte",
          name: "RTE"
        },
        author: "RTÉ News",
        title:
          "Iceberg a third the size of Dublin calves in Antarctica - RTE.ie",
        description:
          "A large iceberg has broken off from Pine Island Glacier on the edge of Antarctica, according to satellite images shared by the European Space Agency.",
        url:
          "https://www.rte.ie/news/newslens/2020/0214/1115213-iceberg-pine-island/",
        urlToImage: "https://img.rasset.ie/00139d21-1600.jpg",
        publishedAt: "2020-02-14T08:00:09Z",
        content:
          'A large iceberg has broken off from Pine Island Glacier on the edge of Antarctica, according to satellite images shared by the European Space Agency.\r\nThe ESA said the iceberg measures 300 square kilometres, and following its split from the glacier "quickly s… [+575 chars]'
      },
      {
        source: {
          id: null,
          name: "Extra.ie"
        },
        author: "George Morahan",
        title:
          "Doctors warn that London Underground could be hotbed for coronavirus - Extra.ie",
        description:
          "Doctors in the UK have warned that the London Underground could become a catalyst for spreading the coronavirus, now known as COVID-19. The warning comes after a woman in the British capital became the ninth person to test positively for the virus, which has …",
        url:
          "https://extra.ie/2020/02/14/news/world-news/doctors-warn-that-london-underground-could-be-hotbed-for-coronavirus",
        urlToImage:
          "https://cdn.extra.ie/wp-content/uploads/2020/02/13165553/Coronavirus-London-Underground-Feature-Image.jpg",
        publishedAt: "2020-02-14T07:41:15Z",
        content:
          "Doctors in the UK have warned that the London Underground could become a catalyst for spreading the coronavirus, now known as COVID-19.\r\nThe warning comes after a woman in the British capital became the ninth person to test positively for the virus, which has… [+2158 chars]"
      },
      {
        source: {
          id: "rte",
          name: "RTE"
        },
        author: "RTÉ Entertainment",
        title: "Billie Eilish releases new James Bond track Music - RTE.ie",
        description:
          "Billie Eilish has released the new theme song for James Bond's No Time To Die.",
        url:
          "https://www.rte.ie/entertainment/2020/0214/1115204-billie-eilish/",
        urlToImage: "https://img.rasset.ie/00139d1e-1600.jpg",
        publishedAt: "2020-02-14T07:35:47Z",
        content:
          "Billie Eilish has released the new theme song for James Bond's No Time To Die.\r\nEilish is the youngest artist ever to record a Bond title track with singers such as Adele, Sam Smith, Madonna, Sir Paul McCartney and  Shirley Bassey previously having the honour… [+720 chars]"
      },
      {
        source: {
          id: null,
          name: "Irishmirror.ie"
        },
        author: "Cormac O'Shea",
        title:
          "Tragedy as body of missing Cork man Cormac Ryan found - Irish Mirror",
        description:
          "The 31-year-old had last been seen in the Douglas Street area of the south city centre on Sunday evening",
        url:
          "https://www.irishmirror.ie/news/irish-news/tragedy-body-missing-cork-man-21494644",
        urlToImage:
          "https://i2-prod.irishmirror.ie/news/irish-news/article21482955.ece/ALTERNATES/s1200/0_Cormac-Ryan-Photo.jpg",
        publishedAt: "2020-02-14T07:18:00Z",
        content:
          "The body of missing Cork man Cormac Ryan has been found.\r\nGardai confirmed that the discovery had been made last night after news of his disappearance was reported this week.\r\n The 31-year-old had last been seen in the Douglas Street area of the south city ce… [+1434 chars]"
      },
      {
        source: {
          id: null,
          name: "Thesun.ie"
        },
        author: "Jill Robinson",
        title:
          "James Haskell slammed for ‘disgusting’ comment on Jacqueline Jossa’s beach picture - The Irish Sun",
        description: "",
        url:
          "http://www.thesun.ie/tvandshowbiz/tv/5096848/james-haskell-slammed-for-disgusting-comment-on-jacqueline-jossas-beach-picture/",
        urlToImage:
          "https://www.thesun.ie/wp-content/uploads/sites/3/2020/02/DD-COMPOSITE-HASKELL-1.jpg?strip=all&quality=100&w=1200&h=800&crop=1",
        publishedAt: "2020-02-14T07:12:04Z",
        content:
          "JAMES Haskell has been slammed for posting a 'disgusting' comment used to describe people with special needs on Jacqueline Jossa's beach picture.\r\nI'm a Celebrity winner Jacqueline shared a photo on Instagram earlier this week of her posing with a football on… [+3120 chars]"
      },
      {
        source: {
          id: "google-news",
          name: "Google News"
        },
        author: null,
        title:
          "Irish weather forecast: Met Eireann warn of flooding, thunder and snow as Storm Dennis batters Ireland - Irish Mirror",
        description: null,
        url:
          "https://news.google.com/__i/rss/rd/articles/CBMiXGh0dHBzOi8vd3d3LmlyaXNobWlycm9yLmllL25ld3MvaXJpc2gtbmV3cy9tZXRlaXJlYW5uLWlyaXNoLXdlYXRoZXItZm9yZWNhc3QtZHVibGluLTIxNDk0NjA30gFgaHR0cHM6Ly93d3cuaXJpc2htaXJyb3IuaWUvbmV3cy9pcmlzaC1uZXdzL21ldGVpcmVhbm4taXJpc2gtd2VhdGhlci1mb3JlY2FzdC1kdWJsaW4tMjE0OTQ2MDcuYW1w?oc=5",
        urlToImage: null,
        publishedAt: "2020-02-14T07:01:00Z",
        content: null
      },
      {
        source: {
          id: null,
          name: "Dublinlive.ie"
        },
        author: "Ciara Phelan",
        title:
          "Coronavirus: Suspected cases could be forced into quarantine say HSE - Dublin Live",
        description: "The infectious disease has killed over 1,300 in China",
        url:
          "https://www.dublinlive.ie/news/dublin-news/coronavirus-suspected-cases-could-forced-17746330",
        urlToImage:
          "https://i2-prod.dublinlive.ie/incoming/article17659624.ece/ALTERNATES/s1200/2_Coronavirus-virus-which-causes-SARS-and-MERS.jpg",
        publishedAt: "2020-02-14T07:00:00Z",
        content:
          "Coronaviruses are a group of viruses that cause respiratory infections. There are seven known strains that can infect humans, including the new virus detected in China.\r\nThey range in how serious they are, with some causing a common cold, and others causing p… [+1747 chars]"
      },
      {
        source: {
          id: "the-verge",
          name: "The Verge"
        },
        author: "Sam Byford",
        title:
          "Sony reportedly battling to keep PlayStation 5 price down - The Verge",
        description:
          "Sony is struggling to land on a price for its upcoming PlayStation 5 console, according to a new report by Bloomberg, with component shortages potentially pushing the MSRP beyond that of the PS4.",
        url:
          "https://www.theverge.com/2020/2/14/21137392/sony-ps5-price-cost-of-manufacture-psvr-2-report",
        urlToImage:
          "https://cdn.vox-cdn.com/thumbor/m6RJCCL9rgTbH3aefb8YSIQOTxI=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19683131/IMG_1561.jpg",
        publishedAt: "2020-02-14T06:46:14Z",
        content:
          "New PSVR headset set to follow next-gen console\r\nSony is struggling to land on a price for its upcoming PlayStation 5 console, according to a new report by Bloomberg, with component shortages potentially pushing the MSRP beyond that of the PS4. The bill of ma… [+1248 chars]"
      },
      {
        source: {
          id: null,
          name: "Irishexaminer.com"
        },
        author: "Cormac O'Keeffe",
        title:
          "CAB seizes €220,000 worth of Cork drug dealer’s assets - BreakingNews.ie",
        description:
          "A convicted drug dealer has been deprived of almost €50,000 in either cash or in bank accounts as well as six-high powered cars worth around €170,000 following a massive operation in Cork.",
        url:
          "https://www.irishexaminer.com/breakingnews/ireland/cab-seizes-220000-worth-of-cork-drug-dealers-assets-981667.html",
        urlToImage:
          "https://www.breakingnews.ie/remote/media.central.ie/media/images/c/CABSeizureFAb2020_large.jpg?width=600&s=bn-981667",
        publishedAt: "2020-02-14T06:30:00Z",
        content:
          "- with reporting from Eoin English\r\nA convicted drug dealer has been deprived of almost â¬50,000 in either cash or in bank accounts as well as six-high powered cars worth around â¬170,000 following a massive operation in Cork.\r\nThe Criminal Assets Bureau ta… [+1709 chars]"
      },
      {
        source: {
          id: null,
          name: "Notebookcheck.net"
        },
        author: "Ricci Rox",
        title:
          "3x optical zoom for the Galaxy S20 and S20+? Not quite - Notebookcheck.net",
        description:
          "The Galaxy S20 and S20+ both have 3x optical zoom, right? Well, not quite. A quick look at the phones' official technical specs reveals that they likely offer just 2.5x optical zoom, with some image cropping done to reach the 3x lossless mark.",
        url:
          "https://www.notebookcheck.net/3x-optical-zoom-for-the-Galaxy-S20-and-S20-Not-quite.453855.0.html",
        urlToImage:
          "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/s20_s20_plus_samsung.JPG",
        publishedAt: "2020-02-14T06:09:58Z",
        content:
          "Samsung's new Galaxy S20 phones have been heavily marketed for their camera prowess. The S20 Ultra goes all out with a class-leading 108 MP camera, while the S20 is pushed for its 64 MP camera, even though its main camera is a 12 MP one. Samsung also advertis… [+1093 chars]"
      },
      {
        source: {
          id: null,
          name: "Sciencealert.com"
        },
        author: "AFP",
        title:
          "A Bizarre Jellyfish Species Can Sting You Without Touch by Hurling 'Mucus Grenades' - ScienceAlert",
        description:
          'A species of jellyfish hunts its prey by hurling venom grenades to create "stinging water", researchers said Thursday, solving a long-standing mystery as to how they gather food without tentacles.',
        url:
          "https://www.sciencealert.com/upside-down-jellyfish-hurl-venomous-mucus-grenades-to-kill-prey",
        urlToImage:
          "https://www.sciencealert.com/images/2020-02/processed/VenomGrenadeUpsideDownJelly_1024.jpg",
        publishedAt: "2020-02-14T05:39:54Z",
        content:
          'A species of jellyfish hunts its prey by hurling venom grenades to create "stinging water", researchers said Thursday, solving a long-standing mystery as to how they gather food without tentacles.\r\nThe upside down jellyfish (Cassiopea xamachana), found in sha… [+1745 chars]'
      },
      {
        source: {
          id: "the-irish-times",
          name: "The Irish Times"
        },
        author: "Ronald Quinlan",
        title:
          "Fallon & Byrne plan for Dundrum Town Centre food hall ‘under review’ - The Irish Times",
        description:
          "Connolly Station opening also on hold as group focuses on Exchequer Street expansion",
        url:
          "https://www.irishtimes.com/business/commercial-property/fallon-byrne-plan-for-dundrum-town-centre-food-hall-under-review-1.4173111",
        urlToImage:
          "https://www.irishtimes.com/image-creator/?id=1.4173110&origw=1440",
        publishedAt: "2020-02-14T05:00:00Z",
        content:
          "Plans by high-end retailer Fallon &amp; Byrne to open a flagship food hall, delicatessen and restaurant at the Dundrum Town Centre in south Dublin have been placed under review.\r\nThe news comes following a period of turbulence at the business since the beginn… [+2638 chars]"
      }
    ]
  };
  private filters;
  constructor(public preferenceService: PreferencesService) {
    this.filters = this.preferenceService.getStorage("filters");
  }

  public async getNews() {
    const filtered = [];
    this.news.articles.filter(article => {
      return this.filters.filter(filter => {
        if(!filter.blocked){
          if (article.source.name === filter.name) {
            filtered.push(article);
          }
        }
      });
    });
  }
}
