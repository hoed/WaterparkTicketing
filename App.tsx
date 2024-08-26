import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [price, setPrice] = useState(0);
  const [users, setUsers] = useState([
    { username: 'admin', password: 'password', email: 'admin@example.com' },
  ]);
  const [bookings, setBookings] = useState([]);

  const handleLogin = () => {
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
      setIsLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleSignup = () => {
    const user = { username, password, email };
    setUsers([...users, user]);
    setIsLoggedIn(true);
  };

  const handleBooking = () => {
    const booking = { bookingDate, price };
    setBookings([...bookings, booking]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex flex-col items-center justify-center h-screen">
              <h1 className="text-3xl font-bold mb-4">Waterpark Ticketing App</h1>
              {isLoggedIn ? (
                <div>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
                    onClick={() => setIsLoggedIn(false)}
                  >
                    Logout
                  </button>
                  <h2 className="text-2xl font-bold mb-4">Book a ticket</h2>
                  <input
                    type="date"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="block w-full p-2 mb-4 border border-gray-400 rounded"
                  />
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.valueAsNumber)}
                    className="block w-full p-2 mb-4 border border-gray-400 rounded"
                  />
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleBooking}
                  >
                    Book
                  </button>
                  <h2 className="text-2xl font-bold mb-4">Bookings</h2>
                  <ul>
                    {bookings.map((booking, index) => (
                      <li key={index} className="mb-2">
                        {booking.bookingDate} - ${booking.price}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Login</h2>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="block w-full p-2 mb-4 border border-gray-400 rounded"
                    placeholder="Username"
                  />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full p-2 mb-4 border border-gray-400 rounded"
                    placeholder="Password"
                  />
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                  <h2 className="text-2xl font-bold mb-4">Signup</h2>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="block w-full p-2 mb-4 border border-gray-400 rounded"
                    placeholder="Username"
                  />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full p-2 mb-4 border border-gray-400 rounded"
                    placeholder="Password"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full p-2 mb-4 border border-gray-400 rounded"
                    placeholder="Email"
                  />
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleSignup}
                  >
                    Signup
                  </button>
                </div>
              )}
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;