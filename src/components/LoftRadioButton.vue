<template>
  <div id="loft-link-container">
    <a id="loft-link" href="https://loft.radio">
      <img src="../assets/LogoFull.svg" />
    </a>
  </div>
</template>

<style scoped lang="scss">
#loft-link-container {
  display: flex;
  justify-content: center;
}

#loft-link {
  position: absolute;
  display: flex;
  bottom: 14vh;
  padding: 12px 20px 12px 20px;
  opacity: 0.5;
  border: 1px solid white;
  border-radius: 100px;
  transition: all 0.2s ease;

  img {
    width: 75px;
  }

  &:hover {
    cursor: pointer;
    opacity: 1;
    border: 1px solid white;
  }
}

@media (max-width: 650px) {
  #loft-link {
    border: none;
    bottom: 3vh !important;
  }
}
</style>
