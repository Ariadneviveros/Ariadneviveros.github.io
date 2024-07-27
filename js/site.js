window.addEventListener("scroll", fixPhoOnScroll, false);

function showImage(image){
    var newImage = document.createElement('img');
    newImage.src = image.src;
    newImage.removeAttribute('onclick');
    var modal = document.getElementById('preview');
    modal.classList.toggle('showModal');
    modal.appendChild(newImage);
 }
 function toggleMenu(){
    var button = document.querySelector('.gg-menu-oreos');
    button.classList.toggle('gg-close');

    var menu = document.getElementsByClassName('js-menu');
    menu[0].classList.toggle("active");

 }
 function fixPhoOnScroll(){
    var photo = document.getElementById("photo-profile");
    this.scrollY > 50 ? photo.style.marginTop = 0 :photo.style.marginTop = '-7rem';
   /* if(this.scrollY > 50){
      photo.style.marginTop = 0;
    }
    else{
      photo.style.marginTop = '-7rem';
    }*/
 }
 window.addEventListener("scroll", fixPhoOnScroll, false);

 function showImage(image){
   var newImage = document.createElement('img');
   newImage.src = image.src;
   newImage.removeAttribute('onclick');
   var modal = document.getElementById('preview');
   modal.classList.toggle('showModal');
   var existingImage = modal.querySelector('img');
   if (existingImage) {
      modal.removeChild(existingImage);
   }
   modal.appendChild(newImage);
 }
 function closeModal() {
   var modal = document.getElementById('preview');
   modal.classList.remove('ShowModal');
}
