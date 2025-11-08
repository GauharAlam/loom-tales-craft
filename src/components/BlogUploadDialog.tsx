import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface BlogUploadDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
}

/**
 * A dialog for uploading/managing blog posts.
 * Contains a form matching the 'blogs' schema.
 */
const BlogUploadDialog: React.FC<BlogUploadDialogProps> = ({
  isOpen,
  onOpenChange,
  title,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd handle form submission here
    console.log("Blog post form submitted");
    onOpenChange(false); // Close dialog on submit
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="font-display text-3xl md:text-4xl font-medium text-gray-800 tracking-wider">
            {title}
          </DialogTitle>
          <DialogDescription className="font-body text-gray-600">
            Create or edit a blog post.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="py-4 space-y-4">
          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="title" className="font-body">
                  Title
                </Label>
                <Input id="title" placeholder="The Art of Weaving..." />
              </div>
              <div>
                <Label htmlFor="slug" className="font-body">
                  Slug
                </Label>
                <Input id="slug" placeholder="the-art-of-weaving" />
              </div>
              <div>
                <Label htmlFor="category" className="font-body">
                  Category
                </Label>
                <Input id="category" placeholder="Craftsmanship" />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="featured_image_path" className="font-body">
                  Featured Image
                </Label>
                <Input id="featured_image_path" type="file" />
              </div>
              <div>
                <Label htmlFor="status" className="font-body">
                  Status
                </Label>
                <Select>
                  <SelectTrigger id="status">
                    <SelectValue placeholder="Select status..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Full Width Content */}
          <div className="col-span-2">
            <Label htmlFor="content" className="font-body">
              Content
            </Label>
            <Textarea
              id="content"
              placeholder="Start writing your blog post here..."
              rows={10}
            />
          </div>

          <DialogFooter className="mt-6 pt-6 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="font-body bg-[#794299] hover:bg-[#62009b]"
            >
              Save Post
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BlogUploadDialog;