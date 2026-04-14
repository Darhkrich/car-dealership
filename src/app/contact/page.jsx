// app/contact/page.js
"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  Car,
  Wrench,
  DollarSign,
 
} from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFormStatus({ submitted: false, error: false, message: "" });

    // Simulate form submission (replace with actual API call)
    try {
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormStatus({
        submitted: true,
        error: false,
        message: "Thank you! Your message has been sent. We'll respond within 24 hours.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        interest: "",
        message: "",
      });
    } catch (error) {
      setFormStatus({
        submitted: false,
        error: true,
        message: "Something went wrong. Please try again or call us directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  const departments = [
    {
      icon: Car,
      title: "Sales",
      phone: "(555) 123-4567",
      email: "sales@prestigemotors.com",
      description: "New & pre-owned vehicle inquiries, test drives, pricing",
    },
    {
      icon: Wrench,
      title: "Service",
      phone: "(555) 123-4568",
      email: "service@prestigemotors.com",
      description: "Schedule maintenance, repairs, parts inquiries",
    },
    {
      icon: DollarSign,
      title: "Finance",
      phone: "(555) 123-4569",
      email: "finance@prestigemotors.com",
      description: "Financing, leasing, trade-in appraisals",
    },
  ];

  
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 pt-28 sm:pt-32 pb-16 sm:pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Let's Connect
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Our team is ready to assist you with any questions about our vehicles, financing,
            or services. Reach out and we'll respond promptly.
          </p>
        </div>
      </section>

      {/* Department Contact Cards */}
      <section className="py-12 sm:py-16 px-4 -mt-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-5">
                  <dept.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{dept.title}</h3>
                <p className="text-slate-500 text-sm mb-4">{dept.description}</p>
                <div className="space-y-2">
                  <a
                    href={`tel:${dept.phone.replace(/\D/g, "")}`}
                    className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">{dept.phone}</span>
                  </a>
                  <a
                    href={`mailto:${dept.email}`}
                    className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{dept.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
              <p className="text-slate-500 text-sm mb-6">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-50 border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-50 border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-50 border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    I'm interested in *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-50 border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                  >
                    <option value="">Select an option</option>
                    <option value="sales">Buying a Vehicle</option>
                    <option value="service">Service / Repair</option>
                    <option value="finance">Financing / Lease</option>
                    <option value="trade">Trade-in Appraisal</option>
                    <option value="other">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-50 border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                {/* Form Status Message */}
                {formStatus.message && (
                  <div
                    className={`p-4 rounded-lg flex items-start gap-3 ${
                      formStatus.error
                        ? "bg-red-50 text-red-800"
                        : "bg-green-50 text-green-800"
                    }`}
                  >
                    {formStatus.error ? (
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    ) : (
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    )}
                    <span className="text-sm">{formStatus.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-xs text-slate-400 text-center mt-4">
                  By submitting this form, you agree to our{" "}
                  <Link href="/privacy" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            </div>

            {/* Right Column - Location & Hours */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="aspect-video bg-slate-200 relative">
                  {/* Replace with actual map embed or Next.js Image */}
                  <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200"
                    alt="Prestige Motors Showroom Location"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="bg-white rounded-lg px-4 py-2 shadow-lg">
                      <p className="text-sm font-medium text-slate-900 flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-blue-600" />
                        123 Luxury Lane, Beverly Hills, CA 90210
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">Visit Our Showroom</h3>
                  <div className="space-y-3 text-slate-600">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Prestige Motors Beverly Hills</p>
                        <p className="text-sm">123 Luxury Lane</p>
                        <p className="text-sm">Beverly Hills, CA 90210</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div className="w-full">
                        <p className="font-medium mb-2">Business Hours</p>
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span>Monday - Friday</span>
                            <span className="font-medium text-slate-900">9:00 AM - 7:00 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Saturday</span>
                            <span className="font-medium text-slate-900">10:00 AM - 5:00 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Sunday</span>
                            <span className="text-red-500 font-medium">Closed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Connect */}
              <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Prefer a Quick Call?</h3>
                <p className="text-slate-300 text-sm mb-6">
                  Our sales specialists are standing by to answer your questions immediately.
                </p>
                <a
                  href="tel:+15551234567"
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-bold transition w-full"
                >
                  <Phone className="w-5 h-5" />
                  Call (555) 123-4567
                </a>
               
              </div>

              {/* Response Time Guarantee */}
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-900 mb-1">24-Hour Response</p>
                    <p className="text-slate-600 text-sm">
                      We pride ourselves on fast communication. All inquiries receive a response
                      within one business day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Spacer */}
      <div className="h-8" />
    </main>
  );
}