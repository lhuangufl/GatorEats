import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const thisWidth = window.innerWidth;
  const thisHeight = window.innerHeight;

  const navigate = useNavigate();
  return (
    <div>
      <span>singin page</span>
    </div>
  );
}
