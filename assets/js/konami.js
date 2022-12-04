/**
* Copyright © 2021-2022 CloudXact. All Rights Reserved.
*/

// 允許鍵的鍵映射
var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
  };
  
  // 彩蛋激發密碼
  var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
  
  // 記住用戶到目前為止到達的 "位置"。
  var konamiCodePosition = 0;
  
  // 添加 keydown 事件監聽器
  document.addEventListener('keydown', function(e) {
    // 從鍵映射中獲取鍵碼的值
    var key = allowedKeys[e.keyCode];
    // 從 konami 代碼中獲取所需鍵的值
    var requiredKey = konamiCode[konamiCodePosition];
  
    // 將key與所需key進行比較
    if (key == requiredKey) {
  
      // 移動到 konami 代碼序列中的下一個鍵
      konamiCodePosition++;
      const key_txt = {
        up: '上',
        down : '下',
        left : '左',
        right : '右',
        b : 'B',
        a : 'A'
      };
      console.log(`KONAMI 密技輸入: ${key_txt[key]}`);
  
      // 如果達到最後一個則啟用彩蛋
      if (konamiCodePosition == konamiCode.length) {
        console.log(`KONAMI 密技輸入成功!`);
        activateCheats();
        konamiCodePosition = 0;
      }
    } else {
      konamiCodePosition = 0;
      console.log(`KONAMI 密技輸入失敗...`);
    }
  });
  
  function activateCheats() {
    document.body.style.backgroundImage = "url('assets/img/岬-名乃.jpg')";
  
    alert("天啊!\n你居然成功地找到了我們的彩蛋\n那我就播首我最喜歡的Free Turn吧!\n\n別忘記還有更多的彩蛋等你喔!");
    
    var audio = new Audio('assets/audio/Free-Turn.mp3');
    audio.pause()
    audio.volume = 0.2;
    audio.play();
  }