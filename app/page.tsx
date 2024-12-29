"use client";

import Link from 'next/link';
import { Button } from '../components/ui/button';

export default function Home() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold">Kaizen Planning</h1>
      <p className="mt-4">Streamline your tasks and achieve more with Kaizen.</p>
      <div className="mt-8">
        <Link href="/dashboard">
          <Button>Get Started</Button>
        </Link>
      </div>
    </div>
  );
}
