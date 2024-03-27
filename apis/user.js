import express from "express"
const route = express.Router()

route.use('/', (req, res, next) => res.status(200).json('hello'))

export default route