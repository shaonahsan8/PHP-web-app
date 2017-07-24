function setDate() {
    var x = document.getElementById("myLocalDate").value;
  //  var x = new Date(new Date().getTime()).toLocaleString();
    document.getElementById("current-date").innerHTML = x;
}
