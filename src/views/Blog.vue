<template>
  <div class="blog">
    <a class="article" v-for="article in articles" :key="article.id" :href="article.link" target="_blank">
      <div class="title">
        {{ article.title }}
      </div>

      <div class="date">
        {{ article.date }}
      </div>

      <div class="thumbnail" :style="{backgroundImage: 'url(' + article.thumbnail + ')'}">
      </div>
    </a>

    <span v-if="articles.length===0">
      No Recent Articles.
    </span>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {
      articles: [
        {
          id: 1,
          title: 'API Rate Limiting — Part 1',
          date: 'Published on Jun 14, 2020',
          link: 'https://www.linkedin.com/pulse/api-rate-limiting-part-1-ahmed-bassell/',
          thumbnail: 'https://media-exp1.licdn.com/dms/image/C4E12AQHO4mJoggUtqg/article-cover_image-shrink_720_1280/0?e=1602720000&v=beta&t=6qbuwj2Ik8oIw6JNQ8PIjM61I5JNIABcWAcqY47XoX8',
        },
        {
          id: 2,
          title: 'API Rate Limiting — Part 2',
          date: 'Published on Jun 22, 2020',
          link: 'https://www.linkedin.com/pulse/api-rate-limiting-part-2-ahmed-bassell/',
          thumbnail: 'https://media-exp1.licdn.com/dms/image/C4E12AQEJEnGssDaSfw/article-cover_image-shrink_720_1280/0?e=1602720000&v=beta&t=t4wVCZ8K3i_qWxvHmePF--mrZeejH-z5nDWYuJi-fck',
        },
        {
          id: 3,
          date: 'Published on Jul 22, 2020',
          title: 'TDD And Defying Legacy Code',
          link: 'https://www.linkedin.com/pulse/tdd-defying-legacy-code-ahmed-bassell/',
          thumbnail: 'https://media-exp1.licdn.com/dms/image/C4D12AQExo22za_hhDA/article-cover_image-shrink_720_1280/0?e=1602720000&v=beta&t=iojxeN_rD0V4c7ptmdhiCEgWr3RQqEt4HpbibMwBLZ0',
        },
      ],
    }
  },
  created() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blog {
  max-width: 760px;
  width: calc(100vw - 64px);
  display: flex;
  background-color: #fff;
  border-radius: 4px;
  flex-flow: column nowrap;
  margin: 8px auto;
  padding: 8px;
}
.article {
  width: 100%;
  margin: 16px auto;
  text-align: left;
  display: flex;
  flex-flow: column nowrap;
  opacity: 0.8;
  filter: grayscale(100%);
  text-decoration: none;
}

.article:hover {
  opacity: 1;
  filter: grayscale(50%);
}

.title {
  margin: 16px 8px 4px 8px;
  color: #000;
  font-size: 24px;
}

.date {
  margin: 4px 8px;
  color: #333;
  font-size: 16px;
}

.thumbnail {
  /* width: 320px; */
  height: 320px;
  background-size: cover;
  background-position: center;
}

@media only screen and (max-width: 600px) {
  .blog {
    width: calc(100vw - 48px);
  }

  .title {
    font-size: 20px;
  }

  .thumbnail {
    height: 192px;
  }
}
</style>