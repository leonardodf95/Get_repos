import {Router} from 'express';
import userRepository from './userRepository.routes';


const routes = Router()

routes.use('/', userRepository)

export default routes