"use client"
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";

export default function admin(){
    const router = useRouter();
    const [user, fetchprofile, logout] = useAuth();
    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    useEffect(())
}