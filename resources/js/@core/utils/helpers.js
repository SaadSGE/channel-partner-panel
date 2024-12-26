// 👉 IsEmpty
export const isEmpty = (value) => {
  if (value === null || value === undefined || value === "") return true;

  return !!(Array.isArray(value) && value.length === 0);
};

// 👉 IsNullOrUndefined
export const isNullOrUndefined = (value) => {
  return value === null || value === undefined;
};

// 👉 IsEmptyArray
export const isEmptyArray = (arr) => {
  return Array.isArray(arr) && arr.length === 0;
};

// 👉 IsObject
export const isObject = (obj) =>
  obj !== null && !!obj && typeof obj === "object" && !Array.isArray(obj);

// 👉 IsToday
export const isToday = (date) => {
  const today = new Date();

  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

export const containsString = (fullString, stringToContain) => {
  if (!fullString || !stringToContain) return false;

  return fullString.toLowerCase().includes(stringToContain.toLowerCase());
};

export const getUserRole = () => {
  const userData = useCookie("userData").value;

  if (!userData) return null;

  try {
    return userData.main_role || null; // Return the role, or null if not found
  } catch (error) {
    console.error("Error parsing userData cookie:", error);

    return null;
  }
};

export const formatKey = (key) => {
  return key
    .replace(/_/g, " ") // Replace underscores with spaces
    .replace(/\b\w/g, (l) => l.toUpperCase()); // Capitalize the first letter of each word
};

// 👉 Handle error response
export const handleErrorResponse = (error) => {
  let firstErrorMessage = "An unexpected error occurred";

  if (error.response?.data || error.response?._data) {
    const { status, message, data } =
      error.response._data || error.response.data;

    // Immediately throw an error if status 409 is encountered
    if (!status && error.response.status === 409) {
      throw new Error(message || "An unexpected conflict occurred");
    }

    if (Array.isArray(data) && data.length > 0) {
      firstErrorMessage = data[0];
    } else {
      firstErrorMessage = message || "An unexpected error occurred";
    }
  }

  console.error("Error response data:", error.response?._data);

  throw new Error(firstErrorMessage);
};

// Application Status Mapping with colors and names
export const applicationStatuses = {
  0: { text: "Application Processing", color: "primary" },
  1: { text: "Application Submitted", color: "success" },
  2: { text: "Pending Docs", color: "warning" },
  3: { text: "Offer Issue Conditional", color: "info" },
  4: { text: "Offer Issue Unconditional", color: "info" },
  5: { text: "Need Payment", color: "warning" },
  6: { text: "CAS Issued", color: "success" },
  7: { text: "Additional Doc Needed", color: "warning" },
  8: { text: "Refund Required", color: "danger" },
  9: { text: "Application Rejected", color: "danger" },
  10: { text: "Session Expired", color: "secondary" },
  11: { text: "Doc Received", color: "success" },
  12: { text: "Partial Payment", color: "warning" },
};

export const resolveStatusColor = (status) => {
  return applicationStatuses[status]?.color || "secondary";
};

export const resolveStatusName = (status) => {
  return applicationStatuses[status]?.text || "Unknown Status";
};

// Get status info (text and color) from status code
export const getApplicationStatusInfo = (statusCode) => {
  return (
    applicationStatuses[statusCode] || {
      text: "Unknown Status",
      color: "default",
    }
  );
};

// Define lead statuses as an array of objects
// export const leadStatuses = [
//   { id: 0, text: "New Lead", color: "status-color-1" },
//   { id: 1, text: "Contacted", color: "status-color-2" },
//   { id: 2, text: "Interested", color: "status-color-3" },
//   { id: 3, text: "Qualified", color: "status-color-4" },
//   { id: 4, text: "Proposal Sent", color: "status-color-5" },
//   { id: 5, text: "Negotiation", color: "status-color-6" },
//   { id: 6, text: "Closed Won", color: "status-color-7" },
//   { id: 7, text: "Closed Lost", color: "status-color-8" },
//   { id: 8, text: "Follow-Up", color: "status-color-9" },
//   { id: 9, text: "Reassigned", color: "status-color-10" },
//   { id: 10, text: "Pending", color: "status-color-11" },
//   { id: 11, text: "In Progress", color: "status-color-12" },
//   { id: 12, text: "On Hold", color: "status-color-13" },
//   { id: 13, text: "Completed", color: "status-color-14" },
//   { id: 14, text: "Archived", color: "status-color-15" },
// ];

// // Get status color by status ID
// export const resolveLeadStatusColor = (statusId) => {
//   const status = leadStatuses.find((status) => status.id === statusId);
//   return status ? status.color : "#000";
// };

// // Get status name by status ID
// export const resolveLeadStatusName = (statusId) => {
//   const status = leadStatuses.find((status) => status.id === statusId);
//   return status ? status.text : "Unknown Status";
// };
