var map, pointarray, heatmap;

function updateData(startDate, endDate, shippingStatus) {
    $('#spinner').show();
    $.get('data/api.json?minDate='+startDate+'&maxDate='+endDate+'&shippingStatus='+shippingStatus, function (response) {
        $('#spinner').hide();
        var heatMapData = _.map(response.data, function (item) {
            return {
                location: new google.maps.LatLng(item.latitude, item.longitude), 
                weight: item.count
            };
        });
        var pointArray = new google.maps.MVCArray(heatMapData); 
        heatmap.setData(pointArray);  

        setGradient();
        setLegendGradient();
        setLegendLabels(true);  
    });
    
}

function updateFromDate() {
    var startDate = moment().startOf('month').format('YYYY-MM-DD');
    var endDate = moment().endOf('month').format('YYYY-MM-DD');

    $('#date-range').data('dateRangePicker')
        .setDateRange(startDate, endDate);
}

function initialize() {
    var mapOptions = {
        zoom: 5,
        center: new google.maps.LatLng(-2.548926,118.0148634),
        mapTypeId: google.maps.MapTypeId.SATELLITE
    };

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var heatMapData = [];

    var pointArray = new google.maps.MVCArray(heatMapData);

    heatmap = new google.maps.visualization.HeatmapLayer({
        data: pointArray,
        dissipating: true,
    });

    heatmap.setMap(map);
    
    setGradient();
    setLegendGradient();
    setLegendLabels();

    updateFromDate();

    google.maps.event.addListenerOnce(map, 'tilesloaded', function() {
        $('#spinner').hide();
    });
}

function setGradient() {
    gradient = [
        'rgba(8, 255, 0, 0)',
        'rgba(8, 255, 0, 1)',
        'rgba(32, 255, 0, 1)',
        'rgba(56, 255, 0, 1)',
        'rgba(80, 255, 0, 1)',
        'rgba(104, 255, 0, 1)',
        'rgba(128, 255, 0, 1)',
        'rgba(151, 255, 0, 1)',
        'rgba(175, 255, 0, 1)',
        'rgba(199, 255, 0, 1)',
        'rgba(223, 255, 0, 1)',
        'rgba(247, 255, 0, 1)',
        'rgba(255, 239, 0, 1)',
        'rgba(255, 215, 0, 1)',
        'rgba(255, 191, 0, 1)',
        'rgba(255, 167, 0, 1)',
        'rgba(255, 143, 0, 1)',
        'rgba(255, 120, 0, 1)',
        'rgba(255, 96, 0, 1)',
        'rgba(255, 72, 0, 1)',
        'rgba(255, 48, 0, 1)',
        'rgba(255, 24, 0, 1)',
        'rgba(255, 0, 0, 1)'
    ]
    heatmap.set('gradient', gradient);
}

function setLegendGradient() {
    var gradientCss = '(left';
    for (var i = 0; i < gradient.length; ++i) {
        gradientCss += ', ' + gradient[i];
    }
    gradientCss += ')';
      
    $('#legendGradient').css('background', '-webkit-linear-gradient' + gradientCss);
    $('#legendGradient').css('background', '-moz-linear-gradient' + gradientCss);
    $('#legendGradient').css('background', '-o-linear-gradient' + gradientCss);
    $('#legendGradient').css('background', 'linear-gradient' + gradientCss);
}

function setLegendLabels(reload) {
    var calculateLegend = function() {
        var maxIntensity;
        var getMax = heatmap['gm_bindings_']['data'];
        if(typeof getMax !== 'undefined'){
            for(var p in getMax){
                maxIntensity = getMax[p].md.j;
                break;
            }
        }
        var legendWidth = $('#legendGradient').outerWidth();
        var step = maxIntensity;

        $('#legendMin').html(0);
        $('#legendMax').html(maxIntensity);
    }

    if (!reload)
        google.maps.event.addListenerOnce(map, 'tilesloaded', calculateLegend);
    else
        setTimeout(calculateLegend, 50);
}

function toggleHeatmap() {
    heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeRadius() {
    heatmap.set('radius', heatmap.get('radius') ? null : 20);
}

function changeOpacity() {
    heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
}

google.maps.event.addDomListener(window, 'load', initialize);