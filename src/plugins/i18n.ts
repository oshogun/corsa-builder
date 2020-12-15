import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export const messages: {[lang: string]: {[key: string]: string}} = {
  'pt-BR': {
    meta: 'pt-BR',
    countryCode: 'br',
    countryName: 'Brasil',

    title: 'Capotador de Corsa',
    description: 'O mais incrível capotador de corsa do mundo. Já nas bancas!',

    currency: 'BRL'
  },
  'en-US': {
    meta: 'en-US',
    countryCode: 'us',
    countryName: 'USA',

    title: 'Corsa-Capoteur',
    description: 'The amazing Corsa Power-Builder.',

    currency: 'USD'
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
  const currency: string = messages[lang].currency
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
