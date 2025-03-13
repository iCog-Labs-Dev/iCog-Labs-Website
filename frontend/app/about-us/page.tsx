"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { FaLinkedin, FaTwitter } from "react-icons/fa"

function TeamMemberCard({ url, name, position }: { url: string; name: string; position: string }) {
  return (
    <motion.div
      className="flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
    >
      <div className="relative overflow-hidden rounded-t-xl">
        <Image
          src={url || "/placeholder.svg"}
          alt={name}
          width={400}
          height={400}
          className="w-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
          <div className="flex gap-4">
            <motion.a
              href="#"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-orange"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin size={20} />
            </motion.a>
            <motion.a
              href="#"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-orange"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter size={20} />
            </motion.a>
          </div>
        </div>
      </div>
      <div className="gradient-bg p-6 rounded-b-xl text-center">
        <h3 className="text-xl font-semibold text-white mb-1">{name}</h3>
        <p className="text-white/80">{position}</p>
      </div>
    </motion.div>
  )
}

function MissionVisionCard({
  title,
  text,
  icon,
  isVision = false,
}: { title: string; text: string; icon: string; isVision?: boolean }) {
  return (
    <motion.div
      className="flex flex-col gap-6 bg-white/10 backdrop-blur-sm rounded-xl p-8 relative overflow-hidden"
      initial={{ opacity: 0, x: isVision ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/10 to-transparent rounded-full -mr-32 -mt-32 blur-xl" />

      <div className="flex items-center gap-4 relative z-10">
        <div className="w-16 h-16 rounded-full bg-white/20 p-3 flex items-center justify-center">
          <Image src={icon || "/placeholder.svg"} alt={title} width={40} height={40} className="object-contain" />
        </div>
        <h3 className="text-3xl font-heading font-bold text-white">{title}</h3>
      </div>

      <p className="text-white/90 text-lg leading-relaxed relative z-10">{text}</p>
    </motion.div>
  )
}

function AboutUsPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-brand-orange/20 to-brand-red/20 rounded-full blur-3xl opacity-70" />
                <Image
                  src="/images/about-us1.png"
                  alt="iCog Labs team"
                  width={700}
                  height={500}
                  className="rounded-xl shadow-lg relative z-10"
                />
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-6">What is iCog Labs?</h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                We are a team of visionary software professionals, dedicated to advancing the frontier of artificial
                intelligence research and applications. Our mission is to build cutting-edge AI solutions that address
                real-world challenges and improve lives across Africa and beyond.
              </p>
              <motion.button className="button-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Read more
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-dark to-gray-900 text-white">
        <div className="container-custom">
          <div className="space-y-12">
            <MissionVisionCard
              icon="/images/bright.png"
              title="Vision"
              text="A breakthrough in the capability of AI systems to learn, think, and create much more progressive innovations for a better living for people living in Africa and Worldwide."
              isVision={true}
            />

            <MissionVisionCard
              icon="/images/mission.png"
              title="Mission"
              text="To develop cutting-edge AI technologies that address real-world challenges and improve the quality of life for people in Africa and around the world."
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <motion.h2
            className="text-4xl font-heading font-bold text-center gradient-text mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Meet Our Team
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMemberCard url="/images/Getnet-Assefa 1.png" name="Getnet Assefa" position="CEO of iCog Labs" />
            <TeamMemberCard
              url="/images/optimized-betin-skylum 1.png"
              name="Betelhem Dessie"
              position="CEO of iCog Acc"
            />
            <TeamMemberCard
              url="/images/photo_2024-10-30_10-06-32 1.png"
              name="Hruy Tsegaye"
              position="CEO of Mindplex"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <motion.h2
            className="text-4xl font-heading font-bold text-center gradient-text mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Core Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueCard
              title="Innovation"
              description="We constantly push the boundaries of what's possible in AI and technology."
              icon="🚀"
            />
            <ValueCard
              title="Excellence"
              description="We strive for the highest standards in everything we do."
              icon="⭐"
            />
            <ValueCard
              title="Collaboration"
              description="We believe in the power of teamwork and partnerships to achieve greater impact."
              icon="🤝"
            />
            <ValueCard
              title="Integrity"
              description="We conduct our work with honesty, transparency, and ethical responsibility."
              icon="🛡️"
            />
            <ValueCard
              title="Inclusivity"
              description="We embrace diversity and ensure our solutions benefit all communities."
              icon="🌍"
            />
            <ValueCard
              title="Impact"
              description="We measure our success by the positive difference we make in people's lives."
              icon="💡"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function ValueCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 card-hover"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 gradient-text">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}

export default AboutUsPage

