

const firebaseConfig = {
    apiKey: "AIzaSyBXkKZ5J9mNDUPmoodqf3RMfasIreLtlUU",
    authDomain: "cpastore-ebea8.firebaseapp.com",
    projectId: "cpastore-ebea8",
    storageBucket: "cpastore-ebea8.appspot.com",
    messagingSenderId: "682287220316",
    appId: "1:682287220316:web:17901f2f0927574e424899",
    measurementId: "G-SCNNE81PLQ"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  //Reference contactInfo collections
  let contactInfo = firebase.database().ref('info');
  
  //Listen for submit
  // document.getElementById('contact-form').addEventListener('submit', submitForm);
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  function submitForm(e) {
    e.preventDefault();
    console.log("email form submitted");
  
    //get input values
    let name = getInputVal('name');
    let email = getInputVal('email');
    let subject = getInputVal('subject');
    let message = getInputVal('message');
  
    saveContactInfo(name, email, subject, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get form value
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  
  //Save info to Firebase
  function saveContactInfo(name, email, subject, message) {
    let newContactInfo = contactInfo.push();
  
    newContactInfo.set({
        name: name,
        email: email,
        subject: subject,
        message: message
    });
  }