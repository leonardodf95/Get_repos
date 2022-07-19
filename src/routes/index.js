import {Router} from 'express';
import userRepository from './userRepository.routes.js';
import userInfo from './Users.routes.js';


const routes = Router()

routes.use('/', userInfo)
routes.use('/repos', userRepository)

export default routes