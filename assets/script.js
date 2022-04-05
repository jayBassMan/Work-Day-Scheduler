//current day is displayed at the top of the calendar.
$("#initial-time").text(moment().format("dddd MMMM Do YYYY"));

const save_btn = $(".save-btn");

//function

function timeColor() {
    //call function eachHour()
    eachHour();
}

save_btn.on("click", function () {
    const time = $(this).siblings(".hour").text();
    var schedule = $(this).siblings(".schedule").val();

    //Then the text for that event is saved in local storage
    localStorage.setItem(time, schedule);
});

function planner() {
    //call save() function
    save();
}

//write function to save to localstoage
function save() {
    $(".hour").each(function () {
        const hour = $(this).text();
        const schedule = localStorage.getItem(hour);

        if (schedule !== null) {
            $(this).siblings(".schedule").val(schedule);
        }
    });
}

//function eachHour() stored int function timeColor()
function eachHour() {
    const hour = moment().hours();

    $(".time-zone"),
        each(function () {
            var currentHour = parseInt($(this).attr("id"));
            if (currentHour > hour) {
                $(this).addClass("futureHendricks");
            } else if (currentHour === hour) {
                $(this), addClass("present");
            } else {
                $(this).addClass("past");
            }
        });
}

timeColor();
planner();
