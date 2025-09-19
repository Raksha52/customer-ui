import React, { useEffect, useState } from "react";
import { getAllCustomers, deleteCustomer } from "../services/CustomerService";

function CustomerList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = async () => {
    const data = await getAllCustomers();
    setCustomers(data);
  };

  const handleDelete = async (id) => {
    await deleteCustomer(id);
    loadCustomers();
  };

  return (
    <div>
      <h2>Customer List</h2>
      <ul>
        {customers.map((c) => (
          <li key={c.id}>
            {c.name} - {c.email} - {c.phone}
            <button onClick={() => handleDelete(c.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomerList;
