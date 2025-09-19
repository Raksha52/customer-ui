const API_URL = "https://customer-service-efps.onrender.com"; // backend

// Get all customers
export const getAllCustomers = () => {
  return fetch(API_URL).then(res => res.json());
};

// Add new customer
export const addCustomer = (customer) => {
  return fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(customer)
  }).then(res => res.json());
};

// Delete customer
export const deleteCustomer = (id) => {
  return fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });
};
