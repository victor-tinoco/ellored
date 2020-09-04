const INDEX_PATH_KEY = '/index.html'
const PRODUCT_PATH_KEY = '/product.html'
const CATEGORY_PATH_KEY = '/category.html'
const CONTACT_PATH_KEY = '/contact.html'

const CATEGORY_COOKIE_KEY = 'category'
const PRODUCT_COOKIE_KEY = 'product'
const PRODUCT_FOR_BUY_COOKIE_KEY = 'product_for_buy'

$(function () {
  "use strict";
  const listNavElement = $('.js--list--nav');
  const footerLinksRowElement = $('#js--footer--cols');
  const currentPath = window.location.pathname;

  guard();
  setupCookies();
  setupNavBarLinks();
  setupFooterLinks();

  if (Cookies.get(CATEGORY_COOKIE_KEY)) console.log(`Category -> ${JSON.parse(Cookies.get(CATEGORY_COOKIE_KEY))}`);
  if (Cookies.get(PRODUCT_COOKIE_KEY)) console.log(`Product -> ${JSON.parse(Cookies.get(PRODUCT_COOKIE_KEY))}`);
  if (Cookies.get(PRODUCT_FOR_BUY_COOKIE_KEY)) console.log(`Product for buy -> ${JSON.parse(Cookies.get(PRODUCT_FOR_BUY_COOKIE_KEY))}`);

  function guard() {
    if ((currentPath == PRODUCT_PATH_KEY) && (Cookies.get(PRODUCT_COOKIE_KEY) === undefined)) {
      window.location.replace(INDEX_PATH_KEY);
    }
    
    if ((currentPath == CATEGORY_PATH_KEY) && (Cookies.get(CATEGORY_COOKIE_KEY) === undefined)) {
      window.location.replace(INDEX_PATH_KEY);
    }
  }

  function setupCookies() {
    if (currentPath == INDEX_PATH_KEY) 
      clearCookies();
  }

  function setupNavBarLinks() {
    let list = '';
    for (const idx in database) {
      list += database[idx].products.length > 1 
        ? `<li><a href="category.html" onclick="selectCategory(${idx})">${database[idx].title}</a></li>`
        : `<li><a href="product.html" onclick="selectCategoryAndProduct(${idx}, ${0})">${database[idx].title}</a></li>`;
    }
    list += `<li><a href="contact.html" onclick="clearCookies()">Contato</a></li>`;
    listNavElement.html(list);
  }

  function setupFooterLinks() {
    let nav = '';
    nav += _setupFooterLinksColContainer(_setupFooterLinksColContainerContent(0));
    nav += _setupFooterLinksColContainer(
      _setupFooterLinksColContainerContent(6) +
      _setupFooterLinksColContainerContent(1, 'mt-4'));
    nav += _setupFooterLinksColContainer(_setupFooterLinksColContainerContent(2));
    nav += _setupFooterLinksColContainer(_setupFooterLinksColContainerContent(5));
    nav += _setupFooterLinksColContainer(_setupFooterLinksColContainerContent(3));
    nav += _setupFooterLinksColContainer(_setupFooterLinksColContainerContent(4));
    footerLinksRowElement.html(nav)
  }


  function _setupFooterLinksColContainerContent(idx, mt) { 
    let category = database[idx]

    let productListItem = '';
    category.products.forEach((val, prodId) => {
      productListItem += '<li><a href="product.html" onclick="selectCategoryAndProduct(' + idx + ', ' + prodId + ')">' + val.name + '</a></li>'
    })

    return '<h3 class="' + mt + '"><a href="category.html" onclick="' + idx + '" >' + category.title + '</a></h3>' +
      '<ul>' + productListItem + '</ul>';
  }

  function _setupFooterLinksColContainer(inject) { 
    return `<div class="col-lg-2 col-md-4 col-12 footer__category">${inject}</div>`
  }
})

// Global Funcs

function selectCategory(index) {
  Cookies.set(CATEGORY_COOKIE_KEY, index);
}

function selectProduct(index) {
  Cookies.set(PRODUCT_COOKIE_KEY, index);
}

function selectProductForBuy(index) {
  Cookies.set(PRODUCT_FOR_BUY_COOKIE_KEY, index);
}

function selectCategoryAndProduct(catId, prodId) {
  selectCategory(catId);
  selectProduct(prodId);
}

function buy(idx) {
  selectProductForBuy(idx);
  window.location.href = CONTACT_PATH_KEY;
}

function clearCookies() {
  Cookies.remove(CATEGORY_COOKIE_KEY);
  Cookies.remove(PRODUCT_COOKIE_KEY);
  Cookies.remove(PRODUCT_FOR_BUY_COOKIE_KEY);
}