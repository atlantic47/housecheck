"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ClipboardCheck, Loader2, ShieldCheck, Mail, Lock } from "lucide-react";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    try {
      // 1. Check if Supabase keys are fully connected
      if (isSupabaseConfigured()) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          throw new Error(error.message);
        }

        // Redirect to admin dashboard on success
        router.push("/admin/dashboard");
      } else {
        // 2. Safe local developer fallback: allow mock login for testing purposes
        if (email === "admin@housecheck.co.ke" && password === "admin123") {
          console.warn("🔐 HOUSECHECK WARNING: Mock admin login bypass triggered (Local Testing Only)");
          
          // Save mock session token to localStorage so dashboard can verify auth
          localStorage.setItem("housecheck_mock_session", "true");
          router.push("/admin/dashboard");
        } else {
          throw new Error("Invalid credentials. Try using: admin@housecheck.co.ke / admin123");
        }
      }
    } catch (err: any) {
      setErrorMsg(err.message || "Authentication failed. Please verify credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full py-20 bg-brand-bg dark:bg-[#19120D] flex items-center justify-center min-h-[70vh]">
      <div className="w-full max-w-sm px-6">
        <div className="bg-brand-card dark:bg-[#231A14] rounded-3xl p-8 border border-brand-accent/50 shadow-md flex flex-col gap-6 animate-fade-in-up">
          
          {/* Logo Branding */}
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="w-11 h-11 rounded-full bg-brand-dark flex items-center justify-center text-brand-bg">
              <ClipboardCheck className="w-5 h-5 text-brand-accent" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-serif text-xl font-bold tracking-tight text-brand-dark dark:text-brand-bg">
                HouseCheck Admin
              </span>
              <span className="text-[10px] text-brand-muted dark:text-brand-accent-light uppercase font-bold tracking-wider">
                CMS Access Portal
              </span>
            </div>
          </div>

          {/* Alert Warning for Local testing mock credentials */}
          {!isSupabaseConfigured() && (
            <div className="p-3 bg-brand-accent-light border border-brand-accent rounded-xl text-[10px] text-brand-muted leading-relaxed">
              💡 <strong>Local Sandbox Mode:</strong> Supabase env variables not configured yet. Test the portal using:<br />
              <strong className="text-brand-dark dark:text-brand-bg">admin@housecheck.co.ke</strong> / <strong className="text-brand-dark dark:text-brand-bg">admin123</strong>
            </div>
          )}

          {/* Errors display */}
          {errorMsg && (
            <div className="p-3.5 bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-semibold leading-relaxed rounded-xl">
              ⚠️ {errorMsg}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            
            {/* Email input */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-brand-muted uppercase tracking-wider flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-brand-gold" />
                <span>Admin Email</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@housecheck.co.ke"
                className="w-full bg-brand-bg dark:bg-brand-dark px-4 py-3 rounded-xl border border-brand-accent/60 outline-none text-xs font-semibold text-brand-dark dark:text-brand-bg"
              />
            </div>

            {/* Password input */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-brand-muted uppercase tracking-wider flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-brand-gold" />
                <span>Password</span>
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-brand-bg dark:bg-brand-dark px-4 py-3 rounded-xl border border-brand-accent/60 outline-none text-xs font-semibold text-brand-dark dark:text-brand-bg"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 rounded-full bg-brand-dark text-brand-bg hover:bg-brand-gold hover:text-brand-dark text-xs font-bold tracking-wide shadow-sm flex items-center justify-center gap-2 mt-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Verifying Account...</span>
                </>
              ) : (
                <span>Log In to Dashboard</span>
              )}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
