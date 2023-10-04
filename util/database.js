const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
  MongoClient.connect(
<<<<<<< HEAD
    'mongodb+srv://revanthyadav13:Admission%4010@cluster0.ybysmcy.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp'
  )
    .then(client => {
      console.log('Connected!');
      _db = client.db();
      callback();
=======
    'mongodb+srv://maximilian:9u4biljMQc4jjqbe@cluster0-ntrwp.mongodb.net/shop?retryWrites=true'
  )
    .then(client => {
      console.log('Connected!');
      _db=client.db();
      callback(client);
>>>>>>> origin/main
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

<<<<<<< HEAD
const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
=======
const getDb=()=>{
  if(_db){
    return _db;
  }
  throw 'No database Found!'
}

exports.mongoConnect = mongoConnect;
exports.getDb=getDb;
>>>>>>> origin/main
