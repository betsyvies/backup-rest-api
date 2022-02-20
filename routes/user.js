const { Router} = require('express');
const { 
  usersGet,
  usersPost,
  usersPatch,
  usersDelete,
} = require('../controllers/users');

const router = Router();

router.get('/', usersGet);

router.post('/', usersPost);

router.patch('/:id', usersPatch);

router.delete('/', usersDelete);

module.exports = router;