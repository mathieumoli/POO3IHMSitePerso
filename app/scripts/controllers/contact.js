/**
 * Created by webdev on 4/4/15.
 */
angular.module('showcaseApp')
  .controller('ContactCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('data/modele.json').
      success(function(data, status, headers, config) {
        $scope.data = data;
      }).
      error(function(data, status, headers, config) {
        // log error
      });

    $scope.result = 'hidden';
    $scope.resultMessage;
    $scope.formData; //formData is an object holding the name, email, subject, and message
    $scope.submitButtonDisabled = false;
    $scope.submitted = false; //used so that form errors are shown only after the form has been submitted

    $scope.submit = function (contactform) {
      $scope.submitted = true;
      $scope.submitButtonDisabled = true;

      if (contactform.$valid) {
        $http({
            method: 'POST',
            url: 'mail/contact_me.php',
            data: $.param($scope.formData),  //param method from jQuery
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }  //set the headers so angular passing info as form data (not request payload)
          }
        ).
          success(function (data) {
            console.log(data);
            if (data.success) { //success comes from the return json object
              $scope.submitButtonDisabled = true;
              $scope.resultMessage = data.message;
              $scope.result = 'bg-success';
            } else {
              $scope.submitButtonDisabled = false;
              $scope.resultMessage = data.message;
              $scope.result = 'bg-danger';
            }
          });
      }
      else {
        $scope.submitButtonDisabled = false;
        $scope.resultMessage = 'Failed <img src="http://www.chaosm.net/blog/wp-includes/images/smilies/icon_sad.gif" alt=":(" class="wp-smiley"> Veuillez remplir les champs restants';
        $scope.result = 'bg-danger';
      }

    }
    ;
  })
/* highlight the top nav as scrolling occurs */
$('body').scrollspy({ target: '#nav' })

/* smooth scrolling for scroll to top */
$('.scroll-top').click(function(){
  $('body,html').animate({scrollTop:0},1000);
})
