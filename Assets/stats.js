am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_frozen);
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv", am4maps.MapChart);
chart.seriesContainer.resizable = false;

// Set map definition
chart.geodata = am4geodata_worldLow;

// Set projection
chart.projection = new am4maps.projections.Orthographic();
chart.panBehavior = "rotateLongLat";
chart.deltaLatitude = -20;
chart.padding(20,20,20,20);

// limits vertical rotation
chart.adapter.add("deltaLatitude", function(delatLatitude){
    return am4core.math.fitToRange(delatLatitude, -90, 90);
})

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

// Make map load polygon (like country names) data from GeoJSON
polygonSeries.useGeodata = true;
polygonSeries.data =[
    {id: 'AQ', value1: 198843, value2:0},
    {id: 'HM', value1: 'NA', value2:'NA'},
    {id: 'TF', value1: 'NA', value2:'NA'},
    {id: 'GS', value1: 'NA', value2:'NA'},
    {id: 'AF', value1:9900004, value2:0.03},
    {id: 'AL', value1: 5208319, value2: 0.01},
    {id: 'DZ', value1: 156220560, value2: 0.44},
    {id: 'AO', value1: 30566933, value2: 0.09},
    {id: 'AI', value1: 30262, value2: 0},
    {id: 'AG', value1: 438763, value2: 0},
    {id: 'AR', value1: 200708270, value2: 0.56},
    {id: 'AM', value1: 4597845, value2: 0.01},
    {id: 'AW', value1: 286871, value2: 0},
    {id: 'AU', value1: 414988700, value2: 1.16},
    {id: 'AT', value1: 73764112, value2: 0.21},
    {id: 'AZ', value1: 33614235, value2: 0.09},
    {id: 'BS', value1: 4404247, value2: 0.01},
    {id: 'BH', value1: 24458384, value2: 0.07},
    {id: 'BD', value1: 74476230, value2: 0.21},
    {id: 'BB', value1: 1541447, value2: 0},
    {id: 'BY', value1: 53200000, value2: 0.01},
    {id: 'BE', value1: 94722813, value2: 0.26},
    {id: 'BZ', value1: 1114105, value2: 0},
    {id: 'BJ', value1: 6563709, value2: 0.02},
    {id: 'BM', value1: 639352, value2: 0},
    {id: 'BT', value1: 1682100, value2: 0},
    {id: 'BO', value1: 19463728, value2: 0.05},
    {id: 'BA', value1: 25674120, value2: 0.07},
    {id: 'BW', value1: 6438429, value2: 0.02},
    {id: 'BR', value1: 462994920, value2: 1.29},
    {id: 'VG', value1: 99762, value2: 0},
    {id: 'BN', value1: 7672127, value2: 0.02},
    {id: 'BG', value1: 50872910, value2: 0.14},
    {id: 'BF', value1: 2352070, value2: 0.01},
    {id: 'BI', value1: 1093618, value2: 0},
    {id: 'CV', value1: 99687, value2: 0},
    {id: 'KH', value1: 9454331, value2: 0.03},
    {id: 'CM', value1: 9454331, value2: 0.03},
    {id: 'CA', value1: 675918610, value2: 1.89},
    {id: 'KY', value1: 406057, value2: 0},
    {id: 'CF', value1: 543229, value2: 0},
    {id: 'TD', value1: 1670941, value2: 0},
    {id: 'CL', value1: 81258525, value2: 0.23},
    {id: 'CN', value1: 10432751400, value2: 29.18},
    {id: 'CO', value1: 77667594, value2: 0.22},
    {id: 'KM', value1: 108422, value2: 0},
    {id: 'CK', value1: 37354, value2: 0},
    {id: 'CR', value1: 8328890, value2: 0.02},
    {id: 'CI', value1: 10056492, value2: 0.03},
    {id: 'HR', value1: 19408194, value2: 0.05},
    {id: 'CU', value1: 30389116, value2: 0.08},
    {id: 'CY', value1: 6872427, value2: 0.02},
    {id: 'CZ', value1: 111825428, value2: 0.31},
    {id: 'DK', value1: 38007645, value2: 0.11},
    {id: 'DJ', value1: 1508851, value2: 0},
    {id: 'DM', value1: 185767, value2: 0},
    {id: 'DO', value1: 23466740, value2: 0.07},
    {id: 'CD', value1: 6564773, value2: 0.02},
    {id: 'EC', value1: 40065690, value2: 0.11},
    {id: 'EG', value1: 219377350, value2: 0.61},
    {id: 'SV', value1: 6853766, value2: 0.02},
    {id: 'GQ', value1: 2156371, value2: 0.01},
    {id: 'ER', value1: 684140, value2: 0},
    {id: 'EE', value1: 22402414, value2: 0.06},
    {id: 'SZ', value1: 657572, value2: 0},
    {id: 'ET', value1: 10438855, value2: 0.03},
    {id: 'FO', value1: 1953, value2: 0},
    {id: 'FK', value1: 48568, value2: 0},
    {id: 'FJ', value1: 1703193, value2: 0},
    {id: 'FI', value1: 51183960, value2: 0.14},
    {id: 'FR', value1: 331533320, value2: 0.93},
    {id: 'GF', value1: 1473719, value2: 0},
    {id: 'PF', value1: 1003249, value2: 0},
    {id: 'GA', value1: 5694208, value2: 0.02},
    {id: 'GM', value1: 254127, value2: 0},
    {id: 'GE', value1: 8610414, value2: 0.02},
    {id: 'DE', value1: 775752190, value2: 2.17},
    {id: 'GH', value1: 14469986, value2: 0.04},
    {id: 'GI', value1: 572708, value2: 0},
    {id: 'GR', value1: 67840662, value2: 0.19},
    {id: 'GL', value1: 1530, value2: 0},
    {id: 'GD', value1: 554848, value2: 0},
    {id: 'GP', value1: 2478038, value2: 0.01},
    {id: 'GT', value1: 18539316, value2: 0.05},
    {id: 'GN', value1: 2071798, value2: 0.01},
    {id: 'GW', value1: 318706,value2:  0},
    {id: 'GY', value1: 3253057, value2: 0.01},
    {id: 'HT', value1: 3086897, value2: 0.01},
    {id: 'HN', value1: 9320279, value2: 0.03},
    {id: 'HK', value1: 47066386, value2: 0.13},
    {id: 'HU', value1: 51018899, value2: 0.14},
    {id: 'IS', value1: 3923884, value2: 0.01},
    {id: 'IN', value1: 2533638100, value2: 7.09},
    {id: 'IR', value1: 642560030, value2: 1.8},
    {id: 'ID', value1: 530035650, value2: 1.48},
    {id: 'IQ', value1: 162646160, value2: 0.45},
    {id: 'IE', value1: 39086565, value2: 0.11},
    {id: 'IL', value1: 65201588, value2: 0.18},
    {id: 'IT', value1: 358139550, value2: 1},
    {id: 'JM', value1: 8946575, value2: 0.03},
    {id: 'JP', value1: 1239592060, value2: 3.47},
    {id: 'JO', value1: 22772370, value2: 0.06},
    {id: 'KZ', value1: 231919540, value2: 0.65},
    {id: 'KE', value1: 16334919, value2: 0.05},
    {id: 'KI', value1: 52818, value2: 0},
    {id: 'KW', value1: 101492225, value2: 0.28},
    {id: 'KG', value1: 6941784, value2: 0.02},
    {id: 'LA', value1: 4531276, value2: 0.01},
    {id: 'LV', value1: 8157157, value2: 0.02},
    {id: 'LB', value1: 21863288, value2: 0.06},
    {id: 'LS', value1: 318438, value2: 0},
    {id: 'LR', value1: 846658, value2: 0},
    {id: 'LY', value1: 52696075, value2: 0.15},
    {id: 'LT', value1: 13685264, value2: 0.04},
    {id: 'LU', value1: 10144632, value2: 0.03},
    {id: 'MO', value1: 3106518, value2: 0.01},
    {id: 'MG', value1: 3026047, value2: 0.01},
    {id: 'MW', value1: 1815598, value2: 0.01},
    {id: 'MY', value1: 266251542, value2: 0.74},
    {id: 'MV', value1: 1233015, value2: 0},
    {id: 'ML', value1: 1606421, value2: 0},
    {id: 'MT', value1: 2257870, value2: 0.01},
    {id: 'MQ', value1: 2715477, value2: 0.01},
    {id: 'MR', value1: 2564345, value2: 0.01},
    {id: 'MU', value1: 3192307, value2: 0.01},
    {id: 'MX', value1: 441412750, value2: 1.23},
    {id: 'MD', value1: 8258774, value2: 0.02},
    {id: 'MN', value1: 18574260, value2: 0.05},
    {id: 'ME', value1: 16249039, value2: 0.05},
    {id: 'MA', value1: 57694464, value2: 0.16},
    {id: 'XK', value1: 9500000, value2: 0.02},
    {id: 'MZ', value1: 5859171, value2: 0.02},
    {id: 'MM', value1: 16701776, value2: 0.05},
    {id: 'NA', value1: 3901830, value2: 0.01},
    {id: 'NP', value1: 7833787, value2: 0.02},
    {id: 'NL', value1: 163419285, value2: 0.46},
    {id: 'NC', value1: 2338717, value2: 0.01},
    {id: 'NZ', value1: 33276202, value2: 0.09},
    {id: 'NI', value1: 5325447, value2: 0.01},
    {id: 'NE', value1: 2088475, value2: 0.01},
    {id: 'NG', value1: 82634214, value2: 0.23},
    {id: 'KP', value1: 58708734, value2: 0.16},
    {id: 'MK', value1: 8896732, value2: 0.02},
    {id: 'NO', value1: 43456012, value2: 0.12},
    {id: 'OM', value1: 87835773, value2: 0.25},
    {id: 'PK', value1: 178013820, value2: 0.5},
    {id: 'PW', value1: 41732, value2: 0},
    {id: 'PA', value1: 11599764, value2: 0.03},
    {id: 'PG', value1: 9086988, value2: 0.03},
    {id: 'PY', value1: 5998469, value2: 0.02},
    {id: 'PE', value1: 57692879, value2: 0.16},
    {id: 'PH', value1: 126922662, value2: 0.35},
    {id: 'PL', value1: 296659670, value2: 0.83},
    {id: 'PT', value1: 50142844, value2: 0.14},
    {id: 'PR', value1: 712758, value2: 0},
    {id: 'QA', value1: 98990085, value2: 0.28},
    {id: 'CG', value1: 5212302, value2: 0.01},
    {id: 'RO', value1: 78770824, value2: 0.22},
    {id: 'RU', value1: 1661899300, value2: 4.65},
    {id: 'RW', value1: 1403087, value2: 0},
    {id: 'RE', value1: 1132331, value2: 0},
    {id: 'SH', value1: 13128, value2: 0},
    {id: 'KN', value1: 203036, value2: 0},
    {id: 'LC', value1: 608182, value2: 0},
    {id: 'PM', value1: 8842, value2: 0},
    {id: 'WS', value1: 169939, value2: 0},
    {id: 'ST', value1: 56185, value2: 0},
    {id: 'SN', value1: 8247295, value2: 0.02},
    {id: 'RS', value1: 41168059, value2: 0.12},
    {id: 'SC', value1: 519693, value2: 0},
    {id: 'SL', value1: 1272332, value2: 0},
    {id: 'SG', value1: 48381759, value2: 0.14},
    {id: 'SK', value1: 36817242, value2: 0.1},
    {id: 'SI', value1: 14722601, value2: 0.04},
    {id: 'SB', value1: 341748, value2: 0},
    {id: 'SO', value1: 1268442, value2: 0},
    {id: 'KR', value1: 604043830, value2: 1.69},
    {id: 'ZA', value1: 390557850, value2: 1.09},
    {id: 'SS', value1: 2160000, value2: 0},
    {id: 'SA', value1: 517079407, value2: 1.45},
    {id: 'ES', value1: 251892320, value2: 0.7},
    {id: 'LK', value1: 18454691, value2: 0.05},
    {id: 'VC', value1: 362414, value2: 0},
    {id: 'SD', value1: 13294106, value2: 0.04},
    {id: 'SR', value1: 2152933, value2: 0.01},
    {id: 'SJ', value1: 43456012, value2: 0.12},
    {id: 'SE', value1: 44694415, value2: 0.13},
    {id: 'CH', value1: 39666930, value2: 0.11},
    {id: 'SY', value1: 38054696, value2: 0.11},
    {id: 'TW', value1: 276724868, value2: 0.77},
    {id: 'TJ', value1: 6049757, value2: 0.02},
    {id: 'TZ', value1: 9731560, value2: 0.03},
    {id: 'TH', value1: 271040160, value2: 0.76},
    {id: 'TL', value1: 495687, value2: 0},
    {id: 'TG', value1: 2321546, value2: 0.01},
    {id: 'TO', value1: 251375, value2: 0},
    {id: 'TT', value1: 34974263, value2: 0.1},
    {id: 'TN', value1: 29395965, value2:0.08},
    {id: 'TR', value1: 368122740, value2: 1.03},
    {id: 'TM', value1: 79279216, value2: 0.22},
    {id: 'TC', value1: 65451, value2: 0},
    {id: 'UG', value1: 5009493, value2: 0.01},
    {id: 'UA', value1: 187440000, value2: 0.52},
    {id: 'AE', value1: 218788684, value2: 0.61},
    {id: 'GB', value1: 367860350, value2: 1.03},
    {id: 'US', value1: 5011686600, value2: 14.02},
    {id: 'UY', value1: 6508013, value2: 0.02},
    {id: 'UZ', value1: 109347340, value2: 0.31},
    {id: 'VU', value1: 137706, value2: 0},
    {id: 'VE', value1: 175884256, value2: 0.49},
    {id: 'VN', value1: 206042140, value2: 0.58},
    {id: 'EH', value1: 207592, value2: 0},
    {id: 'YE', value1: 25647990, value2: 0.07},
    {id: 'ZM', value1: 4230584, value2: 0.01},
    {id: 'ZW', value1:10062628, value2: 0.03}
];
for(var obj in polygonSeries.data) {
    var abc = polygonSeries.data[obj];
    if(abc.value2 == 0) {
        abc.color = "#99ff99";
    } else if(abc.value2 <= 0.5) {
        abc.color = "#66ff66";
    } else if(abc.value2 <= 1) {
        abc.color = "#00ff00";
    } else if(abc.value2 <= 5) {
        abc.color = "#00cc00";
    } else if(abc.value2 <= 10) {
        abc.color = "#009900";
    } else if(abc.value2 > 10) {
        abc.color = "#004d00";
    }
}
// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "[bold]{name}[/] \n CO2 emission(in tons): [bold]{value1}[/] \n % contribution to total world emissions name: [bold]{value2}[/]";

    
polygonTemplate.propertyFields.fill = "color";
polygonTemplate.stroke = am4core.color("#454a58");
polygonTemplate.strokeWidth = 0.5;


var graticuleSeries = chart.series.push(new am4maps.GraticuleSeries());
graticuleSeries.mapLines.template.line.stroke = am4core.color("#ffffff");
graticuleSeries.mapLines.template.line.strokeOpacity = 0;
graticuleSeries.fitExtent = false;


chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 1;
chart.backgroundSeries.mapPolygons.template.polygon.fill = am4core.color("#141452");

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = chart.colors.getIndex(0).brighten(1);
    
let animation;
setTimeout(function(){
  animation = chart.animate({property:"deltaLongitude", to:100000}, 20000000);
}, 3000)

chart.seriesContainer.events.on("down", function(){
if(animation){
  animation.stop();
}
})

}); // end am4core.ready()
