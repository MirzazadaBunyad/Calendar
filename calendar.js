const calendarContainer = document.getElementById("calendar");
const monthYearElement = document.getElementById("month-year");

const currentDate = new Date();

function generateCalendar() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthName = new Intl.DateTimeFormat("us-US", {
    month: "long",
  }).format(currentDate);
  monthYearElement.textContent = `${monthName} ${year}`;

  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  for (let i = 1; i <= totalDays; i++) {
    const dayElement = document.createElement("div");
    dayElement.classList.add("day");
    dayElement.textContent = i;
    if (
      i === currentDate.getDate() &&
      month === currentDate.getMonth() &&
      year === currentDate.getFullYear()
    ) {
      dayElement.classList.add("today");
    }
    calendarContainer.appendChild(dayElement);
  }
}

function nextMonth() {
  currentDate.setMonth(currentDate.getMonth() + 1);
  generateCalendar();
}

generateCalendar();