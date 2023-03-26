import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export function SearchBar({ onSubmit }) {
    function submit(e) {
        if(e.key == "Enter" && e.target.value.trim() != "")
        onSubmit(e.target.value);
        // console.log("Send Search")
    //    console.log(e.target.value); 
        
    }
    return(
        <>
        <SearchIcon size={27} className={s.icon} />
        <input onKeyUp={submit} className={s.input} type="text" placeholder={"Look up a Show"} />
        </>
    );
}