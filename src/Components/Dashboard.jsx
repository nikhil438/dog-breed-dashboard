import React, { useState, useEffect } from 'react'
import { CONFIG } from './config/DashBoard'
import Table from './Table'
import { getDogBreeds } from '../services/DogBreedService'

const Dashboard = () => {

    const [breeds, setBreeds] = useState([])

    useEffect(() => {
        setBreeds(getDogBreeds())
    }, [])

    return (
        <div>
            <div className='AppBody'>
                <div className="card full-width">
                    <Table headers={CONFIG} rows={breeds} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard