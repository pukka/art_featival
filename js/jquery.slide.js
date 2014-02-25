;(function(jQuery){
    $.fn.slide = function() {

	var firstnum = $("#image li").length;
	var img = $("#image li img").width();
	var firstwidth = firstnum * img;
        var i = 0;

        $("#image li").clone().prependTo("#image li:first");

	var num = $("#image li").length;
        var awidth = num * img;
	$("#image").css("width",awidth);
	$("#image").css({'left': -firstwidth});

	var lcount = 0;
        var rcount = 0;

	$(".left").click(function(){
	    lcount ++;
	    rcount --;
	    $("#image").animate({"left": "-=" +img}, "slow", function() {
		if(!(lcount % firstnum)) {
		  $("#image").animate({"left": -firstwidth}, "slow");
		  lcount = 0;
	        } //if
	    });//animate
        });//left

	$(".right").click(function(){
	    rcount ++;
            lcount --;
	    $("#image").animate({"left": "+=" +img}, "slow", function() {
		if(!(rcount % firstnum)) {
		  $("#image").animate({"left": -firstwidth}, "slow");
		  rcount = 0;
		} //if
            });//animate
        });//right
   }
})(jQuery);