"use strict"

function displayResults(responseJson) {
  console.log(responseJson);

  if (responseJson.ratios === undefined){
      console.log('stock not found')
  } else {
    for (let i = 0; i < responseJson.ratios.length; i++) {
      $('.showRatios').append(`
      <p>${responseJson.symbol}</p>
      <p>${responseJson.ratios[i].liquidityMeasurementRatios.currentRatio}</p>
      <p>${responseJson.ratios[i].date}</p>
      `)
  }
  
   
    
     
  }
  console.log('run displayResults')
}

function grabRatios(symbol) {
  fetch(`https://financialmodelingprep.com/api/v3/financial-ratios/${symbol}`)
  .then(response => response.json())
  .then(responseJson => displayResults(responseJson));

  
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