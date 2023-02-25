import { TVShowAPI } from './api/tv-show';
import './global.css';
// import './App.css';
import s from './style.module.css';
import { useState, useEffect} from 'react';
import { BACKDROP_BASE_URL} from './config';
import { TVShowDetails} from "./components/TVShowDetails/TVShowDetails";




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
            <div>Logo</div>
            <div>Subtitle</div>
                {/* <p>{TVShowAPI.response.data.result[0].name}</p> */}

          </div>
           <div className="col-md-12 col-lg-4">
            <input style={{ width: "100%" }} type="text" />

           </div>

        </div>
      </div>
      <div className={s.tv_show_details}>
        {currentTVShow && <TVShowDetails tvShow={currentTVShow} />}
      </div>
      <div className={s.recommended_tv_shows}>Recommended TV Shows</div>
    </div>
  )
}





// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
        
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
