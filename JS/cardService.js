//holds card data
var app = angular.module('planarApp');

app.service('cardService', function(){

this.cards = [
  {
  	cardID: "1",
  	name: "Akoum",
  	type: "plane",
  	trigger: ""
  },
  {
  	cardID: "2",
  	name: "Aretopolis",
  	type: "plane",
  	trigger:""
  },
  {
  	cardID: "3",
  	name: "Astral Arena",
  	type: "plane",
  	trigger:""
  },
  {
  	cardID: "4",
  	name: "Bloodhill Bastion",
  	type: "plane",
  	trigger:""
  },
  {
  	cardID: "5",
  	name: "Edge of Malacol",
  	type: "plane",
  	trigger:""
  },
  {
  	cardID: "6",
  	name: "Furnace Layer",
  	type: "plane",
  	trigger:""
  },
  {
  	cardID: "7",
  	name: "Gavony",
  	type: "plane",
  	trigger:""
  },
  {
  	cardID: "8",
  	name: "Glen Elendra",
  	type: "plane",
  	trigger:""
  },
  {
  	cardID: "9",
  	name: "Grand Ossuary",
  	type: "plane",
  	trigger:""
  },
  {
  	cardID: "10",
  	name: "Grove of the Dreampods",
  	type: "plane",
  	trigger:""
  },
  {
  	cardID: "11",
  	name: "Hedron Fields of Agadeem",
  	type: "plane",
  	trigger:""
  },
  {
  	cardID: "12",
  	name: "Jund",
  	type: "plane",
  	trigger:""
  },
  {
  	cardID: "13",
  	name: "Kessig",
  	type: "plane",
  	trigger:""
  },
  {
  	cardID: "14",
  	name: "Kharasha Foothills",
  	type: "plane",
  	trigger:""
  },
  {
  	cardID: "15",
  	name: "Kilnspire District",
  	type: "plane",
  	trigger:""
  },
  {
  	cardID: "16",
  	name: "Lair of the Ashen Idol",
  	type: "plane",
  	trigger:""
  },
  {
  	cardID: "17",
  	name: "Mount Keralia",
  	type: "plane",
  	trigger:""
  },
  {
  	cardID: "18",
  	name: "Nephalia",
  	type: "plane",
  	trigger:""
  },
  {
  	cardID: "19",
  	name: "Norn's Dominion",
  	type: "plane",
  	trigger:""
  },
  {
  	cardID: "20",
  	name: "Onakke Catacomb",
  	type: "plane",
  	trigger:""
  },
  {
  	cardID: "21",
  	name: "Orochi Colony",
  	type: "plane",
  	trigger:""
  },
  {
  	cardID: "22",
  	name: "Orzhova",
  	type: "plane",
  	trigger:""
  },
  {
  	cardID: "23",
  	name: "Prahv",
  	type: "plane",
  	trigger:""
  },
  {
  	cardID: "24",
  	name: "Quicksilver Sea",
  	type: "plane",
  	trigger:""
  },
  {
  	cardID: "25",
  	name: "Selesnya Loft Gardens",
  	type: "plane",
  	trigger:""
  },
  {
  	cardID: "26",
  	name: "Stensia",
  	type: "plane",
  	trigger:""
  },
  {
  	cardID: "27",
  	name: "Takenuma",
  	type: "plane",
  	trigger:""
  },
  {
  	cardID: "28",
  	name: "Talon Gates",
  	type: "plane",
  	trigger:""
  },
  {
  	cardID: "29",
  	name: "Trail of the Mage-Rings",
  	type: "plane",
  	trigger:""
  },
  {
  	cardID: "30",
  	name: "Truga Jungle",
  	type: "plane",
  	trigger:""
  },
  {
  	cardID: "31",
  	name: "Windriddle Palaces",
  	type: "plane",
  	trigger:""
  },
  {
  	cardID: "32",
  	name: "The Zephyr Maze",
  	type: "plane",
  	trigger:""
  },
  {
  	cardID: "33",
  	name: "Chaotic AEther",
  	type: "phenom",
  	trigger:""
  },
  {
  	cardID: "34",
  	name: "Interplanar Tunnel",
  	type: "phenom",
  	trigger:""
  },
  {
  	cardID: "35",
  	name: "Morphic Tide",
  	type: "phenom",
  	trigger:""
  },
  {
  	cardID: "36",
  	name: "Mutual Epiphany",
  	type: "phenom",
  	trigger:""
  },
  {
  	cardID: "37",
  	name: "Planewide Disaster",
  	type: "phenom",
  	trigger:""
  },
  {
  	cardID: "38",
  	name: "Reality Shaping",
  	type: "phenom",
  	trigger:""
  },
  {
  	cardID: "39",
  	name: "Spatial Merging",
  	type: "phenom",
  	trigger:""
  },
  {
  	cardID: "40",
  	name: "Time Distortion",
  	type: "phenom",
  	trigger:""
  }
]
//accepts an array of numbers between 1 and 40 to select what cards to play with.
//returns a new array of shuffled numbers
this.genDeck = function (arr){
	return _.shuffle(arr)
}
});
