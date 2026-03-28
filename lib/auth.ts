"use client";

import { useState, useEffect } from "react";

export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const logged = localStorage.getItem("biography_logged_in") === "true";
    setIsLoggedIn(logged);
    setIsLoading(false);
  }, []);

  return { isLoggedIn, isLoading };
}

export function login() {
  localStorage.setItem("biography_logged_in", "true");
}

export function logout() {
  localStorage.removeItem("biography_logged_in");
}
