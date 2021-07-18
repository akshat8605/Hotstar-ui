import logo from './media/logo.svg';
import './App.css';
import menu from './media/menu.png'
import search from './media/search.png'
import Slider from "react-slick";
import b1 from './media/banner1.png'
import b2 from './media/banner2.png'
import loki from './media/loki.png'
import falcon from './media/falcon.png'
function App() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,

  };
  const settings2 = {
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 5,

  };
  return (
    <div >
        <div className="header">
            <div className="header-1">
                <img src={menu}/>
                <img src={logo} style={{marginTop:-15}}/>
                <div>tv</div>
                <div>movies</div>
                <div>sports</div>
                <div>premium</div>
                <div>disney+</div>
                <div>kids</div>
            </div>
            <div className="header-2">
                <div className="input_cont">
                  <input placeholder="Search"/>
                  <img src={search}/>
                </div>
                <div className="subscribe">
                     subscribe
                </div>
                <div className="login">
                  login
                </div>
            </div>
        </div>
        <Slider {...settings} className="slider-1">
          <div className="slider_card">
            <div className="textArea">
              <div className="title">
                  Yeh Rishta Kya Kehlata Hai
              </div>
              <div className="disc">
                <div>StarPlus</div>
                <div>Hindi</div>
                <div>Drama</div>
              </div>
              <div className="content">
              This is a story on star plus which you can go enjoy get hotstar vip to watch this , also follow canitech to learn moreThis is a story on star plus which you can go enjoy get hotstar vip to watch this , also follow canitech to learn more
              </div>

            </div>
            <div className="gradient"></div>
            <img src={b2}/>
          </div>
          <div className="slider_card">
            <div className="textArea">
              <div className="title">
                  Yeh Rishta Kya Kehlata Hai
              </div>
              <div className="disc">
                <div>StarPlus</div>
                <div>Hindi</div>
                <div>Drama</div>
              </div>
              <div className="content">
              This is a story on star plus which you can go enjoy get hotstar vip to watch this , also follow canitech to learn moreThis is a story on star plus which you can go enjoy get hotstar vip to watch this , also follow canitech to learn more
              </div>

            </div>
            <div className="gradient"></div>
            <img src={b1}/>
          </div>
          <div className="slider_card">
            <div className="textArea">
              <div className="title">
                  Yeh Rishta Kya Kehlata Hai
              </div>
              <div className="disc">
                <div>StarPlus</div>
                <div>Hindi</div>
                <div>Drama</div>
              </div>
              <div className="content">
              This is a story on star plus which you can go enjoy get hotstar vip to watch this , also follow canitech to learn moreThis is a story on star plus which you can go enjoy get hotstar vip to watch this , also follow canitech to learn more
              </div>

            </div>
            <div className="gradient"></div>
            <img src={b1}/>
          </div>
        </Slider>
          
        <div className="mini_slider">
          <div className="title_slider">Latest & Trending</div>
          <Slider {...settings2}>
            
            <div className="mini_slider_card">
              < img  src={loki}/>
            </div>  
            <div className="mini_slider_card">
              < img  src={loki}/>
            </div>  <div className="mini_slider_card">
              < img  src={loki}/>
            </div>  <div className="mini_slider_card">
              < img  src={loki}/>
            </div>  <div className="mini_slider_card">
              < img  src={loki}/>
            </div>  <div className="mini_slider_card">
              < img  src={loki}/>
            </div>  <div className="mini_slider_card">
              < img  src={loki}/>
            </div>   <div className="mini_slider_card">
              < img  src={loki}/>
            </div>   
          </Slider>
        </div>
        <div className="mini_slider">
          <div className="title_slider">Movies For You</div>
          <Slider {...settings2}>
            
            <div className="mini_slider_card">
              < img  src={falcon}/>
            </div>  
            <div className="mini_slider_card">
              < img  src={falcon}/>
            </div>  
            <div className="mini_slider_card">
              < img  src={falcon}/>
            </div>  
            <div className="mini_slider_card">
              < img  src={falcon}/>
            </div>  
            <div className="mini_slider_card">
              < img  src={falcon}/>
            </div>  
            <div className="mini_slider_card">
              < img  src={falcon}/>
            </div>  
            <div className="mini_slider_card">
              < img  src={falcon}/>
            </div>  
            <div className="mini_slider_card">
              < img  src={falcon}/>
            </div>  
           
           
          </Slider>
        </div> <div className="mini_slider">
          <div className="title_slider">Latest & Trending</div>
          <Slider {...settings2}>
            
            <div className="mini_slider_card">
              < img  src={loki}/>
            </div>  
            <div className="mini_slider_card">
              < img  src={loki}/>
            </div>  <div className="mini_slider_card">
              < img  src={loki}/>
            </div>  <div className="mini_slider_card">
              < img  src={loki}/>
            </div>  <div className="mini_slider_card">
              < img  src={loki}/>
            </div>  <div className="mini_slider_card">
              < img  src={loki}/>
            </div>  <div className="mini_slider_card">
              < img  src={loki}/>
            </div>   <div className="mini_slider_card">
              < img  src={loki}/>
            </div>   
          </Slider>
        </div>
        <div className="mini_slider">
          <div className="title_slider">Movies For You</div>
          <Slider {...settings2}>
            
            <div className="mini_slider_card">
              < img  src={falcon}/>
            </div>  
            <div className="mini_slider_card">
              < img  src={falcon}/>
            </div>  
            <div className="mini_slider_card">
              < img  src={falcon}/>
            </div>  
            <div className="mini_slider_card">
              < img  src={falcon}/>
            </div>  
            <div className="mini_slider_card">
              < img  src={falcon}/>
            </div>  
            <div className="mini_slider_card">
              < img  src={falcon}/>
            </div>  
            <div className="mini_slider_card">
              < img  src={falcon}/>
            </div>  
            <div className="mini_slider_card">
              < img  src={falcon}/>
            </div>  
           
           
          </Slider>
        </div> <div className="mini_slider">
          <div className="title_slider">Latest & Trending</div>
          <Slider {...settings2}>
            
            <div className="mini_slider_card">
              < img  src={loki}/>
            </div>  
            <div className="mini_slider_card">
              < img  src={loki}/>
            </div>  <div className="mini_slider_card">
              < img  src={loki}/>
            </div>  <div className="mini_slider_card">
              < img  src={loki}/>
            </div>  <div className="mini_slider_card">
              < img  src={loki}/>
            </div>  <div className="mini_slider_card">
              < img  src={loki}/>
            </div>  <div className="mini_slider_card">
              < img  src={loki}/>
            </div>   <div className="mini_slider_card">
              < img  src={loki}/>
            </div>   
          </Slider>
        </div>
        <div className="mini_slider">
          <div className="title_slider">Movies For You</div>
          <Slider {...settings2}>
            
            <div className="mini_slider_card">
              < img  src={falcon}/>
            </div>  
            <div className="mini_slider_card">
              < img  src={falcon}/>
            </div>  
            <div className="mini_slider_card">
              < img  src={falcon}/>
            </div>  
            <div className="mini_slider_card">
              < img  src={falcon}/>
            </div>  
            <div className="mini_slider_card">
              < img  src={falcon}/>
            </div>  
            <div className="mini_slider_card">
              < img  src={falcon}/>
            </div>  
            <div className="mini_slider_card">
              < img  src={falcon}/>
            </div>  
            <div className="mini_slider_card">
              < img  src={falcon}/>
            </div>  
           
           
          </Slider>
        </div>
    </div>
  );
}

export default App;
