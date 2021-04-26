const ProductGalleryAPIService = require('../services/product_gallery_api');

async function getCityAndProductWithRelatedBrochures(req, res) {
    const { city_name, product_name } = req.params;
    try {
        let result = await ProductGalleryAPIService.getCityProductWithBrochuresGrid(city_name, product_name);
        const { products, ...city } = result.data;
        res.render('brochures', { city, title: 'Brochures', product: products[0] });
    } catch (e) {
        if (e.response && e.response.status === 404) {
            res.render('404');
        } else {
            console.error(e);
            res.render('500');
        }
    }
}

module.exports = {
    getCityAndProductWithRelatedBrochures
}