//Return un JSON
export const success = (message, data) => {
    return {
    message: message,
    data: data,
    };
};