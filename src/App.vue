<template>
  <div id="app" class="app app--dark">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link>
      <router-link to="/blog">Articles</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<style>
html, body {
 margin: 0px;
 height: 100%;
 width: 100%;
}

.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.app--dark {
  background-color: #000;
  color: #fff;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  margin: 8px 16px;
}

#nav a.router-link-exact-active {
  color: #8facd8;
}
</style>
