import { createServer } from "miragejs";
export const landingPage = {
  landingPage:{
    Title: 'TH Soluções - O melhor que a tecnologia tem a oferecer',
    Logo: { url: 'https://s1.logaster.com/static/v3/img/products/logo.png', name: 'logo.png' },
    Banner: { url: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_660582997_412145.jpg', name: 'banner.jpg' },
    Menus: [
      { Description: 'Sobre nós', Link: '#aboutUs', Order: 1 },
      { Description: 'Contato', Link: '#contact', Order: 2 }
    ],
    BannerTitle: 'TH Soluções',
    BannerDescription: 'Desenvolvimento de sistemas como você nunca viu.',
    AboutUsTitle: 'Um pouco sobre nós',
    AboutUsSubtitle: "A TH soluções é uma empresa voltada para desenvolvimento de todo e qualquer software sob demanda.",
    AboutUsCards:[
      {
        Icon: 'CodeSlash',
        Title: 'Codificação',
        Description: 'Nós temos o que a tecnologia tem de melhor a oferecer.',
        HasButton: false,
        ButtonName: 'See more.',
        ButtonHref: '#seeMore',
      },
      {
        Icon: 'Globe',
        Title: 'Disponibilidade',
        Description: 'Como trabalhamos em nuvem, você pode acessar onde estiver.',
        HasButton: false,
        ButtonName: 'See more.',
        ButtonHref: '#seeMore',
      },
      {
        Icon: 'GraphUp',
        Title: 'Negócio',
        Description: 'Alavanque o seu negócio com as nossas soluções sob demanda.',
        HasButton: false,
        ButtonName: 'See more.',
        ButtonHref: '#seeMore',
      },
    ]
  }
};
export default function createLandingPageMock(){
    createServer({
        routes() {
          this.get("/api/landingPage", () => ({
              landingPage:[
                {
                Title: 'TH Solutions - The best of technology',
                Logo: { url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.logaster.com.br%2F&psig=AOvVaw0gEz5fasvNCMyFCil89Jog&ust=1606597113603000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOihg-rOo-0CFQAAAAAdAAAAABAD', name: 'logo.png' },
                Banner: { url: '/uploads/banner_037398a59e.jpg', name: 'banner.jpg' },
                Menus: [
                  { Description: 'About us', Link: '#aboutUs', Order: 1 },
                  { Description: 'Contact', Link: '#contact', Order: 2 }
                ],
                AboutUsTitle: 'A little about usqqq',
                AboutUsSubtitle: 'We are responsible of doing a lot of innovation in technology'  
              }
            ]
          }))
          this.get("/api/movies", () => ({
            movies: [
              { id: 1, name: "Inception", year: 2010 },
              { id: 2, name: "Interstellar", year: 2014 },
              { id: 3, name: "Dunkirk", year: 2017 },
            ],
          }))

          // resets the namespace to the root
          this.namespace = "" // or this.namespace = "/"
          this.passthrough()
        },
      })
}