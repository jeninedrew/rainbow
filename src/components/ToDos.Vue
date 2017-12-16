<template>
  <div id="to-dos">
		<h1 v-once v-html="subHeading"></h1>

 
<div>

		&hearts;

		&quest;
<!--
		<br>
		&rArr;

		&rAarr; 

		&xrarr; 

		&xrArr; 


		&Yscr;

		&Nscr;

		&Nopf;
-->
	</div>

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
		fetchData() {
        console.log(data);
		}
	}
}
</script>

<style lang="scss" scoped>

</style>
