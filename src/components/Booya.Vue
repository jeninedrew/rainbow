<template >
  <div class="booya">
		<h1 class="category" v-text="category" />
		<main>
			<p v-text="Q" />
		</main>
		<div class="options">
			<button v-html="iconYes" />
			<button v-html="iconNo" />
		</div>
		<button v-text="quit" />
	</div>
</template>

<script>
export default {
  name: "Booya!",
  data() {
    return {
      category: "JS",
      Q: "Here's a super hard quesrion for you!",
      iconYes: "&hearts;",
      iconNo: "&quest;",
      quit: "Quit"
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
// Variables
$green: #6aba50;
$dark-green: #45882f;
$purple: #934196;
$dark-purple: #702c74;
$grey: #e0e0e0;

$padding: 0.8rem;

$transition-duration: 0.5s;

// Component styls
.booya {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.category {
  background-color: $green;
  margin: 0;
}
main {
  flex: 1;
}
.options {
  display: flex;
  button {
    flex-grow: 1;
  }
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
</style>
