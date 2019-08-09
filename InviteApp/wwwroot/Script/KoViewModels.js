//ko.bindingHandlers.toggleRsvp = {
//    init: function (element) {
//        // Start visible/invisible according to initial value
//        var primaryValue = rsvpStatus();
//        $(element).show(primaryValue);
//    },
//    click: function (element) {
//        // On update, fade in/out
//        self.toggleRsvp = function () {
//            rsvpStatus(!rsvpStatus());
//        };
//        var flip = rsvpStatus();
//        flip ? $(element).fadeIn() : $(element).fadeOut();
////};


//ko.bindingHandlers.fadeVisible = {
//    init: function (element, valueAccessor) {
//        // Initially set the element to be instantly visible/hidden depending on the value
//        var value = valueAccessor();
//        $(element).toggle(ko.utils.unwrapObservable(value)); // Use "unwrapObservable" so we can handle values that may or may not be observable
//    },
//    update: function (element, valueAccessor) {
//        // Whenever the value subsequently changes, slowly fade the element in or out
//        var value = valueAccessor();
//        ko.utils.unwrapObservable(value) ? $(element).fadeIn() : $(element).fadeOut();
//    }
//};