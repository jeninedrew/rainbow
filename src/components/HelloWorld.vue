<template>
  <div class="hello">
		<div class="ribbon-top" />
		<h1 class="welcome-message" v-once v-html="message" />
    <button class="button button--light button--status" v-text="practice" @click="addPractice" />
		<h2>&para;</h2>
		<h2>&GreaterGreater;</h2>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
			message: 'Start Where You Are <br>Use What You Have <br>Do What You Can <br>&hearts;',
			// Make this a status? Like last 7 days?? And random Cowabunga! Yippee! Radical! (if this button (which will be a color) is clicked, you see how many days you have practiced)...make this an svg sun icon or somethig and change the color to reflect ativity
			practice: 0,
    }
	},
	methods: {
		addPractice() {
			this.practice++;
		}
	}
}
</script>

<style lang="scss" scoped>

.button--status {
	width: 25em;
	max-width: 90%;
	&:hover,
	&:focus,
	&:active {
		background-color: #fff;;
	}
}

</style>
