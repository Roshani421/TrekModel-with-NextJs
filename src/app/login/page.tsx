"use client";

import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
   // Correct import path
import { FcGoogle } from 'react-icons/fc';        // Correct import

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <main className="bg-[#26313c] h-screen flex items-center justify-center p-10 relative">
      <div className="absolute inset-0">
        {/* Background image */}
        <div
          className=" bg-cover bg-left"
          style={{ backgroundImage: 'url(/backgroundImage.jpg)' }} 
        />
      </div>
      <div className="relative z-10 grid w-full h-full grid-cols-1 md:grid-cols-2 bg-white rounded-lg shadow-lg">
        <div className="hidden md:block md:col-span-1">
          {/* Background image container */}
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: 'url(/backgroundImage.jpg)' }} 
          />
        </div>
        <div className="md:col-span-1 bg-[#16202a] text-white flex items-center justify-center flex-col p-6 md:p-12">
          <div className="my-4">
            <h1 className="text-3xl font-semibold">Login</h1>
            <p className="mt-2 text-xs text-slate-400">
              {/* Additional text can be added here */}
            </p>
          </div>
          <form onSubmit={handleSubmit} className="w-full max-w-sm">
            <Button
              type="button"
              className="flex items-center w-full gap-4 px-12 mb-4 bg-transparent rounded-full"
              variant="outline"
            >
              <FcGoogle size="25" />
              Sign In With Google
            </Button>
            <Label htmlFor="email">Email*</Label>
            <Input
              className="mt-2 mb-4 bg-transparent rounded-full"
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Label htmlFor="password">Password*</Label>
            <Input
              className="mt-2 bg-transparent rounded-full"
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              className="w-full mt-6 bg-indigo-600 rounded-full hover:bg-indigo-700"
            >
              Login
            </Button>
          </form>
          <p className="mt-4 text-xs text-slate-200">
            &copy; 2023 All rights reserved
          </p>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
