import express from 'express';
import 'express-async-errors';

const tweets = [
{
    id: '1',
    text: '다들 화이팅',
    createdAt: Date.now.toString(),
    name: 'Bob',
    username: 'bob',
    url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
},
{
    id: '2',
    text: '다들 화이팅',
    createdAt: Date.now.toString(),
    name: 'Jaemin',
    username: 'jaemin',
    url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
},

];
const router = express.Router();

//GET /tweets
//GET/tweets?username:username
router.get('/',(req, res, next) => {
    const username = req.query.username;
    const data = username 
    ? tweets.filter((t)=> t.username === username) //have username
    : tweets;
    res.status(200).json(data);
});


//GET /tweets/:id
router.get('/:id',(req, res, next) => {
    const id = req.params.id;
    const tweet = tweets.find((t) => t.id === id);
    if(tweet) {
        res.status(200).json(tweet);
    } else {
        res.status(404).json({message: `Tweet id ${id}`) not found'});
    }
})
//POST /tweets
//PUT /tweets/:id
//DELETE /tweets/:id


export default router;
