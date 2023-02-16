function deactivate(loginName) {
  $.post("deactivate.php", { login_name: loginName }).done(function (data) {
    window.location = "http://localhost/php-user-login-activity/";
  });

  return false;
}
