var modal = document.getElementById("modal_id");


var imgs = document.getElementsByClassName("img-responsive");
var modalImg = document.getElementById("modal_img");
var captionText = document.getElementById("caption");

for (var i = 0; i < imgs.length; i++) {
    imgs[i].onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}
        

var span = document.getElementsByClassName("close")[0];


span.onclick = function() { 
  modal.style.display = "none";
}