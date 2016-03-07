import Ember from 'ember';

export default Ember.Controller.extend({

  actions:{


  createProduct: function(){

    var controller = this;

    var product = this.store.createRecord('product', {
            itemcode :this.get('itemcode'),
            productname :this.get('productname'),
            initialstocklevel :this.get('initialstocklevel'),
            initialcostprice :this.get('initialcostprice'),
            retailprice :this.get('retailprice'),
            buyprice :this.get('buyprice'),
            supplier :this.get('supplier'),
            producttype : this.get('producttype'),
            productbrand :this.get('productbrand')

          });

        product.save().then(function(){
        controller.set('itemcode','');
        controller.set('productname','');
        controller.set('producttype','');
        controller.set('productsupplier','');
        controller.set('productbrand','');
      }).catch(function(){
        controller.notifications.addNotification({
          message: 'Sorry, cant save at the moment !' ,
          type: 'error',
          autoClear: true
        });
      });

  },



  openSupplierModal: function(){
    Ember.$('.ui.modal')
    .modal('show')
    ;
  },

  createSupplier: function(){

    var controller = this;
        var newsupplier = this.store.createRecord('supplier', {
                companyname :this.get('companyname'),
                email :this.get('email'),
                address1 :this.get('address1'),
                address2 :this.get('address2'),
                suburb :this.get('suburb'),
                city :this.get('city'),
                state :this.get('state'),
                country : this.get('country'),
                zipcode :this.get('zipcode')
              });

            newsupplier.save().then(function(){
            controller.set('companyname','');
            controller.set('email','');
            controller.set('address1','');
            controller.set('address2','');
            controller.set('suburb','');
            controller.set('city','');
            controller.set('state','');
            controller.set('country','');
            controller.set('zipcode','');
//  console.log(JSON.stringify(supplier));
//  controller.set('suppliers', this.store.findAll('supplier'));
//  console.log(JSON.stringify(controller.producttypes));
//  console.log(JSON.stringify(controller.get('producttypes')));
//
// console.log('-------------');
//              controller.get('suppliers').pushObject(supplier);
//
//             console.log(controller.get('suppliers'));
//              controller.get('suppliers').reload();
//              console.log('++++++++++');
          }).catch(function(){
            controller.notifications.addNotification({
              message: 'Sorry, cant save at the moment !' ,
              type: 'error',
              autoClear: true
            });
          });





          // var suppliers = this.get('suppliers').toArray();
          // console.log(JSON.stringify(suppliers));
          // suppliers.addObjects(this.get('suppliers'));
          // suppliers.addObject(supplier);
          // this.set('suppliers', suppliers);

           var getsuppliers = controller.get('suppliers').toArray();
           console.log(typeof(getsuppliers));
           console.log(Ember.isArray(getsuppliers));
           getsuppliers.pushObject(newsupplier);

           controller.set('supplier',newsupplier);

           this.refresh();+

            // this.get('suppliers').pushObject(newsupplier);
          // this.set('supplier')
          // this.get('suppliers').forEach(function(supplier) {
          //   this.get('suppliers').pushObject(supplier._internalModel);
          // });

  }

}
});
