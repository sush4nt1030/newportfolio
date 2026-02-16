import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // In a real application, this would send data to a backend
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@twilrproduction.com",
      link: "mailto:contact@twilrproduction.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+977 123-456-7890",
      link: "tel:+9771234567890",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Kathmandu, Nepal",
      link: null,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
            <p className="text-lg text-muted-foreground">
              Let's discuss your project and how I can help bring your vision to life
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-semibold mb-4">Let's Connect</h2>
                <p className="text-muted-foreground text-lg">
                  Whether you have a project in mind, need a quote, or just want to say hello,
                  I'd love to hear from you. Fill out the form or use the contact information below.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-medium mb-1">{info.title}</div>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-muted-foreground">{info.value}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-lg p-6">
                <h3 className="font-semibold mb-3">Response Time</h3>
                <p className="text-muted-foreground">
                  I typically respond to all inquiries within 24 hours during business days.
                  For urgent matters, please mention it in your message.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-lg p-6">
                <h3 className="font-semibold mb-3">Working Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Friday: 9:00 AM - 6:00 PM (NPT)<br />
                  Saturday: 10:00 AM - 4:00 PM (NPT)<br />
                  Sunday: Closed
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-3"
                  >
                    <CheckCircle className="text-green-600 dark:text-green-400" size={20} />
                    <div>
                      <div className="font-medium text-green-900 dark:text-green-100">Message sent successfully!</div>
                      <div className="text-sm text-green-700 dark:text-green-300">I'll get back to you soon.</div>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.name ? "border-destructive" : "border-border"
                      } bg-background focus:outline-none focus:ring-2 focus:ring-primary/50`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-destructive">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email ? "border-destructive" : "border-border"
                      } bg-background focus:outline-none focus:ring-2 focus:ring-primary/50`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-destructive">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.subject ? "border-destructive" : "border-border"
                      } bg-background focus:outline-none focus:ring-2 focus:ring-primary/50`}
                      placeholder="What's this about?"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-destructive">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.message ? "border-destructive" : "border-border"
                      } bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none`}
                      placeholder="Tell me about your project..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-destructive">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send size={18} />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-semibold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  question: "What's your typical project timeline?",
                  answer: "Project timelines vary depending on scope and complexity. A simple logo design might take 1-2 weeks, while a complete website can take 4-8 weeks. I provide detailed timelines during our initial consultation.",
                },
                {
                  question: "What information do you need to get started?",
                  answer: "I'll need information about your business, goals, target audience, and any specific requirements. For branding projects, inspiration examples are helpful. For websites, content and functionality requirements are essential.",
                },
                {
                  question: "Do you offer ongoing support and maintenance?",
                  answer: "Yes! I offer various support and maintenance packages for websites and can provide ongoing design support for your marketing materials. We can discuss the best option for your needs.",
                },
                {
                  question: "What are your payment terms?",
                  answer: "I typically require a 50% deposit to start a project, with the remaining 50% due upon completion. For larger projects, we can arrange milestone-based payments. All details are outlined in the project contract.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-lg p-6"
                >
                  <h3 className="font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
