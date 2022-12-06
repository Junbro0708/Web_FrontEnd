import Carousel, {CarouselItem} from "./Carousel";
import item from "./item.json";
import styles from "../../styles/editInvitation.module.css";

export default function EditInvitation(){
  const displayItem = () => {
    return(
    <ul className={styles.types}>
      {item.map((val, idx)=>{
        return(
          <li key={idx}>
            <h2>{val.type}</h2>
            <ul className={styles.props}>
              {val.data.map((data, index)=>{
                return <li key={index} 
                style={{backgroundColor: val.type == "color" ? `${data}` : "none", 
                        fontFamily: val.type == "font-family" ? `${data}` : "BlinkMacSystemFont, Segoe UI,sans-serif",
                        fontSize: val.type == "font-size" ? data : 16
                      }}>
                  {val.type != "color" ? "F" : undefined}
                </li>
              })}
            </ul>
          </li>
        )
      })}
    </ul>)
  }
  return <article>
    <Carousel>
      <CarouselItem>{displayItem()}</CarouselItem>
      <CarouselItem>{displayItem()}</CarouselItem>
      <CarouselItem>{displayItem()}</CarouselItem>
    </Carousel>
  </article>
}