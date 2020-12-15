<template>
  <v-container>
    <v-row>
      <img :src="$t(upgradeId).imgSrc" width="32" height="32"/>
      <p>
        <b>{{ $t(upgradeId).name }}</b>
        (Preço: {{ currency }})
      </p>
      <p>
        {{ $t(upgradeId).description }}
      </p>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import { game, Upgrade } from '@/game/Game.ts'
import { currency as localCurrency } from '@/plugins/i18n.ts'

@Component
export default class UpgradeButton extends Vue {
  @Prop({ required: true }) private readonly upgradeId!: string;
  private curr = 'loading...';

  get upgrade (): Upgrade {
    return game.upgrades.get(this.upgradeId) as Upgrade
  }

  get currency () {
    localCurrency(this.upgrade.price)
      .then(res => {
        this.curr = res
      })
    return this.curr
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
