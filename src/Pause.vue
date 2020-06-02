<script>
import DonateButton from "./components/DonateButton.vue"
import MarqueeText from "vue-marquee-text-component";

export default {
  name: "Pause",
  components: {
    DonateButton,
    // DonateButton: () => import("./components/DonateButton.vue"),
    MarqueeText
  },
  computed: {
    isMobile() {
      return false;
    },
  },
};
</script>

<template>
  <div class="pause">
    <div class="content">
      <h3>Loft is off the air</h3>
      <p class="copy">
        We wouldn't exist without the black community. We support and join those
        protesting systemic racism and injustice across the US and the world.
        <br />
      </p>

      <p class="copy">
        Below are links to some organizations we've given to – Center for
        Policing Equity, Equal Justice Initiative, and the ACLU. We encourage
        you to give if you're able. Peace to all.
        <br />
      </p>
      <div class="link-container">
        <a class="link" href="https://policingequity.org/donate" target="_blank"
          >Center for Policing Equity</a
        >

        <a
          class="link"
          href="https://support.eji.org/give/153413/#!/donation/checkout"
          target="_blank"
          >Equal Justice Initiative</a
        >

        <!-- <a class="link" href="https://www.cuapb.org/t" target="_blank">CUAPB</a> -->

        <a
          class="link"
          href="https://action.aclu.org/give/now?redirect=donate"
          target="_blank"
          >ACLU</a
        >

        <a
          class="more"
          target="_blank"
          href="https://blacklivesmatters.carrd.co/"
          >More ways to help
          <img class="link-out" src="./assets/LinkOut.svg" />
        </a>
      </div>
      
      <DonateButton/>
    </div>


    <marquee-text v-if="!isMobile" class="marquee" :duration="160">
      BLACK LIVES MATTER | BLACK LIVES MATTER | BLACK LIVES MATTER | BLACK LIVES
      MATTER | BLACK LIVES MATTER | BLACK LIVES MATTER | BLACK LIVES MATTER |
      BLACK LIVES MATTER | BLACK LIVES MATTER | BLACK LIVES MATTER | BLACK LIVES
      MATTER | BLACK LIVES MATTER |
    </marquee-text>
    <marquee-text
      v-if="!isMobile"
      class="marquee marquee-bottom"
      :duration="260"
    >
      SUPPORT THE MOVEMENT | SUPPORT THE MOVEMENT | SUPPORT THE MOVEMENT |
      SUPPORT THE MOVEMENT | SUPPORT THE MOVEMENT | SUPPORT THE MOVEMENT |
      SUPPORT THE MOVEMENT | SUPPORT THE MOVEMENT | SUPPORT THE MOVEMENT |
      SUPPORT THE MOVEMENT | SUPPORT THE MOVEMENT | SUPPORT THE MOVEMENT |
    </marquee-text>

    <marquee-text v-if="isMobile" class="marquee" :duration="60">
      BLACK LIVES MATTER | BLACK LIVES MATTER | BLACK LIVES MATTER |
    </marquee-text>
    <marquee-text v-if="isMobile" class="marquee marquee-bottom" :duration="50">
      SUPPORT THE MOVEMENT | SUPPORT THE MOVEMENT | SUPPORT THE MOVEMENT |
    </marquee-text>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://use.typekit.net/ijc3kul.css");

.pause {
  z-index: 100000;
  position: fixed;
  background: rgb(26, 26, 26);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
}

.content {
  position: absolute;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  font-family: "neue-haas-unica";
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
  color: #ffcb20;
  margin: auto;
  width: 450px;
  box-sizing: border-box;
  border: 1px solid #ffcb20;
  border-radius: 4px;
  padding: 10px 0px;
  margin-bottom: 15px;
  cursor: pointer;

  &:hover {
    // width: 440px;
    background-color: #ffcb204f;
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
}

.link-out {
  width: 17px;
  padding-left: 5px;
  vertical-align: middle;
  transform: translateY(-1px);
}

@media (max-width: 650px) {
  .content {
    top: 50%;
    width: 85vw;
  }
  .copy {
    text-align: justify;
    font-size: 15px;
  }

  .link {
    width: 85vw;
    padding: 7px 0px;
  }
  .marquee {
    font-size: 22px;
  }
}
</style>