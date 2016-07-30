//found the search button
var zhjdLink = document.getElementsByClassName('sttb')[0];
if (undefined == zhjdLink) {
  console.log('No button')
}
zhjdLink.click();
//found the input and transmit the url
chrome.extension.onMessage.addListener(
  function(info, from, callback) {
    var url = info.srcUrl;
    zhjd_input = document.getElementById('stuurl');
    zhjd_input.value = url;
    zhjd_input.form.submit();
    callback(); 
});
