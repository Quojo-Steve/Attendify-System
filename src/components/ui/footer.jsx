import React from 'react'
import { Button } from "./button";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
  
  return (
      <footer className="w-full bg-sky-500 text-white py-8 mt-12">
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
                  onClick={() => navigate('/lecturer/signin')} 
                  className="w-full bg-white text-sky-700 hover:bg-sky-100 transition-all"
                >
                  Lecturer Portal
                </Button>
                <Button 
                  onClick={() => navigate('/student/signin')} 
                  className="w-full bg-white text-amber-600 hover:bg-amber-100 transition-all"
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
  )
}

export default Footer
