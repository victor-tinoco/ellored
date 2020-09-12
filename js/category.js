$(function () {
  "use strict";

  const category = database[Cookies.get(CATEGORY_COOKIE_KEY)];

  
  const headerTitleElement = $('#js--category--title');
  // const subcategoriesListElement = $('#js--subcategories');
  
  const mainSectionElement = $('#js--main-section');
  const secondSectionElement = $('#js--second-section');
  const thirdSectionElement = $('#js--third-section');
  const fourthSectionElement = $('#js--fourth-section');
  
  if (category.products.length == 1) window.location.replace(PRODUCT_PATH_KEY);

  headerTitleElement.text(category.title + (category.title == 'Automação' ? ' - Inversores e Soft Starters' : ''));
  // subcategoriesListElement.hide();

  secondSectionElement.hide();
  thirdSectionElement.hide();
  fourthSectionElement.hide();

  // setupSubcategoriesLinks()

  for (const idx in category.products) {
    switch (parseInt(idx)) {
      case 0:
        mainSectionElement.find('h1').text(category.products[idx].name);
        mainSectionElement.find('p').text(category.products[idx].name);
        mainSectionElement.find('p').text(category.products[idx].name);
        mainSectionElement.find('button').attr('onclick', `buy(${idx})`);
        mainSectionElement.find('a').attr('onclick', `selectProduct(${idx})`);
        mainSectionElement.find('img').prop('src', category.products[idx].imgPath);
        break;
      case 1: case 2: case 3:
        secondSectionElement.show();
        secondSectionElement.find('.container').append(buildSecondSectionRow(idx));
        break;
      case 4: case 5: case 6: case 7:
        thirdSectionElement.show();
        thirdSectionElement.find('.row').last().append(buildThirdSectionItem(idx));
        break;
      case 8: case 9:
        fourthSectionElement.show();
        fourthSectionElement.find('.row').last().append(buildFourthSectionItem(idx));
      default:
        break;
    }
  }

  function buildSecondSectionRow(idx) {
    const marginStyle = idx != 1 ? 'style="margin-top: 128px;"' : '';
    const order = (idx % 2) == 0 ? 'order-sm-first order-md-2' : ''; // if is pair inverse the order
    return '<div class="row" ' + marginStyle + '>'
    + '<div class="col-lg-6 col-sm-12 ' + order + ' d-flex justify-content-center mb-4 mb-lg-0">'
    +    '<img src="' + category.products[idx].imgPath + '" class="product--large">'
    + '</div>'
    + '<div class="col-lg-6 col-sm-12">'
    +    '<h1 class="text__title--large color__text--dark">' + category.products[idx].name + '</h1>'
    +    '<!-- <h2 class="text__subtitle--ultra-small color__text--dark width--small mb-3">Energia. Velocidade. Resistência. Precisão.<br>Excelência em qualidade e tecnologia.</h2>'
    +    '<!-- <p class="text__subtitle--description color__text--medium-light">Lorem ipsum dolor sit amet, consectetur.</p> -->'
    +    '<button class="button-group mb-2" onclick="buy(' + idx + ')">Comprar</button>'
    +    '<a class="link--primary icons" href="product.html" onclick="selectProduct(' + idx + ')">Detalhes<span class="material-icons">keyboard_arrow_right</span></a>'
    + '</div>' +
    '</div>';
  }

  function buildThirdSectionItem(idx) {
    let specsParagraphsList = '';
    for (let i = 0; i <= 2; i++) {
      let specs = category.products[idx].specifications;
      let key = Object.keys(specs)[i]
      if (key) specsParagraphsList += '<p class="color__text--dark text__body--paragraph text-center description-item">' + key + ': ' + specs[key] + '</p>';
    }

    return '<div class="col-sm-12 col-lg mt-5 mt-lg-0 mb-5 mb-lg-0 d-flex align-items-center justify-content-end flex-column">'
    + '<img class="product" src="'+ category.products[idx].imgPath + '">'
    + '<h2 class="text__title--ultra-small color__text--dark mt-3 mb-3">'+ category.products[idx].name + '</h2>'
    + specsParagraphsList
    + '<button class="button-group mb-1 mt-3" onclick="buy(' + idx + ')">Comprar</button>'
    + '<a class="ml-2 link--primary icons" href="product.html" onclick="selectProduct(' + idx + ')">Saiba mais<span class="material-icons">keyboard_arrow_right</span></a>' +
    '</div>';
  }

  function buildFourthSectionItem(idx) {
    return '<div class="col-sm-12 col-lg p-2">'
    + '<div style="min-height: 475px;" class="color__background--white section--pading-div d-flex flex-column align-items-center ">'
    +    '<h1 class="color__text--dark text__title--large mb-2">'+ category.products[idx].name + '</h1>'
    +    '<!-- <h2 class="text__subtitle--ultra-small color__text--dark width--small mb-2 text-center">Energia. Velocidade. Resistência. Precisão.<br>Excelência em qualidade e tecnologia.</h2> -->'
    +    '<!-- <p class="color__text--medium-light text__subtitle--description mb-2">Lorem ipsum dolor sit amet, consectetur.</p> -->'
    +    '<button class="button-group my-1" onclick="buy(' + idx + ')">Comprar</button>'
    +    '<a class="link--primary icons mb-5" href="product.html" onclick="selectProduct(' + idx + ')">Ler mais<span class="material-icons">keyboard_arrow_right</span></a>'
    +    '<img src="'+ category.products[idx].imgPath + '" class="product--large">'
    + '</div>' +
    '</div>';
  }

  // function setupSubcategoriesLinks() {
  //   switch (category.title) {
  //     case database[0].title:
  //       subcategoriesListElement.show();
  //       subcategoriesListElement.html(
  //         '<li><a class="text__body--small" href="#">Redutores e Motoredutores</a></li>' +
  //         '<li class="ml-4"><a class="text__body--small" href="#">Transmissão Angular</a></li>'
  //       );
  //       break;
  //     default:
  //       break;
  //   }
  // }
})