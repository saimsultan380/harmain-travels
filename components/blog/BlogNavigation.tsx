import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";

interface BlogNavigationProps {
  currentPostId: string;
}

export function BlogNavigation({ currentPostId }: BlogNavigationProps) {
  const currentIndex = blogPosts.findIndex((p) => p.id === currentPostId);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <div className="mt-12 pt-8 border-t border-[var(--border)]">
      <div className="flex items-center justify-between gap-4">
        {prevPost ? (
          <Link
            href={`/${prevPost.id}`}
            className="flex-1 flex items-center gap-3 p-4 bg-[var(--bg-alt)] border border-[var(--border)] rounded-xl hover:border-[var(--gold)] transition-colors group"
          >
            <ChevronLeft size={20} className="text-[var(--gold)] group-hover:-translate-x-1 transition-transform" />
            <div className="text-left">
              <p className="text-xs text-[var(--text-3)] font-body mb-1">Previous</p>
              <p className="text-sm font-heading font-semibold text-[var(--text-1)] line-clamp-1">{prevPost.title}</p>
            </div>
          </Link>
        ) : (
          <div className="flex-1"></div>
        )}
        
        {nextPost ? (
          <Link
            href={`/${nextPost.id}`}
            className="flex-1 flex items-center gap-3 p-4 bg-[var(--bg-alt)] border border-[var(--border)] rounded-xl hover:border-[var(--gold)] transition-colors group text-right"
          >
            <div className="text-left flex-1">
              <p className="text-xs text-[var(--text-3)] font-body mb-1">Next</p>
              <p className="text-sm font-heading font-semibold text-[var(--text-1)] line-clamp-1">{nextPost.title}</p>
            </div>
            <ChevronRight size={20} className="text-[var(--gold)] group-hover:translate-x-1 transition-transform" />
          </Link>
        ) : (
          <div className="flex-1"></div>
        )}
      </div>
    </div>
  );
}
