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
  name: 'Booya!',
 	data () {
    return {
			category: 'JS',
			Q: 'Here\'s a super hard quesrion for you!',
			iconYes: '&hearts;',
			iconNo: '&quest;',
			quit: 'Quit'
    }
  },
	methods: {

	}
}
</script>

<style lang="scss" scoped>

// Variables
$green:        #6aba50;
$dark-green:   #45882f;

$padding: .8rem;

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
</style>
