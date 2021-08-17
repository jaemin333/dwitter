import express from 'express';
import 'express-async-errors';
import * as tweetController from '../controller/tweet.js';

const router = express.Router();

//GET /tweets
//GET/tweets?username:username
router.get('/', tweetController.getTweets);



//GET /tweets/:id
router.get('/:id',tweetController.getTweet);
//POST /tweets
router.post('/', tweetController.createTweet);
//PUT /tweets/:id
router.put('/:id',(req, res, next) => {
    const id = req.params.id;
    const text = req.body.text;
    const tweet = tweetRepository.update(id,text) //tweets에 있는 것들을 다 돌면서
    if(tweet){
        res.status(200).json(tweet);
    } else {
        res.status(404).json({message: `Tweet id ${id} not found`});
    }
})
//DELETE /tweets/:id
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    tweets = tweetRepository.remove(id);
    res.sendStatus(204);
})


export default router;
