<template>
  <div class="donate-container" v-if="!isMobile">
    <h2>donate using crypto</h2>

    <div class="donate-total-container">
      <p class="donate-total">${{ tweenedDonationAmountUSD }}</p>
      <p class="donate-total-label">total contributions</p>
    </div>
    <p class="copy">
      We currently accept donations in ETH. Donations are sent to our wallet and will be split equally between
      the Center for Policing Equity, Equal Justice Initiative, and the ACLU. We are
      <a
        class="us"
        href="https://twitter.com/michael_mckain"
        target="_blank"
      >real</a>&nbsp;
      <a class="us" href="https://twitter.com/jzstern" target="_blank">people</a> and receipts will be posted
      <a
        class="us"
        href="https://twitter.com/loftradio_"
        target="_blank"
      >here</a>&nbsp;once Loft is back on air.
      <br />
    </p>
    <div class="donate-action">
      <currency-input
        class="donate-input"
        v-model="amountUSD"
        currency="USD"
        locale="en-US"
        placeholder="$0.00"
        onfocus="this.placeholder = ''"
        onblur="this.placeholder = '$0.00'"
        distraction-free="{hideCurrencySymbol: false}"
      />

      <DonateButton :amount="amountETH" @txSent="handleTxSent" @txState="updateTxState" />
    </div>
    <div class="tx-state">
      <transition name="fade">
        <div class="tx-pending" v-if="txState == 'pending'">
          <svg
            version="1.1"
            id="L9"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            enable-background="new 0 0 0 0"
            xml:space="preserve"
          >
            <path
              fill="#fff"
              d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="1s"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite"
              />
            </path>
          </svg>
          Transaction Pending
        </div>
      </transition>
      <transition name="fade">
        <div
          class="tx-confirmed"
          v-if="txState == 'confirmed'"
        >Transaction Confirmed. Thank you for your {{this.amountToAdd.toFixed(4)}} ETH donation!</div>
      </transition>
    </div>
  </div>
</template>

<script>
/*eslint-disable */
import gsap from "gsap";
import Web3 from "web3";
const axios = require("axios");
const CoinGecko = require("coingecko-api");
const CoinGeckoClient = new CoinGecko();

export default {
  name: "Donate",
  components: {
    DonateButton: () => import("./DonateButton")
  },
  watch: {
    totalDonationsUSD: function(newValue) {
      gsap.to(this.$data, { duration: 2, tweenedNumber: newValue });
    }
  },
  computed: {
    amountETH() {
      return this.amountUSD / this.ethPrice;
    },
    tweenedDonationAmountUSD() {
      const tweenedNumber = Number(this.tweenedNumber);
      return tweenedNumber.toFixed(2);
    },
    totalDonationsUSD() {
      return (this.totalDonationsETH * this.ethPrice).toFixed(2);
    }
  },
  data() {
    return {
      amountUSD: null,
      amountToAdd: 0.0,
      ethPrice: null,
      isMobile: false,
      totalDonationsETH: 0,
      tweenedNumber: 0,
      txState: null
    };
  },
  methods: {
    getTotalDonations() {
      axios
        .get(
          "https://api.etherscan.io/api?module=account&action=balance&address=0xDd538141f00B6A3ee3b2BF6B14d64d026A533A18&tag=latest&apikey=21VJT5PWR94JCJGQGQIT2YWAPDFWUUSR5T"
        )
        .then(response => {
          if (response.status == "200") {
            this.totalDonationsETH = Web3.utils.fromWei(
              response.data.result,
              "ether"
            );
          }
        });
    },
    async getETHPrice() {
      let ethQuery = await CoinGeckoClient.simple.price({
        ids: ["ethereum"],
        vs_currencies: ["usd"]
      });

      return ethQuery.data.ethereum.usd;
    },
    handleTxSent(amountETH) {
      this.amountUSD = 0;
      this.amountToAdd = amountETH;
    },
    updateTxState(txState) {
      this.txState = txState;
      if (txState === "confirmed") {
        this.totalDonationsETH =
          this.amountToAdd + Number(this.totalDonationsETH);
      }
    }
  },
  async mounted() {
    this.ethPrice = await this.getETHPrice();
    this.getTotalDonations();

    setInterval(() => {
      this.getTotalDonations();
    }, 30000);
  }
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
  margin: 25px 0 15px 0;
}

.donate-total {
  margin: 0;
  background: -webkit-linear-gradient(
    15deg,
    rgb(248, 194, 45) 9%,
    rgb(255, 73, 1) 75%
  );
  background-clip: text;
  -webkit-background-clip: text;
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

  &:focus {
    border: 1px solid #ffbe20;
  }

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

.tx-state {
  margin-top: 15px;
  font-family: anonymous;
  font-size: 20px;
}

.tx-confirmed {
  margin-top: 25px;
}

svg {
  transform: translateY(14px);
  width: 40px;
  height: 40px;
}

.us {
  text-decoration: none;
  color: #ffbe20;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: darken(#ffbe20, 20%);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@media (max-width: 1100px) {
  .donate-container {
    margin: 0 2vw;
  }
}

@media (max-width: 1000px) {
  .donate-container {
    display: none;
  }
}
</style>
