<template >
  <div class="booya">
		<h1 v-once v-html="subHeading" />
		<button v-html="iconYes" />
		<button v-html="iconNo" />
		
</div>
</template>

<script>
export default {
  name: 'Booya!',
 	data () {
    return {
			subHeading: 'Booya',
			iconYes: "&hearts;",
			iconNo: "&quest;"
    }
  },
	methods: {

	}
}
</script>

<style lang="scss" scoped>

</style>
