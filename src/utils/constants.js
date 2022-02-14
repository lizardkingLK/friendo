module.exports = {
    BackgroundColor: "#000000",
    CharLimit: 152,
    OutputFormat: "image/png;base64",
    GetId: (length) => {
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    },
};