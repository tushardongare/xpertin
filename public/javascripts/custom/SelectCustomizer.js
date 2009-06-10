$.fn.SelectCustomizer = function(){
    // Select Customizer jQuery plug-in
	// based on customselect by Ace Web Design http://www.adelaidewebdesigns.com/2008/08/01/adelaide-web-designs-releases-customselect-with-icons/
	// modified by David Vian http://www.ildavid.com/dblog
    return this.each(function(){
        var obj = $(this);
		var name = obj.attr('id');
		var id_slc_options = name+'_options';
		var id_icn_select = name+'_iconselect';
		var id_holder = name+'_holder';
		var custom_select = name+'_customselect';
        obj.after("<div id=\""+id_slc_options+"\"> </div>");
        obj.find('option').each(function(i){
            $("#"+id_slc_options).append("<div title=\"" + $(this).attr("value") + "\" class=\"selectitems\"><span>" + $(this).html() + "</span></div>");
        });
        obj.before("<input type=\"hidden\" value =\"\" name=\"" + this.name + "\" id=\""+custom_select+"\"/><div id=\""+id_icn_select+"\">" + this.title + "</div><div id=\""+id_holder+"\"> </div>").remove();
        $("#"+id_icn_select).click(function(){
            $("#"+id_holder).slideToggle(200);
        });
        $("#"+id_holder).append($("#"+id_slc_options)[0]);
        $("#"+id_holder+ " .selectitems").mouseover(function(){
            $(this).addClass("hoverclass");
        });
        $("#"+id_holder+" .selectitems").mouseout(function(){
            $(this).removeClass("hoverclass");
        });
        $("#"+id_holder+" .selectitems").click(function(){
            $("#"+id_holder+" .selectedclass").removeClass("selectedclass");
            $(this).addClass("selectedclass");
            var thisselection = $(this).html();
            $("#"+custom_select).val(this.title);
            $("#"+id_icn_select).html(thisselection);
            $("#"+id_holder).slideToggle(250)
        });
    });
}
