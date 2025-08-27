import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import Footer from "../components/ui/footer2";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { GraduationCap, Eye, EyeOff } from "lucide-react";
import adminIllustration from "../assets/images/Student.svg";

const StudentAuth = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 to-amber-200 flex flex-col items-center justify-between relative overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Illustration Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 hidden lg:flex justify-center relative"
        >
          <div className="relative max-w-md">
            <motion.img
              src={adminIllustration}
              alt="Lecturer Illustration"
              className="w-full h-[400px] max-h-[500px] object-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            />
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="absolute bg-amber-100/30 backdrop-blur-md p-3 rounded-full border border-amber-300/50"
                style={{
                  top: `${Math.random() * 60 + 20}%`,
                  left: `${Math.random() * 80 + 10}%`,
                }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3 + Math.random() * 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              >
                <GraduationCap className="w-5 h-5 text-amber-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Auth Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md"
        >
          <Card className="bg-white/30 backdrop-blur-md border border-amber-200/50 shadow-2xl rounded-2xl overflow-hidden">
            <CardHeader className="pb-4 text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block mb-4"
              >
                <div className="bg-amber-500 p-3 rounded-full inline-flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
              </motion.div>
              <CardTitle className="text-3xl font-bold text-amber-600">
                Lecturer Portal
              </CardTitle>
              <p className="text-gray-600 mt-2">
                Sign in or create an account to manage your classes
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6 bg-amber-50/50 rounded-lg p-1">
                  <TabsTrigger
                    value="login"
                    className="data-[state=active]:bg-white data-[state=active]:shadow-sm text-gray-700 hover:text-amber-600"
                  >
                    Login
                  </TabsTrigger>
                  <TabsTrigger
                    value="signup"
                    className="data-[state=active]:bg-white data-[state=active]:shadow-sm text-gray-700 hover:text-amber-600"
                  >
                    Sign Up
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="login" className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Label
                      htmlFor="login-email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email
                    </Label>
                    <div className="relative">
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="Enter your email"
                        className="block w-full pl-4 pr-4 py-3 bg-white/50 backdrop-blur-sm border border-amber-300/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-gray-800 placeholder-gray-400 transition-all"
                      />
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Label
                      htmlFor="login-password"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="login-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="block w-full pl-4 pr-10 py-3 bg-white/50 backdrop-blur-sm border border-amber-300/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-gray-800 placeholder-gray-400 transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-500 hover:text-gray-600" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-500 hover:text-gray-600" />
                        )}
                      </button>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white transition-all duration-300 hover:shadow-lg">
                      Login
                    </Button>
                  </motion.div>
                  <p className="text-center text-sm text-gray-600 cursor-pointer hover:underline mt-4">
                    Forgot password?
                  </p>
                </TabsContent>
                <TabsContent value="signup" className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Label
                      htmlFor="signup-name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name
                    </Label>
                    <Input
                      id="signup-name"
                      placeholder="Enter your full name"
                      className="block w-full pl-4 pr-4 py-3 bg-white/50 backdrop-blur-sm border border-amber-300/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-gray-800 placeholder-gray-400 transition-all"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Label
                      htmlFor="signup-email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email
                    </Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="Enter your email"
                      className="block w-full pl-4 pr-4 py-3 bg-white/50 backdrop-blur-sm border border-amber-300/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-gray-800 placeholder-gray-400 transition-all"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Label
                      htmlFor="signup-password"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="signup-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="block w-full pl-4 pr-10 py-3 bg-white/50 backdrop-blur-sm border border-amber-300/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-gray-800 placeholder-gray-400 transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-500 hover:text-gray-600" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-500 hover:text-gray-600" />
                        )}
                      </button>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Label
                      htmlFor="signup-confirm"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Confirm Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="signup-confirm"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        className="block w-full pl-4 pr-10 py-3 bg-white/50 backdrop-blur-sm border border-amber-300/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-gray-800 placeholder-gray-400 transition-all"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-500 hover:text-gray-600" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-500 hover:text-gray-600" />
                        )}
                      </button>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white transition-all duration-300 hover:shadow-lg">
                      Sign Up
                    </Button>
                  </motion.div>
                </TabsContent>
              </Tabs>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-6 pt-6 border-t border-gray-300/50 text-center text-xs text-gray-600"
              >
                <p>
                  <button
                    onClick={() => navigate("/")}
                    className="hover:underline text-gray-500"
                  >
                    Back to Home
                  </button>
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default StudentAuth;
