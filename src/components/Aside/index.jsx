import styles from "./aside.module.css"
import logo from "../Aside/logo.png"
import Image from "next/image"
export const Aside = ()=>{
    return(
        <aside className={styles.aside}>
            {/* <img src={"../Aside/logo.png"} alt="logo da code connect" /> */}
          <Image src={logo} alt="logo da code connect
          "/>
        </aside>
    )
}