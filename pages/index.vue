<template>
  <v-container>
    <div>
      <ChartLine :chart-data="dataLine" />
    </div>
    <v-row>
      <v-col cols="12" md="8">
        <v-data-table
          :headers="headers"
          :items="checks"
          hide-default-footer
          class="elevation-0"
        >
        </v-data-table>
      </v-col>
      <v-col cols="12" md="4">
        <ChartPie :chart-data="chartData" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ChartPie from '~/components/ChartPie.vue'
import ChartLine from '~/components/ChartLine.vue'

export default {
  components: {
    ChartPie,
    ChartLine,
  },
  data() {
    return {
      headers: [
        {
          text: 'Товар',
          value: 'name',
          align: 'start',
        },
        {
          text: 'Заказы',
          value: 'value',
        },
      ],
      dataLine: {
        labels: [1, 2, 3, 4, 5, 6, 7],
        datasets: [
          {
            label: 'Июнь',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      },
      chartData: {
        labels: ['Каппучино 250', 'Газировка', 'Латте 400'],
        datasets: [
          {
            backgroundColor: ['red', 'green', 'blue'],
            data: [24, 37, 230],
          },
        ],
      },
      checks: [
        {
          name: 'Каппучино 250',
          value: 24,
        },
        {
          name: 'Газировка',
          value: 37,
        },
        {
          name: 'Латте 400',
          value: 230,
        },
      ],
    }
  },
}
</script>
