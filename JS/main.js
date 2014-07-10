var app = angular.module('planarApp');
  app.controller('cardCtrl', function($scope, cardService) {
  	$scope.dieFace=1;
    $scope.viewPlane = $scope.currentPlane;
    $scope.planarDeck = cardService.cards;
    $scope.hideSpatial = false;
    $scope.prevModal = false;
    $scope.prevCards = [];
    var notUsedCards = [];
    var spatialPlane1 = {};
    var spatialPlane2 = {};

    $scope.genDeck = function(deckArray){
    	$scope.planarDeck = cardService.genDeck(deckArray);
      $scope.prevCards = [];
    }
    //goes to the next card, doesn't change viewCard
    //if it tries to go past the last card, deck is shuffled and
    //started over.
    var nextCard = function (){

      if($scope.planarDeck.length > 1){
        $scope.prevCards.unshift($scope.planarDeck.shift());
      }
      else{
        $scope.prevCards.unshift($scope.planarDeck.shift());
        $scope.genDeck($scope.prevCards);
      }
    }

    //Go to the next plane, if last card, shuffle deck and set currentPlane to zero
  	$scope.planeswalk = function(){
  		$scope.hideSpatial = false;
      nextCard();
      $scope.isSpatial();
      // $scope.isIntTunnel();
  	}


    //rolls a virtual 6 sided die, side 1 executes planeswalk,
    //side 6 shows chaos side, all others show a blank side.
    $scope.roll = function(){
      $scope.dieFace = _.random(0, 6);
      if($scope.dieFace === 1){
        $scope.planeswalk();
      }
    }

    //check for spatial merging card
    $scope.isSpatial = function(){
      var spatialPlane1;
      var spatialPlane2;
      if($scope.planarDeck[0].cardID === "39"){
        alert("Spatial Merging, The next 2 planes are active!");
        $scope.hideSpatial = true;
        //debugger;
         while(!spatialPlane1 || !spatialPlane2){
          if($scope.prevCards.length === 40){
            $scope.genDeck($scope.prevCards);
          }
          if($scope.planarDeck[0].type === 'plane'){
            if(!spatialPlane1){
              spatialPlane1 = $scope.planarDeck.shift();
            }
            else{
              spatialPlane2 = $scope.planarDeck.shift();
            }
          }
          else{
            $scope.prevCards.unshift($scope.planarDeck.shift());
          }
         }//end of while loop
         $scope.planarDeck.unshift(spatialPlane2);
         $scope.planarDeck.unshift(spatialPlane1);
      }//end of containing if
    }//end of isSpatial function


    //show the previous cards modal
    $scope.viewPrevModal = function(){
      $('.modal').modal();
    }

    $scope.viewIntTunnel = function(){
      $scope.prevCards = [];
      var planeCount = 0;
      while(planeCount < 5){
        nextCard();
        if($scope.planarDeck[$scope.currentPlane].type === 'plane'){
          $scope.prevCards.push($scope.planarDeck[$scope.currentPlane].cardID);
          planeCount += 1;
        }
        $('#intTunnel').modal();
      }
    }

     $scope.isIntTunnel = function(){
      if($scope.planarDeck[$scope.currentPlane].cardID === "34"){
        alert("Interplanar Tunnel, choose which plane to planeswalk to");
        $scope.viewIntTunnel();
      }
    }

    $scope.selectedCard = function(){

    }

  })