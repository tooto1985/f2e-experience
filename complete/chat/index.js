$(function() {
    var socket = io();
    function sendMessage(name, message) {
        if(name && message) {
            var data = name + "說：" + message;
            socket.emit("send", data);
            showMessage(data);
            $("#message").val("");
        }
    }
    function showMessage(data) {
        $(".box").prepend("<div>" + data + "</div>");
    }
    socket.on("receive",showMessage);
    $("#send").click(function() {
        sendMessage($("#name").val(), $("#message").val());
    });
    $("#message").keyup(function(e) {
        if (e.keyCode == 13) {
            sendMessage($("#name").val(), $("#message").val());
        }
    });
});