import {Router} from 'express'
import User from '../model/User.js';

const userInfo = Router();

userInfo.get('/:user', async (req, res) =>{
    try {
        const {user} = req.params;
        const info = await User.getUserInfos(user)
        console.log('info', info)
        res.status(200).send(info)

    } catch (error) {
        res.status(404).send(error.message)
    }
})

export default userInfo