import { TVShowAPI } from './api/tv-show';
import './global.css';
import s from './style.module.css';
import { useState, useEffect} from 'react';
import { BACKDROP_BASE_URL} from './config';
import { TVShowDetails} from "./components/TVShowDetails/TVShowDetails";
import { Logo } from "./components/Logo/Logo";
import LogoImg  from "./assets/images/logo.png";
import { TVShowListItem } from "./components/TVShowListItem/TVShowListItem";





TVShowAPI.fetchPopulars();

function App() {
  const [currentTVShow, setcurrentTVShow] = useState();

  async function fetchPopulars() {
    const popularTVShowList = await TVShowAPI.fetchPopulars();
    if(popularTVShowList.length>0) {
    setcurrentTVShow(popularTVShowList[0])
    }
  }

  useEffect(() => {
    fetchPopulars();
    }, []);
  // useEffect(async ()=> {
  //   (async()=>{
  //     const popularTVShowList = await TVShowAPI.fetchPopulars();
  //   })()

  // }, []);

  console.log(currentTVShow);
  return (
    <div className={s.main_container}
      style={{ 
        background: currentTVShow ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover` 
        : "black",
        }}
      >

      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo img={LogoImg} title={"What to Watch"} subtitle={"Find a Show you like"} />
          
               

          </div>
           <div className="col-md-12 col-lg-4">
            <input style={{ width: "100%" }} type="text" />

           </div>

        </div>
      </div>
      <div className={s.tv_show_details}>
        {currentTVShow && <TVShowDetails tvShow={currentTVShow} />}
      </div>
      <div className={s.recommended_shows}>
        {/* PLEASE ENABLE THE BELOW */}
      <TVShowListItem tvShow={currentTVShow} /> 
      
    </div>
    </div>
  );
}






export default App;
