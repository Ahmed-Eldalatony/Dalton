function sendEmail (){
    console.log("it works")
    var params={
    from_name: document.getElementById("fullName").value,
    message: document.getElementById("message").value,
    email_id: document.getElementById("email").value
    }
 emailjs.send("service_e9dlam5","template_x6zsbs9",params).then(()=> alert("Send Successfully"))
}

