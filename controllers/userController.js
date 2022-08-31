const express = require('express');

function getAllUsers(req, res) {
  res.status(500).json({
    status: 'error',
    requestedAt: req.requestTime,
    message: 'This route is not yet defined',
  });
}

function getUser(req, res) {
  res.status(500).json({
    status: 'error',
    requestedAt: req.requestTime,
    message: 'This route is not yet defined',
  });
}

function updateUser(req, res) {
  res.status(500).json({
    status: 'error',
    requestedAt: req.requestTime,
    message: 'This route is not yet defined',
  });
}

function createUser(req, res) {
  res.status(500).json({
    status: 'error',
    requestedAt: req.requestTime,
    message: 'This route is not yet defined',
  });
}

function deleteUser(req, res) {
  res.status(500).json({
    status: 'error',
    requestedAt: req.requestTime,
    message: 'This route is not yet defined',
  });
}

module.exports.getAllUsers = getAllUsers;
module.exports.getUser = getUser;
module.exports.createUser = createUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
