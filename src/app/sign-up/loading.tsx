import React from "react";

import LoadingSpinner from "@/components/reusable/LoadingSpinner";

function loading() {
  return (
    <div className="centering">
      <LoadingSpinner />
    </div>
  );
}

export default loading;
