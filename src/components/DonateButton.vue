<template>
  <div class="donate-button" @click="donate" type="button">
    <p>Donate</p>
  </div>
</template>

<script>
export default {
  name: "DonateButton",
  methods: {
    donate() {
      console.log("donating");
    }
  }
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
