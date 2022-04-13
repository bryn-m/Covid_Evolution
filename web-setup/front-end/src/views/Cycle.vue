<template>
  <div class="Cycler">
    <br>
    <p>File formats are year-week<br>First map is 2020-40</p>
    <div style="display: inline;">
    <input type="text" v-model='userInput'/>
    <button class="btn" @click="update">Load</button>
    </div>
    <br>
    <img :src="'png_files/'+location+'.png'" alt="Image not found" style="width: 60%;"/>

  </div>
</template>

<script>
export default {
  name: "MapCycler",
  data() {
    return {
      userInput: "",
      location: "2020-40",
    }
  },
  methods: {
    update() {
      this.location = this.userInput;
    }
  },
}
</script>

<style>
img {
  margin-top: 4px;
}
.btn {
  margin-left: 4px;
}
input {
  height: 36px;
}
</style>
