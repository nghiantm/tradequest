import React from "react";

import { Navigate } from "react-router-dom";

function ProtectedRoute(user, element, redirectPath = '/') {
    if (!user) {
        return <Navigate to={redirectPath} replace />;
    } else {
        return element;
    }
}

export default ProtectedRoute;