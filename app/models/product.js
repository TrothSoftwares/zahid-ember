import DS from 'ember-data';

export default DS.Model.extend({

itemcode: DS.attr('string'),
productname: DS.attr('string'),
initialstocklevel: DS.attr('number'),
initialcostprice: DS.attr('number'),
buyprice: DS.attr('number'),
retailprice: DS.attr('number')

});
