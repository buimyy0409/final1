document.addEventListener("DOMContentLoaded", function() {
    var ctx = document.getElementById("chart").getContext("2d");
  
    var revenues = [5000, 7000, 6000, 8000];
    var expenses = [3000, 4000, 3500, 4500];
  
    var labels = ["Tuần 1", "Tuần 2", "Tuần 3", "Tuần 4"];
  
    var chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Thu",
            backgroundColor: "rgba(75,192,192,0.4)",
            data: revenues
          },
          {
            label: "Chi",
            backgroundColor: "rgba(255,99,132,0.4)",
            data: expenses
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              precision: 0,
              callback: function(value) {
                return "$" + value;
              }
            }
          }
        },
        responsive: true,
        maintainAspectRatio: false
      }
    });
  });