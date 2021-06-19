let user = document.getElementById("user");
        let email = document.getElementById("email");
        let password1 = document.getElementById("password");
        let password2 = document.getElementById("pass-check");
        let submitbtn = document.getElementById("submit");

        let userError = "Invalide username";
        let emailError = "Invalide email";
        let pass1Error = "Invalide password: 5 character at least";
        let pass2Error = "Password dosen\'t match";
        submitbtn.addEventListener("click", (e) => {
            e.preventDefault();
            submit();
        });
        
        function submit()
        {
            if (checkError())
            {
                let main = document.getElementById("main");
                let seccess = document.getElementById("seccess");
                main.style.display="none";
                seccess.style.visibility = "visible";
                seccess.style.display = "block";
            }
            
        }

        function checkError() {
            let index = 0;
            let user1 = userCheck(user.value);
            let email1 = emailCheck(email.value);
            let pass1 = passwordCheck(password1.value);
            let pass2 = passtwoCheck(password1.value, password2.value);
            let err1 = document.getElementById("userError");
            let err2 = document.getElementById("emailError"); 
            let err3 = document.getElementById("passError")
            let err4 = document.getElementById("passError2");
            if (user1)
            {
                user.style.borderColor = "green";
                document.getElementById("check1").style.visibility = "visible";
                document.getElementById("multiple1").style.visibility = "hidden";
                err1.style.visibility = "hidden";
                index++;
            }
            else
            {
                document.getElementById("check1").style.visibility = "hidden";
                user.style.borderColor = "red";
                console.log("go")
                err1.innerText = userError;
                err1.style.visibility = "visible";
                document.getElementById("multiple1").style.visibility = "visible";
            }
            if (email1)
            {
                email.style.borderColor = "green";
                document.getElementById("check2").style.visibility = "visible";
                document.getElementById("multiple2").style.visibility = "hidden";
                err2.style.visibility = "hidden";
                index++;
            }
            else
            {
                err2.innerText = emailError;
                err2.style.visibility = "visible";
                document.getElementById("multiple2").style.visibility = "visible";
                document.getElementById("check2").style.visibility = "hidden";
                email.style.borderColor = "red";
            }
            if (pass1)
            {
                password1.style.borderColor = "green";
                document.getElementById("check3").style.visibility = "visible";
                document.getElementById("multiple3").style.visibility = "hidden";
                err3.style.visibility = "hidden";
                index++;
            }
            else
            {
                err3.innerText = pass1Error;
                err3.style.visibility = "visible";
                document.getElementById("multiple3").style.visibility = "visible";
                document.getElementById("check3").style.visibility = "hidden";
                password1.style.borderColor = "red";
            }
            if (pass2)
            {
                password2.style.borderColor = "green";
                document.getElementById("check4").style.visibility = "visible";
                document.getElementById("multiple4").style.visibility = "hidden";
                err4.style.visibility = "hidden";
                index++;
            }
            else
            {
                err4.innerText = pass2Error;
                err4.style.visibility = "visible";
                document.getElementById("multiple4").style.visibility = "visible";
                document.getElementById("check4").style.visibility = "hidden";
                password2.style.borderColor = "red";
            }
            if (index == 4)
                return true;
            return false;
            }

        function userCheck(user) {

                if (user.length > 2 && /\w/g.test(user))
                    return true
                return false;
            }
            
        function emailCheck(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (re.test(String(email).toLowerCase()))
                return true;
            return false;
        }

        function passwordCheck(password1) {
            if (password1.length > 5 && (/[a-zA-Z_0-9]{5}/g).test(password1))
                return true;
            return false;
        }
        function passtwoCheck(password1, password2) {
            if (password1 == password2 && password2.length > 5)
            {
                return true;
            }
            return false;
        }