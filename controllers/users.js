const { response } = require('express')

const usersGet = (req, res = response) => {
  const { q, name = 'No name', apiKey, page = 1, limit } = req.query

  res.json({
    msg: 'get API - controller',
    q,
    name,
    apiKey,
    page,
    limit
  })
}

const usersPut = (req, res = response) => {
  const { id } = req.params

  res.json({
    msg: 'put API - controller',
    id
  })
}

const usersPost = (req, res = response) => {
  const { name, age } = req.body

  res.json({
    msg: 'post API - controller',
    name,
    age
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
