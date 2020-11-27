import { gql }  from 'graphql-request';

export const query = gql`query getLandingPage {
    landingPage {
      Title
      Logo {
        url
        name
      }
      Banner {
        url
        name
      }
      Menus {
        Description
        Link
        Order
      }
      AboutUsTitle
      AboutUsSubtitle
    }
  }
`