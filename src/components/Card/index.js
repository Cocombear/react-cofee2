import React from "react"
import ReactDOM from "react-dom";
import styles from './Card.module.scss'
//import ReactDOM from "react-dom";
function Card({imgUrl, date, title}) {
    const [isAddded, setIsAdded] = React.useState(true);

    const onClickPlus =  () => {
        setIsAdded(!isAddded)
    }

    React.useEffect(() => {
        
    }, [isAddded])

    return (
        <div className={styles.card}>
            <img className="ml-15" src={imgUrl} height={170} width={900} />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Дата:<b>{date}</b></span>
                </div>
                <button className="button" onClick={onClickPlus}>
                    <img height={32} width={32} src={isAddded ? "/img/btn/btn-plus.svg" : "/img/btn/btn-checked.svg"} />
                </button>
            </div>
        </div>
    );  
};

export default Card;
