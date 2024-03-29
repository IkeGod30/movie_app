import { TVShowAPI } from './api/tv-show';
import './global.css';
import s from './style.module.css';
import { useState, useEffect} from 'react';
import { BACKDROP_BASE_URL} from './config';
import { TVShowDetails} from "./components/TVShowDetails/TVShowDetails";
import { Logo } from "./components/Logo/Logo";
import LogoImg  from "./assets/images/logo.png";
import { TVShowList } from "./components/TVShowList/TVShowList";
import { SearchBar } from './components/SearchBar/SearchBar';


TVShowAPI.fetchPopulars();

export function App() {
  const [currentTVShow, setcurrentTVShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);

  async function fetchPopulars() {
    const popularTVShowList = await TVShowAPI.fetchPopulars();
    if(popularTVShowList.length>0) {
    setcurrentTVShow(popularTVShowList[0])
    }
  }

  async function fetchRecommendations(tvShowId) {
    const recommendationListResp = await TVShowAPI.fetchRecommendations(tvShowId);
    if (recommendationListResp.length > 0) {
    setRecommendationList(recommendationListResp.slice(0, 10));
    }
  }

  useEffect(() => {
    fetchPopulars();
    }, []);

  useEffect(() => {
      if(currentTVShow) {
        fetchRecommendations(currentTVShow.id);
      }
     }, [currentTVShow]);

     console.log(recommendationList);

     console.log(currentTVShow);

     function updateCurrentTVShow(tvShow) {
      setcurrentTVShow(tvShow);

     }

     async function fetchByTitle(title) {
      const searchResponse = await TVShowAPI.fetchByTitle(title);
      if (searchResponse.length > 0) {
        setcurrentTVShow(searchResponse[0])
      
      }
    }

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
          <div className='col-md-12 col-lg-4'>
            <SearchBar onSubmit={fetchByTitle} />
          </div>
        </div>
      </div>
      <div className={s.tv_show_details}>
        {currentTVShow && <TVShowDetails tvShow={currentTVShow} />}
      </div>
      <div className={s.recommended_shows}>
      {currentTVShow && <TVShowList onClickItem={updateCurrentTVShow} tvShowList={recommendationList} />}
    </div>
    </div>
    
  );
  
}




export default App;
