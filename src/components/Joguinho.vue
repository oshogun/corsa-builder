<template>
  <v-container
    class="hello grey lighten-5">
    <v-row>
      <v-col>
        <h1>{{ $t('title') }}</h1>
        <p>
          {{ $t('description') }}
        </p>
      </v-col>
    </v-row>
    <v-row
      align="center"
    >
      <v-col>
        <v-card>
          <v-container>
            <v-row>
              <v-col>
                {{ $t('money') }}: {{ currentMoney }}
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <button
                  class="btn btn-primary"
                  @click="flip"
                  @mouseup="unflip"
                >
                  {{ $t('cmd-capoteur') }}
                </button>
              </v-col>
              <v-col>
                <v-container fill-height fluid>
                  <v-row
                    align="center"
                    justify="center"
                  >
                    <v-col>
                      <img :src="$t('img-corsa-url')" :style="corsaStyle"/>
                    </v-col>
                  </v-row>
                </v-container>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col>
        <UpgradeButton
          v-for="upgrade in game.upgrades" :key="upgrade[0]"
          :upgradeId="upgrade[0]"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import UpgradeButton from './UpgradeButton.vue'

import { currency as localCurrency } from '@/plugins/i18n.ts'
import { game, Game } from '@/game/Game.ts'

@Component({
  components: {
    UpgradeButton
  }
})
export default class Joguinho extends Vue {
  private game: Game = game;
  private lcurrentMoney = '???';
  private corsaStyle = ''

  flip () {
    this.corsaStyle = 'transform: scaleY(-1)'
    this.game.money += 1
    setTimeout(this.unflip, 100)
  }

  unflip () {
    this.corsaStyle = ''
  }

  get currentMoney () {
    localCurrency(game.money)
      .then(res => {
        this.lcurrentMoney = res
      })
    return this.lcurrentMoney
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
