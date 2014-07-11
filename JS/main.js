var app = angular.module('planarApp');
  app.controller('cardCtrl', function($scope, $filter, cardService) {
  	$scope.dieFace=1;
    $scope.viewPlane = $scope.currentPlane;
    $scope.allCards = cardService.cards;
    $scope.hideSpatial = false;
    $scope.prevModal = false;
    $scope.prevCards = [];
    $scope.intTunnelCards = [];
    var notUsedCards = [];
    $scope.spatialPlane1 = {};
    $scope.spatialPlane2 = {};

    $scope.selectedCards = function(){
      $scope.planarDeck = $filter('filter')($scope.allCards, {checked: true});
    }

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
  		if($scope.hideSpatial){//check to see if you're leaving spatial merging
        $scope.prevCards.unshift($scope.spatialPlane1);//put spatial merging planes into prev cards;
        $scope.prevCards.unshift($scope.spatialPlane2);
        if(notUsedCards.length > 0){
          for(var i = 0; i < notUsedCards.length; i++){
            $scope.planarDeck.push(notUsedCards[i]);
          }
          notUsedCards = [];
        }
        $scope.hideSpatial = false;
      }
      else{
        $scope.hideSpatial = false;
        nextCard();
        $scope.isSpatial();
        $scope.isIntTunnel();
      }
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
      if($scope.planarDeck[0].cardID === "39"){
        alert("Spatial Merging, The next 2 planes are active!");
        $scope.spatialPlane1 = 0;
        $scope.spatialPlane2 = 0;
        $scope.hideSpatial = true;
        nextCard();
         while(!$scope.spatialPlane1 || !$scope.spatialPlane2){
          if($scope.planarDeck.length === 0){
            $scope.genDeck($scope.prevCards);
          }
          if($scope.planarDeck[0].type === 'plane'){
            if(!$scope.spatialPlane1){
              $scope.spatialPlane1 = $scope.planarDeck.shift();
            }
            else{
              $scope.spatialPlane2 = $scope.planarDeck.shift();
            }
          }
          else{
             notUsedCards.unshift($scope.planarDeck.shift());
          }
         }//end of while loop
      }//end of containing if
    }//end of isSpatial function


    //show the previous cards modal
    $scope.viewPrevModal = function(){
      $('#prevModal').modal();
    }

    $scope.viewIntTunnel = function(){
      $scope.intTunnelCards = [];
      nextCard();
      while($scope.intTunnelCards.length < 5){
        if($scope.planarDeck.length === 0){
          $scope.genDeck($scope.prevCards);
        }
        if($scope.planarDeck[0].type === 'plane'){
          $scope.intTunnelCards.push($scope.planarDeck.shift());
        }
        else{
          notUsedCards.push($scope.planarDeck.shift());
        }
        $('#intTunnel').modal();
      }
    }

     $scope.isIntTunnel = function(){
      if($scope.planarDeck[0].cardID === "34"){
        alert("Interplanar Tunnel, choose which plane to planeswalk to");
        $scope.viewIntTunnel();
      }
    }

    $scope.selectedCard = function(selCard){
      for(var i = $scope.intTunnelCards.length - 1; i >= 0; i--){
        if($scope.intTunnelCards[i] === selCard){
          $scope.planarDeck.unshift($scope.intTunnelCards[i]);
        }
        else{
          $scope.planarDeck.push($scope.intTunnelCards[i]);
        }
      }
      $('#intTunnel').modal('hide')
      if(notUsedCards.length > 0){
        _.shuffle(notUsedCards);
        for(var i = notUsedCards.length - 1; i >= 0; i--){
          $scope.planarDeck.push(notUsedCards[i]);
        }
        notUsedCards = [];
        }
    }

  })