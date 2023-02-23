import './global.css';
// import './App.css';
import s from './style.module.css';

function App() {
  return (
    <div className={s.main_container}>
      <div className={s.header}></div>
      <div className={s.tv_show_details}></div>
      <div className={s.recommended_tv_shows}></div>
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
