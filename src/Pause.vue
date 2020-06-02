<script>
import MarqueeText from "vue-marquee-text-component";

export default {
  name: "Pause",
  components: {
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
          The music and culture we surround ourselves with largely comes from or has roots in the black community. We support and join those
          protesting systemic racism and injustice across the United States and across the world.
          <br />
        </p>

        <p class="copy">
          Below are donation links to some organizations we've given to. We encourage
          you to give if you're able. Peace to all.
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
      <div class="donate-container" v-if="!isMobile">
        <h2>donate directly using crypto</h2>

        <div class="donate-total-container">
          <p class="donate-total">$500</p>
        </div>
        <p class="copy">
          Fellow crypto fam, now is your chance. If you have some money lying around in your wallet, put it to real use in one click. Donations will be split equally amongst the charities to the left.
          <br />
        </p>
        <div class="donate-action">
          <input
            class="donate-input"
            type="number"
            max="100000"
            placeholder="$0.00"
            autocomplete="off"
            autocorrect="off"
            spellcheck="true"
          />
          <div ref="tipButton" class="donate-button" @click="incrementTip" type="button">donate</div>
        </div>
      </div>
    </div>

    <marquee-text v-if="!isMobile" class="marquee" :duration="160">
      BLACK LIVES MATTER | BLACK LIVES MATTER | BLACK LIVES MATTER | BLACK LIVES
      MATTER | BLACK LIVES MATTER | BLACK LIVES MATTER | BLACK LIVES MATTER |
      BLACK LIVES MATTER | BLACK LIVES MATTER | BLACK LIVES MATTER | BLACK LIVES
      MATTER | BLACK LIVES MATTER |
    </marquee-text>
    <marquee-text v-if="!isMobile" class="marquee marquee-bottom" :duration="260">
      SUPPORT THE MOVEMENT | SUPPORT THE MOVEMENT | SUPPORT THE MOVEMENT |
      SUPPORT THE MOVEMENT | SUPPORT THE MOVEMENT | SUPPORT THE MOVEMENT |
      SUPPORT THE MOVEMENT | SUPPORT THE MOVEMENT | SUPPORT THE MOVEMENT |
      SUPPORT THE MOVEMENT | SUPPORT THE MOVEMENT | SUPPORT THE MOVEMENT |
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

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
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
  top: 20vh;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: space-around;
  font-family: "neue-haas-unica";
  font-weight: 300;
}

.donate-container {
  width: 450px;
  margin: 0 5vw;
}

.donate-total-container {
  text-align: center;
  border: 2px solid white;
  border-radius: 15px;
  padding: 15px 0px;
  margin: 0;
  height: 175px;
  font-variant-numeric: tabular-nums;
}

.donate-total {
  margin: 0;
  position: relative;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: -webkit-linear-gradient(
    15deg,
    hsl(259.5, 93.5%, 57.5%) 9%,
    hsl(359.1, 100%, 50.2%) 75%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: anonymous;
  font-size: 120px;
  letter-spacing: 0.03em;
}

.donate-action {
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.donate-input {
  padding-left: 22px;
  height: 50px;
  border: 1px solid grey;
  border-radius: 6px;
  background: none;
  font-size: 18px;
  width: 200px;
  color: white;

  &::placeholder {
    color: darkgrey;
  }
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
  color: white;
  width: 100vw;
  font-family: monument;
  font-size: 24px;
  margin: 20px 0px;
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

.donate-button {
  // @extend %non-selectable;
  // @extend %quick-ease;
  cursor: pointer;
  background: #ffcb20;
  // border: 2px solid rgba(44, 25, 92, 0.65);
  box-sizing: border-box;
  border-radius: 6px;
  padding: auto 30px;
  color: rgb(0, 0, 0);
  font-size: 22px;
  line-height: 14px;
  text-align: center;

  // font-variant: small-caps;
  display: flex;
  flex-direction: column;
  justify-content: center;

  overflow: hidden;
  position: relative;

  transition: all 0.2s ease;
  outline: none;
  box-shadow: 0px 4px 8px rgba(70, 38, 11, 0.35);

  &:active {
    transform: scale(0.99);
    background: #ffc400;
    transition: all 0.1s ease;
    transform: translateY(2px);
    box-shadow: 0px 0px rgba(70, 38, 11, 0.25);
  }

  &:after {
    background: #ffda5f;
    content: "";
    height: 155px;
    left: -75px;
    opacity: 0.2;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: all 850ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 50px;
    z-index: -10;
  }
}

@media (max-width: 1100px) {
  .donate-container {
    margin: 0 2vw;
  }

  .info-container {
    margin: 0 2vw;
  }
}

@media (max-width: 900px) {
  .content {
    top: 50%;
    width: 85vw;
    transform: translate(-50%, -50%);
    margin: auto;
  }

  .copy {
    text-align: justify;
    font-size: 15px;
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
    font-size: 22px;
  }
}
</style>
