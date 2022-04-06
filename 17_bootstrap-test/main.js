var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

const emailInputEl = document.querySelector("#exampleInputEmail1");
const modalEl = document.querySelector("#exampleModal");

modalEl.addEventListener('shown.bs.modal', function(){
  emailInputEl.focus();
});