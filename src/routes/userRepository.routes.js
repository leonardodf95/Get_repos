import {Router} from 'express'
import User from '../model/User.js';

const userRepository = Router();

userRepository.get('/:user', async (req, res) =>{
    try {
        const {page} = req.query
        const {user} = req.params;
        const repos = await User.getUserRepositorys(user, page)
        res.status(200).send(repos)

    } catch (error) {
        res.status(404).send(error.message)
    }
})

export default userRepository