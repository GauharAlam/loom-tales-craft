import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, Trash } from "lucide-react";

// Mock Data - In a real app, you'd fetch this
const mockCollections = [
  { id: 1, title: "Imperial Medallion Carpet", type: "Carpet", status: "In Stock" },
  { id: 2, title: "Kashmiri Paisley Shawl", type: "Shawl", status: "In Stock" },
  { id: 3, title: "Persian Garden Runner", type: "Carpet", status: "Out of Stock" },
];

const mockBlogs = [
  { id: 1, title: "The Art of Traditional Carpet Weaving", category: "Craftsmanship", status: "Published" },
  { id: 2, title: "How to Care for Your Persian Carpet", category: "Care Tips", status: "Published" },
  { id: 3, title: "Understanding Carpet Restoration", category: "Restoration", status: "Draft" },
];

const mockServices = [
  { id: 1, title: "Professional Washing", type: "Carpet" },
  { id: 2, title: "Expert Repairing", type: "Carpet" },
  { id: 3, title: "Delicate Shawl Washing", type: "Shawl" },
];

/**
 * Admin page for viewing, updating, and deleting all existing content.
 */
const ManageContent: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-medium text-gray-800 tracking-wider mb-12 text-center">
            Manage All Content
          </h1>

          <Tabs defaultValue="collections" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="collections">Collections</TabsTrigger>
              <TabsTrigger value="blogs">Blog Posts</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
            </TabsList>
            
            {/* Collections Tab */}
            <TabsContent value="collections">
              <Table className="bg-card mt-4 rounded-lg shadow-soft border border-black/5">
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-display">Title</TableHead>
                    <TableHead className="font-display hidden md:table-cell">Type</TableHead>
                    <TableHead className="font-display hidden md:table-cell">Status</TableHead>
                    <TableHead className="text-right font-display">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockCollections.map((item) => (
                    <TableRow key={item.id} className="font-body">
                      <TableCell className="font-medium">{item.title}</TableCell>
                      <TableCell className="hidden md:table-cell">{item.type}</TableCell>
                      <TableCell className="hidden md:table-cell">
                        <span className={`px-2 py-1 rounded-full text-xs ${item.status === "In Stock" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                          {item.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon" className="text-blue-600 hover:text-blue-800">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive/80">
                          <Trash className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            {/* Blogs Tab */}
            <TabsContent value="blogs">
              <Table className="bg-card mt-4 rounded-lg shadow-soft border border-black/5">
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-display">Title</TableHead>
                    <TableHead className="font-display hidden md:table-cell">Category</TableHead>
                    <TableHead className="font-display hidden md:table-cell">Status</TableHead>
                    <TableHead className="text-right font-display">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockBlogs.map((post) => (
                    <TableRow key={post.id} className="font-body">
                      <TableCell className="font-medium">{post.title}</TableCell>
                      <TableCell className="hidden md:table-cell">{post.category}</TableCell>
                      <TableCell className="hidden md:table-cell">
                      <span className={`px-2 py-1 rounded-full text-xs ${post.status === "Published" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}>
                          {post.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon" className="text-blue-600 hover:text-blue-800">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive/80">
                          <Trash className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            {/* Services Tab */}
            <TabsContent value="services">
            <Table className="bg-card mt-4 rounded-lg shadow-soft border border-black/5">
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-display">Title</TableHead>
                    <TableHead className="font-display hidden md:table-cell">Type</TableHead>
                    <TableHead className="text-right font-display">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockServices.map((service) => (
                    <TableRow key={service.id} className="font-body">
                      <TableCell className="font-medium">{service.title}</TableCell>
                      <TableCell className="hidden md:table-cell">{service.type}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon" className="text-blue-600 hover:text-blue-800">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive/80">
                          <Trash className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ManageContent;