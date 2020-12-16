<template>
  <button
    class="btn btn-dark"
  >
    <v-container>
      <v-row>
        <v-col>
          <img :src="$t(upgradeId).imgSrc"/>
        </v-col>
        <v-col
          align="left"
          cols="8"
        >
          <p>
            <b>{{ $t(upgradeId).name }}</b>
            ({{ currency }})
          </p>
          <p>
            {{ $t(upgradeId).description }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </button>
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
button {
  margin: 0 0 1em;
}

img {
  border-radius: 50%;
  border: solid 2px lightgray;
  width: 100%;
}
</style>
