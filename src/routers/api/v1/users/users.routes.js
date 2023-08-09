const userRefreshTokenController = require('../../../../controllers/userRefreshToken.controller');
const createUser = require('../../../../controllers/v1/users/createUser.controller');
const userLoginController = require('../../../../controllers/v1/users/userLogin.controller');

const router = require('express').Router();

router.get('/', function (req, res) {
    res.send('Users Routes');
});

router.post('/createuser', createUser);
router.get('/gettoken', userRefreshTokenController);
router.post('/login', userLoginController);

module.exports = router;