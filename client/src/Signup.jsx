import React from 'react';

const Signup = () => {
  return (
    <div>
      <h1>Signup Page</h1>
      <form>
        {/* Add your signup form fields here */}
        <label>Full Name:</label>
        <input type="text" />
        <label>Email:</label>
        <input type="email" />
        <label>Password:</label>
        <input type="password" />
        <label>Confirm Password:</label>
        <input type="password" />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
