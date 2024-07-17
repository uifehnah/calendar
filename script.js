document.addEventListener('DOMContentLoaded', function() {
    const addClassButton = document.getElementById('addClassButton');
    const classModal = document.getElementById('classModal');
    const closeModal = document.getElementsByClassName('close')[0];
    const classForm = document.getElementById('classForm');
    const calendarGrid = document.getElementById('calendarGrid');

    addClassButton.onclick = function() {
        classModal.style.display = 'block';
    }

    closeModal.onclick = function() {
        classModal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == classModal) {
            classModal.style.display = 'none';
        }
    }

    classForm.onsubmit = function(event) {
        event.preventDefault();
        const className = document.getElementById('className').value;
        const classDay = document.getElementById('classDay').value;
        const classTime = document.getElementById('classTime').value;

        addClassToCalendar(className, classDay, classTime);
        classModal.style.display = 'none';
    }

    function addClassToCalendar(className, classDay, classTime) {
        const dayIndex = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].indexOf(classDay);
        const timeIndex = parseInt(classTime.split(':')[0]) - 8;

        if (dayIndex >= 0 && timeIndex >= 0 && timeIndex < 12) {
            const classEntry = document.createElement('div');
            classEntry.className = 'class-entry';
            classEntry.innerText = `${className}\n${classTime}`;

            const gridCellIndex = timeIndex * 7 + dayIndex;
            calendarGrid.children[gridCellIndex].appendChild(classEntry);
        }
    }

    function createCalendarGrid() {
        const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        daysOfWeek.forEach(day => {
            const dayLabel = document.createElement('div');
            dayLabel.className = 'day-label';
            dayLabel.innerText = day;
            calendarGrid.appendChild(dayLabel);
        });

        for (let i = 0; i < 84; i++) {
            const gridCell = document.createElement('div');
            gridCell.className = 'time-slot';
            calendarGrid.appendChild(gridCell);
        }
    }

    createCalendarGrid();
});