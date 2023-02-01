const mongoose = require('mongoose')

const dbConnection = async () => {
  try {
    mongoose.set('strictQuery', false)
    await mongoose.connect(process.env.MONGODB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true
      // useCreateIndex: true,
      // useFindAndModify: false
    })

    console.log('🚀: Database online')
  } catch (error) {
    console.log(error)
    // throw new Error('Error a la hora de iniciar la BD')
  }
}

module.exports = {
  dbConnection
}
