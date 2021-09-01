<template>
  <v-container>
    <div class="mb-5 d-flex">
      <span class="ml-5 mr-5">Чеки</span>
      <span class="mr-5">{{ checks.length }}</span>
      <span class="dateSelector" @click="openDataPicker()">{{
        dateRangeText
      }}</span>
    </div>
    <div>
      <v-data-table
        :headers="headers"
        :items="checks"
        hide-default-footer
        class="elevation-1"
      >
      </v-data-table>
      <v-dialog v-model="dataPicker" max-width="400">
        <v-date-picker v-model="dates" range></v-date-picker>
      </v-dialog>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    const dates = new Date().toLocaleDateString()
    return {
      dates,
      dataPicker: false,
      headers: [
        {
          text: '#',
          value: 'id',
          align: 'start',
        },
        {
          text: 'ДАТА',
          value: 'date',
        },
        {
          text: 'Оплачено',
          value: 'sum',
        },
      ],
      checks: [
        {
          id: 159,
          date: '12.11.2021',
          sum: 24,
        },
        {
          id: 237,
          date: '12.11.2021',
          sum: 37,
        },
        {
          id: 262,
          date: '12.11.2021',
          sum: 23,
        },
        {
          id: 305,
          date: '12.11.2021',
          sum: 67,
        },
        {
          id: 356,
          date: '12.11.2021',
          sum: 49,
        },
        {
          id: 375,
          date: '12.11.2021',
          sum: 94,
        },
        {
          id: 392,
          date: '12.11.2021',
          sum: 98,
        },
        {
          id: 408,
          date: '13.11.2021',
          sum: 87,
        },
        {
          id: 452,
          date: '7.11.2021',
          sum: 51,
        },
        {
          id: 518,
          date: '9.11.2021',
          sum: 65,
        },
      ],
    }
  },
  computed: {
    dateRangeText() {
      try {
        return this.dates.join(' ~ ')
      } catch {
        return this.dates
      }
    },
  },
  methods: {
    openDataPicker() {
      this.dates = []
      this.dataPicker = !this.dataPicker
    },
  },
}
</script>

<style scoped>
.dateSelector {
  font-size: 13px;
  border: solid 0.5px;
  padding: 1px;
  color: blue;
}
</style>
