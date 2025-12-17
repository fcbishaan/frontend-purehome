'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import ProtectedRoute from '@/components/auth/ProtectedRoute';

// Dynamically import the Profile component with SSR disabled
const Profile = dynamic(
  () => import('@/components/common/Profile'),
  { ssr: false, loading: () => <div>Loading profile...</div> }
);

function ProfilePageContent() {
  return (
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  );
}

export default function ProfilePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProfilePageContent />
    </Suspense>
  );
}
