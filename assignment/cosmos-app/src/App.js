import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import OrderManagement from './components/order-management';
import { CustomerManagement } from './components/customer-management';
import { InventoryManagement } from './components/inventory-management';

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <nav>
            <Navigation nav={"Order Management"} url={"/order-management"} />
            <Navigation nav={"Customer Management"} url={"/customer-management"} />
            <Navigation nav={"Inventory Management"} url={"/inventory-management"} />
          </nav>
        </div>

        <Routes>
          <Route path="/order-management" element={<OrderManagement/>}></Route>
          <Route path="/customer-management" element={<CustomerManagement/>}></Route>
          <Route path="/inventory-management" element={<InventoryManagement/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Navigation({nav, url}) {
  return (
    <li>
      <Link to={url}>{nav}</Link>
    </li>
  )
}

export default App;
