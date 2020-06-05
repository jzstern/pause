<script>
export default {
  name: "Pause",
  components: {
    Donate: () => import("./components/Donate"),
    Info: () => import("./components/Info"),
    MarqueeText: () => import("vue-marquee-text-component")
  }
};
</script>

<template>
  <div class="pause">
    <div class="content">
      <Info id="info" />
      <Donate />
    </div>

    <marquee-text class="marquee" :duration="13" :repeat="20">
      <v-html>
        BLACK LIVES MATTER
        <span v-html="'&nbsp;'"></span>■
        <span v-html="'&nbsp;'"></span>
      </v-html>
    </marquee-text>
    <marquee-text class="marquee marquee-bottom" :duration="42" :repeat="10">
      SUPPORT THE MOVEMENT
      <span v-html="'&nbsp;'"></span>■
      <span v-html="'&nbsp;'"></span> FUND THE MOVEMENT
      <span v-html="'&nbsp;'"></span>■
      <span v-html="'&nbsp;'"></span>
    </marquee-text>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://use.typekit.net/ijc3kul.css");

@font-face {
  font-family: "monument";
  src: url("./assets/MonumentExtended-Regular.otf");
}

@font-face {
  font-family: "anonymous";
  src: url("./assets/AnonymousPro-Regular.ttf");
}

.content {
  position: absolute;
  top: 48%;
  left: 50%;
  height: 500px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: space-around;
  font-family: "neue-haas-unica";
  font-weight: 300;
}

.marquee {
  opacity: 0.8;
  color: white;
  width: 100vw;
  font-family: monument;
  font-size: 24px;
  margin: 20px 0px;
  white-space: nowrap !important;

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}

.marquee-bottom {
  position: absolute;
  bottom: 0;
}

.pause {
  position: fixed;
  z-index: 100000;
  background: rgb(16, 16, 16);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  overflow: hidden;
}

@media (max-width: 1000px) {
  .content {
    top: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
  }

  #info {
    margin: auto;
  }

  .marquee {
    font-size: 18px;
    margin: 5px 0;
    white-space: nowrap !important;
  }
}

@media (max-width: 1000px) {
  .content {
    width: 85vw;
  }
}
</style>
