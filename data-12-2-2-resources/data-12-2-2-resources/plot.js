console.log(cityGrowths);
var topsevenCityNames = cityGrowths.map(city => city.City);
var topsevenCityNames = topsevenCityNames.slice(0,7);
var topsevenCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));
var topsevenCityGrowths = topsevenCityGrowths.slice(0,7);
console.log(topsevenCityGrowths);
console.log(topsevenCityNames);
var trace = {
    x: topsevenCityNames,
    y: topsevenCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);