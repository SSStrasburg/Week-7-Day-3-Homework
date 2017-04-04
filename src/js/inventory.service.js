(function() {
  'use strict';

  angular.module('inventory').factory('InventoryService', InventoryService);


  function InventoryService(){
    // JSON.parse from a string to an array
    let items = JSON.parse(localStorage.getItem('item')) || [];  // 'item' is the same as below

    /**
     * This function adds items to a database
     * @param {Object} item with name, price, quantity, etc
     */
    function addItem(item){
      console.log('line 12 service');
      item.price = Number(item.price);
      item.quantity = Number(item.quantity);
      item.discount = Number(item.discount);

      if (typeof(item) !== 'object' ||
          typeof(item.name) !== 'string' ||
          item.name.length < 1 ||
          item.price < 0.01  ||
          typeof(item.price) !== 'number' ||
          Number.isNaN(item.price) ||
          typeof(item.quantity) !== 'number' ||
          item.quantity < 0 ||
          typeof(item.color) !== 'string' ||
          item.color.length < 1 ||
          typeof(item.discount) !== 'number' ||
          item.discount < 0){
        return;
      }

      items.push({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        color:  item.color,
        discount: item.discount
      });
      localStorage.setItem('item', angular.toJson(item));  // 'item' is the same as above.
      //we are stringafing
    }

    /**
    * [getAllItems description]
    * @return {[type]} returns inventory array
    */
    function getAllItems(){
      return items;
    }

    return {      // returns from InventoryService
      addItem: addItem,
      getAllItems: getAllItems
    }

  }

}());
