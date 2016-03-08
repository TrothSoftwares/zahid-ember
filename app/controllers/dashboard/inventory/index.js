import Ember from 'ember';

export default Ember.Controller.extend({

  columns: [
    {
      "propertyName": "id", "title": "ID"
    },
    {
      "propertyName": "itemcode","title": "Item Code"
    },
    {
      "propertyName": "productname","title": "Product Name"
    },
    {
      "propertyName": "producttype.typename","producttype.typename": "Product Type"
    },],

    currentProductType: '',


    computedProducts: function() {
      var currentProductType = this.get('currentProductType');
      return this.get('products').filterBy('producttype.typename', currentProductType);
    }.property('currentProductType'),


    actions: {

      changeActiveClass: function(producttype){
        this.producttypes.forEach(function(ptype){
          ptype.set('activeclass' , '');
        });
        producttype.set('activeclass' , 'active');
        this.set('currentProductType' , producttype.get('typename'));
      },


    }
  });
