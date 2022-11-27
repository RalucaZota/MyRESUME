import './css/rating-dots.scss'

export const RatingDots = function ({rate}) {

    const dots = Array.from(Array(10).keys())

    return (
        <div className="rating-dots">
            {
                dots.map((val, index) => (
                <span className={index < +rate ? 'rated' : ''} key={val} />
                ))
            }
        </div>
    )
   
    
}