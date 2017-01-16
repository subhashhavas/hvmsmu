
	// This is script should be either add or reference in the ACTON Registration form


	var jq$ = jQuery.noConflict();

	var toolTipMsg1 = "Examples of First Names as underlined: <br><br> Koh <u> Yan Ling </u>| <u>Janice</u> Tay Tze Yun | <u>Rebecca</u> Tobin Feldman <br> <u>Ahmad Dinie Farid </u>Bin Mohamed Halim | <u>Shaurya </u>Pratap Singh";
	var toolTipMsg2 = "Examples of Last Names as underlined: <br><br> <u> Koh </u> Yan Ling | Janice <u>Tay Tze Yun</u> | Rebecca <u>Tobin Feldman</u> <br> Ahmad Dinie Farid <u>Bin Mohamed Halim</u> | Shaurya <u>Pratap Singh</u>";

	var selectPushArray = []; //array to push the options of highschool list for later use



	var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;





	jq$(document).ready(function() 
	{
	    	console.log( "ready!" );


	    	//loadGraduationYearListOptions();


	    	//to append a star for the final checkbox label
	    	jq$('.formFieldLabel.checkboxFieldLabel').append('<b style="color: #FF0000; cursor: default" title="Required Field">*</b>');


	  //   	jq$(document).bind({
			// 	// mousemove : changeTooltipPosition,
			// 	click : hideTooltip
			// });



	    	//>>>>tool tip logic

	    	jq$(document).find("input[name='First Name']").bind({
				// mousemove : changeTooltipPosition,
				mouseenter : showTooltip1,
				mouseleave: hideTooltip
			});

	    	jq$(document).find("input[name='Last Name']").bind({
				// mousemove : changeTooltipPosition,
				mouseenter : showTooltip2,
				mouseleave: hideTooltip
			});


			jq$(document).find("input[name='Last Name']").bind({
				// mousemove : changeTooltipPosition,
				mouseenter : showTooltip2,
				mouseleave: hideTooltip
			});

			jq$(document).find("input[name='Last Name']").bind({
				// mousemove : changeTooltipPosition,
				mouseenter : showTooltip2,
				mouseleave: hideTooltip
			});


			var radioValue = jq$("input[name='User Category']:checked").val();

			if (radioValue == 'student') 
	        {
	            jq$(document).find("input[name='Passport Number']").prev().show();
		 		jq$(document).find("input[name='Passport Number']").show();
	        }
	        else 
	        {
        		jq$(document).find("input[name='Passport Number']").prev().hide();
		 		jq$(document).find("input[name='Passport Number']").hide();
	        }




			jq$(document).find("input[name='User Category']").change(function() 
			{
				radioValue = jq$("input[name='User Category']:checked").val();

				if (radioValue == 'student') 
		        {
		        	jq$(document).find("input[name='Passport Number']").val("");
		        	jq$(document).find("input[name='Passport Number']").val("");
		            jq$(document).find("input[name='Passport Number']").prev().show();
			 		jq$(document).find("input[name='Passport Number']").show();
		        }
		        else 
		        {
	        		jq$(document).find("input[name='Passport Number']").prev().hide();
			 		jq$(document).find("input[name='Passport Number']").hide();
			 		jq$(document).find("input[name='Passport Number']").val("NA");
		        }
		    });


			 jq$(document).find("select[name='High School']").on("change",function(e) 
	    	{

	    		if(jq$(document).find("select[name='High School']").val() == "Other IB School")
				{
					console.log('working');
					jq$(document).find("input[name='Other IB School']").val('');
					jq$(document).find("input[name='Other IB School']").prev().show();
			 		jq$(document).find("input[name='Other IB School']").show();
				}else
				{
					jq$(document).find("input[name='Other IB School']").val('NA');
					jq$(document).find("input[name='Other IB School']").prev().hide();
			 		jq$(document).find("input[name='Other IB School']").hide();
				}	
	    	});



	    	//<<<<< tool tip logic

	    	//hide the highschool list and its labelfor by default
		    jq$(document).find("select[name='High School']").prev().hide();
		    jq$(document).find("select[name='High School']").hide();

	     
			//push all the high school options from high school list to array
		     createDropDownListArray();

		    //console.log(selectPushArray);


		     //Other School Option and IB input are hide by default
		     jq$(document).find("input[name='Other School']").prev().hide();
			 jq$(document).find("input[name='Other School']").hide();



			 //Passport Number
		     jq$(document).find("input[name='Passport Number']").prev().hide();
			 jq$(document).find("input[name='Passport Number']").hide();

			 //IB Other School
		     jq$(document).find("input[name='Other IB School']").prev().hide();
			 jq$(document).find("input[name='Other IB School']").hide();

			 jq$(document).find("input[name='Other IB School']").val('NA');
			 jq$(document).find("input[name='Other School']").val('NA');

		 // jq$(document).find("input[name='IB']").prev().hide();
		 // jq$(document).find("input[name='IB']").hide();


	   	
	   	//On selecting the Highest qualification event

	    jq$(document).find("select[name='Highest Qualification']").on("change",function(e) 
	    {



	    		// refresh the list
	    		removeAllOptions();


	    		//Show the highschool list drop down
		    	jq$(document).find("select[name='High School']").prev().show();
				jq$(document).find("select[name='High School']").show();


				//Hide IB and Other School options
				jq$(document).find("input[name='Other School']").prev().hide();
				jq$(document).find("input[name='Other School']").hide();
				jq$(document).find("input[name='Other School']").attr('placeholder','Type here..');

				// jq$(document).find("input[name='IB']").prev().hide();
				// jq$(document).find("input[name='IB']").hide();
				// jq$(document).find("input[name='IB']").attr('placeholder','Type here..');


				//console.log(jq$(document).find("select[name='Highest Qualification']").val());	

				jq$(document).find("select[name='High School']").prop('selectedIndex',0);

				//jq$(jq$(document).find("select[name='High School']")).children('option[value="NA"]').css('display',"none"); 




				if(jq$(document).find("select[name='Highest Qualification']").val() != "International Baccalaureate Diploma (IB)")
				{
					jq$(document).find("input[name='Other IB School']").val('NA');
					jq$(document).find("input[name='Other IB School']").prev().hide();
			 		jq$(document).find("input[name='Other IB School']").hide();
				}




				if(jq$(document).find("select[name='Highest Qualification']").val() == "GCE A-Level (Local)")
				{
					
					addNeededOptionsBacktoList(1,22);
					jq$(document).find("select[name='High School']").prop('selectedIndex',0);

				    //Mark the mandatory feilds, filled with NA if not applicable for this selection
				    jq$(document).find("input[name='Other School']").val("NA");
				    // jq$(document).find("input[name='IB']").val("NA");

				}else if(jq$(document).find("select[name='Highest Qualification']").val() == "Polytechnic Diploma")
				{
					 addNeededOptionsBacktoList(22,27); 
					 jq$(document).find("select[name='High School']").prop('selectedIndex',0);

				     //Mark the mandatory feilds, filled with NA if not applicable for this selection
				     jq$(document).find("input[name='Other School']").val("NA");
				     // jq$(document).find("input[name='IB']").val("NA");

				}else if(jq$(document).find("select[name='Highest Qualification']").val() == "International Baccalaureate Diploma (IB)")
				{
					
     				// jq$(document).find("input[name='IB']").val("");
     				
     				//Mark the mandatory feilds, filled with NA if not applicable for this selection
     // 				jq$(document).find("input[name='Other School']").val("NA"); // since IB is selected, mark other input as NA
     				
     				
     // 				jq$(document).find("select[name='High School']").append(selectPushArray[49]); // since IB is selected, mark select drop down as NA
     // 				jq$(document).find("select[name='High School']").prop('selectedIndex',0); //not applicable selected

     // 				jq$(document).find("select[name='High School']").prev().hide(); //since IB is selected, hide label for drop down
					// jq$(document).find("select[name='High School']").hide(); // since IB is selected, hide label for drop down


     // 				jq$(document).find("input[name='IB']").prev().show();
					// jq$(document).find("input[name='IB']").show();





					addNeededOptionsBacktoList(27,49);	
					jq$(document).find("select[name='High School']").prop('selectedIndex',0);
					jq$(document).find("input[name='Other School']").val("NA");
				    // jq$(document).find("input[name='IB']").val("NA");








				}else if(jq$(document).find("select[name='Highest Qualification']").val() == "NUS High School Diploma")
				{
					addNeededOptionsBacktoList(49,50);
					jq$(document).find("select[name='High School']").prop('selectedIndex',0);

	     			 //Mark the mandatory feilds, filled with NA if not applicable for this selection
	     			jq$(document).find("input[name='Other School']").val("NA");
	     			// jq$(document).find("input[name='IB']").val("NA");

				}else if(jq$(document).find("select[name='Highest Qualification']").val() == "Other Qualification")
				{
					
	     			jq$(document).find("input[name='Other School']").val("");

	     			 //Mark the mandatory feilds, filled with NA if not applicable for this selection
	     			// jq$(document).find("input[name='IB']").val("NA");

	     			
	     			jq$(document).find("select[name='High School']").append(selectPushArray[50]);	
	     			jq$(document).find("select[name='High School']").prop('selectedIndex',0); //not applicable selected

					jq$(document).find("select[name='High School']").prev().hide();
	     			jq$(document).find("select[name='High School']").hide();
	     			jq$(document).find("input[name='Other School']").prev().show();
					jq$(document).find("input[name='Other School']").show();

				}else
				{
					console.log('highest qualificaiton is not in the select list');
				}




				//jq$(jq$(document).find("select[name='High School']")).children('option[value="Anderson Junior College"]').css('display','none');

		});

			return false;

	});




	//>>>>>tooltip logic

	    function showTooltip1(event) 
	    {

		   jq$('div.tooltip').remove();
		   jq$('<div class="tooltip">'+toolTipMsg1+'</div>').appendTo('body');


		    jq$('.tooltip').bind({
				mouseenter : hideTooltip,
			});
		   
		   //  jq$('.tooltip').fadeOut( "slow", function() {
			  //   // Animation complete.
			  // });

		 	

		   var tooltipX = jq$(event.currentTarget).offset().left;
    	   var tooltipY = jq$(event.currentTarget).offset().top+jq$(event.currentTarget).height();
    	   jq$('div.tooltip').css({top: tooltipY, left: tooltipX});

    	    if(isMobile)
    	   {
    	   	var w = jq$(document).find("input[name='First Name']").width();
    	   	jq$('div.tooltip').css({width: w+'px'});
    	   }

    	   setTimeout(hideTooltip,3000);
    	   		
		};

		function showTooltip2(event) 
	    {

		   jq$('div.tooltip').remove();
		   jq$('<div class="tooltip">'+toolTipMsg2+'</div>').appendTo('body');
		   

		   jq$('.tooltip').bind({
				mouseenter : hideTooltip,
			});

		   


		   var tooltipX = -10;
    	   var tooltipY = jq$(event.currentTarget).offset().top+jq$(event.currentTarget).height();
    	   jq$('div.tooltip').css({top: tooltipY, left: tooltipX});


    	   if(isMobile)
    	   {
    	   	var w = jq$(document).find("input[name='First Name']").width();
    	   	jq$('div.tooltip').css({width: w+'px'});
    	   }

    	   setTimeout(hideTooltip,3000);
		};


		function hideTooltip() 
		{
			jq$('div.tooltip').remove();
		};

	//<<<<<<<<<tooltip logic
