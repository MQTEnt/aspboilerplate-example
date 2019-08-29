(function() {
    $(function () {
        //Script for input mask
        var $demoMaskedInput = $('.masked-input');

        //Time
        $demoMaskedInput.find('.time24').inputmask('hh:mm', { placeholder: '__:__ _m', alias: 'time24', hourFormat: '24' });

        //Phone Number
        $demoMaskedInput.find('.phone-number').inputmask('+99 (999) 999-99-99', { placeholder: '+__ (___) ___-__-__' });

        //Price (Dollar Money)
        $demoMaskedInput.find('.money-dollar').inputmask('99,99 $', { placeholder: '__,__ $' });

        //Credit Card
        $demoMaskedInput.find('.credit-card').inputmask('9999 9999 9999 9999', { placeholder: '____ ____ ____ ____' });

        //Email
        $demoMaskedInput.find('.email').inputmask({ alias: "email" });

        //Clear search
        var btnClear = $('#btnClear');
        btnClear.click(function () {
            $('.form-control').val('');
            $('input[type=checkbox]').prop("checked", false);
        });

        //Script for datepicker
        $('.datepicker').bootstrapMaterialDatePicker({
            format: 'dddd DD MMMM YYYY',
            clearButton: true,
            weekStart: 1,
            time: false
        });
    });
})();