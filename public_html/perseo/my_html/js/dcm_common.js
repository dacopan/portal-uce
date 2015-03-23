$(document).ready(function () {

    $('[data-role=sharex]').each(function () {

        var that = $(this);
        fixedUrls(that);
        that = null;
    });

});
function fixedUrls(that) {
    var reg = /.*\/.*\//g;
    if (typeof Liferay === 'undefined') {
        var qq = 'http://www.uce.edu.ec/home';
    } else {
        var qq = Liferay.ThemeDisplay.getLayoutURL();
    }
    var portal = qq.match(reg)[0] + "archive_noticias?artID=";
    var icox = '<i class="fa fa-share-alt"></i>';
    var t1 = 'https://twitter.com/intent/tweet?text=%E2%80%9C';
    var t2 = '%E2%80%9D&url=';
    var t3 = '&via=UCentralEcuador';
    var f1 = 'http://www.facebook.com/sharer.php?u=';

    var service = that.data("sharex-service");
    if (typeof service === 'undefined') {
        service = "u"
    }

    if (service == "f") {
        var urlx = encodeURI(portal + that.data("sharex-artid"));
        var srcx = f1 + urlx;
        that.attr("href", srcx);

    } else if (service == "t") {

        var urlx = encodeURI(portal + that.data("sharex-artid"));
        var title = encodeURI(that.data("sharex-title"));
        var srcx = t1 + title + t2 + urlx + t3;
        that.attr("href", srcx);

    } else if (service == "l") {

        //http://www.uce.edu.ec/archive_noticias?artID=0001
        var srcx = portal + that.data("sharex-artid");
        that.attr("href", srcx);
        that.html(icox + " " + srcx);
    } else {
        var srcx = portal + that.data("sharex-artid");
        that.attr("href", srcx);
    }
    portal = icox = t1 = t2 = t3 = f1 = service = reg = qq = that = null;
}