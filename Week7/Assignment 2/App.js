import React from "react";

function App() {
  const heading = <h1>Office Space Rental Listings</h1>;

  const office = {
    name: "Regus CoWork",
    rent: 55000,
    address: "3rd Floor, Business Tower, Mumbai",
    image:
      "https://images.unsplash.com/photo-1593642634367-d91a135587b5?fit=crop&w=500&q=60",
  };

  const officeList = [
    {
      name: "WeWork",
      rent: 45000,
      address: "DLF Cyber City, Gurgaon",
      image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?fit=crop&w=500&q=60",
    },
    {
      name: "Awfis",
      rent: 70000,
      address: "Kharadi, Pune",
      image: "https://images.unsplash.com/photo-1612831455543-254c18ba1b3b?fit=crop&w=500&q=60",
    },
    {
      name: "91SpringBoard",
      rent: 62000,
      address: "Koramangala, Bangalore",
      image: "https://images.unsplash.com/photo-1617692855027-e3f9090d1f6d?fit=crop&w=500&q=60",
    },
  ];

  const getRentStyle = (rent) => ({
    color: rent > 60000 ? "green" : "red",
    fontWeight: "bold",
  });

  return (
    <div style={{ textAlign: "center" }}>
      {heading}

      <h2>Featured Office</h2>
      <div>
        <img src={office.image} alt={office.name} width="300" />
        <h3>{office.name}</h3>
        <p style={getRentStyle(office.rent)}>Rent: ₹{office.rent}</p>
        <p>Address: {office.address}</p>
      </div>

      <h2>Available Offices</h2>
      {officeList.map((o, i) => (
        <div key={i} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <img src={o.image} alt={o.name} width="300" />
          <h3>{o.name}</h3>
          <p style={getRentStyle(o.rent)}>Rent: ₹{o.rent}</p>
          <p>Address: {o.address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
