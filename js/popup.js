var formLink = document.querySelector(".hotel-search-btn");
var formPopup = document.querySelector(".hotel-search");
var formForm = formPopup.querySelector("form");
var formDateVisit = formPopup.querySelector("[name=visit]");
var formDateDeparture = formPopup.querySelector("[name=departure]");
var formAdultsNumber = formPopup.querySelector("[name=adults-number]");
var formChildrenNumber = formPopup.querySelector("[name=children-number]");

formLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  formPopup.classList.toggle("hotel-search-show");
});

formForm.addEventListener("submit", function (evt) {
  if (!formDateVisit.value || !formDateDeparture.value || !formAdultsNumber.value || !formChildrenNumber.value) {
  evt.preventDefault();
  } 
});
