import './styles/app.css';

function App() {
    return (
        <div className="app">
            <header className="appHeader">
                <nav className='nav'>
                    <div className='brandNavbar'>
                        <h3 className='brandLogo'>•</h3>
                        <h3 className='brandName'>friendo</h3>
                    </div>
                    <ul className="listNavbar">
                        <li className="listNavbarItem">
                            <a href='/' className='listNavbarItemAnchor'>
                                <h3 className='listNavbarItemAnchorText'>
                                    <i className="fa fa-info-circle"></i>
                                </h3>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>

            <section className='appBody'>
                <div className="appBodyDisplay">
                    <h1 className='appBodyDisplayTitle'>Display</h1>
                </div>
                <div className="appBodyControl">
                    <h1 className='appBodyControlTitle'>Control</h1>

                </div>
            </section>
        </div>
    );
}

export default App;
