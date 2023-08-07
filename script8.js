var goals = [];

function addGoal() {
   var goalInput = document.getElementById("goal-input").value;

   // Add goal to array
   goals.push(goalInput);

   // Clear input field after adding a goal
   document.getElementById("goal-input").value = "";

   // Update goals list display
   updateGoalsList();
}

function updateGoalsList() {
     var goalsHtml = "<ul>";
   
     for(var i=0; i<goals.length; i++) {
         goalsHtml += "<li>" + "Aiming Money: $" + parseInt(goals[i]) + "</li>";
     }
   
     if(goals.length === 0) {
         goalsHtml += "<li>No Goals added yet.</li>";
     }
   
     goalsHtml += "</ul>";

   // Display goals list on page    
   document.getElementById("goals-list").innerHTML = goalsHtml;
}