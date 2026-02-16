import { motion } from "motion/react";
import { Target, Eye, Heart, Users, Code, Palette, TrendingUp, Lightbulb } from "lucide-react";
import SEO from "../components/SEO";

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const timeline = [
    {
      year: "2018",
      title: "The Beginning",
      description: "Discovered my passion for design and started learning graphic design tools like Photoshop and Illustrator during high school.",
    },
    {
      year: "2019",
      title: "First Projects",
      description: "Completed my first freelance projects, creating logos and social media graphics for local businesses and friends.",
    },
    {
      year: "2020",
      title: "Expanding Skills",
      description: "Learned web design and WordPress development. Started taking on more complex projects including website design and development.",
    },
    {
      year: "2021",
      title: "Professional Growth",
      description: "Completed internships at digital agencies, worked on real client projects, and developed expertise in digital strategy and social media management.",
    },
    {
      year: "2022",
      title: "Leadership Experience",
      description: "Took on team leadership roles, managed multiple projects simultaneously, and refined my project management and client communication skills.",
    },
    {
      year: "2024",
      title: "Twilr Production",
      description: "Founded Twilr Production to offer comprehensive creative and digital solutions, combining all my experience to help businesses grow.",
    },
  ];

  const skills = [
    { name: "Graphic Design", level: 95, icon: Palette },
    { name: "Web Design", level: 90, icon: Code },
    { name: "WordPress Development", level: 85, icon: Code },
    { name: "Social Media Strategy", level: 88, icon: TrendingUp },
    { name: "UI/UX Design", level: 87, icon: Lightbulb },
    { name: "Brand Identity", level: 92, icon: Heart },
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Committed to delivering high-quality work that exceeds expectations in every project.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with clients to understand their vision and bring it to life effectively.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Staying current with trends and technologies to provide cutting-edge solutions.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Genuinely caring about each project and the success of every client I work with.",
    },
  ];

  return (
    <>
      <SEO
        title="About - My Journey & Twilr Production"
        description="Learn about Sushant Budha Chhetri's journey from discovering design to founding Twilr Production. 5+ years of experience in graphic design, web development, and digital strategy."
        keywords="about, Sushant Budha Chhetri, Twilr Production, designer journey, creative experience, skills, professional background"
      />
      
      <div className="w-full">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              animate="animate"
              variants={{
                animate: { transition: { staggerChildren: 0.1 } },
              }}
              className="max-w-4xl mx-auto text-center space-y-6"
            >
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-bold">
                About Me & Twilr Production
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg text-muted-foreground">
                A journey of creativity, growth, and professional excellence
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Personal Story */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-semibold mb-6">My Journey</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    My journey into the world of creative media and digital design started during my high school years
                    when I first discovered the power of visual communication. What began as a hobby—experimenting with
                    design software and creating graphics for fun—quickly evolved into a genuine passion.
                  </p>
                  <p>
                    I spent countless hours learning Photoshop, Illustrator, and other design tools, taking online courses,
                    and practicing on personal projects. My early interests led me to explore various aspects of design,
                    from logo creation and branding to social media graphics and digital illustrations.
                  </p>
                  <p>
                    As I progressed, I realized that design was just one piece of the puzzle. I expanded my skill set to
                    include web design and development, learning HTML, CSS, and eventually mastering WordPress development.
                    This allowed me to offer more comprehensive solutions to clients, from visual identity to complete
                    website creation.
                  </p>
                  <p>
                    Through freelancing, internships, and leadership roles, I gained invaluable real-world experience working
                    with diverse clients across various industries. Each project taught me something new—whether it was
                    technical skills, project management, or the importance of clear communication and understanding client needs.
                  </p>
                  <p>
                    Today, as the founder of Twilr Production, I bring together all these experiences to help businesses
                    establish and grow their digital presence. Every project is an opportunity to create something meaningful,
                    solve problems creatively, and contribute to my clients' success.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-semibold mb-4">My Timeline</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From learning the basics to building a professional brand
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2" />

                {/* Timeline Items */}
                <div className="space-y-12">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`relative flex items-center ${
                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      {/* Year Badge */}
                      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold z-10">
                        {item.year}
                      </div>

                      {/* Content */}
                      <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-16 pl-20" : "md:pl-16 pl-20"}`}>
                        <div className="bg-card border border-border rounded-lg p-6">
                          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-semibold mb-4">Skills & Expertise</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Years of learning and practice have shaped these core competencies
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <skill.icon className="text-primary" size={20} />
                      </div>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Twilr Production */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <h2 className="text-3xl font-semibold mb-6">About Twilr Production</h2>
                <p className="text-lg text-muted-foreground">
                  Twilr Production represents my commitment to helping businesses succeed in the digital world through
                  creative solutions, strategic thinking, and exceptional execution.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-card border border-border rounded-lg p-8"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Eye className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Vision</h3>
                  <p className="text-muted-foreground">
                    To be a trusted partner for businesses seeking to establish and grow their digital presence,
                    delivering innovative solutions that drive real results and long-term success.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-card border border-border rounded-lg p-8"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Target className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Mission</h3>
                  <p className="text-muted-foreground">
                    To provide comprehensive creative and digital solutions that help businesses communicate effectively,
                    engage their audience, and achieve their goals through exceptional design and strategy.
                  </p>
                </motion.div>
              </div>

              {/* Values */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-semibold mb-8 text-center">Core Values</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {values.map((value, index) => (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <value.icon className="text-primary" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{value.title}</h4>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Working Approach */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-lg p-8"
              >
                <h3 className="text-2xl font-semibold mb-6">Working Approach</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Every project begins with understanding your unique needs, goals, and target audience. I believe in
                    collaborative partnerships where open communication and transparency are fundamental.
                  </p>
                  <p>
                    My process combines strategic thinking with creative execution, ensuring that every design decision
                    serves a purpose and contributes to your business objectives. From initial concept to final delivery,
                    I'm committed to exceeding expectations and delivering work that makes a real impact.
                  </p>
                  <p>
                    Long-term success is the ultimate goal. I focus on creating solutions that not only look great but
                    also perform exceptionally, are easy to maintain, and grow alongside your business.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}