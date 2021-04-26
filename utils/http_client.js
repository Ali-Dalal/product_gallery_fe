const axios = require('axios');

let axiosInstance = axios.create({
    headers: {
        'User-Agent': 'product_gallery_webapp/1.0.0',
    }
});

module.exports = axiosInstance;