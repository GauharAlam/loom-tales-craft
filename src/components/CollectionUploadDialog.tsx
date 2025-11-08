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

interface CollectionUploadDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
}

/**
 * A reusable dialog for uploading/managing collection items or services.
 * Contains a generic form based on the collection item schema.
 */
const CollectionUploadDialog: React.FC<CollectionUploadDialogProps> = ({
  isOpen,
  onOpenChange,
  title,
}) => {
  // A real implementation would use react-hook-form here
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd handle form submission here
    console.log("Form submitted for:", title);
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
            Fill out the details below to add or update content.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="py-4">
          {/* 2-column grid for the form */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="title" className="font-body">
                  Title
                </Label>
                <Input id="title" placeholder="New Modern Carpet" />
              </div>
              <div>
                <Label htmlFor="ref_number" className="font-body">
                  Ref. Number
                </Label>
                <Input id="ref_number" placeholder="MC-103" />
              </div>
              <div>
                <Label htmlFor="material" className="font-body">
                  Material
                </Label>
                <Input id="material" placeholder="Wool" />
              </div>
              <div>
                <Label htmlFor="price_text" className="font-body">
                  Price
                </Label>
                <Input id="price_text" placeholder="2111" />
              </div>
              <div>
                <Label htmlFor="colour" className="font-body">
                  Colour
                </Label>
                <Input id="colour" placeholder="Red" />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="size_feet" className="font-body">
                  Size (Feet)
                </Label>
                <Input id="size_feet" placeholder="5 x 8" />
              </div>
              <div>
                <Label htmlFor="size_cms" className="font-body">
                  Size (cm)
                </Label>
                <Input id="size_cms" placeholder="152 x 244" />
              </div>
              <div>
                <Label htmlFor="stock_status" className="font-body">
                  Stock Status
                </Label>
                <Select>
                  <SelectTrigger id="stock_status">
                    <SelectValue placeholder="Select status..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="in_stock">In Stock</SelectItem>
                    <SelectItem value="out_of_stock">Out of Stock</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="images" className="font-body">
                  Images
                </Label>
                <Input id="images" type="file" multiple />
              </div>
            </div>

            {/* Full Width Description */}
            <div className="col-span-2">
              <Label htmlFor="description" className="font-body">
                Description
              </Label>
              <Textarea
                id="description"
                placeholder="Hi, this is first work..."
                rows={4}
              />
            </div>
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
              Save Content
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CollectionUploadDialog;