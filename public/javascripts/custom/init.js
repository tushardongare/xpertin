$(document).ready(function(){
	/*Table sorter*/
	{ $("#sort-table00, #sort-table01").tablesorter(); }
	
	/*date picker*/
	$(function() {
		$('#datepicker').datepicker({
			changeMonth: true,
			changeYear: true
		});
	});
	
	/*custom selects
	$(function() {
		$('#form03-03, #form03-05, #form05-01a, #form05-04, #form05-06a, #form05-06b, #form05-07a, #form05-07b, #form06-02, #form06-04a, #form06-04b, #form06-05a, #form06-05b, #update00-01, #update00-02, #update01-01, #update01-02').SelectCustomizer();
	});*/
	
	$('#taby_h1, #taby_h2, #taby_h3, #taby_h4').hide();
	$('.email-pane').hide();
	
	/*custom selects*/
	$(function() {
		$('#sort00-01, #sort00-02, #sort00-03, #sort00-04').SelectCustomizer();
	});
	
	/*custom selects*/
	$(function() {
		$('#search01-02, #search01-03, #search01-05, #search01-06, #sort00-01').SelectCustomizer();
	});
	
	
	/*slider*/
	$(function() {
		$("#slider-range-min").slider({
			range: "min",
			value:60,
			min: 0,
			max: 100,
			step: 10,
			slide: function(event, ui) {
				$("#amount").val(ui.value + '%');
			}
		});
		$("#amount").val($("#slider-range-min").slider("value") + '%');
	});
	
	$(function() {
		$("#progressbar").progressbar({
			value: 37
		});
	});

});