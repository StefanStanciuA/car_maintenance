import React from 'react'
import Card from './Card'

function ResultsCard({ cars }) {
    return (
        <div className='result-card'>
            {cars.map((car) => {
                return <Card car={car} key={car.id} />
            })}
        </div>
    )
}

export default ResultsCard
