<template>
  <div class="donate" @click="donate">
    <h1>DONATE</h1>
  </div>
</template>

<script>
export default {
  name: 'DonateButton',
  methods: {
    donate() {
      console.log("donating")
    }
  }
};
</script>

<style scoped lang="scss">
#donate {
  color: white;
}
</style>