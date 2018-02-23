//http://jquerytools.github.io/documentation/scrollable/navigator.html
$(function() {
    $.getJSON("data.json", function(data) {
        var html = "";
        var navi = "";
        for (var i = 0; i < data.length; i++) {
            html += "<div>";
            html += "<a href=\"" + data[i][1] + "\" target=\"_blank\"><img src=\"" + data[i][0] + "\"></a>";
            html += "</div>";
            navi += "<span";
            if (i == 0) {
                navi += " class=\"active\"";
            }
            navi += "></span>";
        }
        $(".inbox").html(html);
        $(".navi").html(navi);
        $(".scrollable").scrollable({ circular: true }).autoscroll({ interval: 2000 }).navigator();
    });
});