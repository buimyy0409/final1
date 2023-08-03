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