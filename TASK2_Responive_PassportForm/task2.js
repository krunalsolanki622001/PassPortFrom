function validatepassport()
{
	alert("You Are Going To Submit Data");
	var flag=true;
	var regExp = /^[a-zA-Z]+$/; // this is use for all name field ,this is take only string value.
	//validation for file Number
	var file_number=document.passportform.file_number;
	var error0_1=document.getElementById("error0_1");
	var error0_2=document.getElementById("error0_2");
	var error0_3=document.getElementById("error0_3");
	var error0_4=document.getElementById("error0_4");
	var error0_5=document.getElementById("error0_5");
	if (document.getElementById("fnum").value == "")
	{
		document.getElementById("error0_1").innerHTML= "*0.1 Please Enter File Number<br>" ;
		error0_1.style.color="red";
		flag=false;	
	}
	else if (document.getElementById("fnum").value != "")
	{
		document.getElementById("error0_1").innerHTML= "" ;
		flag=true;
		
		var fnum = document.getElementById("fnum").value ;
		
		if (document.getElementById("fnum").value.length != 12 )
		{
			document.getElementById("error0_2").innerHTML= "*0.1 File Number should not be less or greter than 12 digit.<br>" ;
			error0_2.style.color="red";
			flag=false;
		}
		else if (document.getElementById("fnum").value.length == 12 )
		{
			fcheck(fnum);
			fdate(fnum);
			
			document.getElementById("error0_2").innerHTML= "" ;
			flag=true;
			
			var tocheckfn = /^[A-Z0-9]+$/ ;
			
			if(!tocheckfn.test(fnum))
			{
				document.getElementById("error0_3").innerHTML= "*0.1 File Number Should Not Have Lower Case And Spicial Character.<br>" ;
				error0_3.style.color="red";
				flag=false;
			}
			else{
				document.getElementById("error0_3").innerHTML= "" ;
				flag=true;
			}	
		}
		function fcheck(fnum)
		{
			var c = 0;
			for (var i=0;i<3;i++)
			{
				if(fnum[i]<='9' && fnum[i]>='0')
					c++;
				
				if(c>0)
				{
					document.getElementById("error0_4").innerHTML= "*file number must start with alphabet.<br>" ;
					error0_4.style.color="red";
					flag=false;
				}
				else{
					document.getElementById("error0_4").innerHTML= "" ;
					flag=true;
				}
					
			}
		}
		function fdate(fnum)
		{
			var today = new Date();
			today.setDate(today.getDate()-10);
			var y1 = today.getFullYear();
			var y = y1.toString();
			
			if(fnum[10] == y[2] && fnum[11]==y[3])
			{
				document.getElementById("error0_5").innerHTML= "" ;
				flag = true;
			}
			else{
				document.getElementById("error0_5").innerHTML= "*0.1 Ending Digit is Diffrent from issue date year <br> " ;
				error0_5.style.color="red";
				flag = false;
			}
		}
		
	}
	
	//1st Point
	//1.1 point
	var fav_language=document.passportform.fav_language;
	var error1_1=document.getElementById("error1_1");
	if(fav_language.value.length <= 0)
	{
		document.getElementById("error1_1").innerHTML="*1.1 Select The Apply For Radio Button<br>";
		//error1_1.textContent="*1.1 Select The Apply For Radio Button";
		error1_1.style.color="red";
		flag=false;
	}
	else
	{
		//error1_1.textContent = "";
		document.getElementById("error1_1").innerHTML="";
		flag=true;
	}
	var sk=document.getElementById("css").checked;
	if(sk==true)
	{
		//1.2 point
	var check=document.passportform.check;
	var error1_2=document.getElementById("error1_2");
	var ck=false;
	for(var i=check.length-1;i>=0;i--)
	{
		if(check[i].checked)
		{
			ck=true;
		}
	}
	if(ck == false)
	{
		document.getElementById("error1_2").innerHTML="*1.2 field is required<br>";
		//error1_2.textContent="*1.2 field is required";
		error1_2.style.color="red";
		flag=false;
	}
	else
	{
		document.getElementById("error1_2").innerHTML="";
		//error1_2.textContent="";
		flag=true;
	}
	//1.3 point
	var abc=document.passportform.abc;
	var error1_3=document.getElementById("error1_3");
	var ck1=false;
	for(var i=abc.length-1;i>=0;i--)
	{
		if(abc[i].checked)
		{
			ck1=true;
		}
	}
	if(ck1 == false)
	{
		document.getElementById("error1_3").innerHTML="*1.3 field is required <br>";
		//error1_3.textContent="*1.3 field is required";
		error1_3.style.color="red";
		flag=false;
	}
	else
	{
		document.getElementById("error1_3").innerHTML="";
		//error1_3.textContent="";
		flag=true;
	}
	//6th point
	//6.1.1
	var vpn= /^[A-Za-z0-9 ]+$/;
	var icn=document.passportform.icn;
	var error6_1_1=document.getElementById("error6_1_1");
	if(icn.value.length <= 0)
	{
		document.getElementById("error6_1_1").innerHTML="*6.1.1 Please Enter Passport Number <br>";
		//error3_1_1.textContent="*3.1.1 Please Enter Father FristName";
		error6_1_1.style.color="red";
		
		// Father_FirstName.focus();
		flag=false;
	}
	else if(icn.value.length!=0)
	{
		if(!vpn.test(icn.value))
		{
			document.getElementById("error6_1_1").innerHTML="*6.1.1 Please Enter Valid Passport Number<br>";
			error6_1_1.style.color="red";
			flag=false;
		}
		else if(icn.value.length!=8)
		{
			document.getElementById("error6_1_1").innerHTML="*6.1.1 Passport Number Is only 8 digit.<br>";
			error6_1_1.style.color="red";
			flag=false;
		}
		else
		{
			document.getElementById("error6_1_1").innerHTML="";
			error6_1_1.style.color="red";
			flag=true;
		}
	}
	else
	{
		document.getElementById("error6_1_1").innerHTML="";
		error6_1_1.style.color="red";
		flag=true;
	}

	//6.1.2;
	var num9=document.getElementById("num9").value;
	//var idate=document.passportform.idate;
	var error6_1_2=document.getElementById("error6_1_2");
	if(num9.length <=0)
	{
		document.getElementById("error6_1_2").innerHTML="*6.1.2 Please Enter Date Of Issue <br>";
		//error.textContent="*0.1 Please Enter The File Number";
		error6_1_2.style.color="red";
		//file_number.focus();
		flag=false;
	}
	else if(num9.length!=0)
	{
		var fullDate = new Date();
		num9=new Date(num9);
		
		// let date = new Date()
		// let day = date.getDate();	
		// let month = date.getMonth()+1;
		// let year = date.getFullYear();

		// let fullDate = `${month}.${day}.${year}.`;
		
		if(num9.getTime() > fullDate.getTime())
		{
			document.getElementById("error6_1_2").innerHTML="*6.1.2 Can Not Enter Future Date<br>";
			error6_1_2.style.color="red";
			flag =false;
		}
		else
		{	
			document.getElementById("error6_1_2").innerHTML="";
			flag=true;
		}
	}
	else
	{
		document.getElementById("error6_1_2").innerHTML="";
		flag=true;
	}

	//6.1.3
	//var edate=document.passportform.edate;
	var num10=document.getElementById("num10").value;
	var error6_1_3=document.getElementById("error6_1_3");
	if(num10.length <=0)
	{
		document.getElementById("error6_1_3").innerHTML="*6.1.3 Please Enter Expiry Date <br>";
		//error.textContent="*0.1 Please Enter The File Number";
		error6_1_3.style.color="red";
		//file_number.focus();
		flag=false;
	}
	else if(num10.length!=0)
	{
		num9=new Date(num9);
		num10=new Date(num10);
		if(num10.getTime() < num9.getTime())
		{
			document.getElementById("error6_1_3").innerHTML="*6.1.3 Please Do Not Enter Date Less Then Date Of Inssue <br>"
			flag =false;
		}
		else
		{
			document.getElementById("error6_1_3").innerHTML="";
			flag=true;
		}
		//error.textContent = "";
		
	}
	else
	{
		document.getElementById("error6_1_3").innerHTML="";
		flag=true;
	}
	
	//6.1.4
	var place=document.passportform.place;
	var error6_1_4=document.getElementById("error6_1_4");
	if(place.value.length <= 0)
	{
		document.getElementById("error6_1_4").innerHTML="*6.1.4 Please Enter Place Name <br>";
		//error3_1_1.textContent="*3.1.1 Please Enter Father FristName";
		error6_1_4.style.color="red";
		
		// Father_FirstName.focus();
		flag=false;
	}
	else if(place.value.length!=0)
	{
		if(!regExp.test(place.value))
		{
			document.getElementById("error6_1_4").innerHTML="*6.1.4 Do Not Use Special Character.<br>";
			error6_1_4.style.color="red";
			flag=false;
		}
		else
		{
			document.getElementById("error6_1_4").innerHTML="";
		}
	}
	else
	{
		document.getElementById("error6_1_4").innerHTML="";
		// error3_1_1.textContent="";
		flag=true;
	}
	//6.2.1
	var fav_language10=document.passportform.fav_language10;
	var error6_2_1=document.getElementById("error6_2_1");
	if(fav_language10.value.length<=0)
	{
		document.getElementById("error6_2_1").innerHTML="*6.2.1 Please Select Any One Of It <br>";
		error6_2_1.style.color="red";
		flag=false;
	}
	else
	{
		document.getElementById("error6_2_1").innerHTML="";
		flag=true;
	}
	var rb1=document.getElementById("rb1").checked;
	if(rb1==true)
	{
		//6.2.2
	var filenumber=document.passportform.filenumber;
	var error6_2_2=document.getElementById("error6_2_2");
	if(filenumber.value.length <=0)
	{
		document.getElementById("error6_2_2").innerHTML="*6.2.2 Please Enter File Number <br>";
		//error.textContent="*0.1 Please Enter The File Number";
		error6_2_2.style.color="red";
		//file_number.focus();
		flag=false;
	}
	else if(filenumber.value.length!=0)
	{
		if(!checkfnum.test(filenumber.value))
		{
			document.getElementById("error6_2_2").innerHTML="*6.2.2 Do not Use Special Character<br>";
			error6_2_2.style.color="red";
			flag =false;
		}
		else
		{
			document.getElementById("error6_2_2").innerHTML="";
		flag=true;
		}
	}
	else
	{
		//error.textContent = "";
		document.getElementById("error6_2_2").innerHTML="";
		flag=true;
	}
	//6.2.3
	var monthandyear=document.passportform.monthandyear;
	var error6_2_3=document.getElementById("error6_2_3");
	if(monthandyear.value.length <=0)
	{
		document.getElementById("error6_2_3").innerHTML="*6.2.3 Please Enter Date <br>";
		//error.textContent="*0.1 Please Enter The File Number";
		error6_2_3.style.color="red";
		//file_number.focus();
		flag=false;
	}
	else
	{
		//error.textContent = "";
		document.getElementById("error6_2_3").innerHTML="";
		flag=true;
	}
	//6.2.4
	var poffice=document.passportform.poff;
	var error6_2_4=document.getElementById("error6_2_4");
	if(poffice.value.length <= 0)
	{
		document.getElementById("error6_2_4").innerHTML="*6.2.4 Please Enter Passport Office Name <br>";
		//error3_1_1.textContent="*3.1.1 Please Enter Father FristName";
		error6_2_4.style.color="red";
		
		// Father_FirstName.focus();
		flag=false;
	}
	else if(poffice.value.length!=0)
	{
		if(!regExp.test(poffice.value))
		{
			document.getElementById("error6_2_4").innerHTML="*6.2.4 Please Enter Only String <br>";
			error6_2_4.style.color="red";
			flag=false;
		}
		else
		{
			document.getElementById("error6_2_4").innerHTML="";
		}
	}
	else
	{
		document.getElementById("error6_2_4").innerHTML="";
		// error3_1_1.textContent="";
		flag=true;
	}
	}
	
	}
	var sk3=document.getElementById("c1_3_9").checked;
	if(sk3==true)
	{
		// //textboxes point
	var txt1=document.passportform.txt1;
	var txterr1=document.getElementById("txterr1");
	if(txt1.value.length <=0)
	{
		document.getElementById("txterr1").innerHTML="*Please Enter The Text In The TextBox <br>";
		//txterr1.textContent="*Please Enter The Text In The TextBox";
		txterr1.style.color="red";
		//txt1.focus();
		flag=false;
	}
	else
	{
		document.getElementById("txterr1").innerHTML="";
		//txterr1.textContent = "";
		flag=true;
	}
	var txt2=document.passportform.txt2;
	var txterr2=document.getElementById("txterr2");
	if(txt2.value.length <=0)
	{
		document.getElementById("txterr2").innerHTML="*Please Enter The Text In The TextBox <br>";
		//txterr2.textContent="*Please Enter The Text In The TextBox";
		txterr2.style.color="red";
		//txt2.focus();
		flag=false;
	}
	else
	{
		document.getElementById("txterr2").innerHTML="";
		// txterr2.textContent = "";
		flag=true;
	}
	}
	
	
	//1.4 point
	var fav=document.passportform.fav;
	var error1_4=document.getElementById("error1_4");
	if(fav.value.length<=0)
	{
		document.getElementById("error1_4").innerHTML="*1.4 Please Select Any One <br>";
		error1_4.style.color="red";
		flag=false;
	}
	else
	{
		document.getElementById("error1_4").innerHTML="";
		flag=true;
	}
	//1.5 point
	var fav1=document.passportform.fav1;
	var error1_5=document.getElementById("error1_5");
	if(fav1.value.length<=0)
	{
		document.getElementById("error1_5").innerHTML="*1.5 Please Select Any One <br>";
		error1_5.style.color="red";
		flag=false;
	}
	else
	{
		document.getElementById("error1_5").innerHTML="";
		flag=true;
	}
	//1.6 point
	var fav2=document.passportform.fav2;
	var error1_6=document.getElementById("error1_6");
	if(fav2.value.length<=0)
	{
		document.getElementById("error1_6").innerHTML="*1.6 Please Select Any One <br>";
		error1_6.style.color="red";
		flag=false;
	}
	else
	{
		document.getElementById("error1_6").innerHTML="";
		flag=true;
	}
	//validation for myfile {inputytpe="file"}
	var myfile=document.passportform.myfile;
	var fl1=document.getElementById("fl1");
	var file_name="";
	var file_type="";
	var file_size="";
	var valid_size=3*1000*1000;
	if(myfile.files.length!=0)
	{
		file_name=myfile.files[0].name;
		file_size=myfile.files[0].size;
		file_type=myfile.files[0].type;
		if(file_type!="image/png" && file_type!="image/jpeg" && file_type!="image/gif" && file_type!="image/pdf")
		{
			document.getElementById("fl1").innerHTML="*Only 'PNG', 'JPG/JPEG' and 'GIF' file type supported. <br>";
			fl1.style.color="red";
			fl1.focus();
			flag=false;
		}
		if(file_size>valid_size)
		{
			document.getElementById("fl1").innerHTML="*Filesize should be upto 3MB.<br>";
			fl1.style.color="red";
			fl1.focus();
			flag=false;
		}
		else
		{
			document.getElementById("fl1").innerHTML="";
			flag=true;
		}
	}
	else if(myfile.files.length<=0)
	{
		document.getElementById("fl1").innerHTML="*Please select any image file.<br>";
		fl1.style.color="red";
		flag=false;
	}
	else
	{
		document.getElementById("fl1").innerHTML="";
		flag=true;
	}
	//validation for signature photo selection
	var photo=document.passportform.photo;
	var fl2=document.getElementById("fl2");
	var file2_name="";
	var file2_type="";
	var file2_size="";
	var valid2_size=3*1000*1000;
	if(photo.files.length!=0)
	{
		file2_name=photo.files[0].name;
		file2_size=photo.files[0].size;
		file2_type=photo.files[0].type;
		if(file2_type!="image/png" && file2_type!="image/jpeg" && file2_type!="image/gif" && file2_type!="image/pdf")
		{
			document.getElementById("fl2").innerHTML="*Only 'PNG', 'JPG/JPEG' and 'GIF' file type supported. <br>";
			fl2.style.color="red";
			fl2.focus();
			flag=false;
		}
		if(file2_size>valid2_size)
		{
			document.getElementById("fl2").innerHTML="*Filesize should be upto 3MB.<br>";
			fl2.style.color="red";
			fl2.focus();
			flag=false;
		}
		else
		{
			document.getElementById("fl2").innerHTML="";
			flag=true;
		}
	}
	else if(photo.files.length<=0)
	{
		document.getElementById("fl2").innerHTML="*Please select any image file.<br>";
		fl2.style.color="red";
		flag=false;
	}
	else
	{
		document.getElementById("fl2").innerHTML="";
		flag=true;
	}
	//2 point application details
	//2.1 point  
	var AFirstName=document.passportform.AFirstName;
	var error2_1_1=document.getElementById("error2_1_1");
	if(AFirstName.value.length<=0)
	{
		document.getElementById("error2_1_1").innerHTML="*2.1.1 Please Enter Applicant FirstName <br>";
		error2_1_1.style.color="red";
		flag=false;
	}
	else if(AFirstName.value.length!=0)
	{
		if(!regExp.test(AFirstName.value))
		{
			document.getElementById("error2_1_1").innerHTML="*2.1.1 Please Enter Only String Not Special Character And Not Number <br>";
			flag=false;
		}
		else
		{
			document.getElementById("error2_1_1").innerHTML="";
		}
	}
	else
	{
		document.getElementById("error2_1_1").innerHTML="";
		flag=true;
	}
	//2.2 point
	var ALastName=document.passportform.ALastName;
	var error2_1_2=document.getElementById("error2_1_2");
	if(ALastName.value.length<=0)
	{
		document.getElementById("error2_1_2").innerHTML="*2.1.2 Please Enter Applicant LastName <br>";
		error2_1_2.style.color="red";
		flag=false;
	}
	else if(ALastName.value.length!=0)
	{
		if(!regExp.test(ALastName.value))
		{
			document.getElementById("error2_1_2").innerHTML="*2.1.2 Please Enter Only String Not Special Character And Not Number <br>";
			flag=false;
		}
		else
		{
			document.getElementById("error2_1_2").innerHTML="";
		}
	}
	else
	{
		document.getElementById("error2_1_2").innerHTML="";
		flag=true;
	}
	//2.2 point
	var fav_language1=document.passportform.fav_language1;
	var error2_2=document.getElementById("error2_2");
	if(fav_language1.value.length<=0)
	{
		document.getElementById("error2_2").innerHTML="*2.2 Please Select Any One Of It <br>";
		error2_2.style.color="red";
		flag=false;
	}
	else
	{
		document.getElementById("error2_2").innerHTML="";
		flag=true;
	}
	//2.3 point
	var language1=document.passportform.language1;
	var error2_3=document.getElementById("error2_3");
	if(language1.value.length<=0)
	{
		document.getElementById("error2_3").innerHTML="*2.3 Please Select Any One Of It <br>";
		error2_3.style.color="red";
		flag=false;
	}
	else
	{
		document.getElementById("error2_3").innerHTML="";
		flag=true;
	}
	
	//2.2 & 2.3 Other name changed name field validation
	var ht1=document.getElementById("ht1").checked;
	if(ht1==true)
	{
	var t1=document.getElementById("t1").value;
	var error2_2_1=document.getElementById("error2_2_1");
	if(t1.length <= 0)
	{
		document.getElementById("error2_2_1").innerHTML="*2.2.1 Please Enter Other Name <br>";
		//error3_1_1.textContent="*3.1.1 Please Enter Father FristName";
		error2_2_1.style.color="red";
		flag=false;
	}
	else if(t1.length!=0)
	{
		if(!regExp.test(t1))
		{
			document.getElementById("error2_2_1").innerHTML="*2.2.1 Please Enter Only String<br>";
			error2_2_1.style.color="red";
			flag=false;
		}
		else
		{
			document.getElementById("error2_2_1").innerHTML="";
		}
	}
	else
	{
		document.getElementById("error2_2_1").innerHTML="";
		// error3_1_1.textContent="";
		flag=true;
	}
	}
	var ht2=document.getElementById("ht2").checked;
	if(ht2==true)
	{
	var t2=document.getElementById("t2").value;
	var error2_3_1=document.getElementById("error2_3_1");
	if(t2.length <= 0)
	{
		document.getElementById("error2_3_1").innerHTML="*2.3.1 Please Enter changed Name <br>";
		//error3_1_1.textContent="*3.1.1 Please Enter Father FristName";
		error2_3_1.style.color="red";
		flag=false;
	}
	else if(t2.length!=0)
	{
		if(!regExp.test(t2))
		{
			document.getElementById("error2_3_1").innerHTML="*2.3.1 Please Enter Only String <br>";
			error2_3_1.style.color="red";
			flag=false;
		}
		else
		{
			document.getElementById("error2_3_1").innerHTML="";
		}
	}
	else
	{
		document.getElementById("error2_3_1").innerHTML="";
		// error3_1_1.textContent="";
		flag=true;
	}
	}
	//2.4 point date
	var error2_4=document.getElementById("error2_4");
	if (document.getElementById("dob").value == "")
	{
		document.getElementById("error2_4").innerHTML= "*2.4 Select DOB<br>" ;
		error2_4.style.color="red";
		flag=false;
	}
	else
	{
		document.getElementById("error2_4").innerHTML= "" ;
		flag=true;
		var om = new Date();
		var dob=document.getElementById("dob").value;
		dob=new Date(dob) ;
		var dy = new Date(om).setMonth(om.getMonth()-1);
		
		if(dob > dy)
		{
			document.getElementById("error2_4").innerHTML= "*2.4 birth date must one month less than current day <br>" ;
			error2_4.style.color="red";
			flag=false;
		}
		else{
			document.getElementById("error2_4").innerHTML= "" ;
			flag=true;
		}
	}
	//2.5.1 point
	//var village=document.passportform.village;
	var text1=document.getElementById("text1").value;
	var error2_5_1=document.getElementById("error2_5_1");
	if(text1.length <= 0)
	{
		document.getElementById("error2_5_1").innerHTML="*2.5.1 Please Enter Village Name <br>";
		//error3_1_1.textContent="*3.1.1 Please Enter Father FristName";
		error2_5_1.style.color="red";
		
		// Father_FirstName.focus();
		flag=false;
	}
	else if(text1.length!=0)
	{
		if(!regExp.test(text1))
		{
			document.getElementById("error2_5_1").innerHTML="*2.5.1 Please Enter Only String <br>";
			error2_5_1.style.color="red";
			flag=false;
		}
		
		else
		{
			document.getElementById("error2_5_1").innerHTML="";
			flag=true;
		}
	}
	// else
	// {
		// document.getElementById("error2_5_1").innerHTML="";
		// // error3_1_1.textContent="";
		// flag=true;
	// }
	//2.5.2 point
	//var district=document.passportform.district;
	var text2=document.getElementById("text2").value;
	var error2_5_2=document.getElementById("error2_5_2");
	if(text2.length <= 0)
	{
		document.getElementById("error2_5_2").innerHTML="*2.5.2 Please Enter District Name <br>";
		//error3_1_1.textContent="*3.1.1 Please Enter Father FristName";
		error2_5_2.style.color="red";
		
		// Father_FirstName.focus();
		flag=false;
	}
	else if(text2.length!=0)
	{
		if(!regExp.test(text2))
		{
			document.getElementById("error2_5_2").innerHTML="*2.5.2 Please Enter Only String <br>";
			error2_5_2.style.color="red";
			flag=false;
		}
		
		else
		{
			document.getElementById("error2_5_2").innerHTML="";
			// // error3_1_1.textContent="";
			flag=true;
		}
	}
	
	//2.5.3 point
	//var state=document.passportform.state;
	var text3=document.getElementById("text3").value;
	var error2_5_3=document.getElementById("error2_5_3");
	if(text3.length <= 0)
	{
		document.getElementById("error2_5_3").innerHTML="*2.5.3 Please Enter State Name <br>";
		//error3_1_1.textContent="*3.1.1 Please Enter Father FristName";
		error2_5_3.style.color="red";
		
		// Father_FirstName.focus();
		flag=false;
	}
	else if(text3.length!=0)
	{
		if(!regExp.test(text3))
		{
			document.getElementById("error2_5_3").innerHTML="*2.5.3 Please Enter Only String <br>";
			error2_5_3.style.color="red";
			flag=false;
		}
		else
		{
			document.getElementById("error2_5_3").innerHTML="";
			flag=true;
		}
		if(text3==text2 || text3==text1 || text3==text4)
		{
			document.getElementById("error2_5_3").innerHTML="*2.5.3 State name must be diffrent from city ,district and regionn.<br>";
			error2_5_3.style.color="red";
			flag=false;
		}
		
		else
		{
			document.getElementById("error2_5_3").innerHTML="";
			flag=true;
		}
	}
	// else
	// {
		// document.getElementById("error2_5_3").innerHTML="";
		// // error3_1_1.textContent="";
		// flag=true;
	// }
	//2.5.4 point
	//var state1=document.passportform.state1;
	var text4=document.getElementById("text4").value;
	var error2_5_4=document.getElementById("error2_5_4");
	if(text4.length<=0)
	{
		document.getElementById("error2_5_4").innerHTML="*2.5.4 Please Enter region <br>";
		error2_5_4.style.color="red";
		flag=false;
	}
	else if(text4.length!=0)
	{
		if(!regExp.test(text4))
		{
			document.getElementById("error2_5_4").innerHTML="*2.5.4 Please Enter Only String <br>";
			error2_5_4.style.color="red";
			flag=false;
		}
		else
		{
			document.getElementById("error2_5_4").innerHTML="";
			flag=true;
		}
		if(text4==text2 || text4==text1 || text4==text3)
		{
			document.getElementById("error2_5_4").innerHTML="*2.5.4 Region name must be diffrent from city ,district and state.<br>";
			error2_5_4.style.color="red";
			flag=false;
		}
		else
		{
			document.getElementById("error2_5_4").innerHTML="";
			flag=true;
		}
	}
	// else
	// {
		// document.getElementById("error2_5_4").innerHTML="";
		// // error3_1_1.textContent="";
		// flag=true;
	// }

	//2.6 point
	var fav_language2=document.passportform.fav_language2;
	var error2_6=document.getElementById("error2_6");
	if(fav_language2.value.length<=0)
	{
		document.getElementById("error2_6").innerHTML="*2.6 Please Select Any One Of It <br>";
		error2_6.style.color="red";
		flag=false;
	}
	else
	{
		document.getElementById("error2_6").innerHTML="";
		flag=true;
	}
	//2.7 point
	var fav_language3=document.passportform.fav_language3;
	var error2_7=document.getElementById("error2_7");
	if(fav_language3.value.length<=0)
	{
		document.getElementById("error2_7").innerHTML="*2.7 Please Select Any One Of It <br>";
		error2_7.style.color="red";
		flag=false;
	}
	else
	{
		document.getElementById("error2_7").innerHTML="";
		flag=true;
	}
	//2.8 point
	var fav_language4=document.passportform.fav_language4;
	var error2_8=document.getElementById("error2_8");
	if(fav_language4.value.length<=0)
	{
		document.getElementById("error2_8").innerHTML="*2.8 Please Select Any One Of It <br>";
		error2_8.style.color="red";
		flag=false;
	}
	else
	{
		document.getElementById("error2_8").innerHTML="";
		flag=true;
	}
	//2.9 point
	var pannumber=document.passportform.pannumber;
	var vvid= /^[A-Za-z0-9]+$/;
	var error2_9=document.getElementById("error2_9");
	if(pannumber.value.length<=0)
	{
		document.getElementById("error2_9").innerHTML="*2.9 Please Enter The Pan Number <br>";
		error2_9.style.color="red";
		flag=false;
	}
	else if(pannumber.value.length!=0)
	{
		if(!vvid.test(pannumber.value))
		{
			document.getElementById("error2_9").innerHTML="*2.10 Please Enter Valid PanNumber.<br>"
			flag=false;
		}
		else 
		{
			document.getElementById("error2_9").innerHTML="";
		}
	}
	else
	{
		document.getElementById("error2_9").innerHTML="";
		flag=true;
	}
	

	//2.10 point
	var voterid=document.passportform.voterid;
	var error2_10=document.getElementById("error2_10");
	var vvid= /^[A-Za-z0-9]+$/;
	if(voterid.value.length<=0)
	{
		document.getElementById("error2_10").innerHTML="*2.10 Please Enter Voter Id <br>";
		error2_10.style.color="red";
		flag=false;
	}
	else if(voterid.value.length!=0)
	{
		if(!vvid.test(voterid.value))
		{
			document.getElementById("error2_10").innerHTML="*2.10 Please Enter Valid Voter Id.<br>"
			flag=false;
		}
		else 
		{
			document.getElementById("error2_10").innerHTML="";
		}
	}
	else
	{
		document.getElementById("error2_10").innerHTML="";
		flag=true;
	}
	//2.11 point
	var fav_language5=document.passportform.fav_language5;
	var error2_11=document.getElementById("error2_11");
	
	if(fav_language5.value.length<=0)
	{
		document.getElementById("error2_11").innerHTML="*2.11 Please Select Any One Of It <br>";
		error2_11.style.color="red";
		flag=false;
	}
	else
	{
		document.getElementById("error2_11").innerHTML="";
		flag=true;
	}
	//2.12 point
	var organizationname=document.passportform.organizationname;
	var error2_12=document.getElementById("error2_12");
	var von= /^[A-Za-z0-9 ]+$/;
	if(organizationname.value.length <= 0)
	{
		document.getElementById("error2_12").innerHTML="*2.12 Please Enter Organization Name <br>";
		//error3_1_1.textContent="*3.1.1 Please Enter Father FristName";
		error2_12.style.color="red";
		
		// Father_FirstName.focus();
		flag=false;
	}
	else if(organizationname.value.length!=0)
	{
		if(!von.test(organizationname.value))
		{
			document.getElementById("error2_12").innerHTML="*2.12 Please Enter Valid Organization Name<br>";
			error2_12.style.color="red";
			flag=false;
		}
		else if(organizationname.value.length>60)
		{
			document.getElementById("error2_12").innerHTML="*2.12 Organization Name is large<br>";
			error2_12.style.color="red";
			flag=false;
		}
		else
		{
			document.getElementById("error2_12").innerHTML="";
			error2_12.style.color="red";
			flag=true;
		}
	}
	else
	{
		document.getElementById("error2_12").innerHTML="";
		error2_12.style.color="red";
		flag=true;
	}
	
	//2.13 point
	var fav_language8=document.passportform.fav_language8;
	var error2_13=document.getElementById("error2_13");
	if(fav_language8.value.length<=0)
	{
		document.getElementById("error2_13").innerHTML="*2.13 Please Select Any One Of It <br>";
		error2_13.style.color="red";
		flag=false;
	}
	else
	{
		document.getElementById("error2_13").innerHTML="";
		flag=true;
	}
	//2.14 point
	var rb=document.passportform.rb;
	var error2_14=document.getElementById("error2_14");
	if(rb.value.length<=0)
	{
		document.getElementById("error2_14").innerHTML="*2.14 Please Select Any One Of It <br>";
		error2_14.style.color="red";
		flag=false;
	}
	else
	{
		document.getElementById("error2_14").innerHTML="";
		flag=true;
	}
	//2.15 point
	var fav_language31=document.passportform.fav_language31;
	var error2_15=document.getElementById("error2_15");
	if(fav_language31.value.length<=0)
	{
		document.getElementById("error2_15").innerHTML="*2.15 Please Select Any One Of It <br>";
		error2_15.style.color="red";
		flag=false;
	}
	else
	{
		document.getElementById("error2_15").innerHTML="";
		flag=true;
	}
	//2.16 point
	var Mark=document.passportform.Mark;
	var error2_16=document.getElementById("error2_16");
	if(Mark.value == "Select Mark")
	{
		document.getElementById("error2_16").innerHTML="*2.16 Select visibile MArk<br>";
		//error3_1_1.textContent="*3.1.1 Please Enter Father FristName";
		error2_16.style.color="red";
		
		// Father_FirstName.focus();
		flag=false;
	}
	else
	{
		document.getElementById("error2_16").innerHTML="";
		// error3_1_1.textContent="";
		flag=true;
	}
	//2.17 point
	var number=document.passportform.number;
	var adharexp = /^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/; 
	var error2_17=document.getElementById("error2_17");
	if(number.value.length <=0)
	{
		document.getElementById("error2_17").innerHTML="*2.17 Please Enter AdharCard Number <br>";
		//error.textContent="*0.1 Please Enter The File Number";
		error2_17.style.color="red";
		//file_number.focus();
		flag=false;
	}
	else if(number.value.length!=0)
	{
		if(!adharexp.test(number.value))
		{
			//error.textContent = "";
			document.getElementById("error2_17").innerHTML="*2.17 Please Enter Valid AdharCard Number<br>";
			error2_17.style.color="red";
			flag=false;
		}
		else
		{
			document.getElementById("error2_17").innerHTML="";
			flag=true;
			
		}
	}
	// else
	// {
		// document.getElementById("error2_17").innerHTML="";
		// flag=true;
	// }
	
	
	//3rd Point Of javascript
	//3.1.1
	var Father_FirstName=document.passportform.Father_FirstName;
	var error3_1_1=document.getElementById("error3_1_1");
	var Father_LastName=document.passportform.Father_LastName;
	var error3_1_2=document.getElementById("error3_1_2");
	
	if(Father_FirstName.value.length <= 0)
	{
		document.getElementById("error3_1_1").innerHTML="*3.1.1 Please Enter Father FristName <br>";
		//error3_1_1.textContent="*3.1.1 Please Enter Father FristName";
		error3_1_1.style.color="red";
		
		// Father_FirstName.focus();
		flag=false;
	}
	else if(Father_FirstName.value.length!=0)
	{
		if(!regExp.test(Father_FirstName.value))
		{
			document.getElementById("error3_1_1").innerHTML="*3.1.1Please Enter Only String <br>";
			error3_1_1.style.color="red";
			flag=false;
		}
		// else if(Father_FirstName.value.length>500)
		// {
			// document.getElementById("error3_1_1").innerHTML="*3.1.1 Please Enter Less than 500 word<br>"
			// error3_1_1.style.color="red";
			// flag false;
		// }
		else
		{
			document.getElementById("error3_1_1").innerHTML="";
		}
	}
	else
	{
		document.getElementById("error3_1_1").innerHTML="";
		// error3_1_1.textContent="";
		flag=true;
	}
	
	//3.1.2
	if(Father_LastName.value.length <= 0)
	{
		document.getElementById("error3_1_2").innerHTML="*3.1.2 Please Enter Father LastName <br>";
		// error3_1_2.textContent="*3.1.2 Please Enter Father LastName";
		error3_1_2.style.color="red";
		// Father_LastName.focus();
		flag=false;
	}
	else if(Father_LastName.value.length!=0)
	{
		if(!regExp.test(Father_LastName.value))
		{
			document.getElementById("error3_1_2").innerHTML="*3.1.2Please Enter Only String <br>";
			flag=false;
		}
		else
		{
			document.getElementById("error3_1_2").innerHTML="";
		}
	}
	else
	{
		document.getElementById("error3_1_2").innerHTML="";
		// error3_1_2.textContent="";
		flag=true;
	}
	
	var Mother_FirstName=document.passportform.Mother_FirstName;
	var error3_2_1=document.getElementById("error3_2_1");
	var Mother_LastName=document.passportform.Mother_LastName;
	var error3_2_2=document.getElementById("error3_2_2");
	if(Mother_FirstName.value.length <=0)
	{
		document.getElementById("error3_2_1").innerHTML="*3.2.1 Please Enter Mother FirstName <br>";
		// error3_2_1.textContent="*3.2.1 Please Enter Mother FirstName";
		error3_2_1.style.color="red";
		// Mother_FirstName.focus();
		flag=false;
	}
	else if(Mother_FirstName.value.length!=0)
	{
		if(!regExp.test(Mother_FirstName.value))
		{
			document.getElementById("error3_2_1").innerHTML="*3.2.1Please Enter Only String <br>";
			flag=false;
		}
		else
		{
			document.getElementById("error3_2_1").innerHTML="";
		}
	}
	else
	{
		document.getElementById("error3_2_1").innerHTML="";
		// error3_2_1.textContent="";
		flag=true;
	}
	if(Mother_LastName.value.length<=0)
	{
		document.getElementById("error3_2_2").innerHTML="*3.2.2 Please Enter Mother LastName <br>";
		// error3_2_2.textContent="*3.2.2 Please Enter Mother LastName";
		error3_2_2.style.color="red";
		// Mother_LastName.focus();
		
		flag=false;
	}
	else if(Mother_LastName.value.length!=0)
	{
		if(!regExp.test(Mother_LastName.value))
		{
			document.getElementById("error3_2_2").innerHTML="*3.2.2Please Enter Only String <br>";
			flag=false;
		}
		else
		{
			document.getElementById("error3_2_2").innerHTML="";
		}
	}
	else
	{
		document.getElementById("error3_2_2").innerHTML="";
		// error3_2_2.textContent="";
		flag=true;
	}
	
	var Legal_FirstName=document.passportform.Legal_FirstName;
	var error3_3_1=document.getElementById("error3_3_1");
	var Legal_LastName=document.passportform.Legal_LastName;
	var error3_3_2=document.getElementById("error3_3_2");
	if(Legal_FirstName.value.length<=0)
	{
		document.getElementById("error3_3_1").innerHTML="*3.3.1 Please Enter Legal Guardian FirstName <br>";
		//error3_3_1.textContent="*3.3.1 Please Enter Legal Guardian FirstName";
		error3_3_1.style.color="red";
		// Legal_FirstName.focus();
		flag=false;
	}
	else if(Legal_FirstName.value.length!=0)
	{
		if(!regExp.test(Legal_FirstName.value))
		{
			document.getElementById("error3_3_1").innerHTML="*3.3.1Please Enter Only String <br>";
			flag=false;
		}
		else
		{
			document.getElementById("error3_3_1").innerHTML="";
		}
	}
	else
	{
		document.getElementById("error3_3_1").innerHTML="";
		flag=true;
		// error3_3_1.textContent="";
	}
	if(Legal_LastName.value.length<=0)
	{
		document.getElementById("error3_3_2").innerHTML="*3.3.2 Please Enter Legal Guardian LasttName <br>";
		// error3_3_2.textContent="*3.3.2 Please Enter Legal Guardian LasttName";
		error3_3_2.style.color="red";
		//Legal_LastName.focus();
		flag=false;
	}
	else if(Legal_LastName.value.length!=0)
	{
		if(!regExp.test(Legal_LastName.value))
		{
			document.getElementById("error3_2_2").innerHTML="*3.3.2Please Enter Only String <br>";
			flag=false;
		}
		else
		{
			document.getElementById("error3_3_2").innerHTML="";
		}
	}
	else
	{
		document.getElementById("error3_3_2").innerHTML="";
		// error3_3_2.textContent="";
		flag=true;
	}
	
	var Spouse_FirstName=document.passportform.Spouse_FirstName;
	var error3_4_1=document.getElementById("error3_4_1");
	var Spouse_LastName=document.passportform.Spouse_LastName;
	var error3_4_2=document.getElementById("error3_4_2");
	
	if(Spouse_FirstName.value.length<=0)
	{
		document.getElementById("error3_4_1").innerHTML="*3.4.1 Please Enter Spouse FirstName <br>";
		// error3_4_1.textContent="*3.4.1 Please Enter Spouse FirstName";
		error3_4_1.style.color="red";
		// Spouse_FirstName.focus();
		flag=false;
	}
	else if(Spouse_FirstName.value.length!=0)
	{
		if(!regExp.test(Spouse_FirstName.value))
		{
			document.getElementById("error3_4_1").innerHTML="*3.4.1Please Enter Only String <br>";
			flag=false;
		}
		else
		{
			document.getElementById("error3_4_1").innerHTML="";
		}
	}
	else
	{
		document.getElementById("error3_4_1").innerHTML="";
		flag=true;
		// error3_4_1.textContent="";
	}
	if(Spouse_LastName.value.length <=0)
	{
		document.getElementById("error3_4_2").innerHTML="*3.4.2 Please Enter Spouse LasttName <br>";
		//error3_4_2.textContent="*3.4.2 Please Enter Spouse LasttName";
		error3_4_2.style.color="red";
		// Spouse_LastName.focus();
		flag=false;
	}
	else if(Spouse_LastName.value.length!=0)
	{
		if(!regExp.test(Spouse_LastName.value))
		{
			document.getElementById("error3_4_2").innerHTML="*3.4.2Please Enter Only String <br>";
			flag=false;
		}
		else
		{
			document.getElementById("error3_4_2").innerHTML="";
		}
	}
	else
	{
		document.getElementById("error3_4_2").innerHTML="";
		flag=true;
		// error3_4_2.textContent="";
	}
	
	var f_passportnumber1=document.passportform.f_passportnumber1;
	var error3_5_1=document.getElementById("error3_5_1");
	var f_passportnumber2=document.passportform.f_passportnumber2;
	var error3_5_2=document.getElementById("error3_5_2");
	if(f_passportnumber1.value.length<=0 || f_passportnumber1.value.length>12)
	{
		document.getElementById("error3_5_1").innerHTML="*3.5.1 Please Enter  father passport Number <br>";
		// error3_5_1.textContent="*3.5.1 Please Enter  father passport Number";
		error3_5_1.style.color="red";
		// f_passportnumber1.focus();
		flag=false;
	}
	else
	{
		document.getElementById("error3_5_1").innerHTML="";
		// error3_5_1.textContent="";
		flag=true;
	}
	if(f_passportnumber2.value.length <=0)
	{
		document.getElementById("error3_5_2").innerHTML="*3.5.2 Please Enter Name <br>";
		//error3_4_2.textContent="*3.4.2 Please Enter Spouse LasttName";
		error3_5_2.style.color="red";
		// Spouse_LastName.focus();
		flag=false;
	}
	else if(f_passportnumber2.value.length!=0)
	{
		if(!regExp.test(f_passportnumber2.value))
		{
			document.getElementById("error3_5_2").innerHTML="*3.5.2 Please Enter Only String <br>";
			flag=false;
		}
		else
		{
			document.getElementById("error3_5_2").innerHTML="";
		}
	}
	else
	{
		document.getElementById("error3_5_2").innerHTML="";
		flag=true;
		// error3_4_2.textContent="";
	}
	
	var m_passportnumber1=document.passportform.m_passportnumber1;
	var error3_5_3=document.getElementById("error3_5_3");
	var m_passportnumber2=document.passportform.m_passportnumber2;
	var error3_5_4=document.getElementById("error3_5_4");
	if(m_passportnumber1.value.length<=0 || m_passportnumber1.value.length>12)
	{
		document.getElementById("error3_5_3").innerHTML="*3.5.3 Please Enter mother passport number <br>";
		// error3_5_3.textContent="*3.5.3 Please Enter mother passport number";
		error3_5_3.style.color="red";
		// m_passportnumber1.focus();
		flag=false;
	}
	else
	{
		document.getElementById("error3_5_3").innerHTML="";
		// error3_5_3.textContent="";
		flag=true;
	}
	if(m_passportnumber2.value.length <=0)
	{
		document.getElementById("error3_5_4").innerHTML="*3.5.4 Please Enter Name <br>";
		//error3_4_2.textContent="*3.4.2 Please Enter Spouse LasttName";
		error3_5_4.style.color="red";
		// Spouse_LastName.focus();
		flag=false;
	}
	else if(m_passportnumber2.value.length!=0)
	{
		if(!regExp.test(m_passportnumber2.value))
		{
			document.getElementById("error3_5_4").innerHTML="*3.5.4 Please Enter Only String <br>";
			flag=false;
		}
		else
		{
			document.getElementById("error3_5_4").innerHTML="";
		}
	}
	else
	{
		document.getElementById("error3_5_4").innerHTML="";
		flag=true;
		// error3_4_2.textContent="";
	}
	//4 address details
	//4.1.1 point
	var numtxt=document.passportform.numtxt;
	var validadd=/^[A-Za-z-,0-9 ]+$/;
	var error4_1_1=document.getElementById("error4_1_1");
	if(numtxt.value.length<=0)
	{
		document.getElementById("error4_1_1").innerHTML="*4.1.1 Please Enter House No And Stret Name <br>";
		error4_1_1.style.color="red";
		flag=false;
	}
	else if(numtxt.value.length!=0)
	{
		if(!validadd.test(numtxt.value))
		{
			document.getElementById("error4_1_1").innerHTML="*4.1.1 Please Enter valid Street Address<br>";
			flag=false;
		}
		else
		{
			document.getElementById("error4_1_1").innerHTML="";
			flag =true;
		}
	}
	else
	{
		document.getElementById("error4_1_1").innerHTML="";
		flag=true;
	}
	//4.1.2 point
	//var town=document.passportform.town;
	var ct=document.getElementById("ct").value;
	var error4_1_2=document.getElementById("error4_1_2");
	if(ct.length <= 0)
	{
		document.getElementById("error4_1_2").innerHTML="*4.1.2 Please Enter Village Name <br>";
		//error3_1_1.textContent="*3.1.1 Please Enter Father FristName";
		error4_1_2.style.color="red";
		
		// Father_FirstName.focus();
		flag=false;
	}
	else if(ct.length!=0)
	{
		if(!regExp.test(ct))
		{
			document.getElementById("error4_1_2").innerHTML="*4.1.2 Please Enter Only String <br>";
			error4_1_2.style.color="red";
			flag=false;
		}
		else
		{
			document.getElementById("error4_1_2").innerHTML="";
			flag=true;
		}
		
	}
	else
	{
		document.getElementById("error4_1_2").innerHTML="";
		flag=true;
	}
	//4.1.3 point
	//var jillo=document.passportform.jillo;
	var dt=document.getElementById("dt").value;
	var error4_1_3=document.getElementById("error4_1_3");
	if(dt.length <= 0)
	{
		document.getElementById("error4_1_3").innerHTML="*4.1.3 Please Enter District Name <br>";
		//error3_1_1.textContent="*3.1.1 Please Enter Father FristName";
		error4_1_3.style.color="red";
		
		// Father_FirstName.focus();
		flag=false;
	}
	else if(dt.length!=0)
	{
		if(!regExp.test(dt))
		{
			document.getElementById("error4_1_3").innerHTML="*4.1.3 Please Enter Only String <br>";
			error4_1_3.style.color="red";
			flag=false;
		}
		else
		{
			document.getElementById("error4_1_3").innerHTML="";
		}
	}
	else
	{
		document.getElementById("error4_1_3").innerHTML="";
		// // error3_1_1.textContent="";
		flag=true;
	}
	//4.1.4
	var plcstn=document.passportform.plcstn;
	var error4_1_4=document.getElementById("error4_1_4");
	if(plcstn.value.length <= 0)
	{
		document.getElementById("error4_1_4").innerHTML="*4.1.4 Please Enter Police Station Name <br>";
		//error3_1_1.textContent="*3.1.1 Please Enter Father FristName";
		error4_1_4.style.color="red";
		
		// Father_FirstName.focus();
		flag=false;
	}
	else if(plcstn.value.length!=0)
	{
		if(!regExp.test(plcstn.value))
		{
			document.getElementById("error4_1_4").innerHTML="*4.1.4 Please Enter Only String <br>";
			error4_1_4.style.color="red";
			flag=false;
		}
		else
		{
			document.getElementById("error4_1_4").innerHTML="";
		}
	}
	else
	{
		document.getElementById("error4_1_4").innerHTML="";
		// error3_1_1.textContent="";
		flag=true;
	}
	//4.1.5 point
	//var rajya=document.passportform.rajya;
	var rjy=document.getElementById("rjy").value;
	var error4_1_5=document.getElementById("error4_1_5");
	if(rjy.length <= 0)
	{
		document.getElementById("error4_1_5").innerHTML="*4.1.5 Please Enter State Name <br>";
		//error3_1_1.textContent="*3.1.1 Please Enter Father FristName";
		error4_1_5.style.color="red";
		
		// Father_FirstName.focus();
		flag=false;
	}
	else if(rjy.length!=0)
	{
		if(!regExp.test(rjy))
		{
			document.getElementById("error4_1_5").innerHTML="*4.1.5 Please Enter Only String <br>";
			error4_1_5.style.color="red";
			flag=false;
		}
		else
		{
			document.getElementById("error4_1_5").innerHTML="";
			flag=true;
		}
		if(rjy==ct || rjy==dt)
		{
			document.getElementById("error4_1_5").innerHTML="*4.1.5 State Name Should Be diffrent from city and district.<br>";
			error4_1_5.style.color="red";
			flag=false;
		}
		else
		{
			document.getElementById("error4_1_5").innerHTML="";
			flag=true;
		}
	}
	// else
	// {
		// document.getElementById("error4_1_5").innerHTML="";
		// // error3_1_1.textContent="";
		// flag=true;
	// }
	//4.1.6 point
	var pn=document.getElementById("pn").value;
	//var validpn=/^[1-9]{1}[0-9]{2}\\s{0, 1}[0-9]{3}$/;
	var validpn=/(^\d{6}$)/;
	var error4_1_6=document.getElementById("error4_1_6");
	if(pn.length <= 0)
	{
		document.getElementById("error4_1_6").innerHTML="*4.1.6 Please Enter PinNumber <br>";
		//error3_1_1.textContent="*3.1.1 Please Enter Father FristName";
		error4_1_6.style.color="red";
		flag=false;
	}
	else if(pn.length!=0)
	{
		if(!validpn.test(pn))
		{
			document.getElementById("error4_1_6").innerHTML="*4.1.6 Please Enter valid PinNumber <br>";
			error4_1_6.style.color="red";
			flag=false;
		}
		else
		{
			document.getElementById("error4_1_6").innerHTML="";
			
		}
	}
	else
	{
		document.getElementById("error4_1_6").innerHTML="";
		flag=true;
	}
	
	
	//4.1.7 point
	var mail=document.passportform.mail;
	var error4_1_7=document.getElementById("error4_1_7");
	var validmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if(mail.value.length <= 0)
	{
		document.getElementById("error4_1_7").innerHTML="*4.1.7 Please Enter EmailId <br>";
		//error3_1_1.textContent="*3.1.1 Please Enter Father FristName";
		error4_1_7.style.color="red";
		
		// Father_FirstName.focus();
		flag=false;
	}
	else if(mail.value.length!=0)
	{
		if(validmail.test(mail.value))
		{
			document.getElementById("error4_1_7").innerHTML="";
			flag=true;
		}
		else
		{
			document.getElementById("error4_1_7").innerHTML="*4.1.7 Please Enter valid EmailId <br>";
			error4_1_7.style.color="red";
			flag=false;
		}
	}
	//4.1.8 point
	var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	var monum=document.passportform.monum;
	var error4_1_8=document.getElementById("error4_1_8");
	if(monum.value.length<=0)
	{
		document.getElementById("error4_1_8").innerHTML="*4.1.8 Please Enter Mobile Number <br>";
		error4_1_8.style.color="red";
		flag = false;
	}
	else if(monum.value.length!=0)
	{
		if(!phoneno.test(monum.value))
		{
			document.getElementById("error4_1_8").innerHTML="*4.1.8 Please enter Valid Mobile Number <br>";
			flag=false;
		}
		else
		{
			document.getElementById("error4_1_8").innerHTML="";
		}
	}
	else
	{
		document.getElementById("error4_1_8").innerHTML="";
		flag=true;
	}
	//4.1.9
	var tenum=document.passportform.tenum;
	var error4_1_9=document.getElementById("error4_1_9");
	if(tenum.value.length<=0)
	{
		document.getElementById("error4_1_9").innerHTML="*4.1.9 Please Enter TelePhone Number <br>";
		error4_1_9.style.color="red";
		flag = false;
	}
	else if(tenum.value.length!=0)
	{
		if(!phoneno.test(tenum.value))
		{
			document.getElementById("error4_1_9").innerHTML="*4.1.9 Please enter Valid TelePhone Number <br>";
			flag=false;
		}
		else
		{
			document.getElementById("error4_1_9").innerHTML="";
		}
	}
	else
	{
		document.getElementById("error4_1_9").innerHTML="";
		flag=true;
	}
	//4.2 point
	var fav_language9=document.passportform.fav_language9;
	var error4_2=document.getElementById("error4_2");
	if(fav_language9.value.length<=0)
	{
		document.getElementById("error4_2").innerHTML="*4.2 Please Select Any One Of It <br>";
		error4_2.style.color="red";
		flag=false;
	}
	else
	{
		document.getElementById("error4_2").innerHTML="";
		flag=true;
	}
	var c4_2=document.getElementById("c4_2").checked;
	if(c4_2==true)
	{
	//5th point
	//5.1
	var address=document.passportform.address;
	var error5_1=document.getElementById("error5_1");
	if(address.value.length<=0)
	{
		document.getElementById("error5_1").innerHTML="*5.1 Please Enter Address <br>";
		error5_1.style.color="red";
		flag=false;
	}
	else if(address.value.length!=0)
	{
		if(!validadd.test(address.value))
		{
			document.getElementById("error5_1").innerHTML="*5.1.1 Please Enter Valid Name & Address<br>";
			error5_1.style.color="red";
			flag=false;
		}
		else
		{
			document.getElementById("error5_1").innerHTML="";
			flag =true;
		}
	}
	else
	{
		document.getElementById("error5_1").innerHTML="";
		flag=true;
	}
	//5.2
	var mno=document.passportform.mno;
	var error5_2=document.getElementById("error5_2");
	if(mno.value.length<=0)
	{
		document.getElementById("error5_2").innerHTML="*5.2 Please Enter Mo Number <br>";
		error5_2.style.color="red";
		flag=false;
	}
	else if(mno.value.length!=0)
	{
		if(!phoneno.test(mno.value))
		{
			document.getElementById("error5_2").innerHTML="*5.2 Please enter Valid Mobile Number <br>";
			flag=false;
		}
		else
		{
			document.getElementById("error5_2").innerHTML="";
		}
	}
	else
	{
		document.getElementById("error5_2").innerHTML="";
		flag=true;
	}
	//5.3
	var tno=document.passportform.tno;
	var error5_3=document.getElementById("error5_3");
	if(tno.value.length<=0)
	{
		document.getElementById("error5_3").innerHTML="*5.3 Please Enter TelePhone Number <br>";
		error5_3.style.color="red";
		flag=false;
	}
	else if(tno.value.length!=0)
	{
		if(!phoneno.test(tno.value))
		{
			document.getElementById("error5_3").innerHTML="*5.3 Please enter Valid TelePhone Number <br>";
			flag=false;
		}
		else
		{
			document.getElementById("error5_3").innerHTML="";
		}
	}
	else
	{
		document.getElementById("error5_3").innerHTML="";
		flag=true;
	}
	//5.4
	var mail2=document.passportform.mail2;
	var error5_4=document.getElementById("error5_4");
	if(mail2.value.length<=0)
	{
		document.getElementById("error5_4").innerHTML="*5.4 Please Enter Email <br>";
		error5_4.style.color="red";
		flag=false;
	}
	else if(mail2.value.length!=0)
	{
		if(validmail.test(mail2.value))
		{
			document.getElementById("error5_4").innerHTML="";
			flag=true;
		}
		else
		{
			document.getElementById("error5_4").innerHTML="*5.4 Please Enter valid EmailId <br>";
			error5_4.style.color="red";
			flag=false;
		}
	}
	}
	
	//7 point
	//7.1.1
	var fav_language11=document.passportform.fav_language11;
	var error7_1_1=document.getElementById("error7_1_1");
	if(fav_language11.value.length<=0)
	{
		document.getElementById("error7_1_1").innerHTML="*7.1.1 Please Select Any One Of It <br>";
		error7_1_1.style.color="red";
		flag=false;
	}
	else
	{
		document.getElementById("error7_1_1").innerHTML="";
		flag=true;
	}
	//7.1.2
	var fav_language12=document.passportform.fav_language12;
	var error7_1_2=document.getElementById("error7_1_2");
	if(fav_language12.value.length<=0)
	{
		document.getElementById("error7_1_2").innerHTML="*7.1.2 Please Select Any One Of It <br>";
		error7_1_2.style.color="red";
		flag=false;
	}
	else
	{
		document.getElementById("error7_1_2").innerHTML="";
		flag=true;
	}
	//7.1.3
	var fav_language13=document.passportform.fav_language13;
	var error7_1_3=document.getElementById("error7_1_3");
	if(fav_language13.value.length<=0)
	{
		document.getElementById("error7_1_3").innerHTML="*7.1.3 Please Select Any One Of It <br>";
		error7_1_3.style.color="red";
		flag=false;
	}
	else
	{
		document.getElementById("error7_1_3").innerHTML="";
		flag=true;
	}
	//7.1.4
	var fav_language14=document.passportform.fav_language14;
	var error7_1_4=document.getElementById("error7_1_4");
	if(fav_language14.value.length<=0)
	{
		document.getElementById("error7_1_4").innerHTML="*7.1.4 Please Select Any One Of It <br>";
		error7_1_4.style.color="red";
		flag=false;
	}
	else
	{
		document.getElementById("error7_1_4").innerHTML="";
		flag=true;
	}
	//7.2.1
	var fav_language15=document.passportform.fav_language15;
	var error7_2_1=document.getElementById("error7_2_1");
	if(fav_language15.value.length<=0)
	{
		document.getElementById("error7_2_1").innerHTML="*7.2.1 Please Select Any One Of It <br>";
		error7_2_1.style.color="red";
		flag=false;
	}
	else
	{
		document.getElementById("error7_2_1").innerHTML="";
		flag=true;
	}
	//7.3.1
	var fav_language16=document.passportform.fav_language16;
	var error7_3_1=document.getElementById("error7_3_1");
	if(fav_language15.value.length<=0)
	{
		document.getElementById("error7_3_1").innerHTML="*7.3.1 Please Select Any One Of It <br>";
		error7_3_1.style.color="red";
		flag=false;
	}
	else
	{
		document.getElementById("error7_3_1").innerHTML="";
		flag=true;
	}
	//7.3.2
	var fav_language17=document.passportform.fav_language17;
	var error7_3_2=document.getElementById("error7_3_2");
	if(fav_language17.value.length<=0)
	{
		document.getElementById("error7_3_2").innerHTML="*7.3.2 Please Select Any One Of It <br>";
		error7_3_2.style.color="red";
		flag=false;
	}
	else
	{
		document.getElementById("error7_3_2").innerHTML="";
		flag=true;
	}
	//7.3.3
	var fav_language18=document.passportform.fav_language18;
	var error7_3_3=document.getElementById("error7_3_3");
	if(fav_language18.value.length<=0)
	{
		document.getElementById("error7_3_3").innerHTML="*7.3.3 Please Select Any One Of It <br>";
		error7_3_3.style.color="red";
		flag=false;
	}
	else
	{
		document.getElementById("error7_3_3").innerHTML="";
		flag=true;
	}
	//7.4.1
	var fav_language19=document.passportform.fav_language19;
	var error7_4_1=document.getElementById("error7_4_1");
	if(fav_language19.value.length<=0)
	{
		document.getElementById("error7_4_1").innerHTML="*7.4.1 Please Select Any One Of It <br>";
		error7_4_1.style.color="red";
		flag=false;
	}
	else
	{
		document.getElementById("error7_4_1").innerHTML="";
		flag=true;
	}
	//7.4.2
	var fav_language20=document.passportform.fav_language20;
	var error7_4_2=document.getElementById("error7_4_2");
	if(fav_language20.value.length<=0)
	{
		document.getElementById("error7_4_2").innerHTML="*7.4.2 Please Select Any One Of It <br>";
		error7_4_2.style.color="red";
		flag=false;
	}
	else
	{
		document.getElementById("error7_4_2").innerHTML="";
		flag=true;
	}
	//7.4.3
	var fav_language21=document.passportform.fav_language21;
	var error7_4_3=document.getElementById("error7_4_3");
	if(fav_language21.value.length<=0)
	{
		document.getElementById("error7_4_3").innerHTML="*7.4.3 Please Select Any One Of It <br>";
		error7_4_3.style.color="red";
		flag=false;
	}
	else
	{
		document.getElementById("error7_4_3").innerHTML="";
		flag=true;
	}
	//7.4.4
	var fav_language22=document.passportform.fav_language22;
	var error7_4_4=document.getElementById("error7_4_4");
	if(fav_language22.value.length<=0)
	{
		document.getElementById("error7_4_4").innerHTML="*7.4.4 Please Select Any One Of It <br>";
		error7_4_4.style.color="red";
		flag=false;
	}
	else
	{
		document.getElementById("error7_4_4").innerHTML="";
		flag=true;
	}
	
	//7.5.1
	var fav_language23=document.passportform.fav_language23;
	var error7_5_1=document.getElementById("error7_5_1");
	if(fav_language23.value.length<=0)
	{
		document.getElementById("error7_5_1").innerHTML="*7.5.1 Please Select Any One Of It <br>";
		error7_5_1.style.color="red";
		flag=false;
	}
	else
	{
		document.getElementById("error7_5_1").innerHTML="";
		flag=true;
	}
	//7.5.2
	var fav_language24=document.passportform.fav_language24;
	var error7_5_2=document.getElementById("error7_5_2");
	if(fav_language24.value.length<=0)
	{
		document.getElementById("error7_5_2").innerHTML="*7.5.2 Please Select Any One Of It <br>";
		error7_5_2.style.color="red";
		flag=false;
	}
	else
	{
		document.getElementById("error7_5_2").innerHTML="";
		flag=true;
	}
	//7.4.3
	var fav_language25=document.passportform.fav_language25;
	var error7_5_3=document.getElementById("error7_5_3");
	if(fav_language25.value.length<=0)
	{
		document.getElementById("error7_5_3").innerHTML="*7.5.3 Please Select Any One Of It <br>";
		error7_5_3.style.color="red";
		flag=false;
	}
	else
	{
		document.getElementById("error7_5_3").innerHTML="";
		flag=true;
	}
	//8th point
	//8.1 
	var fee=document.passportform.fee;
	var feeexp= /^\d{0,4}(\.\d{0,2})?$/;
	var error8_1=document.getElementById("error8_1");
	if(fee.value.length<=0)
	{
		document.getElementById("error8_1").innerHTML="*8.1 Please Enter Fee Amount <br>";
		error8_1.style.color="red";
		flag=false;
	}
	else if(fee.value.length!=0)
	{
		if(!feeexp.test(fee.value))
		{
			document.getElementById("error8_1").innerHTML="*8.1 Please Enter valid Fee Amount <br>";
			error8_1.style.color="red";
			flag=false;
		}
		else
		{
			document.getElementById("error8_1").innerHTML="";
			flag=true;
		}
	}
	else
	{
		document.getElementById("error8_1").innerHTML="";
		flag=true;
	}

	//8.2.1
	var ddnum=document.passportform.ddnum;
	var regExp2 = /^[0-9]+$/;
	var error8_2_1=document.getElementById("error8_2_1");
	if(ddnum.value.length<=0)
	{
		document.getElementById("error8_2_1").innerHTML="*8.2.1 Please Enter DDNumber <br>";
		error8_2_1.style.color="red";
		flag=false;
	}
	else if(ddnum.value.length!=0)
	{
		if(!regExp2.test(ddnum.value))
		{
			document.getElementById("error8_2_1").innerHTML="*8.2.1 Please Enter Valid DDNumber<br>";
			error8_2_1.style.color="red";
			flag=false;
		}
		else
		{
			document.getElementById("error8_2_1").innerHTML="";
			flag=true;
		}
	}
	else
	{
		document.getElementById("error8_2_1").innerHTML="";
		flag=true;
	}
	//8.2.2
	var dt1=document.getElementById("dt1").value;
	//var idate=document.passportform.idate;
	var error8_2_2=document.getElementById("error8_2_2");
	if(dt1.length <=0)
	{
		document.getElementById("error8_2_2").innerHTML="*8.2.2 Please Enter Date Of Issue <br>";
		//error.textContent="*0.1 Please Enter The File Number";
		error8_2_2.style.color="red";
		//file_number.focus();
		flag=false;
	}
	else if(dt1.length!=0)
	{
		var fullDate = new Date();
		dt1=new Date(dt1);
		
		// let date = new Date()
		// let day = date.getDate();	
		// let month = date.getMonth()+1;
		// let year = date.getFullYear();

		// let fullDate = `${month}.${day}.${year}.`;
		
		if(dt1.getTime() > fullDate.getTime())
		{
			document.getElementById("error8_2_2").innerHTML="*8.2.2 Can Not Enter Future Date<br>";
			error8_2_2.style.color="red";
			flag =false;
		}
		else
		{	
			document.getElementById("error8_2_2").innerHTML="";
			flag=true;
		}
	}
	else
	{
		document.getElementById("error8_2_2").innerHTML="";
		flag=true;
	}

	//8.2.3
	var dt2=document.getElementById("dt2").value;
	var error8_2_3=document.getElementById("error8_2_3");
	if(dt2.length <=0)
	{
		document.getElementById("error8_2_3").innerHTML="*8.2.3 Please Enter Expiry Date <br>";
		//error.textContent="*0.1 Please Enter The File Number";
		error8_2_3.style.color="red";
		//file_number.focus();
		flag=false;
	}
	else if(dt2.length!=0)
	{
		dt1=new Date(dt1);
		dt2=new Date(dt2);
		if(dt2.getTime() < dt1.getTime())
		{
			document.getElementById("error8_2_3").innerHTML="*8.2.3 Please Do Not Enter Date Less Then Date Of Inssue <br>"
			flag =false;
		}
		else
		{
			document.getElementById("error8_2_3").innerHTML="";
			flag=true;
		}
		//error.textContent = "";
		
	}
	else
	{
		document.getElementById("error8_2_3").innerHTML="";
		flag=true;
	}
	//8.2.4
	var bnknm =document.passportform.bnknm;
	var error8_2_4=document.getElementById("error8_2_4");
	if(bnknm.value.length<=0)
	{
		document.getElementById("error8_2_4").innerHTML="*8.2.4 Please Enter Bank Name <br>";
		error8_2_4.style.color="red";
		flag=false;
	}
	else if(bnknm.value.length!=0)
	{
		if(!regExp.test(bnknm.value))
		{
			document.getElementById("error8_2_4").innerHTML="*8.2.4 Please Enter Valid Bank Name<br>";
			error8_2_4.style.color="red";
			flag=false;
		}
		else
		{
			document.getElementById("error8_2_4").innerHTML="";
			flag=true;
		}
	}
	else
	{
		document.getElementById("error8_2_4").innerHTML="";
		flag=true;
	}
	//8.2.5
	var brncnm =document.passportform.brncnm;
	var error8_2_5=document.getElementById("error8_2_5");
	if(brncnm.value.length<=0)
	{
		document.getElementById("error8_2_5").innerHTML="*8.2.5 Please Enter Branch Name <br>";
		error8_2_5.style.color="red";
		flag=false;
	}
	else if(brncnm.value.length!=0)
	{
		if(!regExp.test(brncnm.value))
		{
			document.getElementById("error8_2_5").innerHTML="*8.2.5 Please Enter Valid Branch Name<br>";
			error8_2_5.style.color="red";
			flag=false;
		}
		else
		{
			document.getElementById("error8_2_5").innerHTML="";
			flag=true;
		}
	}
	else
	{
		document.getElementById("error8_2_5").innerHTML="";
		flag=true;
	}
	//9th point
	//9.1
	var ec1 =document.passportform.ec1;
	var error9_1=document.getElementById("error9_1");
	if(ec1.value.length<=0)
	{
		document.getElementById("error9_1").innerHTML="*9_1 Please Enter Enclouser <br>";
		error9_1.style.color="red";
		flag=false;
	}
	else
	{
		document.getElementById("error9_1").innerHTML="";
		flag=true;
	}
	//9.2
	var ec2 =document.passportform.ec2;
	var error9_2=document.getElementById("error9_2");
	if(ec2.value.length<=0)
	{
		document.getElementById("error9_2").innerHTML="*9_2 Please Enter Enclouser <br>";
		error9_2.style.color="red";
		flag=false;
	}
	else
	{
		document.getElementById("error9_2").innerHTML="";
		flag=true;
	}
	//9.3
	var ec3 =document.passportform.ec3;
	var error9_3=document.getElementById("error9_3");
	if(ec3.value.length<=0)
	{
		document.getElementById("error9_3").innerHTML="*9_3 Please Enter Enclouser <br>";
		error9_3.style.color="red";
		flag=false;
	}
	else
	{
		document.getElementById("error9_3").innerHTML="";
		flag=true;
	}
	//9.4
	var ec4 =document.passportform.ec4;
	var error9_4=document.getElementById("error9_4");
	if(ec4.value.length<=0)
	{
		document.getElementById("error9_4").innerHTML="*9_4 Please Enter Enclouser <br>";
		error9_4.style.color="red";
		flag=false;
	}
	else
	{
		document.getElementById("error9_4").innerHTML="";
		flag=true;
	}
	//9.5
	var ec5 =document.passportform.ec5;
	var error9_5=document.getElementById("error9_5");
	if(ec5.value.length<=0)
	{
		document.getElementById("error9_5").innerHTML="*9_5 Please Enter Enclouser <br>";
		error9_5.style.color="red";
		flag=false;
	}
	else
	{
		document.getElementById("error9_5").innerHTML="";
		flag=true;
	}
	//9.6
	var ec6 =document.passportform.ec6;
	var error9_6=document.getElementById("error9_6");
	if(ec6.value.length<=0)
	{
		document.getElementById("error9_6").innerHTML="*9_6 Please Enter Enclouser <br>";
		error9_6.style.color="red";
		flag=false;
	}
	else
	{
		document.getElementById("error9_6").innerHTML="";
		flag=true;
	}
	//9.7
	var ec7 =document.passportform.ec7;
	var error9_7=document.getElementById("error9_7");
	if(ec7.value.length<=0)
	{
		document.getElementById("error9_7").innerHTML="*9_7 Please Enter Enclouser <br>";
		error9_7.style.color="red";
		flag=false;
	}
	else
	{
		document.getElementById("error9_7").innerHTML="";
		flag=true;
	}
	//9.8
	var ec8 =document.passportform.ec8;
	var error9_8=document.getElementById("error9_8");
	if(ec8.value.length<=0)
	{
		document.getElementById("error9_8").innerHTML="*9_8 Please Enter Enclouser <br>";
		error9_8.style.color="red";
		flag=false;
	}
	else
	{
		document.getElementById("error9_8").innerHTML="";
		flag=true;
	}
	//9.9
	var ec9 =document.passportform.ec9;
	var error9_9=document.getElementById("error9_9");
	if(ec9.value.length<=0)
	{
		document.getElementById("error9_9").innerHTML="*9_9 Please Enter Enclouser <br>";
		error9_9.style.color="red";
		flag=false;
	}
	else
	{
		document.getElementById("error9_9").innerHTML="";
		flag=true;
	}
	//9.10
	var ec10 =document.passportform.ec10;
	var error9_10=document.getElementById("error9_10");
	if(ec10.value.length<=0)
	{
		document.getElementById("error9_10").innerHTML="*9_10 Please Enter Enclouser <br>";
		error9_10.style.color="red";
		flag=false;
	}
	else
	{
		document.getElementById("error9_10").innerHTML="";
		flag=true;
	}
	//10 point
	//10.1
	var spot =document.passportform.spot;
	var error10_1=document.getElementById("error10_1");
	if(spot.value.length<=0)
	{
		document.getElementById("error10_1").innerHTML="*10_1 Please Enter place <br>";
		error10_1.style.color="red";
		flag=false;
	}
	else if(spot.value.length!=0)
	{
		if(!regExp.test(spot.value))
		{
			document.getElementById("error10_1").innerHTML="*10.1 Please Enter Valid Place<br>";
			error10_1.style.color="red";
			flag=false;
		}
		else
		{
			document.getElementById("error10_1").innerHTML="";
			flag=true;
		}
	}
	else
	{
		document.getElementById("error10_1").innerHTML="";
		flag=true;
	}
	
	//10.3
	var tddt=document.getElementById("tddt").value;
	//var idate=document.passportform.idate;
	var error10_3=document.getElementById("error10_3");
	if(tddt.length <=0)
	{
		document.getElementById("error10_3").innerHTML="*10.3 Please Enter Date<br>";
		//error.textContent="*0.1 Please Enter The File Number";
		error10_3.style.color="red";
		//file_number.focus();
		flag=false;
	}
	else if(tddt.length!=0)
	{
		var fullDate = new Date();
		tddt=new Date(tddt);
		
		// let date = new Date()
		// let day = date.getDate();	
		// let month = date.getMonth()+1;
		// let year = date.getFullYear();

		// let fullDate = `${month}.${day}.${year}.`;
		
		if(tddt.getTime() > fullDate.getTime())
		{
			document.getElementById("error10_3").innerHTML="*10.3 Can Not Enter Future Date<br>";
			error10_3.style.color="red";
			flag =false;
		}
		else
		{	
			document.getElementById("error10_3").innerHTML="";
			flag=true;
		}
	}
	else
	{
		document.getElementById("error10_3").innerHTML="";
		flag=true;
	}
	//10.2
	var signature =document.passportform.signature;
	var error10_2=document.getElementById("error10_2");
	var file3_name="";
	var file3_type="";
	var file3_size="";
	var valid3_size=3*1000*1000;
	if(signature.files.length!=0)
	{
		file3_name=signature.files[0].name;
		file3_size=signature.files[0].size;
		file3_type=signature.files[0].type;
		if(file3_type!="image/png" && file3_type!="image/jpeg" && file3_type!="image/gif" && file3_type!="image/pdf")
		{
			document.getElementById("error10_2").innerHTML="*Only 'PNG', 'JPG/JPEG' and 'GIF' file type supported. <br>";
			error10_2.style.color="red";
			error10_2.focus();
			flag=false;
		}
		if(file3_size>valid_size)
		{
			document.getElementById("error10_2").innerHTML="*Filesize should be upto 3MB.<br>";
			error10_2.style.color="red";
			error10_2.focus();
			flag=false;
		}
		else
		{
			document.getElementById("error10_2").innerHTML="";
			flag=true;
		}
	}
	else if(signature.value.length<=0)
	{
		document.getElementById("error10_2").innerHTML="*10_2 Please Select Signature Image <br>";
		error10_2.style.color="red";
		flag=false;
	}
	else
	{
		document.getElementById("error10_2").innerHTML="";
		flag=true;
	}
	
	
	return flag;	
}

