<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index"/>
    <div class="blog-card-wrapper">
      <div class="container">
        <h3>View more Recent Blogs</h3>        
        <div class="blog-cards">
          <blogCard :post="post" v-for="(post, index) in sampleBlogCrads" :key="index"/>
        </div>
      </div>
    </div>
  <div class="updates">
    <div class="container">
      <h2>nerver miss a post. Register for your free account today!</h2>
      <router-link class="route-button" to="#">
        Register for FryBlog <Arrow class="arrow arrow-light"/>
      </router-link>
    </div>
  </div>
  </div>
</template>

<script>
import Arrow from "../assets/Icons/arrow-right-light.svg";
import BlogPost from '../components/BlogPost'
import BlogCard from '../components/BlogCard'
export default {
  name: "Home",
  components: { BlogPost, BlogCard , Arrow},
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost: "Weekly blog postest and more",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost: [
        {
          title: "This is a fillte title!",
          blogHtml: "This is fa fillte post",
          blogCoverPhoto: "beautiful-stories",
        },
        {
          title: "This is a fillte title!",
          blogHtml: "This is fa fillte post",
          blogCoverPhoto: "designed-for-everyone",
        }
      ],
      sampleBlogCrads: [
        { blogTitle: 'Blog Card #1', blogCoverPhoto: 'stock-1', blogDate: 'May 1, 2021'},
        { blogTitle: 'Blog Card #2', blogCoverPhoto: 'stock-2', blogDate: 'May 1, 2021'},
        { blogTile: 'Blog Card #2', blogCoverPhoto: 'stock-2', blogDate: 'May 1, 2021'},
        { blogTitle: 'Blog Card #4', blogCoverPhoto: 'stock-3', blogDate: 'May 1, 2021'},
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
.blog-card-wrapper {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}
.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }
    .route-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media(min-width: 800px) {
        margin-left: auto;
      }
    }
    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media(min-width: 800px){
        text-align: initial;
      }
    }
  }
}
</style>