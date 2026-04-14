// app/financing/page.js
"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import {
  Calculator,
  CreditCard,
  CheckCircle,
  Shield,
  Clock,
  Percent,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  FileText,
  ThumbsUp,
  Star,
} from "lucide-react";
import Link from "next/link";
import CurrencySelector from "@/components/CurrencySelector";
import { useCurrency } from "@/context/CurrencyContext";
export default function Financing() {
  const {formatPrice} = useCurrency();

  const [loanAmount, setLoanAmount] = useState(65000);
  const [downPayment, setDownPayment] = useState(6500);
  const [interestRate, setInterestRate] = useState(4.9);
  const [loanTerm, setLoanTerm] = useState(60);
  const [openFaq, setOpenFaq] = useState(null);

  // Calculate monthly payment
  const principal = loanAmount - downPayment;
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm;
  const monthlyPayment =
    principal > 0 && interestRate > 0
      ? (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
      : principal / numberOfPayments;

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const benefits = [
    {
      icon: Calculator,
      title: "Custom Terms",
      description:
        "Choose terms from 24 to 84 months to fit your monthly budget comfortably. We tailor each plan to your needs.",
    },
    {
      icon: CreditCard,
      title: "Easy Approval",
      description:
        "95% of our customers get approved in under 15 minutes using our secure digital portal. Soft credit check won't affect your score.",
    },
    {
      icon: CheckCircle,
      title: "No Hidden Fees",
      description:
        "Transparent pricing structure. What you see on the term sheet is what you pay. No surprises, ever.",
    },
    {
      icon: Shield,
      title: "Payment Protection",
      description:
        "Optional GAP insurance and extended warranties available to protect your investment.",
    },
    {
      icon: Clock,
      title: "Fast Processing",
      description:
        "Same-day funding available. Drive home in your new vehicle today.",
    },
    {
      icon: Percent,
      title: "Competitive Rates",
      description:
        "We work with 20+ lenders to find you the lowest APR possible, regardless of credit history.",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Apply Online",
      description:
        "Fill out our secure 2-minute application. No SSN required for pre-qualification.",
    },
    {
      step: "02",
      title: "Get Approved",
      description:
        "Receive multiple loan offers from our network of trusted lenders within minutes.",
    },
    {
      step: "03",
      title: "Choose Your Car",
      description:
        "Shop our inventory with confidence knowing your exact budget and terms.",
    },
    {
      step: "04",
      title: "Drive Home",
      description:
        "Sign electronically and drive away the same day. It's that simple.",
    },
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "Tesla Model Y Owner",
      content:
        "I was worried about financing with my credit score, but Prestige Motors got me a rate better than my bank. The process was so smooth!",
      rating: 5,
    },
    {
      name: "Robert Kim",
      role: "BMW X5 Owner",
      content:
        "Applied from my phone while at work, got approved in 10 minutes, and picked up my car the next day. Incredible service.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "Will checking my rate affect my credit score?",
      answer:
        "No, our initial pre-qualification uses a soft credit inquiry that doesn't impact your credit score. A hard inquiry only occurs if you proceed with a full application.",
    },
    {
      question: "What documents do I need to apply?",
      answer:
        "For pre-qualification, just basic information. For final approval, you'll need proof of income (pay stubs or bank statements), proof of residence, and a valid driver's license.",
    },
    {
      question: "Can I finance with bad credit?",
      answer:
        "Yes! We work with a diverse network of lenders who specialize in all credit situations. Many customers with challenged credit qualify for competitive rates.",
    },
    {
      question: "Is there a prepayment penalty?",
      answer:
        "No. All our financing options allow you to pay off your loan early without any penalties or extra fees.",
    },
    {
      question: "Do you offer lease options?",
      answer:
        "Yes, we offer flexible lease terms on most new and select pre-owned vehicles. Leasing can often lower your monthly payments.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 pt-28 sm:pt-32 pb-16 sm:pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Flexible Financing Options
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            We partner with over 20 top lenders to get you the best rate possible,
            regardless of your credit history. Apply in minutes, drive today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-bold text-base transition shadow-lg shadow-blue-600/30">
              Apply for Financing
            </button>
            <Link
              href="/inventory"
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-3.5 rounded-full font-bold text-base transition"
            >
              Browse Inventory
            </Link>
          </div>
        </div>
      </section>

      {/* Loan Calculator Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Estimate Your Monthly Payment
            </h2>
            <p className="text-slate-600">
              Adjust the sliders to see how different terms affect your payment.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Sliders */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Vehicle Price: {formatPrice(loanAmount)}
                  </label>
                  <input
                    type="range"
                    min="20000"
                    max="150000"
                    step="1000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>$20k</span>
                    <span>$150k</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Down Payment: {formatPrice(downPayment)}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max={loanAmount}
                    step="500"
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>$0</span>
                    <span>{formatPrice(loanAmount)}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    APR: {interestRate}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="15"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>0%</span>
                    <span>15%</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Loan Term: {loanTerm} months
                  </label>
                  <select
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value={36}>36 months</option>
                    <option value={48}>48 months</option>
                    <option value={60}>60 months</option>
                    <option value={72}>72 months</option>
                    <option value={84}>84 months</option>
                  </select>
                </div>
              </div>

              {/* Results */}
              <div className="bg-slate-50 rounded-xl p-6 flex flex-col justify-center">
                <p className="text-slate-500 text-sm mb-2">Estimated Monthly Payment</p>
                <p className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                  {formatPrice(monthlyPayment)}
                  <span className="text-slate-400 text-base font-normal">/mo</span>
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Loan Amount:</span>
                    <span className="font-medium">{formatPrice(principal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Total Interest:</span>
                    <span className="font-medium">
                      {formatPrice(monthlyPayment * loanTerm - principal)}
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-200">
                    <span className="text-slate-600">Total Cost:</span>
                    <span className="font-bold">{formatPrice(monthlyPayment * loanTerm + downPayment)}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 mt-4">
                  *This is an estimate. Actual terms may vary based on credit approval.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Why Finance with Prestige Motors?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We make car financing simple, transparent, and accessible for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-gray-100 hover:shadow-md transition"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-5">
                  <benefit.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              How It Works
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Four simple steps to get behind the wheel of your dream car.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-2xl border border-gray-200 h-full">
                  <span className="text-4xl font-bold text-blue-600/20 mb-4 block">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-slate-300">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              What Our Customers Say
            </h2>
            <p className="text-slate-600">
              Real stories from drivers who financed with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-50 p-6 sm:p-8 rounded-2xl">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600">
              Everything you need to know about financing with Prestige Motors.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition"
                >
                  <span className="font-medium text-slate-900 pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 sm:p-12 text-center text-white shadow-xl">
            <FileText className="w-12 h-12 mx-auto mb-4 text-white/80" />
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Get Approved?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              Fill out our secure online credit application and get a decision in minutes.
              It won't affect your credit score to check rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3.5 rounded-full font-bold hover:bg-slate-100 transition shadow-lg">
                Apply for Financing
              </button>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white/30 text-white px-8 py-3.5 rounded-full font-bold hover:bg-white/10 transition"
              >
                Speak with a Specialist
              </Link>
            </div>
            <div className="flex items-center justify-center gap-6 mt-8 text-xs sm:text-sm text-blue-100">
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4" />
                <span>Secure Application</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>Takes 2 Minutes</span>
              </div>
              <div className="flex items-center gap-1">
                <ThumbsUp className="w-4 h-4" />
                <span>No Impact on Score</span>
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