/*// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // Add your form validation code here
  // Add your EmailJS integration code here
  var params = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById('email').value.trim(),
    message: document.getElementById('massage').value,
  };

// Initialize EmailJS

// Event listener for form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data


    // EmailJS details
    var service_id = 'service_t829qtd';
    var template_id = 'template_p99k6fo';
    var user_id = 'IVYAGipEG_H9Lzz00';  // Ensure you have your user ID here

    // Make the API request using fetch
    fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            service_id: service_id,
            template_id: template_id,
            user_id: user_id,
            template_params: params
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 200) {
            console.log('SUCCESS!', data.status, data.message);
            alert('Your message was sent successfully!');
        } else {
            console.log('FAILED...', data);
            alert('Failed to send your message. Please try again later.');
        }
    })
    .catch(error => {
        console.log('Error:', error);
        alert('Failed to send your message. Please try again later.');
    });
});

  
});
var i=0;
    var time=3000;
    const slide= document.getElementById('imageslider');
    const image=document.createElement('img');
    var image1=[];
    image1[0]= 'image1.jpeg';
    image1[1]= 'image2.jpeg';
    image1[2]= 'image3.jpeg';
    const para1= document.createElement('p');

    var text=[];
    text[0] = document.createTextNode('this was the website ,joe ed');
    text[1]=  document.createTextNode('this was the website 2 ,joe2 ed');
    text[2]= document.createTextNode('this was the website3 ,joe3 ed');
    
    slide.appendChild(image);
    slide.appendChild(para1);

function loadup(){
    para1.innerHTML=text[i];
    image.src= image1[i];
    if(i<text.length - 1){
        i++;
    }
    else{i=0;}
    setTimeout("loadup()",time);
}




*/






