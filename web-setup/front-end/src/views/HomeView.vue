<template>
  <div class="home">
    
    <CovidMap />
  </div>
</template>

<script>
import CovidMap from '../components/Map.vue';
export default {
  name: 'HomeView',
  components: {
    CovidMap,
  }
}
</script>

<style>

</style>
