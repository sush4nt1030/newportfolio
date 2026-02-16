import { Link } from "react-router";
import { ArrowRight, Sparkles, Briefcase, Mail } from "lucide-react";
import { motion } from "motion/react";
import SEO from "../components/SEO";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const featuredServices = [
    {
      id: "graphic-design",
      title: "Graphic Design",
      description: "Visual identity, branding, and creative designs that make an impact",
      icon: Sparkles,
    },
    {
      id: "web-design",
      title: "Web Design & Development",
      description: "Modern, responsive websites built with the latest technologies",
      icon: Briefcase,
    },
    {
      id: "social-media",
      title: "Social Media Management",
      description: "Strategic content creation and community engagement",
      icon: Mail,
    },
  ];

  return (
    <>
      <SEO
        title="Home - Creative Designer & Digital Solutions"
        description="Sushant Budha Chhetri, founder of Twilr Production. Professional graphic designer and web developer offering creative digital solutions including branding, web design, WordPress development, and social media management."
        keywords="graphic design, web design, portfolio, creative designer, Twilr Production, Nepal designer, branding, WordPress developer"
      />
      
      <div className="w-full">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
            <motion.div
              initial="initial"
              animate="animate"
              variants={stagger}
              className="max-w-4xl mx-auto text-center space-y-8"
            >
              <motion.div variants={fadeInUp} className="inline-block">
                <span className="inline-block px-4 py-2 rounded-full bg-accent text-sm mb-4">
                  Creative Digital Solutions
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              >
                Building Digital Experiences That
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {" "}
                  Drive Growth
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
              >
                Hi, I'm Sushant Budha Chhetri, founder of Twilr Production. I help businesses establish
                their digital presence through creative design, strategic development, and innovative solutions.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  View Portfolio
                  <ArrowRight className="ml-2" size={18} />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border hover:bg-accent transition-colors"
                >
                  Explore Services
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border hover:bg-accent transition-colors"
                >
                  Contact Me
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        </section>

        {/* About Preview */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                  Turning Creative Vision Into Digital Reality
                </h2>
                <p className="text-muted-foreground mb-4">
                  With years of experience in graphic design, web development, and digital strategy,
                  I've helped numerous businesses establish and grow their online presence.
                </p>
                <p className="text-muted-foreground mb-6">
                  Twilr Production was born from a passion for creativity and a commitment to delivering
                  exceptional results that exceed client expectations.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center text-primary hover:underline"
                >
                  Learn more about my journey
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 gap-6"
              >
                <div className="space-y-6">
                  <div className="bg-card border border-border rounded-lg p-6">
                    <div className="text-3xl font-bold text-primary mb-2">5+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-6">
                    <div className="text-3xl font-bold text-primary mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                </div>
                <div className="space-y-6 pt-8">
                  <div className="bg-card border border-border rounded-lg p-6">
                    <div className="text-3xl font-bold text-primary mb-2">30+</div>
                    <div className="text-sm text-muted-foreground">Happy Clients</div>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-6">
                    <div className="text-3xl font-bold text-primary mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Services I Offer</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive digital solutions tailored to your business needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link
                    to={`/services/${service.id}`}
                    className="block group bg-card border border-border rounded-lg p-8 hover:shadow-lg hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="text-primary" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="flex items-center text-primary">
                      Learn more
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-12"
            >
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border hover:bg-accent transition-colors"
              >
                View All Services
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-purple-500/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-semibold">
                Ready to Elevate Your Digital Presence?
              </h2>
              <p className="text-lg text-muted-foreground">
                Let's collaborate to create something exceptional. Whether you need a complete brand overhaul
                or a new website, I'm here to help bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Start a Project
                  <ArrowRight className="ml-2" size={18} />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border hover:bg-accent transition-colors"
                >
                  View My Work
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}