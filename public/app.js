const app = angular.module('noticeboard',[])

app.controller("MainController",["$http",function ($http) {
  this.hello="ello";
  this.notices=[];
  this.url = "https://noticerails-api.herokuapp.com/notices"
  $http({
    method:"GET",
    url:this.url
  }).then((response) => {
    console.table(response.data);
    this.notices = response.data
  }).catch((err) => {
    console.log(err);
  })

  this.processForm = () => {
   console.log('Form data: ', this.formdata);
   $http({
     method: 'POST',
     url: this.url,
     data: this.formdata
   }).then(response => {
     console.log('response: ', response);
     this.notices.unshift(response.data);
   }).catch(reject => {
     console.log('reject: ', reject);
   });
 };

  // controller
}]);
