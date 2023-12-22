import { updateProduct } from "@/app/lib/actions";
import { fetchProduct } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/users/userSingle/userSingle.module.css"
import Image from "next/image"

const SingleProductPage = async ({ params }) => {
    const { id } = params;
    const product = await fetchProduct(id);
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src={product.img} alt="" fill />
                </div>
                {product.title}
            </div>
            <div className={styles.formContainer}>
                <form action={updateProduct} className={styles.form}>
                    <input type="hidden" name="id" value={product.id} />
                    <label>Title</label>
                    <input type="text" name="title" placeholder={product.title} />
                    <label>Price</label>
                    <input type="number" name="price" placeholder={product.price} />
                    <label>Created At</label>
                    <input type="date" name="createdAt" />
                    <label>Stock</label>
                    <input type="number" name="stock" placeholder={product.stock} />
                    <label>Description</label>
                    <textarea type="" name="description" placeholder={product.description} />
                    <label>Categories</label>
                    <select name="categories" id="categories">
                        <option value="Phone" >Phone</option>
                        <option value="Computer" >Computer</option>
                    </select>
                    <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleProductPage