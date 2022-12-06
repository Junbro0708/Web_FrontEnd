import EditInvitation from "../Components/EditInvitation/EditInvitation";
import Preview from "../Components/Preview/Preview";
import styles from "../styles/index.module.css"
import { useState } from "react";

export default function Home() {
  // const 
  return (
    <section className={styles.home}>
      <Preview />
      <EditInvitation />
    </section>
  )
}
