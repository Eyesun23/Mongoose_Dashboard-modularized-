var mongoose = require('mongoose');
var Mongoose = mongoose.model('Mongoose');

module.exports = {
  index: function(req, res) {
    Mongoose.find({}, function(err, mgoose){
        if(err){
            console.log(errors)
        } else {
            res.render('index', {mongoose: mgoose})
        }
    })
},

new: function(req, res) {
  res.render('new')
},

display: function(req, res) {
  Mongoose.find({ _id: req.params.id}, function(err, response){
    res.render('display', { mongoose: response[0] });
  })
},

create: function(req, res) {
  var mon = new Mongoose({name: req.body.name});
  m.save(function(err){
      if(err){
          console.log('You have an error')
      } else{
          console.log('You created a mongoose!')
          res.redirect('/')
      }
  })
},

edit: function(req, res) {
  Mongoose.find({ _id: req.params.id}, function(err, response){
    res.render('edit', { mongoose: response[0] });
  })
},

update: function(req, res) {
  Mongoose.update({ _id: req.params.id}, {name:req.body.name}, function(err){
      if(err){
          console.log('i have an error')
      } else {
          res.redirect('/')
      }
  })
},

destroy: function(req, res) {
  Mongoose.remove({ _id: req.params.id}, function(err){
      if(err){
          console.log('There is an Error')
      } else{
          console.log('Mongoose Deleted')
          res.redirect('/')
      }
    })
  }
}
