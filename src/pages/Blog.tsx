import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

const Blog = () => {
  const { toast } = useToast();

  const { data: posts, isLoading } = useQuery({
    queryKey: ["published-blog-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("is_published", true)
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
        <h1 className="text-3xl font-bold mb-8">Blog</h1>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <div className="space-y-8">
        {posts?.map((post) => (
          <article key={post.id} className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-sm text-muted-foreground mb-4">
              {new Date(post.published_at).toLocaleDateString()}
            </p>
            <p className="text-muted-foreground">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;