import { Link, useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'



function EditCar() {
    const [marca, setMarca] = useState('')
    const [sofer, setSofer] = useState('')
    const [motor, setMotor] = useState('')
    const [an, setAn] = useState('')
    const [np, setNp] = useState('')
    const [cp, setCp] = useState('')
    const [combustibil, setCombustibil] = useState('')
    const [img, setImg] = useState('')

    const params = useParams()
    const navigate = useNavigate()

    async function postCarData(e) {
        e.preventDefault()
        try {
            await axios.put(`http://localhost:8000/cars/${params.id}`, {
                marca: marca,
                sofer: sofer,
                motor: motor,
                anul: an,
                norma_poluare: np,
                putere: cp,
                combustibil: combustibil,
                img: img
            })
            navigate(`/car-page/${params.id}`)
        } catch (error) {
            toast.error('Datele nu au putut fi transmise')
        }

    }

    useEffect(() => {
        async function getCarData() {
            try {
                const res = await axios.get(`http://localhost:8000/cars/${params.id}`)

                setSofer(res.data.sofer)
                setMarca(res.data.marca)
                setMotor(res.data.motor)
                setAn(res.data.anul)
                setCombustibil(res.data.combustibil)
                setCp(res.data.putere)
                setImg(res.data.img)
                setNp(res.data.norma_poluare)
            } catch (error) {
                toast.error('Datele nu au putut fi transmise')
            }

        }
        getCarData()
    }, [])

    return (
        <div>
            <header>
                <h1>Adaugă o maşină nouă</h1>
            </header>
            <div><Link className='back_btn' to={`/car-page/${params.id}`} >Back</Link></div>
            <main>
                <form className='edit_car_form' onSubmit={postCarData}>
                    <div className='new_car_wrapper'>
                        <label htmlFor="">Marca - Model</label>
                        <input className="createInput" type="text" value={marca} onChange={(e) => setMarca(e.target.value)} />
                    </div>
                    <div className='new_car_wrapper'>
                        <label htmlFor="">Sofer</label>
                        <input className="createInput" type="text" value={sofer} onChange={(e) => setSofer(e.target.value)} />
                    </div>
                    <div className='new_car_wrapper'>
                        <label htmlFor="">Motorizare</label>
                        <input className="createInput" type="text" value={motor} onChange={(e) => setMotor(e.target.value)} />
                    </div>
                    <div className='new_car_wrapper'>
                        <label htmlFor="">Anul</label>
                        <input className="createInput" type="text" value={an} onChange={(e) => setAn(e.target.value)} />
                    </div>
                    <div className='new_car_wrapper'>
                        <label htmlFor="">Norma de poluare</label>
                        <input className="createInput" type="text" value={np} onChange={(e) => setNp(e.target.value)} />
                    </div>
                    <div className='new_car_wrapper'>
                        <label htmlFor="">Putere</label>
                        <input className="createInput" type="text" value={cp} onChange={(e) => setCp(e.target.value)} />
                    </div>
                    <div className='new_car_wrapper'>
                        <label htmlFor="">Combustibil</label>
                        <input className="createInput" type="text" value={combustibil} onChange={(e) => setCombustibil(e.target.value)} />
                    </div>
                    <div className='new_car_wrapper'>
                        <label htmlFor="">Adauga imagine</label>
                        <input type="text" value={img} onChange={(e) => setImg(e.target.value)}
                            className="createInput"
                        />
                    </div>

                    <button className="form_button">Salveaza</button>


                </form>
            </main>
        </div>
    )
}

export default EditCar