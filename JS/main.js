var app = angular.module('planarApp');
  app.controller('cardCtrl', function($scope, cardService) {
  	$scope.currentPlane = 0;
    $scope.planarDeck = cardService.cards;
    $scope.genDeck = function(deckArray){
    	$scope.planarDeck = cardService.genDeck(deckArray);
    }
  	$scope.planeswalk = function(){
  		if($scope.currentPlane === $scope.planarDeck.length - 1){
  			$scope.currentPlane = 0;
  			$scope.genDeck($scope.planarDeck);
  		}
  		else{
  			$scope.currentPlane += 1;
  		}
  	}
  	$scope.previousPlane = function(){
  		if($scope.currentPlane === 0){
  			return
  		}
  		else{
  		  $scope.currentPlane -= 1;
  		}
  	}
  })