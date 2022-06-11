<template>
  <div class="container">
    <p>{{ $store.state.moduleA.userName }}</p>
    <p>{{ $store.state.moduleB.userName }}</p>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {}
</script>

<style>
</style>