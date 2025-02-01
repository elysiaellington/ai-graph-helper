import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Plus, List, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const Blog = () => {
  const { toast } = useToast();

  const { data: posts, isLoading } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .order("published_at", { ascending: false });

      if (error) {
        toast({
          variant: "destructive",
          title: "Error fetching posts",
          description: error.message,
        });
        return [];
      }

      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8">Blog Management</h1>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Blog Management</h1>
        <Link to="/blog/new">
          <Button>
            <Plus className="mr-2" />
            New Post
          </Button>
        </Link>
      </div>

      <div className="space-y-4">
        {posts?.map((post) => (
          <div
            key={post.id}
            className="glass-card p-4 flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-sm text-gray-400">
                {new Date(post.published_at).toLocaleDateString()}
              </p>
            </div>
            <div className="flex gap-2">
              <Link to={`/blog/${post.slug}`}>
                <Button variant="secondary" size="sm">
                  <Eye className="mr-2" />
                  View
                </Button>
              </Link>
              <Link to={`/blog/edit/${post.slug}`}>
                <Button variant="outline" size="sm">
                  <List className="mr-2" />
                  Edit
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;