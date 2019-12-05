  $(document).ready(function () {
      $('.edit-row').hide();
              $('.edit-a').click(function (e) {
      e.preventDefault();
              $(this).parents('tr').hide();
              $('.add-user-wrap').hide();
              $('.edit-row').fadeIn();
      });
              $('#search-timeline-wrap, #timeline-search-info').hide();
              $('#timeline-btn').click(function (e2) {
      e2.preventDefault();
              $('#comman-timeline-wrap').hide().delay(5000);
              $('#search-timeline-wrap, #timeline-search-info').fadeIn();
      });
      
      //for pia chart randomScalingFactor
              var randomScalingFactor = function() {
              return Math.round(Math.random() * 100);
              };
              var configPie = {
              type: 'pie',
                      data: {
                      datasets: [{
                      data: [75, 25],                       
                              backgroundColor: [
                                      '#FFE385',
                                      '#29CC97'
                              ],                            
                      }],
                              labels: [
                                      'On Demand Instance',
                                      'Spot Instance'
                              ]
                      },
                      options: {
                      responsive: false,
                              fontColor: "#363840",
                              defaultFontFamily: "'Open Sans', sans-serif",
                              defaultFontSize: '14px',                               
                              legend: {
        display: false
    }
                      }
                      	     
              };
              
              //for line chart Current cost for the month
              var configLine = {
              type: 'line',
                      data: {
                      labels: ["04:30", "04:45", "05:00", "05:15", "05:30", "5:45", "6:00"],
                              datasets: [{
                              label: 'With Auto scale',
                                      backgroundColor: "#FFF3CC",
                                      borderColor: "#FFE385",
                                      borderSize: "1px",
                                      data: [0.05, 0.10, 0.08, 0.02, 0.10, 0.10, 0.22],
                                      fill: true,
                                      fontColor: "#838E9C",
                                      defaultFontFamily: "'Open Sans', sans-serif",
                                      defaultFontSize: '9px'
                              }, {
                              label: 'Cost Saving',
                                      backgroundColor: "#BFF0E0",
                                      borderColor: "#29CC97",
                                      borderSize: "1px",
                                      data: [0.15, 0.20, 0.22, 0.25, 0.15, 0.22, 0.25],
                                      fill: true,
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
                                      
                                              scaleLabel: {
                                              display: true,
                                                      labelString: 'Cost: $ per hour',
                                                      fontColor: "#363840",
                                                      defaultFontFamily: "'Open Sans', sans-serif",
                                                      defaultFontSize: '11px'
                                              }
                                      }]
                              }
                      }

              };
              
              
              
  //for line chart Average CPU : avg_cpu_canvas
              var configLineupu = {
              type: 'line',
                      data: {
                      labels: ["04:30", "04:45", "05:00", "05:15", "05:30", "5:45", "6:00"],
                              datasets: [{
                              label: 'Average CPU',
                                      backgroundColor: "#BFF0E0",
                                      borderColor: "#29CC97",
                                      borderSize: "1px",
                                      data: [10, 20, 32, 20, 80, 60, 62],
                                      fill: true,
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
                                              scaleLabel: {
                                              display: true,
                                                      labelString: 'Average CPU',
                                                      fontColor: "#363840",
                                                      defaultFontFamily: "'Open Sans', sans-serif",
                                                      defaultFontSize: '11px'
                                              }
                                      }]
                              }
                      }

              };
              
              
  //for Avg. response time : avg_time_canvas
              var configLinetime = {
              type: 'line',
                      data: {
                      labels: ["04:30", "04:45", "05:00", "05:15", "05:30", "5:45", "6:00"],
                              datasets: [{
                              label: 'Response Time',
                                      backgroundColor: "#BFF0E0",
                                      borderColor: "#29CC97",
                                      borderSize: "1px",
                                      data: [0.05, 0.10, 0.08, 0.02, 0.10, 0.10, 0.22],
                                      fill: true,
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
                                              scaleLabel: {
                                              display: true,
                                                      labelString: 'Response Time',
                                                      fontColor: "#363840",
                                                      defaultFontFamily: "'Open Sans', sans-serif",
                                                      defaultFontSize: '11px'
                                              }
                                      }]
                              }
                      }

              };
              
              
  //for Avg. Network bytes : avg_net_canvas
              var configLineAvg = {
              type: 'line',
                      data: {
                      labels: ["04:30", "04:45", "05:00", "05:15", "05:30", "5:45", "6:00"],
                              datasets: [{
                              label: 'Avg. Network bytes',
                                      backgroundColor: "#FFF3CC",
                                      borderColor: "#FFE385",
                                      borderSize: "1px",
                                      data: [12, 15, 32, 12, 60, 88, 52],
                                      fill: true,
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
                                              scaleLabel: {
                                              display: true,
                                                      labelString: 'Average CPU',
                                                      fontColor: "#363840",
                                                      defaultFontFamily: "'Open Sans', sans-serif",
                                                      defaultFontSize: '11px'
                                              }
                                      }]
                              }
                      }

              };
              
              //for Avg. Network bytes out : avg_net_out_canvas
              var configAvgNetOut = {
              type: 'line',
                      data: {
                      labels: ["04:30", "04:45", "05:00", "05:15", "05:30", "5:45", "6:00"],
                              datasets: [{
                              label: 'Average CPU',
                                      backgroundColor: "#FFE9D4",
                                      borderColor: "#FF902A",
                                      borderSize: "1px",
                                      data: [10, 25, 12, 50, 40, 80, 22],
                                      fill: true,
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
                                              scaleLabel: {
                                              display: true,
                                                      labelString: 'Average CPU',
                                                      fontColor: "#363840",
                                                      defaultFontFamily: "'Open Sans', sans-serif",
                                                      defaultFontSize: '11px'
                                              }
                                      }]
                              }
                      }

              };
              window.onload = function () {
              var ctxLine = document.getElementById('current_cost_canvas').getContext('2d');
                      window.configLine = new Chart(ctxLine, configLine);
                      var ctxPie = document.getElementById('chart_area').getContext('2d');                                            
                      window.myPie = new Chart(ctxPie, configPie);                              
                      var cpuCanvas = document.getElementById('avg_cpu_canvas').getContext('2d');
                      window.configLineupu = new Chart(cpuCanvas, configLineupu);     
                      var timeCanvas = document.getElementById('avg_time_canvas').getContext('2d');
                      window.configLinetime = new Chart(timeCanvas, configLinetime);  
                      var avgCanvas = document.getElementById('avg_net_canvas').getContext('2d');
                      window.configLineAvg = new Chart(avgCanvas, configLineAvg);   
                      var avgOutCanvas = document.getElementById('avg_net_out_canvas').getContext('2d');
                      window.configAvgNetOut = new Chart(avgOutCanvas, configAvgNetOut); 
              };   
                        
                        
                         //progress bar -Average Uptime
              var avgContainerUptimeBar = new ProgressBar.SemiCircle(avgContainerUptime, {
              strokeWidth: 8,
                      color: '#E8E8E8',
                      trailColor: '#eee',
                      trailWidth: 8,
                      easing: 'easeInOut',
                      duration: 1400,
                      svgStyle: null,
                      text: {
                      value: '',
                              alignToBottom: false
                      },
                      from: {color: '#FFDF74'},
                      to: {color: '#FFDF74'},
                      // Set default step function for all animate calls
                      step: (state, avgContainerUptimeBar) => {
              avgContainerUptimeBar.path.setAttribute('stroke', state.color);
                      var value = Math.round(avgContainerUptimeBar.value() * 100);
                      if (value === 0) {
              avgContainerUptimeBar.setText('%');
              }
              else {
              avgContainerUptimeBar.setText(value + '%');
              }
              avgContainerUptimeBar.text.style.color = state.color;
              }
              });
              avgContainerUptimeBar.text.style.fontFamily = '"Poppins", sans-serif';
              avgContainerUptimeBar.text.style.fontSize = '42px';
              avgContainerUptimeBar.text.style.color = '#363840';
              avgContainerUptimeBar.animate(0.19); // Number from 0.0 to 1.0

              //progress bar -Spot Percentage
              var spotContainerPerBar = new ProgressBar.SemiCircle(spotContainerPer, {
              strokeWidth: 8,
                      color: '#E8E8E8',
                      trailColor: '#eee',
                      trailWidth: 8,
                      easing: 'easeInOut',
                      duration: 1400,
                      svgStyle: null,
                      text: {
                      value: '',
                              alignToBottom: false
                      },
                      from: {color: '#FF902A'},
                      to: {color: '#FF902A'},
                      // Set default step function for all animate calls
                      step: (state, spotContainerPerBar) => {
              spotContainerPerBar.path.setAttribute('stroke', state.color);
                      var value = Math.round(spotContainerPerBar.value() * 100);
                      if (value === 0) {
              spotContainerPerBar.setText('%');
              }
              else {
              spotContainerPerBar.setText(value + '%');
              }
              spotContainerPerBar.text.style.color = state.color;
              }
              });
              spotContainerPerBar.text.style.fontFamily = '"Poppins", sans-serif';
              spotContainerPerBar.text.style.fontSize = '42px';
              spotContainerPerBar.text.style.color = '#363840';
              spotContainerPerBar.animate(0.12); // Number from 0.0 to 1.0

              //progress bar -Application uptime
              var appContainerUptimeBar = new ProgressBar.SemiCircle(appContainerUptime, {
              strokeWidth: 8,
                      color: '#E8E8E8',
                      trailColor: '#eee',
                      trailWidth: 8,
                      easing: 'easeInOut',
                      duration: 1400,
                      svgStyle: null,
                      text: {
                      value: '',
                              alignToBottom: false
                      },
                      from: {color: '#F75848'},
                      to: {color: '#F75848'},
                      // Set default step function for all animate calls
                      step: (state, appContainerUptimeBar) => {
              appContainerUptimeBar.path.setAttribute('stroke', state.color);
                      var value = Math.round(appContainerUptimeBar.value() * 100);
                      if (value === 0) {
              appContainerUptimeBar.setText('%');
              }
              else {
              appContainerUptimeBar.setText(value + '%');
              }
              appContainerUptimeBar.text.style.color = state.color;
              }
              });
              appContainerUptimeBar.text.style.fontFamily = '"Poppins", sans-serif';
              appContainerUptimeBar.text.style.fontSize = '42px';
              appContainerUptimeBar.text.style.color = '#363840';
              appContainerUptimeBar.animate(0.90); // Number from 0.0 to 1.0
      
      });