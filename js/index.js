const expandBtn = $('.expend')
const element = $('.chatBox header');
const chatBox = document.querySelector('.chat-thread');
window.onload = function () {
    chatBox.scrollTop = chatBox.scrollHeight;
    expandBtn.hide()
}

$("#live-chat header").on("click", function () {
    element.addClass("close");
    // $(".chat-message-counter").fadeToggle(300, "swing");
});

expandBtn.click(openElement)
element.click(closeElement)

// 



function closeElement() {
    $(".chatBox").addClass("close");
    $(".chat-message-counter").show();
    expandBtn.show();

}
function openElement() {
    $(".chatBox").removeClass("close");
    expandBtn.hide();
    $(".chat-message-counter").hide();
    chatBox.scrollTop = chatBox.scrollHeight;
}

function setDate() {
    d = new Date();
    m = 0;
    if (m != d.getMinutes()) {
        m = ('0' + d.getMinutes()).substr(-2);
        console.log(m);
        $('.timestamp').text(d.getHours() + ':' + m)
    }
}

function insertMessage() {
    var regexp = /((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi;
    msg = $('.message-input').val().replace(regexp, '<a target="_blank" href="$1">$1</a>');
    if ($.trim(msg) == '') {
        return false;
    }
    $(`<li class="message">${msg}<small class="timestamp"></small></li>`).appendTo($('.chat-thread'));
    setDate();
    chatBox.scrollTop = chatBox.scrollHeight;
    $('.message-input').val('');
}
$(window).on('keydown', function (e) {
    if (e.which == 13) {
        insertMessage();
        return false;
    }
})
$('.message-submit').click(function () {
    insertMessage();
});