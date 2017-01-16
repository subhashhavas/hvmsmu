var jq$ = jQuery.noConflict();

jq$(document).find("input[name='First Name']").prev().hide();
	 		 jq$(document).find("input[name='First Name']").hide();		

	 		 jq$(document).find("input[name='Last Name']").prev().hide();
	 		 jq$(document).find("input[name='Last Name']").hide();		

	 		 jq$(document).find("input[name='Gender']").prev().hide();
	 		 jq$(document).find("input[name='Gender']").hide();		

	 		 jq$(document).find("input[name='User Category']").prev().hide();
	 		 jq$(document).find("input[name='User Category']").hide();		

//init();




function init()
{
	hideFrame('formA1');
}





function showFrame(frameName)
{
	switch(frameName)
	{
		case 'formA1':
			 jq$(document).find("input[name='First Name']").prev().show();
	 		 jq$(document).find("input[name='First Name']").show();		

	 		 jq$(document).find("input[name='Last Name']").prev().show();
	 		 jq$(document).find("input[name='Last Name']").show();		

	 		 jq$(document).find("input[name='Gender']").prev().show();
	 		 jq$(document).find("input[name='Gender']").show();		

	 		 jq$(document).find("input[name='User Category']").prev().show();
	 		 jq$(document).find("input[name='User Category']").show();		
		break;
	}
}

function hideFrame(frameName)
{
	switch(frameName)
	{
		case 'formA1':
			 jq$(document).find("input[name='First Name']").prev().hide();
	 		 jq$(document).find("input[name='First Name']").hide();		

	 		 jq$(document).find("input[name='Last Name']").prev().hide();
	 		 jq$(document).find("input[name='Last Name']").hide();		

	 		 jq$(document).find("input[name='Gender']").prev().hide();
	 		 jq$(document).find("input[name='Gender']").hide();		

	 		 jq$(document).find("input[name='User Category']").prev().hide();
	 		 jq$(document).find("input[name='User Category']").hide();		
		break;
	}
}