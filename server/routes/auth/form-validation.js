module.exports = {
  form: formValidation
}

function formValidation(req, res, next) {
  const errors = [];
  if (!req.body.email || !req.body.email.trim()) errors.push("Email can't be blank");
  if (!req.body.password || !req.body.password.trim()) errors.push("Password can't be blank");

  if (errors.length) {
    res.status(422).json({
      errors: errors
    })
  } else {
    next();
  }
}
