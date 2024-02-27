


const stringArr = function generateRandomString(length) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    let result = '';
    const charsetLength = charset.length;
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charsetLength);
        result += charset[randomIndex];
    }
    return result;
}

function AlphanumericStringSort(){
    console.log(stringArr(10));
}

AlphanumericStringSort();