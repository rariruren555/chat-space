$(function(){
  function buildHTML(message){
    if (message.image) {
      let html =
        `<div class="messagebox" data-message-id=${message.id}>
          <div class="messagebox__namedate">
            <div class="messagebox__namedate__name">
              ${message.user_name}
            </div>
            <div class="messagebox__namedate__date">
              ${message.created_at}
            </div>
          </div>
          <p class="Message__content">
            ${message.content}
          </p>
          <div class="messagebox__text">
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="messagebox" data-message-id=${message.id}>
         <div class="messagebox__namedate">
          <div class="messagebox__namedate__name">
            ${message.user_name}
          </div>
          <div class="messagebox__namedate__date">
           ${message.created_at}
          </div>
        </div>
        <div class="messagebox__text">
          <p class="Message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $('.content').on('submit', function(e){
    e.preventDefault()
    let formData = new FormData(this)
    let url = $(this).attr('action')
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.chat-main__message-list').append(html);
      $('.chat-main__message-list').animate({ scrollTop: $('.chat-main__message-list')[0].scrollHeight});
      $('form')[0].reset();
      $('.submit').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $('.submit').prop('disabled', false);
    });
  });
});