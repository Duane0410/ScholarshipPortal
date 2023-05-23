function search() {
  // Declare variables
  var input, filter, scholarship, i, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  scholarship= document.getElementsByClassName('scholarship');
  message= document.getElementsByClassName('no-scholarships');
  // Loop through all 
  for (i = 0; i < scholarship.length; i++) {
    if (scholarship[i]) {
      txtValue = scholarship[i].textContent || scholarship[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        scholarship[i].style.display = "";
      } else {
        scholarship[i].style.display = "none";

      }
    }
  }

}

