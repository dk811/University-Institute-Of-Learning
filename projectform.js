function validate() 
{

	var first_name = document.form.first_name;
	var last_name = document.form.last_name;
	var f_name = document.form.f_name;
	var m_name = document.form.m_name;
	var phone = document.form.phone;
	var email = document.form.email;
	var address = document.form.address;
	var dob = document.form.dob;

	if(first_name.value.length<=0)
	{
		alert(" Fill your name ");
		first_name.focus();
		return false;
	}

	if(last_name.value.length<=0)
	{
		alert(" Fill your name ");
		last_name.focus();
		return false;
	}

	if(f_name.value.length<=0)
	{
		alert(" Fill your Fathers Name ");
		f_name.focus();
		return false;
	}

	if(m_name.value.length<=0)
	{
		alert(" Fill your Mothers Name ");
		m_name.focus();
		return false;
	}

	if(email.value.length<=0)
	{
		alert(" Email is neccesary ");
		email.focus();
		return false;
	}
	
	if(phone.value.length<=0)
	{
		alert(" Fill a Valid Phone Number ");
		contact.focus();
		return false;
	}

	if(email.value.length<=0)
	{
		alert(" Email is neccesary ");
		email.focus();
		return false;
	}

	if(address.value.length<=0)
	{
		alert(" Fill your Address ");
		address.focus();
		return false;
	}


	if(dob.value.length<=0)
	{
		alert(" Fill your Date of Birth ");
		dob.focus();
		return false;
	}
}	