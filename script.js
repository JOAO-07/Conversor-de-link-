let link = $('.linkInput input');
$('#convertLink').on('submit', function(e) {
  e.preventDefault();
  if (link.val().trim() == '' || link.length == '0') {
    $('.error .message').html('Please Enter Google Drive Shareable Link');
    showError();
  } else {
    if (!is_valid_url(link.val().trim())) {
      $('.error .message').html('Please Enter Valid URL');
      showError();
    } else {
      let id0 = link.val().trim().split('d/')['1'];
      let ID = id0.split('/v')['0'];
      let downloadLink = 'https://drive.google.com/uc?id=' + ID + '&export=download';
      $('#convertedLink').val(downloadLink);
    }
  }
});
$('.copyBtn').click(function() {
  copyToClipboard('#convertedLink');
   $('.copyBtn i').remove();
    $('.copyBtn').html('Copied');
  setTimeout(function(){
    $('.copyBtn').html('');
    $('.copyBtn').append('<i class="fas fa-clipboard"></i>');
  }, 2000);
});

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).val()).select();
  document.execCommand("copy");
  $temp.remove();
}

function showError() {
  $('.error').css('display', 'flex');
  setInterval(function() {
    $('.error').css('display', 'none');
  }, 3000);
}

function is_valid_url(url) {
  //regular expression for URL
  var pattern = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (pattern.test(url)) {
    return true;
  } else {
    return false;
  }
}