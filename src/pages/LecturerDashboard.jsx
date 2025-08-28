import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import {
  Plus,
  Users,
  QrCode,
  BookOpen,
  ArrowLeft,
  Settings,
  BarChart3,
  GraduationCap,
} from "lucide-react";
import { toast } from "sonner";
import logo from "../assets/images/logo.png"

const LecturerDashboard = () => {
  const navigate = useNavigate();
  const [classes, setClasses] = useState([
    {
      id: "1",
      name: "Computer Science 101",
      description: "Introduction to Programming",
      code: "CS101-2024",
      studentsCount: 24,
      createdAt: "2024-01-15",
      hasQuiz: true,
    },
    {
      id: "2",
      name: "Data Structures",
      description: "Advanced Programming Concepts",
      code: "CS201-2024",
      studentsCount: 18,
      createdAt: "2024-01-10",
      hasQuiz: false,
    },
  ]);

  const [newClass, setNewClass] = useState({
    name: "",
    description: "",
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const generateClassCode = () => {
    return `CLASS-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
  };

  const handleCreateClass = () => {
    if (!newClass.name.trim()) {
      toast.error("Please enter a class name");
      return;
    }

    const classData = {
      id: Date.now().toString(),
      name: newClass.name,
      description: newClass.description,
      code: generateClassCode(),
      studentsCount: 0,
      createdAt: new Date().toISOString().split("T")[0],
      hasQuiz: false,
    };

    setClasses([classData, ...classes]);
    setNewClass({ name: "", description: "" });
    setIsDialogOpen(false);
    toast.success("Class created successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-sky-100 animate-fade-in">
      {/* Enhanced Header with Animation */}
      <div className="bg-gradient-to-r from-sky-500 to-sky-400 text-white shadow-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 animate-slide-in-left">
              <div className="flex items-center space-x-2">
                <div className=" p-2 rounded-lg transform transition-transform hover:scale-110">
                  <img src={logo} className="h-20 w-auto" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold tracking-tight">Vanguard Attendance Management</h1>
                  <p className="text-sky-200 text-sm">Lecturer Portal</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 animate-slide-in-right">
              <Button
                variant="ghost"
                className="text-white hover:bg-sky-400/50 hover:text-amber-300 transition-all duration-300 transform hover:scale-105"
                onClick={() => navigate("/")}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
              
              <div className="h-6 w-px bg-sky-500/50"></div>
              
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-sky-400/50 hover:text-amber-300 transition-all duration-300 transform hover:scale-105"
              >
                <BarChart3 className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-sky-400/50 hover:text-amber-300 transition-all duration-300 transform hover:scale-105"
              >
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards with Animation */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            {
              title: "Total Classes",
              icon: <BookOpen className="h-5 w-5 text-sky-500" />,
              value: classes.length,
              description: "Active classes",
              bgColor: "bg-sky-500",
              iconBg: "bg-sky-100",
            },
            {
              title: "Total Students",
              icon: <Users className="h-5 w-5 text-sky-500" />,
              value: classes.reduce((sum, c) => sum + c.studentsCount, 0),
              description: "Enrolled students",
              bgColor: "bg-sky-500",
              iconBg: "bg-sky-100",
            },
            {
              title: "Active Quizzes",
              icon: <QrCode className="h-5 w-5 text-amber-500" />,
              value: classes.filter((c) => c.hasQuiz).length,
              description: "With quiz questions",
              bgColor: "bg-amber-400",
              iconBg: "bg-amber-100",
            },
          ].map((stat, index) => (
            <Card
              key={stat.title}
              className="bg-white border-0 shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`h-2 ${stat.bgColor}`}></div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <div className={`p-2 rounded-lg ${stat.iconBg} mr-3 transform transition-transform hover:rotate-12`}>
                    {stat.icon}
                  </div>
                  {stat.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-sky-400 animate-pulse">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground mt-1">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Classes Section with Animation */}
        <div className="flex items-center justify-between mb-6 animate-slide-in-up">
          <div>
            <h2 className="text-2xl font-bold text-sky-500">My Classes</h2>
            <p className="text-muted-foreground">Manage your courses and track student progress</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-sky-500 to-sky-400 hover:from-sky-400 hover:to-sky-500 text-white shadow-md transform transition-all duration-300 hover:scale-105">
                <Plus className="h-4 w-4 mr-2" />
                Create New Class
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] animate-fade-in">
              <DialogHeader>
                <DialogTitle className="text-sky-500">Create New Class</DialogTitle>
                <DialogDescription>
                  Add a new class to start tracking attendance and creating quizzes.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Class Name</Label>
                  <Input
                    id="name"
                    placeholder="e.g., Computer Science 101"
                    value={newClass.name}
                    onChange={(e) =>
                      setNewClass({ ...newClass, name: e.target.value })
                    }
                    className="transition-all duration-300 focus:ring-2 focus:ring-sky-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description (Optional)</Label>
                  <Textarea
                    id="description"
                    placeholder="Brief description of the class"
                    value={newClass.description}
                    onChange={(e) =>
                      setNewClass({ ...newClass, description: e.target.value })
                    }
                    className="transition-all duration-300 focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                  className="hover:bg-gray-100 transition-all duration-300"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleCreateClass}
                  className="bg-gradient-to-r from-sky-500 to-sky-400 hover:from-sky-400 hover:to-sky-500 transform transition-all duration-300 hover:scale-105"
                >
                  Create Class
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Classes Grid with Animation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((classData, index) => (
            <Card
              key={classData.id}
              className="group cursor-pointer transition-all duration-500 hover:shadow-xl hover:-translate-y-1 border-0 bg-white overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => navigate(`/class/${classData.id}`)}
            >
              <div className="h-2 bg-gradient-to-r from-sky-500 to-sky-400"></div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg group-hover:text-sky-400 transition-colors duration-300">
                      {classData.name}
                    </CardTitle>
                    <CardDescription className="mt-1 line-clamp-2 transition-all duration-300 group-hover:text-sky-500">
                      {classData.description || "No description provided"}
                    </CardDescription>
                  </div>
                  {classData.hasQuiz && (
                    <div className="bg-amber-100 p-2 rounded-full transform transition-transform group-hover:rotate-12">
                      <BookOpen className="h-4 w-4 text-amber-500" />
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Class Code:</span>
                    <span className="font-mono bg-sky-100 text-sky-400 px-2 py-1 rounded text-xs transition-all duration-300 group-hover:bg-sky-200">
                      {classData.code}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Students:</span>
                    <span className="font-semibold text-sky-400 transition-all duration-300 group-hover:text-sky-500">
                      {classData.studentsCount}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Created:</span>
                    <span className="text-sky-400 transition-all duration-300 group-hover:text-sky-500">
                      {new Date(classData.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-sky-200 text-sky-400 hover:bg-sky-50 hover:text-sky-500 transition-all duration-300 transform hover:scale-105"
                  >
                    <QrCode className="h-4 w-4 mr-2" />
                    Manage Class
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {classes.length === 0 && (
          <Card className="text-center py-12 bg-white border-0 shadow-lg animate-fade-in">
            <CardContent>
              <div className="mx-auto w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-4 transform transition-transform hover:scale-110">
                <BookOpen className="h-8 w-8 text-sky-500" />
              </div>
              <h3 className="text-lg font-semibold text-sky-500 mb-2">No classes yet</h3>
              <p className="text-muted-foreground mb-4 max-w-md mx-auto">
                Create your first class to start tracking attendance and managing quizzes for your students.
              </p>
              <Button
                onClick={() => setIsDialogOpen(true)}
                className="bg-gradient-to-r from-sky-500 to-sky-400 hover:from-sky-400 hover:to-sky-500 text-white shadow-md transform transition-all duration-300 hover:scale-105"
              >
                <Plus className="h-4 w-4 mr-2" />
                Create Your First Class
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default LecturerDashboard;