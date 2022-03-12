<template>
  <div class="mt-8 text-gray-300">
    <div v-if="appVersion === 'General'">
      Questions provided by:
      <br />
      <a>https://opentdb.com/</a>
      <br />
      <!-- license -->
      <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
        <img alt="Creative Commons License" src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png" style="display: unset"/>      
      </a>
      <br />
      This work is licensed under a
      <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
        Creative Commons Attribution-ShareAlike 4.0 International License.
      </a>
      <br />
    </div>
    <div v-if="appVersion !== 'General'">
      Questions provided by <a href="https://www.linkedin.com/in/anna-phanjakidze-402110196/">Anna Phanjakidze</a>
    </div>
    <a href="https://www.flaticon.com/free-icons/quiz" title="quiz icons">Quiz icons created by Freepik - Flaticon</a>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";

@Options({
  data() {
    return {
      appVersion: process.env.VUE_APP_VERSION,
    }
  }
}) export default class Acknowledgement extends Vue {}
</script>
