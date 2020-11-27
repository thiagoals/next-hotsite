// next.config.js
const withImages = require('next-images')
module.exports = withImages({
    webpack(config, options) {
        return config
    },env: {
        SiteName: "Simple Bootstrap Theme",
        BasePath: "http://localhost:3000",
        Template: "simple-bootstrap-theme",
        WebServicePath: "http://localhost:8080",
        API_BASE_URL: "http://localhost:3000",
        USE_MIRAGE_SERVER: true
    }
})
/*
module.exports = {
    env: {
        SiteName: "Simple Bootstrap Theme",
        BasePath: "localhost:3000",
        Template: "simple-bootstrap-theme"
    }
}*/