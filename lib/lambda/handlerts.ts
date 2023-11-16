import fetch from 'node-fetch';

export const get = async (event: any, context: any) => {

    try {
        const response = await fetch('https://6553ca805449cfda0f2f2f7c.mockapi.io/lambda/api/main');
        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        };
    }

}