const app = angular.module('noticeboard',[])

app.controller("MainController",["$http",function ($http) {
  this.hello="ello";
  this.notices=[];
  $http({
    method:"GET",
    url:"http://localhost:3000/notices"
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
     url: 'http://localhost:3000/notices',
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
