<template>
  <div class="home">
    <div class="avatar" :style="{ backgroundImage: 'url(' + require('@/assets/ab-bw-min.jpeg') + ')'}">
    </div>

    <div class="bio">
      <div class="blinking-cursor">
        <span>&#x3E;</span>
        <div class="cursor"></div>
      </div>

      Hi 👋, <br>
      I'm Ahmed Bassell
      <div class="separator"></div>
      <div class="desc">
        A software engineer with interests in scalable products, distributed systems architecture, microservices.<div class="separator"></div>
        Also I love TDD, front-end technologies and writing about things i learn.<div class="separator"></div>
        A Marathon finisher 🏅 & sports enthusiast 💪
      </div>

      <a class="resume" v-bind:href="cv_url" target="_blank">
        Download CV
      </a>
    </div>

    <div class="social">
      <a class="github" :style="{ backgroundImage: 'url(' + require('@/assets/social/github.png') + ')'}" href="https://github.com/ahmedBassell" target="_blank"></a>
      <a class="linkedin" :style="{ backgroundImage: 'url(' + require('@/assets/social/linkedin.png') + ')'}" href="https://www.linkedin.com/in/bassell" target="_blank"></a>
      <a class="instagram" :style="{ backgroundImage: 'url(' + require('@/assets/social/instagram.png') + ')'}" href="https://www.instagram.com/ahmedbassell" target="_blank"></a>
      <a class="twitter" :style="{ backgroundImage: 'url(' + require('@/assets/social/twitter.png') + ')'}" href="https://twitter.com/AhmedBassell" target="_blank"></a>
      <a class="facebook" :style="{ backgroundImage: 'url(' + require('@/assets/social/facebook.png') + ')'}" href="https://www.facebook.com/ahmed.bassell" target="_blank"></a>
      <a class="email" :style="{ backgroundImage: 'url(' + require('@/assets/social/email.png') + ')'}" href="mailto:ahmedbassell@gmail.com" target="_blank"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => {
    console.log(process.env.BASE_URL)
    return {
      cv_url: '/cv.pdf'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  flex-flow: row wrap;
  padding: 16px;
}
.avatar {
  display: flex;
  margin: 0 auto;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  background-size: cover;
}

.bio {
  max-width: 760px;
  margin: 40px auto;
  background-color: #fff;
  color: #000;
  font-size: 32px;
  padding: 32px;
  border-radius: 8px;
  text-align: center;
}

 /* blinking cursor */
 .blinking-cursor {
   display: flex;
 }

.cursor {
  background: #fff;
  line-height: 24px;
  margin-left: 4px;
  animation: blink 0.8s infinite;
  width: 16px;
  height: 32px;
}

.desc {
  margin-top: 8px;
  font-size: 16px;
}

.separator {
  height: 8px;
}

@keyframes blink {
  0% {background: #000}
  50% {background: #fff}
  100% {background: #000}
}

a, a:active, a:visited {
  text-decoration: none;
}

.resume {
  display: flex;
  width: 196px;
  text-decoration: none;
  color: #fff;
  background-color: #000;
  margin: 24px auto 0 auto;
  padding: 8px;
  cursor: pointer;
  opacity: 0.7;
  border-radius: 4px;
}

.resume:hover {
  opacity: 1;
}

.social {
  max-width: 760px;
  margin: 40px auto;
  background-color: #fff;
  color: #000;
  font-size: 32px;
  display: flex;
  padding: 32px;
  justify-content: center;
  border-radius: 8px;
}

.github,
.linkedin,
.twitter,
.instagram,
.facebook,
.email {
  width: 48px;
  height: 48px;
  background-size: cover;
  cursor: pointer;
  margin: 8px;
  opacity: 0.7;
}

.github:hover,
.linkedin:hover,
.twitter:hover,
.instagram:hover,
.facebook:hover,
.email:hover {
  opacity: 1;
}

@media only screen and (max-width: 600px) {
  .avatar {
    width: 216px;
    height: 216px;
  }

  .separator {
    height: 16px;
  }

  .github,
  .linkedin,
  .twitter,
  .instagram,
  .facebook,
  .email {
    width: 32px;
    height: 32px;
  }
}

</style>
