const aims = [];

function addAim() {
    const aimInput = document.getElementById("aim-input");
  
    if (!aimInput.value) {
        alert("Please enter a valid amount.");
        return; // Exit the function if no value is entered.
    }
  
    const aimAmount = parseFloat(aimInput.value);
    
    aims.push(aimAmount);
  
    updateAimsList();
    
    aimInput.value = ""; // Clear the input field after adding an aim.
}

function updateAimsList() {
    const aimsList = document.getElementById("aims-list");
    aimsList.innerHTML = ""; // Clear previous list items
  
    if (aims.length === 0) {
        const noAimsItem = document.createElement("li");
        noAimsItem.textContent = "No Aims added yet.";
        aimsList.appendChild(noAimsItem);
    } else {
        for (let i = 0; i < aims.length; i++) {
            const aimItem = document.createElement("li");
            aimItem.textContent = "Aiming Money: $" + parseFloat(aims[i]);
            aimsList.appendChild(aimItem);
        }
    }
}