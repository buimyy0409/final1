
const receiptList = [];
const addReceipt = () => {
    const receiptName = document.getElementById('receipt').value.trim();
    const receiptCost = parseFloat(document.getElementById('receipt-cost').value);
    if (receiptName && !isNaN(receiptCost) && receiptCost > 0) {
        const newReceipt = { name: receiptName, cost: receiptCost };
        receiptList.push(newReceipt);
        document.getElementById('receipt').value = '';
        document.getElementById('receipt-cost').value = '';
        updateReceiptTable();
    } else {
      alert("Please enter valid Receipt Name and Cost.");
   }
}
const updateReceiptTable = () => {
    const tableElement = document.getElementById('receipt-table');
    while (tableElement.firstChild) {
       tableElement.removeChild(tableElement.firstChild);
   }
   const headerRow= document.createElement('tr');
   const nameHeader= createTableCellReceipt('th', 'Receipt Name');
   const costHeader= createTableCellReceipt('th', 'Cost');
 	headerRow.append(nameHeader, costHeader);
    //  headerRow.setAttribute('style','padding:20px;')
	tableElement.appendChild(headerRow);
	for (let i = 0; i < receiptList.length; i++) {
	   	const row= document.createElement('tr');
	   	const nameCell= createTableCellReceipt('td', receiptList[i].name);
	   	const costCell=createTableCellReceipt( 'td', '$' + parseFloat(receiptList[i].cost).toFixed(2));

	  	row.append(nameCell,costCell );
	 	tableElement.appendChild(row); 
        tableElement.setAttribute('style','text-align:center;')

	}
	updateTotalAmountReceipt();
}
const createTableCellReceipt = (elementType, textContent) => {
     const cell= document.createElement(elementType);
     cell.textContent=textContent;
     return cell;
}
const updateTotalAmountReceipt = () => {
    let totalAmount = 0;
	for(let i = 0; i < receiptList.length; i++){
   		totalAmount += parseFloat(receiptList[i].cost);
	}
	document.getElementById("total-receipt").textContent = totalAmount.toFixed(2);
}
const paymentInput = document.getElementById('payment');
const costInput = document.getElementById('cost');
const paymentList = [];
const addPayment = () => {
    const paymentName = document.getElementById('payment').value.trim();
    const paymentCost = parseFloat(document.getElementById('payment-cost').value);
    if (paymentName && !isNaN(paymentCost) && paymentCost > 0) {
        const newPayment = { name: paymentName, cost: paymentCost };
        paymentList.push(newPayment);
        document.getElementById('payment').value = '';
        document.getElementById('payment-cost').value = '';
        updatePaymentTable();
    } else {
      alert("Please enter valid Payment Name and Cost.");
   }
}
const updatePaymentTable = () => {
    const tableElement = document.getElementById('payment-table');
    while (tableElement.firstChild) {
       tableElement.removeChild(tableElement.firstChild);
   }
   const headerRow= document.createElement('tr');
   const nameHeader= createTableCellPayment('th', 'Payment Name');
   const costHeader=createTableCellPayment('th', 'Cost');
 	headerRow.append(nameHeader, costHeader);
	tableElement.appendChild(headerRow);
	for (let i = 0; i < paymentList.length; i++) {
	   	const row= document.createElement('tr');
	   	const nameCell= createTableCellPayment('td', paymentList[i].name);
	   	const costCell=createTableCellPayment( 'td', '$' + parseFloat(paymentList[i].cost).toFixed(2));

	  	row.append(nameCell,costCell );
	 	tableElement.appendChild(row); 
	}
	updateTotalAmountPayment();
}
const createTableCellPayment = (elementType, textContent) => {
     const cell= document.createElement(elementType);
     cell.textContent=textContent;
     return cell;
}
const updateTotalAmountPayment = () => {
    let totalAmount = 0;
	for(let i = 0; i < paymentList.length; i++){
   		totalAmount += parseFloat(paymentList[i].cost);
	}
	document.getElementById("total-payment").textContent = totalAmount.toFixed(2);
}
$('button').click(function(){
    $('.alert').addClass("show");
    $('.alert').removeClass("hide");
    $('.alert').addClass("showAlert");
    setTimeout(function(){
      $('.alert').removeClass("show");
      $('.alert').addClass("hide");
    },5000);
  });
  $('.close-btn').click(function(){
    $('.alert').removeClass("show");
    $('.alert').addClass("hide");
  });
  function CalendarControl() {
    const calendar = new Date();
    const calendarControl = {
      localDate: new Date(),
      prevMonthLastDate: null,
      calWeekDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      calMonthName: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      daysInMonth: function (month, year) {
        return new Date(year, month, 0).getDate();
      },
      firstDay: function () {
        return new Date(calendar.getFullYear(), calendar.getMonth(), 1);
      },
      lastDay: function () {
        return new Date(calendar.getFullYear(), calendar.getMonth() + 1, 0);
      },
      firstDayNumber: function () {
        return calendarControl.firstDay().getDay() + 1;
      },
      lastDayNumber: function () {
        return calendarControl.lastDay().getDay() + 1;
      },
      getPreviousMonthLastDate: function () {
        let lastDate = new Date(
          calendar.getFullYear(),
          calendar.getMonth(),
          0
        ).getDate();
        return lastDate;
      },
      navigateToPreviousMonth: function () {
        calendar.setMonth(calendar.getMonth() - 1);
        calendarControl.attachEventsOnNextPrev();
      },
      navigateToNextMonth: function () {
        calendar.setMonth(calendar.getMonth() + 1);
        calendarControl.attachEventsOnNextPrev();
      },
      navigateToCurrentMonth: function () {
        let currentMonth = calendarControl.localDate.getMonth();
        let currentYear = calendarControl.localDate.getFullYear();
        calendar.setMonth(currentMonth);
        calendar.setYear(currentYear);
        calendarControl.attachEventsOnNextPrev();
      },
      displayYear: function () {
        let yearLabel = document.querySelector(".calendar .calendar-year-label");
        yearLabel.innerHTML = calendar.getFullYear();
      },
      displayMonth: function () {
        let monthLabel = document.querySelector(
          ".calendar .calendar-month-label"
        );
        monthLabel.innerHTML = calendarControl.calMonthName[calendar.getMonth()];
      },
      selectDate: function (e) {
        console.log(
          `${e.target.textContent} ${
            calendarControl.calMonthName[calendar.getMonth()]
          } ${calendar.getFullYear()}`
        );
      },
      plotSelectors: function () {
        document.querySelector(
          ".calendar"
        ).innerHTML += `<div class="calendar-inner"><div class="calendar-controls">
          <div class="calendar-prev"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path fill="#666" d="M88.2 3.8L35.8 56.23 28 64l7.8 7.78 52.4 52.4 9.78-7.76L45.58 64l52.4-52.4z"/></svg></a></div>
          <div class="calendar-year-month">
          <div class="calendar-month-label"></div>
          <div>-</div>
          <div class="calendar-year-label"></div>
          </div>
          <div class="calendar-next"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path fill="#666" d="M38.8 124.2l52.4-52.42L99 64l-7.77-7.78-52.4-52.4-9.8 7.77L81.44 64 29 116.42z"/></svg></a></div>
          </div>
          <div class="calendar-today-date">Today: 
            ${calendarControl.calWeekDays[calendarControl.localDate.getDay()]}, 
            ${calendarControl.localDate.getDate()}, 
            ${calendarControl.calMonthName[calendarControl.localDate.getMonth()]} 
            ${calendarControl.localDate.getFullYear()}
          </div>
          <div class="calendar-body"></div></div>`;
      },
      plotDayNames: function () {
        for (let i = 0; i < calendarControl.calWeekDays.length; i++) {
          document.querySelector(
            ".calendar .calendar-body"
          ).innerHTML += `<div>${calendarControl.calWeekDays[i]}</div>`;
        }
    },
    plotDates: function () {
      document.querySelector(".calendar .calendar-body").innerHTML = "";
      calendarControl.plotDayNames();
      calendarControl.displayMonth();
      calendarControl.displayYear();
      let count = 1;
      let prevDateCount = 0;

      calendarControl.prevMonthLastDate = calendarControl.getPreviousMonthLastDate();
      let prevMonthDatesArray = [];
      let calendarDays = calendarControl.daysInMonth(
        calendar.getMonth() + 1,
        calendar.getFullYear()
      );
      for (let i = 1; i < calendarDays; i++) {
        if (i < calendarControl.firstDayNumber()) {
          prevDateCount += 1;
          document.querySelector(
            ".calendar .calendar-body"
          ).innerHTML += `<div class="prev-dates"></div>`;
          prevMonthDatesArray.push(calendarControl.prevMonthLastDate--);
        } else {
          document.querySelector(
            ".calendar .calendar-body"
          ).innerHTML += `<div class="number-item" data-num=${count}><a class="dateNumber" href="#">${count++}</a></div>`;
        }
      }
      for (let j = 0; j < prevDateCount + 1; j++) {
        document.querySelector(
          ".calendar .calendar-body"
        ).innerHTML += `<div class="number-item" data-num=${count}><a class="dateNumber" href="#">${count++}</a></div>`;
      }
      calendarControl.highlightToday();
      calendarControl.plotPrevMonthDates(prevMonthDatesArray);
      calendarControl.plotNextMonthDates();
    },
    attachEvents: function () {
      let prevBtn = document.querySelector(".calendar .calendar-prev a");
      let nextBtn = document.querySelector(".calendar .calendar-next a");
      let todayDate = document.querySelector(".calendar .calendar-today-date");
      let dateNumber = document.querySelectorAll(".calendar .dateNumber");
      prevBtn.addEventListener(
        "click",
        calendarControl.navigateToPreviousMonth
      );
      nextBtn.addEventListener("click", calendarControl.navigateToNextMonth);
      todayDate.addEventListener(
        "click",
        calendarControl.navigateToCurrentMonth
      );
      for (var i = 0; i < dateNumber.length; i++) {
          dateNumber[i].addEventListener(
            "click",
            calendarControl.selectDate,
            false
          );
      }
    },
    highlightToday: function () {
      let currentMonth = calendarControl.localDate.getMonth() + 1;
      let changedMonth = calendar.getMonth() + 1;
      let currentYear = calendarControl.localDate.getFullYear();
      let changedYear = calendar.getFullYear();
      if (
        currentYear === changedYear &&
        currentMonth === changedMonth &&
        document.querySelectorAll(".number-item")
      ) {
        document
          .querySelectorAll(".number-item")
          [calendar.getDate() - 1].classList.add("calendar-today");
      }
    },
    plotPrevMonthDates: function(dates){
      dates.reverse();
      for(let i=0;i<dates.length;i++) {
          if(document.querySelectorAll(".prev-dates")) {
              document.querySelectorAll(".prev-dates")[i].textContent = dates[i];
          }
      }
    },
    plotNextMonthDates: function(){
     let childElemCount = document.querySelector('.calendar-body').childElementCount;
     if(childElemCount > 42 ) {
         let diff = 49 - childElemCount;
         calendarControl.loopThroughNextDays(diff);
     }
     if(childElemCount > 35 && childElemCount <= 42 ) {
      let diff = 42 - childElemCount;
      calendarControl.loopThroughNextDays(42 - childElemCount);
     }
    },
    loopThroughNextDays: function(count) {
      if(count > 0) {
          for(let i=1;i<=count;i++) {
              document.querySelector('.calendar-body').innerHTML += `<div class="next-dates">${i}</div>`;
          }
      }
    },
    attachEventsOnNextPrev: function () {
      calendarControl.plotDates();
      calendarControl.attachEvents();
    },
    init: function () {
      calendarControl.plotSelectors();
      calendarControl.plotDates();
      calendarControl.attachEvents();
    }
  };
  calendarControl.init();
}
const calendarControl = new CalendarControl();
let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");
let progressStartValue = 0,    
    progressEndValue = 90,    
    speed = 100;
let progress = setInterval(() => {
    progressStartValue++;
    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`
    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }    
}, speed);