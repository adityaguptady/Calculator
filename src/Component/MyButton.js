import style from '../Styles/my-button.module.css'
const MyButton = (props) =>
{
    let onClickButton = () =>
    {
        props.clickFunction(props.text)
    }
    // onClick={()=>updateResult(props.text)}
    return (<button onClick={()=>onClickButton} className={style.myButtonStyle}>{props.text}</button>)
}

export default MyButton;