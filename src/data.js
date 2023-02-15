
import tour_1 from './images/tour-1.jpeg'
import tour_2 from './images/tour-2.jpeg'
import tour_3 from './images/tour-3.jpeg'
import tour_4 from './images/tour-4.jpeg'

export const pageLinks = [
    {id:1, href:'#home', text:'home'},
    {id:2, href:'#about', text:'about'},
    {id:3, href:'#services', text:'services'},
    {id:4, href:'#tours', text:'tours'},
]

export const socialLinks = [
    {id:1, href:'https://www.facebook.com', icon:'fa fa-facebook'},
    {id:2, href:'https://www.twitter.com', icon:'fa fa-twitter'},
    {id:3, href:'https://in.linkedin.com', icon:'fa fa-linkedin'},
]

export const services = [
    {   id:1, 
        icon:"fas fa-wallet fa-fw", 
        title:"saving money", 
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia."
    },
    {   id:2, 
        icon:"fas fa-tree fa-fw", 
        title:"endless hikin", 
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia."
    },
    {   id:3, 
        icon:"fas fa-socks fa-fw", 
        title:"amazing comfort", 
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."
    }
]


export const toursData = [
    {   id:1, 
        logo:tour_1, 
        date : "august 26th, 2020",
        title:"Tibet Adventure", 
        icon:"fas fa-map",
        country:"china",
        days:"6 days",
        from:"$1000",
        text:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`
    },
    {   id:1, 
        logo:tour_2, 
        date : "october 1th, 2020",
        title:"best of java", 
        icon:"fas fa-map",
        country:"indonesia",
        days:"11 days",
        from:"$2000",
        text:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`
    },
    {   id:1, 
        logo:tour_3, 
        date : "september 15th, 2020",
        title:"explore hong kong", 
        icon:"fas fa-map",
        country:"hong kong",
        days:"8 days",
        from:"$3000",
        text:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`
    },
    {   id:1, 
        logo:tour_4, 
        date : "december 5th, 2019",
        title:"kenya highlights", 
        icon:"fas fa-map",
        country:"kenya",
        days:"20 days",
        from:"$4000",
        text:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`
    },
]