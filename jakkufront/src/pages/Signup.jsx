import React from "react";
import ModuleStyle from "../ModuleStyle.module.css";
import Logo from "../components/signup/Logo";
import Input from "../components/signup/Input";

function Login() {
    return(
        <div className={ModuleStyle.LoginPage}>
            <Logo/>
            <Input/>
        </div>
    )
}

export default Login;