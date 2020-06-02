<template>
  <div class="donate-button" @click="donate" type="button">
    <p>Donate</p>
  </div>
</template>

<script>
// import { ethers, utils } from "ethers";
// const providers = require("ethers").providers;

export default {
  name: "DonateButton",
  props: {
    amount: {
      type: Number,
    },
  },
  data() {
    return {
      provider: null,
    };
  },
  methods: {
    donate() {
      console.log("donating: " + this.amount);
      // if (this.provider) {
      //   console.log("donating");
      // } else {
      //   alert(
      //     "you must connect an Ethereum wallet in order to donate through loft"
      //   );
      // }
    },
    async getBalance() {
      // try {
      //   const wei = await web3.eth.getBalance(this.listener.walletAddress);
      //   const listenerBalanceETH = Number.parseFloat(
      //     web3.utils.fromWei(wei, "ether")
      //   );
      //   store.commit("setListener", {
      //     ...this.listener,
      //     balanceETH: listenerBalanceETH,
      //   });
      // } catch (error) {
      //   console.error(error);
      // }
    },
    async getWalletInfo() {
      if (this.provider) {
        // let network = await web3.eth.net.getNetworkType();
        // if (network !== "none") {
        //   store.commit("setNetwork", network);
        //   let accounts = [];
        //   try {
        //     accounts = await web3.eth.getAccounts();
        //   } catch (e) {
        //     console.error(e);
        //   }
        //   if (accounts.length === 0) console.warn("MetaMask is locked");
        //   else {
        //     store.commit("setTransactionState", "none");
        //     store.commit("setListener", {
        //       ...this.listener,
        //       loggedIn: true,
        //       walletAddress: accounts[0],
        //     });
        //     this.getUserId();
        //     this.getBalance();
        //     ethereum.on("accountsChanged", (accounts) => {
        //       store.commit("setListener", {
        //         ...this.listener,
        //         walletAddress: accounts[0],
        //       });
        //       this.getUserId();
        //       this.getBalance();
        //     });
        //     ethereum.on("networkChanged", function(accounts) {
        //       document.location.reload();
        //     });
        //   }
        // }
      }
    },
    getWeb3Provider() {
      if (
        typeof window.ethereum !== "undefined" ||
        typeof window.web3 !== "undefined"
      ) {
        // window.web3 = new Web3(
        //   window["ethereum"] || window.web3.currentProvider
        // );
        // ethereum.autoRefreshOnNetworkChange = false;
        return "MetaMask";
      } else return "none";
    },
    async login() {
      // await web3.currentProvider.enable(); // Prompt the user to connect their web3 wallet
      await this.getWalletInfo();
    },
    async sendDonation() {
      // const sendValue = web3.utils.toWei(
      //   this.tip.amountETH.toFixed(8).toString(),
      //   "ether"
      // );
      // if (!this.provider) {
      //   store.commit("showToastMessage", "tipping");
      //   store.commit("setTip", { ...this.tip, amountUSD: 0.25 });
      //   this.login();
      // } else {
      //   web3.eth.getAccounts((error, accounts) => {
      //     if (error) throw error;
      //     else if (accounts.length === 0) {
      //       store.commit("resetToastMessage");
      //       store.commit("setTip", { ...this.tip, amountUSD: 0.25 });
      //       this.login();
      //       return;
      //     } else {
      //       const txnParams = {
      //         from: accounts[0],
      //         to: this.tip.artistWalletAddress,
      //         value: sendValue,
      //       };
      //       web3.eth.sendTransaction(txnParams, async (error, txnHash) => {
      //         if (error) {
      //           // TODO ; detect user rejection vs network error
      //           if (!this.pendingTips.length) {
      //             store.commit("setTransactionState", "failed");
      //           }
      //           store.commit("resetToastMessage");
      //           store.commit("setTip", { ...this.tip, amountUSD: 0.25 });
      //         } else {
      //           console.log("Transaction Hash: " + txnHash);
      //           const tip = { ...this.tip, hash: txnHash };
      //           store.commit("resetToastMessage");
      //           store.commit("addPendingTip", tip);
      //           store.commit("setTransactionState", "pending");
      //           store.commit("setTip", { ...this.tip, amountUSD: 0.25 });
      //           let receipt = null;
      //           try {
      //             receipt = await this.getTransactionReceipt(txnHash);
      //           } catch (e) {
      //             console.error(e);
      //           }
      //           if (receipt) {
      //             // TODO - confirm which TX's actually went through
      //             if (this.network === "main") {
      //               this.createTip(tip);
      //               store.commit("setListener", {
      //                 ...this.listener,
      //                 numTips: ++this.listener.numTips,
      //               });
      //             }
      //             store.commit("removePendingTip"); // TODO - remove the tip by ID, not order
      //             store.commit("setTransactionState", "confirmed");
      //             this.$refs.StationBackground.tipConfirmed();
      //           }
      //         }
      //       });
      //     }
      //   });
      // }
    },
  },
  mounted() {
    // let ethereum = window.ethereum;
    // if (typeof web3 !== "undefined") {
    //   var web3Provider = new providers.Web3Provider(
    //     web3.currentProvider,
    //     ethers.providers.networks.ropsten
    //   );
    //   web3Provider.getBalance("..some address..").then(function(balance) {
    //     var etherString = ethers.utils.formatEther(balance);
    //     console.log("Balance: " + etherString);
    //   });
    // }
    // var web3Provider = new providers.Web3Provider(web3.currentProvider, network);
  },
};
</script>

<style scoped lang="scss">
.donate-button {
  // @extend %non-selectable;
  // @extend %quick-ease;
  cursor: pointer;
  background: #ffcb20;
  height: 60px;
  border: 1px solid rgb(16, 16, 16);
  box-sizing: border-box;
  border-radius: 6px;
  padding: auto 30px;
  color: rgb(0, 0, 0);
  font-size: 22px;
  line-height: 14px;
  text-align: center;
  flex-grow: 1;

  margin-left: 15px;

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
</style>
