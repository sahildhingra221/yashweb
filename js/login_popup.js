$(document).ready(function(){
	console.log("JQUERY IS READY!");
	$("#login-submit-button").click(function(e) {
		console.log('$("#login-submit-button").click');
		// TODO - Validate form data. Submit to server. Add UI and logic for success or failed server response
		setLoggedInState();
		closeLoginPopup();
	});
	$(window).resize(function(){
		updateLoginPopup();
	});
});
function resetLoginForm() {
	// http://api.jquery.com/find/
	$('#login-popup-content').find('input:text').val('');
	$('#login-popup-content').find('input:password').val('');
}
function openLoginPopup(){
	resetLoginForm();
	$("#login-popup-content").fadeIn();
	showPopupOverlay();
	updateLoginPopup();
}
function closeLoginPopup(){
	$("#login-popup-content").fadeOut();
	hidePopupOverlay();
}
function updateLoginPopup(){
	$popupContent = $("#login-popup-content");
	// http://api.jquery.com/height/
	// http://api.jquery.com/outerheight/
	//var top = $(window).height() / 2 - $popupContent.outerHeight() / 2; // Center vertical
	var top = "50px"; // Fixed offset
	// http://api.jquery.com/width/
	//  http://api.jquery.com/outerWidth/
	var left = ($(window).width() - $popupContent.outerWidth()) / 2; // Center horizontal
	$popupContent.css({
		'top' : top,
		'left' : left
	});
}
