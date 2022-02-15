import { useRef, useState, useEffect } from 'react';
import html2canvas from "html2canvas";
import { BackgroundColor, CharLimit, GetId, OutputFormat } from './utils/constants';
import './styles/app.css';

function App() {
    const [text, setText] = useState("");
    const [nAbout, setNAbout] = useState(1);

    const targetRef = useRef(null);
    const inputRef = useRef(null);
    const aboutRef = useRef(null);

    useEffect(() => aboutRef.current.style.display = nAbout % 2 === 0 ? "flex" : "none", [nAbout]);

    const SetInput = (e) => text.length < CharLimit ? setText(e.target.value) : e.preventDefault();

    const ClearInput = () => {
        inputRef.current.value = "";
        setText("");
    };

    const GetImage = (e) => {
        if (text !== "") {
            let target = targetRef.current;
            let filename = GetId(36);
            let options = { backgroundColor: BackgroundColor };
            html2canvas(target, options)
                .then((canvas) => {
                    let lnk = document.createElement("a");
                    lnk.download = filename;
                    lnk.href = canvas.toDataURL(OutputFormat);
                    e = new MouseEvent("click");
                    lnk.dispatchEvent(e);
                });
        }
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
                            <h5 className='controlInputMeta'>
                                {`${CharLimit - text.length} characters remaining`}
                            </h5>
                        </li>
                        <li className="listNavbarItem">
                            <button onClick={(e) => ClearInput()}
                                className='listNavbarItemAnchor primaryBtn'>
                                <h3 className='listNavbarItemAnchorText'>
                                    <i className="fa-solid fa-eraser"></i>
                                </h3>
                            </button>
                        </li>
                        <li className="listNavbarItem">
                            <button onClick={(e) => GetImage(e)}
                                className='listNavbarItemAnchor primaryBtn'>
                                <h3 className='listNavbarItemAnchorText'>
                                    <i className="fas fa-download"></i>
                                </h3>
                            </button>
                        </li>
                        <li className="listNavbarItem">
                            <button onClick={(e) => setNAbout(nAbout + 1)}
                                className='listNavbarItemAnchor primaryBtn'>
                                <h3 className='listNavbarItemAnchorText'>
                                    <i className="fa fa-info-circle"></i>
                                </h3>
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>

            <section className='appBody'>
                <div className='appBodyControl'>
                    <textarea name='controlInput' className='controlInput primaryTextarea'
                        id='controlInput' placeholder='Enter your text...' ref={inputRef}
                        onChange={(e) => SetInput(e)} onPaste={(e) => SetInput(e)}
                        maxLength={CharLimit}></textarea>
                </div>
                <h1 ref={targetRef} className='appBodyDisplay appBodyDisplayTitle'>{text}</h1>
            </section>

            <section ref={aboutRef} className="appAbout">
                <button onClick={(e) => setNAbout(nAbout + 1)}
                    className='aboutClose primaryBtn'>
                    <h3 className='aboutCloseText'>
                        <i className="fa fa-close"></i>
                    </h3>
                </button>
                <h3 className="aboutCreatedBy">Created by Sandeep Fernando for <b>AMUS</b>&trade;</h3>
                <blockquote className='aboutQuote' cite="http://www.worldwildlife.org/who/index.html">
                    "What's the most you ever lost on a coin toss ?"
                </blockquote>
            </section>
        </div>
    );
}

export default App;
