<template>
  <v-container
    class="hello grey lighten-5">
    <v-row>
      <h1>{{ title }}</h1>
      <p>
        The amazing Corsa Power-Builder.
      </p>
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
        cols="12"
        v-for="upgrade in upgrades" :key="upgrade.id"
      >
        <v-row>
          <p>{{ upgrade.name }}</p>
        </v-row>
      </v-col>
    </v-row>
  </v-container>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
  @Prop() private title!: string;

  private upgrades: Array<object> = [
    {
      id: 1,
      name: 'Adesivo do Palmeiras'
    },
    {
      id: 2,
      name: 'Adesivo do Flamengo'
    }
  ]
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
