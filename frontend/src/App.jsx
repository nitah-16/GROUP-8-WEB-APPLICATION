import React, { useState, useEffect } from 'react';

function App() {
  const [backendMessage, setBackendMessage] = useState('Connecting to Tutukayo servers...');
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Fetch directly from our Express backend API health endpoint
    fetch('http://localhost:5000/api/health')
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'success') {
          setBackendMessage(data.message);
          setIsConnected(true);
        }
      })
      .catch((error) => {
        console.error('Connection error:', error);
        setBackendMessage('Failed to connect to the backend server.');
        setIsConnected(false);
      });
  }, []);

  return (
    <div style={{ 
      fontFamily: 'system-ui, -apple-system, sans-serif', 
      textAlign: 'center', 
      padding: '40px 20px',
      backgroundColor: '#f9fafd',
      minHeight: '100vh',
      color: '#2d3748'
    }}>
      {/* App Header Banner */}
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#3182ce', margin: '0 0 10px 0' }}>
          🚙 TUTUKAYO MOBILE
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#4a5568', margin: '0', fontStyle: 'italic' }}>
          "Tag Along, Share Rides, Save Transport Costs"
        </p>
      </header>

      {/* Feature Explainer Card */}
      <div style={{
        maxWidth: '500px',
        margin: '0 auto 30px auto',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
        textAlign: 'left'
      }}>
        <h3 style={{ marginTop: '0', color: '#2c5282' }}>📍 The Tag Along Feature</h3>
        <p style={{ fontSize: '0.95rem', lineHeight: '1.5', color: '#718096' }}>
          Tired of expensive campus transport costs to and from UCU? Use Tag Along to alert nearby students of your whereabouts, coordinate shared rides, and split fares effortlessly.
        </p>
      </div>

      {/* Task 5 Required System Status Checker Box */}
      <div style={{
        display: 'inline-block',
        padding: '20px 40px',
        backgroundColor: isConnected ? '#f0fff4' : '#fff5f5',
        border: isConnected ? '2px solid #38a169' : '2px solid #e53e3e',
        borderRadius: '8px',
        transition: 'all 0.3s ease'
      }}>
        <p style={{ margin: '0 0 5px 0', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#718096' }}>
          System Connection Status:
        </p>
        <p style={{ 
          fontSize: '1.2rem', 
          fontWeight: 'bold', 
          color: isConnected ? '#2f855a' : '#9b2c2c',
          margin: '0' 
        }}>
          {backendMessage}
        </p>
      </div>
    </div>
  );
}

export default App;