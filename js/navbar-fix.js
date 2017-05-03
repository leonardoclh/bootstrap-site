$('#links-menu').on('show.bs.collapse', function() {
	$('.topCasaFina-banner').removeClass('padrao-banner');
	$('.topCasaFina-banner').addClass('move-banner');
});

$('#links-menu').on('hidden.bs.collapse', function() {
	$('.topCasaFina-banner').removeClass('move-banner');
	$('.topCasaFina-banner').addClass('padrao-banner');
});
