import React, { useState } from "react";
import AddCustomer from "./components/AddCustomer";
import CustomerList from "./components/CustomerList";

function App() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div>
      <h1>Customer Management</h1>
      <AddCustomer onAdd={() => setRefresh(!refresh)} />
      <CustomerList key={refresh} />
    </div>
  );
}

export default App;
