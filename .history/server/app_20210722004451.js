import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import 'express-async-errors';
import tweetsRouter from './router/tweets.js';
import authRouter from './router/auth.js';


const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));

app.use('/tweets',tweetsRouter);
app.use('/auth',authRouter);

app.use((req, res, next) => {  //마지막 부분에서 없는 요청이 들어왔을 때 핸들링해주는 부분
    res.sendStatus(404);
});

app.use((error, req, res, next) => { //error handler
    console.error(error);
    res.sendStatus(500);
});

app.listen(8080);
