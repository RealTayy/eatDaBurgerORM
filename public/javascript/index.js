$('.devour-btn').on('click', function (event) {
    var id = $(this).data('id');
    $.ajax({
        url: `/api/burgers/${id}`,
        type: 'PUT',
        data: { devoured: 1 }
    }).then(function () {
        console.log('hello');
        location.reload();
    });
});

$('.undevour-btn').on('click', function (event) {
    var id = $(this).data('id');
    $.ajax({
        url: `/api/burgers/${id}`,
        type: 'PUT',
        data: { devoured: 0 }
    });
});