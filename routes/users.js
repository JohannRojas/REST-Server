const { Router } = require('express')
const { check } = require('express-validator')
const {
  usersGet,
  usersPut,
  usersPost,
  usersDelete,
  usersPatch
} = require('../controllers/users')
const { validateFields } = require('../middlewares/validate-fields')

const router = Router()

router.get('/', usersGet)

router.put('/:id', usersPut)
router.post('/', [
  check('name', 'Name is required').not().isEmpty(),
  check('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
  check('email', 'Email is required').isEmail(),
  check('rol', 'Rol is required').isIn(['ADMIN_ROLE', 'USER_ROLE']),
  validateFields
], usersPost)
router.delete('/', usersDelete)
router.patch('/', usersPatch)

module.exports = router
