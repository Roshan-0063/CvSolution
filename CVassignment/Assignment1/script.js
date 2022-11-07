function addTop() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = "";
    cell2.innerHTML = "Alex";
    cell3.innerHTML = "Adam";
    cell4.innerHTML = "LA";
    cell5.innerHTML = "USA";
  }
  function addBottom() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = "";
    cell2.innerHTML = "Virat";
    cell3.innerHTML = "Sharma";
    cell4.innerHTML = "Delhi";
    cell5.innerHTML = "India";
  }