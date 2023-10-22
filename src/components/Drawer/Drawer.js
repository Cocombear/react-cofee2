function Drawer() {
    return (
        <div style={{display: 'none'}} className="overlay" >
            <div className="drawer">
                <div className="cartHeader d-flex align-center justify-between">
                    <h2>Корзина</h2>
                    <img className="removeBtn cu-p" src="/img/Btn/btn-remove.svg"></img>
                </div>

                <div className="items">
                    <div className="cartItem mt-20 d-flex align-centr">
                        <img height={70} width={70} src="/img/bolivia-trapiche-025.png"></img>
                        <div className="ml-5 mr-30">
                            <p>БОЛИВИЯ ТРАПИЧЕ</p>
                            <b>2719 руб.</b>
                        </div>
                        <img className="removeBtn" src="/img/Btn/btn-remove.svg"></img>
                    </div>
                </div>
                <div className="cartTotalBlock">
                    <ul>
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>7800 руб.</b>
                        </li>
                        <li>
                            <span>Налог 5%</span>
                            <div></div>
                            <b></b>
                        </li>
                    </ul>
                    <button className="blackButton align-center">
                        Оформить заказ
                        <img src="/img/Btn/arrow.svg"></img>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Drawer;