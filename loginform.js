function validate()
{
  var psw=document.loginform.psw;
  if (psw.value.length<=6)
  {
    alert("Password should not be less then 6!");
    psw.focus()
    return false;
  }
