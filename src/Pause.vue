<script>
// import Donate from "./components/Donate";
// import MarqueeText from "vue-marquee-text-component";

export default {
  name: "Pause",
  components: {
    Donate: () => import("./components/Donate"),
    Info: () => import("./components/Info"),
    MarqueeText: () => import("vue-marquee-text-component")
  },
  computed: {
    isMobile() {
      return false;
    }
  }
};
</script>

<template>
  <div class="pause">
    <div class="content">
      <Info />
      <Donate />
    </div>

    <marquee-text v-if="!isMobile" class="marquee" :duration="160">
      BLACK LIVES MATTER ■ BLACK LIVES MATTER ■ BLACK LIVES MATTER ■ BLACK LIVES
      MATTER ■ BLACK LIVES MATTER ■ BLACK LIVES MATTER ■ BLACK LIVES MATTER ■
      BLACK LIVES MATTER ■ BLACK LIVES MATTER ■ BLACK LIVES MATTER ■ BLACK LIVES
      MATTER ■ BLACK LIVES MATTER ■&nbsp;
    </marquee-text>
    <marquee-text v-if="!isMobile" class="marquee marquee-bottom" :duration="260">
      SUPPORT THE MOVEMENT ■ FUND THE MOVEMENT ■ SUPPORT THE MOVEMENT ■
      FUND THE MOVEMENT ■ SUPPORT THE MOVEMENT ■ FUND THE MOVEMENT ■
      SUPPORT THE MOVEMENT ■ FUND THE MOVEMENT ■ SUPPORT THE MOVEMENT ■
      FUND THE MOVEMENT ■ SUPPORT THE MOVEMENT ■ FUND THE MOVEMENT ■&nbsp;
    </marquee-text>

    <marquee-text
      v-if="isMobile"
      class="marquee"
      :duration="60"
    >BLACK LIVES MATTER | BLACK LIVES MATTER | BLACK LIVES MATTER |&nbsp;</marquee-text>
    <marquee-text
      v-if="isMobile"
      class="marquee marquee-bottom"
      :duration="50"
    >SUPPORT THE MOVEMENT | SUPPORT THE MOVEMENT | SUPPORT THE MOVEMENT |&nbsp;</marquee-text>
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
  white-space: pre-line;

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
    // width: 85vw;
    transform: translate(-50%, -50%);
    margin: auto;
  }

  .copy {
    text-align: justify;
    font-size: 15px;
    margin: 5px 0px 5px 0px;
  }

  h2 {
    margin: 5px 0px 5px 0px;
  }

  .link {
    width: 85vw;
    max-width: 450px;
    padding: 7px 0px;
    color: #ffcb20;
    border: 1px solid #ffcb20;
  }

  .marquee {
    font-size: 18px;
    margin: 5px 0;
  }
}
</style>
