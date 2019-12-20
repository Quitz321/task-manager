// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionUrl = "mongodb://127.0.0.1:27017"
const databaseName = "task-manager"

MongoClient.connect(connectionUrl, { useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }
    const db = client.db(databaseName)

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5dfcbdbcac02d1060fb57f91")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
    
    db.collection('users').deleteMany({
        age: 34
    }).then((result) => {
        console.log(result)
    }).catch(() => {
        console.log(error)
    })
    


})

