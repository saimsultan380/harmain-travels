import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BlogListing } from "@/components/blog/BlogListing";
import { sortedBlogPosts, POSTS_PER_PAGE } from "@/lib/blog-posts";

type Props = { params: Promise<{ pageNum: string }> };

export async function generateStaticParams() {
  const totalPages = Math.ceil(sortedBlogPosts.length / POSTS_PER_PAGE);
  
  return Array.from({ length: totalPages }, (_, i) => ({
    pageNum: (i + 1).toString(),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pageNum } = await params;
  const page = parseInt(pageNum) || 1;
  return {
    title: `Blog Page ${page} - Umrah & Hajj Travel Guides`,
    description:
      "Stay updated with the latest guides, tips, and information about Umrah travel, taxi services, and religious sites in Saudi Arabia.",
    alternates: { canonical: `/blog/page/${page}/` },
    robots: {
      index: false, // Don't index pagination pages to avoid duplicate content
      follow: true,
    },
  };
}

export default async function BlogPageNum({ params }: Props) {
  const { pageNum } = await params;
  const page = parseInt(pageNum) || 1;
  const totalPages = Math.ceil(sortedBlogPosts.length / POSTS_PER_PAGE);
  const pagePosts = sortedBlogPosts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg)] pt-32 pb-16 md:pb-20 lg:pb-24 px-4">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-[var(--text-1)] mb-4">
              Our Blog
            </h1>
            <p className="text-lg text-[var(--text-2)] font-body max-w-2xl mx-auto">
              Stay updated with the latest guides, tips, and information about
              Umrah travel, taxi services, and religious sites in Saudi Arabia.
            </p>
          </div>
          <BlogListing
            pagePosts={pagePosts}
            currentPage={page}
            totalPages={totalPages}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
