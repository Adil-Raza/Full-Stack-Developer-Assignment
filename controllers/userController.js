const pool = require('../service/database')

const userGet = async (req, res) => {
    try {
        const users = await pool.query('SELECT * FROM users');

        res.json(users.rows);
    } catch(err) {
        res.status(500).send('Internal Server Error')
    }
}

const userGetById = async (req, res) => {
    try {
        const { id } = req.params

        const user = await pool.query('SELECT * FROM users WHERE user_id = $1', [id]);
        console.log(user)

        res.json(user.rows[0]);
    } catch(err) {
        res.status(500).send('Internal Server Error')
    }
}

const userPost = async (req, res) => {
    try {
        const { name, email } = req.body;
        const newUser = await pool.query('INSERT INTO USERS (name, email) VALUES ($1, $2) RETURNING *', [name, email]);

        res.json(newUser.rows[0]);
    } catch(err) {
        res.status(500).send('Internal Server Error')
    }
}

const userPut = async (req, res) => {
    try {
        const { id } =  req.params
        const { name, email } = req.body

        const updatedUser = await pool.query('UPDATE users SET name = $1, email = $2 WHERE user_id = $3 RETURNING *', [name, email, id]);

        res.json(updatedUser.rows[0])
    } catch(err) {
        res.status(500).send('Internal Server Error')
    }
}

const userDelete = async (req, res) => {
    try {
        const { id } =  req.params

        await pool.query('delete from USERS where USER_ID = $1', [id]);

        res.json('User deleted successfully.')
    } catch(err) {
        res.status(500).send('Internal Server Error')
    }
}

module.exports = {
    userGet,
    userGetById,
    userPost,
    userPut,
    userDelete
}