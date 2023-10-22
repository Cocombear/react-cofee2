function Header() {
    return (
        <header className="d-flex justify-between align-center p-20">
            <div className="d-flex align-center">
                <img src="/img/site_logo.svg" height={60} width={60} />
                <div className="headrtInfo">
                    <h3>TASTY COFFEE</h3>
                    <p>Интернет-магазин свежего кофе</p>
                </div>
            </div>
            <ul className="d-flex">
                <li className="mr-20">
                    <img src="/img/bascet-ic-white.svg" height={18} width={18} />
                    <sapn>980 руб.</sapn>
                </li>
                <li>
                    <img src="/img/person-ic-dark.svg" height={18} width={18} />
                </li>
            </ul>
        </header>
    );
};

export default Header;