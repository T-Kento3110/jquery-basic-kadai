$(function() {
  // "btn"がクリックされたら
  $('.btn').on('click', function() {
    // "text-box"の値を変更する
    $('.text-box').val('クリックしました！');
  })
});