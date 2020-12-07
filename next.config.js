// next.config.js
const withImages = require('next-images')
const withVideos = require('next-videos')
const path = require('path')

module.exports = withImages(withVideos({
    webpack(config) {
        return config
    },env: {
        SiteName: "TH Solutions - The best technology solutions for you",
        BasePath: "http://localhost:3000",
        Template: "simple-bootstrap-theme",
        WebServicePath: "http://localhost:8080",
        API_BASE_URL: "http://localhost:3000",
        USE_MIRAGE_SERVER: true,
        UseMock: true,
    }, 
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}))