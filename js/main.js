var elBtn = document.querySelector(".box__btn_one");
var elBtnTwo = document.querySelector(".box__btn_two");
var elBtnThri = document.querySelector(".box__btn_thri");

var elList = document.querySelector(".enjoy__item_one");
var elListTwo = document.querySelector(".enjoy__item_two");
var elListThri = document.querySelector(".enjoy__item_thri");

elBtn.addEventListener("click", function(){
  elList.classList.add("enjoy__blue");
  elListTwo.classList.remove("enjoy__blue");
  elListThri.classList.remove("enjoy__blue");
})

elBtnTwo.addEventListener("click", function(){
  elListTwo.classList.add("enjoy__blue");
  elList.classList.remove("enjoy__blue");
  elListThri.classList.remove("enjoy__blue");
})

elBtnThri.addEventListener("click", function(){
  elListThri.classList.add("enjoy__blue");
  elList.classList.remove("enjoy__blue");
  elListTwo.classList.remove("enjoy__blue");
})