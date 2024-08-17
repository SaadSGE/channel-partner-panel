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




export const formatKey = (key) => {
  return key
    .replace(/_/g, " ") // Replace underscores with spaces
    .replace(/\b\w/g, (l) => l.toUpperCase()); // Capitalize the first letter of each word
};
