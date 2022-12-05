import React, { useState } from "react";

import styles from "../../styles/carousel.module.css";

export const CarouselItem = ({children, width}) => {
  return(
    <div className={styles.carouselItem} style={{width: width}}>
      {children}
    </div>
  );
};

const Carousel = ({children}) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const updateIdx = (newIdx) => {
    if(newIdx < 0) newIdx = 0;
    else if(newIdx >= React.Children.count(children)){
      newIdx = React.Children.count(children) - 1;
    }
    setActiveIdx(newIdx);
  }
  return(
    <div className={styles.carousel}>
      <div className={styles.inner} style={{transform: `translateX(-${activeIdx * 100}%)`}}>
        {React.Children.map(children, (child, idx) => {
          return React.cloneElement(child, {width: "100%"})
        })}
      </div>
      <div className={styles.indicators}>
        <button onClick={()=>updateIdx(activeIdx-1)}>Prev</button>
        <button onClick={()=>updateIdx(activeIdx+1)}>Next</button>
      </div>
    </div>
  )
}
export default Carousel;