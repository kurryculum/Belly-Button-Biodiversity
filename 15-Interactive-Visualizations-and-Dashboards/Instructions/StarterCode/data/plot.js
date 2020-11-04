
// use d3 json () to fetch data from json file
// use function as optionChanged per html on chang
function optionChanged(sampleID) {
d3.json("data/samples.json").then((sampleData) => {
    console.log(sampleData);
var metadata = sampleData.metadata;
// // use filter () to pass the function as its argument 
var filteredSamples = metadata.filter(x => x.id == sampleID);

    var m = d3.select("#sample-metadata");
    //make sure to empty html before appending and loading data
        m.html("")
        Object.entries(filteredSamples[0]).forEach(function([key,value]){
            console.log(key,value);
        
             m.append("h3").text(value);
            
        });
    });

  

d3.json("data/samples.json").then((sampleData) => {
    console.log(sampleData);
    var samples = sampleData.samples;
    // // use filter () to pass the function as its argument 
    var filteredSample = samples.filter(y => y.otu_id === sampleID);
    
        var m1 = d3.select("#bar");
        //make sure to empty html before appending and loading data
            m1.html("")
            // Object.entries(filteredSample[0]).forEach(function([key,value]){
                // console.log(key,value);
    var trace1 = {
        x: sampleData.otu_ids,
        y: sampleData.sample_values,
        text: sampleData.otu_labels,
        // name = "Ids",
        type: "bar",
        orientation: "h"
    };

    var samples = [trace1]

    var layout = {
        title: "Belly_button_diversity",
        xaxis: { title: "sample_values" },
        yaxis: { title: "otu_ids" }
    };
    Plotly.newPlot("bar", samples, layout);

    

        // load data
        var trace1 = {
            x: sampleData.otu_ids,
            y: sampleData.sample_value,
            text: sampleData.otu_labels,
            mode: 'markers',
            marker: {
              color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
              size: [40, 60, 80, 100]
            }
          };
          
          var data = [trace1];
          
          var layout = {
            title: 'Bubble Chart Hover Text',
            showlegend: false,
            height: 600,
            width: 600
          };
          
          Plotly.newPlot('bubble', data, layout);
        
      
      });
  






}

optionChanged(940);
