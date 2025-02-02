import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Plus, List, Eye, Globe, Trash2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useEffect } from "react";

const BlogDashboard = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // Check if user is authenticated
  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/auth");
        toast({
          variant: "destructive",
          title: "Authentication required",
          description: "Please log in to access the blog dashboard",
        });
      }
    };
    checkAuth();
  }, [navigate, toast]);

  const { data: posts, isLoading } = useQuery({
    queryKey: ["all-blog-posts"],
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

  const publishMutation = useMutation({
    mutationFn: async (postId: string) => {
      const { error } = await supabase
        .from("blog_posts")
        .update({ 
          is_published: true,
          published_at: new Date().toISOString()
        })
        .eq("id", postId);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all-blog-posts"] });
      toast({
        title: "Success",
        description: "Post published successfully",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Failed to publish post",
        description: error.message,
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (postId: string) => {
      const { error } = await supabase
        .from("blog_posts")
        .delete()
        .eq("id", postId);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all-blog-posts"] });
      toast({
        title: "Success",
        description: "Post deleted successfully",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Failed to delete post",
        description: error.message,
      });
    },
  });

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8">Blog Dashboard</h1>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Blog Dashboard</h1>
        <div className="flex gap-2">
          <Link to="/blog">
            <Button variant="outline">
              <Globe className="mr-2 h-4 w-4" />
              View Blog
            </Button>
          </Link>
          <Link to="/blog/dashboard/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Post
            </Button>
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        {posts?.map((post) => (
          <div
            key={post.id}
            className="p-4 border rounded-lg flex justify-between items-center bg-card"
          >
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-semibold">{post.title}</h2>
                {post.is_published ? (
                  <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                    Published
                  </span>
                ) : (
                  <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">
                    Draft
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                {post.published_at
                  ? new Date(post.published_at).toLocaleDateString()
                  : "Not published"}
              </p>
            </div>
            <div className="flex gap-2">
              <Link to={`/blog/${post.slug}`}>
                <Button variant="secondary" size="sm">
                  <Eye className="mr-2 h-4 w-4" />
                  View
                </Button>
              </Link>
              <Link to={`/blog/dashboard/edit/${post.slug}`}>
                <Button variant="outline" size="sm">
                  <List className="mr-2 h-4 w-4" />
                  Edit
                </Button>
              </Link>
              {!post.is_published && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => publishMutation.mutate(post.id)}
                >
                  <Globe className="mr-2 h-4 w-4" />
                  Publish
                </Button>
              )}
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive" size="sm">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete the post.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => deleteMutation.mutate(post.id)}
                      className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                    >
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDashboard;