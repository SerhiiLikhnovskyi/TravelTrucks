import Catalog from "@/components/Catalog/Catalog";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

export default function page() {
  return (
    <>
      <main>
        <div className="container">
          <Catalog />
        </div>
      </main>
    </>
  );
}
