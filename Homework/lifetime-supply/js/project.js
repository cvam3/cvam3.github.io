// Store your current age into a variable

var age = $('#age').html();

// Store a maximum age into a variable

var maxAge = $('#max-age').html();

// Store a favorite drink (from a drop-down) into a variable

var drink = $('#item').html();

// Store an amount per day into a variable

var days = $('#num-per-day').html();



// Calculate how much you would drink for the rest of your life!

$('#click-me').click(function(){
$('#solution').html(parseInt((('max-age' - 'age')) * 365)*'#num-per-day');
})



// Output your results to the user

// parseInt