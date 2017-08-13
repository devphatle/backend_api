var db = require('./user.json');

module.exports =  {
    'secret' : 'chuchothongminh', 
    'url' : `mongodb://${db.name}:${db.password}@ds040089.mlab.com:40089/backend`
}