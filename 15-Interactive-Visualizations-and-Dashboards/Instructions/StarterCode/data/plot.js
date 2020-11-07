
// use d3 json () to fetch data from json file
// use function as optionChanged per html on chang

d3.json("data/samples.json").then((sampleData) => {
    console.log(sampleData);
    var selectTag = d3.select("select");

    //we have select all options tags from inside select tag (which there are 0 atm)
    //and assigned data as to be the base of modelling that selection.
    var options = selectTag.selectAll('option')
        .data(sampleData.names);


    //d3 sees we have less elements (0) than the data (2), so we are tasked to create
    //these missing inside the `options.enter` pseudo selection.
    //if we had some elements from before, they would be reused, and we could access their
    //selection with just `options`
    options.enter()
        .append('option')
        .attr('value', function (d) {
            return d;
        })
        .text(function (d) {
            return d;
        });
    var firstSample = 940;
    demodata(firstSample);
    demochart(firstSample);
});
function optionChanged(sample){
    demodata(sample);
    demochart(sample);
}

function demodata(sample) {
    d3.json("data/samples.json").then((sampleData) => {
        console.log(sampleData);
        var metadata = sampleData.metadata;
        // // use filter () to pass the function as its argument 
        var filteredSamples = metadata.filter(x => x.id == sample);

        var m = d3.select("#sample-metadata");
        //make sure to empty html before appending and loading data
        m.html("")
        Object.entries(filteredSamples[0]).forEach(function ([key, value]) {
            console.log(key, value);

            m.append("h3").text(value);

        });
    });
}
var demo;
function demochart(sample) {
    d3.json("data/samples.json").then((sampleData) => {
        console.log(sampleData);
        var sampleset = sampleData.samples;
        console.log(sampleset);
        var filteredSample = sampleset.filter(y => y.id == sample);
        console.log(filteredSample,sample);
        // var otu_ids = filteredSample.otu_ids;
        // var sample_values = filteredSample.sample_values;
        // var otu_labels = filteredSample.otu_labels;
    

        var otu_ids = filteredSample.map(sample => sample.otu_ids);
        var sample_values = filteredSample.map(sample => sample.sample_values);
        var otu_labels = filteredSample.map(sample => sample.otu_labels);
        console.log(otu_labels);
        var trace1 = {
            x: otu_ids[0],
            y: sample_values[0],
            text: otu_labels[0],
            // name = "Ids",
            type: "bar",
            orientation: "h"
        };

        var samples = [trace1]

        var layout1 = {
            title: "Belly_button_diversity",
            xaxis: { title: "sample_values" },
            yaxis: { title: "otu_ids" }
        };

        Plotly.newPlot("bar", samples, layout1)

        // console.log(sampleData.otu_ids);

        // load data
        var trace2 = {
            x: otu_ids[0],
            y: sample_values[0],
            text: otu_labels[0],
            mode: 'markers',
            marker: {
                color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
                size: [40, 60, 80, 100]
            }
        };

        var data = [trace2];

        var layout2 = {
            title: 'Bubble Chart Hover Text',
            showlegend: false,
            height: 600,
            width: 600
        };

        Plotly.newPlot('bubble', data, layout2);


    });



    // }); 


}