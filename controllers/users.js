const { response } = require('express')
const User = require('../models/user')

const bcryptjs = require('bcryptjs')
const { validationResult } = require('express-validator')

const usersGet = (req, res = response) => {
  const body = req.query

  res.json({
    msg: 'get API - controller',
    body
  })
}

const usersPut = (req, res = response) => {
  const { id } = req.params

  res.json({
    msg: 'put API - controller',
    id
  })
}

const usersPost = async (req, res = response) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json(errors)
  }

  const { name, email, password, rol } = req.body
  const user = new User({ name, email, password, rol })

  const emailExists = await User.findOne({ email })
  if (emailExists) {
    return res.status(400).json({
      msg: 'Email already exists'
    })
  }

  // Encrypt password
  const salt = bcryptjs.genSaltSync()
  user.password = bcryptjs.hashSync(password, salt)

  await user.save()

  res.json({
    msg: 'post API - controller',
    user
  })
}

const usersDelete = (req, res = response) => {
  res.json({
    msg: 'delete API - controller'
  })
}

const usersPatch = (req, res = response) => {
  res.json({
    msg: 'patch API - controller'
  })
}

module.exports = {
  usersGet,
  usersPut,
  usersPost,
  usersDelete,
  usersPatch
}
