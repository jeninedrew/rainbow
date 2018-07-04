<template>
  <div id="app">
		<router-view/>


	</div>
</template>

<script>
const apiReview =
  "https://api.github.com/gists/8b763fb22c7eec90246e0e20391d690b";
const apiRead = "https://api.github.com/gists/24df004960357c43dc60ec3ee3adfcba";
const apiWatch =
  "https://api.github.com/gists/e7c07ec272d92bc65f54236030ea2435";

export default {
  name: "app",
  methods: {
    addPractice() {
      this.practice++;
    }
  }
};
</script>

<style lang="scss">
// Variables
$red: #db3841;
$dark-red: #af1821;
$orange: #f08131;
$dark-orange: #db6510;
$yellow: #fab73f;
$dark-yellow: #efa218;
$green: #6aba50;
$dark-green: #45882f;
$blue: #27a1d9;
$dark-blue: #1b759f;
$purple: #934196;
$dark-purple: #702c74;
$grey: #e0e0e0;

$padding: 0.8rem;

$transition-duration: 0.5s;

// Base styles
body {
  margin: 0;
  color: #2c3e50;
}
h1,
h2 {
  font-weight: normal;
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
  color: $purple;
}
button {
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0;
  outline: none;
  border: none;
  padding: $padding;
  font-size: 1rem;
  &:hover,
  &:focus,
  &:active {
    transition-duration: $transition-duration;
  }
}
.button--stretch {
  margin-bottom: 1rem;
  width: 90%;
}
.button--dark {
  background-color: $purple;
  color: #fff;
  &:hover,
  &:focus,
  &:active {
    background-color: $dark-purple;
  }
}
.button--light {
  background-color: none;
  border: 0.01rem solid #000;
  &:hover,
  &:focus,
  &:active {
    background-color: $grey;
  }
}

// Template styles
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  text-align: center;
}
</style>
