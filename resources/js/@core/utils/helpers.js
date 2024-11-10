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

// Get color based on status code
export const getLeadStatusColor = (status) => {
  const statusColors = {
    1: "status-color-1",
    2: "status-color-2",
    3: "status-color-3",
    4: "status-color-4",
    5: "status-color-5",
    6: "status-color-6",
    7: "status-color-7",
    8: "status-color-8",
    9: "status-color-9",
    10: "status-color-10",
    11: "status-color-11",
    12: "status-color-12",
    13: "status-color-13",
    14: "status-color-14",
    15: "status-color-15",
  };
  return statusColors[status] || "default-status-color";
};
// Function to get the status text based on status code
export const getLeadStatus = (status) => {
  const statusTexts = {
    1: "New Lead",
    2: "Contacted",
    3: "Interested",
    4: "Qualified",
    5: "Proposal Sent",
    6: "Negotiation",
    7: "Closed Won",
    8: "Closed Lost",
    9: "Follow-Up",
    10: "Reassigned",
    11: "Pending",
    12: "In Progress",
    13: "On Hold",
    14: "Completed",
    15: "Archived",
  };
  return statusTexts[status] || "Unknown Status";
};
