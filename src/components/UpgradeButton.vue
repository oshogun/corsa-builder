<template>
  <v-container>
    <v-row>
      <img :src="imgSrc" width="32" height="32"/>
      <p>
        <b>{{ name }}</b>
        ({{ localPrice }})
      </p>
      <p>
        {{ description }}
      </p>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class UpgradeButton extends Vue {
  @Prop() private name!: string;
  @Prop() private imgSrc!: string;
  @Prop() private description!: string;
  @Prop() private price!: number;

  get localPrice (): string {
    return new Intl.NumberFormat('pt-BR',
      { style: 'currency', currency: 'BRL' }
    ).format(this.price)
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
