import {Router} from 'express';
import userRepository from './userRepository.routes.js';


const routes = Router()

routes.use('/', userRepository)

export default routes