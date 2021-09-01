<template>
  <v-navigation-drawer v-model="drawer" fixed app>
    <v-list>
      <v-list-item>
        <source :data-srcset="'/img/logo.webp'" type="image/webp" />
        <source :data-srcset="'/img/logo.jpg'" type="image/png" />
        <v-img :src="'/img/logo.webp'" to="/" contain></v-img>
      </v-list-item>
      <v-list-item>
        <v-list-item-action>
          <v-icon>mdi-signal</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="'Статистика'" />
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        color="blue"
        :to="item.to"
        exact
        router
        @click="currentPage = item.value"
      >
        <v-list-item-content class="ml-14">
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        color="blue"
        to="productEditor"
        exact
        router
        @click="currentPage = 'productEditor'"
      >
        <v-list-item-action>
          <v-icon>mdi-pencil</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="'Редактор товаров'" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Продажи',
          to: '/',
          value: 'main',
        },
        {
          title: 'Чеки',
          to: '/checks',
          value: 'checks',
        },
      ],
    }
  },
  computed: {
    currentPage: {
      get() {
        return this.$store.state.currentPage
      },
      set(value) {
        this.$store.dispatch('changeCurrentPage', value)
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
}
</script>
