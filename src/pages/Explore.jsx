import { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import ResultsCard from "../components/ResultsCard";

function Explore() {

    const [cars, setCars] = useState(null)

    const handleDelete = (id) => {
        const newCars = cars.filter(car => car.id !== id)
        setCars(newCars)
    }

    useEffect(() => {
        async function getCarInformation() {
            try {
                const res = await axios.get('http://localhost:8000/cars')
                return setCars(res.data)
            } catch (error) {
                toast.error('Something is wrong')
            }
        }

        getCarInformation()
    }, [])
    return (
        <div>
            {cars && <ResultsCard cars={cars} />}

        </div>
    )
}

export default Explore
