"use strict"


//renders the information on the DOM

function displayResults(responseJson) {
 
  console.log(responseJson);
  if (responseJson.ratios === undefined){
      console.log('stock not found')
      $('.js-error-message').html(`<p>Stock not found, please choose a valid Stock Symbol.</p>`)
  } else {

    let date = [];
    let currentRatio = [];
    let quickRatio = [];
    let inventoryTurnover = [];
    let debtEquityRatio = [];
    let returnOnEquity = [];
    let returnOnAssets = [];


    for (let i = 0; i < responseJson.ratios.length && i < 10; i++) {
      
      date.push(`${responseJson.ratios[i].date}`);
      currentRatio.push(`${responseJson.ratios[i].liquidityMeasurementRatios.currentRatio}`);
      quickRatio.push(`${responseJson.ratios[i].liquidityMeasurementRatios.quickRatio}`);
      inventoryTurnover.push(`${responseJson.ratios[i].operatingPerformanceRatios.inventoryTurnover}`);
      debtEquityRatio.push(`${responseJson.ratios[i].debtRatios.debtEquityRatio}`);
      returnOnEquity.push(`${responseJson.ratios[i].debtRatios.debtEquityRatio}`);
      returnOnAssets.push(`${responseJson.ratios[i].profitabilityIndicatorRatios.returnOnAssets}`);


      //$('.showRatios').append(`
     // <p>Company name: ${responseJson.symbol}</p>
     // <p>Current Ratio: ${responseJson.ratios[i].liquidityMeasurementRatios.currentRatio}</p>
     // <p>Date: ${responseJson.ratios[i].date}</p>
     // `)

      
     
     

        

        
  }

   //Current Ratio Chart
  let myChart = document.getElementById('myChart').getContext('2d');
  
      


        let ratioChart1 = new Chart(myChart,{
            type:'bar',
            data:{
                labels:date,
                datasets:[{
                    label: 'Current Ratios',
                    data:currentRatio,
                    backgroundColor:'green'
                }]
            },
            options:{}
        });

        //Quick Ratio Chart
        let myChart2 = document.getElementById('myChart2').getContext('2d');

        let ratioChart2 = new Chart(myChart2,{
            type:'bar',
            data:{
                labels:date,
                datasets:[{
                    label: 'Quick Ratios',
                    data:quickRatio,
                    backgroundColor:'brown'
                }]
            },
            options:{}
        });

        //Invetory Turnover Ratio Chart
        let myChart3 = document.getElementById('myChart3').getContext('2d');

        let ratioChart3 = new Chart(myChart3,{
            type:'bar',
            data:{
                labels:date,
                datasets:[{
                    label: 'Inventory Turnover Ratio',
                    data:inventoryTurnover,
                    backgroundColor:'purple'
                }]
            },
            options:{}
        });


        //Debt-Equity Ratio Chart
        let myChart4 = document.getElementById('myChart4').getContext('2d');

        let ratioChart4 = new Chart(myChart4,{
            type:'bar',
            data:{
                labels:date,
                datasets:[{
                    label: 'Debt-Equity Ratio',
                    data:debtEquityRatio,
                    backgroundColor:'red'
                }]
            },
            options:{}
        });


        //Return on Equity Chart
        let myChart5 = document.getElementById('myChart5').getContext('2d');

        let ratioChart5 = new Chart(myChart5,{
            type:'bar',
            data:{
                labels:date,
                datasets:[{
                    label: 'return on equity',
                    data:returnOnEquity,
                    backgroundColor:'fuschia'
                }]
            },
            options:{}
        });





        //Return on Assets Chart
        let myChart6 = document.getElementById('myChart6').getContext('2d');

        let ratioChart6 = new Chart(myChart6,{
            type:'bar',
            data:{
                labels:date,
                datasets:[{
                    label: 'Return on Assets',
                    data:returnOnAssets,
                    backgroundColor:'purple'
                }]
            },
            options:{}
        });

  //Shows Ratio Info on DOM
  $('.info').show(400);
  
  //Calculates grade for Current Ratio in latest year
    if(`${responseJson.ratios[0].liquidityMeasurementRatios.currentRatio}` > 1.4 && `${responseJson.ratios[0].liquidityMeasurementRatios.currentRatio}` < 1.6 ){
      console.log('A')
    } else if(`${responseJson.ratios[0].liquidityMeasurementRatios.currentRatio}` > 1.7 && `${responseJson.ratios[0].liquidityMeasurementRatios.currentRatio}` < 3 ) {
      console.log('B')
    } else if(`${responseJson.ratios[0].liquidityMeasurementRatios.currentRatio}` > 1 && `${responseJson.ratios[0].liquidityMeasurementRatios.currentRatio}` < 1.3 ){
      console.log('C')
    } else if(`${responseJson.ratios[0].liquidityMeasurementRatios.currentRatio}` > 3) {
      console.log('D')
    } else if (`${responseJson.ratios[0].liquidityMeasurementRatios.currentRatio}` < 1 ){
      console.log('F')
    }

    //Calculates grade for Quick ratio in latest year
     if(`${responseJson.ratios[0].liquidityMeasurementRatios.quickRatio}` >= 1){
      console.log('A')
    } else if (`${responseJson.ratios[0].liquidityMeasurementRatios.quickRatio}` < 1) {
      console.log('F')
    }

   //Calculates grade for Inventory Turnover ratio
   
   if(`${responseJson.ratios[0].operatingPerformanceRatios.inventoryTurnover}` > 4 && `${responseJson.ratios[0].operatingPerformanceRatios.inventoryTurnover}` < 6) {
    console.log('A')
   } else if (`${responseJson.ratios[0].operatingPerformanceRatios.inventoryTurnover}` > 6 && `${responseJson.ratios[0].operatingPerformanceRatios.inventoryTurnover}` < 500) {
     console.log('B')
   } else if (`${responseJson.ratios[0].operatingPerformanceRatios.inventoryTurnover}` > 2 && `${responseJson.ratios[0].operatingPerformanceRatios.inventoryTurnover}`< 3 ) {
     console.log('C')
   } else if (`${responseJson.ratios[0].operatingPerformanceRatios.inventoryTurnover}` > 1 && `${responseJson.ratios[0].operatingPerformanceRatios.inventoryTurnover}`< 1.9) {
     console.log('D')
   } else if(`${responseJson.ratios[0].operatingPerformanceRatios.inventoryTurnover}` < 1 || `${responseJson.ratios[0].operatingPerformanceRatios.inventoryTurnover}` > 500) {
     console.log('F')
   }


   //Calculates grade for debt equity ratio

   if(`${responseJson.ratios[0].debtRatios.debtEquityRatio}` > 1.5 && `${responseJson.ratios[0].debtRatios.debtEquityRatio}` < 2){
    console.log('A')
   } else if(`${responseJson.ratios[0].debtRatios.debtEquityRatio}` > 1 && `${responseJson.ratios[0].debtRatios.debtEquityRatio}` < 1.4) {
     console.log('B')
   } else if(`${responseJson.ratios[0].debtRatios.debtEquityRatio}` > 2 && `${responseJson.ratios[0].debtRatios.debtEquityRatio}` < 4) {
     console.log('C')
   } else if(`${responseJson.ratios[0].debtRatios.debtEquityRatio}` > 4 && `${responseJson.ratios[0].debtRatios.debtEquityRatio}` < 7) {
     console.log('D')
   } else if(`${responseJson.ratios[0].debtRatios.debtEquityRatio}` < 1 || `${responseJson.ratios[0].debtRatios.debtEquityRatio}` > 7) {
     console.log('F')
   }

   //Calculates grade for return on equity ratio
   if(`${responseJson.ratios[0].profitabilityIndicatorRatios.returnOnEquity}` > .15){
    console.log('A')
   } else if(`${responseJson.ratios[0].profitabilityIndicatorRatios.returnOnEquity}` > .10 && `${responseJson.ratios[0].profitabilityIndicatorRatios.returnOnEquity}` < .14) {
     console.log('B')
   } else if (`${responseJson.ratios[0].profitabilityIndicatorRatios.returnOnEquity}` > .05 && `${responseJson.ratios[0].profitabilityIndicatorRatios.returnOnEquity}` < .10) {
     console.log('C');
   } else if(`${responseJson.ratios[0].profitabilityIndicatorRatios.returnOnEquity}` > .01 && `${responseJson.ratios[0].profitabilityIndicatorRatios.returnOnEquity}` < .05) {
     console.log('D')
   } else if(`${responseJson.ratios[0].profitabilityIndicatorRatios.returnOnEquity}`< .01) {
     console.log('F')
   }

   //Calculates grade for return on asset ratio

   // if(`${responseJson.ratios[0].profitabilityIndicatorRatios.returnOnAssets}`)

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



        