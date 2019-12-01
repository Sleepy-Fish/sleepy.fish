
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
      <ul
        id="mobile-nav"
        class="mobile-menu menu"
      >
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
          text: 'About',
          page: '/about'
        },
        {
          text: 'Games',
          page: '/games'
        },
        {
          text: 'Blog',
          page: '/blog'
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
nav {
  font-family: $heading-font-family;
}
#mobile-nav.mobile-menu {
  position: absolute;
  z-index: 3;
  top: 50px;
  right: 5px;
  li:last-of-type > a {
    border: none;
  }
}
</style>
