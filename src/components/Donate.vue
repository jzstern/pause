<template>
  <div class="donate-container" v-if="!isMobile">
    <h2>donate using crypto</h2>

    <div class="donate-total-container">
      <p class="donate-total">${{ totalDonationsUSD }}</p>
      <p class="donate-total-label">total amount donated</p>
    </div>
    <p class="copy">
      Put the money in your wallet to use. We currently accept ETH. Donations
      will be sent to a wallet we control and split equally amongst the Center
      for Policing Equity, Equal Justice Initiative, and the ACLU.
      <br />
    </p>
    <div class="donate-action">
      <currency-input
        class="donate-input"
        v-model="amountUSD"
        currency="USD"
        locale="en-US"
        placeholder="$0.00"
        autocomplete="off"
        autocorrect="off"
        spellcheck="true"
        onfocus="this.placeholder = ''"
        onblur="this.placeholder = '$0.00'"
      />

      <DonateButton
        :amount="amountETH"
        @txSent="amountUSD = 0"
        @txState="updateTxState"
      />
    </div>
  </div>
</template>

<script>
import DonateButton from "./DonateButton";
const CoinGecko = require("coingecko-api");
const CoinGeckoClient = new CoinGecko();

export default {
  name: "Donate",
  components: {
    DonateButton,
  },
  computed: {
    amountETH() {
      return this.amountUSD / this.ethPrice;
    },
    totalDonationsUSD() {
      const totalDonationsETH = this.totalDonationsETH;
      return (totalDonationsETH * this.ethPrice).toFixed(2);
    },
  },
  data() {
    return {
      amountUSD: null,
      ethPrice: null,
      isMobile: false,
      totalDonationsETH: 1.2,
    };
  },
  methods: {
    async getETHPrice() {
      let ethQuery = await CoinGeckoClient.simple.price({
        ids: ["ethereum"],
        vs_currencies: ["usd"],
      });

      return ethQuery.data.ethereum.usd;
    },
    updateTxState(event) {
      console.log(event);
    },
  },
  async created() {
    this.ethPrice = await this.getETHPrice();
  },
};
</script>

<style scoped lang="scss">
:focus {
  outline: 0;
  opacity: 1;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

h2 {
  font-variant: small-caps;
}

.copy {
  text-align: justify;
}

.donate-container {
  width: 450px;
  margin: 0 5vw;
}

.donate-total-container {
  text-align: left;
  // border-top: 2px solid white;
  // border-bottom: 2px solid rgba(255, 255, 255, 1);
  // border-radius: 15px;
  // padding: 0 0 15px 0;
  margin: 25px 0 15px 0;
  // height: 175px;
}

.donate-total {
  margin: 0;
  // position: relative;

  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -70%);
  background: -webkit-linear-gradient(
    15deg,
    rgb(248, 194, 45) 9%,
    rgb(255, 73, 1) 75%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: anonymous;
  font-size: 100px;
  font-variant-numeric: tabular-nums;
}

.donate-total-label {
  font-size: 16px;
  font-variant: small-caps;
  opacity: 0.5;
  margin: 10px 0 0 0;
}

.donate-action {
  margin-top: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.donate-input {
  padding-left: 22px;
  height: 60px;
  border: 1px solid;
  border-color: grey;
  box-sizing: border-box;
  border-radius: 6px;
  background: none;
  font-size: 20px;
  width: 250px;
  color: white;

  &::placeholder {
    color: darkgrey;
  }
}

.donate-input-dollar-symbol {
  position: relative;

  &:before {
    position: absolute;
    top: 50%;
    transform: translateY(-58%);
    content: "$";
    left: 22px;
    font-size: 22px;
  }
}

@media (max-width: 1100px) {
  .donate-container {
    margin: 0 2vw;
  }
}

@media (max-width: 900px) {
  .copy {
    text-align: justify;
    font-size: 15px;
  }

  .donate-container {
    display: none;
  }
}
</style>
