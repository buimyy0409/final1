function drawChart(incomePercentage, expensePercentage) {
    var chartContainer = document.getElementById("chartContainer");
  
    var incomeAngle = (incomePercentage / 100) * 360;
    var expenseAngle = (expensePercentage / 100) * 360;
  
    var incomeElement = document.createElement("div");
    incomeElement.className = "circle income";
    incomeElement.style.backgroundImage = `linear-gradient(90deg, #00cc00 ${incomeAngle}deg, transparent 0)`;
    
    var expenseElement = document.createElement("div");
    expenseElement.className = "circle expense";
    expenseElement.style.backgroundImage = `linear-gradient(90deg, #ff0000 ${expenseAngle}deg, transparent 0)`;
  
    chartContainer.appendChild(incomeElement);
    chartContainer.appendChild(expenseElement);
  }
  
  // Sử dụng dữ liệu liên kết từ trước
  var incomePercentage = 60; // Phần trăm thu nhập
  var expensePercentage = 40; // Phần trăm chi tiêu
  
  drawChart(incomePercentage, expensePercentage);