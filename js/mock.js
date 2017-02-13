$(document).ready(function() {
    $('#dataTables-example').DataTable({
        responsive: true,
        aaSorting: []       
    });
    
    $('#dataTables-example tbody tr td:first-child').popover({
            trigger: 'hover',
            title: '<b>Trade Details</b>',
            html: 'true',
            container: 'body',
            placement: 'bottom',
            content: 'Security: BOND Broker:Merril Lynch'
     });
    /*$('#dataTables-example thead tr th:last-child').css('text-align','center') ;      
    $('#dataTables-example tbody tr td:last-child').css('text-align','center') ;*/
});
$(function () {
    // Create the chart
    $('#container').highcharts({
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Trades Executed Between January, 2017 to Feb, 2017'
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}: {point.y:.1f}%'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },
        series: [{
            name: "Trades",
            colorByPoint: true,
            data: [{
                name: "Bonds",
                y: 36.33,
                drilldown: "Bonds"
            }, {
                name: "Mortgages",
                y: 34.03,
                drilldown: "Mortgages"
            }, {
                name: "Equity",
                y: 15.38,
                drilldown: "Equity"
            }, {
                name: "Derivatives",
                y: 9.77,
                drilldown: "Derivatives"
            }, {
                name: "Swaps",
                y: 0.91,
                drilldown: "Swaps"
            }, {
                name: "Index Futures",
                y: 0.2,
                drilldown: null
            }]
        }],
        drilldown: {
            series: [{
                name: "Bonds",
                id: "Bonds",
                data: [
                    ["v11.0", 24.13],
                    ["v8.0", 17.2],
                    ["v9.0", 8.11],
                    ["v10.0", 5.33],
                    ["v6.0", 1.06],
                    ["v7.0", 0.5]
                ]
            }, {
                name: "Mortgages",
                id: "Mortgages",
                data: [
                    ["v40.0", 5],
                    ["v41.0", 4.32],
                    ["v42.0", 3.68],
                    ["v39.0", 2.96],
                    ["v36.0", 2.53],
                    ["v43.0", 1.45],
                    ["v31.0", 1.24],
                    ["v35.0", 0.85],
                    ["v38.0", 0.6],
                    ["v32.0", 0.55],
                    ["v37.0", 0.38],
                    ["v33.0", 0.19],
                    ["v34.0", 0.14],
                    ["v30.0", 0.14]
                ]
            }, {
                name: "Equity",
                id: "Equity",
                data: [
                    ["v35", 2.76],
                    ["v36", 2.32],
                    ["v37", 2.31],
                    ["v34", 1.27],
                    ["v38", 1.02],
                    ["v31", 0.33],
                    ["v33", 0.22],
                    ["v32", 0.15]
                ]
            }, {
                name: "Derivatives",
                id: "Derivatives",
                data: [
                    ["v8.0", 2.56],
                    ["v7.1", 0.77],
                    ["v5.1", 0.42],
                    ["v5.0", 0.3],
                    ["v6.1", 0.29],
                    ["v7.0", 0.26],
                    ["v6.2", 0.17]
                ]
            }, {
                name: "Swaps",
                id: "Swaps",
                data: [
                    ["v12.x", 0.34],
                    ["v28", 0.24],
                    ["v27", 0.17],
                    ["v29", 0.16]
                ]
            }]
        }
    });
});