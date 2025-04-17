"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { apiEndpoints } from "@/lib/api-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Search, Users, FileText, MessageSquare, Lock, Book } from "lucide-react";

interface EndpointGroup {
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  endpoints: typeof apiEndpoints;
}

// Group endpoints by category
const endpointGroups: EndpointGroup[] = [
  {
    category: "User",
    icon: Users,
    endpoints: apiEndpoints.filter((e) => e.id.includes("user")),
  },
  {
    category: "Post",
    icon: FileText,
    endpoints: apiEndpoints.filter((e) => e.id.includes("post")),
  },
  {
    category: "Comment",
    icon: MessageSquare,
    endpoints: apiEndpoints.filter((e) => e.id.includes("comment")),
  },
  {
    category: "Authentication",
    icon: Lock,
    endpoints: apiEndpoints.filter((e) => e.id.includes("auth")),
  },
];

export function Sidebar() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter endpoints based on search term
  const filteredGroups = endpointGroups.map((group) => ({
    ...group,
    endpoints: group.endpoints.filter(
      (endpoint) =>
        endpoint.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        endpoint.description.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  // Color mapping for HTTP methods
  const methodColors: Record<string, string> = {
    GET: "bg-green-500",
    POST: "bg-blue-500",
    PUT: "bg-yellow-500",
    DELETE: "bg-red-500",
  };

  return (
    <aside className="w-72 bg-background/80 backdrop-blur-lg border-r h-screen sticky top-0 p-4">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search endpoints..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 rounded-full bg-muted/50 focus:bg-background transition-colors"
          />
        </div>

        {/* Header with Book icon representing API documentation */}
        <h2 className="text-xl font-semibold text-foreground flex items-center space-x-2">
          <Book className="h-5 w-5" />
          <span>API Endpoints</span>
        </h2>

        {/* Accordion for Endpoint Groups */}
        <Accordion type="single" collapsible className="space-y-2">
          {filteredGroups.map((group) =>
            group.endpoints.length > 0 ? (
              <AccordionItem
                key={group.category}
                value={group.category}
                className="border-none"
              >
                <AccordionTrigger className="text-foreground/90 hover:bg-accent/50 rounded-md px-2 py-1">
                  <div className="flex items-center space-x-2">
                    <group.icon className="h-4 w-4" />
                    <span>{group.category}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-4">
                  <nav className="space-y-1">
                    {group.endpoints.map((endpoint) => (
                      <TooltipProvider key={endpoint.id}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <motion.div
                              whileHover={{ x: 5 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Link
                                href={`/api/${endpoint.id}`}
                                className="flex items-center justify-between p-2 hover:bg-accent/50 rounded-md transition-colors"
                              >
                                <span className="text-sm truncate">
                                  {endpoint.title}
                                </span>
                                <Badge
                                  className={`${methodColors[endpoint.method]} text-white`}
                                >
                                  {endpoint.method}
                                </Badge>
                              </Link>
                            </motion.div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{endpoint.description}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))}
                  </nav>
                </AccordionContent>
              </AccordionItem>
            ) : null
          )}
        </Accordion>
      </motion.div>
    </aside>
  );
}