const expandBtn = $('.expend')
const element = $('.chatBox header');

$("#live-chat header").on("click", function () {
    element.addClass("close");
    $(".chat-message-counter").fadeToggle(300, "swing");
});

expandBtn.click(openElement)
element.click(closeElement)

$(".chat-delete").on("click", function (e) {
    e.preventDefault();
    $("#live-chat").fadeOut(300);
});

function closeElement() {
    $(".chatBox").addClass("close");
    $(".chat-message-counter").show();
    expandBtn.show();
}
function openElement() {
    $(".chatBox").removeClass("close");
    expandBtn.hide();
    $(".chat-message-counter").hide();
}

function setDate() {
    d = new Date()
    m = d.getMinutes();
    $('.timestamp').text(d.getHours() + ':' + m)
}

function insertMessage() {
    var regexp = /((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi;
    msg = $('.message-input').val().replace(regexp, '<a href="$1">$1</a>');
    if ($.trim(msg) == '') {
        return false;
    }
    $(`<li class="message">${msg}<span class="timestamp"></span></li>`).appendTo($('.chat-thread'));
    setDate();
    $('.message-input').val('');
}
$(window).on('keydown', function (e) {
    if (e.which == 13) {
        insertMessage();
        chatBox.scrollTop = chatBox.scrollHeight
        return false;
    }
})
$('.message-submit').click(function () {
    insertMessage();
    chatBox.scrollTop = chatBox.scrollHeight
});