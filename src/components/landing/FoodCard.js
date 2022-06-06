const FoodCard = (props)=>{
    return (
        <div className="FoodCard">
            <div className="FoodProfile">
                <img src={props.profile} alt="" />
                <span className="price">{props.price}</span>
            </div>
            <div className="Reviews">
                <div className="Reviewers">
                    {props.raters.map(x => <img key={x+(Math.random())} src={x} alt="" />)}
                </div>
                <i className='bx bxs-star FoodRate'></i>
                <span className="ReviewCount">({props.rating})</span>
            </div>
            <h2>{props.foodTitle}</h2>
            <p>{props.text}</p>
            <button>Order Now</button>
        </div>
    )
}

export default FoodCard