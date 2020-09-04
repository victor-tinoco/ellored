$(function () {
  "use strict";

  const idx = Cookies.get(PRODUCT_FOR_BUY_COOKIE_KEY);
  const product = idx ? database[Cookies.get(CATEGORY_COOKIE_KEY)].products[idx] : null;
  
  const messageTitleElement = $('#messageTitle');

  if (product) messageTitleElement.val(`Quero comprar um produto da ${product.name}`);
})