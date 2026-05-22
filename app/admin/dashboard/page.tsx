"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ClipboardCheck, LogOut, Calendar, User, BookOpen, MessageSquare, HelpCircle, Layers, Trash2, CheckCircle2, AlertCircle, Plus } from "lucide-react";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import { mockBlogPosts, BlogPost } from "@/lib/blogData";

interface BookingRecord {
  id: string;
  created_at: string;
  full_name: string;
  phone_number: string;
  email: string;
  property_location: string;
  property_type: string;
  bedrooms: number;
  preferred_date: string;
  notes: string;
  status: string;
}

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<"bookings" | "blogs" | "faqs">("bookings");
  const [bookings, setBookings] = useState<BookingRecord[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(mockBlogPosts);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState(false);
  const router = useRouter();

  // 1. New Blog Form State
  const [newBlogTitle, setNewBlogTitle] = useState("");
  const [newBlogExcerpt, setNewBlogExcerpt] = useState("");
  const [newBlogCat, setNewBlogCat] = useState("Buying Guide");

  // 2. Auth protection check
  useEffect(() => {
    const verifyAuth = async () => {
      if (isSupabaseConfigured()) {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
          router.push("/admin/login");
        } else {
          setLoading(false);
          fetchBookings();
        }
      } else {
        const mockSession = localStorage.getItem("housecheck_mock_session");
        if (mockSession !== "true") {
          router.push("/admin/login");
        } else {
          setLoading(false);
          // Set mock bookings for visualization in local testing
          setBookings([
            {
              id: "1",
              created_at: "2026-05-22T04:30:00Z",
              full_name: "Francis Ndolo",
              phone_number: "+254 712 345 678",
              email: "ndolo@gmail.com",
              property_location: "Waiyaki Way, Westlands",
              property_type: "Apartment",
              bedrooms: 2,
              preferred_date: "2026-05-29",
              notes: "Please scan the balcony ceiling, visible paint peeling noticed.",
              status: "pending",
            },
            {
              id: "2",
              created_at: "2026-05-21T10:15:00Z",
              full_name: "Clara Chebet",
              phone_number: "+254 722 000 111",
              email: "clara@chebet.co.ke",
              property_location: "Runda Grove, Nairobi",
              property_type: "Villa",
              bedrooms: 5,
              preferred_date: "2026-06-03",
              notes: "Drone roofing inspection requested to check truss structure and tile leaks.",
              status: "confirmed",
            },
          ]);
        }
      }
    };

    verifyAuth();
  }, [router]);

  const fetchBookings = async () => {
    try {
      const { data, error } = await supabase
        .from("bookings")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      if (data) setBookings(data as BookingRecord[]);
    } catch (err) {
      console.error("Error fetching bookings:", err);
    }
  };

  const handleLogout = async () => {
    if (isSupabaseConfigured()) {
      await supabase.auth.signOut();
    } else {
      localStorage.removeItem("housecheck_mock_session");
    }
    router.push("/admin/login");
  };

  const deleteBooking = async (id: string) => {
    if (isSupabaseConfigured()) {
      await supabase.from("bookings").delete().eq("id", id);
      fetchBookings();
    } else {
      setBookings(bookings.filter((b) => b.id !== id));
    }
  };

  const handleAddBlog = (e: React.FormEvent) => {
    e.preventDefault();
    if (newBlogTitle) {
      const newPost: BlogPost = {
        title: newBlogTitle,
        slug: newBlogTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        excerpt: newBlogExcerpt || "Detailed structural auditing review.",
        date: "May 22, 2026",
        author: "HouseCheck Engineer",
        category: newBlogCat,
        img: "/apartment-showcase.png",
      };

      setBlogPosts([newPost, ...blogPosts]);
      setNewBlogTitle("");
      setNewBlogExcerpt("");
    }
  };

  if (loading) {
    return (
      <div className="w-full py-32 text-center text-xs font-bold text-brand-muted uppercase tracking-wider animate-pulse-slow">
        Securing Admin Connection...
      </div>
    );
  }

  return (
    <div className="w-full py-16 bg-brand-bg dark:bg-[#19120D] min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-10">
        
        {/* Header toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-brand-accent/30 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-brand-bg">
              <ClipboardCheck className="w-5 h-5 text-brand-accent" />
            </div>
            <div className="flex flex-col">
              <h1 className="font-serif text-2xl font-bold text-brand-dark dark:text-brand-bg">
                CMS Admin Dashboard
              </h1>
              <span className="text-[9px] font-bold text-[#25D366] uppercase tracking-wider">
                ● Live Operations Console
              </span>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-red-500/30 hover:bg-red-500/10 text-red-500 text-xs font-bold w-fit"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>

        {/* Tab Controls split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sidebar Menu Column */}
          <div className="lg:col-span-3 flex flex-row lg:flex-col gap-2.5 overflow-x-auto pb-4 lg:pb-0">
            <button
              onClick={() => setActiveTab("bookings")}
              className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl text-xs font-bold tracking-wide transition-all shrink-0 w-full text-left ${
                activeTab === "bookings"
                  ? "bg-brand-dark text-brand-bg shadow-sm"
                  : "bg-brand-card hover:bg-brand-accent-light text-brand-muted dark:bg-[#231A14] dark:text-zinc-300"
              }`}
            >
              <Calendar className="w-4.5 h-4.5" />
              <span>Inspection Bookings ({bookings.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("blogs")}
              className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl text-xs font-bold tracking-wide transition-all shrink-0 w-full text-left ${
                activeTab === "blogs"
                  ? "bg-brand-dark text-brand-bg shadow-sm"
                  : "bg-brand-card hover:bg-brand-accent-light text-brand-muted dark:bg-[#231A14] dark:text-zinc-300"
              }`}
            >
              <BookOpen className="w-4.5 h-4.5" />
              <span>Manage Blog Posts ({blogPosts.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("faqs")}
              className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl text-xs font-bold tracking-wide transition-all shrink-0 w-full text-left ${
                activeTab === "faqs"
                  ? "bg-brand-dark text-brand-bg shadow-sm"
                  : "bg-brand-card hover:bg-brand-accent-light text-brand-muted dark:bg-[#231A14] dark:text-zinc-300"
              }`}
            >
              <HelpCircle className="w-4.5 h-4.5" />
              <span>General FAQs Editor</span>
            </button>
          </div>

          {/* Main Panel View Column */}
          <div className="lg:col-span-9 bg-brand-card dark:bg-[#231A14] rounded-3xl p-6 md:p-8 border border-brand-accent/50 shadow-sm min-h-[500px]">
            
            {/* 1. BOOKINGS LIST PANEL */}
            {activeTab === "bookings" && (
              <div className="flex flex-col gap-6 animate-fade-in-up">
                <div className="flex justify-between items-center border-b border-brand-accent/30 pb-4">
                  <h2 className="font-serif text-xl font-bold text-brand-dark dark:text-brand-bg">
                    Property Booking Requests
                  </h2>
                  <span className="text-[10px] font-bold text-brand-muted uppercase">
                    Sorted by Recency
                  </span>
                </div>

                {bookings.length > 0 ? (
                  <div className="flex flex-col gap-5">
                    {bookings.map((booking) => (
                      <div
                        key={booking.id}
                        className="bg-brand-bg dark:bg-brand-dark p-6 rounded-2xl border border-brand-accent/40 flex flex-col gap-4 relative overflow-hidden"
                      >
                        {/* Status tag */}
                        <div className="flex items-center justify-between border-b border-brand-accent/20 pb-3">
                          <span className="text-[10px] font-bold text-brand-gold bg-brand-gold/10 border border-brand-gold/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                            Status: {booking.status}
                          </span>
                          <button
                            onClick={() => deleteBooking(booking.id)}
                            className="p-1.5 rounded-full hover:bg-red-500/10 text-red-500 transition-colors"
                            title="Delete record"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Property detail rows */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                          <div className="flex flex-col gap-0.5">
                            <span className="text-[9px] font-bold text-brand-muted uppercase tracking-wider">
                              Client Name
                            </span>
                            <span className="font-bold text-brand-dark dark:text-brand-bg">
                              {booking.full_name}
                            </span>
                          </div>

                          <div className="flex flex-col gap-0.5">
                            <span className="text-[9px] font-bold text-brand-muted uppercase tracking-wider">
                              Property Location
                            </span>
                            <span className="font-semibold text-brand-dark dark:text-brand-bg">
                              {booking.property_location}
                            </span>
                          </div>

                          <div className="flex flex-col gap-0.5">
                            <span className="text-[9px] font-bold text-brand-muted uppercase tracking-wider">
                              Type & Bedrooms
                            </span>
                            <span className="font-semibold text-brand-dark dark:text-brand-bg">
                              {booking.property_type} ({booking.bedrooms} Br)
                            </span>
                          </div>

                          <div className="flex flex-col gap-0.5">
                            <span className="text-[9px] font-bold text-brand-muted uppercase tracking-wider">
                              Preferred Date
                            </span>
                            <span className="font-semibold text-brand-dark dark:text-brand-bg flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                              <span>{booking.preferred_date}</span>
                            </span>
                          </div>
                        </div>

                        {/* Contacts & Notes */}
                        <div className="flex flex-col gap-2 mt-2 pt-4 border-t border-brand-accent/20 text-xs">
                          <div className="flex items-center gap-4 font-semibold text-brand-muted dark:text-brand-accent-light">
                            <span>Phone: {booking.phone_number}</span>
                            <span>●</span>
                            <span>Email: {booking.email}</span>
                          </div>
                          {booking.notes && (
                            <p className="p-3 bg-brand-accent-light/50 dark:bg-brand-dark/50 border border-brand-accent/30 rounded-xl leading-relaxed text-brand-muted dark:text-brand-accent-light italic mt-1">
                              "{booking.notes}"
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 flex flex-col items-center gap-2">
                    <AlertCircle className="w-8 h-8 text-brand-gold" />
                    <span className="text-xs font-bold text-brand-dark dark:text-brand-bg">No Bookings Found</span>
                    <p className="text-[11px] text-brand-muted">
                      No inspection bookings have been submitted yet. Public inquiries will register here automatically.
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* 2. BLOG CMS CRUD PANEL */}
            {activeTab === "blogs" && (
              <div className="flex flex-col gap-6 animate-fade-in-up">
                <div className="flex justify-between items-center border-b border-brand-accent/30 pb-4">
                  <h2 className="font-serif text-xl font-bold text-brand-dark dark:text-brand-bg">
                    Manage Blog Articles
                  </h2>
                  <span className="text-[10px] font-bold text-brand-muted uppercase">
                    CMS Blog CRUD
                  </span>
                </div>

                {/* Add new post form */}
                <form onSubmit={handleAddBlog} className="bg-brand-bg dark:bg-brand-dark p-6 rounded-2xl border border-brand-accent/40 flex flex-col gap-4">
                  <h3 className="font-serif font-bold text-sm text-brand-dark dark:text-brand-bg flex items-center gap-2">
                    <Plus className="w-4 h-4 text-brand-gold" />
                    <span>Create New SEO Article</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-[9px] font-bold text-brand-muted uppercase">Post Title</label>
                      <input
                        type="text"
                        required
                        value={newBlogTitle}
                        onChange={(e) => setNewBlogTitle(e.target.value)}
                        placeholder="e.g. 7 Safety Snags in Nairobi Handovers"
                        className="bg-brand-card dark:bg-[#231A14] px-4 py-2.5 rounded-xl border border-brand-accent/60 outline-none text-xs font-semibold text-brand-dark dark:text-brand-bg"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[9px] font-bold text-brand-muted uppercase">Category</label>
                      <select
                        value={newBlogCat}
                        onChange={(e) => setNewBlogCat(e.target.value)}
                        className="bg-brand-card dark:bg-[#231A14] px-4 py-3 rounded-xl border border-brand-accent/60 outline-none text-xs font-semibold text-brand-dark dark:text-brand-bg cursor-pointer"
                      >
                        <option value="Buying Guide">Buying Guide</option>
                        <option value="Checklist">Checklist</option>
                        <option value="Technology">Technology</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[9px] font-bold text-brand-muted uppercase">Excerpt Description</label>
                    <input
                      type="text"
                      required
                      value={newBlogExcerpt}
                      onChange={(e) => setNewBlogExcerpt(e.target.value)}
                      placeholder="Brief excerpt for search cards listing..."
                      className="bg-brand-card dark:bg-[#231A14] px-4 py-2.5 rounded-xl border border-brand-accent/60 outline-none text-xs font-semibold text-brand-dark dark:text-brand-bg"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-full bg-brand-dark text-brand-bg hover:bg-brand-gold hover:text-brand-dark text-xs font-bold shadow-sm w-fit self-end mt-2"
                  >
                    Add Article Post
                  </button>
                </form>

                {/* List of articles */}
                <div className="flex flex-col gap-4 mt-2">
                  <h3 className="font-serif font-bold text-sm text-brand-dark dark:text-brand-bg">
                    Published Articles Listing
                  </h3>
                  {blogPosts.map((post, pIdx) => (
                    <div
                      key={pIdx}
                      className="bg-brand-bg dark:bg-brand-dark/50 px-5 py-4 rounded-xl border border-brand-accent/30 flex items-center justify-between gap-4 text-xs"
                    >
                      <div className="flex flex-col gap-1">
                        <span className="font-bold text-brand-dark dark:text-brand-bg">{post.title}</span>
                        <span className="text-[10px] text-brand-muted font-semibold">
                          Category: {post.category} ● Date: {post.date}
                        </span>
                      </div>

                      <button
                        onClick={() => setBlogPosts(blogPosts.filter((_, idx) => idx !== pIdx))}
                        className="p-1.5 rounded-full hover:bg-red-500/10 text-red-500"
                        title="Delete article"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. FAQ EDITOR PANEL */}
            {activeTab === "faqs" && (
              <div className="flex flex-col gap-6 animate-fade-in-up">
                <div className="flex justify-between items-center border-b border-brand-accent/30 pb-4">
                  <h2 className="font-serif text-xl font-bold text-brand-dark dark:text-brand-bg">
                    Website FAQ Accordion Manager
                  </h2>
                  <span className="text-[10px] font-bold text-brand-muted uppercase">
                    Inline CMS Editor
                  </span>
                </div>

                <div className="p-4 bg-brand-bg border border-brand-accent rounded-2xl flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0" />
                  <p className="text-xs text-brand-muted dark:text-brand-dark leading-relaxed">
                    This inline manager updates homepage accordions in real-time. Connect your Supabase credentials in your live deployment to store FAQ edits directly inside your Postgres database.
                  </p>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
