function myFunction() {
    var element = document.getElementById("fluentOS");
    element.classList.toggle("layers");
  }
  
  var d = new Date();
  var min = d.getMinutes().toString().padStart(2, "0");
  var hr = d.getHours();
  var day = d.getDate();
  var month = d.getMonth().toString().padStart(2, "0");
  var year = d.getFullYear();
  
  var time = document.getElementById("time");
  var date = document.getElementById("date");
  time.innerHTML = hr + ":" + min;
  date.innerHTML = day + "/" + month + "/" + year;
  