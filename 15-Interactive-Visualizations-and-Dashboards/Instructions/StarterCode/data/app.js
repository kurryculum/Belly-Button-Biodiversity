//  d3.select("selDataset");
//  button.on("change",runenter); 
//  var button =
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
});





//  function runenter (){ 
//  d3.event.preventDefault();

//  var input = d3.select("#this.value");
//  var inputValue = input.property("value");

//  console.log(inputValue);

//  var filteredData = data.filter(names => id.this.value === inputValue);


//   console.log(filteredData);
