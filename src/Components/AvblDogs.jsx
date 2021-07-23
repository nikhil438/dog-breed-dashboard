import React, { useState, useEffect } from 'react'
import { getDogsByBreedId, saveDog } from '../services/DogBreedService'
import Table from './Table'
import { CONFIG } from './config/AvblDogs'

const AvblDogs = props => {
    console.log('AvblDogs : ', props)

    const [dogs, setDogs] = useState([])

    useEffect(() => {
        (async () => {
            setDogs(await getDogsByBreedId(props.match.params.breed))
        })()
    }, [])

    const handleSave = dog => {
        setDogs(saveDog(dog, props.match.params.breed))
    }

    return (
        <div>
            <div className='AppBody'>
                <div className="card full-width">
                    <Table headers={CONFIG} rows={dogs} handleSave={handleSave} add edit />
                </div>
            </div>
        </div>
    )
}

export default AvblDogs