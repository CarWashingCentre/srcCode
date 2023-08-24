export const validateAlphabets = (value) => {
    return /^[A-Za-z]+$/.test(value);
  };

  export const validateEmail = (value) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(value);
  };

  export const validateContactNumber = (value) => {
    return /^\d{10}$/.test(value);
  };

  export const validateZipCode = (value) => {
    return /^[0-9]{6}$/i.test(value);
  };
  