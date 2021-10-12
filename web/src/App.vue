<script>
import Feed from "./components/Feed.vue";

export default {
  components: {Feed},
}
</script>

<template>
  <h2>Hinn med Spåran!</h2>
  <feed />
</template>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Concert+One&display=swap');
    
    html, body {
      font-family: "Concert One";
      color: #464660;
      margin: 0;
      padding: 0;
      background-color: #ffffff;
      height: 100%;
      overflow-y: hidden;
    }

    body {
      width: 100%;
      height: 100%;
    }

    #app {
      height: 100%;
      padding: 25px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    h2 {
      font-family: "Concert One";
      font-size: 64px;
    }

    @media only screen and (max-width: 600px) {
      h2 {
        font-size: 40px;
      }
    }
</style>
