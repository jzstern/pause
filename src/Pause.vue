<script>
import Donate from "./components/Donate";
import MarqueeText from "vue-marquee-text-component";

export default {
  name: "Pause",
  components: {
    Donate,
    MarqueeText
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
      <div class="info-container">
        <h2>loft is off the air</h2>
        <p class="copy">
          So much of the music and culture we surround ourselves with has its roots
          in the black community. We support and join those protesting systemic
          racism and injustice across the United States and across the world.
          <br />
        </p>

        <p class="copy">
          Below are donation links to some organizations we've given to. We
          encourage you to give if you're able. Peace to all.
          <br />
        </p>
        <div class="link-container">
          <a
            class="link"
            href="https://policingequity.org/donate"
            target="_blank"
          >Center for Policing Equity</a>

          <a
            class="link"
            href="https://support.eji.org/give/153413/#!/donation/checkout"
            target="_blank"
          >Equal Justice Initiative</a>

          <!-- <a class="link" href="https://www.cuapb.org/t" target="_blank">CUAPB</a> -->

          <a
            class="link"
            href="https://action.aclu.org/give/now?redirect=donate"
            target="_blank"
          >ACLU</a>

          <a class="more" target="_blank" href="https://blacklivesmatters.carrd.co/">
            More ways to help
            <img class="link-out" src="./assets/LinkOut.svg" />
          </a>
        </div>
      </div>
      <Donate />
    </div>

    <marquee-text v-if="!isMobile" class="marquee" :duration="160">
      BLACK LIVES MATTER ■ BLACK LIVES MATTER ■ BLACK LIVES MATTER ■ BLACK LIVES
      MATTER ■ BLACK LIVES MATTER ■ BLACK LIVES MATTER ■ BLACK LIVES MATTER ■
      BLACK LIVES MATTER ■ BLACK LIVES MATTER ■ BLACK LIVES MATTER ■ BLACK LIVES
      MATTER ■ BLACK LIVES MATTER ■
    </marquee-text>
    <marquee-text v-if="!isMobile" class="marquee marquee-bottom" :duration="260">
      SUPPORT THE MOVEMENT ■ SUPPORT THE MOVEMENT ■ SUPPORT THE MOVEMENT ■
      SUPPORT THE MOVEMENT ■ SUPPORT THE MOVEMENT ■ SUPPORT THE MOVEMENT ■
      SUPPORT THE MOVEMENT ■ SUPPORT THE MOVEMENT ■ SUPPORT THE MOVEMENT ■
      SUPPORT THE MOVEMENT ■ SUPPORT THE MOVEMENT ■ SUPPORT THE MOVEMENT ■
    </marquee-text>

    <marquee-text
      v-if="isMobile"
      class="marquee"
      :duration="60"
    >BLACK LIVES MATTER | BLACK LIVES MATTER | BLACK LIVES MATTER |</marquee-text>
    <marquee-text
      v-if="isMobile"
      class="marquee marquee-bottom"
      :duration="50"
    >SUPPORT THE MOVEMENT | SUPPORT THE MOVEMENT | SUPPORT THE MOVEMENT |</marquee-text>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://use.typekit.net/ijc3kul.css");
// @import "../styles/global.scss";

@font-face {
  font-family: "monument";
  src: url("./assets/MonumentExtended-Regular.otf");
}

@font-face {
  font-family: "anonymous";
  src: url("./assets/AnonymousPro-Regular.ttf");
}

h2 {
  font-variant: small-caps;
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

.info-container {
  width: 450px;
  margin: 0 5vw;
}

.copy {
  text-align: justify;
}

.link-container {
  margin: 25px 0px;
}

.link {
  display: inline-block;
  text-align: center;
  text-decoration: none;
  color: white;
  margin: auto;
  width: 450px;
  box-sizing: border-box;
  border: 1px solid white;
  border-radius: 4px;
  padding: 10px 0px;
  margin-bottom: 15px;
  cursor: pointer;

  &:hover {
    // width: 440px;
    color: #ffcb20;
    border: 1px solid #ffcb20;
    transition: 0.25s;
  }
}

.marquee {
  opacity: 0.8;
  color: white;
  width: 100vw;
  font-family: monument;
  font-size: 24px;
  margin: 20px 0px;

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}

.marquee-bottom {
  position: absolute;
  bottom: 0;
}

.more {
  display: inline;
  text-align: center;
  opacity: 0.5;
  cursor: pointer;
  text-decoration: none;
  color: white;

  &:hover {
    // width: 440px;
    color: #ffcb20;
    fill: #ffcb20;
    opacity: 1;
    transition: 0.25s;
  }
}

.link-out {
  width: 17px;
  padding-left: 5px;
  vertical-align: middle;
  transform: translateY(-1px);
}

@media (max-width: 1100px) {
  .info-container {
    margin: 0 2vw;
  }
}

@media (max-width: 900px) {
  h2 {
    margin: 5px 0px 5px 0px;
  }

  .content {
    top: 50%;
    width: 85vw;
    transform: translate(-50%, -50%);
    margin: auto;
  }

  .copy {
    text-align: justify;
    font-size: 15px;
    margin: 5px 0px 5px 0px;
  }

  .donate-container {
    display: none;
  }

  .info-container {
    margin: auto;
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
