"use client"

import { authenticate } from "@/app/lib/actions"
import styles from "./loginForm.module.css"
import {useFormState} from "react-dom"

const LoginForm = () =>{

    const [state, formAction] = useFormState(authenticate, undefined);

    return (
        <div className={styles.container}>
            <form action={formAction} className={styles.form}>
                <h1>Login</h1>
                <div className={styles.info}>
                    <label >Username</label>
                    <input type="text" placeholder="Please Your Username" name="username"/>
                </div> 
                <div className={styles.info}>
                    <label >Password</label>
                    <input type="password" placeholder="Please Your Password" name="password"/>
                </div>
                <button>Login</button>
                {state && state}
            </form>
        </div>
    )
}

export default LoginForm