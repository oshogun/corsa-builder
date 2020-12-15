<template>
  <v-container>
    <v-row>
      <img :src="imgSrc" width="32" height="32"/>
      <p>
        <b>{{ upgrade.name }}</b>
        (Preço: {{ localPrice(upgrade.price) }})
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

  localPrice (price: number): string {
    return new Intl.NumberFormat('pt-BR',
      { style: 'currency', currency: 'BRL' }
    ).format(price)
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
