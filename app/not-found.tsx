"use client";

import Link from "next/link";
import { Home, ArrowLeft, Search } from "lucide-react";
import { IslamicGeometricBg } from "@/components/graphics/IslamicGeometricBg";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--bg)] flex items-center justify-center relative overflow-hidden py-16 md:py-20 lg:py-24">
      <IslamicGeometricBg opacity={0.03} />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* 404 Number */}
          <div className="mb-4 md:mb-6">
            <h1 className="text-[120px] md:text-[180px] font-heading font-extrabold leading-none text-[var(--gold)]/10 select-none">
              404
            </h1>
          </div>

          {/* Page Not Found Text */}
          <div className="mb-8 md:mb-10 relative z-20">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-[var(--text-1)] mb-4">
              Page Not Found
            </h2>
            <p className="text-lg md:text-xl text-[var(--text-2)] font-body">
              Oops! The page you're looking for doesn't exist.
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-[var(--text-2)] font-body mb-12 max-w-xl mx-auto leading-relaxed">
            The page you are trying to access might have been moved, deleted, or never existed. Let's get you back on track.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="flex items-center gap-2 px-8 py-4 bg-[var(--gold)] text-white font-heading font-bold rounded-xl hover:scale-105 transition-all shadow-lg shadow-[var(--gold)]/20"
            >
              <Home size={20} />
              Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 px-8 py-4 border-2 border-[var(--border)] text-[var(--text-1)] font-heading font-bold rounded-xl hover:bg-[var(--bg-alt)] transition-all"
            >
              <ArrowLeft size={20} />
              Go Back
            </button>
          </div>

          {/* Helpful Links */}
          <div className="mt-16 pt-12 border-t border-[var(--border)]">
            <p className="text-sm text-[var(--text-2)] font-body mb-6">Or try these popular pages:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/umrah-taxi-services"
                className="px-4 py-2 bg-[var(--bg-alt)] border border-[var(--border)] rounded-lg text-sm font-body text-[var(--text-1)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all"
              >
                Umrah Taxi Services
              </Link>
              <Link
                href="/hotel-booking-makkah"
                className="px-4 py-2 bg-[var(--bg-alt)] border border-[var(--border)] rounded-lg text-sm font-body text-[var(--text-1)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all"
              >
                Hotel Booking Makkah
              </Link>
              <Link
                href="/hotel-booking-madinah"
                className="px-4 py-2 bg-[var(--bg-alt)] border border-[var(--border)] rounded-lg text-sm font-body text-[var(--text-1)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all"
              >
                Hotel Booking Madinah
              </Link>
              <Link
                href="/our-taxi-services-pricing"
                className="px-4 py-2 bg-[var(--bg-alt)] border border-[var(--border)] rounded-lg text-sm font-body text-[var(--text-1)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all"
              >
                Pricing
              </Link>
              <Link
                href="/makkah-to-madinah"
                className="px-4 py-2 bg-[var(--bg-alt)] border border-[var(--border)] rounded-lg text-sm font-body text-[var(--text-1)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all"
              >
                Makkah to Madinah
              </Link>
            </div>
          </div>

          {/* Contact Support */}
          <div className="mt-12 text-center">
            <p className="text-sm text-[var(--text-2)] font-body mb-4">Need help? Contact our support team:</p>
            <a
              href="https://wa.me/966598401594"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--green)] text-white font-body font-semibold rounded-lg hover:opacity-90 transition-all"
            >
              <Search size={18} />
              WhatsApp Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
