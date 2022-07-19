import { gitHub } from "../config/GitHubAPI.js"

class User{
    static async getUserInfos(user){
        const response = await gitHub.get(`/${user}`)
        // console.log('Model response', response)
        return response.data
    }

    static async getUserRepositorys(user, page){
        const options = {
            params: {
                page: page || 1,
                per_page: 100
            }
        }
        const response = await gitHub.get(`/${user}/repos`, options)
        return response.data
    }
}

export default User