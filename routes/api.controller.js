function httpGetResponseFromDate(req, res) {
    const request = req.params.date;

    const isNumber = Number(request) === +request;

    if (!request) {
        const date = Date.now();
        let final = new Date(date);
        return res.status(200).json({
            unix: final.getTime(),
            utc: final.toUTCString()
        });
    }
    else if (isNumber) {
        const date = new Date(+request);
        return res.status(200).json({
            unix: date.getTime(),
            utc: date.toUTCString()
        });
    }
    else if (!isNumber) {
        if (new Date(request).toString() === 'Invalid Date') {
            return res.status(400).json({
                error: 'Invalid Date'
            });
        }
        else {
            const date = new Date(request);
            return res.status(200).json({
                unix: date.getTime(),
                utc: date.toUTCString()
            });
        }
    }
}

module.exports = {
    httpGetResponseFromDate
}