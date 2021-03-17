$(document).ready(function () {

    $('#add').click(function () {
        var inserisci = $('#inserisci').val();
        $('#inserisci').val("");

        var template = $('#fare .new-task').clone();
        template.children('h3.task').text(inserisci);

        template.children('#fatto').click(function () {
            $(this).siblings('.task').addClass('fatto');
            console.log('s');

        });

        template.children('#edit').click(function () {
            var titleDOM = $(this).siblings('.task');
            var title = titleDOM.text();

            titleDOM.hide();
            $(this).siblings('#fatto').hide();
            template.children('#edit').hide();

            $(this).siblings('#modFinita').show();

            $(this).siblings('#inputEdit').val(title).show();
        });

        template.children('#modFinita').click(function () {
            var title = $(this).siblings('#inputEdit').val();

            $(this).siblings('h3.task').text(title).show();
            $(this).siblings('#inputEdit').hide();
            template.children('#modFinita').hide();

            $(this).siblings('#fatto').show();
            $(this).siblings('#edit').show();
        });

        $('#daFare').append(template);
    });

    







    $('#inserisci').keyup(function (e) {

        if (e.which == 13) {
            var inserisci = $('#inserisci').val();
            $('#inserisci').val("")

            var template = $('#fare .new-task').clone();
            template.children('h3.task').text(inserisci);

            template.children('#fatto').click(function () {
                $(this).siblings('.task').addClass('fatto');
            });
        }
        $('#daFare').append(template);
    });

});