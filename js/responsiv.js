$(function (){
   $('.form_login_register .form header input').click(function (){
      if($(this).attr('class') == "login_btn disable"){
          $(this).removeClass('disable');
          $(this).addClass('active');
          $('.form_login_register .form header .register_btn').removeClass('active');
          $('.form_login_register .form header .register_btn').addClass('disable');
          $('#form_subscription').hide();
          $('#form_login').show();
          
      } 
      else{
          $(this).removeClass('disable');
          $(this).addClass('active');
          $('.form_login_register .form header .login_btn').removeClass('active');
          $('.form_login_register .form header .login_btn').addClass('disable');
          $('#form_login').hide();
          $('#form_subscription').show(); 
      }
   });
});