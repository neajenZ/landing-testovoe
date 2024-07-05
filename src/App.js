import './App.css';
import {CardFeedback} from "./components/cardFeedback/cardFeedback";
import {FeedbackData} from "./feedback-data";
import {Achivements} from "./components/achivements/achivements";
import img3 from './shared/images/Ethereum.svg'
import img1 from './shared/images/Bitcoin.svg'
import img2 from './shared/images/litecoin.svg'
import googleIcon from './shared/images/google.png'
import appleIcon from './shared/images/apple.png'


function App() {


  return (
    <div className="intro">
        <div className="container">
            <div className="wrapper">
                <div className="intro-content">
                    <h1>Do you want to Learn more About cryptocurrencies <span>quickly and easily ?</span></h1>
                    <p>Subscribe to our channel to learn more</p>

                </div>

                <Achivements />
                <button className='join-btn'>Join whatsapp</button>
                <div className="market-links">
                    <div className="link-item">
                        <img src={googleIcon} alt=""/>
                        <div className="link-data">
                            <p>get it on</p>
                            <h4>Google play</h4>
                        </div>
                    </div>
                    <div className="link-item">
                        <img src={appleIcon} alt=""/>
                        <div className="link-data">
                            <p>Available on the</p>
                            <h4>App Store</h4>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className="feedback-wrapper">
            {
                FeedbackData.map((i) => (
                    <CardFeedback
                        key={i.userTag}
                        data={i}
                    />
                ))
            }
        </div>
        <div className='background-pictures'>
            <div className="background-pictures-wrapper">
                <img className='background-picture' src={img1} alt=""/>
                <img className='background-picture' src={img2} alt=""/>
                <img className='background-picture' src={img3} alt=""/>
            </div>
        </div>
    </div>
  );
}

export default App;
