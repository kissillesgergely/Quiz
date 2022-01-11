<template>
  <div class="home">
    <label>Correct asnwers: {{ $store.state.correct }}</label>
    <br />
    <label>Wrong asnwers: {{ $store.state.wrong }}</label>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class Stats extends Vue {}
</script>
