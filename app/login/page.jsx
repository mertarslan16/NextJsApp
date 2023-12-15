import styles from "@/app/ui/login/login.module.css"

const Login = () => {
    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <h1>Login</h1>
                <div className={styles.info}>
                    <label >Username</label>
                    <input type="text" placeholder="Please Your Username" />
                </div>
                <div className={styles.info}>
                    <label >Password</label>
                    <input type="password" placeholder="Please Your Password" />
                </div>
                <button>Login</button>
                
            </form>

        </div>
    )
}

export default Login