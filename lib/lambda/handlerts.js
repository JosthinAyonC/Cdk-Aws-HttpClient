"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
const node_fetch_1 = require("node-fetch");
const get = async (event, context) => {
    try {
        const response = await (0, node_fetch_1.default)('https://6553ca805449cfda0f2f2f7c.mockapi.io/lambda/api/main');
        const data = await response.json();
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    }
    catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        };
    }
};
exports.get = get;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlcnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGFuZGxlcnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUErQjtBQUV4QixNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQUUsS0FBVSxFQUFFLE9BQVksRUFBRSxFQUFFO0lBRWxELElBQUk7UUFDQSxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUEsb0JBQUssRUFBQyw2REFBNkQsQ0FBQyxDQUFDO1FBQzVGLE1BQU0sSUFBSSxHQUFHLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRW5DLE9BQU87WUFDSCxVQUFVLEVBQUUsR0FBRztZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztTQUM3QixDQUFDO0tBQ0w7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNaLE9BQU87WUFDSCxVQUFVLEVBQUUsR0FBRztZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztTQUM5QixDQUFDO0tBQ0w7QUFFTCxDQUFDLENBQUE7QUFqQlksUUFBQSxHQUFHLE9BaUJmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ25vZGUtZmV0Y2gnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldCA9IGFzeW5jIChldmVudDogYW55LCBjb250ZXh0OiBhbnkpID0+IHtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vNjU1M2NhODA1NDQ5Y2ZkYTBmMmYyZjdjLm1vY2thcGkuaW8vbGFtYmRhL2FwaS9tYWluJyk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3RhdHVzQ29kZTogMjAwLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxyXG4gICAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN0YXR1c0NvZGU6IDUwMCxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZXJyb3IpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbn0iXX0=