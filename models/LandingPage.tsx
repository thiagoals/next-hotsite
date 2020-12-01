export default interface LandingPage{
    id: BigInt,
    Title: String,
    Logo: {
      id: BigInt,
      name:String,
      alternativeText: String,
      caption: String,
      width: BigInt,
      height: BigInt,
      formats: { thumbnail: [Object] },
      hash:String,
      ext: String,
      mime: String,
      size: Number,
      url: String,
      provider: String,
    },
    Banner: {
      id: BigInt,
      name: String,
      alternativeText: String,
      caption: String,
      width: BigInt,
      height: BigInt,
      formats: {
        thumbnail: [Object],
        large: [Object],
        medium: [Object],
        small: [Object]
      },
      hash: String,
      ext: String,
      mime: String,
      size: Number,
      url: String,
      provider: String,
    },
    Menus: any[],
    BannerTitle: String,
    BannerDescription: String,
    AboutUsTitle:String,
    AboutUsSubtitle:String,
    AboutUsCards: any[]
  }