$(document).ready(function(){
	
	/*accordian toggle*/
	$(".toggle_container").hide();
	$(".toggle_container0").show();
	
	$("h4.trigger").toggle(function(){
		$(this).addClass("active"); 
		}, function () {
		$(this).removeClass("active");
	});
	$("h4.trigger").click(function(){
		$(this).next(".toggle_container, .toggle_container0").slideToggle("slow,");
	});
	
	// toggles the boxes
	$('a.tog01').click(function() {
		$('#taby_h1, #taby_s1').toggle('slow');
		return false;
	});
	$('a.tog02').click(function() {
		$('#taby_h2, #taby_s2, #tabz').toggle('slow');
		return false;
	});
	$('a.tog03').click(function() {
		$('#taby_h3, #taby_s3').toggle('slow');
		return false;
	});
	$('a.tog04').click(function() {
		$('#taby_h4').toggle('slow');
		return false;
	});
	
	// toggles the boxes
	$('.button a#new-email').click(function() {
		$('.email-pane').toggle('slow');
		return false;
	});
	
	/************
	ajax tabs - MD sub
	*************/
	$(function() {
		$("#tabo").tabs().find(".ui-tabs-nav").sortable({axis:'x'});
	});
	/*ajax tabs - HF sub*/
	$(function() {
		$("#taby_h1, #taby_h2").tabs().find(".ui-tabs-nav").sortable({axis:'x'});
	});
	/*ajax tabs - SM sub*/
	$(function() {
		$("#taby_s1, #taby_s2, #taby_s3").tabs().find(".ui-tabs-nav").sortable({axis:'x'});
	});
	
	// Radio choices (JOB page)
	$("#preConfigured").hide();
	$(".radio").click(function(){
		if($(".radio").attr("checked")){
			$("#preConfigured").fadeOut("slow");
			$("#default").fadeIn("slow");
			/*$("#preConfigured").hide();
			$("#default input").removeAttr("disabled");*/
		}
		else {
			$("#preConfigured").fadeIn("slow");
			$("#default").fadeOut("slow");
			/*$("#preConfigured").show();
			$("#default input").attr("disabled", "disabled");*/
		}
	});
	
	/*Tooltips*/
	$('#header *[title], .toggle[title], input.submit[title], .com-start a[title], .voip-status *[title], .toggle_container *[title], \
		.inner-widget_md *[title], .reload a, .com-tools img, .button a, .people-com img, a').tooltip({
		track: true, 
		delay: 0, 
		showURL: false, 
		showBody: " - ", 
		fade: 250 
	}); 
});

$(function(){
  $('input').checkBox();
  $('#toggle-all').click(function(){
    $('#example input[type=checkbox]').checkBox('toggle');
	  return false;
  });
  $('#check-all').click(function(){
    $('#example input[type=checkbox]').checkBox('changeCheckStatus', true);
	  return false;
  });
  $('#uncheck-all').click(function(){
    $('#example input[type=checkbox]').checkBox('changeCheckStatus', false);
	return false;
  });
  $('#check-2').click(function(){
    $('#example input[type=radio]:eq(1)').checkBox('changeCheckStatus', true);
	return false;
  });
  $('#native').click(function(){
	//native methods
	$('#example input[type=radio]:eq(0)').attr({checked: true, disabled: true})
	//reflect the current state
	.checkBox('reflectUI');
	return false;
   });
});
