var elBtn = document.querySelector(".box__btn_one");
var elBtnTwo = document.querySelector(".box__btn_two");
var elBtnThri = document.querySelector(".box__btn_thri");

var elList = document.querySelector(".enjoy__item_one");
var elListTwo = document.querySelector(".enjoy__item_two");
var elListThri = document.querySelector(".enjoy__item_thri");

// Modal
var elModal = document.querySelector(".modal__show");
var elButton = document.querySelector(".drink__sub");
var ofBtn = document.querySelector(".modal__btn");

// drink
var elTitle = document.querySelector(".menu__title_one");
var elInfo = document.querySelector(".form__inner_one");

var elTitleTwo = document.querySelector(".menu__title_two");
var elInfoTwo = document.querySelector(".form__inner_two");

var elTitleThri = document.querySelector(".menu__title_thri");
var elInfoThri = document.querySelector(".form__inner_thri");

var elTitlefour = document.querySelector(".menu__title_four");
var elInfofour = document.querySelector(".form__inner_four");

var elTitlefive = document.querySelector(".menu__title_five");
var elInfofive = document.querySelector(".form__inner_five");

// Form title

var formTitl = document.querySelector(".form__title");
var spanOne = document.querySelector(".text__dark_one");

var elInfoTwo = document.querySelector(".form__inner_two");
var spanTwo = document.querySelector(".text__dark_two");

var elInfothri = document.querySelector(".form__inner_thri");
var spanthri = document.querySelector(".text__dark_thri");

var elInfofour = document.querySelector(".form__inner_four");
var spanfour = document.querySelector(".text__dark_four");

var elInfofive = document.querySelector(".form__inner_five");
var spanfive = document.querySelector(".text__dark_five");



elBtn.addEventListener("click", function(){
  elList.classList.add("enjoy__blue");
  elListTwo.classList.remove("enjoy__blue");
  elListThri.classList.remove("enjoy__blue");
});

elBtnTwo.addEventListener("click", function(){
  elListTwo.classList.add("enjoy__blue");
  elList.classList.remove("enjoy__blue");
  elListThri.classList.remove("enjoy__blue");
});

elBtnThri.addEventListener("click", function(){
  elListThri.classList.add("enjoy__blue");
  elList.classList.remove("enjoy__blue");
  elListTwo.classList.remove("enjoy__blue");
});

// drink

elTitle.addEventListener("click" , function(){
  elInfo.classList.toggle("form__inner_on");
});

elTitleTwo.addEventListener("click" , function(){
  elInfoTwo.classList.toggle("form__inner_on");
});

elTitleThri.addEventListener("click" , function(){
  elInfoThri.classList.toggle("form__inner_on");
});

elTitlefour.addEventListener("click" , function(){
  elInfofour.classList.toggle("form__inner_on");
});

elTitlefive.addEventListener("click" , function(){
  elInfofive.classList.toggle("form__inner_on");
});

// Modal

elButton.addEventListener("click", function(){
  elModal.classList.add("modal__show_on")
});

ofBtn.addEventListener("click", function(){
  elModal.classList.remove("modal__show_on")
});

// kk

elInfo.addEventListener( "click", function(evt) {
  var a =  evt.target.value;
  console.log(a);
  spanOne.textContent = a;
});

elInfoTwo.addEventListener( "click", function(evt) {
  var a =  evt.target.value;
  console.log(a);
  spanTwo.textContent = a;
});

elInfoThri.addEventListener( "click", function(evt) {
  var a =  evt.target.value;
  console.log(a);
  spanthri.textContent = a;
});

elInfofour.addEventListener( "click", function(evt) {
  var a =  evt.target.value;
  console.log(a);
  spanfour.textContent = a;
});

elInfofive.addEventListener( "click", function(evt) {
  var a =  evt.target.value;
  console.log(a);
  spanfive.textContent = a;
});

