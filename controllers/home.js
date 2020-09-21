import { testEnvironmentVariable } from '../src/config';

export const indexPage = (req, res) => res.status(200).json({ message: testEnvironmentVariable });