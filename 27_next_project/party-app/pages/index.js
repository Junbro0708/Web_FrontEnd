import EditInvitation from "../Components/EditInvitation/EditInvitation";
import Preview from "../Components/Preview/Preview";
import styles from "../styles/index.module.css"

export default function Home() {
  return (
    <section className={styles.home}>
      <Preview />
      <EditInvitation />
    </section>
  )
}
