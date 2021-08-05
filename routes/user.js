const express = require('express')
const router = express.Router()

const {
    userGet,
    userGetById,
    userPost,
    userPut,
    userDelete
} = require('../controllers/userController')

router.get('/', userGet)
router.get('/:id', userGetById)
router.post('/', userPost)
router.put('/:id', userPut)
router.delete('/:id', userDelete)

module.exports = router