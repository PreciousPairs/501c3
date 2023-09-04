
// Example function to validate new user data before saving to Firestore
const validateNewUser = (userData) => {
  if (!userData.email || !userData.username || !userData.role) {
    return false;  // Mandatory fields are missing
  }
  if (!/^\S+@\S+\.\S+$/.test(userData.email)) {
    return false;  // Email format is invalid
  }
  return true;
};
