var elModalOpenButton1 = document.querySelector(".header-end__last-link");
var elModalOpenButton2 = document.querySelector(".faq-s1__button");
var elModal = document.querySelector(".modal");

elModalOpenButton1.addEventListener("click", function(){
  elModal.classList.add("modal-show");
})

elModalOpenButton2.addEventListener("click", function(){
  elModal.classList.add("modal-show");
})


var elModalCloseButton = document.querySelector(".modal-close-button");

elModalCloseButton.addEventListener("click" , function (){
  elModal.classList.remove("modal-show");
})