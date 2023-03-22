import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import ResultsCard from "../components/ResultsCard";
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Explore() {

    const [cars, setCars] = useState(null)
    const { session } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {

        async function getCarInformation() {
            try {
                const res = await axios.get('http://localhost:8000/cars')
                return setCars(res.data)
            } catch (error) {
                toast.error('Something is wrong')
            }
        }
        if (session) {
            getCarInformation()
        } else {
            navigate('/sign-in')
        }

    }, [])
    return (
        <div>
            {cars && <ResultsCard cars={cars} />}

        </div>
    )
}

export default Explore
