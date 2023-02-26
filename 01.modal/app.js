//jQuery start!
$(function () {
    // 한번 이상 사용되는 클래스는 변수로 저장해서 사용
    var moreBtn = $('.more_btn');
    var closeBtn = $('.close_btn');
    var dimm = $('.dimm');
    var modal = $('.modal');

    moreBtn.click(function () {
        dimm.show();
        modal.show();
    });

    closeBtn.click(function () {
        dimm.hide();
        modal.hide();
    });

    // $('.more_btn').click(function () {
    //     //more_btn을 눌렀을 때
    //     $('.dimm').show();
    //     $('.modal').show();
    //     //dimmr과 modal이 나타난다
    // });
    // $('.close_btn').click(function () {
    //     //close_btn 눌렀을 때
    //     $('.dimm').hide();
    //     $('.modal').hide();
    //     //dimm과 modal이 사라진다
    // });
});
