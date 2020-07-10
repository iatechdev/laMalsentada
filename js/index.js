
var burger = document.querySelector(".burger");
var navLinks = document.querySelector(".nav-links");
var navLinks_ = document.querySelectorAll(".nav-links li");
burger.onclick = () => {
    navLinks.classList.toggle("nav-clicked");

    navLinks_.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = "";
        } else {
            link.style.animation = `navLinkAnimation 0.001s ease forwards ${index/5+0.5}s`;
        }
    });
};


//-------------- SLIDER 1 -------------------------

const slider = document.querySelector(' .slider ');
var sectionIndex = 0;

document.querySelectorAll('.controls li').forEach(function(indicator, ind) {
    indicator.addEventListener('click', function() {
        sectionIndex = ind;
        document.querySelector('.controls .selected').classList.remove('selected');
        indicator.classList.add ('selected');
        slider.style.transform = 'translate(' + (ind) * -33.33 + '%)';    
    });
});


//-------------- SLIDER 1_Menú -------------------------


document.querySelectorAll('.controls_menu li').forEach(function(indicator, ind) {
    indicator.addEventListener('click', function() {
        sectionIndex = ind;
        document.querySelector('.controls_menu .selected').classList.remove('selected');
        indicator.classList.add ('selected');
        slider.style.transform = 'translate(' + (ind) * -33.33 + '%)';    
    });
});

//-------------- Show/hide class="container_two_one" -------------------------

var btnshow = document.getElementById('btnShow');
var cardshow = document.getElementById('cards');

btnshow.addEventListener("click", show);

function show(){
    console.log('hola')
    if (cardshow.style.display !== "flex"){
        cardshow.style.display = "flex";
    } else {
        cardshow.style.display = "none";
    }
};

//-------------- Increase/Decrease class="container_two_three" -------------------------
function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
  }
  
  function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
  }


  function increaseValueTwo() {
    var value = parseInt(document.getElementById('numbertwo').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('numbertwo').value = value;
  }
  
  function decreaseValueTwo() {
    var value = parseInt(document.getElementById('numbertwo').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('numbertwo').value = value;
  }



//-------------- open window" -------------------------


function abrir(){


    document.getElementById("vent").style.display="block";
    document.getElementById("distorsion").style.filter="blur(6px)";

   
}

function cerrar(){


    document.getElementById("vent").style.display="none";
    document.getElementById("distorsion").style.filter="none";
    

}

function transa(){
 document.getElementById("shopping-open").style.display="block";
 document.getElementById("shopping").style.display="none";
 document.getElementById("carrito").style.display="block";

}

function transaclose(){
    document.getElementById("shopping-open").style.display="none";
    document.getElementById("shopping").style.display="block";
    document.getElementById("carrito").style.display="none";
   
   }






