import { createServer } from "miragejs";
export const landingPage = {
  landingPage:{
    Title: 'TH Solutions - The best of technology',
    Logo: { url: '/uploads/logo_311a3d827d.png', name: 'logo.png' },
    Banner: { url: '/uploads/banner_037398a59e.jpg', name: 'banner.jpg' },
    Menus: [
      { Description: 'About us', Link: '#aboutUs', Order: 1 },
      { Description: 'Contact', Link: '#contact', Order: 2 }
    ],
    AboutUsTitle: 'A little about usqqq',
    AboutUsSubtitle: 'We are responsible of doing a lot of innovation in technology'  
  }
};
export default function createLandingPageMock(){
    return createServer({
        routes() {
          this.get("/api/landingPage", () => ({
            landingPage,
          }))
        },
      })
}