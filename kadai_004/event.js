$(window).on ({
  // ロードしたとき
  'load': () => {
  console.log('loadイベントが発生しました');
  },
  // スクロールしたとき
  'scroll': () => {
    console.log('scrollイベントが発生しました');
  }
});