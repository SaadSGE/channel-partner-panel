// 👉 IsEmpty
export const isEmpty = value => {
  if (value === null || value === undefined || value === '')
    return true

  return !!(Array.isArray(value) && value.length === 0)
}

// 👉 IsNullOrUndefined
export const isNullOrUndefined = value => {
  return value === null || value === undefined
}

// 👉 IsEmptyArray
export const isEmptyArray = arr => {
  return Array.isArray(arr) && arr.length === 0
}

// 👉 IsObject
export const isObject = obj => obj !== null && !!obj && typeof obj === 'object' && !Array.isArray(obj)

// 👉 IsToday
export const isToday = date => {
  const today = new Date()

  return (date.getDate() === today.getDate()
        && date.getMonth() === today.getMonth()
        && date.getFullYear() === today.getFullYear())
}

export const containsString = (fullString, stringToContain) => {
  if (!fullString || !stringToContain) return false
  return fullString.toLowerCase().includes(stringToContain.toLowerCase())
}

export const getUserRole = () => {
  const userData = useCookie('userData').value;

  if (!userData) return null;

  try {

    return userData.main_role || null; // Return the role, or null if not found
  } catch (error) {
    console.error('Error parsing userData cookie:', error);
    return null;
  }
};


export const formatKey = (key) => {
  return key
    .replace(/_/g, " ") // Replace underscores with spaces
    .replace(/\b\w/g, (l) => l.toUpperCase()); // Capitalize the first letter of each word
}
// 👉 Handle error response
export const handleErrorResponse = (error) => {
  let firstErrorMessage = 'An unexpected error occurred';

  if (error.response && error.response._data) {
    const { status, message, data } = error.response._data;

    // Check if the response indicates a validation error
    if (!status && message === 'Validation Error') {
      // If `data` is an array, extract the first error message
      if (Array.isArray(data) && data.length > 0) {
        firstErrorMessage = data[0];
      }
    } else {
      // If it's a different kind of error, use the provided message or a generic one
      firstErrorMessage = message || 'An unexpected error occurred';
    }
  }

  // Log the error response data for debugging
  if (error.response) {
    console.error('Error response data:', error.response._data);
  }

  // Re-throw the first error message as a new Error
  throw new Error(firstErrorMessage);
};

