import React from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Quasar</h1>
        <p className="text-lg mb-8">Your journey to building amazing web apps starts here.</p>
        <Button variant="primary">Get Started</Button>
      </div>
    </div>
  );
};

export default Index;