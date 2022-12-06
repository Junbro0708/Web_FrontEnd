import EditInvitation from "../Components/EditInvitation/EditInvitation";
import Preview from "../Components/Preview/Preview";
import styles from "../styles/index.module.css"
import { useState, useEffect } from "react";

export default function Home() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [items, setItems] = useState([{}, {}, {}]);
  const [ignored, setRender] = useState(0);
  useEffect(()=>{
    console.log(activeIdx);
  }, [activeIdx, items])
  return (
    <section className={styles.home}>
      <Preview items={items} activeIdx={activeIdx} ignored={ignored}/>
      <EditInvitation activeIdx={activeIdx} setActiveIdx={setActiveIdx} items={items} setItems={setItems} setRender={setRender}/>
    </section>
  )
}
