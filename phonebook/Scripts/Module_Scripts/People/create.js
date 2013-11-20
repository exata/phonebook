var $formId = '#frmSearch';

$(document).on('click', '.showSearch', function (e) {
    $('.chosen-container').css('width', '100px');
    e.preventDefault();
    var $formPesquisa = $($formId);

    if ($formPesquisa.css('display') === 'none') {
        $formPesquisa.slideDown(function () {
            $($formPesquisa).fadeIn();
        });
        $(this).children('i').removeClass('icon-chevron-down').addClass('icon-chevron-up');
    } else {
        $formPesquisa.slideUp(function () {
            $($formPesquisa).fadeOut();
        });
        $(this).children('i').removeClass('icon-chevron-up').addClass('icon-chevron-down');
    }
});