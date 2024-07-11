const mongoose = require('mongoose')
import chalk from 'chalk';
mongoose.connect(process.env.atlas).then(
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 10000 // 10 seconds timeout
  console.log(chalk.yellow('[DATABASE]') + chalk.green(' Connected Successfully'))
)
