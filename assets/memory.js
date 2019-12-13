$(document).ready(function() {
    $(".saveBtn").on("click", function() {
      let clickID = $(this).attr("id");
      let textID;
      switch (clickID) {
        case "09AMsave":
          textID = $("#09AM").val();
          localStorage.setItem("09AMinput", textID);
          break;
        case "10AMsave":
          textID = $("#10AM").val();
          localStorage.setItem("10AMinput", textID);
          break;
        case "11AMsave":
          textID = $("#11AM").val();
          localStorage.setItem("11AMinput", textID);
          break;
        case "12PMsave":
          textID = $("#12PM").val();
          localStorage.setItem("12PMinput", textID);
          break;
        case "01PMsave":
          textID = $("#01PM").val();
          localStorage.setItem("01PMinput", textID);
          break;
        case "02PMsave":
          textID = $("#02PM").val();
          localStorage.setItem("02PMinput", textID);
          break;
        case "03PMsave":
          textID = $("#03PM").val();
          localStorage.setItem("03PMinput", textID);
          break;
        case "04PMsave":
          textID = $("#04PM").val();
          localStorage.setItem("04PMinput", textID);
          break;
        case "05PMsave":
          textID = $("#05PM").val();
          localStorage.setItem("05PMinput", textID);
      }
    });
  
    function loadScheduleData() {
      $("#09AM").text(localStorage.getItem("09AMinput"));
      $("#10AM").text(localStorage.getItem("10AMinput"));
      $("#11AM").text(localStorage.getItem("11AMinput"));
      $("#12PM").text(localStorage.getItem("12PMinput"));
      $("#01PM").text(localStorage.getItem("01PMinput"));
      $("#02PM").text(localStorage.getItem("02PMinput"));
      $("#03PM").text(localStorage.getItem("03PMinput"));
      $("#04PM").text(localStorage.getItem("04PMinput"));
      $("#05PM").text(localStorage.getItem("05PMinput"));
    }
  
    loadScheduleData();
  });
  