import React from 'react';

export default function TestDBButton() {
    // Function to call your backend route
    const testBackendConnection = async () => {
        try {
            const response = await fetch('http://localhost:56600/test-db'); // adjust URL if different
            const data = await response.json();
            console.log('Backend response:', data);
            alert(JSON.stringify(data)); // optional popup to see result
        } catch (error) {
            console.error('Failed to connect to backend:', error);
            alert('Failed to connect to backend');
        }
    };

    return (
        <div>
            <button onClick={testBackendConnection}>
                Test Database Connection
            </button>
        </div>
    );
}
