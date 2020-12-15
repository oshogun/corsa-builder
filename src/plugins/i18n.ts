import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export const messages = {
  'pt-BR': {
    meta: 'pt-BR',
    countryCode: 'br',
    countryName: 'Brasil',

    title: 'Capotador de Corsa',
    description: 'O mais incrível capotador de corsa do mundo. Já nas bancas!',

    currency: 'BRL',

    adespalm: {
      name: 'Adesivo do Palmeiras',
      description: 'Esse corsa SONHO',
      imgSrc: require('@/assets/verdao.png')
    },

    adesfla: {
      name: 'Adesivo do Flamengo',
      description: 'O MENGÃO VOLTOU',
      imgSrc: require('@/assets/mengao.png')
    },

    custombuza: {
      name: 'Buzina personalizada',
      description: 'Toca 3 musiquinha diferente',
      imgSrc: require('@/assets/buzina.png')
    },

    sonzao: {
      name: 'Sistema de audio',
      description: '5 subwoofer pra dar grave e bater certo',
      imgSrc: require('@/assets/audio.png')
    },

    bodykit: {
      name: 'Body Kit Rebaixadão',
      description: 'Chega a raspar no asfalto',
      imgSrc: require('@/assets/body.png')
    },

    rodas: {
      name: 'Rodas customizadas',
      description: 'Botar uns rodão Enkei PF01 Black 5x114,3 17x9 ET35 no corsinha',
      imgSrc: require('@/assets/roda.png')
    },

    motortunado1: {
      name: 'Melhorias no motor (estagio 1)',
      description: 'Continua sendo o motor 1.6 do corsinha, mas dando aquela regulada nice',
      imgSrc: require('@/assets/motor.png')
    },

    turbina1: {
      name: 'Turbina (estagio 1)',
      description: 'Single turbo basicão pra dar aquele TSCHHH quando passa as marcha. Potente, mas tem mais lag que internet discada',
      imgSrc: require('@/assets/turbina1.png')
    },

    turbina2: {
      name: 'Turbina (estagio 2)',
      description: 'Corsa twin-turbo. Agora o bagulho ficou sério.',
      imgSrc: require('@/assets/turbina2.png')
    }
  },
  'en-US': {
    meta: 'en-US',
    countryCode: 'us',
    countryName: 'USA',

    title: 'Corsa-Capoteur',
    description: 'The amazing Corsa Power-Builder.',

    currency: 'USD',

    adespalm: {
      name: 'Super neon decal',
      description: 'The best neon decal you always wished for ;)',
      imgSrc: require('@/assets/verdao.png')
    }
  }
}

const i18n = new VueI18n({
  locale: 'pt-BR',
  fallbackLocale: 'pt-BR',
  messages
})

function translate (key: string) {
  if (!key) {
    return 'dummy'
  }
  return i18n.t(key)
}

// =============================================================================
// Here we deal with money, baby
// -----------------------------------------------------------------------------

const exchangeCache: Map<string, number> = new Map([])
const corsaToBRL = 1

async function exchange (units: number, from: string, to: string) {
  const request = await fetch(`https://api.exchangeratesapi.io/latest?base=${from}&symbols=${to}`)

  const rates = await request.json()

  return rates.rates[to]
}

/**
 * Converts 1 Corsa money unit to any currency
 */
async function corsaRatio (currency: string) {
  if (exchangeCache.has(currency)) {
    return exchangeCache.get(currency) as number
  }

  const oneCoinConverted = await exchange(corsaToBRL, 'BRL', currency)
  exchangeCache.set(currency, oneCoinConverted)
  return oneCoinConverted
}

for (const lang in messages) {
  const currency: string = messages[lang as keyof typeof messages].currency
  corsaRatio(currency)
    .then(res => console.log(`Pre-Loaded corsa value: ${res} (${currency})`))
    .catch(err => console.error(`Error loading corsa value: ${err}`))
}

async function currency (price: number): Promise<string> {
  const currency = translate('currency') as string

  const oneCoinConverted: number = await corsaRatio(currency)

  const convertedPrice: number = price * oneCoinConverted

  return new Intl.NumberFormat(i18n.locale,
    { style: 'currency', currency: currency }
  ).format(convertedPrice)
}

export {
  i18n,
  translate,
  currency
}
