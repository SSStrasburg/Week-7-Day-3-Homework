(function() {
  'use strict';

angular.module('inventory')
  .controller('InventoryController', InventoryController)

  InventoryController.$inject = ['InventoryService']; //name of service to inject 'InventoryService'
// we only inject services

/**
 * controller function produces newItem
 * @param {[type]} InventoryService [description]
 */
  function InventoryController(InventoryService) { // injection will be put in the first place, in this case called 'InventoryService' also, we should keep the name the same
  let vm = this;  // view model
  vm.newItem = {};

  vm.inventory = InventoryService.getAllItems();

  vm.add = function add(item) {
    InventoryService.addItem(item);
    vm.newItem = {};
  }



    vm.inventory = [
      { "id": 2957,   "name": "widget",       "price": 32,    "quantity": 203,  "color": "red",   "discount": 31 },
      { "id": 89274,  "name": "golf club",    "price": 98,    "quantity": 10,   "color": "black", "discount": 0 },
      { "id": 64,     "name": "iPhone",       "price": 499,   "quantity": 2,    "color": "white", "discount": 0 },
      { "id": 87363,  "name": "bonzai tree",  "price": 76,    "quantity": 2,    "color": "green", "discount": 0 },
      { "id": 1736,   "name": "towel",        "price": 55,    "quantity": 30,   "color": "brown", "discount": 10 },
      { "id": 4836,   "name": "dog bed",      "price": 99,    "quantity": 10,   "color": "beige", "discount": 50 },
      { "id": 829,    "name": "waste basket", "price": 15,    "quantity": 40,   "color": "silver", "discount": 0 },
      { "id": 46,     "name": "guitar",       "price": 899,   "quantity": 0,    "color": "blue",  "discount": 150 },
      { "id": 17456,  "name": "matcha tea",   "price": 42,    "quantity": 4,    "color": "green", "discount": 11 },
      { "id": 3292,   "name": "enlightenment", "price": 99999, "quantity": 1,   "color": "red",   "discount": 0 },
      { "id": 533,    "name": "eggs",         "price": 5,     "quantity": 12,   "color": "brown", "discount": 1 },
      { "id": 683,    "name": "pillow",       "price": 27,    "quantity": 10,   "color": "black", "discount": 12 }
    ];

    vm.getPostSalePrice = function getPostSalePrice(item){
       return (((item.price) - (item.discount))*1.057);
    };

    /**
     * Adds new item to inventory
     * @param {Object} item   Needs a name, price, quantity, color, and discount
     * @return {void}
     */
    vm.addItem = function addItem(item) {
      InventoryService.addItemToInventory(item);
      vm.newItem = {};
    };

    vm.changeSort = function changeSort(sortField) {
      vm.sortType = sortField;
      vm.sortReverse = !vm.sortReverse;
    };

  }
}());
