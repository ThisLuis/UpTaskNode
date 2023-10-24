
const home = (req, res) => {
  res.render('index', {
    title: 'Projects'
  })
}

const our = (req, res ) => {
  res.render('our');
}

module.exports = {
  home,
  our
};