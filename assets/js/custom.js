    var body= document.querySelector("body")
    var main= document.querySelector("main")
    var btnOpen= document.querySelector("#btn-open")
    var btnClose= document.querySelector("#btn-close")
    var navMenu= document.querySelector("#nav-menu")
    var navTop= document.querySelector("#nav-top")
    var price= document.querySelectorAll(".price")
    var star= document.querySelectorAll(".star")
    

 

    btnOpen.addEventListener("click",function(){
     navMenu.classList.toggle('hidden')
     this.classList.add("hidden")    
    })

    btnClose.addEventListener("click",function(){
     navMenu.classList.toggle('hidden')
     btnOpen.classList.remove("hidden")    
    })

    window.addEventListener('scroll',function(){
        if (window.scrollY >= 50) {
            navTop.classList.add('shadow-lg')
        } else {
            navTop.classList.remove('shadow-lg')
        }
    })
        
var prices = ['34k','50k','54k','45k','30k','60k','55k','32k']
var stars = ['2','5','4','3','5','4','5','4','5','4','5','4']
 
    price.forEach((a,i) => {
        a.textContent = prices[i];
    })
 
 


  