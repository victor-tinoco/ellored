$(function () {
  "use strict";

  const category = database[Cookies.get(CATEGORY_COOKIE_KEY)];

  const headerTitleElement = $('#js--category--title');
  const subcategoriesListElement = $('#js--subcategories');

  const mainSectionElement = $('#js--main-section');

  for (const idx in category.products) {
    switch (parseInt(idx)) {
      case 0:
        console.log('salve quebrada');
        mainSectionElement.find('h1').text(category.products[idx].name);
        mainSectionElement.find('button').attr('onclick', `buy(${idx})`);
        mainSectionElement.find('a').attr('onclick', `selectProduct(${idx})`);
        mainSectionElement.find('img').prop('src', category.products[idx].imgPath);
        break;
      case 1: case 2: case 3:
        console.log('aeew caraio')
        break;
      default:
        break;
    }
  }

  headerTitleElement.text(category.title);
})

function buy(idx) {
  selectProductForBuy(idx)
  window.location.replace(CONTACT_PATH_KEY);
}