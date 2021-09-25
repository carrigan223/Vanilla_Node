/**
 * function getReqData is taking a single parameter 'req'
 * to listen to the data sent by client then return data
 */

const getReqData = (req) => {
    return new Promise((resolve, reject) => {
        try {
            let body = "";
            //listen to datasent by client
            req.on("data", (chunk) => {
                //append to body as string
                body += chunk.toString();
            });
            //listen till the end
            req.on("end", () => {
                //send back the data
                resolve(body);
            });
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = { getReqData };