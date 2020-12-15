<template>
  <div id="app">
    <div class="btn-group btn-group-toggle" data-toggle="buttons">
      <label
        :class="'btn btn-secondary ' + (currentLocale() === entry.meta ? 'active' : '')"
        v-for="entry in strings"
        :key="entry.meta"
      >
        <input
          type="radio"
          class="btn-country"
          name="options"
          :id="'locale-' + entry.countryCode"
          @click="setLocale(entry.meta)"
          autocomplete="off"
          :checked="currentLocale() === entry.meta"
        >
        <Flag :country="entry.countryCode" /> {{entry.countryName}}
      </label>
    </div>
    <div id="app">
      <Joguinho title="Corsa-Capoteur"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import Joguinho from './components/Joguinho.vue'
import Flag from './components/Flag.vue'
import { i18n, messages } from '@/plugins/i18n.ts'

@Component({
  components: {
    Joguinho,
    Flag
  }
})
export default class App extends Vue {
  get strings () {
    return messages
  }

  setLocale (locale: string) {
    i18n.locale = locale
  }

  currentLocale (): string {
    return i18n.locale
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.btn-country {
  width: 4em;
}
</style>
