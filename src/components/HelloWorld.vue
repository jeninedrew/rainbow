<template>
  <div class="hello">
		<nav />

		<main>
			<div class="ribbon-top"></div>
			<h1 class="welcome-message" v-once v-html="message" />
			<p class="status" v-text="practice" @click="addPractice" />
			<button class="button--light">&para;</button>
			<p>&GreaterGreater;</p>

			<svg width="50" height="50">
				<circle cx="25" cy="25" r="25"
				style="fill: purple"/>
			</svg>
			<svg width="50" height="50">
				<circle cx="25" cy="25" r="25"
					style="fill: purple"/>
				</svg>

				<!-- erase this but I wanted to see link 
				<router-link :to="{ name: 'HelloWorld' }">
					<button class="button--stretch button--dark">Chalk It!</button>
				</router-link>
				-->

			</main>

		<router-link :to="{ name: 'HelloWorld' }">
			<button class="button--stretch button--light">ADD</button>
		</router-link>
	</div>
</template>

<script>
/*
resources;
resource = document.getElementById("link");
XHR = new XMLHttpRequest();

// myArray will be filescontent

randomize = function(myArray) {
	return myArray[Math.floor(Math.random() * myArray.length)];
};

// Pull in articles array
XHR.open('GET', 'https://api.github.com/gists/48ae6a56aefd39b1c05690dcbdfe220f', true); // The open metod just sets the stage. Takes 3: a method to retrieve info, a path to the info an if t=it should be done asyncronously
XHR.responseType = "text"; // make its coming in as text
XHR.send();
XHR.onload = function() {
	if ( XHR.status === 200) {
		resources = JSON.parse(XHR.responseText);
	};
};

window.addEventListener("load", function() {

	// Show random array item for daily read/watch!
	resource.innerHTML = resources;

	console.log(resources);

});
*/

export default {
  name: "HelloWorld",
  data() {
    return {
      message:
        "Start Where You Are <br>Use What You Have <br>Do What You Can <br>&hearts;",
      // Make this a status? Like last 7 days?? And random Cowabunga! Yippee! Radical! (if this button (which will be a color) is clicked, you see how many days you have practiced)...make this an svg sun icon or somethig and change the color to reflect ativity
      practice: 0
    };
  },
  methods: {
    addPractice() {
      this.practice++;
    }
  }
};
</script>

<style lang="scss" scoped>
.ribbon-top {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 13px;
  background: linear-gradient(
    90deg,
    #6aba50 0%,
    #6aba50 18%,
    #fab73f 18%,
    #fab73f 34%,
    #f08131 34%,
    #f08131 50%,
    #db3841 50%,
    #db3841 66%,
    #934196 66%,
    #934196 82%,
    #27a1d9 82%,
    #27a1d9 100%
  );
}
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

.hello {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
main {
  flex: 1;
}
.nav--primary {
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
.welcome-message {
  margin: 2rem 0 0 0;
}
.status {
  font-size: 3.5rem;
  margin: 0;
}
</style>
