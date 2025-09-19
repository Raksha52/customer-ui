const API_URL = "https://customer-service-efps.onrender.com/customers";

// GET all customers
const getAll = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error("Failed to fetch customers");
  }
  return res.json();
};

// CREATE a customer
const create = async (customer) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  });

  if (!res.ok) {
    throw new Error("Failed to create customer");
  }

  // if backend sends JSON (like saved object), return it
  try {
    return await res.json();
  } catch {
    return {}; // fallback if no JSON body
  }
};

// DELETE a customer by ID
const remove = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete customer");
  }

  return true; // success flag
};

const CustomerService = { getAll, create, remove };
export default CustomerService;