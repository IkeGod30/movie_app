import s from "./style.module.css";
import { TVShowListItem } from "../TVShowListItem/TVShowListItem";

export function TVShowList({ tvShowList }) {
    return(
        <div>
            <div className={s.title}>You'll definitely like :</div>
            <div className={s.list}>
            {
                tvShowList.map((tvShow)=>{
                    return (
                     <TVShowListItem tvShow={tvShow} onClick={()=> console.log("Todo")}
                    />
                    );
                })}

        </div>
        </div>
             
    );
}
