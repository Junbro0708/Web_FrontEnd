import Proptypes from "prop-types";
import styles from "./Button.module.css";

function Button({onClick, text}){
  return(
    <button onClick={onClick} className={styles.btn}>{text}</button>
  )
}

Button.propTypes = {
  text: Proptypes.string.isRequired,
  
}

export default Button;