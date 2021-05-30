  function findTherapist(){
    var zipCode = document.getElementById("zipCode").value;
    var zipCodeLink = "https://www.psychologytoday.com/us/therapists?search=" + zipCode;
    document.write('<a href="' + zipCodeLink + '">Click to find therapists near you</a>');
    window.location.href=zipCodeLink;
  }

function sendEmail() {
Email.send({
  Host: "smtp.gmail.com",
  Username: "krarora@gmail.com",
  Password: "Thisistest1",
  To: 'meenakshi17@gmail.com, meenakshi17@yahoo.com',
  From: "krarora100@gmail.com",
  Subject: "Someone has reached out to you.",
  Body: "You have recieved a email from someone who would like help.",
})
  .then(function (message) {
  alert("mail sent successfully")
  });
}

