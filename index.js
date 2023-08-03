const receiptList = [];

function addReceipt() {
    const receiptName = document.getElementById('receipt-name').value.trim();
    const receiptCost = parseFloat(document.getElementById('receipt-cost').value);

    if (receiptName && !isNaN(receiptCost) && receiptCost > 0) {
        const newReceipt = { name: receiptName, cost: receiptCost };
        receiptList.push(newReceipt);
        
        // Clear input fields after adding new receipt
        document.getElementById('receipt-name').value = '';
        document.getElementById('receipt-cost').value = '';

        updateReceiptTable();
    } else {
      alert("Please enter valid Receipt Name and Cost.");
   }
}

function updateReceiptTable() {
    const tableElement = document.getElementById('receipt-table');

    // Clear existing table
    while (tableElement.firstChild) {
       tableElement.removeChild(tableElement.firstChild);
   }

   // Create header row
   const headerRow= document.createElement('tr');
   const nameHeader= createTableCell('th', 'Receipt Name');
   const costHeader=createTableCell('th', 'Cost');

 	headerRow.append(nameHeader, costHeader);
	tableElement.appendChild(headerRow);

	// Create rows for each receipt in the list
	for (let i = 0; i < receiptList.length; i++) {
	   	const row= document.createElement('tr');
	   	const nameCell= createTableCell('td', receiptList[i].name);
	   	const costCell=createTableCell( 'td', '$' + parseFloat(receiptList[i].cost).toFixed(2));

	  	row.append(nameCell,costCell );
	 	tableElement.appendChild(row); 
	}
	
	updateTotalAmount();
	
}

function createTableCell(elementType, textContent) {
     const cell= document.createElement(elementType);
     cell.textContent=textContent;
     return cell;
}

function updateTotalAmount() {
    let totalAmount = 0;

	for(let i = 0; i < receiptList.length; i++){
   		totalAmount += parseFloat(receiptList[i].cost);
	}
	document.getElementById("total-receipt").textContent = totalAmount.toFixed(2);
}


const paymentInput = document.getElementById('payment');
const costInput = document.getElementById('cost');
const tableBody = document.getElementById('table-body');
const tableFoot = document.getElementById('table-foot');

let totalPayment = 0;

function addPayment() {
    const paymentValue = paymentInput.value.trim();
    const costValue = parseFloat(costInput.value);

    if (paymentValue && !isNaN(costValue) && costValue > 0) {
        totalPayment += costValue;

        const newRow = document.createElement("tr");

        const paymentCell = document.createElement("td");
        paymentCell.textContent= paymentValue;

        const costCell= document.createElement("td");
        costCell.textContent= "$" + costValue.toFixed(2);

        newRow.appendChild(paymentCell);
        newRow.appendChild(costCell);

        tableBody.appendChild(newRow);

       updateTotal();

       // Clear input fields after adding a new row
       paymentInput.value="";
       costInput.value="";

   } else {
      alert("Please enter a valid Payment and Cost.");
   }
}

function updateTotal() {
   tableFoot.innerHTML= "";

   const totalRow= document.createElement("tr");

   const emptyCell=document.createElement("td");

   const totalLabel=document.createElement("td");
   totalLabel.textContent="Total:";

   const totalAmount=document.createElement("td");
  
	totalAmount.textContent="$"+totalPayment.toFixed(2);
 
 	totalRow.append(emptyCell, totalLabel, totalAmount)

	tableFoot.append(totalRow);	
}
document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById("chart").getContext("2d");
  
    const revenues = [5000, 7000, 6000, 8000];
    const expenses = [3000, 4000, 3500, 4500];
  
    const labels = ["Tuần 1", "Tuần 2", "Tuần 3", "Tuần 4"];
  
    const chart = new chart(ctx, {
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
function drawChart(incomePercentage, expensePercentage) {
    const chartContainer = document.getElementById("chartContainer");
  
    const incomeAngle = (incomePercentage / 100) * 360;
    const expenseAngle = (expensePercentage / 100) * 360;
  
    const incomeElement = document.createElement("div");
    incomeElement.className = "circle income";
    incomeElement.style.backgroundImage = `linear-gradient(90deg, #00cc00 ${incomeAngle}deg, transparent 0)`;
    
    const expenseElement = document.createElement("div");
    expenseElement.className = "circle expense";
    expenseElement.style.backgroundImage = `linear-gradient(90deg, #ff0000 ${expenseAngle}deg, transparent 0)`;
  
    chartContainer.appendChild(incomeElement);
    chartContainer.appendChild(expenseElement);
  }
  
  // Sử dụng dữ liệu liên kết từ trước
  const incomePercentage = 60; // Phần trăm thu nhập
  const expensePercentage = 40; // Phần trăm chi tiêu
  
  drawChart(incomePercentage, expensePercentage);
