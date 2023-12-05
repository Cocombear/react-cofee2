function Header() {
    return (
        <header className="d-flex justify-between align-center p-20">
            <div className="d-flex align-center">
                <img src="/img/expodatLogo.svg" height={60} width={60} />
                <div className="headrtInfo">
                    <h3>Expodat</h3>
                    <p>ПРОГРАММНО АППАРАТНЫЙ КОМПЛЕКС ДЛЯ ОРГАНИЗАТОРОВ И УЧАСТНИКОВ ОФЛАЙН МЕРОПРИЯТИЙ</p>
                </div>
            </div>
        </header>
    );
};

export default Header;