//Name: Paul  Surname: Nhlapo
function EventHandler(events) {
  this.events = events;

  this.getEventsBetweenDates = function (dateStart, dateEnd) {
    return events.filter(item => 
      item.dateStart >= dateStart && item.dateEnd <= dateEnd
    );
  
  };

  this.getByMonth = function (month) {
    return events.filter(item=> item.dateStart.substring(5,7)==month);
  };
  
  this.getUniqueDateAndSort = function () {
    return events.sort((a, b) => 
      a.dateStart.split("/")[1] - b.dateStart.split("/")[1]
    )
      .filter((CurrentDay, index, today_date) => today_date.findIndex(
          (Today)=>Today.dateStart === CurrentDay.dateStart )=== index
    );

  };
  


  this.getSummary = function () {
    let eventSummary = [];
    if (typeof arguments === Object) {
      eventSummary = Array.prototype.slice.apply(arguments);
    }
    else if (arguments.length > 0) {
      eventSummary = arguments[0];
    }
    else if (arguments.length == 0) {
      eventSummary = this.events;
    }
    else if (this.constructor === Array) {
      eventSummary = this.Array;
    }
    else {

      eventSummary = arguments[0];
    }
      
    return eventSummary.map((summary)=>{
        if(summary.dateStart == summary.dateEnd)
        {
            return "On " + summary.dateStart + ": " + summary.name + " (" + summary.description + ")";
        }
        else {
            return "From " + summary.dateStart + " to " + summary.dateEnd + ": " + summary.name + " (" + summary.description + ")";
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
    return events.filter(item=> item.dateStart.substring(5,7)==month);
}

Array.prototype.getUniqueDateAndSort = function () {
   return events.sort((a, b) => 
      a.dateStart.split("/")[1] - b.dateStart.split("/")[1]
    )
      .filter((CurrentDay, index, today_date) => today_date.findIndex(
          (Today)=>Today.dateStart === CurrentDay.dateStart )=== index
    );

}
  
Array.prototype.getSummary = function ()
{
      let eventSummary = [];
    if (typeof arguments === Object) {
      eventSummary = Array.prototype.slice.apply(arguments);
    }
    else if (arguments.length > 0) {
      eventSummary = arguments[0];
    }
    else if (arguments.length == 0) {
      eventSummary = this.events;
    }
    else if (this.constructor === Array) {
      eventSummary = this.Array;
    }
    else {

      eventSummary = arguments[0];
    }
      
    return eventSummary.map((summary)=>{
        if(summary.dateStart == summary.dateEnd)
        {
          return "On " + summary.dateStart + ": " + summary.name + " (" + summary.description + ")";
        }
        else
        {
          return "From " + summary.dateStart + " to " + summary.dateEnd + ": " + summary.name + " (" + summary.description + ")";
        }
    });
}

// let handler = new EventHandler(events);

// let m = handler.getByMonth(05);
// let m = handler.getEventsBetweenDates("2022/02/01", "2022/02/16");
// let m = handler.getUniqueDateAndSort();
// let m = handler.getSummary();

// console.log(m);