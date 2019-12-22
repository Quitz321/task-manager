require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5dfea3d678bd573befe246d7').then((doc) => {
//     console.log(doc)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const deleted = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('5dfead6f0aa5e0445a2fdae3').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})