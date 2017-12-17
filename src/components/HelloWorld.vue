<template>
  <div class="hello">
		<nav class="nav nav--primary">
			<router-link to="/booya">Booya</router-link>
			<router-link to="/yup">Yup</router-link>
			<router-link to="/um">Um</router-link>
			<router-link to="/eek">Eek</router-link>
			<router-link to="/been-done">Been Done</router-link>
		</nav>

		<main>
			<h1 class="welcome-message" v-once v-html="message" />
			<button class="button button--light button--status" v-text="practice" @click="addPractice" />
			<h2>&para;</h2>
			<h2>&GreaterGreater;</h2>
		</main>

		<router-link :to="{ name: 'HelloWorld' }">
			<button class="button button--stretch button--dark">Chalk It!</button>
		</router-link>
		<button class="button button--stretch button--light button--add">ADD Q's</button>
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

// Variables
$red:          #db3841;
$dark-red:     #af1821;
$orange:       #f08131;
$dark-orange:  #db6510;
$yellow:       #fab73f;
$dark-yellow:  #efa218;
$green:        #6aba50;
$dark-green:   #45882f;
$blue:         #27a1d9;
$dark-blue:    #1b759f;
$purple:       #934196;
$dark-purple:  #702c74;
$grey:         #e0e0e0;
$padding: .8rem;
$transition-duration: 0.5s;

.hello {
	display: flex;
  min-height: 100vh;
  flex-direction: column;
}
main {
	flex: 1;
}

.nav--primary  {
	 display: flex;
	a {
		flex: 1;
		color: #000;
		font-weight: 600;
		text-decoration: none;
		text-transform: uppercase;
		display: flex;
		justify-content: center;
		padding: $padding;
		&:hover,
		&:focus,
		&:active {
			transition-duration: $transition-duration;
		}
		&:nth-of-type(1) {
			background-color: $green;
			&:hover,
			&:focus,
			&:active {
				background-color: $dark-green;
			}
		}
		&:nth-of-type(2) {
			background-color: $yellow;
			&:hover,
			&:focus,
			&:active {
				background-color: $dark-yellow;
			}
		}
		&:nth-of-type(3) {
			background-color: $orange;
			&:hover,
			&:focus,
			&:active {
				background-color: $dark-orange;
			}
		}
		&:nth-of-type(4) {
			background-color: $red;
			&:hover,
			&:focus,
			&:active {
				background-color: $dark-red;
			}
		}
		&:nth-of-type(5) {
			background-color: $blue;
			&:hover,
			&:focus,
			&:active {
				background-color: $dark-blue;
			}
		}
	}
}

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
