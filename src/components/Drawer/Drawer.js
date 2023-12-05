function Drawer() {
    return (
            <div className="drawer">
                <div className="cartHeader d-flex align-center justify-between">
                    <h2>Name</h2>
                </div>

                <div className="items">
                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <p className="cartItem">Отчеты</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="cartItem">Избраное</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="cartItem">Профиль</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="cartItem">Задачи</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <button className="blackButton align-center">
                        Выход
                        <img src="/img/Btn/arrow.svg"></img>
                    </button>
                </div>
            </div>
    );
}

export default Drawer;