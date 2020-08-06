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
      <div class="desc">
        A software engineer with interests in working with scalable products, distributed systems architecture, microservices.<br>
        Also I love TDD, front-end technologies and writing about things i learn.<br>
        A Marathon finisher 🏅 & sports enthusiast 💪
      </div>

      <div class="resume"></div>
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
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  flex-flow: row wrap;
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
  text-align: left;
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
  width: 12px;
  height: 24px;
}

.desc {
  margin-top: 8px;
  font-size: 16px;
}

@keyframes blink {
  0% {background: #000}
  50% {background: #fff}
  100% {background: #000}
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

</style>
