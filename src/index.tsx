import React from 'react';
import ReactDOM from 'react-dom/client';
// ✅ 改成从 App.js 引入（不要用 ./App.tsx）
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
