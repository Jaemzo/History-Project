var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var modalContent = document.querySelector(".modal-content");

window.onclick = function (event) {
  if (event.target === modal) modal.style.display = "none";
  if (event.target === modal2) modal2.style.display = "none";
};


btn.addEventListener("click", function (event) {
  event.preventDefault();
  modal.style.display = "block";
});

btn2.addEventListener("click", function (event) {
  event.preventDefault();
  modal2.style.display = "block";
});

span.onclick = function () {
  modal.style.display = "none";
};


