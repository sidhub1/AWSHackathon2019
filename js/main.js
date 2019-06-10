
(function ($) {
    "use strict";

    //     $('#facebook-button').on('click', function() {
    //
    //   // Initialize with your OAuth.io app public key
    //   OAuth.initialize('HwAr2OtSxRgEEnO2-JnYjsuA3tc');
    //   // Use popup for oauth
    //   OAuth.popup('facebook').then(facebook => {
    //     console.log('facebook:',facebook);
    //     // Prompts 'welcome' message with User's email on successful login
    //     // #me() is a convenient method to retrieve user data without requiring you
    //     // to know which OAuth provider url to call
    //     facebook.me().then(data => {
    //       console.log('me data:', data);
    //       alert('Facebook says your email is:' + data.email + ".\nView browser 'Console Log' for more details");
    //     })
    //     // Retrieves user data from OAuth provider by using #get() and
    //     // OAuth provider url
    //     facebook.get('/v2.5/me?fields=name,first_name,last_name,email,gender,location,locale,work,languages,birthday,relationship_status,hometown,picture').then(data => {
    //       console.log('self data:', data);
    //     })
    //   });
    // })
            var StoredEmail;
        $('#login100-form-btn').on('click', function() {
            var emailtemp = document.getElementById(EmailInput);
            StoredEmail = emailtemp;

        })




        $('#google-button').on('click', function() {
      // Initialize with your OAuth.io app public key
      OAuth.initialize('HwAr2OtSxRgEEnO2-JnYjsuA3tc');
      // Use popup for oauth
      OAuth.popup('facebook').then(facebook => {
        console.log('facebook:',facebook);
        // Prompts 'welcome' message with User's email on successful login
        // #me() is a convenient method to retrieve user data without requiring you
        // to know which OAuth provider url to call
        facebook.me().then(data => {
          console.log('me data:', data);
          alert('Facebook says your email is:' + data.email + ".\nView browser 'Console Log' for more details");
        })
        // Retrieves user data from OAuth provider by using #get() and
        // OAuth provider url
        facebook.get('/v2.5/me?fields=name,first_name,last_name,email,gender,location,locale,work,languages,birthday,relationship_status,hometown,picture').then(data => {
          console.log('self data:', data);
        })
      });
    })


    /*==================================================================
    [ Focus input ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })
    })


    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }


    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }

    /*==================================================================
    [ Show pass ]*/
    var showPass = 0;
    $('.btn-show-pass').on('click', function(){
        if(showPass == 0) {
            $(this).next('input').attr('type','text');
            $(this).find('i').removeClass('zmdi-eye');
            $(this).find('i').addClass('zmdi-eye-off');
            showPass = 1;
        }
        else {
            $(this).next('input').attr('type','password');
            $(this).find('i').addClass('zmdi-eye');
            $(this).find('i').removeClass('zmdi-eye-off');
            showPass = 0;
        }

    });


})(jQuery);
