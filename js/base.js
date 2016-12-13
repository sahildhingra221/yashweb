$(document).ready(function(){
	$("#login-open-button").click(function(e) {
		console.log('$("#login-open-button").click');
		$(this).prop("disabled", true);
		openLoginPopup();
	});
	$("#logout-button").click(function(e) {
		console.log('$("#logout-button").click');
		// TODO - Submit to server and add logic for success or failed server response
		setLoggedOutState();
	});
	$("#popup-overlay-bg").click(function(e) {
		console.log('$("#popup-overlay-bg").click');
		closeLoginPopup();
		setLoggedOutState();
	});
});
function setLoggedOutState(){
	$("#login-open-button").prop("disabled", false);
	$("#login-open-button").show();
	$("#logout-button").hide();
}
function setLoggedInState(){
	$("#login-open-button").hide();
	$("#logout-button").show();
}
function showPopupOverlay(){
	$("#popup-overlay-bg").fadeIn();
}
function hidePopupOverlay(){
	$("#popup-overlay-bg").fadeOut();
}