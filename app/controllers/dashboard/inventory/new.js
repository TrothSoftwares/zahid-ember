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
        producttype : this.get('typename'),
        productbrand :this.get('brandname')

      });

      product.save().then(function(){
        controller.set('itemcode','');
        controller.set('productname','');
        controller.set('initialstocklevel','');
        controller.set('initialcostprice','');
        controller.set('buyprice','');
        controller.set('retailprice','');
        controller.set('supplier','');
        controller.set('typename','');
        controller.set('brandname','');
      }).catch(function(){
        controller.notifications.addNotification({
          message: 'Sorry, cant save at the moment !' ,
          type: 'error',
          autoClear: true
        });
      });

      // controller.get('dashboard.inventory.index.router').refresh();

      controller.transitionToRoute('dashboard.inventory.index');

    },

    openSupplierModal: function(){
      Ember.$('.ui.newsupplier.modal')
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
        controller.set('phone','');

        controller.get('suppliers').pushObject(newsupplier._internalModel);
        controller.set('supplier',newsupplier);
        Ember.$('.ui.newsupplier.modal')
        .modal('hide')
        ;
      }).catch(function(){
        controller.notifications.addNotification({
          message: 'Sorry, cant save at the moment !' ,
          type: 'error',
          autoClear: true
        });
      });

    },

    openProductBrandModal:function(){

      Ember.$('.ui.newproductbrand.modal')
      .modal('show')
      ;
    },

    createProductBrand: function(){

      var controller = this;
      var newproductbrandsaved = this.store.createRecord('productbrand', {
        brandname :this.get('newproductbrand'),
      });

      newproductbrandsaved.save().then(function(){
        controller.set('newproductbrand','');


        Ember.$('.ui.newproductbrand.modal')
        .modal('hide')
        ;
      }).catch(function(){
        controller.notifications.addNotification({
          message: 'Sorry, cant save at the moment !' ,
          type: 'error',
          autoClear: true
        });
      });

      controller.get('productbrands').pushObject(newproductbrandsaved._internalModel);
      controller.set('brandname',newproductbrandsaved);



    },



    openProductTypeModal:function(){

      Ember.$('.ui.newproducttype.modal')
      .modal('show')
      ;
    },

    createProductType: function(){

      var controller = this;
      var newproducttypesaved = this.store.createRecord('producttype', {
        typename :this.get('newproducttype')

      });

      newproducttypesaved.save().then(function(){
        controller.set('newproducttype','');


        Ember.$('.ui.newproducttype.modal')
        .modal('hide')
        ;
      }).catch(function(){
        controller.notifications.addNotification({
          message: 'Sorry, cant save at the moment !' ,
          type: 'error',
          autoClear: true
        });
      });

console.log(JSON.stringify(newproducttypesaved));
      this.get('producttypes').pushObject(newproducttypesaved._internalModel);
      this.set('typename',newproducttypesaved);




    },





  }
});
