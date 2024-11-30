export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateAge = (age: string): boolean => {
  const ageNum = parseInt(age, 10);
  return !isNaN(ageNum) && ageNum > 0 && ageNum <= 18;
};

export const validatePostalAddress = (address: string): boolean => {
  return address.length >= 10;
};