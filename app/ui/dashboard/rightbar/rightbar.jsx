import Image from "next/image"
import styles from "../rightbar/rightbar.module.css"
import { MdFireplace, MdPlayCircleFilled } from "react-icons/md"

const RightBar = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image src="/astronaut.png" alt="" fill className={styles.bg}/>
                </div>
                <div className={styles.texts}>
                    <span className={styles.notification}>
                        <MdFireplace/> Avaible</span>
                    <h3 className={styles.title}> 
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                    </h3>
                    <span className={styles.subtitle}>Lorem ipsum dolor sit amet.</span>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consectetur, suscipit sed quidem praesentium placeat quia natus.
                    </p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled/>
                        Watch
                    </button>
                </div>
            </div>
            <div className={styles.item}>
               <div className={styles.texts}>
                    <span className={styles.notification}>
                        <MdFireplace/> Avaible</span>
                    <h3 className={styles.title}> 
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                    </h3>
                    <span className={styles.subtitle}>Lorem ipsum dolor sit amet.</span>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consectetur, suscipit sed quidem praesentium placeat quia natus.
                    </p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled/>
                        Watch
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RightBar