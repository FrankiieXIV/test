var userData = ({
  "name": "",
  "age": "",
  "email": "",
  "address": "",
  "country": "",
  "state": "",
  "city": "",
  "postcode": "",
  "phone": "",
  "company": "",
  "job": "",
});

function sendData() {
  var Url = "https://imagineaposturl.dev/post"
  $.ajax({
    type: 'POST',
    url: Url,
    data: this.userData,
    success: function() {
      console.log("Success!!!");
    },
    error: function() {
      console.log("Error!!!");
    }
  });
}
function getDataFromForm1(form) {
    sessionStorage.setItem('name', form.name.value);
}

function getDataFromForm2(form) {
  sessionStorage.setItem('age', form.age.value);
}

function getDataFromForm3(form) {
  this.userData.name = sessionStorage.getItem("name");
  this.userData.age = sessionStorage.getItem("age");
  this.userData.email = form.email.value;
  this.userData.address = form.address.value;
  this.userData.country = form.country.value;
  this.userData.state = form.state.value;
  this.userData.city = form.city.value;
  this.userData.postcode = form.postcode.value;
  this.userData.phone = form.phone.value;
  this.userData.company = form.company.value;
  this.userData.job = form.job.value;
  sendData();
}
