<script>
import { Pie } from 'vue-chartjs'

export default {
  name: 'ChartPie',
  extends: Pie,
  options: {
    deep: true,
  },
  props: {
    chartData: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.options)
  },
}
</script>
