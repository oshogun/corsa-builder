export class Upgrade {
  name: string;
  description: string;
  price: number;
  imgSrc?: string;

  constructor (
    name: string,
    description: string,
    price: number,
    imgSrc?: string
  ) {
    this.name = name
    this.description = description
    this.price = price
    this.imgSrc = imgSrc
  }
}

export class Corsa {
  name = '';
  power = 1.0;
}

export class Game {
  upgrades: Map<string, Upgrade> = new Map([
    ['adespalm', {
      name: 'Adesivo do Palmeiras',
      description: 'Esse corsa SONHO',
      price: 0.5,
      imgSrc: require('@/assets/verdao.png')
    }],
    ['adesfla', {
      name: 'Adesivo do Flamengo',
      description: 'O MENGÃO VOLTOU',
      price: 0.3,
      imgSrc: require('@/assets/mengao.png')
    }],
    [
      'custombuza', {
        name: 'Buzina personalizada',
        description: 'Toca 3 musiquinha diferente',
        price: 40,
        imgSrc: require('@/assets/buzina.png')
      }
    ],
    [
      'sonzao', {
        name: 'Sistema de audio',
        description: '5 subwoofer pra dar grave e bater certo',
        price: 1000,
        imgSrc: require('@/assets/audio.png')
      }
    ],
    [
      'bodykit', {
        name: 'Body Kit Rebaixadão',
        description: 'Chega a raspar no asfalto',
        price: 5000,
        imgSrc: require('@/assets/body.png')
      }
    ],
    [
      'rodas', {
        name: 'Rodas customizadas',
        description: 'Botar uns rodão Enkei PF01 Black 5x114,3 17x9 ET35 no corsinha',
        price: 13500,
        imgSrc: require('@/assets/roda.png')
      }
    ],
    [
      'motortunado1', {
        name: 'Melhorias no motor (estagio 1)',
        description: 'Continua sendo o motor 1.6 do corsinha, mas dando aquela regulada nice',
        price: 20000,
        imgSrc: require('@/assets/motor.png')
      }
    ],
    [
      'turbina1', {
        name: 'Turbina (estagio 1)',
        description: 'Single turbo basicão pra dar aquele TSCHHH quando passa as marcha. Potente, mas tem mais lag que internet discada',
        price: 32000,
        imgSrc: require('@/assets/turbina1.png')
      }
    ],
    [
      'turbina 2', {
        name: 'Turbina (estagio 2)',
        description: 'Corsa twin-turbo. Agora o bagulho ficou sério.',
        price: 75000,
        imgSrc: require('@/assets/turbina2.png')
      }
    ]
  ]);

  corsa: Corsa = new Corsa();
  language = 'pt-BR';
}

export const game = new Game()
