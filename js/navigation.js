const INDEX_PATH_KEY = '/index.html'
const PRODUCT_PATH_KEY = '/product.html'
const CATEGORY_PATH_KEY = '/category.html'
const CONTACT_PATH_KEY = '/contact.html'

const CATEGORY_COOKIE_KEY = 'category'
const PRODUCT_COOKIE_KEY = 'product'
const PRODUCT_FOR_BUY_COOKIE_KEY = 'product_for_buy'

$(function () {
  "use strict";
  const currentPath = window.location.pathname

  guard()
  clean()

  function guard() {
    if ((currentPath == PRODUCT_PATH_KEY) && (Cookies.get(PRODUCT_COOKIE_KEY) === undefined)) {
      console.log('product not selected')
      window.location.replace(INDEX_PATH_KEY)
    }
    
    if ((currentPath == CATEGORY_PATH_KEY) && (Cookies.get(CATEGORY_COOKIE_KEY) === undefined)) {
      console.log('category not selected')
      window.location.replace(INDEX_PATH_KEY)
    }
  }

  function clean() {
    if (currentPath == INDEX_PATH_KEY) {
      Cookies.remove(CATEGORY_COOKIE_KEY)
      Cookies.remove(PRODUCT_COOKIE_KEY)
      Cookies.remove(PRODUCT_FOR_BUY_COOKIE_KEY)
    }
  }
})

function selectCategory(category) {
  let json = JSON.stringify(category)
  console.log(json)
  Cookies.set(CATEGORY_COOKIE_KEY, json)
}