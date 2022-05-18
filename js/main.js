
var navbar = document.querySelector('.navbar_');

var menu = document.querySelector(".nav_btn");

var sideBar = document.querySelector(".side_bar");

var sideOn = false;

var close = document.querySelector(".close");

var tab1 = document.querySelector(".tabs1 a");
var tab2 = document.querySelector(".tabs2 a");
var tab3 = document.querySelector(".tabs3 a");
var tab4 = document.querySelector(".tabs4 a");

var tabview1 = document.querySelector(".tab1");
var tabview2 = document.querySelector(".tab2");
var tabview3 = document.querySelector(".tab3");
var tabview4 = document.querySelector(".tab4");



close.addEventListener("click", function(){

    sideBar.style.display = "none"; 
        sideOn = false;

        menu.style.visibility = "visible";

});

tab1.addEventListener("click", function(event){


    changeTab(1);

});

tab2.addEventListener("click", function(event){


    changeTab(2);

});

tab3.addEventListener("click", function(event){


    changeTab(3);

});

tab4.addEventListener("click", function(event){


    changeTab(4);

});




menu.addEventListener("click", function(){



    sideBar.style.transistion = "all  ease-in-out 1s";
        sideBar.style.display = "inline-flex";
        sideOn = true;
        this.style.visibility = "hidden";
        
    

  


});


function changeTab(index){


    if(index == 1){

        tabview1.style.display = "block";

        tab1.classList.add("active");


        // document.querySelector(".tabs2 a, .tabs3 a, .tabs4 a").classList.remove("active");

        if(tab2.classList.contains("active"))
        tab2.classList.remove("active")

        if(tab3.classList.contains("active"))
        tab3.classList.remove("active")

        if(tab4.classList.contains("active"))
        tab4.classList.remove("active")
        


        // document.querySelector(".tab2, .tab3, .tab4 ").style.display = "none";

        tabview2.style.display = "none";
        tabview3.style.display = "none"
        tabview4.style.display = "none"
        
        

    }else if(index == 2){

        tabview2.style.display = "block";

        tab2.classList.add("active");

        if(tab1.classList.contains("active"))
        tab1.classList.remove("active")

        if(tab3.classList.contains("active"))
        tab3.classList.remove("active")

        if(tab4.classList.contains("active"))
        tab4.classList.remove("active")

        

        tabview1.style.display = "none";
        tabview3.style.display = "none"
        tabview4.style.display = "none"
        

        

    }else if(index == 3){

        tabview3.style.display = "block";

        tab3.classList.add("active");

        if(tab1.classList.contains("active"))
        tab1.classList.remove("active")

        if(tab2.classList.contains("active"))
        tab2.classList.remove("active")

        if(tab4.classList.contains("active"))
        tab4.classList.remove("active")


        

        tabview2.style.display = "none";
        tabview1.style.display = "none"
        tabview4.style.display = "none"
        
        

    }else{

        tabview4.style.display = "block";

        

        tab4.classList.add("active");

        if(tab2.classList.contains("active"))
        tab2.classList.remove("active")

        if(tab3.classList.contains("active"))
        tab3.classList.remove("active")

        if(tab1.classList.contains("active"))
        tab1.classList.remove("active")


        

        tabview2.style.display = "none";
        tabview3.style.display = "none"
        tabview1.style.display = "none"

        
        
        

    }


}


window.onscroll = function(){fixNav()};



function fixNav(){

    if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
        
        
            navbar.style.position = "fixed";
            navbar.style.backgroundColor = "black";
            navbar.style.zIndex = '990';
            navbar.style.opacity = '0.9';
        
        
    }
    else{
        navbar.style.position = "relative";
        navbar.style.opacity = '1';
    }
       
}

