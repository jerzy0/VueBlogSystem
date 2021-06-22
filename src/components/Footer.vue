<template>
    <footer>
        <div class="container">
            <div class="left">
                    <div class="col-1">
                        <route-link class="header-link" to:="{ name: 'home' }">FryBlog</route-link>
                    </div>
                    <div class="col-2">
                        <ul>
                            <route-link class="link" :to="{ name:'home' }">Home</route-link>
                            <route-link class="link" :to="{ name:'blogs' }">Blogs</route-link>
                            <route-link class="link" v-if="user" :to="{ name: 'newpost'}">Create Post</route-link>
                            <route-link class="link" v-if="!user" :to="{ name: 'login'}">Login | Register</route-link>
                        </ul>
                    </div>
            </div>
            <div class="right">
                <p>Copyright 2021 All Rights Reserved</p>
            </div>
        </div>
    </footer>
</template>

<script>
import instagram from "../assets/Icons/instagram-brands.svg";
import linkedin from "../assets/Icons/linkedin-brands.svg";
export default {
  name: "footer-vue",
  component: {
    instagram,
    linkedin
  }
};
</script>

<style lang="scss" scoped>
footer {
  margin-top: auto;
  padding: 20px 25px;
  background-color: #303030;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 32px;
    @media (min-width: 800px) {
      flex-direction: row;
      gap: 0px;
    }
    > div {
      display: flex;
      float: 1;
    }
    .left {
      font-size: 0.8rem;
      gap: 32px;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      .header-link {
          margin-right: 10px;
          font-size: 1rem;
      }
      .link {
          margin-right: 10px;
          color: white;
          &:nth-last-child() {
              margin-right: 0;
          }
      }
      @media (min-width: 800px) {
        flex-direction: row;
        align-items: initial;
        gap: 0;
      }
      .header {
        font-size: 24px;
        color: #ffff;
        text-decoration: none;
        font-weight: 600;
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: white;
      font-size: 0.8rem;
       @media (min-width: 800px) {
        flex-direction: row;
        align-items: initial;
        gap: 0;
      }
    }
  }
}
</style>