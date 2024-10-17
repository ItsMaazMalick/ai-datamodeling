"use client";
import { Menu, Database, GitBranch, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <motion.header
        className="flex items-center justify-between px-6 py-4 bg-background border-b"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center space-x-4">
          <Database className="h-6 w-6" />
          <h1 className="text-xl font-bold">DataModel Pro</h1>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Models</Button>
          <Button variant="ghost">Documentation</Button>
          <Button variant="ghost">About</Button>
        </nav>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Home</DropdownMenuItem>
            <DropdownMenuItem>Models</DropdownMenuItem>
            <DropdownMenuItem>Documentation</DropdownMenuItem>
            <DropdownMenuItem>About</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </motion.header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <motion.aside
          className="w-64 bg-muted p-4 hidden md:block"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <nav className="space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              <Database className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Database className="mr-2 h-4 w-4" />
              Data Models
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <GitBranch className="mr-2 h-4 w-4" />
              Relationships
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </nav>
        </motion.aside>

        {/* Main Content */}
        <motion.main
          className="flex-1 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.h2
            className="text-2xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Sample Data Model
          </motion.h2>
          <motion.div
            className="bg-background border rounded-lg p-4 overflow-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <svg
              width="600"
              height="400"
              viewBox="0 0 600 400"
              className="mx-auto"
            >
              {/* Entity: User */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <rect
                  x="50"
                  y="50"
                  width="200"
                  height="100"
                  fill="white"
                  stroke="black"
                />
                <text x="150" y="80" textAnchor="middle" fontWeight="bold">
                  User
                </text>
                <line x1="50" y1="90" x2="250" y2="90" stroke="black" />
                <text x="60" y="110">
                  id: int
                </text>
                <text x="60" y="130">
                  username: varchar(50)
                </text>
              </motion.g>

              {/* Entity: Order */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <rect
                  x="350"
                  y="50"
                  width="200"
                  height="100"
                  fill="white"
                  stroke="black"
                />
                <text x="450" y="80" textAnchor="middle" fontWeight="bold">
                  Order
                </text>
                <line x1="350" y1="90" x2="550" y2="90" stroke="black" />
                <text x="360" y="110">
                  id: int
                </text>
                <text x="360" y="130">
                  user_id: int
                </text>
              </motion.g>

              {/* Relationship */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                <line x1="250" y1="100" x2="350" y2="100" stroke="black" />
                <text x="290" y="90" textAnchor="middle">
                  1
                </text>
                <text x="310" y="90" textAnchor="middle">
                  n
                </text>
              </motion.g>

              {/* Entity: Product */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.6 }}
              >
                <rect
                  x="200"
                  y="250"
                  width="200"
                  height="100"
                  fill="white"
                  stroke="black"
                />
                <text x="300" y="280" textAnchor="middle" fontWeight="bold">
                  Product
                </text>
                <line x1="200" y1="290" x2="400" y2="290" stroke="black" />
                <text x="210" y="310">
                  id: int
                </text>
                <text x="210" y="330">
                  name: varchar(100)
                </text>
              </motion.g>

              {/* Relationship */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.8 }}
              >
                <line x1="300" y1="250" x2="450" y2="150" stroke="black" />
                <text x="370" y="200" textAnchor="middle">
                  n
                </text>
                <text x="390" y="180" textAnchor="middle">
                  m
                </text>
              </motion.g>
            </svg>
          </motion.div>
        </motion.main>
      </div>
    </div>
  );
}
