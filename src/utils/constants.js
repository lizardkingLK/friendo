module.exports = {
    BackgroundColor: "#000000",
    CharLimit: 2048,
    OutputFormat: "image/png;base64",
    GetId: (length) => {
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    },
    GetSize: (length) => {
        if (length > 0 && length <= 152) {
            return "smallDisplayText";
        } else if (length > 152 && length <= 2048) {
            return "largeDisplayText";
        }
    }
};