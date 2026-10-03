import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, HelpCircle } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!name.trim()) {
      errs.name = 'Please provide your full name.';
    } else if (name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    if (!email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = 'Please provide a valid email format (e.g. name@domain.com).';
    }

    if (!subject.trim()) {
      errs.subject = 'Please select or enter an inquiry topic.';
    }

    if (!message.trim()) {
      errs.message = 'Please include a message for our support staff.';
    } else if (message.trim().length < 15) {
      errs.message = 'Message must contain at least 15 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setErrors({});
    setIsSubmitted(false);
  };

  const faqs = [
    {
      q: 'How long does shipping typically take?',
      a: 'Standard ground orders typically arrive within 3–5 business days. Express next-day dispatch is available for orders confirmed before 2:00 PM EST.',
    },
    {
      q: 'What is your return policy?',
      a: 'We offer a 30-day trial period on all items. If you are not completely satisfied, we provide a prepaid return label and instant refund upon receipt.',
    },
    {
      q: 'Does ShopEase ship internationally?',
      a: 'Yes! We ship worldwide with all applicable customs duties and import taxes calculated transparently at checkout.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      {/* Header */}
      <div className="max-w-2xl space-y-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
          Customer Service & Inquiries
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
          We’re here to help.
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          Have an inquiry regarding a product specification, shipment tracking, or bespoke order? Fill out the form below or reach our concierge team directly.
        </p>
      </div>

      {/* Grid: Form (Left) + Contact Details & Info (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Form Container */}
        <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs">
          {isSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">
                Message successfully transmitted!
              </h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you for contacting us, <span className="font-semibold text-slate-800">{name}</span>. A confirmation has been routed to{' '}
                <span className="font-semibold text-slate-800">{email}</span>. A customer concierge specialist will respond within 24 hours.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <h2 className="text-lg font-bold text-slate-900 font-display">
                Send Us a Message
              </h2>

              {/* Name Field */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
                  }}
                  placeholder="e.g. Jordan Smith"
                  className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all ${
                    errors.name ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                  }`}
                />
                {errors.name && <p className="text-xs text-rose-500 mt-1">{errors.name}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
                  }}
                  placeholder="jordan@example.com"
                  className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all ${
                    errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                  }`}
                />
                {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Subject / Topic <span className="text-rose-500">*</span>
                </label>
                <select
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                    if (errors.subject) setErrors((prev) => ({ ...prev, subject: '' }));
                  }}
                  className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all ${
                    errors.subject ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                  }`}
                >
                  <option value="">Select a topic...</option>
                  <option value="Order Status & Delivery">Order Status & Delivery</option>
                  <option value="Product Details & Sizing">Product Details & Sizing</option>
                  <option value="Returns & Exchanges">Returns & Exchanges</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Corporate / Bulk Order">Corporate / Bulk Order</option>
                  <option value="Other Inquiry">Other Inquiry</option>
                </select>
                {errors.subject && <p className="text-xs text-rose-500 mt-1">{errors.subject}</p>}
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Your Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (errors.message) setErrors((prev) => ({ ...prev, message: '' }));
                  }}
                  placeholder="Please describe how we can assist you..."
                  className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all ${
                    errors.message ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                  }`}
                />
                {errors.message && <p className="text-xs text-rose-500 mt-1">{errors.message}</p>}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors shadow-sm disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Contact Info & FAQ Side Column */}
        <div className="lg:col-span-5 space-y-6">
          {/* Direct channels card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Direct Contact Channels
            </h3>

            <div className="space-y-3.5 text-xs text-slate-600">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-900 block">Email Support</span>
                  <a
                    href="mailto:support@shopease-catalog.com"
                    className="text-slate-600 hover:text-emerald-700"
                  >
                    support@shopease-catalog.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-900 block">Toll-Free Phone</span>
                  <span className="text-slate-600">+1 (800) 555-0199</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-900 block">Service Hours</span>
                  <span className="text-slate-600">Monday – Friday: 9am – 7pm EST</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-900 block">Design Studio</span>
                  <span className="text-slate-600">
                    540 Howard Street, SoMa Design District, San Francisco, CA 94105
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick FAQ card */}
          <div className="bg-[#F8F8F7] p-6 rounded-3xl border border-slate-200/80 space-y-4">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-slate-900" />
              <h3 className="text-sm font-bold text-slate-900 font-display">
                Frequently Asked Questions
              </h3>
            </div>

            <div className="space-y-3 divide-y divide-slate-200/70 text-xs">
              {faqs.map((f, idx) => (
                <div key={idx} className={idx > 0 ? 'pt-3' : ''}>
                  <p className="font-semibold text-slate-900">{f.q}</p>
                  <p className="text-slate-600 mt-1 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
