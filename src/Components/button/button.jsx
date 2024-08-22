const Button = ({value , style, handleClick,productName}) => {
    return ( 
        <button className={style} onClick={()=>handleClick(productName)}>{value}</button>
     );
}
 
export default Button;