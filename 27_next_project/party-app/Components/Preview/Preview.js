import styles from "../../styles/preview.module.css";
export default function Preview({items, activeIdx, ignored}){
  return <article>
      <header className={styles.demo}>
        <h1 style={{color:items[0]["color"] != undefined ? `${items[0]["color"]}` : "black",
                    fontFamily:items[0]["font-family"] != undefined ? `${items[0]["font-family"]}` : "BlinkMacSystemFont, Segoe UI,sans-serif",
                    fontSize:items[0]["font-size"] != undefined ? `${items[0]["font-size"]}px` : "2.5rem"}}>What is Lorem Ipsum?</h1>
        <h2 style={{color:items[1]["color"] != undefined ? `${items[1]["color"]}` : "black",
                    fontFamily:items[1]["font-family"] != undefined ? `${items[1]["font-family"]}` : "BlinkMacSystemFont, Segoe UI,sans-serif",
                    fontSize:items[1]["font-size"] != undefined ? `${items[1]["font-size"]}px` : "1.5rem"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h2>
        <h3 style={{color:items[2]["color"] != undefined ? `${items[2]["color"]}` : "black",
                    fontFamily:items[2]["font-family"] != undefined ? `${items[2]["font-family"]}` : "BlinkMacSystemFont, Segoe UI,sans-serif",
                    fontSize:items[2]["font-size"] != undefined ? `${items[2]["font-size"]}px` : "1rem"}}>help@lipsum.com</h3>
      </header>
  </article>
}