//selectPushArray

	function loadGraduationYearListOptions()
	{

		jq$.each( jq$(jq$(document).find("select[name='Graduation Year']")).children(), function( i, el ) {
		  el.remove();
		});

		var idString = jq$(document).find("select[name='Graduation Year']")[0].id;
		
		var idStrtingPrefix = idString.substring(0, idString.length-1);

		var optionString = '<option value=""></option>';
		jq$(document).find("select[name='Graduation Year']").append(optionString);


		for(var i=2017;i>=1900;--i)
		{
			console.log(idStrtingPrefix+""+i);

			var newid = idStrtingPrefix+""+i;
			optionString = '<option id="'+newid+'" value="'+i+'">'+i+'</option>';

			jq$(document).find("select[name='Graduation Year']").append(optionString);
		}


	}

	function createDropDownListArray()
	{
		selectPushArray = jQuery.makeArray( jq$(jq$(document).find("select[name='High School']")).children() );
	}

	function addNeededOptionsBacktoList(lowerIndex,upperIndex)
	{
		removeAllOptions();

		jq$(jq$(document).find("select[name='High School']")).append('<option value=""></option>');

		for(var i=lowerIndex;i<upperIndex;++i)
		{
			jq$(jq$(document).find("select[name='High School']")).append(selectPushArray[i]);
		}
	}

	function removeAllOptions()
	{
		jq$.each( jq$(jq$(document).find("select[name='High School']")).children(), function( i, el ) {
		  el.remove();
		});
	}
