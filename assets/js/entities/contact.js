ContactManager.module("Entities", function (Entities, ContactManager,
    Backbone, Marionette, $, _) {
    Entities.Contact = Backbone.Model.extend({});

    Entities.ContactCollection = Backbone.Collection.extend({
        model: Entities.Contact,
        comparator: "firstName"
    });
});
