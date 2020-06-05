<template>
  <div class="donate-button" @click="donate" type="button">
    <p>Donate</p>
  </div>
</template>

<script>
/*eslint-disable */
let ethereum;
import Web3 from "web3";

export default {
  name: "DonateButton",
  props: {
    amount: {
      type: Number
    }
  },
  data() {
    return {
      balance: null,
      network: null,
      provider: null
    };
  },
  methods: {
    donate() {
      if (this.amount == 0) return;
      else if (!this.provider) this.login();
      // else if (this.balance <= this.amount) alert("insufficient funds");
      else {
        const sendValue = web3.utils.toWei(
          this.amount.toFixed(8).toString(),
          "ether"
        );

        web3.eth.getAccounts((error, accounts) => {
          if (error) throw error;
          else if (accounts.length === 0) {
            this.login();
          } else {
            const txnParams = {
              from: accounts[0],
              to: "0xDd538141f00B6A3ee3b2BF6B14d64d026A533A18",
              value: sendValue
            };

            web3.eth.sendTransaction(txnParams, async (error, txnHash) => {
              this.$emit("txSent", this.amount);
              if (error) {
                console.error();
              } else {
                console.log("Transaction Hash: " + txnHash);
                this.$emit("txState", "pending");

                let receipt = null;
                try {
                  receipt = await this.getTransactionReceipt(txnHash);
                  this.$emit("txState", "confirmed");
                } catch (e) {
                  console.error(e);
                  this.$emit("txState", null);
                }
              }
            });
          }
        });
      }
    },
    async getBalance() {
      try {
        const wei = await web3.eth.getBalance(this.senderAddress);
        this.balance = Number.parseFloat(web3.utils.fromWei(wei, "ether"));
      } catch (error) {
        console.error(error);
      }
    },
    getTransactionReceipt: async function(hash) {
      let receipt = null;

      while (receipt === null) {
        receipt = await this.getTransactionReceiptPromise(hash);
        setTimeout("", 1000);
      }

      return receipt;
    },
    getTransactionReceiptPromise(hash) {
      return new Promise((resolve, reject) => {
        web3.eth.getTransactionReceipt(hash, function(err, data) {
          if (err !== null) reject(err);
          else resolve(data);
        });
      });
    },
    async getWalletInfo() {
      if (this.provider) {
        let network = await web3.eth.net.getNetworkType();
        if (network !== "none") {
          this.network = network;
          let accounts = [];

          try {
            accounts = await web3.eth.getAccounts();
          } catch (e) {
            console.error(e);
          }
          if (accounts.length === 0) console.warn("MetaMask is locked");
          else {
            this.senderAddress = accounts[0];
            this.getBalance();

            if (ethereum) {
              ethereum.on("accountsChanged", function(accounts) {
                // ! this isn't being detected
                this.getBalance();
              });
              ethereum.on("networkChanged", function(accounts) {
                document.location.reload();
              });
            }
          }
        }
      }
    },
    getWeb3Provider() {
      if (
        typeof window.ethereum !== "undefined" ||
        typeof window.web3 !== "undefined"
      ) {
        window.web3 = new Web3(
          window["ethereum"] || window.web3.currentProvider
        );
        // ethereum.autoRefreshOnNetworkChange = false;
        this.provider = "exists";
      }
    },
    async login() {
      await web3.currentProvider.enable();
      // await ethereum.enable();
      await this.getWalletInfo();
    }
  },
  async mounted() {
    this.getWeb3Provider();
    this.getWalletInfo();
  }
};
</script>

<style scoped lang="scss">
.donate-button {
  cursor: pointer;
  background: #ffcb20;
  height: 60px;
  border: 1px solid rgb(16, 16, 16);
  box-sizing: border-box;
  border-radius: 6px;
  padding: auto 30px;
  color: rgb(0, 0, 0);
  font-size: 20px;
  line-height: 14px;
  text-align: center;
  flex-grow: 1;

  margin-left: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  overflow: hidden;
  position: relative;

  transition: all 0.2s ease;
  outline: none;
  box-shadow: 0px 4px 8px rgba(70, 38, 11, 0.35);

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */

  &:hover {
    background: darken(#ffcb20, 20%);
  }

  &:active {
    transform: scale(0.99);
    background: darken(#ffcb20, 40%);
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
