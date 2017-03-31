// ********************************************************
//	Chart Functionality
//*********************************************************


// Global Defaults

Chart.defaults.global.defaultFontColor = '#949494';
Chart.defaults.global.responsive = true;
Chart.defaults.global.legend.display = false;
Chart.defaults.global.elements.line.borderWidth = 1;

// Line Graph - Hourly 

var ctx = document.getElementById("hourlyTrafficChart");

var data = {
				labels: ["00-03", "03-06", "06-09", "09-12", "12-15", "15-18", "18-21", "21-24"],
        datasets: [
        {
						label: "Daily",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(151, 151, 222, 0.4)",
            borderColor: "#9797de",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'round',
            pointBorderColor: "#9797de",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 2,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#9797de",
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 5,
            data: [63, 25, 22, 102, 83, 99, 105, 75],
            spanGaps: false
        }
    ]
};

var hourlyTrafficChart = new Chart(ctx, {
    type: 'line',
    data: data,
		options: {
			maintainAspectRatio: false,
			scales: {
					xAxes: [{
						gridLines: {
							drawTicks: true
						},
						ticks: {
							labelOffset: 0,
							maxTicksLimit: 8
						}
					}],
					yAxes: [{
						gridLines: {
							drawTicks: false
						},
						ticks: {
							labelOffset: 40,
							min: 0,
							max: 150,
							maxTicksLimit: 5
						}
					}]
				}
		}
});

// Line Graph - Daily

var ctx = document.getElementById("dailyTrafficChart");

var data = {
				labels: ["03/03", "04/03", "05/03", "06/03", "07/03", "08/03", "09/03", "10/03"],
        datasets: [
        {
						label: "Daily",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(151, 151, 222, 0.4)",
            borderColor: "#9797de",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'round',
            pointBorderColor: "#9797de",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 2,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#9797de",
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 5,
            data: [75, 125, 100, 150, 200, 150, 175, 125],
            spanGaps: false,
        }
    ]
};

var dailyTrafficChart = new Chart(ctx, {
    type: 'line',
    data: data,
		options: {
				maintainAspectRatio: false,
				scales: {
						xAxes: [{
							gridLines: {
								drawTicks: true
							},
							ticks: {
								labelOffset: 40
							}
						}],
						yAxes: [{
							gridLines: {
								drawTicks: false
							},
							ticks: {
								labelOffset: 40,
								min: 50,
								max: 250,
								maxTicksLimit: 5
							}
						}]
					}
			}
});

// Line Graph - Weekly

var ctx = document.getElementById("weeklyTrafficChart");

var data = {
				labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [
        {
						label: "Weekly",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(151, 151, 222, 0.4)",
            borderColor: "#9797de",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 1.0,
            borderJoinStyle: 'round',
            pointBorderColor: "#9797de",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 2,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#9797de",
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 5,
            data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750],
            spanGaps: false,
        }
    ]
};

var weeklyTrafficChart = new Chart(ctx, {
    type: 'line',
    data: data,
		options: {
		maintainAspectRatio: false,	
			scales: {
					xAxes: [{
						gridLines: {
							drawTicks: true,
							drawBorder: true,
							tickMarkLength: 2
						},
						ticks: {
							labelOffset: 40,
							padding: 40
						}
					}],
					yAxes: [{
						gridLines: {
							drawTicks: false,
							drawBorder: true,
							tickMarkLength: 0
						},
						ticks: {
							labelOffset: -40,
							min: 500,
							max: 2500,
							maxTicksLimit: 5
						}
					}]
				}
		}
});

// Line Graph - Monthly

var ctx = document.getElementById("monthlyTrafficChart");

var data = {
				labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
        {
						label: "Monthly",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(151, 151, 222, 0.4)",
            borderColor: "#9797de",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'round',
            pointBorderColor: "#9797de",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 2,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#9797de",
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 5,
            data: [2750, 2820, 2745, 3245, 3110, 3505, 4250, 4150, 3460, 3210, 4510, 4005],
            spanGaps: false,
        }
    ]
};

