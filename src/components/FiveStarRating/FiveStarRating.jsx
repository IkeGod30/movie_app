import { StarFill, StarHalf, Star as StarEmpty } from "react-bootstrap-icons";

export function FiveStarRating({ rating}) {
    const startList = [];
    const starFillCount = Math.floor(rating);
    const hasHalfStar = rating - parseInt(rating) >= 0.5;
    const emptyStarCount = 5 - starFillCount - (hasHalfStar ? 1 : 0);

    for(let i=1; i <= starFillCount; i++ ) {
        startList.push(<StarFill key={"star-fill"+i} />);
    
    }
    if(hasHalfStar) {
        startList.push(<StarHalf key={"star-half"} />);
    }
    
    for(let i=1; i <= emptyStarCount; i++ ) {
        startList.push(<StarEmpty key={"star-empty" +i} />);
    
    }

    return(
        <div>{startList}</div>
    )
}