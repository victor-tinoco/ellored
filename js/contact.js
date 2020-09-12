$(function () {
  "use strict";

  const idx = Cookies.get(PRODUCT_FOR_BUY_COOKIE_KEY);
  const product = idx ? database[Cookies.get(CATEGORY_COOKIE_KEY)].products[idx] : null;
  
  const messageTitleElement = $('#messageTitle');
  const phoneElement = $('#tel');

  if (product) messageTitleElement.val(`Quero comprar um produto da ${product.name}`);

  bindMasks();

  function bindMasks() {
    const PHONE_MASK = '(99) 99999-9999';
    phoneElement.mask(PHONE_MASK);
    phoneElement.blur(function () {
      var last = $(this).val().substr($(this).val().indexOf("-") + 1);

      if (last.length == 3) {
        var move = $(this).val().substr($(this).val().indexOf("-") - 1, 1);
        var lastfour = move + last;

        var first = $(this).val().substr(0, 9);

        $(this).val(first + '-' + lastfour);
      }
    });
  }
})