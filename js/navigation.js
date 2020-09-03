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
  const currentPath = window.location.pathname;

  guard();
  setupCookies();
  setupNavBarLinks();

  if (Cookies.get(CATEGORY_COOKIE_KEY)) console.log(`Category -> ${JSON.parse(Cookies.get(CATEGORY_COOKIE_KEY))}`);
  if (Cookies.get(PRODUCT_COOKIE_KEY)) console.log(`Product -> ${JSON.parse(Cookies.get(PRODUCT_COOKIE_KEY))}`);
  if (Cookies.get(PRODUCT_FOR_BUY_COOKIE_KEY)) console.log(`Product for buy -> ${JSON.parse(Cookies.get(PRODUCT_FOR_BUY_COOKIE_KEY))}`);

  function guard() {
    if ((currentPath == PRODUCT_PATH_KEY) && (Cookies.get(PRODUCT_COOKIE_KEY) === undefined)) {
      window.location.replace(INDEX_PATH_KEY);
      console.log('product not selected');
    }
    
    if ((currentPath == CATEGORY_PATH_KEY) && (Cookies.get(CATEGORY_COOKIE_KEY) === undefined)) {
      window.location.replace(INDEX_PATH_KEY);
      console.log('category not selected');
    }
  }

  function setupCookies() {
    if (currentPath == INDEX_PATH_KEY) 
      clearCookies();
  }

  function setupNavBarLinks() {
    let list = '';
    for (const idx in database) {
      list += `<li><a href="category.html" onclick="selectCategory(${idx})">${database[idx].title}</a></li>`;
    }
    list += `<li><a href="contact.html" onclick="clearCookies()">Contato</a></li>`;
    listNavElement.html(list);
  }
})

function selectCategory(index) {
  Cookies.set(CATEGORY_COOKIE_KEY, index);
}

function selectProduct(index) {
  Cookies.set(PRODUCT_COOKIE_KEY, index);
}

function selectProductForBuy(index) {
  Cookies.set(PRODUCT_FOR_BUY_COOKIE_KEY, index);
}

function clearCookies() {
  Cookies.remove(CATEGORY_COOKIE_KEY);
  Cookies.remove(PRODUCT_COOKIE_KEY);
  Cookies.remove(PRODUCT_FOR_BUY_COOKIE_KEY);
}