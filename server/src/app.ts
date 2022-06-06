import express from 'express';
import config from 'config';
import connect from './utils/connect';
import loger from './utils/logger';
import routes from './routes/routes';
import deserializeUser from './middleware/deserializeUser'
const PORT = config.get<number>('port')

const app = express();

app.use(express.json())

app.use(deserializeUser);

app.listen(PORT, async () => {
    
    loger.info(`App is running at http://localhost:${PORT}`)

    await connect();

    routes(app)

})

