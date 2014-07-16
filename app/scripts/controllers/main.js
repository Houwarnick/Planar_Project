'use strict';

angular.module('planarApp')
  .controller('MainCtrl', function ($scope, $filter, cardService, $location) {

    cardService.setDeck(cardService.cards);
    $scope.allCards = cardService.cards;


    $scope.selectedCards = function(){
      $scope.planarDeck = $filter('filter')($scope.allCards, {checked: true});
      cardService.setDeck($scope.planarDeck);
    }

    $scope.genDeck = function(deckArray){
    	$scope.planarDeck = cardService.genDeck(deckArray);
      $scope.prevCards = [];
    }


    $scope.toGameView = function(){
    	cardService.setDeck($scope.planarDeck);
    	$location.path('/gameview');
    }

    $scope.initGame = function(){
      $scope.planarDeck = cardService.getDeck();
      $scope.genDeck($scope.planarDeck);
    }

    $scope.initGame();

 });
