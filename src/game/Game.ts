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
      price: 0.5
    }],
    ['adesfla', {
      name: 'Gente? Adesivo do Flamengo',
      description: 'FLAMENGOOO',
      price: 0.3
    }]
  ]);

  corsa: Corsa = new Corsa();
}

export const game = new Game()
