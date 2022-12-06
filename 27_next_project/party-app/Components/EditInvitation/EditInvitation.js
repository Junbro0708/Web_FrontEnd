import Carousel, {CarouselItem} from "./Carousel";
import item from "./item.json";
import styles from "../../styles/editInvitation.module.css";
import { useState } from "react";

export default function EditInvitation({activeIdx, setActiveIdx, items, setItems, setRender}){
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
                      }}
                onClick={()=>{
                  let temp = items;
                  temp[activeIdx][val.type] = data;
                  setItems(temp);
                  setRender(prev=>prev+1);
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
    <Carousel activeIdx={activeIdx} setActiveIdx={setActiveIdx}>
      <CarouselItem>{displayItem()}</CarouselItem>
      <CarouselItem>{displayItem()}</CarouselItem>
      <CarouselItem>{displayItem()}</CarouselItem>
    </Carousel>
  </article>
}