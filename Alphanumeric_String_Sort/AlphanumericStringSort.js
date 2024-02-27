const generateRandomString = (length) => {
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
  const filterChars = (str, charSet) => {
    return str.filter((char) => charSet.includes(char)).sort();
  };
  const filterNumbers = (str) => {
    const numbers = str.filter((char) => !isNaN(char));
    const evens = numbers.filter((num) => num % 2 === 0).sort();
    const odds = numbers.filter((num) => num % 2 !== 0).sort();
    return [...odds, ...evens ];
  };
  
  function AlphanumericStringSort() {
    const newString = generateRandomString(50).split("");

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  
    const filteredLowers = filterChars(newString, lowercaseChars);
    const filteredUppers = filterChars(newString, uppercaseChars);
    const filteredNumbers = filterNumbers(newString, numberChars);
    const filteredSpecial = filterChars(newString, specialChars);
  
    const sortedString = [
      ...filteredLowers,
      ...filteredUppers,
      ...filteredNumbers,
      ...filteredSpecial,
    ];
  
    console.log(sortedString);
  }
  
  AlphanumericStringSort();
  