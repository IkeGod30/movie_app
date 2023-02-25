import { TVShowAPI } from './api/tv-show';
import './global.css';
// import './App.css';
import s from './style.module.css';

TVShowAPI.fetchPopulars();

function App() {
  return (
    <div className={s.main_container}>
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <div>Logo</div>
            <div>Subtitle</div>

          </div>
           <div className="col-md-12 col-lg-4">
            <input style={{ width: "100%" }} type="text" />

           </div>

        </div>
      </div>
      <div className={s.tv_show_details}> TV Show Details</div>
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
