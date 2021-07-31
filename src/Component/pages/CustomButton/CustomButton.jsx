import "./CustomButton.styles.css"

const CustomButton = (props) => {

  return( 
    <button onClick= {props.onClick} className={`button ${props.color}`} >{props.children}</button>
  )

}

export default CustomButton;