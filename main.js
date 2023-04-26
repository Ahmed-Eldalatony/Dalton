let mode = document.querySelector(".mode")
let sudo=document.querySelectorAll(".sudo")
// let dynamicIsland = document.querySelector(".nav-cobtn-contntainer")
let glassF=document.querySelectorAll(".glass-f")
let navContainer = document.querySelector(".nav-container nav")
let btnCont = document.querySelector(".btn-cont .btn")
let lis = document.querySelectorAll("header nav ul li")
mode.addEventListener("click",function(){
    console.log(mode)
    sudo.forEach((el)=>{
        el.classList.toggle("light-on")
    
        glassF.forEach(ele=>{
            if(el.classList.contains("light-on")){
                ele.style.boxShadow="0 0px 1.5rem var(--primary-color);"
            }
        else{
            ele.style.boxShadow="0 0 0 0 ;"
            // navContainer.style.boxShadow="0 0 0 0"
    
            }
        })
            // btnCont.style.boxShadow="0 0px 1.5rem var(--primary-color)"
            //  navContainer.style.boxShadow="0 0px 1.5rem var(--primary-color)"
    })
})

setTimeout(() => {
    
    lis.forEach(el=>el.style.display="block")
},900)
let loadingSc= document.querySelector(".loading-s")
let loadingItem= document.querySelector(".loading-i")


let footer= document.querySelector("footer") 
let wrapper= document.querySelector(".wrapper")

setTimeout(() => {
    
   wrapper.style.display="block"
},1200)



