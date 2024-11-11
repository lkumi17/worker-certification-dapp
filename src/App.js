import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WorkerRegistrationApp from './components/WorkerRegistrationApp';
import CertificationCheckApp from './components/CertificationCheckApp';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/register" element={<WorkerRegistrationApp />} />
                    <Route path="/check" element={<CertificationCheckApp />} />
                    {/* Optional: Redirect the root path to the /register page */}
                    <Route path="/" element={<WorkerRegistrationApp />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
