import { testEnvironmentVariable } from '../src/config';

exports.indexPage = (req, res) => res.status(200).json({ message: testEnvironmentVariable });