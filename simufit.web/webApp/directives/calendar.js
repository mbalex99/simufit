'use strict';

Application.Directives.directive('calendar', function(){
     return{
         restrict: 'A',
         scope:{
             title: "@"
         },
         link: function(scope, element, attrs){

             var elem = $(element);
             elem.fullCalendar({
                 header:{
                     left: 'title',
                     center: '',
                     right: 'today, prev, next'
                 },
                 eventSources: [

                     // your event source
                     {
                         events: [ // put the array in the `events` property
                             {
                                 title  : 'event1',
                                 start  : '2013-07-01'
                             },
                             {
                                 title  : 'event2',
                                 start  : '2010-01-05',
                                 end    : '2010-01-07'
                             },
                             {
                                 title  : 'event3',
                                 start  : '2010-01-09 12:30:00'
                             }
                         ],
                         color: 'blue',     // an option!
                         textColor: 'white' // an option!
                     }

                     // any other event sources...

                 ]

             });
         }
     }
});