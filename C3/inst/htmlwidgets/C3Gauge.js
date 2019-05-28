HTMLWidgets.widget({

  name: 'C3Gauge',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance

    return {

      renderValue: function(x) {

        //var gauge_data = { "Wir" : 75}; //, "Benchmark" : 10};

        var chart_2 = c3.generate(
        {
          bindto: el,
          data : {
            json : x , //gauge_data,
            type : "gauge",
            labels : false
          },
          gauge: {
            min : 0,
            max : 100,
            units : "Zustimmung",
            expand: true,
            width: 50,
            label: {
              format: function (value, ratio) {
                return value;
              }
            }
          },
        
        });
              
      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});