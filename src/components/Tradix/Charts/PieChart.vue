<script>
import { Pie } from "vue-chartjs";

export default {
  name: "PieChart",
  extends: Pie,

  data() {
    return {
      chartdata: {
        datasets: [
          {
            label: "Sales Stats",
            borderWidth: 0,
            borderRadius: 0,
            backgroundColor: ["#225BF1", "#D0DCFC"],
            lineTension: 0,
            data: [73, 27],
            fill: true,
          },
        ],
      },
      options: {
        title: {
          display: !1,
        },
        tooltips: { enabled: false },

        legend: {
          display: !1,
        },
        responsive: !0,
        maintainAspectRatio: !1,
        hover: {
          mode: "null",
          display: !1,
        },
        scales: {
          xAxes: [
            {
              display: !1,
              gridLines: !1,
              scaleLabel: {
                display: !0,
                labelString: "Month",
              },
            },
          ],
          yAxes: [
            {
              display: !1,
              gridLines: !1,
              scaleLabel: {
                display: !0,
                labelString: "Value",
              },
              ticks: {
                beginAtZero: !0,
              },
            },
          ],
        },
        elements: {
          point: {
            radius: 0,
            borderWidth: 0,
          },
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 5,
            bottom: 0,
          },
        },
      },
      canvasData: [],
    };
  },
  mounted() {
    this.renderChart(this.chartdata, this.options);
    this.canvasData = document.querySelectorAll("#pieChart canvas");
    for (let i = 0; i < this.canvasData.length; i++) {
      const element = this.canvasData[i];
      element.style.height = "170px";
      element.style.width = "170px";
    }
    for (let i = 0; i < document.querySelectorAll("#pieChart").length; i++) {
      const element = document.querySelectorAll("#pieChart")[i];
      element.style.width = "170px";
    }
  },
  updated() {
    this.canvasData = document.querySelectorAll("#pieChart canvas");
    for (let i = 0; i < this.canvasData.length; i++) {
      const element = this.canvasData[i];
      element.style.height = "170px";
      element.style.width = "170px";
    }
    for (let i = 0; i < document.querySelectorAll("#pieChart").length; i++) {
      const element = document.querySelectorAll("#pieChart")[i];
      element.style.width = "170px";
    }
  },
};
</script>
