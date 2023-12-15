import Link from "next/link"
import styles from "../../ui/dashboard/products/products.module.css"
import Pagination from "@/app/ui/dashboard/pagination/pagination"
import Search from "@/app/ui/dashboard/search/search"
import Image from "next/image"

const ProductsPage = () => {
    return (
      <div className={styles.container}>
        <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product.." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New Product</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/noproduct.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                İphone
              </div>
            </td>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, qui.</td>
            <td>$1000</td>
            <td>Oct 29 2023</td>
            <td>35</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/products/test">
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>
                <Link href="/">
                  <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                </Link>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/noproduct.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                İphone
              </div>
            </td>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, qui.</td>
            <td>$1000</td>
            <td>Oct 29 2023</td>
            <td>35</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>
                <Link href="/">
                  <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination/>
    </div>
      </div>
    )
  }
  
  export default ProductsPage