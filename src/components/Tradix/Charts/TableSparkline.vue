<script>
import { Line } from "vue-chartjs";

export default {
  name: "TableSparkline",
  extends: Line,
  props: {
    color: Boolean,
  },
  data() {
    return {
      chartdata: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
        ],

        datasets: [
          {
            label: "Sales Stats",
            borderColor:
              this.color === 1
                ? "rgba(114, 113, 229,1)"
                : "rgba(48, 46, 184,1)",
            borderWidth: 2,
            borderRadius: 0,
            backgroundColor:
              this.color === 1
                ? "rgba(114, 113, 229,.7)"
                : "rgba(48, 46, 184,.7)",
            lineTension: 0,
            data: [10, 30, 20, 40, 30, 40, 30, 50, 35],
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
    this.canvasData = document.querySelectorAll("#sparkLink canvas");
    for (let i = 0; i < this.canvasData.length; i++) {
      const element = this.canvasData[i];
      element.style.height = "25px";
      element.style.width = "200px";
    }
    for (let i = 0; i < document.querySelectorAll("#sparkLink").length; i++) {
      const element = document.querySelectorAll("#sparkLink")[i];
      element.style.width = "200px";
    }
  },
  updated() {
    this.canvasData = document.querySelectorAll("#sparkLink canvas");
    for (let i = 0; i < this.canvasData.length; i++) {
      const element = this.canvasData[i];
      element.style.height = "25px";
      element.style.width = "200px";
    }
    for (let i = 0; i < document.querySelectorAll("#sparkLink").length; i++) {
      const element = document.querySelectorAll("#sparkLink")[i];
      element.style.width = "200px";
    }
  },
};
</script>
