<template>
  <div class="info-container">
    <h2>the system is broken</h2>
    <p class="copy">
      We support and join those protesting systemic racism and injustice across the US and across the world. So much of the music we surround ourselves with comes from or has roots in black culture. Loft would not exist without the black community.
      <br />
    </p>

    <p class="copy">
      Below are donation links to some organizations we've given to. We
      encourage you to give if you're able. Peace to all.
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

      <a class="link" href="https://action.aclu.org/give/now?redirect=donate" target="_blank">ACLU</a>

      <a class="more" target="_blank" href="https://blacklivesmatters.carrd.co/">
        More ways to help
        <img class="link-out" src="../assets/LinkOut.svg" />
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
h2 {
  font-variant: small-caps;
}

.more {
  cursor: pointer;
  display: inline;
  text-align: center;
  opacity: 0.5;
  text-decoration: none;
  color: white;
  transition: 0.25s;

  &:hover {
    color: #ffcb20;
    fill: #ffcb20;
    opacity: 1;
  }
}

.link-out {
  width: 17px;
  padding-left: 5px;
  vertical-align: middle;
  transform: translateY(-1px);
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
  transition: 0.25s;

  &:hover {
    color: #ffcb20;
    border: 1px solid #ffcb20;
  }
}

@media (max-width: 1100px) {
  .info-container {
    margin: 0 2vw;
  }
}

@media (max-width: 1000px) {
  .copy {
    text-align: justify;
    font-size: 15px;
    margin: 5px 0px 5px 0px;
  }

  h2 {
    margin: 5px 0px 5px 0px;
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
}

@media (max-width: 650px) {
  .more {
    display: none;
  }
}
</style>
