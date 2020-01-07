"use strict"

function displayResults(responseJson) {
 
  console.log(responseJson);
  if (responseJson.ratios === undefined){
      console.log('stock not found')
  } else {
    for (let i = 0; i < responseJson.ratios.length; i++) {
      $('.showRatios').append(`
      <p>Company name: ${responseJson.symbol}</p>
      <p>Current Ratio: ${responseJson.ratios[i].liquidityMeasurementRatios.currentRatio}</p>
      <p>Date: ${responseJson.ratios[i].date}</p>
      `)

      
      let myChart = document.getElementById('myChart').getContext('2d');

        let ratioChart1 = new Chart(myChart,{
            type:'bar',
            data:{
                labels:[`${responseJson.ratios[0].date}`,
                        `${responseJson.ratios[1].date}`,
                        `${responseJson.ratios[2].date}`,
                        `${responseJson.ratios[3].date}`,
                        `${responseJson.ratios[4].date}`,
                      ],
                datasets:[{
                    label: 'Current Ratios',
                    data:[
                    `${responseJson.ratios[0].liquidityMeasurementRatios.currentRatio}`,
                    `${responseJson.ratios[1].liquidityMeasurementRatios.currentRatio}`,
                    `${responseJson.ratios[2].liquidityMeasurementRatios.currentRatio}`,
                    `${responseJson.ratios[3].liquidityMeasurementRatios.currentRatio}`,
                    `${responseJson.ratios[4].liquidityMeasurementRatios.currentRatio}`,
                   
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
                      ],
                datasets:[{
                    label: 'Quick Ratios',
                    data:[
                    `${responseJson.ratios[0].liquidityMeasurementRatios.quickRatio}`,
                    `${responseJson.ratios[1].liquidityMeasurementRatios.quickRatio}`,
                    `${responseJson.ratios[2].liquidityMeasurementRatios.quickRatio}`,
                    `${responseJson.ratios[3].liquidityMeasurementRatios.quickRatio}`,
                    `${responseJson.ratios[4].liquidityMeasurementRatios.quickRatio}`,
                   
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
                      ],
                datasets:[{
                    label: 'Quick Ratios',
                    data:[
                    `${responseJson.ratios[0].investmentValuationRatios.priceEarningsRatio}`,
                    `${responseJson.ratios[1].investmentValuationRatios.priceEarningsRatio}`,
                    `${responseJson.ratios[2].investmentValuationRatios.priceEarningsRatio}`,
                    `${responseJson.ratios[3].investmentValuationRatios.priceEarningsRatio}`,
                    `${responseJson.ratios[4].investmentValuationRatios.priceEarningsRatio}`,
                   
                    ],
                    backgroundColor:'purple'
                }]
            },
            options:{}
        });

        

        
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
    $('.js-error-message').empty()
    console.log(symbol);

    grabRatios(symbol);
  });
}

$(function() {
  console.log("App loaded! Waiting for submit!");
  watchForm();
});



        