<template>
  <div id="splash-background">
    <div class="center-piece">
      <p>Sleepy Fish is a portfolio site for J Riley Harrington. Web and Game developer.</p>
      <small>Some artwork is temporarily being borrowed...</small>
      <p class="warning">
        This site is under construction
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#splash-background {
  position: absolute;
  background-image: url("/static/img/splash.jpg");
  background-size: cover;
  top: 0;
  z-index: -1;
  width: 100vw;
  height: 90vh;
  .center-piece {
    background-color: rgba(0,0,0,0.3);
    position: relative;
    top: 30vh;
    padding:30px;
    max-width: 40%;
    margin: auto;
    text-align: center;
    color: white;
    @media only screen and (max-width: 767px) {
      max-width: 100%;
    }
    small {
      color: #888;
    }
    .warning {
      color: red;
      font-size:24px;
    }
  }
}
</style>
