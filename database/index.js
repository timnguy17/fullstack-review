const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  repoId: {type: Number, unique: true},
  repoName: String,
  userName: String,
  forks: Number,
  url: String
});

//compiles model
let Repo = mongoose.model('Repo', repoSchema);

let save = (repo, callback) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  // console.log("Here is repo data", repo)
  Repo.find({repoId: repo.id}, (err, arr) => {
    // console.log(arr)
    if (err) {
      callback(err, null);
    } else if (arr.length > 0) {
      // console.log(arr)
      callback(null);
    } else {

      let currentRepo = new Repo({
        repoId: repo.id,
        repoName: repo.name,
        userName: repo.owner.login,
        forks: repo.forks,
        url: repo.html_url
      })

      currentRepo.save((err) => {
        if (err) {
          console.log('err')
          callback(err)
        }
      })
    }
  })
};

module.exports.save = save;

