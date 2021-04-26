const httpClient = require('../utils/http_client');
const { v1 } = require('uuid');

const productGalleryWebAPIHost = process.env.PRODUCT_GALLERY_WEB_API_HOST

function getCityProductWithBrochuresGrid(cityName, productName) {
    return httpClient.request({
        method: 'get',
        url: `${productGalleryWebAPIHost}/api/v1/city-product-grid`,
        params: {
            city_name: cityName,
            product_name: productName
        },
        headers: {
            'x-request-id': v1(),
        }
    })
}

module.exports = {
    getCityProductWithBrochuresGrid
}