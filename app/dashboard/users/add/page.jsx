import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css"

const AddUser = () => {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <input type="text" placeholder="username" name="username" required />
                <input type="email" placeholder="email" name="email" />
                <input type="password" placeholder="password" name="password" />
                <input type="phone" placeholder="phone" name="phone" />
                <select name="isAdmin" id="isAdmin">
                    <option value="genaral">Is Admin</option>
                    <option value="kitchen">Yes</option>
                    <option value="phone">No</option>
                </select>
                <select name="isActive" id="isActive">
                    <option value="genaral">Is Active</option>
                    <option value="kitchen">Yes</option>
                    <option value="phone">No</option>
                </select>
                <textarea name="desc" id="desc" cols="30" rows="10" placeholder="Adress"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddUser