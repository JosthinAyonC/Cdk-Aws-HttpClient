const https = require("https");

exports.handler = async (event, context) => {
    try {
        const body = JSON.parse(event.body);

        console.log(await sendPost(body));

        return {
            statusCode: 200,
            body: JSON.stringify({ mensaje: "Se ha enviado la información correctamente." }),
        };

    } catch (error) {
        console.error('Error en la solicitud:', error);

        return {
            statusCode: 500,
            body: JSON.stringify({ mensaje: error.message, detalle: "Algo salió mal en el consumo del API." }),
        };
    }
};


async function sendPost(body) {

    const url = "https://6553ca805449cfda0f2f2f7c.mockapi.io/lambda/api/main";

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    return new Promise((resolve, reject) => {
        const req = https.request(url, options, res => {
            let rawData = '';

            res.on('data', chunk => {
                rawData += chunk;
            });

            res.on('end', () => {
                try {
                    resolve(JSON.parse(rawData));
                } catch (err) {
                    reject(new Error(err));
                }
            });
        });

        req.on('error', err => {
            reject(new Error(err));
        });

        // 👇️ write the body to the Request object
        req.write(JSON.stringify(body));
        req.end();
    });
}