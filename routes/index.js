var express = require('express');
var router = express.Router();

const authMiddleware = (req, res, next) => {
  if(req.isAuthenticated()) { // ログインしてるかチェック
    next();
  } else {
    res.redirect(302, '/login');
  }
};

/* GET home page. */
router.get('/', authMiddleware, function(req, res, next) {
  const data = {
    user_name: req.user.name,
  }
  res.render('index', data);
});

module.exports = router;
