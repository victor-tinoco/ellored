var database =  [
  {
    title: 'Redutor',
    // subcategories: ['Redutores e Motoredutores', 'Transmissão Angular'],
    products: [
      {
        name: 'Linha Q',
        description: 'Redutor de velocidade do tipo coroa e rosca sem fim, modelo de corpo quadrado, com diversas opções de reduções e montagens.',
        imgPath: 'img/produtos/redutor/linha-q.png',
        specifications: {
          'Tamanho': '025 - 150',
          'Reduções': '1:7.5 - 1:100',
          'Potências': '0.08cv - 25.00cv',
          'Torques de Saídas': '4.1 - 1.316.6 N.m',
          'Acessórios': 'Flanges de saída\nBraços de torque\nEixos de saída\nEixos de entrada',
          'Opcionais': 'Eixos com dimensões especiais',
        }
      },
      {
        name: 'Linha QDR',
        description: 'Redutor de velocidade do tipo coroa e rosca sem fim, combinados com outros redutores do tipo coroa e rosca sem fim. Esta combinação permite ampliar a gama de reduções e torque.',
        imgPath: 'img/produtos/redutor/linha-qdr.jpg',
        specifications: {
          'Tamanho': '302 - 156',
          'Reduções': '1:56.25 - 1:10.000',
          'Potências': '0.08cv - 3.00cv',
          'Torques de Saídas': '17 - 1.883.5 N.m',
          'Acessórios': 'Flanges de saída\nBraços de torque\nEixos de saída\nEixos de entrada',
          'Opcionais': 'Eixos com dimensões especiais',
        }
      },
      {
        name: 'Linha QP',
        description: 'Redutor de velocidade do tipo coroa e rosca sem fim, combinados com redutores do tipo monoestágio. Esta combinação além de permitir grandes reduções, mantém a montagem ortogonal e uma boa eficiência, devido ao alto rendimento do redutor monoestágio.',
        imgPath: 'img/produtos/redutor/linha-qp.jpg',
        specifications: {
          'Tamanho': '240 - 515',
          'Reduções': '1:15.38 - 1:1.086',
          'Potências': '0.16cv - 7.50cv',
          'Torques de Saídas': '31 - 1.464 N.m',
          'Acessórios': 'Flanges de saída\nPés de fixação\nBraços de torque\nEixos de saída\nEixos de entrada',
          'Opcionais': 'Eixos com dimensões especiais',
        }
      },
      {
        name: 'Linha R',
        description: 'Redutor de velocidade do tipo coroa e rosca sem fim, modelo de corpo redondo, com diversas opções de reduções e montagens. Fabricação italiana (HYDRO-MEC).',
        imgPath: 'img/produtos/redutor/linha-r.jpg',
        specifications: {
          'Tamanho': '030 - 085',
          'Reduções': '1:7 - 1:102',
          'Potências': '0.08cv - 7.50cv',
          'Torques de Saídas': '7.6 - 347 N.m',
          'Acessórios': 'Flanges de saída\nPés de fixação\nBraços de torque\nEixos de saída\nEixos de entrada',
          'Opcionais': 'Eixos com dimensões especiais\nAnti-explosão\nPintura epóxi especial\nEixos em aço inox',
        }
      },
      {
        name: 'Linha M',
        description: 'Redutor de velocidade do tipo monoestágio, de engrenagens helicoidais de alta qualidade, ideal para situações que requerem pequenas reduções. Este redutor possui alto rendimento, possibilitando economia de energia. Fabricação italiana (HYDRO-MEC).',
        imgPath: 'img/produtos/redutor/linha-m.jpg',
        specifications: {
          'Tamanho': '211A - 511A',
          'Reduções': '1:2.05 - 1:10.86',
          'Potências': '0.33cv - 7.50cv',
          'Torques de Saídas': '6.2 - 106.7 N.m',
          'Acessórios': 'Flanges de saída\nPés de fixação\nEixos de entrada',
          'Opcionais': 'Eixos com dimensões especiais\nAnti-explosão',
        }
      },
      {
        name: 'Linha C',
        description: 'Redutor de velocidade do tipo coaxial, de engrenagens helicoidais de alta qualidade, montadas em 2 ou 3 estágios, com diversas opções de reduções e montagens. Este redutor possui alto rendimento, possibilitando economia de energia. Fabricação italiana (HYDRO-MEC).',
        imgPath: 'img/produtos/redutor/linha-c.jpg',
        specifications: {
          'Tamanho': '202A - 1103C',
          'Reduções': '1:3.44 - 1:680.03',
          'Potências': '0.25cv - 75.00cv',
          'Torques de Saídas': '10.2 - 4.756 N.m',
          'Acessórios': 'Flanges de saída\nPés de fixação\nEixos de entrada',
          'Opcionais': 'Eixos com dimensões especiais\nAnti-explosão',
        }
      },
      {
        name: 'Linha P',
        description: 'Redutor de velocidade do tipo eixos paralelos, composto por engrenagens helicoidais de alta qualidade, montadas em 2 ou 3 estágios, com diversas opções de reduções e montagens. Este redutor possui alto rendimento, possibilitando economia de energia. Fabricação italiana (HYDRO-MEC).',
        imgPath: 'img/produtos/redutor/linha-p.jpg',
        specifications: {
          'Tamanho': 'FA42 - FC83',
          'Reduções': '1:5.98 - 1:680.03',
          'Potências': '0.50cv - 30.00cv',
          'Torques de Saídas': '137.5 - 4.756 N.m',
          'Acessórios': 'Flanges de saída\nPés de fixação\nEixos de entrada\nEixos de saída',
          'Opcionais': 'Eixos com dimensões especiais\nAnti-explosão',
        }
      },
      {
        name: 'Linha H',
        description: 'Redutor de velocidade do tipo eixos paralelos, composto por engrenagens helicoidais de alta qualidade, montadas em 2 ou 3 estágios, com diversas opções de reduções e montagens. Este redutor possui alto rendimento, possibilitando economia de energia. Fabricação italiana (HYDRO-MEC).',
        imgPath: 'img/produtos/redutor/linha-h.jpg',
        specifications: {
          'Tamanho': '62C - 83C',
          'Reduções': '1:5.98 - 1:680.03',
          'Potências': '2.00cv - 30.00cv',
          'Torques de Saídas': '349.7 - 2.179 N.m',
          'Acessórios': 'Flanges de saída\nEixos de entrada\nEixos de saída',
          'Opcionais': 'Eixos com dimensões especiais\nAnti-explosão',
        }
      },
      {
        name: 'Linha X',
        description: 'Redutor de velocidade do tipo ortogonal, composto por engrenagens helicoidais combinadas com engrenagem cônica de alta qualidade. Montado em 2 ou 3 estágios, possui diversas opções de reduções e montagens. Este redutor possui alto rendimento, possibilitando economia de energia. Fabricação italiana (HYDRO-MEC).',
        imgPath: 'img/produtos/redutor/linha-x.png',
        specifications: {
          'Tamanho': 'X22S - X114',
          'Reduções': '1:4.83 - 1:821.7',
          'Potências': '0.16cv - 75.00cv',
          'Torques de Saídas': '14.4 - 4.813 N.m',
          'Acessórios': 'Flanges de saída\nBraços de torque\nEixos de saída\nEixos de entrada',
          'Opcionais': 'Eixos com dimensões especiais\nAnti-explosão\nPintura epóxi especial\nEixos em aço inox',
        }          
      },
    ],
  },
  {
    title: 'Motor e Motofreio',
    products: [
      {
        name: 'Linha Motor',
        description: 'Redutor de velocidade do tipo coroa e rosca sem fim, modelo de corpo quadrado, com diversas opções de reduções e montagens.',
        imgPath: '/img/AL.png',
        specifications: {
          'Tamanho': '025 - 150',
          'Reduções': '1:7.5 - 1:100',
          'Potências': '0.08cv - 25.00cv',
          'Torques de Saídas': '4.1 - 1.316.6 N.m',
          'Torques de Saídas': '4.1 - 1.316.6 N.m',
          'Acessórios': 'Flanges de saída\nBraços de torque\nEixos de saída\nEixos de entrada',
          'Opcionais': 'Eixos com dimensões especiais',
        }
      }
    ],
  },
  {
    title: 'Planetários de Precisão',
    products: [
      {
        name: 'Linha Plan',
        description: 'Redutor de velocidade do tipo coroa e rosca sem fim, modelo de corpo quadrado, com diversas opções de reduções e montagens.',
        imgPath: '/img/IBR.png',
        specifications: {
          'Tamanho': '025 - 150',
          'Reduções': '1:7.5 - 1:100',
          'Potências': '0.08cv - 25.00cv',
          'Torques de Saídas': '4.1 - 1.316.6 N.m',
          'Torques de Saídas': '4.1 - 1.316.6 N.m',
          'Acessórios': 'Flanges de saída\nBraços de torque\nEixos de saída\nEixos de entrada',
          'Opcionais': 'Eixos com dimensões especiais',
        }
      }
    ],
  },
  {
    title: 'Automação',
    products: [
      {
        name: 'Linha Automa',
        description: 'Redutor de velocidade do tipo coroa e rosca sem fim, modelo de corpo quadrado, com diversas opções de reduções e montagens.',
        imgPath: '/img/IBR.png',
        specifications: {
          'Tamanho': '025 - 150',
          'Reduções': '1:7.5 - 1:100',
          'Potências': '0.08cv - 25.00cv',
          'Torques de Saídas': '4.1 - 1.316.6 N.m',
          'Torques de Saídas': '4.1 - 1.316.6 N.m',
          'Acessórios': 'Flanges de saída\nBraços de torque\nEixos de saída\nEixos de entrada',
          'Opcionais': 'Eixos com dimensões especiais',
        }
      }
    ],
  },
  {
    title: 'Variador',
    products: [
      {
        name: 'Linha Var',
        description: 'Redutor de velocidade do tipo coroa e rosca sem fim, modelo de corpo quadrado, com diversas opções de reduções e montagens.',
        imgPath: '/img/IBR.png',
        specifications: {
          'Tamanho': '025 - 150',
          'Reduções': '1:7.5 - 1:100',
          'Potências': '0.08cv - 25.00cv',
          'Torques de Saídas': '4.1 - 1.316.6 N.m',
          'Torques de Saídas': '4.1 - 1.316.6 N.m',
          'Acessórios': 'Flanges de saída\nBraços de torque\nEixos de saída\nEixos de entrada',
          'Opcionais': 'Eixos com dimensões especiais',
        }
      }
    ],
  },
  {
    title: 'Acoplamento',
    products: [
      {
        name: 'Linha Ac',
        description: 'Redutor de velocidade do tipo coroa e rosca sem fim, modelo de corpo quadrado, com diversas opções de reduções e montagens.',
        imgPath: '/img/IBR.png',
        specifications: {
          'Tamanho': '025 - 150',
          'Reduções': '1:7.5 - 1:100',
          'Potências': '0.08cv - 25.00cv',
          'Torques de Saídas': '4.1 - 1.316.6 N.m',
          'Torques de Saídas': '4.1 - 1.316.6 N.m',
          'Acessórios': 'Flanges de saída\nBraços de torque\nEixos de saída\nEixos de entrada',
          'Opcionais': 'Eixos com dimensões especiais',
        }
      }
    ],
  },
]