import styles from "@/app/ui/dashboard/users/userSingle/userSingle.module.css"
import Image from "next/image"

const SingleUserPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/noavatar.png" alt="" fill />
                </div>
                Mert Arslan
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label>Username</label>
                    <input type="text" name="username" placeholder="Mert Arslan" />
                    <label>Email</label>
                    <input type="email" name="email" placeholder="mert@gmail.com" />
                    <label>Password</label>
                    <input type="password" name="pasword"/>
                    <label>Phone</label>
                    <input type="phone" name="phone" placeholder="Mert Arslan" />
                    <label>Address</label>
                    <textarea type="address" name="address" placeholder="Mert Arslan" />
                    <label>Is Admin?</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <label>Is Active?</label>
                    <select name="isActive" id="isActive">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleUserPage