<template>
    <header>
        <nav class="container">
            <div class="brand">
                <router-link class="header" :to="{ name: 'Home'}">FryBlog</router-link>
            </div>
            <div class="nav-links">
                <ul v-show="!mobile">
                    <router-link class="link" to="#">Home</router-link>
                    <router-link class="link" to="#">Blog</router-link>
                    <router-link class="link" to="#">Create Post</router-link>
                    <router-link class="link" to="#">Login/Register</router-link>
                </ul>
            </div>
        </nav>
        <menuIcon @click="toggleNav" class="menu-icon" v-show="mobile"/>
        <transition name="mobile-nav">
            <ul class="mobile-nav" v-show="mobileNav">
                <router-link class="link" to="#">Home</router-link>
                <router-link class="link" to="#">Blog</router-link>
                <router-link class="link" to="#">Create Post</router-link>
                <router-link class="link" to="#">Login/Register</router-link>
            </ul>
        </transition>
    </header>
</template>

<script>
    import menuIcon from "../assets/Icons/bars-regular.svg";
    export default {
        name: 'navigation',
        components: {
            menuIcon
        },
        data() {
            return {
                mobile: null,
                mobileNav: null, 
                windowWidth: null,
            };
        },
        created() {
            window.addEventListener('resize', this.checkScreen);
            this.checkScreen;
        },
        methods: {
            checkScreen() {
                this.windowWidth = window.innerWidth;
                if(this.windowWidth <= 750) {
                    this.mobile = true;
                    return;
                }
                this.mobile = false;
                this.mobieNav = false;
                return;
            },
            toggleNav() {
                this.mobileNav = !this.mobileNav;
            }
        }
    }
</script>

<style lang="scss" scoped>
    header {
        background-color: #fff;
        padding: 0 25px;
        z-index: 99;
    }
    .link {
        font-weight: 500;
        padding: 0 8px;
        transition: 0.3s color ease;
        &:hover {
            color: #1eb8b8;
        }
    }
    nav {
        display: flex;
        padding: 25px 0;
        .brand {
            display: flex;
            align-items: center;
            .header {
                font-weight: 500;
                font-size: 24px;
                color: black;
                text-decoration: none;
            }
        }
        .nav-links {
            display: flex;
            position: relative;
            align-items: center;
            justify-content: flex-end;
            flex: 1;
            ul {
                margin-right: 32px;
                .link {
                    margin-right: 32px;
                }
                .link:last-child {
                    margin-right: 0;
                }
            }
        }
    }
    .menu-icon {
        cursor: pointer;
        position: absolute;
        top: 32px;
        right: 25px;
        height: 25px;
        width: auto;
    }
    .mobile-nav {
        padding: 20px;
        width: 70%;
        max-width: 250px;
        display: flex;
        flex-direction: column;
        position: fixed;
        height: 100%;
        background: #303030;
        top: 0;
        left: 0;
        .link {
            padding: 15px 0px;
            color: white;
        }
    }
    .mobile-nav-enter-active,
    .mobile-nav-leave-active {
        transition: all 1s ease;
    }
    .mobile-nav-enter {
        transform: translateX(-250px);
    }
    .mobile-nav-enter-to {
        transform: translateX(0);
    }
    .mobile-nav-leave-to {
        transform: translateX(-250px);
    }
</style>