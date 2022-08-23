// import {events } from './script';

function EventHandler(events) {
  this.events = events;

  this.getEventsBetweenDates = function (dateStart, dateEnd) {
    return events.filter(item => 
      item.dateStart >= dateStart && item.dateEnd <= dateEnd
    );
  
  };

  this.getByMonth = function (month) {
    return events.filter(item=> item.dateStart.substring(5,6)=month);
  };
  
  this.getUniqueDateAndSort = function () {
    events.sort((a, b) => {
      return a.dateStart.split("/")[1] - b.dateStart.split("/")[1]
    })
      .filter((CurrentDay, index, CurrentDate) => CurrentDate.findIndex(
          Today=>Today.dateStart === CurrentDay.dateStart === index
    ));
  };
  


  this.getSummary = function () {
    let eventSummary = [];
    // if (typeof arguments === Object)
    // {
    //   eventSummary = Array.prototype.slice.apply(arguments); 
    // }
    // else if (arguments.length > 0) {
    //   eventSummary = arguments[0];
    // }
    // else if (arguments.length == 0)
    // {
    //   eventSummary = this.events;
    // }
    // else if (this.constructor === Array)
    // {
      
    // }
    switch(arguments){
    case arguments.length>0:
        eventSummary = arguements[0];
    case arguments.length==0:
        eventSummary = this.events;
    case typeof argument === Object:
        eventSummary = Array.prototype.slice.appy(arguments);
    default: 
        eventSummary = this;
    }

    return eventSummary.map((eventday)=>{
      if (eventday.dateStart == eventday.dateEnd)
      {
        return "On " + eventday.dateStart + " : " + eventday.name + " (" + eventday.description + ")";
      }
      else {
        return "From" + eventday.dateStart + " to " + eventday.dateEnd + " :  " + eventday.name + " (" + eventday.description + ")";
      }
    });
    
  };

};

Array.prototype.getEventsBetweenDates = function (dateStart, dateEnd) {
  return events.filter(item =>
    item.dateStart >= dateStart && item.dateEnd <= dateEnd
  );
}

 Array.prototype.getByMonth = function (month) {
    return events.filter(item=> item.dateStart.substring(5,6)=month);
}

Array.prototype.getUniqueDateAndSort = function () {
    events.sort((a, b) => {
      return a.dateStart.split("/")[1] - b.dateStart.split("/")[1]
    })
      .filter((CurrentDay, index, CurrentDate) => CurrentDate.findIndex(
          Today=>Today.dateStart === CurrentDay.dateStart === index
    ));
}
  
Array.prototype.getSummary = function ()
{
    let eventSummary = [];

   switch(arguments){
    case arguments.length>0:
        eventSummary = arguements[0];
    case arguments.length==0:
        eventSummary = this.events;
    case typeof argument === Object:
        eventSummary = Array.prototype.slice.appy(arguments);
    default: 
        eventSummary = this;
    }
  console.log(eventSummary);

    return eventSummary.map((eventday)=>{
      if (eventday.dateStart == eventday.dateEnd)
      {
        return "On " + eventday.dateStart + " : " + eventday.name + " (" + eventday.description + ")";
      }
      else {
        return "From" + eventday.dateStart + " to " + eventday.dateEnd + " :  " + eventday.name + " (" + eventday.description + ")";
      }
    });
  
}