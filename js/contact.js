function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}

  function sendmail(){
    var params = {
      name: document.getElementById("firstName").value , 
      email: document.getElementById("email").value , 
      phonenum: document.getElementById("mobile").value ,
      message: document.getElementById("Message").value 

    };
    const serviceID = "service_gunxsca";
    const templateID = "template_icsl76v";
  
    emailjs.send(serviceID , templateID , params)
    .then (
      res =>{
         document.getElementById("firstName").value  = "";
         document.getElementById("email").value  = "";
         document.getElementById("mobile").value = "";
         document.getElementById("Message").value = "";

         console.log(res);
         alert("your msg send successfully")
      }
    )
    .catch(err=>console.log(err))
  }


