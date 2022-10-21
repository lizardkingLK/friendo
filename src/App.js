import { useRef, useState, useEffect } from 'react';
import html2canvas from "html2canvas";
import { BackgroundColor, CharLimit, GetId, GetSize, OutputFormat } from './utils/constants';
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
            let targetWrap = document.createElement("section");
            let targetTemp = target.cloneNode(true);
            targetWrap.setAttribute("class", GetSize(text.length));
            targetWrap.append(targetTemp);
            document.body.appendChild(targetWrap);
            let filename = GetId(36);
            let options = { backgroundColor: BackgroundColor };
            html2canvas(targetWrap, options)
                .then((canvas) => {
                    let lnk = document.createElement("a");
                    lnk.download = filename;
                    lnk.href = canvas.toDataURL(OutputFormat);
                    e = new MouseEvent("click");
                    lnk.dispatchEvent(e);
                });
            targetWrap.remove();
        }
    }

    return (
        <div className="app">
            <header className="appHeader">
                <nav className='nav'>
                    <div className='brandNavbar' title='Call It. friendo •'>
                        <h3 className='brandLogo'>•</h3>
                        <h3 className='brandName'>friendo</h3>
                    </div>
                    <ul className="listNavbar">
                        <li className="listNavbarItem">
                            <h3 className='controlInputMeta listNavbarItemAnchorText'
                                title={`${CharLimit - text.length} Characters Remaining`}>
                                {CharLimit - text.length}
                            </h3>
                        </li>
                        <li className="listNavbarItem">
                            <button onClick={(e) => ClearInput()}
                                className='listNavbarItemAnchor primaryBtn'
                                title='Clear Entered Text'>
                                <h3 className='listNavbarItemAnchorText'>
                                    <i className="fa-solid fa-eraser"></i>
                                </h3>
                            </button>
                        </li>
                        <li className="listNavbarItem">
                            <button onClick={(e) => GetImage(e)}
                                className='listNavbarItemAnchor primaryBtn'
                                title='Download as Image'>
                                <h3 className='listNavbarItemAnchorText'>
                                    <i className="fas fa-download"></i>
                                </h3>
                            </button>
                        </li>
                        <li className="listNavbarItem">
                            <button onClick={(e) => setNAbout(nAbout + 1)}
                                className='listNavbarItemAnchor primaryBtn'
                                title='About Us'>
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
                        onChange={(e) => SetInput(e)} onPaste={(e) => SetInput(e)} maxLength={CharLimit}
                        title={`${CharLimit - text.length} Characters Remaining`}></textarea>
                </div>
                <h1 className='appBodyDisplay appBodyDisplayTitle'
                    ref={targetRef} title='Preview of the Output'>{text}</h1>
            </section>

            <section ref={aboutRef} className="appAbout">
                <button onClick={(e) => setNAbout(nAbout + 1)}
                    className='aboutClose primaryBtn'>
                    <h3 className='aboutCloseText'>
                        <i className="fa fa-close"></i>
                    </h3>
                </button>
                <h3 className="aboutCreatedBy" title='https://github.com/lizardkingLK'>
                    Created by Sandeep Fernando
                </h3>
                <blockquote className='aboutQuote' cite="https://www.imdb.com/title/tt0477348/"
                    title='https://www.imdb.com/title/tt0477348/'>
                    "What's the most you ever lost on a coin toss?"
                </blockquote>
            </section>
        </div>
    );
}

export default App;
