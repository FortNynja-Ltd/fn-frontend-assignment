const getIntInRange = (min, max) => {
  return parseInt(Math.random() * (max - min) + min, 10)
}

const hasError = () => {
  // Emulate random server error which occurs once every 100 calls.
  return getIntInRange(1, 100) !== 1
}

module.exports = (_req, res, next) => {
  if (hasError()) {
    return res.sendStatus(500)
  }

  next()
}
