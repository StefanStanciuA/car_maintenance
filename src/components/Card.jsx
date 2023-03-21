import { Link } from 'react-router-dom'

function Card({ car: { img, marca, sofer, id } }) {
    return (
        <div className='card'>

            <div>
                <div className='car-img'>
                    <img src={img} alt='masina' />
                </div>
                <div>
                    <h2 className='card-title'>{marca}</h2>
                    <h3 className='card-title'>{sofer}</h3>
                    <Link
                        className='text-base'
                        to={`/car-page/${id}`}
                    >
                        Vezi masina
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card