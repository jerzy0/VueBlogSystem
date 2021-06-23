<template>
  <div class="blog-wrapper no-user">
    <div class="blog-content">
      <div>
        <h2 v-if="post.welcomeScreen">{{ post.title }}</h2>
        <h2 v-else>{{ post.title }}</h2>
        <p v-if="post.welcomeScreen">{{ post.blogPost }}</p>
        <p v-else class="content-preview">{{ post.blogHtml }}</p>
        <router-link v-if="post.welcomeScreen" class="link link-light" to="#">
          Login/Register
          <Arrow class="arrow arrow-light" />
        </router-link>
        <router-link v-else class="link" to="#">
          View The Post <Arrow class="arrow arrow-light" />
        </router-link>
      </div>
    </div>
      <div class="blog-photo">
        <img
          v-if="post.welcomeScreen"
          :src="require(`../assets/blogPhotos/${post.photo}.jpg`)"
          alt=""
        />
        <img
          v-else
          :src="require(`../assets/blogPhotos/${post.blogCoverPhoto}.jpg`)"
          alt=""
        />
      </div>
  </div>
</template>

<script>
import Arrow from "../assets/Icons/arrow-right-light.svg";
export default {
  name: "blogPost",
  props: ["post"],
  components: {
    Arrow
  }
};
</script>

<style lang="scss" scoped>
    .arrow {
        color:white;
        width: 20px;
        padding-left: 10px;
    }
    .blog-wrapper {
        display: flex;
        flex-direction: column;
        @media(min-width: 700px) {
            min-height: 650px;
            max-height: 650px;
            flex-direction: row;
        }
        .blog-content {
            display:flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex: 4;
            order: 2;
            @media(min-width:700px) {
                order:1;
            }
            @media(min-width: 800px) {
                flex:3;
            }
            div {
                max-width: 375px;
                padding: 72px 24px;
                @media(min-width: 700px) {
                    padding: 0 24px;
                }
                h2 {
                    font-size: 32px;
                    font-weight: 300;
                    text-transform: uppercase;
                    margin-bottom: 24px;
                    @media(min-width: 700px) {
                        font-size: 40px;
                    }
                }
                p {
                    font-size: 15px;
                    font-weight: 300;
                    line-height: 1.7;
                }
                .content-preview {
                    font-size: 13px;
                    max-height: 24px;
                    width: 250px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .link {
                    display: inline-flex;
                    align-items: center;
                    margin-top: 32px;
                    padding-bottom: 4px;
                    border-bottom: 1px solid transparent;
                    transition: .5s ease-in all;
                    color: rgba(255, 255, 255, 0.253);
                    &:hover {
                        border-bottom: #303030;
                        color: rgb(255, 255, 255);
                    }
                }
            }
        }
        .blog-photo {
            order: 1;
            flex: 3;

            @media(min-width:700px) {
                order:2;
            }

            @media(min-width:800px) {
                flex: 4;
            }

            img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
    .no-user{
        .blog-content {
            background-color: #303030;
            color: #fff;
        }
    }
    .blog-wrapper:nth-last-child(even){
        .blog-content {
            order: 2;
        }
        .blog-photo {
            order:1 ;
        }
    }
    
</style>