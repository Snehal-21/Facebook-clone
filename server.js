function register(event){
    event.preventDefault();

    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var pass=document.getElementById("password").value;
    var confirmpass=document.getElementById("confirmpassword").value;

    if(name && email && pass && confirmpass){
        if(pass.length<=8 && confirmpass.length<=8){
            if(pass == confirmpass){
                var facebook_Array=JSON.parse(localStorage.getItem("Facebook_users")) || []
                var flag=false;
                for(var i=0;i<facebook_Array.length;i++){
                    if(facebook_Array.uemail==email){
                        flag=true;
                    }
                }
                if(flag){
                    alert("Email already exist!")
                }else{
                    var data={uname:name,uemail:email,upass:pass,uconfirmpass:confirmpass};
                    facebook_Array.push(data);
                    localStorage.setItem("Facebook_users",JSON.stringify(facebook_Array));
                    alert("signup successfully!");
                    document.getElementById("name").value='';
                    document.getElementById("email").value='';
                    document.getElementById("password").value='';
                    document.getElementById("confirmpassword").value='';
                    window.location.href='./login.html';
                }

            }else{
                console.log("Password not matched!")
            }
        }else{
            console.log("Password should be more than 8 digits!")
        }
    }else{
        console.log("All fields are required!")
    }

}

function login(event){
    event.preventDefault();

    var email=document.getElementById("email").value;
    var pass=document.getElementById("password").value;
    var login_user;

    if(email && pass){
        var register_data=JSON.parse(localStorage.getItem("Facebook_users"));
        var flag=false;
        for(var i=0;i<register_data.length;i++){
            if(register_data[i].uemail == email){
                flag=true;
                login_user=register_data[i];
            }
        }
        if(flag){
            localStorage.setItem("Facebook_login",JSON.stringify(login_user));
            alert("Login Successful!");
            document.getElementById("email").value='';
            document.getElementById("password").value='';
            window.location.href='./home.html';
        }else{
            alert("Credentials not matched!")
        }
    }else{
        console.log("Both fields are required!");
    }
}

function edit_p(event){
    event.preventDefault();
 
    var image=document.getElementById("profile_image").value;
    console.log(image)
    if(image){
        localStorage.setItem("facebook_profile",JSON.stringify(image));
    }

}

function edit_c(event){
    event.preventDefault();
    var coverImage=document.getElementById("cover_image").value;
    if(coverImage){
        localStorage.setItem("facebook_cover",JSON.stringify(coverImage));
    }
}