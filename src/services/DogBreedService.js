import { getObject, setObject } from '../DB/LocalStorage'
import { DOG_BREEDS, META_DATA } from '../Constants'

export const getDogBreeds = () => {
    return getObject(DOG_BREEDS)
}

export const getDogsByBreedId = id => {
    return getObject(DOG_BREEDS).filter(each => each.id == id)[0].avblDogs
}

export const getBreeds = () => {
    return Array.from(new Set(getObject(DOG_BREEDS).map(each => each.breedGroup).filter(each => each && each.trim().length > 0)))
}

export const saveDog = (dog, id) => {
    let avblDogs = []
    const DogBreeds = getObject(DOG_BREEDS)
    DogBreeds.forEach(each => {
        if (each.id == id) {
            if (dog.id) {
                each.avblDogs.forEach((eachDog, ind) => {
                    if (eachDog.id == dog.id) {
                        each.avblDogs[ind] = { ...each.avblDogs[ind], ...dog }
                        console.log(each.avblDogs)
                    }
                })
            } else {
                const metaData = getObject(META_DATA)
                each.avblDogs.unshift({ ...dog, breed: each.breedGroup, id: metaData.dogsCount++ })
                setObject(META_DATA, metaData)
            }
            avblDogs = each.avblDogs
        }
    })
    setObject(DOG_BREEDS, DogBreeds)
    return avblDogs
}