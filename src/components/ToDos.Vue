<template>
  <div id="to-dos">
		<h1 v-once v-html="subHeading"></h1>



	 </div>
</template>

<script>
export default {
  name: 'ToDos',
 	data () {
    return {
			subHeading: 'Hi There'
    }
  },
	methods: {
	}
}
</script>

<style lang="scss" scoped>

</style>
