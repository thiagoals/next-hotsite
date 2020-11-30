import { createServer } from "miragejs";
export const landingPage = {
  landingPage:{
    Title: 'TH Solutions - The best of technology',
    Logo: { url: 'https://s1.logaster.com/static/v3/img/products/logo.png', name: 'logo.png' },
    Banner: { url: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_660582997_412145.jpg', name: 'banner.jpg' },
    Menus: [
      { Description: 'About us', Link: '#aboutUs', Order: 1 },
      { Description: 'Contact', Link: '#contact', Order: 2 }
    ],
    AboutUsTitle: 'About me',
    AboutUsSubtitle: "My name is Thiago. I'm a fullstack developer. This website uses what is the best of web develop technology: NextJS."
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