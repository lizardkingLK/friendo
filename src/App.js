import { useRef, useState } from 'react';
import html2canvas from "html2canvas";
import './styles/app.css';

function GetId(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

function App() {
    const [text, setText] = useState();
    const targetRef = useRef(null);

    const GetImage = (e) => {
        let target = targetRef.current;
        let options = { backgroundColor: "#000000" };
        let filename = GetId(36);
        html2canvas(target, options)
            .then((canvas) => {
                let lnk = document.createElement("a"), e;
                lnk.download = filename;
                lnk.href = canvas.toDataURL("image/png;base64");
                e = new MouseEvent("click");
                lnk.dispatchEvent(e);
            });
    }

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
                            <button onClick={(e) => GetImage(e)}
                                className='listNavbarItemAnchor primaryBtn'>
                                <h3 className='listNavbarItemAnchorText'>
                                    <i className="fas fa-download"></i>
                                </h3>
                            </button>
                        </li>
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
                <textarea name='controlInput' className='appBodyControl controlInput primaryTextarea'
                    id='controlInput' placeholder='Enter your text...'
                    onChange={(e) => setText(e.target.value)}></textarea>
                <h1 ref={targetRef} className='appBodyDisplay appBodyDisplayTitle'>{text}</h1>
            </section>
        </div >
    );
}

export default App;
