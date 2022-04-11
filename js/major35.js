$(document).ready(() => {
    let my = $('input');
    $(my[0]).on('input', function () {
        let reg = /[0-9]/g;
        $(this).val($(this).val().replace(reg, ''))
    })
    $(my[1]).on('input', function () {
        let regs = /[. ,]/g;
        $(this).val($(this).val().replace(regs, ''))
    })
    $(my[5]).on('change', function () {
        if($(this).prop('checked')) {
            console.log('Согласен')
        } else {
            console.log('Не согласен')
        }
    })

    my1 = $('#button');
    $(my1).on('click', function  button() {
        let password = $(my[3]).val();
        let confirmPassword = $(my[4]).val();
        if ($(!my[0]).val()) {
            alert('Заполните поле "ФИО"')
        } else if (!$(my[1]).val()) {
            alert('Заполните поле "Имя пользователя')
        } else if (!$(my[2]).val()) {
            alert('Заполните поле E-mail')
        } else if (!$(my[3]).val()) {
            alert('Заполните поле "Пароль"')
        } else if (!$(my[4]).val()) {
            alert('Заполните поле "Подтвердите пароль"')
        } else if (password != confirmPassword) {
            alert('Пароли не совпадают')
        } else if (!$(my[5]).prop('checked')) {
            alert('Вы не подтвердили согласие')
        } else {
            alert('Okay')
        }
    })

    my2 = $('#registration');
    $(my2).on('click', function () {
        $('#title').html('Log in to the system');
        let block =$('label');
        $(block[0]).remove();
        $(block[2]).remove();
        $(block[4]).remove();
        $(block[5]).remove();
        $(my2).remove();
    })
})
