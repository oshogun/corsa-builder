import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export const messages = {
  'pt-BR': {
    meta: 'pt-BR',
    countryCode: 'br',
    countryName: 'Brasil',
    title: 'Capotador de Corsa',
    description: 'O mais incrível capotador de corsa do mundo. Já nas bancas!'
  },
  'en-US': {
    meta: 'en-US',
    countryCode: 'us',
    countryName: 'USA',
    title: 'Corsa-Capoteur',
    description: 'The amazing Corsa Power-Builder.'
  }
}

const i18n = new VueI18n({
  locale: 'en-US',
  fallbackLocale: 'pt-BR',
  messages
})

function translate (key: string) {
  if (!key) {
    return 'dummy'
  }
  return i18n.t(key)
}

function currency (price: number): string {
  return new Intl.NumberFormat(i18n.locale,
    { style: 'currency', currency: 'BRL' }
  ).format(price)
}

export {
  i18n,
  translate,
  currency
}
