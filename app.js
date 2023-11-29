
var email = prompt("Enter a email")



if (email !== ""){

var userName = prompt("Enter a Username")

    if(userName !== ""){
        var phoneNumber = prompt("Enter a Phone Number")

       if ( phoneNumber !== ""){
        var password = prompt("Enter a Password")

        if (password !== ""){
            var confirmPass = prompt("Enter a ConfirmPass")

            if(confirmPass !== ""){
                if (password === confirmPass){
                    alert("Successfully Registered")
                }else {
                    alert("password and Confirm password should be same")
                }

            }else {
                alert("confirm password must be filled out")
            }

        }else{
            alert("Password must be filled out")
        }

       }else{
        alert("phone number must be filled out")
       }

    } else{
        alert("username must be filled out")
    }
}
else {
    alert("email must be filled")
}


