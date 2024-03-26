import config from "../config/config.js"

import userRoute from "./user.js" 

const route = (app) => {
    app.use(`${config.pathApi}/user`, userRoute)
}

export default route