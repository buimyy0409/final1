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