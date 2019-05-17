const pool = require('./pool.js');

//GET specific activities

const getSpecificActivities = (request, response) => {
    const activity = request.params.majorActivity;
    const query = {
        text: 'SELECT activity, "MET" FROM public."MET_english" WHERE "major heading" = $1',
        values: [activity]
    };

    pool.query(query, (error, results) => {
        if (error) {
            throw error;
        };
        response.status(200).json(results.rows);
        
    });
};

module.exports = {
    getSpecificActivities
};