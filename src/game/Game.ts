export class Upgrade {
  price: number;

  constructor (
    price: number
  ) {
    this.price = price
  }
}

export class Corsa {
  name = '';
  power = 1.0;
}

export const upgradeData: Map<string, Upgrade> = new Map([
  ['adespalm', {
    price: 0.5
  }],
  ['adesfla', {
    price: 0.3
  }],
  [
    'custombuza', {
      price: 40
    }
  ],
  [
    'sonzao', {
      price: 1000
    }
  ],
  [
    'bodykit', {
      price: 5000
    }
  ],
  [
    'rodas', {
      price: 13500
    }
  ],
  [
    'motortunado1', {
      price: 20000
    }
  ],
  [
    'turbina1', {
      price: 32000
    }
  ],
  [
    'turbina2', {
      price: 75000
    }
  ]
])

export class Game {
  money = 10;
  corsa: Corsa = new Corsa();
  language = 'pt-BR';
  upgrades = upgradeData;
}

export const game = new Game()
