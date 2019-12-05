$(document).ready(function () {
    //for line chart Current cost for the month
    var configLine = {
        type: 'line',
        data: {
            labels: [10, 20, 30, 40, 50, 60, 70, 80, 90],
            datasets: [{
                    label: 'On Demand Cost',
                    backgroundColor: "#FFE385",
                    borderColor: "#FFE385",
                    borderSize: "1px",
                    data: [0.05, 0.10, 0.08, 0.02, 0.10, 0.10, 0.22, 0.80, 0.90],
                    fill: false,
                    fontColor: "#838E9C",
                    defaultFontFamily: "'Open Sans', sans-serif",
                    defaultFontSize: '9px'
                }, {
                    label: 'Spot Cost',
                    backgroundColor: "#29CC97",
                    borderColor: "#29CC97",
                    borderSize: "1px",
                    data: [0.15, 0.20, 0.22, 0.25, 0.15, 0.22, 0.25, 0.75, 0.50],
                    fill: false,
                    fontColor: "#838E9C",
                    defaultFontFamily: "'Open Sans', sans-serif",
                    defaultFontSize: '9px'
                }]
        },
        options: {
            responsive: true,
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                        gridLines: {
                            display: false,
                            color: "rgba(131,142,156,0.3)"
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Timeline',
                            fontColor: "#363840",
                            defaultFontFamily: "'Open Sans', sans-serif",
                            defaultFontSize: '11px'
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            display: true,
                            color: "rgba(131,142,156,0.3)"
                        },
                        display: true,
                        color: "#838E9C",
                        scaleLabel: {
                            display: true,
                            labelString: 'Cost',
                            fontColor: "#363840",
                            defaultFontFamily: "'Open Sans', sans-serif",
                            defaultFontSize: '11px'
                        }
                    }]
            }
        }

    };


    //for bar chart : Service Types 
    var barChartData = {
        labels: ['0', '10', '30', '50', '70', '80'],
        datasets: [{
                label: 'On Demand Cost',
                backgroundColor: '#FFDF74',
                borderColor: '#FFDF74',
                borderWidth: 1,
                data: [65, 59, 20, 81, 56, 55]
            }, {
                label: 'Spot Cost',
                backgroundColor: '#29CC97',
                borderColor: '#29CC97',
                borderWidth: 1,
                data: [15, 29, 30, 41, 56, 65]
            }]

    };


    window.onload = function () {
        var ctx = document.getElementById('service_type_canvas').getContext('2d');
        window.myBar = new Chart(ctx, {
            type: 'bar',
            data: barChartData,
            options: {
                responsive: true,
                scales: {
                    xAxes: [{
                            gridLines: {
                                display: false,
                                color: "rgba(255,99,132,0.2)"
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'Timeline',
                                fontColor: "#363840",
                                defaultFontFamily: "'Open Sans', sans-serif",
                                defaultFontSize: '11px'
                            }
                        }],
                    yAxes: [{
                            gridLines: {
                                display: true,
                                color: "rgba(131,142,156,0.3)"
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'Cost',
                                fontColor: "#363840",
                                defaultFontFamily: "'Open Sans', sans-serif",
                                defaultFontSize: '11px'
                            }
                        }]
                }
            }
        });


        var ctxLine = document.getElementById('inst_type_canvas').getContext('2d');
        window.configLine = new Chart(ctxLine, configLine);
    };

// Total Savings
    var ctx = document.getElementById("total_saving_chart");
// And for a doughnut chart
    var myDoughnutChart = new Chart(ctx, {
        type: 'doughnut',
          data: {
           labels: [
            "App Name 1 (Autoscale)",
            "App Name 1 (Hadoop)",
            "App Name 1 (Hadoop)"
        ],
        datasets: [
            {
                data: [13, 28, 14],
                backgroundColor: [
                    "#FFDF74",
                    "#FF902A",
                    "#F75848"
                ],
                hoverBackgroundColor: [
                    "#FFDF74",
                    "#FF902A",
                    "#F75848"
                ]
            }]
                },
        options: {
            rotation: 1 * Math.PI,
            circumference: 1 * Math.PI,
            cutoutPercentage: 25 * Math.PI,
            legend: {
        display: false
    }
        }        
    });
    
    
// Total Savings
    var ave_uptime_chartctx = document.getElementById("ave_uptime_chart");
// And for a doughnut chart
    var ave_uptime_chart = new Chart(ave_uptime_chartctx, {
        type: 'doughnut',
          data: {
           labels: [
            "Spot Uptime",
            "On Demand Uptime"
        ],
        datasets: [
            {
                data: [43, 29],
                backgroundColor: [
                    "#FFDF74",
                    "#FF902A"
                ],
                hoverBackgroundColor: [
                    "#FFDF74",
                    "#FF902A"
                ]
            }]
                },
        options: {
            rotation: 1 * Math.PI,
            circumference: 1 * Math.PI,
            cutoutPercentage: 25 * Math.PI,
            legend: {
        display: false
    }
        }        
    });

});