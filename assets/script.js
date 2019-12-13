$(document).ready(function() {
    let currentDate = moment().format("MMMM Do, YYYY");
    let currentTime = moment().format("hh:mm:ss A");
    let currentHour;
    const possibleHours = {
      before: [
        "12AM",
        "01AM",
        "02AM",
        "03AM",
        "04AM",
        "05AM",
        "06AM",
        "07AM",
        "08AM"
      ],
      business: [
        "09AM",
        "10AM",
        "11AM",
        "12PM",
        "01PM",
        "02PM",
        "03PM",
        "04PM",
        "05PM"
      ],
      after: ["06PM", "07PM", "08PM", "09PM", "10PM", "11PM"]
    };
  
    function init() {
      $("#date").text(currentDate);
      $("#time").text(currentTime);
      // Set colors based on current time
      timeColor();

      let currentTimer = setInterval(function() {
        currentDate = moment().format("MMMM Do, YYYY");
        $("#date").text(currentDate);
        currentTime = moment().format("hh:mm:ss A");
        $("#time").text(currentTime);
        timeColor();
      }, 1000);
    }
  
    function timeColor() {
      currentHour = moment().format("hhA");
      if (possibleHours.before.indexOf(currentHour) !== -1) {
        $(".hourNotes").css("background-color", "#fff");
      }
      if (possibleHours.after.indexOf(currentHour) !== -1) {
        $(".hourNotes").css("background-color", "#e9ecef");
      }
      if (possibleHours.business.indexOf(currentHour) !== -1) {
        $("#" + currentHour).css("background-color", "#b7d1e2");
        for (let i = 0; i < possibleHours.business.indexOf(currentHour); i++) {
          $("#" + possibleHours.business[i]).css("background-color", "#e9ecef");
        }
        for (
          let i = possibleHours.business.length - 1;
          i > possibleHours.business.indexOf(currentHour);
          i--
        ) {
          $("#" + possibleHours.business[i]).css("background-color", "#fff");
        }
      }
    }
  
    init();
  });
  