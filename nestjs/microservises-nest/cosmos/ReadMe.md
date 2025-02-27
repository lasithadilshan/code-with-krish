### **Use Case: Order Management System**

- Customers can place orders.
- Orders should check inventory stock before confirmation.
- Each customer can have multiple orders.

---

### **Microservices & Their Responsibilities:**

1️⃣ **Order Service**

- Handles order creation and tracking.
- Calls `Inventory Service` to check stock availability.
- Calls `Customer Service` to validate customer existence.
- Stores order details and maintains a one-to-many relationship:
  - **One customer → Many orders**
  - **One order → Many order items**

2️⃣ **Inventory Service** _(Previously Product Service)_

- Manages product catalog and stock levels.
- Reduces stock when an order is placed.
- Provides product details to `Order Service`.

3️⃣ **Customer Service**

- Manages customer profiles.
- Provides customer details to `Order Service`.

---

### **High-Level Flow**

1. Customer places an order via `Order Service`.
2. `Order Service` fetches customer details from `Customer Service`.
3. `Order Service` checks stock via `Inventory Service`.
4. If stock is available:
   - `Order Service` confirms the order.
   - `Inventory Service` updates stock.
   - `Order Service` stores order details.
   - `Order Service` returns a **success response** to the customer.
---