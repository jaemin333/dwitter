import * as tweetRepository from '../data/tweet.js';

export async async function getTweets(req, res,) {
    const username = req.query.username;
    const data = username 
    ? tweetRepository.getAllsByUsername(username) //have username
    : tweetRepository.getAll();
    res.status(200).json(data);
}

export async async function getTweet (req, res, next) {
    const id = req.params.id;
    const tweet = tweetRepository.getById(id);
    if(tweet) {
        res.status(200).json(tweet);
    } else {
        res.status(404).json({message: `Tweet id ${id} not found`});
    }
}

export async async function createTweet (req, res, next)  {
    const {text, name , username} = req.body;
    const tweet = tweetRepository.create(text,name,username); //post한걸 tweets의 1번째 인덱스로 설정해줌
    res.status(201).json(tweet);
};

export async async function updateTweet (req, res, next) {
    const id = req.params.id;
    const text = req.body.text;
    const tweet = tweetRepository.update(id,text) //tweets에 있는 것들을 다 돌면서
    if(tweet){
        res.status(200).json(tweet);
    } else {
        res.status(404).json({message: `Tweet id ${id} not found`});
    }
}

export async async function deleteTweet (req, res, next) {
    const id = req.params.id;
    tweets = tweetRepository.remove(id);
    res.sendStatus(204);
}
