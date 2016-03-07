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
    "propertyName": "producttype.producttype","producttype.producttype": "Product Type"
  },


],



  actions: {

    changeActiveClass: function(producttype){
      this.producttypes.forEach(function(ptype){
        ptype.set('activeclass' , '');
      });
      producttype.set('activeclass' , 'active');
    },


    createContract: function(){


      var contract = this.store.createRecord('productbrand', {
        productbrand: 'dddd' ,
});


contract.save();


},

  }
});