function disable()
{
	document.getElementById("c3").disabled=true;
	document.getElementById("c4").disabled=true;
	document.getElementById("c5").disabled=true;
	document.getElementById("c6").disabled=true;
	document.getElementById("c7").disabled=true;
	document.getElementById("c8").disabled=true;
	document.getElementById("c1_3_1").disabled=true;
	document.getElementById("c1_3_2").disabled=true;
	document.getElementById("c1_3_3").disabled=true;
	document.getElementById("c1_3_4").disabled=true;
	document.getElementById("c1_3_5").disabled=true;
	document.getElementById("c1_3_6").disabled=true;
	document.getElementById("c1_3_7").disabled=true;
	document.getElementById("c1_3_8").disabled=true;
	document.getElementById("c1_3_9").disabled=true;
	
	
	
	
	//6point
	document.getElementById("num8").disabled=true;
	document.getElementById("num9").disabled=true;
	document.getElementById("num10").disabled=true;
	document.getElementById("pc").disabled=true;
	document.getElementById("rb1").disabled=true;
	document.getElementById("rb2").disabled=true;
	document.getElementById("num11").disabled=true;
	document.getElementById("num12").disabled=true;
	document.getElementById("poff").disabled=true;
	
	//6.2
	
}

function enable()
{
	document.getElementById("c3").disabled=false;
	document.getElementById("c4").disabled=false;
	document.getElementById("c5").disabled=false;
	document.getElementById("c6").disabled=false;
	document.getElementById("c7").disabled=false;
	document.getElementById("c8").disabled=false;
	document.getElementById("c1_3_1").disabled=false;
	document.getElementById("c1_3_2").disabled=false;
	document.getElementById("c1_3_3").disabled=false;
	document.getElementById("c1_3_4").disabled=false;
	document.getElementById("c1_3_5").disabled=false;
	document.getElementById("c1_3_6").disabled=false;
	document.getElementById("c1_3_7").disabled=false;
	document.getElementById("c1_3_8").disabled=false;
	document.getElementById("c1_3_9").disabled=false;
	
	
	
	//6
	document.getElementById("num8").disabled=false;
	document.getElementById("num9").disabled=false;
	document.getElementById("num10").disabled=false;
	document.getElementById("pc").disabled=false;
	document.getElementById("rb1").disabled=false;
	document.getElementById("rb2").disabled=false;
	document.getElementById("num11").disabled=false;
	document.getElementById("num12").disabled=false;
	document.getElementById("poff").disabled=false;
}

function disact()
{
	//4.2
	document.getElementById("add").disabled=true;
	document.getElementById("num6").disabled=true;
	document.getElementById("num7").disabled=true;
	document.getElementById("eml2").disabled=true;
}
function act()
{
	document.getElementById("add").disabled=false;
	document.getElementById("num6").disabled=false;
	document.getElementById("num7").disabled=false;
	document.getElementById("eml2").disabled=false;
}

function hello()
{
	document.getElementById("txtarea1").disabled=false;
	document.getElementById("txtarea2").disabled=false;
}
function dlt()
{
	document.getElementById("txtarea1").disabled=true;
	document.getElementById("txtarea2").disabled=true;
}
function hello2()
{
	document.getElementById("t1").disabled=false;
	
}
function hello3()
{
	document.getElementById("t2").disabled=false;
}

function hi()
{
	document.getElementById("t1").disabled=true;
}
function hi2()
{
	document.getElementById("t2").disabled=true;
}


function my1()
{
	document.getElementById("num11").disabled=false;
	document.getElementById("num12").disabled=false;
	document.getElementById("poff").disabled=false;
}
function my2()
{
	document.getElementById("num11").disabled=true;
	document.getElementById("num12").disabled=true;
	document.getElementById("poff").disabled=true;
}