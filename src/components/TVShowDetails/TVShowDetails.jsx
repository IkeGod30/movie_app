import s from "./style.module.css";

export function TVShowDetails({ tvShow }) {
    return(
        <div>
            <div> {tvShow.name}</div>
            <div>{ tvShow.vote_average}</div>
            <div>{tvShow.overview}</div>
        </div>
        
    )
}