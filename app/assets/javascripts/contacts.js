// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
jQuery("document").ready(function(){
	jQuery(".menu #add").click(function(){
		jQuery(".add_contact").show();
	});
	jQuery(".add_contact #details .more_details_tab ul #address").click(function(){
		jQuery(".add_contact #details #calls").hide();
		jQuery(".add_contact #details #addresses,.add_contact #details #add_details").show();
	});
	jQuery(".add_contact #details .more_details_tab ul #phone").click(function(){
		jQuery(".add_contact #details #calls,.add_contact #details #add_details").show();
		jQuery(".add_contact #details #addresses").hide();
	});
	jQuery(".add_contact #details .more_details_area #more_address").click(function(){
		jQuery(".add_contact #details #addresses").append('<div><label>Address</label> : <input type="textbox" maxlength="100"></div>');
	});
	jQuery(".add_contact #details .more_details_area #more_phone").click(function(){
		jQuery(".add_contact #details #calls").append('<div><label>Phone</label> : <input type="textbox" maxlength="100"></div>');
	});
});