import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom"; // <-- IMPORT useNavigate
import { UploadCloud, FileText, Image as ImageIcon, List, Edit } from "lucide-react"; // <-- IMPORT List
// Import BOTH dialog components
import CollectionUploadDialog from "@/components/CollectionUploadDialog";
import BlogUploadDialog from "@/components/BlogUploadDialog";

/**
 * The main admin dashboard page, accessible only when logged in.
 * Displays a welcome message and buttons to trigger content management actions.
 */
const AdminDashboard: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate(); // <-- Initialize navigate

  // State for the Collection/Service dialog
  const [isCollectionDialogOpen, setIsCollectionDialogOpen] = useState(false);
  const [collectionDialogTitle, setCollectionDialogTitle] = useState("");

  // State for the Blog dialog
  const [isBlogDialogOpen, setIsBlogDialogOpen] = useState(false);
  const [blogDialogTitle, setBlogDialogTitle] = useState("");

  // Function to open the Collection/Service dialog
  const openCollectionDialog = (title: string) => {
    setCollectionDialogTitle(title);
    setIsCollectionDialogOpen(true);
  };

  // Function to open the Blog dialog
  const openBlogDialog = (title: string) => {
    setBlogDialogTitle(title);
    setIsBlogDialogOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl font-medium text-gray-800 tracking-wider mb-8">
            Welcome, <span className="text-[#62009b] capitalize">{user || 'Admin'}</span>!
          </h1>
          <p className="font-body text-lg text-gray-600 mb-12">
            This is your central hub for managing the website's content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Manage Collections Card */}
          <div className="bg-card p-8 rounded-lg shadow-soft border border-black/5 flex flex-col items-center text-center">
            <ImageIcon className="w-10 h-10 text-[#794299] mb-4" />
            <h3 className="font-serif text-2xl font-medium text-gray-800 mb-4">
              Manage Collections
            </h3>
            <p className="font-body text-muted-foreground mb-6 flex-grow">
              Add new items to your carpet and shawl collections.
            </p>
            <Button
              className="w-full font-body bg-[#794299] hover:bg-[#62009b]"
              onClick={() => openCollectionDialog("Add New Collection Item")}
            >
              <UploadCloud className="w-4 h-4 mr-2" /> Upload
            </Button>
          </div>

          {/* Manage Blogs Card */}
          <div className="bg-card p-8 rounded-lg shadow-soft border border-black/5 flex flex-col items-center text-center">
            <FileText className="w-10 h-10 text-[#794299] mb-4" />
            <h3 className="font-serif text-2xl font-medium text-gray-800 mb-4">
              Manage Blog Posts
            </h3>
            <p className="font-body text-muted-foreground mb-6 flex-grow">
              Create new posts to engage with your audience.
            </p>
            <Button
              className="w-full font-body bg-[#794299] hover:bg-[#62009b]"
              onClick={() => openBlogDialog("Create New Blog Post")}
            >
              <UploadCloud className="w-4 h-4 mr-2" /> Upload Post
            </Button>
          </div>

          {/* Manage Services Card - NOW LINKS TO NEW PAGE */}
          <div className="bg-card p-8 rounded-lg shadow-soft border border-black/5 flex flex-col items-center text-center">
            <List className="w-10 h-10 text-[#794299] mb-4" />
            <h3 className="font-serif text-2xl font-medium text-gray-800 mb-4">
              Manage Content
            </h3>
            <p className="font-body text-muted-foreground mb-6 flex-grow">
              Edit, update, or delete existing collections, blogs, and services.
            </p>
            <Button
              className="w-full font-body bg-[#5a386d] hover:bg-[#43305d]" // Changed color to distinguish
              onClick={() => navigate("/admin/manage-content")}
            >
              <Edit className="w-4 h-4 mr-2" /> Manage
            </Button>
          </div>
        </div>
      </main>

      {/* Render the Collection/Service dialog component */}
      <CollectionUploadDialog
        isOpen={isCollectionDialogOpen}
        onOpenChange={setIsCollectionDialogOpen}
        title={collectionDialogTitle}
      />

      {/* Render the Blog dialog component */}
      <BlogUploadDialog
        isOpen={isBlogDialogOpen}
        onOpenChange={setIsBlogDialogOpen}
        title={blogDialogTitle}
      />

      <Footer />
    </div>
  );
};

export default AdminDashboard;