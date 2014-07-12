//holds card data
var app = angular.module('planarApp');
app.factory('cardService', function(){
  var playDeck = playDeck;

  return {
    cards: [
      {
        cardID: "1",
        name: "Akoum",
        type: "plane",
        checked: true
      },
      {
        cardID: "2",
        name: "Aretopolis",
        type: "plane",
        checked: true
      },
      {
        cardID: "3",
        name: "Astral Arena",
        type: "plane",
        checked: true
      },
      {
        cardID: "4",
        name: "Bloodhill Bastion",
        type: "plane",
        checked: true
      },
      {
        cardID: "5",
        name: "Edge of Malacol",
        type: "plane",
        checked: true
      },
      {
        cardID: "6",
        name: "Furnace Layer",
        type: "plane",
        checked: true
      },
      {
        cardID: "7",
        name: "Gavony",
        type: "plane",
        checked: true
      },
      {
        cardID: "8",
        name: "Glen Elendra",
        type: "plane",
        checked: true
      },
      {
        cardID: "9",
        name: "Grand Ossuary",
        type: "plane",
        checked: true
      },
      {
        cardID: "10",
        name: "Grove of the Dreampods",
        type: "plane",
        checked: true
      },
      {
        cardID: "11",
        name: "Hedron Fields of Agadeem",
        type: "plane",
        checked: true
      },
      {
        cardID: "12",
        name: "Jund",
        type: "plane",
        checked: true
      },
      {
        cardID: "13",
        name: "Kessig",
        type: "plane",
        checked: true
      },
      {
        cardID: "14",
        name: "Kharasha Foothills",
        type: "plane",
        checked: true
      },
      {
        cardID: "15",
        name: "Kilnspire District",
        type: "plane",
        checked: true
      },
      {
        cardID: "16",
        name: "Lair of the Ashen Idol",
        type: "plane",
        checked: true
      },
      {
        cardID: "17",
        name: "Mount Keralia",
        type: "plane",
        checked: true
      },
      {
        cardID: "18",
        name: "Nephalia",
        type: "plane",
        checked: true
      },
      {
        cardID: "19",
        name: "Norn's Dominion",
        type: "plane",
        checked: true
      },
      {
        cardID: "20",
        name: "Onakke Catacomb",
        type: "plane",
        checked: true
      },
      {
        cardID: "21",
        name: "Orochi Colony",
        type: "plane",
        checked: true
      },
      {
        cardID: "22",
        name: "Orzhova",
        type: "plane",
        checked: true
      },
      {
        cardID: "23",
        name: "Prahv",
        type: "plane",
        checked: true
      },
      {
        cardID: "24",
        name: "Quicksilver Sea",
        type: "plane",
        checked: true
      },
      {
        cardID: "25",
        name: "Selesnya Loft Gardens",
        type: "plane",
        checked: true
      },
      {
        cardID: "26",
        name: "Stensia",
        type: "plane",
        checked: true
      },
      {
        cardID: "27",
        name: "Takenuma",
        type: "plane",
        checked: true
      },
      {
        cardID: "28",
        name: "Talon Gates",
        type: "plane",
        checked: true
      },
      {
        cardID: "29",
        name: "Trail of the Mage-Rings",
        type: "plane",
        checked: true
      },
      {
        cardID: "30",
        name: "Truga Jungle",
        type: "plane",
        checked: true
      },
      {
        cardID: "31",
        name: "Windriddle Palaces",
        type: "plane",
        checked: true
      },
      {
        cardID: "32",
        name: "The Zephyr Maze",
        type: "plane",
        checked: true
      },
      {
        cardID: "33",
        name: "Chaotic AEther",
        type: "phenom",
        checked: true
      },
      {
        cardID: "34",
        name: "Interplanar Tunnel",
        type: "phenom",
        checked: true
      },
      {
        cardID: "35",
        name: "Morphic Tide",
        type: "phenom",
        checked: true
      },
      {
        cardID: "36",
        name: "Mutual Epiphany",
        type: "phenom",
        checked: true
      },
      {
        cardID: "37",
        name: "Planewide Disaster",
        type: "phenom",
        checked: true
      },
      {
        cardID: "38",
        name: "Reality Shaping",
        type: "phenom",
        checked: true
      },
      {
        cardID: "39",
        name: "Spatial Merging",
        type: "phenom",
        checked: true
      },
      {
        cardID: "40",
        name: "Time Distortion",
        type: "phenom",
        checked: true
      }
    ],
    genDeck: function(arr){
      return _.shuffle(arr)
    },
    setDeck: function(arr){
      playDeck = arr;
      console.log(playDeck);
    },
    getDeck: function(){
      return playDeck;
    }
  }


// this.deck = [];
//accepts an array of numbers between 1 and 40 to select what cards to play with.
//returns a new array of shuffled numbers
// this.genDeck = function (arr){
// 	return _.shuffle(arr)
// }

// this.setDeck = function(arr){
//   debugger;
//   playDeck = arr;
//   console.log(playDeck);
// }

// this.getDeck = function(){
//   return playDeck;
// }
});
