<template>
  <v-app dark>
    <Nav />
    <v-app-bar fixed app elevation="0" color="white">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="getTitle()" />
      <v-spacer />
      <div class="d-flex mt-auto">
        <span v-if="isActiveKiosk" class="mr-3">киоск активен: </span>
        <span v-else style="color: red" class="mr-3">Киоск не активен</span>
        <v-switch v-model="isActiveKiosk" color="success"></v-switch>
      </div>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <v-footer absolute app>
      <div>
        <p>powered by Artem Salikhov</p>
        <p>telegram @Artem_Krv</p>
        <span>&copy; {{ new Date().getFullYear() }}</span>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import Nav from '~/components/Nav.vue'

export default {
  components: {
    Nav,
  },
  data() {
    return {
      isActiveKiosk: true,
    }
  },
  computed: {
    currentPage: {
      get() {
        return this.$store.state.currentPage
      },
    },
    drawer: {
      get() {
        return this.$store.state.drawer
      },
      set(value) {
        this.$store.dispatch('toggleDrawer', value)
      },
    },
  },
  methods: {
    getTitle() {
      switch (this.currentPage) {
        case 'main':
          return 'Панель Администратора - Статистика продаж'
        case 'checks':
          return 'Панель Администратора - Статистика продаж - чеки'
        case 'productEditor':
          return 'Панель Администратора - Редактор товаров'
        default:
          return 'Панель Администратора'
      }
    },
  },
}
</script>

<style scoped>
footer {
  display: inline;
  text-align: center;
}
p {
  margin: 0%;
}
</style>
