$(document).ready(function() {
    $(".btn-join").click(function() {
        $.post("/api/join", {
            name: $("#name").val()
        }, function(res) {
            console.log(res);
        })
    });
})