import { PostForm } from "@/components/post-form";
import { createPost } from "@/actions/posts-server";

export default function NewPostPage() {
  return <PostForm action={createPost} />;
}
