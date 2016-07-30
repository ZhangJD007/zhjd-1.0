var zhjdtabs = [];  

// ���search image by baidu ��򿪰ٶȣ����ݲ���
function zhjdClickHandler(info, tab) {
  chrome.tabs.create(
      { url: "https://image.baidu.com/" },
      function(tab) {
        console.log('Tab ID: '    + tab.id);
        console.log('Image URL: ' + info.srcUrl);
        zhjdtabs.push(tab.id);
        chrome.tabs.executeScript(
            tab.id,
            { file: 'search.js' },
            function() {        
              chrome.tabs.sendMessage(
                  tab.id,
                  info,
                  function() {});
            });
      });
}

// Ϊ����Ҽ��������
chrome.contextMenus.create({
    "title": "search image by baidu",
    "contexts": ["image"],
    "id": "zhjdhack"
});
chrome.contextMenus.onClicked.addListener(zhjdClickHandler);
