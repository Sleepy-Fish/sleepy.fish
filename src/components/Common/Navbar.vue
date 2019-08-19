
<template>
  <nav>
    <div class="nav-container">
      <div class="nav-logo">
        <router-link :to="`/`">
          Sleepy Fish
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
$nav-bg-color: black;
$nav-link-color: #dcdcdc;
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
  z-index: 99;
  top: 50px;
  right: 5px;
}
</style>
