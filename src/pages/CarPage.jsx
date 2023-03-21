import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import CreateNote from '../components/CreateNote'

function CarPage() {

    const [car, setCar] = useState(null)
    const [info, setInfo] = useState([])
    const params = useParams()
    const navigate = useNavigate()

    async function getServiceInformation() {
        try {
            const res = await axios.get(`http://localhost:8000/info/?id_car=${params.id}`)
            return setInfo(res.data)
        } catch (error) {
            toast.error('Datele nu au putut fi preluate')
        }
    }

    async function deleteServiceInformation(id) {
        try {
            const res = await axios.delete(`http://localhost:8000/info/${id}`)
            getServiceInformation()
        } catch (error) {
            toast.error('Datele nu au putut fi sterse')
        }
    }
    async function deleteCarInformation() {
        try {
            const res = await axios.delete(`http://localhost:8000/cars/${params.id}`)
            navigate('/')
        } catch (error) {
            toast.error('Masina nu a putut fi stearsa')
        }
    }



    useEffect(() => {
        async function getCarInformation() {
            try {
                const res = await axios.get(`http://localhost:8000/cars/${params.id}`)
                return setCar(res.data)
            } catch (error) {
                toast.error('Datele nu au putut fi preluate')
            }
        }


        getCarInformation()
        getServiceInformation()
    }, [params.id])

    if (!car) {
        return <div>No car.</div>
    }

    const { id, img, marca, sofer, motor, anul, norma_poluare, combustibil, putere, stare, tip_caroserie, cutie_viteza, numar_portiere, culoare } = car;

    return (
        <div>
            <div><Link className='back_btn' to='/'>Back</Link></div>
            <div><Link className='edit_btn' to={`/edit-car/${params.id}`}>Modifica</Link></div>
            <button className='delete_car_btn' onClick={() => { deleteCarInformation() }}>Sterge</button>
            <div>
                <h2>{marca} - {sofer}</h2>
                <div className='details_container'>
                    <div className='img_car'>
                        <img className='picture' src={img} alt="masina" id={id} />
                    </div>
                    <div className='details'>
                        <p className='item_details'>Motorizare: {motor}</p>
                        <p className='item_details'>Putere: {putere}</p>
                        <p className='item_details'>Combustibil: {combustibil}</p>
                        <p className='item_details'>Norma de poluare: {norma_poluare}</p>
                        <p className='item_details'>Anul: {anul}</p>
                    </div>
                    <div className='details'>
                        <p className='item_details'>Tip Caroserie: {tip_caroserie}</p>
                        <p className='item_details'>Numar de portiere: {numar_portiere}</p>
                        <p className='item_details'>Stare: {stare}</p>
                        <p className='item_details'>Culoare: {culoare}</p>
                        <p className='item_details'>Cutie de viteze: {cutie_viteza}</p>
                    </div>
                </div>
            </div>
            <div className='service_container'>
                {info.map((item, index) => {
                    return <ul key={index}>
                        <li className='li_details'>
                            {item.data}
                            <p>{item.body}</p>
                            <button className='delete_btn' onClick={() => deleteServiceInformation(item.id)} >X</button>
                        </li>
                    </ul>
                })}
            </div>
            <CreateNote getServiceInformation={getServiceInformation} />

        </div>
    )
}

export default CarPage
