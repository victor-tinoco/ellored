$(function () {
  "use strict";

  const isMobile = ($(window).width() < 1000);
  const idx = Cookies.get(PRODUCT_COOKIE_KEY);
  const product = database[Cookies.get(CATEGORY_COOKIE_KEY)].products[idx];
  
  const headerElement = $('#js--header');
  const mainSectionElement = $('#js--main--section');
  const specsListSectionElement = $('#js--specs--section');
  
  specsListSectionElement.hide();

  headerElement.find('h1').text(product.name);
  headerElement.find('button').attr('onclick', `buy(${idx})`);

  mainSectionElement.find('h2').text(product.name);
  mainSectionElement.find('p').text(product.description);
  mainSectionElement.find('img').prop('src', product.imgPath);

  if (product.specifications) {
    specsListSectionElement.show();
    specsListSectionElement.find('h2').text(product.name);
    specsListSectionElement.find('button').attr('onclick', `buy(${idx})`);
    
    if (isMobile) $('#js--specs--header').addClass('d-none').removeClass('d-flex');

    const keys = Object.keys(product.specifications)
    let list = '';
    for (let key of keys) {
      list += isMobile ? buildMobileTableItem(key, product.specifications[key]) : buildTableItem(key, product.specifications[key]);
    }
    specsListSectionElement.find('tbody').html(list);
  }

  function buildTableItem(title, desc) {
    return '<tr>'
    + '<th scope="col" class="align-middle color__text--dark text__body--description-highlighted w-50">' + title + '</th>'
    + '<th scope="col" class="align-middle color__text--dark text__body--paragraph  w-50">' + desc + '</th>' +
    '</tr>';
  }

  function buildMobileTableItem(title, desc) {
    return '<tr><th scope="col" class="align-middle color__text--dark text__body--description-highlighted w-100 ">' + title + '</th></tr>'
    + '<tr><th scope="col" class="align-middle color__text--dark text__body--paragraph text-left w-100 ">' + desc + '</th></tr>';
  }
})