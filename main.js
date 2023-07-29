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
},850)


// ! Skills 
const skillList = document.querySelectorAll(".skills > li")
const hover = document.querySelector(".pointer")
skillList.forEach((skill)=>{
    skill.addEventListener("mouseover",()=>{
        hover.style.display="none"
    })
})
        console.log(skillList)
    //  hover.style.display="none"   


//  function sendEmail (){
//     console.log("it works")
//     var params={
//     from_name: document.getElementById("fullName").value,
//     message: document.getElementById("message").value,
//     email_id: document.getElementById("email").value
//         }
//         emailjs.send("service_e9dlam5","template_x6zsbs9",params).then(()=> alert("Send Successfully"))
//     }
const header= document.querySelector(".header-cont")    
const navCont= document.querySelector(".nav-container")    
const navUl= document.querySelector(".nav-container ul")    

 window.onscroll=(e)=>{
if (window.scrollY>=100){
    header.style.width= "50rem" 
    navCont.style.width= "15rem" 
    navUl.style.display= "none" 
    
} 
else{
    header.style.width="85%";
    navCont.style.width= "50rem" 
    navUl.style.display= "flex" 
    
}

// header.style.display= "none"

}