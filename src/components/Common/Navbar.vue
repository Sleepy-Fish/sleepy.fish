
<template>
  <nav>
    <div class="nav-container">
      <div class="nav-logo">
        <router-link :to="`/`">
          Sleepy Fish<span class="display-lg-up"> Games</span>
        </router-link>
      </div>
      <ul class="nav-links">
        <li
          v-for="route in routes"
          :key="route.text"
        >
          <router-link
            :to="route.page"
            :class="isActive(route.text)"
          >
            {{ route.text }}
          </router-link>
        </li>
      </ul>
      <a class="mobile-menu-toggle" />
      <ul class="mobile-menu menu">
        <li
          v-for="route in routes"
          :key="route.text"
        >
          <router-link :to="route.page">
            {{ route.text }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      routes: [
        {
          text: 'Games',
          page: '/games'
        },
        {
          text: 'Projects',
          page: '/projects'
        },
        {
          text: 'Extras',
          page: '/extras'
        },
        {
          text: 'About',
          page: '/about'
        }
      ]
    }
  },
  mounted () {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle')
    const mobileMenu = document.querySelector('.mobile-menu')
    mobileMenuToggle.addEventListener('click', function (e) {
      e.preventDefault()
      e.stopPropagation()
      mobileMenu.style.display = ''
    })
    document.body.addEventListener('click', function (e) {
      mobileMenu.style.display = 'none'
    })
    window.addEventListener('resize', function (e) {
      mobileMenu.style.display = 'none'
    })
    mobileMenu.style.display = 'none'
  },
  methods: {
    isActive (page) {
      return page === this.$route.matched[0].name ? 'active' : 'inactive'
    }
  }
}
</script>

<style lang="scss" scoped>
$nav-bg-color:  rgba(0,0,0,0.4);
$nav-link-color: #dedede;
$nav-link-active-color: white;
nav {
  background-color: $nav-bg-color;
  a {
    color: $nav-link-color;
    &:active {
      color: $nav-link-active-color;
    }
    &.active {
      border-bottom: 4px solid $nav-link-active-color;
    }
  }
}
.mobile-menu {
  position: absolute;
  background-color:rgba(0,0,0,0.4);
  z-index: 99;
  top: 50px;
  right: 5px;
  li:last-of-type > a {
    border: none;
  }
}
</style>
