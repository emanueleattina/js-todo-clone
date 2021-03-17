$(document).ready(function () {

    $('#add').click(function () {
        var inserisci = $('#inserisci').val();
        $('#inserisci').val("");

        var template = $('#fare .new-task').clone();
        template.children('h3.task').text(inserisci);

        template.children('.bottoni').children('#fatto').click(function () {
            $(this).parent('.bottoni').siblings('.task').addClass('completato');

            $(this).hide();
            $(this).siblings('#edit').hide();

            $(this).siblings('#canc').show();
        });

        template.children('.bottoni').children('#canc').click(function () {
            $(this).parent('.bottoni').parent('.new-task').remove();
        });




        template.children('.bottoni').children('#edit').click(function () {

            var titleDOM = $(this).parent('.bottoni').siblings('.task');
            var title = titleDOM.text();
            titleDOM.hide();

            $(this).parents('.bottoni').parents('.new-task').addClass('mod');

            $(this).siblings('.task').hide();
            $(this).siblings('#fatto').hide();
            template.children('.bottoni').children('#edit').hide();

            $(this).siblings('#modFinita').show();

            $(this).parent('.bottoni').siblings('input').val(title).show();

            // $(this).parent('.bottoni').siblings('#inputEdit').val($(this).siblings('.task').text()).show();
        });


        template.children('.bottoni').children('#modFinita').click(function () {

            var title = $(this).parents('.bottoni').siblings('input').val();

            $(this).parents('.bottoni').parents('.new-task').removeClass('mod');

            $(this).parents('.bottoni').siblings('h3.task').text(title).show();


            $(this).parent('.bottoni').siblings('#inputEdit').val($(this).siblings('.task').text()).hide();
            template.children('.bottoni').children('#modFinita').hide();

            $(this).siblings('#fatto').show();
            $(this).siblings('#edit').show();
        });

        $('#daFare').append(template);
    });


    $('#inserisci').keyup(function (e) {

        if (e.which == 13) {
            var inserisci = $('#inserisci').val();
        $('#inserisci').val("");

        var template = $('#fare .new-task').clone();
        template.children('h3.task').text(inserisci);

        template.children('.bottoni').children('#fatto').click(function () {
            $(this).parent('.bottoni').siblings('.task').addClass('completato');

            $(this).hide();
            $(this).siblings('#edit').hide();

            $(this).siblings('#canc').show();
        });

        template.children('.bottoni').children('#canc').click(function () {
            $(this).parent('.bottoni').parent('.new-task').remove();
        });




        template.children('.bottoni').children('#edit').click(function () {

            var titleDOM = $(this).parent('.bottoni').siblings('.task');
            var title = titleDOM.text();
            titleDOM.hide();

            $(this).parents('.bottoni').parents('.new-task').addClass('mod');

            $(this).siblings('.task').hide();
            $(this).siblings('#fatto').hide();
            template.children('.bottoni').children('#edit').hide();

            $(this).siblings('#modFinita').show();

            $(this).parent('.bottoni').siblings('input').val(title).show();

            // $(this).parent('.bottoni').siblings('#inputEdit').val($(this).siblings('.task').text()).show();
        });


        template.children('.bottoni').children('#modFinita').click(function () {

            var title = $(this).parents('.bottoni').siblings('input').val();

            $(this).parents('.bottoni').parents('.new-task').removeClass('mod');

            $(this).parents('.bottoni').siblings('h3.task').text(title).show();


            $(this).parent('.bottoni').siblings('#inputEdit').val($(this).siblings('.task').text()).hide();
            template.children('.bottoni').children('#modFinita').hide();

            $(this).siblings('#fatto').show();
            $(this).siblings('#edit').show();
        });

        $('#daFare').append(template);
        }
    });

});