"use strict"


//renders the information on the DOM

function displayResults(responseJson) {
 
  console.log(responseJson);
  if (responseJson.ratios === undefined){
      console.log('stock not found')
      $('.js-error-message').html(`<p>Stock not found, please choose a valid Stock Symbol.</p>`)
  } else {
    for (let i = 0; i < responseJson.ratios.length; i++) {
      
      //$('.showRatios').append(`
     // <p>Company name: ${responseJson.symbol}</p>
     // <p>Current Ratio: ${responseJson.ratios[i].liquidityMeasurementRatios.currentRatio}</p>
     // <p>Date: ${responseJson.ratios[i].date}</p>
     // `)

      
      let myChart = document.getElementById('myChart').getContext('2d');

        let ratioChart1 = new Chart(myChart,{
            type:'bar',
            data:{
                labels:[`${responseJson.ratios[0].date}`,
                        `${responseJson.ratios[1].date}`,
                        `${responseJson.ratios[2].date}`,
                        `${responseJson.ratios[3].date}`,
                        `${responseJson.ratios[4].date}`,
                        `${responseJson.ratios[5].date}`,
                        `${responseJson.ratios[6].date}`,
                        `${responseJson.ratios[7].date}`,
                        `${responseJson.ratios[8].date}`,
                        `${responseJson.ratios[9].date}`,
                      ],
                datasets:[{
                    label: 'Current Ratios',
                    data:[
                    `${responseJson.ratios[0].liquidityMeasurementRatios.currentRatio}`,
                    `${responseJson.ratios[1].liquidityMeasurementRatios.currentRatio}`,
                    `${responseJson.ratios[2].liquidityMeasurementRatios.currentRatio}`,
                    `${responseJson.ratios[3].liquidityMeasurementRatios.currentRatio}`,
                    `${responseJson.ratios[4].liquidityMeasurementRatios.currentRatio}`,
                    `${responseJson.ratios[5].liquidityMeasurementRatios.currentRatio}`,
                    `${responseJson.ratios[6].liquidityMeasurementRatios.currentRatio}`,
                    `${responseJson.ratios[7].liquidityMeasurementRatios.currentRatio}`,
                    `${responseJson.ratios[8].liquidityMeasurementRatios.currentRatio}`,
                    `${responseJson.ratios[9].liquidityMeasurementRatios.currentRatio}`,
                   
                    ],
                    backgroundColor:'green'
                }]
            },
            options:{}
        });


        let myChart2 = document.getElementById('myChart2').getContext('2d');

        let ratioChart2 = new Chart(myChart2,{
            type:'bar',
            data:{
                labels:[`${responseJson.ratios[0].date}`,
                        `${responseJson.ratios[1].date}`,
                        `${responseJson.ratios[2].date}`,
                        `${responseJson.ratios[3].date}`,
                        `${responseJson.ratios[4].date}`,
                        `${responseJson.ratios[5].date}`,
                        `${responseJson.ratios[6].date}`,
                        `${responseJson.ratios[7].date}`,
                        `${responseJson.ratios[8].date}`,
                        `${responseJson.ratios[9].date}`,
                      ],
                datasets:[{
                    label: 'Quick Ratios',
                    data:[
                    `${responseJson.ratios[0].liquidityMeasurementRatios.quickRatio}`,
                    `${responseJson.ratios[1].liquidityMeasurementRatios.quickRatio}`,
                    `${responseJson.ratios[2].liquidityMeasurementRatios.quickRatio}`,
                    `${responseJson.ratios[3].liquidityMeasurementRatios.quickRatio}`,
                    `${responseJson.ratios[4].liquidityMeasurementRatios.quickRatio}`,
                    `${responseJson.ratios[5].liquidityMeasurementRatios.quickRatio}`,
                    `${responseJson.ratios[6].liquidityMeasurementRatios.quickRatio}`,
                    `${responseJson.ratios[7].liquidityMeasurementRatios.quickRatio}`,
                    `${responseJson.ratios[8].liquidityMeasurementRatios.quickRatio}`,
                    `${responseJson.ratios[9].liquidityMeasurementRatios.quickRatio}`,

                   
                    ],
                    backgroundColor:'brown'
                }]
            },
            options:{}
        });


        let myChart3 = document.getElementById('myChart3').getContext('2d');

        let ratioChart3 = new Chart(myChart3,{
            type:'bar',
            data:{
                labels:[`${responseJson.ratios[0].date}`,
                        `${responseJson.ratios[1].date}`,
                        `${responseJson.ratios[2].date}`,
                        `${responseJson.ratios[3].date}`,
                        `${responseJson.ratios[4].date}`,
                        `${responseJson.ratios[5].date}`,
                        `${responseJson.ratios[6].date}`,
                        `${responseJson.ratios[7].date}`,
                        `${responseJson.ratios[8].date}`,
                        `${responseJson.ratios[9].date}`,
                      ],
                datasets:[{
                    label: 'Inventory Turnover Ratio',
                    data:[
                    `${responseJson.ratios[0].operatingPerformanceRatios.inventoryTurnover}`,
                    `${responseJson.ratios[1].operatingPerformanceRatios.inventoryTurnover}`,
                    `${responseJson.ratios[2].operatingPerformanceRatios.inventoryTurnover}`,
                    `${responseJson.ratios[3].operatingPerformanceRatios.inventoryTurnover}`,
                    `${responseJson.ratios[4].operatingPerformanceRatios.inventoryTurnover}`,
                    `${responseJson.ratios[5].operatingPerformanceRatios.inventoryTurnover}`,
                    `${responseJson.ratios[6].operatingPerformanceRatios.inventoryTurnover}`,
                    `${responseJson.ratios[7].operatingPerformanceRatios.inventoryTurnover}`,
                    `${responseJson.ratios[8].operatingPerformanceRatios.inventoryTurnover}`,
                    `${responseJson.ratios[9].operatingPerformanceRatios.inventoryTurnover}`,
                   
                    ],
                    backgroundColor:'purple'
                }]
            },
            options:{}
        });



        let myChart4 = document.getElementById('myChart4').getContext('2d');

        let ratioChart4 = new Chart(myChart4,{
            type:'bar',
            data:{
                labels:[`${responseJson.ratios[0].date}`,
                        `${responseJson.ratios[1].date}`,
                        `${responseJson.ratios[2].date}`,
                        `${responseJson.ratios[3].date}`,
                        `${responseJson.ratios[4].date}`,
                        `${responseJson.ratios[5].date}`,
                        `${responseJson.ratios[6].date}`,
                        `${responseJson.ratios[7].date}`,
                        `${responseJson.ratios[8].date}`,
                        `${responseJson.ratios[9].date}`,
                      ],
                datasets:[{
                    label: 'Debt-Equity Ratio',
                    data:[
                    `${responseJson.ratios[0].debtRatios.debtEquityRatio}`,
                    `${responseJson.ratios[1].debtRatios.debtEquityRatio}`,
                    `${responseJson.ratios[2].debtRatios.debtEquityRatio}`,
                    `${responseJson.ratios[3].debtRatios.debtEquityRatio}`,
                    `${responseJson.ratios[4].debtRatios.debtEquityRatio}`,
                    `${responseJson.ratios[5].debtRatios.debtEquityRatio}`,
                    `${responseJson.ratios[6].debtRatios.debtEquityRatio}`,
                    `${responseJson.ratios[7].debtRatios.debtEquityRatio}`,
                    `${responseJson.ratios[8].debtRatios.debtEquityRatio}`,
                    `${responseJson.ratios[9].debtRatios.debtEquityRatio}`,
                   
                    ],
                    backgroundColor:'red'
                }]
            },
            options:{}
        });



        let myChart5 = document.getElementById('myChart5').getContext('2d');

        let ratioChart5 = new Chart(myChart5,{
            type:'bar',
            data:{
                labels:[`${responseJson.ratios[0].date}`,
                        `${responseJson.ratios[1].date}`,
                        `${responseJson.ratios[2].date}`,
                        `${responseJson.ratios[3].date}`,
                        `${responseJson.ratios[4].date}`,
                        `${responseJson.ratios[5].date}`,
                        `${responseJson.ratios[6].date}`,
                        `${responseJson.ratios[7].date}`,
                        `${responseJson.ratios[8].date}`,
                        `${responseJson.ratios[9].date}`,
                      ],
                datasets:[{
                    label: 'return on equity',
                    data:[
                    `${responseJson.ratios[0].profitabilityIndicatorRatios.returnOnEquity}`,
                    `${responseJson.ratios[1].profitabilityIndicatorRatios.returnOnEquity}`,
                    `${responseJson.ratios[2].profitabilityIndicatorRatios.returnOnEquity}`,
                    `${responseJson.ratios[3].profitabilityIndicatorRatios.returnOnEquity}`,
                    `${responseJson.ratios[4].profitabilityIndicatorRatios.returnOnEquity}`,
                    `${responseJson.ratios[5].profitabilityIndicatorRatios.returnOnEquity}`,
                    `${responseJson.ratios[6].profitabilityIndicatorRatios.returnOnEquity}`,
                    `${responseJson.ratios[7].profitabilityIndicatorRatios.returnOnEquity}`,
                    `${responseJson.ratios[8].profitabilityIndicatorRatios.returnOnEquity}`,
                    `${responseJson.ratios[9].profitabilityIndicatorRatios.returnOnEquity}`,
                   
                    ],
                    backgroundColor:'fuschia'
                }]
            },
            options:{}
        });






        let myChart6 = document.getElementById('myChart6').getContext('2d');

        let ratioChart6 = new Chart(myChart6,{
            type:'bar',
            data:{
                labels:[`${responseJson.ratios[0].date}`,
                        `${responseJson.ratios[1].date}`,
                        `${responseJson.ratios[2].date}`,
                        `${responseJson.ratios[3].date}`,
                        `${responseJson.ratios[4].date}`,
                        `${responseJson.ratios[5].date}`,
                        `${responseJson.ratios[6].date}`,
                        `${responseJson.ratios[7].date}`,
                        `${responseJson.ratios[8].date}`,
                        `${responseJson.ratios[9].date}`,
                      ],
                datasets:[{
                    label: 'Return on Assets',
                    data:[
                    `${responseJson.ratios[0].profitabilityIndicatorRatios.returnOnAssets}`,
                    `${responseJson.ratios[1].profitabilityIndicatorRatios.returnOnAssets}`,
                    `${responseJson.ratios[2].profitabilityIndicatorRatios.returnOnAssets}`,
                    `${responseJson.ratios[3].profitabilityIndicatorRatios.returnOnAssets}`,
                    `${responseJson.ratios[4].profitabilityIndicatorRatios.returnOnAssets}`,
                    `${responseJson.ratios[5].profitabilityIndicatorRatios.returnOnAssets}`,
                    `${responseJson.ratios[6].profitabilityIndicatorRatios.returnOnAssets}`,
                    `${responseJson.ratios[7].profitabilityIndicatorRatios.returnOnAssets}`,
                    `${responseJson.ratios[8].profitabilityIndicatorRatios.returnOnAssets}`,
                    `${responseJson.ratios[9].profitabilityIndicatorRatios.returnOnAssets}`,
                   
                    ],
                    backgroundColor:'purple'
                }]
            },
            options:{}
        });

        

        
  }
  
  $('.info').show(400);
  
    if(`${responseJson.ratios[0].liquidityMeasurementRatios.currentRatio}` < 2 ){
      console.log('hello world')
    }
     
  }

 
  console.log('run displayResults')
}






function grabRatios(symbol) {
  fetch(`https://financialmodelingprep.com/api/v3/financial-ratios/${symbol}`)
  .then(response => response.json())
  .then(responseJson => displayResults(responseJson))
  

  
}

function watchForm() {
  $('form').submit(e=> {
    e.preventDefault();
    const symbol = $('#searchTicker').val();
    $('.showRatios').empty();
    $('.js-error-message').empty();
    
    
    console.log(symbol);

    grabRatios(symbol);
  });
}

$(function() {
  console.log("App loaded! Waiting for submit!");
  watchForm();
});



        