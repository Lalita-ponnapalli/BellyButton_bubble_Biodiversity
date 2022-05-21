// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);

    // Create a variable that holds the samples array. 
    var samples = data.samples;
    var resultArray = samples.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];

    
    // Create a variable that filters the samples for the object with the desired sample number.
    var resultArray = samples.filter(sampleObj => sampleObj.id == sample);
    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var objs = data.metadata;
    // Create a variable that holds the first sample in the array.
  
    gaugeChart(matchedSampleObj[0]);
    // 2. Create a variable that holds the first sample in the metadata array.
    var objs = data.metadata;

    // Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otu_ids = result.otu_ids;
    var otu_labels = result.otu_labels;
    var sample_values = result.sample_values;

    // 3. Create a variable that holds the washing frequency.
    var washing_fre =result.washing_fre ;
    // Create the yticks for the bar chart.

    // Use Plotly to plot the bar data and layout.
    //Plotly.newPlot();
    
    // Use Plotly to plot the bubble data and layout.
    //Plotly.newPlot();
   
    
    // 4. Create the trace for the gauge chart.
    var gaugeData = [
     
    ];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { 
     
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot();
  });
}
