import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

// Connect to the Express Socket.io server
const socket = io('http://localhost:5000');

export default function App() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Listen for real-time events from server
    socket.on('student:added', (data) => {
      setNotifications((prev) => [...prev, `New student: ${data.name}`]);
    });

    // Cleanup event listener on unmount
    return () => {
      socket.off('student:added');
    };
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>ShopEase Dashboard</h1>
      <h2>Real-Time Live Notifications</h2>
      {notifications.length === 0 ? (
        <p>No notifications yet...</p>
      ) : (
        <ul>
          {notifications.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      )}
    </div>
  );
}