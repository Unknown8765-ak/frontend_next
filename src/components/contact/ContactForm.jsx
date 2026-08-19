"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { sendContactMessage } from "@/services/contact/contactService";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const response = await sendContactMessage(data);

      alert(response.message || "Message sent successfully");

      reset();
    } catch (error) {
      alert(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 md:py-28">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-blue-600" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Contact Form
            </span>
          </div>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Request a{" "}
            <span className="bg-linear-to-r from-blue-600 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
              Free Consultation
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
            Tell us about your requirements and our team will get back to you
            with the right solution.
          </p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative mt-14 overflow-hidden rounded-4xl border border-white/80 bg-white/80 p-5 shadow-[0_25px_80px_rgba(15,23,42,0.10)] backdrop-blur-xl sm:p-8 md:mt-16 md:p-10"
        >
          {/* Inner Gradient */}
          <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-blue-50/70 via-transparent to-cyan-50/60" />

          {/* Top Accent */}
          <div className="absolute left-0 right-0 top-0 h-1 bg-linear-to-r from-blue-600 via-sky-500 to-cyan-500" />

          <div className="relative">
            {/* Form Intro */}
            <div className="mb-8 flex flex-col gap-3 border-b border-slate-100 pb-7 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Let&apos;s talk about your project
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  All fields are required to help us understand your needs.
                </p>
              </div>

              <div className="hidden rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-600 sm:block">
                ● We&apos;re available
              </div>
            </div>

            {/* Fields */}
            <div className="grid gap-5 md:grid-cols-2">
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className={`w-full rounded-2xl border bg-white/90 px-5 py-4 text-slate-900 shadow-sm outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:-translate-y-0.5 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 ${
                    errors.name
                      ? "border-red-300 focus:border-red-500 focus:ring-red-500/10"
                      : "border-slate-200"
                  }`}
                  {...register("name", {
                    required: "Name is required",
                  })}
                />

                {errors.name && (
                  <p className="mt-2 px-1 text-sm font-medium text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="john@example.com"
                  className={`w-full rounded-2xl border bg-white/90 px-5 py-4 text-slate-900 shadow-sm outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:-translate-y-0.5 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 ${
                    errors.email
                      ? "border-red-300 focus:border-red-500 focus:ring-red-500/10"
                      : "border-slate-200"
                  }`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Enter a valid email",
                    },
                  })}
                />

                {errors.email && (
                  <p className="mt-2 px-1 text-sm font-medium text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="9876543210"
                  className={`w-full rounded-2xl border bg-white/90 px-5 py-4 text-slate-900 shadow-sm outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:-translate-y-0.5 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 ${
                    errors.phone
                      ? "border-red-300 focus:border-red-500 focus:ring-red-500/10"
                      : "border-slate-200"
                  }`}
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[6-9]\d{9}$/,
                      message: "Enter a valid Indian phone number",
                    },
                  })}
                />

                {errors.phone && (
                  <p className="mt-2 px-1 text-sm font-medium text-red-500">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="How can we help?"
                  className={`w-full rounded-2xl border bg-white/90 px-5 py-4 text-slate-900 shadow-sm outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:-translate-y-0.5 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 ${
                    errors.subject
                      ? "border-red-300 focus:border-red-500 focus:ring-red-500/10"
                      : "border-slate-200"
                  }`}
                  {...register("subject", {
                    required: "Subject is required",
                  })}
                />

                {errors.subject && (
                  <p className="mt-2 px-1 text-sm font-medium text-red-500">
                    {errors.subject.message}
                  </p>
                )}
              </div>
            </div>

            {/* Message */}
            <div className="mt-5">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Your Message
              </label>

              <textarea
                rows={6}
                placeholder="Tell us about your requirements, project, budget or anything else you'd like us to know..."
                className={`w-full resize-none rounded-2xl border bg-white/90 px-5 py-4 text-slate-900 shadow-sm outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:-translate-y-0.5 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 ${
                  errors.message
                    ? "border-red-300 focus:border-red-500 focus:ring-red-500/10"
                    : "border-slate-200"
                }`}
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message must contain at least 10 characters",
                  },
                })}
              />

              {errors.message && (
                <p className="mt-2 px-1 text-sm font-medium text-red-500">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <div className="mt-8">
              <button
                type="submit"
                disabled={loading}
                className="group relative flex w-full items-center justify-center overflow-hidden rounded-2xl bg-linear-to-r from-blue-600 via-sky-600 to-cyan-500 px-6 py-4 text-base font-bold text-white shadow-[0_12px_30px_rgba(37,99,235,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(37,99,235,0.35)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:text-lg"
              >
                <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <span className="relative flex items-center justify-center gap-3">
                  {loading ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </>
                  )}
                </span>
              </button>

              <p className="mt-4 text-center text-xs text-slate-400">
                Your information is secure and will only be used to contact
                you regarding your request.
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;