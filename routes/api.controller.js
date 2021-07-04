function httpGetResponseFromDate(req, res) {
    let date = undefined;

    if (req.params.date.includes('-')) 
        date = new Date(req.params.date)
    else 
        date = new Date(+req.params.date);

    if (date.toString() === 'Invalid Date') {
        return res.status(400).json({
            error: 'Invalid Date'
        });
    }

    let unixFormat = date.valueOf();
    let utcFormat = `${date.toUTCString()}`

    return res.status(200).json({
        unix: unixFormat,
        utc: utcFormat
    });
}

function httpGetEmptyParameter(req, res) {
    let date = new Date();

    let unixFormat = date.valueOf();
    let utcFormat = `${date.toUTCString()}`

    return res.status(200).json({
        unix: unixFormat,
        utc: utcFormat
    });
}

module.exports = {
    httpGetResponseFromDate,
    httpGetEmptyParameter
}