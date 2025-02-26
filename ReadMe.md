# Basic Node JS Project with Krish
**Author**: Lasitha Thilakarathna  

A REST API for performing numerical operations like min/max, averaging, sorting, and counting occurrences. Built with Express.js.

## 🚀 Features  
### 1. **GET `/number/min`**  
- **Description**: Find the smaller of two numbers  
- **Parameters**:  
  - `num1`: Number  
  - `num2`: Number  
- **Example**:  
  ```http
  GET /number/min?num1=15&num2=25
  ```
  **Response**:  
  ```json
  { "min": 15 }
  ```

### 2. **GET `/number/max`**  
- **Description**: Find the larger of two numbers  
- **Parameters**:  
  - `num1`: Number  
  - `num2`: Number  
- **Example**:  
  ```http
  GET /number/max?num1=15&num2=25
  ```
  **Response**:  
  ```json
  { "max": 25 }
  ```

### 3. **GET `/number/avg`**  
- **Description**: Calculate average of a number list  
- **Parameters**:  
  - `numbers`: Comma-separated numbers (e.g., `1,4,7`)  
- **Example**:  
  ```http
  GET /number/avg?numbers=10,20,30
  ```
  **Response**:  
  ```json
  { "avg": 20 }
  ```

### 4. **GET `/number/sort`**  
- **Description**: Sort numbers (ascending/descending)  
- **Parameters**:  
  - `numbers`: Comma-separated numbers  
  - `type`: `asc` (ascending) or `dec` (descending)  
- **Example**:  
  ```http
  GET /number/sort?numbers=3,1,4,2&type=asc
  ```
  **Response**:  
  ```json
  { "sorted": [1, 2, 3, 4] }
  ```

### 5. **GET `/number/count`**  
- **Description**: Count occurrences of a value  
- **Parameters**:  
  - `numbers`: Comma-separated values (numbers or strings)  
  - `search`: Value to search for (case-sensitive)  
- **Example**:  
  ```http
  GET /number/count?numbers=A,saman,Kamal,saman&search=saman
  ```
  **Response**:  
  ```json
  { "search": "saman", "count": 2 }
  ```

## ⚙️ Installation  
1. **Prerequisites**:  
   - Node.js (v20+)  
   - npm  

2. **Setup**:  
   ```bash
   git clone https://github.com/lasithadilshan/code-with-krish.git
   cd api-server
   npm init -y
   npm install express
   ```

3. **Start Server**:  
   ```bash
   node index.js
   ```
   Server runs at `http://localhost:3000`

## 📜 Error Handling  
Common error responses (HTTP 400):  
```json
{ "error": "Both 'numbers' and 'search' parameters are required" }
{ "error": "All values must be valid numbers" }
{ "error": "type must be 'asc' or 'dec'" }
```

## 📚 References  
1. **Express.js**  
   - [Routing](https://expressjs.com/en/guide/routing.html)  
   - [Request Query Parameters](https://expressjs.com/en/api.html#req.query)  
   - [Response Methods](https://expressjs.com/en/api.html#res.json)  

2. **JavaScript**  
   - [Array Methods (map/filter/reduce)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)  
   - [Math Operations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)  
   - [parseFloat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)  
   - [isNaN()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN)  

3. **StackOverflow**
    - [Setting a maximum on a parseFloat value in Javascript](https://stackoverflow.com/questions/13601968/setting-a-maximum-on-a-parsefloat-value-in-javascript)
    - [Splitting a number into an array](https://stackoverflow.com/questions/25299376/splitting-a-number-into-an-array)
    - [JS: How to handle a 400 Bad Request error returned from API url](https://stackoverflow.com/questions/44222466/js-how-to-handle-a-400-bad-request-error-returned-from-api-url)
    - [Take specific part of a string by character count](https://stackoverflow.com/questions/33759603/take-specific-part-of-a-string-by-character-count/33760061#33760061)

### Core Concepts  
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)  
- [REST API Design](https://restfulapi.net/)  

### Tools  
- [Node.js](https://nodejs.org/en/docs/)  
- [npm](https://docs.npmjs.com/)