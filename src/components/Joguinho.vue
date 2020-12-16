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
      <v-col
        md="6"
        align-self="start"
      >
        <v-card>
          Hehe
        </v-card>
      </v-col>
      <v-col
        md="6"
        align-self="end"
      >
        <UpgradeButton
          v-for="upgrade in upgrades" :key="upgrade[0]"
          :upgradeId="upgrade[0]"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { game, Upgrade } from '@/game/Game.ts'
import UpgradeButton from './UpgradeButton.vue'

@Component({
  components: {
    UpgradeButton
  }
})
export default class Joguinho extends Vue {
  private upgrades: Map<string, Upgrade> = game.upgrades;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
