var requestConfig = {
    selector: 'form',
    requestURL: '/send.php',
    requestMethod: 'POST',
    resetFormAfterRequest: true,
    errorMessage:
        'Произошла ошибка запроса. Пожалуйста, свяжитесь с менеджером по телефону!',
    againMessage: 'Вы уже отправили заявку, повторить?',
    goodMessage: 'Заявка успешно добавлена!',
    thankURL: '/thank.html',
    fakeThankURL: '/thb.html',
    redirect: function (path) {
        window.location.href = window.location.origin + path
    },
}
