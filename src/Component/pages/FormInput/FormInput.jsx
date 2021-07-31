import "./FormInput.styles.scss"
const FormInput = ({label, handleChange, ...otherProps}) => {

     return(

         <div className="Form">
         
             <div className="FormInput">
                 <input className="inputvalues" onChange={handleChange} {...otherProps}/>  
                 { label ? (
                 <label className={`${otherProps.value.length ? 'shrink' : '' } label`}>
                      {label} 
                 </label>
                 ) : null}
             </div>

         </div>

     )

}

export default FormInput;


