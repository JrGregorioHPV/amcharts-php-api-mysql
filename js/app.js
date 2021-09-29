am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.PieChart);

// Add data
let url = 'data.php';
fetch(url)
    .then(response => response.json())
    .then(datos => mostrar(datos))
    .catch(e => console.log(e));

const mostrar = (productos) => {
    productos.forEach(elemento => {
        chart.data.push(elemento.descricion)
    });
    chart.data = productos;
    console.log(chart.data);
}

// Add and configure Series
var pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "stock";
pieSeries.dataFields.category = "descripcion";
pieSeries.slices.template.stroke = am4core.color("#fff");
pieSeries.slices.template.strokeOpacity = 1;

// This creates initial animation
pieSeries.hiddenState.properties.opacity = 1;
pieSeries.hiddenState.properties.endAngle = -90;
pieSeries.hiddenState.properties.startAngle = -90;

chart.hiddenState.properties.radius = am4core.percent(0);


}); // end am4core.ready()