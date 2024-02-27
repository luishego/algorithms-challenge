const randomString = function generateRandomString(length) {
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
    let result = "";
    const charsetLength = charset.length;
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charsetLength);
      result += charset[randomIndex];
    }
    return result;
  };
  
  const filterLowerUpperCaseSpecial = (strArr) => {
    let filteredChars;
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  
    const filteredUppers = strArr
      .filter((uppers) => uppercaseChars.includes(uppers))
      .sort();
    const filteredLowers = strArr
      .filter((lowers) => lowercaseChars.includes(lowers))
      .sort();
    const filteredNumbers = strArr
      .filter((numbers) => numberChars.includes(numbers))
      .sort();
    const filteredSpecial = strArr
      .filter((special) => specialChars.includes(special))
      .sort();
  
    filteredChars = [...filteredLowers, ...filteredUppers, ...filteredNumbers, ...filteredSpecial];
    return filteredChars;
  };
  
  function AlphanumericStringSort() {
    let sortedString;
    const newString = randomString(50).split("");
  
    const filteredChars = filterLowerUpperCaseSpecial(newString);
  
    sortedString = [...filteredChars];
  
    console.log(sortedString);
  }
  
  AlphanumericStringSort();
  