function Card() {
    return (
        <div className="card">
            <div className="favorite">
                <img src="img/Btn/unliked.svg"></img>
            </div>
            <img className="ml-15" src="/img/bolivia-trapiche-025.png" height={140} width={140} />
            <h5>БОЛИВИЯ ТРАПИЧЕ</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>2719 руб.</b>
                </div>
                <button className="button">
                    <img height={32} width={32} src="/img/Btn/btn-plus.svg" />
                </button>
            </div>
        </div>
    );
};

export default Card;
