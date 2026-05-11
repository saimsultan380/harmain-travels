"use client";

import { useState } from "react";
import { blogPosts, sortedBlogPosts, POSTS_PER_PAGE } from "@/lib/blog-posts";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  { id: "all", name: "All Posts" },
  { id: "taxi-guides", name: "Taxi Guides" },
  { id: "taxi-fares", name: "Taxi Fares" },
  { id: "sight-seeings", name: "Sight Seeings" },
  { id: "other-services", name: "Other Services Guides" },
];

function getPageHref(pageNum: number): string {
  return pageNum === 1 ? "/blog" : `/blog/page/${pageNum}`;
}

interface BlogListingProps {
  /** Pre-paginated posts for the "All Posts" view — computed server-side */
  pagePosts: typeof blogPosts;
  currentPage: number;
  totalPages: number;
}

export function BlogListing({ pagePosts, currentPage, totalPages }: BlogListingProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // For "All Posts": use the pre-paginated slice passed from server
  // For a category filter: show ALL matching posts across all pages
  const displayPosts =
    selectedCategory === "all"
      ? pagePosts
      : sortedBlogPosts.filter((p) => p.categories.includes(selectedCategory));

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-2.5 rounded-full font-body font-medium text-sm transition-all ${
              selectedCategory === category.id
                ? "bg-[var(--gold)] text-white shadow-lg shadow-[var(--gold)]/20"
                : "bg-[var(--bg-alt)] border border-[var(--border)] text-[var(--text-2)] hover:border-[var(--green)] hover:text-[var(--green)]"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {displayPosts.map((post) => (
          <article
            key={post.id}
            className="bg-[var(--bg-card)] border-2 border-t-[var(--gold)] border-b-[var(--green)] border-l-[var(--gold)] border-r-[var(--green)] rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group"
          >
            <div className="h-48 relative overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {post.categories.map((catId) => {
                  const cat = categories.find((c) => c.id === catId);
                  const isGreen = catId === "other-services" || catId === "taxi-guides";
                  return (
                    <span
                      key={catId}
                      className={`inline-block px-3 py-1 font-body text-xs font-semibold rounded-full ${
                        isGreen
                          ? "bg-[var(--green)]/10 text-[var(--green)]"
                          : "bg-[var(--gold)]/10 text-[var(--gold)]"
                      }`}
                    >
                      {cat?.name}
                    </span>
                  );
                })}
              </div>
              <Link href={`/${post.id}`}>
                <h3 className="text-xl font-heading font-bold text-[var(--green)] mb-3 line-clamp-2 hover:text-[var(--gold)] transition-colors cursor-pointer">
                  {post.title}
                </h3>
              </Link>
              <p className="text-[var(--text-2)] font-body text-sm mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4 text-[var(--text-3)] font-body text-xs mb-4">
                <div className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={14} />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <Link
                href={`/${post.id}`}
                className="inline-flex items-center gap-2 text-[var(--green)] font-body font-semibold text-sm hover:text-[var(--gold)] hover:gap-3 transition-all"
              >
                Read More <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* No Posts Message */}
      {displayPosts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-[var(--text-2)] font-body text-lg">No posts found in this category.</p>
        </div>
      )}

      {/* Pagination — only shown for "All Posts" */}
      {selectedCategory === "all" && totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {currentPage > 1 && (
            <Link
              href={getPageHref(currentPage - 1)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--bg-alt)] border border-[var(--border)] text-[var(--text-1)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors mr-2"
            >
              <ChevronLeft size={18} /> Previous
            </Link>
          )}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
            <Link
              key={pageNum}
              href={getPageHref(pageNum)}
              className={`w-10 h-10 flex items-center justify-center rounded-xl font-body font-semibold transition-colors ${
                pageNum === currentPage
                  ? "bg-[var(--gold)] text-white shadow-lg shadow-[var(--gold)]/20 pointer-events-none"
                  : "bg-[var(--bg-alt)] border border-[var(--border)] text-[var(--text-1)] hover:border-[var(--gold)] hover:text-[var(--gold)]"
              }`}
            >
              {pageNum}
            </Link>
          ))}
          {currentPage < totalPages && (
            <Link
              href={getPageHref(currentPage + 1)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--bg-alt)] border border-[var(--border)] text-[var(--text-1)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors ml-2"
            >
              Next <ChevronRight size={18} />
            </Link>
          )}
        </div>
      )}
    </>
  );
}