var monthlyTrafficChart = new Chart(ctx, {
    type: 'line',
    data: data,
		options: {
			maintainAspectRatio: false,
			scales: {
					xAxes: [{
						gridLines: {
							drawTicks: true
						},
						ticks: {
							labelOffset: 0
						}
					}],
					yAxes: [{
						gridLines: {
							drawTicks: false
						},
						ticks: {
							labelOffset: 0,
							min: 2500,
							max: 4500,
							maxTicksLimit: 4
						}
					}]
				}
		}
});

// Bar Chart

var ctx = document.getElementById("dailyChart");

var data = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
        {
            label: "Desktops",
            backgroundColor: [
                '#5F60B2',
                '#5F60B2',
                '#5F60B2',
                '#5F60B2',
                '#5F60B2',
                '#5F60B2',
								'#5F60B2'
            ],
            borderColor: [
                '#5F60B2',
                '#5F60B2',
                '#5F60B2',
                '#5F60B2',
                '#5F60B2',
                '#5F60B2',
								'#5F60B2'
            ],
            borderWidth: 5,
						borderSkipped: 'top',
            data: [125, 225, 200, 150, 210, 230, 125],
      	},			
				{
            label: "Tablets",
            backgroundColor: [
                '#70C17D',
                '#70C17D',
                '#70C17D',
               	'#70C17D',
                '#70C17D',
                '#70C17D',
								'#70C17D'
            ],
            borderColor: [
                '#70C17D',
                '#70C17D',
                '#70C17D',
               	'#70C17D',
                '#70C17D',
                '#70C17D',
								'#70C17D'
            ],
            borderWidth: 1,
            data: [105, 175, 150, 120, 160, 175, 105],
     		},
				{
            label: "Phones",
            backgroundColor: [
                '#63A2B2',
                '#63A2B2',
                '#63A2B2',
                '#63A2B2',
                '#63A2B2',
                '#63A2B2',
								'#63A2B2'
            ],
            borderColor: [
                '#63A2B2',
                '#63A2B2',
                '#63A2B2',
                '#63A2B2',
                '#63A2B2',
                '#63A2B2',
								'#63A2B2'
            ],
            borderWidth: 1,
            data: [90, 85, 80, 90, 105, 145, 75],
     		}
			
    ]
	
};

var dailyChart = new Chart(ctx, {
    type: 'bar',
    data: data,
		options: {
				scales: {
						xAxes: [{
							gridLines: {
								drawTicks: true,
								drawBorder: true
							},
							ticks: {
								labelOffset: 0
							}
						}],
						yAxes: [{
							gridLines: {
								drawTicks: false,
								drawBorder: true
							},
							ticks: {
								labelOffset: 40,
								min: 50,
								max: 250,
								maxTicksLimit: 5
							}
						}]
					}
			}
});


// Pie Chart

var ctx = document.getElementById("mobileChart");

var data = {
    labels: [
        "Desktop",
        "Tablet",
        "Phones",
				"Smart TVs"
    ],
    datasets: [
        {
            data: [60, 20, 15, 5],
            backgroundColor: [
                "rgb(95, 96, 178)",
                "rgb(112, 193, 124)",
                "rgb(98, 162, 178)",
								"rgb(178, 98, 163)"
            ],
            hoverBackgroundColor: [
                "rgba(95, 96, 178, 0.8)",
                "rgba(112, 193, 124, 0.8)",
                "rgba(98, 162, 178, 0.8)",
								"rgba(178, 98, 163, 0.8)"
            ]
        }]
};

var mobileChart = new Chart(ctx, {
    type:"doughnut",
    data: data,
		options: {
			legend: {
				display:true,
				position:'right'
			}
		}
});


// ********************************************************
//	Other Functionality
//*********************************************************   


// ***************************
// Alert box and menu
// ***************************

function notDismiss(){
	var alertNumber = parseInt($('.alert-number').text());
	$('.alert-number').text(alertNumber - 1);
}

function emptyNotBox(){
	if ( $('.alert-number').text() === '0' ) {
		$('.not-box-empty').show();
		$('.alert-number').hide();
	} else {
		$('.not-box-empty').hide();
	}
}

$('#alert .fa').click(function(){
	$('#alert').hide('slow');
});

$('.not-box-empty .fa').click(function(){
	$('.not-box').hide();
});

$('.notification svg, .notification .alert-number').click(function() {
	$('.not-box').toggle('slow');
});

