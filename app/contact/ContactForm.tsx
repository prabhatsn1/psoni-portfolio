"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-2xl border border-green-500/20 bg-green-500/5 p-12 text-center"
        >
          <div className="text-4xl">✓</div>
          <h3 className="mt-4 text-xl font-semibold text-white">
            Message Sent!
          </h3>
          <p className="mt-2 text-sm text-zinc-400">
            Thanks for reaching out. I&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="space-y-6"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm text-zinc-400"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-xl border border-white/10 bg-zinc-900/50 px-4 py-3 text-sm text-white placeholder-zinc-600 transition-colors outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/25"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm text-zinc-400"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-white/10 bg-zinc-900/50 px-4 py-3 text-sm text-white placeholder-zinc-600 transition-colors outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/25"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="mb-2 block text-sm text-zinc-400"
            >
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              className="w-full rounded-xl border border-white/10 bg-zinc-900/50 px-4 py-3 text-sm text-white placeholder-zinc-600 transition-colors outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/25"
              placeholder="Project inquiry"
            />
          </div>

          <div>
            <label
              htmlFor="budget"
              className="mb-2 block text-sm text-zinc-400"
            >
              Budget Range
            </label>
            <select
              id="budget"
              name="budget"
              className="w-full rounded-xl border border-white/10 bg-zinc-900/50 px-4 py-3 text-sm text-white transition-colors outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/25"
            >
              <option value="">Select a range</option>
              <option value="5k-10k">$5K – $10K</option>
              <option value="10k-25k">$10K – $25K</option>
              <option value="25k-50k">$25K – $50K</option>
              <option value="50k+">$50K+</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm text-zinc-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full resize-none rounded-xl border border-white/10 bg-zinc-900/50 px-4 py-3 text-sm text-white placeholder-zinc-600 transition-colors outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/25"
              placeholder="Tell me about your project..."
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full rounded-xl bg-indigo-500 px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-indigo-400"
          >
            Send Message
          </motion.button>
        </form>
      )}
    </div>
  );
}
