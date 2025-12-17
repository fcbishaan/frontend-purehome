'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function ProtectedRoute({ children, requireAuth = true, redirectTo = '/login' }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;
    
    // If route requires auth and user is not logged in, redirect to login
    if (requireAuth && !user) {
      router.push(redirectTo);
    } 
    // If route is for guests only (like login/register) and user is logged in, redirect to home
    else if (!requireAuth && user) {
      router.push('/home-furniture');
    }
  }, [user, loading, requireAuth, redirectTo, router]);

  // Show loading state while checking auth
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Only render children if auth state matches the requirement
  if ((requireAuth && user) || (!requireAuth && !user)) {
    return children;
  }

  return null;
}
