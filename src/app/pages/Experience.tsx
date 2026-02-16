import { motion } from "motion/react";
import { Briefcase, GraduationCap, Users, Award } from "lucide-react";

export default function Experience() {
  const timeline = [
    {
      year: "2024 - Present",
      title: "Founder & Creative Director",
      company: "Twilr Production",
      type: "entrepreneurship",
      description: "Founded Twilr Production to provide comprehensive creative and digital solutions. Managing all aspects of client projects from strategy to execution, building a growing portfolio of successful collaborations.",
      achievements: [
        "Successfully completed 20+ client projects",
        "Built strong reputation in local business community",
        "Developed efficient workflow and project management systems",
        "Established partnerships with complementary service providers",
      ],
    },
    {
      year: "2023 - 2024",
      title: "Senior Digital Designer",
      company: "Creative Agency XYZ",
      type: "employment",
      description: "Led design projects for diverse clients across industries. Managed junior designers, collaborated with development teams, and ensured quality delivery of all projects.",
      achievements: [
        "Led team of 3 designers on major client projects",
        "Improved design workflow reducing project timeline by 25%",
        "Maintained 100% client satisfaction rate",
        "Mentored junior designers in design best practices",
      ],
    },
    {
      year: "2022 - 2023",
      title: "WordPress Developer & Designer",
      company: "Digital Solutions Inc.",
      type: "employment",
      description: "Specialized in WordPress development and custom theme creation. Worked closely with clients to understand their needs and deliver tailored solutions.",
      achievements: [
        "Developed 15+ custom WordPress websites",
        "Implemented e-commerce solutions for 8 clients",
        "Reduced website loading times by average of 40%",
        "Trained clients on WordPress CMS management",
      ],
    },
    {
      year: "2021 - 2022",
      title: "Design Intern",
      company: "Innovative Media Group",
      type: "internship",
      description: "Gained hands-on experience in a fast-paced agency environment. Contributed to various projects including brand identity, social media campaigns, and print materials.",
      achievements: [
        "Contributed to 10+ client projects",
        "Designed social media content for major brands",
        "Learned industry-standard workflows and tools",
        "Received offer for full-time position",
      ],
    },
    {
      year: "2020 - 2021",
      title: "Freelance Designer",
      company: "Self-Employed",
      type: "freelance",
      description: "Started freelancing while completing education. Worked with small businesses and startups on branding, web design, and marketing materials.",
      achievements: [
        "Completed 25+ freelance projects",
        "Built initial client base through referrals",
        "Developed project management skills",
        "Established pricing and contract systems",
      ],
    },
    {
      year: "2019 - 2020",
      title: "Graphic Design Student",
      company: "Design Institute",
      type: "education",
      description: "Intensive study of design principles, typography, color theory, and industry-standard software. Completed various projects and collaborated with classmates on team assignments.",
      achievements: [
        "Graduated with honors",
        "Won student design competition",
        "Completed comprehensive portfolio",
        "Learned Adobe Creative Suite mastery",
      ],
    },
  ];

  const skills = [
    { category: "Design", items: ["Adobe Creative Suite", "Figma", "Sketch", "UI/UX Design", "Brand Identity"] },
    { category: "Development", items: ["HTML/CSS", "JavaScript", "React", "WordPress", "PHP"] },
    { category: "Marketing", items: ["Social Media Strategy", "Content Creation", "SEO", "Analytics"] },
    { category: "Management", items: ["Project Management", "Client Relations", "Team Leadership", "Time Management"] },
  ];

  const certifications = [
    { name: "Advanced WordPress Development", issuer: "WordPress Academy", year: "2023" },
    { name: "UI/UX Design Professional", issuer: "Design Institute", year: "2022" },
    { name: "Digital Marketing Fundamentals", issuer: "Marketing Hub", year: "2021" },
    { name: "Adobe Certified Professional", issuer: "Adobe", year: "2020" },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "entrepreneurship":
        return Award;
      case "employment":
        return Briefcase;
      case "internship":
        return Users;
      case "freelance":
        return Briefcase;
      case "education":
        return GraduationCap;
      default:
        return Briefcase;
    }
  };

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
            <h1 className="text-4xl md:text-5xl font-bold">Experience & Journey</h1>
            <p className="text-lg text-muted-foreground">
              A timeline of growth, learning, and professional development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2" />

              {/* Timeline Items */}
              <div className="space-y-16">
                {timeline.map((item, index) => {
                  const Icon = getIcon(item.type);
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`relative flex items-center ${
                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      {/* Icon Badge */}
                      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center z-10 shadow-lg">
                        <Icon size={24} />
                      </div>

                      {/* Content */}
                      <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12 pl-20" : "md:pl-12 pl-20"}`}>
                        <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                          <div className="text-sm text-primary font-semibold mb-2">{item.year}</div>
                          <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                          <div className="text-muted-foreground mb-4">{item.company}</div>
                          <p className="text-muted-foreground mb-4">{item.description}</p>
                          <div className="space-y-2">
                            <div className="font-medium text-sm">Key Achievements:</div>
                            <ul className="space-y-1">
                              {item.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-semibold mb-4">Skills Developed</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Diverse skill set acquired through education, work experience, and continuous learning
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-muted rounded-md text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-semibold mb-4">Certifications & Training</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Continuous professional development and industry recognition
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{cert.name}</h3>
                  <div className="text-sm text-muted-foreground">{cert.issuer}</div>
                  <div className="text-sm text-muted-foreground">{cert.year}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
              Let's Build Something Together
            </h2>
            <p className="text-lg text-muted-foreground">
              With diverse experience and a passion for excellence, I'm ready to help bring your project to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border hover:bg-accent transition-colors"
              >
                View Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
