import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { GraduationCap, Users, BookOpen, QrCode, BarChart3 } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    navigate(`/${role}/signin`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-amber-50 flex flex-col items-center justify-between">
      <div className="w-full max-w-4xl mx-auto animate-fade-in p-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-sky-500 rounded-full p-4 shadow-lg">
              <GraduationCap className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-sky-500 mb-4">
            Attendify
          </h1>
          <p className="text-xl text-sky-700 max-w-2xl mx-auto">
            Modern classroom attendance and quiz management system. 
            QR code-based attendance tracking with interactive quizzes.
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <Card 
            className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 bg-gradient-to-br from-white to-sky-50 border-sky-200"
            onClick={() => handleRoleSelect('lecturer')}
          >
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 bg-sky-100 rounded-full group-hover:bg-sky-200 transition-colors">
                <BookOpen className="h-8 w-8 text-sky-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-sky-700">I'm a Lecturer</CardTitle>
              <CardDescription className="text-base text-sky-600">
                Create classes, generate QR codes, and manage student quizzes
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-sky-700">
                  <QrCode className="h-4 w-4 mr-2 text-sky-500" />
                  Generate QR codes for attendance
                </div>
                <div className="flex items-center text-sm text-sky-700">
                  <Users className="h-4 w-4 mr-2 text-sky-500" />
                  Create and manage classes
                </div>
                <div className="flex items-center text-sm text-sky-700">
                  <BookOpen className="h-4 w-4 mr-2 text-sky-500" />
                  Add quiz questions for students
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white transition-all">
                Get Started as Lecturer
              </Button>
            </CardContent>
          </Card>

          <Card 
            className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 bg-gradient-to-br from-white to-amber-50 border-amber-200"
            onClick={() => handleRoleSelect('student')}
          >
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 bg-amber-100 rounded-full group-hover:bg-amber-200 transition-colors">
                <Users className="h-8 w-8 text-amber-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-amber-700">I'm a Student</CardTitle>
              <CardDescription className="text-base text-amber-600">
                Scan QR codes for attendance and take interactive quizzes
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-amber-700">
                  <QrCode className="h-4 w-4 mr-2 text-amber-500" />
                  Scan QR codes for quick attendance
                </div>
                <div className="flex items-center text-sm text-amber-700">
                  <BookOpen className="h-4 w-4 mr-2 text-amber-500" />
                  Take quizzes and get instant feedback
                </div>
                <div className="flex items-center text-sm text-amber-700">
                  <Users className="h-4 w-4 mr-2 text-amber-500" />
                  Track your attendance history
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white transition-all">
                Get Started as Student
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-8 text-sky-700">
            Why Choose Attendify?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md border border-sky-100">
              <div className="bg-sky-100 rounded-full p-3 w-fit mx-auto mb-4">
                <QrCode className="h-6 w-6 text-sky-600" />
              </div>
              <h3 className="font-semibold mb-2 text-sky-700">Quick & Easy</h3>
              <p className="text-sm text-sky-600">
                QR code-based system makes attendance tracking instant and seamless
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md border border-amber-100">
              <div className="bg-amber-100 rounded-full p-3 w-fit mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="font-semibold mb-2 text-amber-700">Interactive Learning</h3>
              <p className="text-sm text-amber-600">
                Engage students with real-time quizzes and instant feedback
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md border border-sky-100">
              <div className="bg-gradient-to-r from-sky-100 to-amber-100 rounded-full p-3 w-fit mx-auto mb-4">
                <BarChart3 className="h-6 w-6 text-sky-600" />
              </div>
              <h3 className="font-semibold mb-2 text-sky-700">Real-time Analytics</h3>
              <p className="text-sm text-sky-600">
                Track attendance patterns and quiz performance instantly
              </p>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-sky-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-amber-200/30 rounded-full blur-xl"></div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-gradient-to-r from-sky-500 to-amber-400 text-white py-8 mt-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-4">Attendify</h3>
              <p className="text-sm">Streamlining classroom management with QR code attendance and interactive quizzes.</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => navigate('/about')} className="text-sm hover:underline focus:outline-none">About Us</button>
                </li>
                <li>
                  <button onClick={() => navigate('/contact')} className="text-sm hover:underline focus:outline-none">Contact</button>
                </li>
                <li>
                  <button onClick={() => navigate('/privacy')} className="text-sm hover:underline focus:outline-none">Privacy Policy</button>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-right">
              <h3 className="text-lg font-semibold mb-4">Get Started</h3>
              <div className="space-y-2">
                <Button 
                  onClick={() => handleRoleSelect('lecturer')} 
                  className="w-full bg-white text-sky-700 hover:bg-sky-100 transition-all"
                >
                  Lecturer Portal
                </Button>
                <Button 
                  onClick={() => handleRoleSelect('student')} 
                  className="w-full bg-white text-amber-700 hover:bg-amber-100 transition-all"
                >
                  Student Portal
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-sm border-t border-white/20 pt-4">
            &copy; {new Date().getFullYear()} Attendify. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;