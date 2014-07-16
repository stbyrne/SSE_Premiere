var premiereControllers = angular.module('premiereControllers', []);
 
premiereControllers.controller('TeamListCtrl', ['$scope', 'Team',
  function ($scope, Team) {
      
    $scope.teams = Team.query();
 
    $scope.orderProp = 'age';
  }]);

premiereControllers.controller('TeamDetailCtrl', ['$scope', '$routeParams', 'Team',
    function($scope, $routeParams, Team) {
        $scope.team = Team.get({teamId:$routeParams.teamId}, function(team){
            $scope.mainImageUrl = team.images[0];
        })
        
        $scope.setImage = function(imageUrl) {
            $scope.mainImageUrl = imageUrl;
        }
                
    }]);
    