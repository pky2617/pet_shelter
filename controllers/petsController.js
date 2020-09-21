import Pet from '../src/models/pets';

export const petCreatePage = async (req, res) => {
    try {
    const newPet = new Pet(req.body)
    await newPet.save()
    res.json({ pet: newPet }) // Returns the new user that is created in the database
    } catch(error) {
    console.error(error)
    res.json(error)
    }
    };

export const petsPage = async (req, res) => {
     try {
        const pets = await Pet.findAll({
            
        }
        )
        res.json({ pets })
    } catch (error) {
        console.error(error)
        res.json(error)
    }
};
export const petDetailsPage = async (req, res) => {
    const petId = req.params.petId;
    console.log(`Id from param is ${petId}`);
    try {
        const pet = await Pet.findAll({
            where: {
                id: petId
            }
        }
        )
        res.json({ pet })
    } catch (error) {
        console.error(error)
        res.json(error)
    }
};

