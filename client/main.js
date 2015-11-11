
Template.main.events({
	'click .link': function(e){
		console.log("you clicked it");
		e.preventDefault();
		$('.main-panel').animate({width: '30%'}, 'slow');
		$('.content-panel').slideToggle();
	}
// 	$('a#link').click(function(e) {
//   e.preventDefault();
//   $('#left-bg').animate({ width : '0%' }, 'slow');
//   $('#right-bg').animate({ width : '100%' }, 'slow');
// });
});