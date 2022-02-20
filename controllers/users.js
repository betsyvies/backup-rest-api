const { response, request } = require('express');

const usersGet = (req = request, res = response) => {
  const { page = 1, limit } = req.query;
  res.json({
    msg: 'get API - controller',
    page,
    limit,
  })
};

const usersPost = (req, res = response) => {
  const { name, age } = req.body;
  res.json({
    msg: 'post API - controller',
    name,
    age,
  })
};

const usersPatch = (req, res = response) => {
  const { id } = req.params;
  const { name, age } = req.body;

  res.json({
    msg: 'patch API - controller',
    id,
    name,
    age
  })
};

const usersDelete = (req, res = response) => {
  res.json({
    msg: 'delete API - controller',
  })
};

module.exports = {
  usersGet,
  usersPost,
  usersPatch,
  usersDelete,
}