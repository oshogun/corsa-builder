<template>
  <v-container>
    <v-row>
      <img :src="upgrade.imgSrc" width="32" height="32"/>
      <p>
        <b>{{ upgrade.name }}</b>
        (Preço: {{ currency(upgrade.price) }})
      </p>
      <p>
        {{ upgrade.description }}
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
  @Prop() private upgradeId!: string;

  get upgrade (): Upgrade {
    const up = (
      game.upgrades.get(this.upgradeId) ||
      { name: 'dummy', description: 'dummy', price: 0 }
    )
    return up
  }

  currency (price: number) {
    return localCurrency(price)
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
