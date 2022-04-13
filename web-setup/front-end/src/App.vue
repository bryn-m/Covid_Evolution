<template>
  <div id="app">
    <div class="other">
      <nav class="navbar nav navbar-nav navbar-expand navbar-light" style="background-color: #e3f2fd;">
        <a class="navbar-brand" href="/"><strong>Tracking Covid Variant Evolution</strong></a>
        <a class="nav-item nav-link" href="/">Home</a>
        <a class="nav-item nav-link" href="/cycle">Maps</a>
        <a class="nav-item nav-link" href="/about">About</a>

      </nav>
      <router-view/>
    </div>
  </div>
</template>

<style>
#app {
  font-family: sans-serif;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav-item, .navbar-brand {
  margin-right: 8px;
}

.navbar-brand {
  margin-left: 12px;
}

</style>
