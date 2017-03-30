(function() {
  'use strict';

  angular.module('item').factory('InventoryService', InventoryService);


  function InventoryService(){
// JSON.parse from a string to an array
    let item = JSON.parse(localStorage.getItem('item')) || [];

    function addItem(item){
        item.push = Number(item.price);
        item.quantity = Number(item.quantity);
        item.discount = Number(item.discount);

      if (typeof(item) !== 'object' ||
          typeof(item.name) !== 'string' ||
          typeof(item.price) !== 'number' ||
          NaNis(item.price) ||
          typeof(item.quantity) !== 'number' ||
          typeof(item.color) !== 'string' ||
          typeof(item.discount) !== 'number' ||

          return;
    )
    }

    function addItem(item){
      items.push({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        color:  item.color,
        discount: item.discount
      });
      localStorage.setItem('inventory', angular.toJson(inventory));
    }

    function getAllItems(){
      return items;
    }

    return {
      addItem: addItem,
      getAllItems: getAllItems
    }

  }

}());
