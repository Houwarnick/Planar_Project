var app = angular.module('planarApp');
  app.controller('cardCtrl', function($scope, cardService) {
  	$scope.dieFace=1;
    $scope.currentPlane = 0;
    $scope.viewPlane = $scope.currentPlane;
    $scope.planarDeck = cardService.cards;
    $scope.hideSpatial = false;
    $scope.prevModal = false;
    $scope.prevCards = [];
    $scope.spatialPlane1 = 0;
    $scope.spatialPlane2 = 0;
    $scope.genDeck = function(deckArray){
    	$scope.planarDeck = cardService.genDeck(deckArray);
    }
    //goes to the next card, doesn't change viewCard
    //if it tries to go past the last card, deck is shuffled and
    //started over.
    var nextCard = function (){
      if($scope.currentPlane === $scope.planarDeck.length - 1){
        $scope.currentPlane = 0;
        $scope.genDeck($scope.planarDeck);
      }
      else{
        $scope.currentPlane += 1;
      }
    }

    //Go to the next plane, if last card, shuffle deck and set currentPlane to zero
  	$scope.planeswalk = function(){
  		$scope.hideSpatial = false;
      $scope.spatialPlane1 = 0;
      $scope.spatialPlane2 = 0;
      nextCard();
      $scope.viewPlane = $scope.currentPlane;
      $scope.isSpatial();
  	}

    //changes the viewable plane to previous planes, does not change currentPlane.
    //Will not do anything if current plane's index is zero
  	$scope.previousPlane = function(){
  		if($scope.viewPlane === 0){
  			return
  		}
  		else{
  		  $scope.viewPlane -= 1;
  		}
  	}

    // $scope.viewCurrent = function(){
    //   $scope.viewPlane = $scope.currentPlane;
    // }

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
      if($scope.planarDeck[$scope.currentPlane].cardID === "39"){
        alert("Spatial Merging, The next 2 planes are active!");
        $scope.hideSpatial = true;
         while(!$scope.spatialPlane1 || !$scope.spatialPlane2){
          nextCard();
          if($scope.planarDeck[$scope.currentPlane].type === "plane"){
            if(!$scope.spatialPlane1){
              $scope.spatialPlane1 = $scope.currentPlane;
            }//end of inside if
            else{
              $scope.spatialPlane2 = $scope.currentPlane;
            }//end of else
          }//end of outside if
         }//end of while loop
         $scope.viewPlane = $scope.spatialPlane1;
      }//end of containing if
    }//end of isSpatial function


    //show the previous cards modal
    $scope.viewPrevModal = function(){
      $scope.prevCards = [];
      for(var i = $scope.currentPlane-1; i >= 0; i--){
        $scope.prevCards.push($scope.planarDeck[i].cardID);
      }
      console.log($scope.prevCards);
      console.log($, $('.modal'));
      $('.modal').modal();
      /*
      $scope.prevModal = true;
      */
    }

    //hide the previous cards modal
    $scope.hidePrevModal = function(){
      $scope.prevModal = false;
    }
  })