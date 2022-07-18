import {Router} from 'express'
import { gitHub } from '../config/GitHubAPI.js';

const userRepository = Router();

userRepository.get('/:user', async (req, res) =>{
    try {
        const {user} = req.params;
        const repos = await gitHub.get(`/${user}/repos`)
        res.status(200).send(repos.data)

    } catch (error) {
        res.status(404).send('Usuário não encontrado')
    }
})

export default userRepository