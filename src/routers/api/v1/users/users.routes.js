const createUser = require('../../../../controllers/v1/users/createUser.controller');

const router = require('express').Router();

router.get('/', function (req, res) {
    res.send('Users Routes');
});

router.post('/createuser', createUser);

module.exports = router;