<template>
    <img :src="flagUrl" width="32" height="32"/>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
// import * as I18n from '@/game/i18n.ts'

@Component
export default class Flag extends Vue {
  @Prop() private country!: string;

  get flagUrl (): string {
    return `https://www.countryflags.io/${this.country}/flat/64.png`
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.upgrade-box {
  display: block;
  background: lightgray;
  border: solid 1px black;
  border-radius: 1em;
  padding: 1em;
}

.upgrade-box:hover {
  cursor: pointer;
  background: #ddd;
}
</style>
