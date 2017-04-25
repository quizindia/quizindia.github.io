var database;
var ref;

var userIdInput;
var userPasswordInput;
function setup()
{
	var config = 
	{
		apiKey: "AIzaSyCKxzB_s9beqZFsWuRNoWyvVH_1qaPLtng",
		authDomain: "quiz-b35ff.firebaseapp.com",
		databaseURL: "https://quiz-b35ff.firebaseio.com",
		projectId: "quiz-b35ff",
		storageBucket: "quiz-b35ff.appspot.com",
		messagingSenderId: "322990660234"
	};
	firebase.initializeApp(config);
	database = firebase.database();
	ref = database.ref('UserDetails');
	
	document.getElementById("Button1").addEventListener("click", userLogIn);
	document.getElementById("Button2").addEventListener("click", directToUserSignUpPage);
	
	
}

function userLogIn()
{
	ref.on('value', getLogInData);
	
	
}

function getLogInData(data)
{
	userIdInput = document.getElementById("Editbox1").value;
	userPasswordInput= document.getElementById("Editbox2").value;
	var s=false;
	var UserDetails=data.val();
	var keys=Object.keys(UserDetails);
	for (var i = 0; i < keys.length; i++) 
	{
		var k = keys[i];
		var user = UserDetails[k].email;
		var pass = UserDetails[k].password;
		if(userIdInput==user & userPasswordInput==pass)
		{
			s=true;
			
			window.alert("LogIn success");
			window.location='http://www.google.com';
			break;
		}
	}
	if(s==false)
		window.alert("Wrong email/password. Retry.");
	
	

	


}


function storeUserSignUpDetails()
{
	var details={
		"name":input1.value(),
		"email":input2.value(),
		"phoneno":input3.value(),
		"address":input4.value(),
		"password":input5.value()
		};
	ref.push(details);
}

function directToUserSignUpPage()
{
	window.location = 'http://www.quizindia.tk/usersignup/usersignup.html';
}










//var sskk = JSON.stringify(userId);
	//localStorage.setItem('sskk',sskk);
	
	//var showUser=JSON.parse(localStorage['sskk']);
	//console.log(showUser[0]);