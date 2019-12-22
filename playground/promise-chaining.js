require('../src/db/mongoose')
const User = require('../src/models/user')


//    5dfe8aab0848a71a2f21e95b

// User.findByIdAndUpdate('5dfe8aab0848a71a2f21e95b', {age: 10}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 10})
// }).then((result) => {
//         console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('5dfe8aab0848a71a2f21e95b', 11).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})