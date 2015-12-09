var myApp = angular.module('myApp',['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider){
  console.log("myApp entry");
  $urlRouterProvider.otherwise('/login');

   $stateProvider

   .state('login',{
       url:'/login',
       templateUrl:'templates/user/login.html'
   })

   .state('about',{
       url:'/about',
       templateUrl:'templates/user/About.html'
   })

   .state('contact',{
       url:'/contact',
       templateUrl:'templates/user/Contact.html'
   });

});
