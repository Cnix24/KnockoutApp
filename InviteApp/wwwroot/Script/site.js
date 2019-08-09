//modal popup
$(document).ready(function() {
        $("#myModal").modal('show');
});

//sidetoggle
$(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
    });
});

//title
$(function () {
    $('#modelEnter').on(event, function () {
        $('#topText').slideUp(1500);
    });
});


//main KO
function AppViewModel() {
    this.firstName = ko.observable(),
        this.lastName = ko.observable(),
        displayCheck = ko.observable(),
        rsvpStatus = ko.observable('TBD'),
        rsvpCount = ko.observable(0),
        noCard = ko.observable(false);


    this.fullName = ko.computed(function () {
        return this.firstName() + " " + this.lastName();
    }, this);

    this.toggleRsvpYes = function () {
        rsvpStatus('Yes');
        displayCheck(true);
        noCard(false);
        noCard2(false);
        rsvpCount(1)
    };

    this.toggleRsvpNo = function () {
        rsvpStatus('No');
        displayCheck(false);
        displayCheck2(false);
        noCard(true);
    };

    addedGuests = ko.observable(0),
    addersStatus = ko.observable('TBD'),
    displayCheck2 = ko.observable(),
    noCard2 = ko.observable(false);

    this.toggleAddersYes = function () {
        addersStatus('Yes');
        displayCheck2(true);
        noCard2(false);
        noCard(false);
    };

    this.toggleAddersNo = function () {
        addersStatus('No');
        displayCheck2(false);
        noCard2(true);
        noCard(false);
    };

    this.moreAdditions = function () {
        x = parseInt(addedGuests()) +
            parseInt(rsvpCount());
        rsvpCount(x);
        noCard2(true);
    };

   

    //hotel carousel

    var self = this;
    self.moveRight = function () {
        var lastItem = self.items.pop();
        self.items.unshift(lastItem);
    };

    self.moveLeft = function () {
        var firstItem = self.items.shift();
        self.items.push(firstItem);
    };

    self.minIndex = ko.observable(0);
    self.maxIndex = ko.observable(5);


    self.items = ko.observableArray([
         "<a href='#https://www.cosmopolitanlasvegas.com/'><img src='https://images.ctfassets.net/sahy2rpqbnsp/1jbYlOnw8YCgIYGmY648mk/d166df107a845358c93792bdddd61b0f/20160920_COSMO-Chandelier2.jpg?w=1920&h=1080&fm=jpg&q=50&fit=fill' /></a>",
         "<a href='#https://www.venetian.com/'><img src='https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1445628314/All-Buildings-vegas1015.jpg?itok=KLnVxEH5'/></a >",
        "<a href='#https://bellagio.mgmresorts.com/en.html'><img src='https://t-ec.bstatic.com/images/hotel/max1024x768/193/193378702.jpg'/></a>",
            "<a href='#thewynn'><img src='https://www.playnevada.com/wp-content/uploads/2018/11/shutterstock_1186875508-1-1.jpg' /></a>",
        "<a href='#caesars'><img src='https://images.trvl-media.com/hotels/1000000/50000/41300/41245/8640cd6f_z.jpg'/></a >",
        "<a href='#treasureisland'><img src='https://i.pinimg.com/originals/88/c2/5f/88c25ff5e59c20b8f77cd5e974de038e.jpg/></a>"

    ]);
    self.minItemIndex = ko.observable(0);
    self.maxItemIndex = ko.observable(self.items().length);
    
    self.showItem = function (elem) {
        if (elem.nodeType === 1) $(elem).hide().slideDown()
    }
    self.hideItem = function (elem) {
        if (elem.nodeType === 1) $(elem).slideUp(function () {
            $(elem).remove();
        })
    }


};
ko.applyBindings(new AppViewModel());


ko.bindingHandlers.fadeVisible = {
    init: function (element, valueAccessor) {
        var value = valueAccessor();
        $(element).toggle(ko.utils.unwrapObservable(value));
    },
    update: function (element, valueAccessor) {
        var value = valueAccessor();
        ko.utils.unwrapObservable(value) ? $(element).fadeIn() : $(element).fadeOut();
    }
};




//


    //rsvpChanger = function () {
    //    var valcheck = self.rsvpStatus;
    //    if (valcheck) { rsvpStatus = false; }
    //    else { rsvpStatus = true; }
    //};

//ko.bindingHandlers.toggleRsvp = {
//    update: function (element, rsvpStatus) {
//        var current = rsvpStatus()
//        $(element).toggle(Boolean);
//    }
//};
//$("button").click(function () {
//    var condition = false);
//$(rsvpStatus).toggle(condition);
//});






//ko.bindingHandlers.starRating = {
//    init: function (element, valueAccessor) {
//        $(element).addClass("starRating");
//        for (var i = 0; i < 5; i++)
//            $("<span>").appendTo(element);
//    },
//    update: function (element, valueAccessor) {
//        //give the first x stars the chosen class where x <= rating
//        var observable = valueAccessor();
//        $("span", element).each(function (index) {
//            $(this).toggleClass("chosen", index < observable());
//        });
//        //handle mouse events on the stars
//        $("span", element).each(function (index) {
//            $(this).hover(
//                function () { $(this).prevAll().add(this).addClass("hoverChosen") },
//                function () { $(this).prevAll().add(this).removeClass("hoverChosen") }
//            ).click(function () {
//                var observable = valueAccessor(); //get the assoc observable
//                observable(index + 1); //write the new rating to it
//            });
//        });
//    }
//}





//function AppViewModel() {
//    this.firstName = ko.observable();
    
//    //for()
//    //lastName = ko.observable();
        
//        //emailAddress: ko.observable(),
//        //phoneNumber: ko.observable(),
//        //pairingName: ko.observable(),
//        //photoId: ko.observable(),
//        //rsvpStatus: ko.observable(),
//        //plusOnes: ko.observable(),
//        //totalRSVPCount: ko.observable(),
//        //arrivalDate: ko.observable(),
//        //departureDate: ko.observable(),
//        //hotel: ko.observable(),
//        //dinnerRSVPCount: ko.observable(),
//        //foodRestrictions: ko.observable()
//    };
//ko.applyBindings(new AppViewModel());





