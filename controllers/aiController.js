const askAI = require('../services/askAI');
const httpStatusText = require('../utils/httpStatusText');
const asyncW = require('../utils/asyncWrapper');
const err = require('../utils/appError');

const postMessage = asyncW(async (req, res, next) => {
    const {message} = req.body;
    if (!message) {
        return next(err.create(
            'a message must be provided',
            httpStatusText.ERROR,
            400
        ))
    }
    const reply = await askAI(message);
    res.status(200).json({
        status: httpStatusText.SUCCESS,
        reply: reply
    });
});

module.exports = {
    postMessage
}