import Model from '../src/models/model';

const petModel = new Model('pets');
export const petPageOld = async (req, res) => {
  try {
    const data = await petModel.select('name, type, breed, location, latitude, longitude');
    res.status(200).json({ pets: data.rows });
  } catch (err) {
    res.status(200).json({ pets: err.stack });
  }
};