$('a.not-dismiss').click(function(event) {
	event.preventDefault();
	$(this).parent().parent().remove();
	notDismiss();
	emptyNotBox();
});


// ***************************
// Chart - Frequency Toggle
// ***************************

var selector = '.frequency li';

$(selector).click(function(event) {
	event.preventDefault();
	$(selector).removeClass('active');
	$(this).addClass('active');
	
	// Find where the 'active' class is located
	var activeLocation = $('.frequency .active').index();
	
	// Remove 'show' class from canvases
	$('.chart-canvases').find('canvas').removeClass('show');
	
	// Add the 'show' class to the canvas that correspondes with the Chart label
	$('.chart-canvases canvas').eq(activeLocation).addClass('show');

});


// ***************************
// Social Media Counters
// ***************************

var options = {
  useEasing : true, 
  useGrouping : true, 
  separator : ',', 
  decimal : '.', 
  prefix : '', 
  suffix : '' 
};

var twitter = new CountUp("twitterCount", 0, 10345, 0, 2.5, options);
var facebook = new CountUp("facebookCount", 0, 8739, 0, 2.5, options);
var pinterest = new CountUp("pinterestCount", 0, 4345, 0, 2.5, options);
var google = new CountUp("googleCount", 0, 2530, 0, 2.5, options);
var instagram = new CountUp("instagramCount", 0, 6580, 0, 2.5, options);
var linkedin = new CountUp("linkedInCount", 0, 1045, 0, 2.5, options);

twitter.start();
facebook.start();
pinterest.start();
google.start();
instagram.start();
linkedin.start();


// ***************************
// Form Submission & Validation
// ***************************

var $overlayForm = $('<div id="overlayForm"></div>');
$("body").append($overlayForm);

function formValidation(event) {
    var inpObj = document.getElementById("name");
		var textObj = document.getElementById("message");
    if ( inpObj.checkValidity() === true && textObj.checkValidity() === true ) {
			event.preventDefault();
			
			// Show overlay and confirmation message
			$overlayForm.show();
			$('.form-confirmation').show();
			
			// Clear form inputs
			$("#formInputs").find("input[type=search], textarea").val("");
		} 
}

// Close Form Notification

$('.confirmation-box .fa').click(function(){
	$('.form-confirmation').hide();
	$overlayForm.hide();
});


// ***************************
// Search Autocomplete
// ***************************

var tags = [ "John Jameson", "Kate Matthews", "Liz Harris", "Dylan Daniels", "John Adams", "Kathrine Jones", "Lucy Elliot", "Dave Dice" ];

$( "#name" ).autocomplete({
  source: function( request, response ) {
          var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( request.term ), "i" );
          response( $.grep( tags, function( item ){
              return matcher.test( item );
          }) );
      }
});


// ***************************
// Local Storage
// ***************************


// Notification Setting

var notificationSetting = $('#notificationSetting');

notificationSetting.click(function() {
	if ( $(this).is(":checked") === true ) {
		localStorage.setItem( 'notifications', true);
	} else {
		localStorage.setItem( 'notifications', false);
	}
});


// Profile Setting

var profileSetting = $('#profileSetting');

profileSetting.click(function() {
	if ( $(this).is(":checked") === true ) {
		localStorage.setItem( 'profilePublic', true);
	} else {
		localStorage.setItem( 'profilePublic', false);
	}
});


// Timezone Setting

var selectTimeZone = $('select#timezone');

selectTimeZone.change(function() {
	localStorage.setItem( 'timezone', $(this).val());
});


// Get settings from Local Storage

$(document).ready(function() {
	
	// Get Notification Settings
	var getNotificationSetting = localStorage.getItem( 'notifications' );
	var getNotificationSettingJSON = JSON.parse( getNotificationSetting );
	notificationSetting.prop('checked', getNotificationSettingJSON );
	
	// Get Profile Settings
	var getProfileSetting = localStorage.getItem( 'profilePublic' );
	var getProfileSettingJSON = JSON.parse(getProfileSetting);
	profileSetting.prop('checked', getProfileSettingJSON);
	
	// Get Timezone Settings
	selectTimeZone.val("select-timezone"); // set initial select value - req for FF and Safari
	
	var getTimePreference = localStorage.getItem( 'timezone' );
	selectTimeZone.val(getTimePreference);
	
});