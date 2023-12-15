import styles from "@/app/ui/dashboard/users/userSingle/userSingle.module.css"
import Image from "next/image"

const SingleProductPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/noproduct.jpg" alt="" fill />
                </div>
                Iphone
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label>Title</label>
                    <input type="text" name="title" placeholder="Iphone" />
                    <label>Price</label>
                    <input type="number" name="price" placeholder="$1000" />
                    <label>Created At</label>
                    <input type="date" name="createdAt"/>
                    <label>Stock</label>
                    <input type="number" name="stock" placeholder="322" />
                    <label>Description</label>
                    <textarea type="" name="description" placeholder="Mert Arslan" />
                    <label>Categories</label>
                    <select name="categories" id="categories">
                        <option value="Phone">Phone</option>
                        <option value="Computer">Computer</option>
                    </select>
                    <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleProductPage