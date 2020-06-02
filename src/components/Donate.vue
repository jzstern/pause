<template>
  <div class="donate-container" v-if="!isMobile">
    <h2>donate directly using crypto</h2>

    <div class="donate-total-container">
      <p class="donate-total">$500</p>
    </div>
    <p class="copy">
      Fellow crypto fam, now is your chance. If you have some money lying around
      in your wallet, put it to real use in one click. Donations will be split
      equally amongst the charities to the left.
      <br />
    </p>
    <div class="donate-action">
      <input
        :value="donationAmountUSD"
        class="donate-input"
        type="number"
        max="100000"
        placeholder="$0.00"
        autocomplete="off"
        autocorrect="off"
        spellcheck="true"
      />
      <DonateButton :amount="donationAmountETH" />
    </div>
  </div>
</template>

<script>
import DonateButton from "./DonateButton";
export default {
  name: "Donate",
  components: {
    DonateButton,
  },
  computed: {
    donationAmountETH() {
      return this.donationAmountUSD / 200;
    },
  },
  data() {
    return {
      donationAmountUSD: null,
      isMobile: false,
    };
  },
};
</script>

<style scoped lang="scss">
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

h2 {
  font-variant: small-caps;
}

.donate-container {
  width: 450px;
  margin: 0 5vw;
}

.donate-total-container {
  font-size: 100px;
  text-align: center;
  border: 2px solid orange;
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
</style>
