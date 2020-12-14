<template>
  <v-container
    class="hello grey lighten-5">
    <v-row>
      <v-col>
        <h1>{{ title }}</h1>
        <p>
          The amazing Corsa Power-Builder.
        </p>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col
        :align="left"
        cols="12"
      >
        <v-card>
          Hehe
        </v-card>
      </v-col>
      <v-col
        :align="right"
        cols="2"
        v-for="upgrade in upgrades" :key="upgrade[0]"
      >
        <v-row>
          <UpgradeButton
            :upgradeId="upgrade[0]"
          />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import UpgradeButton from './UpgradeButton.vue'
import { game, Upgrade } from '@/game/Game.ts'

@Component({
  components: {
    UpgradeButton
  }
})
export default class Joguinho extends Vue {
  @Prop() private title!: string;

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
