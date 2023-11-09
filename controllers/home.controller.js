
const home = (req, res) => {
  res.render('index', {
    title: 'Projects'
  })
}

const our = (req, res ) => {
  res.send('our');
}

const createProject = (req, res) => {
  res.render('createProject', {
    title: 'Create Project'
  })
}

module.exports = {
  home,
  our,
  createProject
};