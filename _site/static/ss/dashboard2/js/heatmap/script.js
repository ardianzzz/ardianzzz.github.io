var current_startDate = null;
var current_endDate = null;

$(document).ready(function() {
    var config = {
        separator: ' - ',
    };

    $('#date-range').dateRangePicker(config)
        .bind('datepicker-change',function (event, obj) {
            current_startDate = obj.date1;
            current_endDate = obj.date1;
            updateData(obj.date1.getMonth());
        });

    $('#shipping-status').change(function (e) {
        updateData(obj.date1.getMonth());
        console.log($(this).val());
    });

});