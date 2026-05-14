import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Canonical } from "@/components/SEO/Canonical";
import { BlogListing } from "@/components/blog/BlogListing";
import { sortedBlogPosts, POSTS_PER_PAGE } from "@/lib/blog-posts";

export function generateStaticParams() {
  const totalPages = Math.ceil(sortedBlogPosts.length / POSTS_PER_PAGE);
  return Array.from({ length: Math.max(0, totalPages - 1) }, (_, i) => ({
    pageNum: String(i + 2),
  }));
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ pageNum: string }> 
}): Promise<Metadata> {
  const { pageNum } = await params;
  const page = Number(pageNum);
  const totalPages = Math.ceil(sortedBlogPosts.length / POSTS_PER_PAGE);
  return {
    title: `Blog - Page ${page} of ${totalPages}`,
    description: `Explore page ${page} of the Haramain Umrah Taxi blog — Umrah travel guides, taxi fares, ziyarat tips, and more.`,
    alternates: { canonical: `/blog/page/${page}/` },
  };
}

export default async function BlogPageDynamic({ 
  params 
}: { 
  params: Promise<{ pageNum: string }> 
}) {
  const { pageNum } = await params;
  const currentPage = Number(pageNum);
  const totalPages = Math.ceil(sortedBlogPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const pagePosts = sortedBlogPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <>
      <Canonical />
      <Navbar />
      <main className="min-h-screen bg-[var(--bg)] pt-32 pb-16 md:pb-20 lg:pb-24 px-4">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-[var(--text-1)] mb-4">Our Blog</h1>
            <p className="text-lg text-[var(--text-2)] font-body max-w-2xl mx-auto">
              Stay updated with the latest guides, tips, and information about Umrah travel, taxi services, and religious sites in Saudi Arabia.
            </p>
          </div>
          <BlogListing pagePosts={pagePosts} currentPage={currentPage} totalPages={totalPages} />
        </div>
      </main>
      <Footer />
    </>
  );
}
