<template>
  <v-container v-if="openEditeditDialog" class="editor">
    <v-row>
      <v-col cols="12">
        <h2 class="text-center">Создание и Редактирование товара</h2>
      </v-col>
      <v-col cols="12" md="2" class="dialog">
        <span>Название</span>
      </v-col>
      <v-col cols="12" md="10">
        <v-text-field
          dense
          class="input"
          outlined
          placeholder="Введите название товара"
        >
        </v-text-field>
      </v-col>
      <v-col cols="12" md="2" class="dialog">
        <span>Категория</span>
      </v-col>
      <v-col cols="12" md="10">
        <v-select
          v-model="select"
          dense
          class="input"
          outlined
          :items="groups"
          placeholder="Выберите категорию товара"
          required
        ></v-select>
      </v-col>
      <v-col cols="12" md="2" class="dialog">
        <span>Масса</span>
      </v-col>
      <v-col cols="12" md="10">
        <v-text-field
          class="small-input"
          dense
          outlined
          placeholder="Введите вес"
        >
        </v-text-field>
      </v-col>
      <v-col cols="12" md="2" class="dialog">
        <span>Цена</span>
      </v-col>
      <v-col cols="12" md="10">
        <v-text-field
          dense
          class="small-input"
          outlined
          placeholder="Введите цену"
          append-outer-icon="mdi-currency-rub"
        >
        </v-text-field>
      </v-col>
      <v-col cols="12">
        <v-file-input
          dense
          small-chips
          class="small-input"
          label="Загрузить фотографию"
          filled
          prepend-icon="mdi-camera"
        ></v-file-input>
      </v-col>
      <v-col cols="12">
        <v-switch
          v-model="activeProduct"
          color="success"
          :label="isActive()"
        ></v-switch>
      </v-col>
      <v-col cols="12">
        <v-divider></v-divider>
        <div class="btn-group">
          <v-btn color="red darken-1" text @click="editItem()">
            Отменить
          </v-btn>
          <v-btn color="green darken-1" text @click="editItem()"
            >Сохранить</v-btn
          >
        </div>
      </v-col>
    </v-row>
  </v-container>
  <v-container v-else>
    <v-btn color="deep-purple lighten-2" text @click="editItem()"
      >Добавить новый товар</v-btn
    >

    <div v-for="(item, i) in items" :key="i" max-height="100" class="card">
      <v-row justify="center" align="center">
        <v-col cols="2">
          <v-img
            max-height="75"
            contain
            :src="'/img/cups/' + i + '.jpg'"
          ></v-img>
        </v-col>
        <v-col cols="3">
          <span class="card-price">{{ item.name }}</span>
        </v-col>
        <v-col cols="3">
          <span>{{ item.group }}</span>
        </v-col>
        <v-col cols="1">
          <span>{{ item.price }}<v-icon>mdi-currency-rub</v-icon></span>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="3">
          <v-btn
            :x-small="$vuetify.breakpoint.xsOnly"
            color="deep-purple lighten-2"
            text
            @click="editItem()"
          >
            Редактировать
          </v-btn>
          <v-btn
            :x-small="$vuetify.breakpoint.xsOnly"
            color="deep-purple lighten-2"
            text
            @click="deleteItem()"
          >
            Удалить
          </v-btn>
        </v-col>
      </v-row>
      <v-divider></v-divider>
    </div>
    <v-dialog v-model="openDeleteDialog" max-width="400">
      <v-card>
        <v-card-title class="justify-center">Удаление товара</v-card-title>
        <v-card-text class="text-center"
          >Вы хотите удалить товар, товар будет удален из базы даннх, отменить
          это действие будет невозможно</v-card-text
        >
        <v-card-actions class="btn justify-center">
          <v-btn color="green darken-1" text @click="deleteItem()">
            Отменить
          </v-btn>
          <v-btn color="red darken-1" text @click="deleteItem()">
            Удалить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      openDeleteDialog: false,
      openEditeditDialog: false,
      activeProduct: 'true',
      select: null,
      groups: ['кофе', 'газированные напитки', 'Молочная продукция'],
      items: [
        {
          name: 'Эспрессо',
          price: 159,
          group: 'кофе',
        },
        {
          name: 'кофе',
          price: 237,
          group: 'кофе',
        },
        {
          name: 'Газированный напиток в банке со вкусом апельсин',
          price: 262,
          group: 'газированная вода',
        },
        {
          name: 'капучино',
          price: 305,
          group: 'кофе',
        },
        {
          name: 'флет-уайт',
          price: 356,
          group: 'кофе',
        },
        {
          name: 'раф',
          price: 375,
          group: 'кофе',
        },
        {
          name: 'большой раф',
          price: 392,
          group: 'кофе',
        },
        {
          name: 'Американо',
          price: 408,
          group: 'кофе',
        },
        {
          name: 'Газировка',
          price: 452,
          group: 'газированная вода',
        },
      ],
    }
  },
  methods: {
    deleteItem() {
      this.openDeleteDialog = !this.openDeleteDialog
    },
    editItem() {
      this.openEditeditDialog = !this.openEditeditDialog
    },
    isActive() {
      if (this.activeProduct) return 'Товар активен'
      return 'товар не активен'
    },
  },
}
</script>

<style scoped>
.input {
  max-width: 500px;
}
.small-input {
  max-width: 200px;
}
.btn-group {
  margin-top: 10px;
  text-align: center;
}
.editor {
  max-width: 700px;
}
.dialog {
  margin: 0%;
}
.card {
  margin: 2px;
  text-align: center;
}
.card-price {
  text-align: center;
  text-justify: auto;
}
@media screen and (max-width: 900px) {
  span {
    font-size: 90%;
  }
  v-btn {
    font-size: 0%;
  }
}
</style>
