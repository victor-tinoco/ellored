var database =  [
  {
    title: 'Redutor',
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
        name: 'Linha MS - Trifásico',
        
        description: 'Motores trifásicos assíncronos em carcaça de alumínio, com projeto avançado, feitos com materiais selecionados conforme a qualidade da norma IEC. Os motores MS possuem um ótimo desempenho, segurança e confiança na operação, a carcaça de alumínio oferece uma melhor aparência e um menor peso. Motor com construção simples, baixo ruído e vibração, podendo utilizá-lo nas mais variadas aplicações.',
        imgPath: 'img/produtos/motor-e-motofreio/linha-ms-trifasico.png',
        specifications: {
          'Potências': '0.08cv - 0.95cv',
          'Motores': '2, 4, 6 e 8 pólos',
          'Opções de flanges': 'C-DIN (B14), FF (B5) e tampa (B3)',
          'Opcionais': 'Pés de fixacão',
        }        
      },
      {
        name: 'Linha ML-  Monofásico',
        description: 'Motores monofásicos assíncronos em carcaça de alumínio com dois capacitores, com projeto avançado, feitos com materiais selecionados conforme a qualidade da norma IEC. Os motores MS possuem um ótimo desempenho, segurança e confiança na operação, a carcaça de alumínio oferece uma melhor aparência e um menor peso. Torque de partida é de 2.5 vezes o nominal. Estes motores são adequados nas ocasiões onde requer um alto torque de partida, podendo utilizá-lo nas mais variadas aplicações.',
        imgPath: 'img/produtos/motor-e-motofreio/linha-ml-monofasico.webp',
        specifications: {
          'Potências': '0.16cv - 4.00cv',
          'Motores': '4 pólos',
          'Opções de flanges': 'C-DIN (B14), FF (B5) e tampa (B3)',
          'Opcionais': 'Pés de fixacão',
        }
      },
      {
        name: 'Linha MSB - Motofreio',
        description: 'Motores trifásicos assíncronos em carcaça de alumínio acoplados à um freio eletromagnético, com projeto avançado, feitos com materiais selecionados conforme a qualidade da norma IEC. Os motores MSB possuem um ótimo desempenho, segurança e confiança na operação, a carcaça de alumínio oferece uma melhor aparência e um menor peso. Devido á sua confiabilidade e a sua rápida travagem, são indicados nas mais variadas aplicações.',
        imgPath: 'img/produtos/motor-e-motofreio/linha-msb-motofreio.webp',
        specifications: {
          'Potências': '0.16cv - 0.93cv',
          'Motores': '4 pólos',
          'Opções de flanges': 'C-DIN (B14), FF (B5) e tampa (B3)',
          'Opcionais': 'Pés de fixacão',
        }
      },
      {
        name: 'Linha W22 - Trifásico',
        description: 'Os motores W22 são motores que possuem nível de rendimento que atendem aos valores estabelecidos na Portaria 553 da lei de eficiência energética 10.295, que está em vigor desde janeiro de 2010. Excelente relação custo-benefício, baixos níveis de ruído e vibração e fácil manutenção são algumas das características que definem esse produto.',
        imgPath: 'img/produtos/motor-e-motofreio/linha-w22-trifasico.webp',
        specifications: {
          'Potências': '0.16cv - 30.00cv',
          'Motores': '2, 4, 6 e 8 pólos',
          'Opções de flanges': 'C-DIN (B14), FF (B5) e tampa (B3)',
          'Opcionais': 'Pés de fixacão',
        }
      },
      {
        name: 'Linha W22 - Motofreio',
        description: 'Ideal para aplicações onde paradas instantâneas, precisas e seguras, controle de posicionamento e economia de energia são necessários.',
        imgPath: 'img/produtos/motor-e-motofreio/linha-w22-motofreio.webp',
        specifications: {
          'Potências': '0.16cv - 30.00cv',
          'Motores': '2, 4, 6 e 8 pólos',
          'Opções de flanges': 'C-DIN (B14), FF (B5) e tampa (B3)',
          'Opcionais': 'Pés de fixacão',
          'Algumas aplicações': 'Elevadores de carga\nTalhas\nMáquinas-ferramentas\nTeares\nMáquinas de embalagem\nTransportadores\nMáquinas de lavar e engarrafar\nDobradeiras\nDemais equipamentos onde são exigidas paradas rápidas por questões de segurança, posicionamento e economia de tempo.',
        }
      },
    ],
  },
  {
    title: 'Planetários de Precisão',
    products: [
      {
        name: 'Linha PB',
        description: 'Redutores planetários de alta precisão com qualidade superiror e maior capacidade de torque.',
        imgPath: 'img/produtos/planetarios/linha-pb.png',
        specifications: {
          'Operação Silenciosa': 'Engrenagens helicoidais contribuem para redução de vibração e ruído.',
          'Alto Torque': 'Alto torque de saída em comparação com redutores planetários que possuem engrenagens de dentes retos.',
          'Alta eficiência': 'A eficiência do modelo de 1 estágio é superior a 97% e do modelo de 2 estágios é superior a 94%.',
          'Reduções em 1 estágio': '3, 4, 5, 6, 7, 8, 9 e 10.',
          'Reduções em 2 estágios': '15, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 100.',
        }
      },
      {
        name: 'Linha PBL',
        description: 'Redutores planetários de alta precisão com qualidade superiror e maior capacidade de torque.',
        imgPath: 'img/produtos/planetarios/linha-pbl.webp',
        specifications: {
          'Operação Silenciosa': 'Engrenagens cônicas helicoidais e engrenagens helicoidais retificadas contribuem para redução de vibração e ruído.',
          'Alta Rigidez e Alto Torque': 'Alta rigidez e alto torque são alcançados pela integração de rolamentos de agulha e a construção em peça única do suporte dos rolamentos com eixo de saída.',
          'Alta eficiência': 'A eficiência do modelo de 1 estágio é superior a 95% e do modelo de 2 estágios é superior a 92%.',
          'Reduções em 1 estágio': '3, 4, 5, 6, 7, 8, 9 e 10.',
          'Reduções em 2 estágios': '15, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 100, 120, 140, 160, 180 e 200.',
        }
      },
      {
        name: 'Linha SB',
        description: 'Redutores planetários de alta precisão com qualidade superiror e maior capacidade de torque. Linha Premium.',
        imgPath: 'img/produtos/planetarios/linha-sb.webp',
        specifications: {
          'Folga Reduzida': 'Folga abaixo de 7 arco minuto. Sendo possível escolher especificações com até 1 arco minuto de folga.',
          'Alta velocidade de entrada': 'Permite velocidades de entrada de 5.000 RPM.',
          'Alto Torque': 'Maior torque de saída em comparação à redutores planetários que possuem engrenagens de dentes retos.',
          'Alta Estabilidade': 'Produzido com aço de alta resistência. A dureza está em toda a engrenagem ao invés de estar apenas na superfície, proporciona aumento da vida útil mantendo a alta precisão mesmo após longo período de operação.',
          'Baixo ruído': 'Abaixo de 65 dB.',
          'Alta eficiência': 'A eficiência do modelo de 1 estágio é superior a 97%, do modelo de 2 estágios é superior a 94% e do do modelo de 3 estágios é superior a 90%',
          'Reduções em 1 estágio': '3, 4, 5, 6, 7, 8, 9 e 10.',
          'Reduções em 2 estágios': '15, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 100.',
          'Reduções em 3 estágios': '125, 150, 175, 200, 250, 300, 350, 400, 450, 500, 600, 700, 800, 900, 1000.',
        }
      },
      {
        name: 'Linha SBL',
        description: 'Redutores planetários de alta precisão com qualidade superiror e maior capacidade de torque. Linha Premium.',
        imgPath: 'img/produtos/planetarios/linha-sbl.webp',
        specifications: {
          'Folga Reduzida': 'Folga abaixo de 7 arco minuto. Sendo possível escolher especificações com até 1 arco minuto de folga.',
          'Alta velocidade de entrada': 'Permite velocidades de entrada de 5.000 RPM.',
          'Alto Torque': 'Maior torque de saída em comparação à redutores planetários que possuem engrenagens de dentes retos.',
          'Alta Estabilidade': 'Produzido com aço de alta resistência. A dureza está em toda a engrenagem ao invés de estar apenas na superfície, proporciona aumento da vida útil mantendo a alta precisão mesmo após longo período de operação.',
          'Baixo ruído': 'Abaixo de 65 dB.',
          'Alta eficiência': 'A eficiência do modelo de 1 estágio é superior a 97% e do modelo de 2 estágios é superior a 94%',
          'Reduções em 1 estágio:': '3, 4, 5, 6, 7, 8, 9,10, 12, 14, 6, 18 e 20. ',
          'Reduções em 2 estágios:': '15, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 100, 120, 140, 160, 180, 200.',
        }
      },
      {
        name: 'Linha SE',
        description: 'Redutores planetários de alta precisão com maior capacidade de torque e sistema diferenciado de fixação na saída. Linha Premium.',
        imgPath: 'img/produtos/planetarios/linha-se.webp',
        specifications: {
          'Folga Reduzida': 'Folga abaixo de 7 arco minuto. Sendo possível escolher especificações com até 1 arco minuto de folga.',
          'Alta velocidade de entrada': 'Permite velocidades de entrada de 5.000 RPM.',
          'Alto Torque': 'Maior torque de saída em comparação à redutores planetários que possuem engrenagens de dentes retos.',
          'Alta Estabilidade': 'Produzido com aço de alta resistência. A dureza está em toda a engrenagem ao invés de estar apenas na superfície, proporciona aumento da vida útil mantendo a alta precisão mesmo após longo período de operação. ',
          'Baixo ruído': 'Abaixo de 65 dB.',
          'Alta eficiência': 'A eficiência do modelo de 1 estágio é superior a 97%, do modelo de 2 estágios é superior a 94% e do do modelo de 3 estágios é superior a 90%',
          'Reduções em 1 estágio': '3, 4, 5, 6, 7, 8, 9 e 10.',
          'Reduções em 2 estágios': '15, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 100.',
          'Reduções em 3 estágios': '125, 150, 175, 200, 250, 300, 350, 400, 450, 500, 600, 700, 800, 900, 1000.',
        }
      },
      {
        name: 'Linha SEL',
        description: 'Redutores planetários de alta precisão com maior capacidade de torque e sistema diferenciado de fixação na saída. Linha Premium.',
        imgPath: 'img/produtos/planetarios/linha-sel.webp',
        specifications: {
          'Folga Reduzida': 'Folga abaixo de 7 arco minuto. Sendo possível escolher especificações com até 1 arco minuto de folga.',
          'Alta velocidade de entrada': 'Permite velocidades de entrada de 5.000 RPM.',
          'Alto Torque': 'Maior torque de saída em comparação à redutores planetários que possuem engrenagens de dentes retos.',
          'Alta Estabilidade': 'Produzido com aço de alta resistência. A dureza está em toda a engrenagem ao invés de estar apenas na superfície, proporciona aumento da vida útil mantendo a alta precisão mesmo após longo período de operação. ',
          'Baixo ruído': 'Abaixo de 65 dB.',
          'Alta eficiência': 'A eficiência do modelo de 1 estágio é superior a 97%, do modelo de 2 estágios é superior a 94% e do do modelo de 3 estágios é superior a 90%',
          'Reduções em 1 estágio': '3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18 e 20.',
          'Reduções em 2 estágios': '15, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 100, 120, 140, 160, 180 e 200',
        }
      },
      {
        name: 'Linha SD',
        description: 'Redutores planetários de alta precisão com maior capacidade de torque e sistema diferenciado de fixação na saída. Linha Premium.',
        imgPath: 'img/produtos/planetarios/linha-sd.webp',
        specifications: {
          'Folga Reduzida': 'Folga abaixo de 7 arco minuto. Sendo possível escolher especificações com até 1 arco minuto de folga.',
          'Alta velocidade de entrada': 'Permite velocidades de entrada de 5.000 RPM.',
          'Alto Torque': 'Maior torque de saída em comparação à redutores planetários que possuem engrenagens de dentes retos.',
          'Alta Estabilidade': 'Produzido com aço de alta resistência. A dureza está em toda a engrenagem ao invés de estar apenas na superfície, proporciona aumento da vida útil mantendo a alta precisão mesmo após longo período de operação. ',
          'Baixo ruído': 'Abaixo de 65 dB.',
          'Alta eficiência': 'A eficiência do modelo de 1 estágio é superior a 97%, do modelo de 2 estágios é superior a 94%.',
          'Reduções em 1 estágio': '4, 5, 7 e 10.',
          'Reduções em 2 estágios': '20, 25, 35, 40, 50, 70 e 100.',
        }
      },
      {
        name: 'Linha SDL',
        description: 'Redutores planetários de alta precisão com maior capacidade de torque e sistema diferenciado de fixação na saída. Linha Premium.',
        imgPath: 'img/produtos/planetarios/linha-sdl.webp',
        specifications: {
          'Reduções em 1 estágio': '4, 5, 7, 10, 14 e 20.',
          'Reduções em 2 estágios': '20, 25, 35, 40, 50, 70, 100. 140 e 200.',
          'Folga Reduzida': 'Folga abaixo de 7 arco minuto. Sendo possível escolher especificações com até 1 arco minuto de folga.',
          'Alta velocidade de entrada': 'Permite velocidades de entrada de 5.000 RPM.',
          'Alto Torque': 'Maior torque de saída em comparação à redutores planetários que possuem engrenagens de dentes retos.',
          'Alta Estabilidade': 'Produzido com aço de alta resistência. A dureza está em toda a engrenagem ao invés de estar apenas na superfície, proporciona aumento da vida útil mantendo a alta precisão mesmo após longo período de operação. ',
          'Baixo ruído': 'Abaixo de 65 dB.',
          'Alta eficiência': 'A eficiência do modelo de 1 estágio é superior a 97%, do modelo de 2 estágios é superior a 94%.',
        }
      },
      {
        name: 'Linha SF',
        description: 'Redutores planetários de alta precisão com maior capacidade de torque e com dois rolamentos cônicos na saída, aumentando muito a capacidade de absorção de esforços radiais e axiais. Linha Premium.',
        imgPath: 'img/produtos/planetarios/linha-sf.webp',
        specifications: {
          'Folga Reduzida': 'Folga abaixo de 7 arco minuto. Sendo possível escolher especificações com até 1 arco minuto de folga.',
          'Alta velocidade de entrada': 'Permite velocidades de entrada de 5.000 RPM.',
          'Alto Torque': 'Maior torque de saída em comparação à redutores planetários que possuem engrenagens de dentes retos.',
          'Alta Estabilidade': 'Produzido com aço de alta resistência. A dureza está em toda a engrenagem ao invés de estar apenas na superfície, proporciona aumento da vida útil mantendo a alta precisão mesmo após longo período de operação. ',
          'Baixo ruído': 'Abaixo de 65 dB.',
          'Alta eficiência': 'A eficiência do modelo de 1 estágio é superior a 97% e do modelo de 2 estágios é superior a 94%',
          'Reduções em 1 estágio': '3, 4, 5, 6, 7, 8, 9 e 10 ',
          'Reduções em 2 estágios': '15, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90 e 100.',
        }
      },
      {
        name: 'Linha SFL',
        description: 'Redutores planetários de alta precisão com maior capacidade de torque e com dois rolamentos cônicos na saída, aumentando muito a capacidade de absorção de esforços radiais e axiais. Linha Premium.',
        imgPath: 'img/produtos/planetarios/linha-sfl.webp',
        specifications: {
          'Folga Reduzida': 'Folga abaixo de 7 arco minuto. Sendo possível escolher especificações com até 1 arco minuto de folga.',
          'Alta velocidade de entrada': 'Permite velocidades de entrada de 5.000 RPM.',
          'Alto Torque': 'Maior torque de saída em comparação à redutores planetários que possuem engrenagens de dentes retos.',
          'Alta Estabilidade': 'Produzido com aço de alta resistência. A dureza está em toda a engrenagem ao invés de estar apenas na superfície, proporciona aumento da vida útil mantendo a alta precisão mesmo após longo período de operação. ',
          'Baixo ruído': 'Abaixo de 65 dB.',
          'Alta eficiência': 'A eficiência do modelo de 1 estágio é superior a 97% e do modelo de 2 estágios é superior a 94%',
          'Reduções em 1 estágio': '3, 4, 5, 6, 7, 8, 9 e 10 ',
          'Reduções em 2 estágios': '15, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90 e 100.',
        }
      },
    ],
  },
  {
    title: 'Automação',
    products: [
      {
        name: 'Linha CFW08',
        description: 'Destinado para o acionamento de motores trifásicos e monofásicos na faixa de potência de 0,25 a 20cv.',
        imgPath: 'img/produtos/automacao/linha-cwf08.png',
        specifications: {
          'Potência': '0,25 a 20cv',
          'Tensão': '200 a 240V, 380 a 480V e 500 a 600V',
          'Redes': 'Profibus DP (opcional), CANopen, DeviceNet e Modbus RTU (protocolo incorporado)',
          'Características': 'Controle V/F (escalar) ou vetorial sensorless\nAlto torque em baixas rotações\nGrau de proteção NEMA 1\nFunções de proteção / sobrecarga integradas\nFreqüências de ressonância podem ser evitadas a fim de minimizar o stress mecânico na máquina\nFreqüência de chaveamento variável a fim de minimizar o ruído acústico no motor\nTempos de aceleração e desaceleração independentemente parametrizáveis\nComunicação com microcomputador para utilização do software de programação e monitoração SUPERDRIVE\nFrenagem reostática e CC\nFiltros EMC (incorporado)\nRegulador PID\nIHM remota paralela e serial (opcionais)\nControle sistema Multibombas',
        }
      },
      {
        name: 'Linha CFW10',
        description: 'Destinado para o acionamento de motores trifásicos e monofásicos na faixa de potência de 0,25 a 5cv. Disponível nos modelos standart (sem potenciômetro) e plus (com potenciômetro.',
        imgPath: 'img/produtos/automacao/linha-cfw10.webp',
        specifications: {
          'Tensão de entrada': '100 a 135V e 200 a 240V',
          'Tensão de saída': '200 a 240V',
          'Métodos de variação de velocidade': 'potenciômetro incorporado no produto, potenciômetro através das entradas analógicas, potenciômetro via teclado e multi-speed',
          'Características': 'Alimentação monofásica / trifásica\nAlto torque de partida\nDesign compacto permitindo simples instalação e fácil manuseio\nModulação PWM senoidal - Space Vector Modulation\nMódulos IGBT de última geração e eletrônica com componentes SMD\nControle com DSP\nRegulador PID\nFiltro EMC incorporado (modelos alimentados em 220 V)\nVersão com dissipadores cold-plate',
        }
      },
      {
        name: 'Linha CFW300',
        description: 'Ideal para aplicação em máquinas ou equipamentos que necessitam de controle preciso e facilidade de operação, o CFW300 é um acionamento de velocidade variável de alta performance para motores de indução trifásicos.',
        imgPath: 'img/produtos/automacao/linha-cfw300.webp',
        specifications: {
          'Corrente nominal de saída': '1,6 a 15,2 A',
          'Tensão de alimentação': '110-127 V ou 200-240 V monofásica e 200-240 V trifásica',
          'Link CC': '280-340 V CC',
          'Principais características': '4 entradas digitais selecionáveis NPN/PNP (0-24 V CC)\n1 saída à relé (0,5 A-250 V CA)\n1 entrada analógica (0-10 V CC ou 0/4-20 mA)\nControle de motor vetorial (VVW) ou escalar (V/F) selecionável\nFunção SoftPLC\nInstalação simples, estilo contator\nInterface de operação (IHM) incorporada\nTemperatura ambiente de operação 0 °C a 50 °C\nMontagem lado a lado sem espaçamento entre inversores\nFixação em superfície ou trilho DIN ou parafusos\nIGBT de frenagem (tamanho B)\nGrau de proteção IP20\nControle do ventilador e sistema de troca rápida\nSoftware WPS gratuito - integrado programação, monitoramento e SoftPLC\nProteção classe 3C2 (padrão de fábrica)\nRoHS\nIHM remota.',
          'Acessórios': 'Possibilidade de utilização de dois acessórios plug-ins opcionais (um de expansão de funções e um de comunicação)\nExpansão de entradas e saídas (E/S)\nEncoder incremental\nInfravermelho (em desenvolvimento)\nPorta USB\nRedes de comunicação: RS232, RS485, CANopen, DeviceNet, Profibus-DP\nCartão de memória flash\nFiltro RFI externo tipo footprint categoria C2 ou C3, para redução do nível de emissão conduzida, de acordo com as normas IEC 61800-3 e EN 55011.',
        }
      },
      {
        name: 'Linha CFW500',
        description: 'Destinado para o acionamento de motores trifásicos e monofásicos na faixa de potência de 0,25 a 20cv.',
        imgPath: 'img/produtos/automacao/linha-cfw500.webp',
        specifications: {
          'Características': 'Corrente nominal de saída de 1 a 47 A (0,25 a 20cv)\nAlimentação monofásica ou trifásica\nFaixa de tensão de 200-480 V\nControle vetorial (VVW) ou Escalar (V/F)\nCartões plug-in para expansão de recursos\nFilosofia plug and play\nFunção SoftPLC incorporada\nInterface de operação e programação (IHM) incorporada\nPorta RS485 padrão (módulo plug-in)\nEntradas e saídas (digitais e analógicas)\nEntradas e saídas digitais em frequência\nInstalação lado a lado (para temperaturas abaixo de 40 ºC)\nTemperatura ambiente de operação 50 ºC\nMontagem em superfície ou trilho DIN\nIGBT de frenagem *\nConformal coating padrão de fábrica\nGrau de proteção IP20 (padrão) e NEMA1 (opcional)\nVentilador com sistema de troca rápida\nFiltro RFI interno (opcional)\nDiagnósticos de alarmes ou falhas\nOpcionais para comunicação em redes industriais:\nCANopen, DeviceNet, Profibus-DP e RS232\nComunicação USB (opcional)\nCartão de memória para transferência de dados\n(parâmetros e SoftPLC) entre CFW500 (opcional)\nSoftwares de programação gratuitos WLP e SuperDrive G2\nInterface de operação remota serial (opcional)',
        }
      },
      {
        name: 'Linha CFW700',
        description: 'Especialmente otimizado para as mais diversas aplicações, possui controle vetorial, robustez e vários acessórios já incorporados no produto padrão, aliados a qualidade dos inversores WEG sempre com ótimo custo benefício.\n\nNo CFW700 a instalação dos acessórios também é baseada na filosofia “conecte e use” ou seja, eles são configurados automaticamente quando conectados ao inversor, garantindo mais rapidez e simplicidade.',
        imgPath: 'img/produtos/automacao/linha-cfw700.webp',
        specifications: {
          'Tensão de alimentação - corrente nominal de saída': '220Vca Monofásica: 6 a 10A (1,5 a 3cv)\n220Vca Trifásica: 6 a 211A (1,5 a 75cv)\n380-480Vca Trifásica: 3,6 a 211A (2 a 175cv)\n\nEstrutura compacta, ideal para instalação em espaços reduzidos.\nAlta precisão e confiabilidade no controle de velocidade e de torque.\nRobustez de hardware.',
          'Indutores no barramento CC': 'Não necessita de reatância de rede\n\nInstalação em qualquer rede, sem restrição de impedância mínima\nAtende a norma IEC61000-3-12\n\nEntrada para encoder incremental isolada',
          'Gerenciamento Térmico Inteligente': 'Não necessita de reatância de rede\n\nMonitoração da temperatura do dissipador e do ar interno nos cartões eletrônicos\nMonitoração e indicação da velocidade e o número de horas de operação do ventilador\nVentilador é facilmente removível para limpeza\n\n8 entradas e 5 saídas digitais',
          'Funções': 'Start-up orientado: principais parâmetros agrupados numa sequência lógica, para simplificar e dar mais rapidez na colocação em funcionamento do inversor.\nMulti-speed: até 8 velocidades pré-programadas.\nFunção de auto-ajuste: modo vetorial ou VVW.\nRegulador PID: controle de variáveis de processos através da variação da velocidade do motor (via SoftPLC).\nPotenciômetro eletrônico: permite o ajuste da referência de velocidade via entradas digitais (via SoftPLC).\nFlying Start: permite acelerar o motor (em giro livre) a partir da rotação em que ele se encontra.\nRampa “S”: redução de choques mecânicos durante acelerações/desacelerações.\nFunção pular velocidade: evita que o motor opere permanentemente em valores de velocidade onde o sistema mecânico entra em ressonância, causando vibração ou ruídos exagerados.\nProteção de sobrecarga do motor: baseada em curvas que simulam o aquecimento e resfriamento do motor em casos de sobrecarga, conforme normas IEC 60947-4-2 e UL508C.\nAjuste da classe térmica do motor: seu correto ajuste torna mais real o tempo de atuação da proteção de sobrecarga.\nProteção de sobretemperatura do motor: proteção contra sobretemperatura, com sensor tipo PTC.\nProteção de sobrecarga no inversor: protege os IGBTs e os retificadores de entrada do inversor em caso de sobrecarga.\nRide-through: possibilita a recuperação do inversor, sem bloqueio por subtensão, quando ocorrer uma quebra na rede de alimentação.',
          'Opcionais': 'Comunicação em rede:\n\nDevicenet, CANopen, Profibus DP, RS-485 (modbus)\nIHM para montagem remota (não necessita de fonte externa)\nMódulo de memória FLASH\nMódulo de parada de segurançaA ativação da função de parada de segurança bloqueia os pulsos PWM de acionamento dos IGBTs, garantindo que o motor permanecerá parado.\n\nAtende a EN954-1, Categoria 3',
        }
      },
      {
        name: 'Linha SSW05',
        description: 'Soft-Starter WEG são chaves de partida estática, destinadas à aceleração, desaceleração e proteção de motores de indução trifásicos. O controle da tensão aplicada ao motor, mediante o ajuste do ângulo de disparo dos tiristores, permite obter partidas e paradas suaves.\n\nCom o ajuste adequado das variáveis, o torque produzido é ajustado à necessidade da carga, garantindo, desta forma, que a corrente solicitada seja a mínima necessária para a partida.',
        imgPath: 'img/produtos/automacao/linha-ssw05.webp',
        specifications: {
          'Aplicações': 'Bombas centrífugas, ventiladores de baixa inércia, compressores de ar, refrigeração (parafuso), com partida em alívio.',
          'Características': 'Correntes: 3 a 85A\nTensão: 220 a 575V\nBy-pass incorporado\nControle com DSP\nIHM remota (opcional)\nProteções do motor incorporadas\nOperação em ambientes de até 55°C\nComunicação serial RS-232 incorporada',
        }
      },
      {
        name: 'Linha SSW06',
        description: 'Chave de partida estática com controle de três fases do motor, by-pass incorporado e controle de torque.\n\nSoft-Starter WEG são chaves de partida estática, destinadas à aceleração, desaceleração e proteção de motores de indução trifásicos. O controle da tensão aplicada ao motor, mediante o ajuste do ângulo de disparo dos tiristores, permite obter partidas e paradas suaves.\n\nCom o ajuste adequado das variáveis, o torque produzido é ajustado à necessidade da carga, garantindo, desta forma, que a corrente solicitada seja a mínima necessária para a partida.',
        imgPath: 'img/produtos/automacao/linha-ssw06.webp',
        specifications: {
          'Aplicações': 'Bombas centrífugas, alternativas (saneamento, irrigação e petróleo), ventiladores, exaustores, sopradores, compressores de ar, refrigeração (parafuso e pistão), misturadores, aeradores, centrífugas, britadores, moedores, picadores de madeira, refinadores de papel, fornos rotativos, serras e plainas (madeira), moinhos (bolas e martelo) e transportadores de carga.',
          'Características': 'Correntes: 10 a 1400A (200-575V) e 45 a 1400A (575-690V)\nTensão: 220 a 575V ou 575 a 690V\nMétodos de partida e parada programáveis: rampa de tensão, limite de corrente, rampa de corrente, controle de bombas e controle de torque\nBy-pass incorporado nos modelos até 820A\nIHM destacável com duplo display (LED/LCD)\nFunção "Kick-Start" para partidas com elevado atrito estático\nFunção "Pump Control" para controle inteligente de sistemas de bombeamento\nProteções do motor e da soft-starter incorporadas\nOperação em ambientes de até 55 °C sem derating para os modelos 10 a 820A e até 40 °C sem derating para os modelos 950 a 1400A\nRedes: Profibus DP, DeviceNet, EtherNet/IP e Modbus/TCP (opcionais)\nComunicação Modbus RTU em RS232 incorporada e RS485 ou USB (opcionais)\nEntrada para PTC do motor\nPermite ligação dentro do delta do motor (6 cabos somente para os modelos 220-575V) ou standard (3 cabos)\nDiagnósticos de falhas e de funcionamento\nSoftPLC para desenvolvimento de pequenas aplicações',
        }
      },
      {
        name: 'Linha SSW07',
        description: 'Soft-Starter WEG são chaves de partida estática, destinadas à aceleração, desaceleração e proteção de motores de indução trifásicos. O controle da tensão aplicada ao motor, mediante o ajuste do ângulo de disparo dos tiristores, permite obter partidas e paradas suaves. Com o ajuste adequado das variáveis, o torque produzido é ajustado à necessidade da carga, garantindo, desta forma, que a corrente solicitada seja a mínima necessária para a partida.',
        imgPath: 'img/produtos/automacao/linha-ssw07.webp',
        specifications: {
          'Aplicações': 'Bombas centrífugas, alternativas (saneamento, irrigação e petróleo), ventiladores, exaustores, sopradores, compressores de ar, refrigeração (parafuso e pistão), misturadores, aeradores, centrífugas, britadores, moedores, picadores de madeira, refinadores de papel, fornos rotativos, serras e plainas (madeira), moinhos (bolas e martelo) e transportadores de carga.',
          'Características': 'Correntes: 17 a 412A\nTensão: 220 a 575V\nBy-pass incorporado\nElevado regime de partidas\nControle total nas três fases\nProteção do motor e da chave incorporada\nFunção "Kick-Start" para partidas com elevado atrito estático\nIHM local ou remota (opcional)\nEntrada para PTC do motor (opcional)\nOperação em ambientes de até 55 °C\nPesos e dimensões extremamente reduzidas\nComunicação: Profibus DP, DeviceNet, RS232 e RS485 (opcional)',
        }
      },
    ],
  },
  {
    title: 'Variador',
    products: [
      {
        name: 'Linha UDL',
        description: 'Variador de velocidade mecânico possibilita a variação da velocidade de rotação de saída através de um controle manual. São facilmente acoplados na entrada à motores elétricos padrão e na saída podem ser diretamente utilizados em máquinas ou acoplados a entrada de redutores, conforme a necessidade de aplicação desejada.',
        imgPath: 'img/produtos/variadores/linha-udl.webp',
        specifications: {
          'Reduções': '1:1.6 - 1:8.2',
          'Potências': '0.25cv - 4.00cv',
          'Torques de Saídas': '1.24 - 29.63 N.m',
          'Acessórios': 'Flanges de saída\nPés fixação',
        }
      }
    ],
  },
  {
    title: 'Acoplamento',
    products: [
      {
        name: 'Linha AL',
        description: 'Conjunto mecânico, constituído de elementos de máquina, empregado na transmissão de rotação entre duas árvores ou eixos-árvore. Os princípios de rotação são transmitidos pelos acoplamentos segundo os princípios de atrito e de forma.',
        imgPath: 'img/produtos/acoplamentos/linha-al.png',
        specifications: {
          'Tamanho': '50 - 194',
          'Diâmetro': 'ø33 - ø240',
          'Torque Nominal': '41 - 3.600 N.m',
        }
      },
      {
        name: 'Linha ASN',
        description: 'Conjunto mecânico, constituído de elementos de máquina, empregado na transmissão de rotação entre duas árvores ou eixos-árvore. Os princípios de rotação são transmitidos pelos acoplamentos segundo os princípios de atrito e de forma.',
        imgPath: 'img/produtos/acoplamentos/linha-asn.webp',
        specifications: {
          'Tamanho': '50 - 300',
          'Diâmetro': 'ø42 - ø243',
          'Torque Máximo': '61 - 17.550 N.m',
        }
      }
    ],
  },
  {
    title: 'Transmissão Angular',
    products: [
      {
        name: 'Linha DZ',
        description: 'Feitas em carcaça de alumínio, possuem engrenagens cônicas com dentes helicoidais, temperadas e retificadas, proporcionando a máxima eficiência e menores ruídos e aquecimento.',
        imgPath: 'img/produtos/transmissor-angular/linha-dz.webp',
        specifications: {
          'Tamanho': '1 - 5',
          'Reduções': '1:1 - 1:2',
          'Eixos': 'AB, AC e ABC',
          'Potências': '0.08cv - 18.30cv',
          'Rotações': '50 rpm - 3.600 rpm',
          'Opcionais': 'Carcaça e eixo em inox no tamanho 2',
        }
      }
    ],
  },
]