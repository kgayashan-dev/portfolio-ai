"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  YoutubeIcon,
  ArrowRight,
  ExternalLink,
  Music2,
  FacebookIcon,
} from "lucide-react";
import { motion } from "framer-motion";

const techSkills = [
  { name: "JavaScript/TypeScript", level: 90 },
  { name: "React/Next.js", level: 85 },
  { name: "Node.js", level: 80 },
];

const musicSkills = [
  { name: "Piano", level: 95 },
  { name: "Music Production", level: 85 },
  { name: "Sound Design", level: 80 },
];

const images = [
  {
    src: "/images/gallery/1.jpg",
    alt: "Studio Setup",
    span: "col-span-2",
  },
  {
    src: "/images/gallery/2.jpg",
    alt: "Coding Setup",
    span: "row-span-2",
  },
  {
    src: "/images/gallery/3.jpg",
    alt: "Performance",
    span: "col-span-1",
  },
  {
    src: "/images/gallery/4.jpg",
    alt: "Workspace",
    span: "col-span-1",
  },
  {
    src: "/images/gallery/5.jpg",
    alt: "Music Production",
    span: "col-span-2",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-full w-full"
          >
            <Image
              src={"/images/UOP.jpg"}
              alt="Green Nature Background"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          <div className="absolute inset-0 bg-background/40 backdrop-blur-none" />
        </div>

        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-24 items-center ">
            <motion.div
              className="md:col-span-3 flex justify-center md:justify-start"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-48 h-48 md:w-64 md:h-64">
                <Image
                  src={
                    "https://media.licdn.com/dms/image/v2/D4D03AQHHb8wUZglGvA/profile-displayphoto-shrink_400_400/B4DZS2QhkKG4Ak-/0/1738224573896?e=1749686400&v=beta&t=NcKiHndyXO_osk5zAtf5vrD72fXUmG6eJ2q13EQbvWs"
                  }
                  alt="Profile"
                  fill
                  className="rounded-full object-cover shadow-2xl ring-4 ring-primary/20"
                  priority
                />
              </div>
            </motion.div>

            <motion.div
              className="md:col-span-5 text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                Crafting Code &
                <br />
                Enjoying Music
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                Where technology meets creativity
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <Button size="lg">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
                <Button variant="secondary" size="lg">
                  View Portfolio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="md:col-span-4 space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border">
                <h2 className="font-bold text-3xl mb-2">ORSON</h2>
                <p className="text-muted-foreground mb-4">
                  IT Professional | Musician
                  <br />
                  <a
                    href="mailto:mgayashan83@gmail.com"
                    className="hover:text-primary"
                  >
                    mgayashan83@gmail.com
                  </a>
                </p>
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: "https://github.com/kgayashan-dev" },
                    {
                      icon: Linkedin,
                      href: "https://www.linkedin.com/in/gayashanm/",
                    },
                    { icon: Instagram, href: "https://instagram.com" },
                    {
                      icon: YoutubeIcon,
                      href: "https://www.youtube.com/@orsoninsp",
                    },
                    {
                      icon: Music2,
                      href: "https://www.tiktok.com/@orson_gayashan",
                    },
                    {
                      icon: FacebookIcon,
                      href: "https://m.facebook.com/orson.gayashan/",
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button variant="ghost" size="icon">
                        <social.icon className="h-5 w-5" />
                      </Button>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Software Engineering
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    With over 5 years of experience in software development, I
                    specialize in building scalable web applications using
                    modern technologies.
                  </p>
                  <Link href="/about">
                    <Button variant="secondary">
                      Learn More
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Music Journey</h3>
                  <p className="text-muted-foreground mb-4">
                    As a classically trained pianist and electronic music
                    producer, I blend traditional musical training with modern
                    production techniques.
                  </p>
                  <Link href="/about">
                    <Button variant="secondary">
                      Learn More
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">
                    Technical Skills
                  </h3>
                  <div className="space-y-6">
                    {techSkills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Link href="/skills">
                      <Button variant="secondary">
                        View All Skills
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Musical Skills</h3>
                  <div className="space-y-6">
                    {musicSkills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Link href="/skills">
                      <Button variant="secondary">
                        View All Skills
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className={`relative aspect-square overflow-hidden rounded-lg ${image.span}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/gallery">
                <Button>
                  View Full Gallery
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">Latest Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="aspect-video rounded-lg bg-muted mb-4">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/SMUMn8Ppgrc"
                      title="YouTube video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg"
                    />
                  </div>
                  {/* <h3 className="text-xl font-semibold mb-2">
                    Latest Performance
                  </h3> */}
                  {/* <p className="text-muted-foreground">
                    Check out my latest live performance featuring original
                    compositions.
                  </p> */}
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="aspect-video rounded-lg bg-muted mb-4">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/byv4dsG_b90"
                      title="YouTube video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg"
                    />
                  </div>
                  {/* <h3 className="text-xl font-semibold mb-2">Tech Tutorial</h3> */}
                  {/* <p className="text-muted-foreground">
                    Learn about the latest web development techniques and best
                    practices.
                  </p> */}
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="aspect-video rounded-lg bg-muted mb-4">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/kItluY5imUA"
                      title="YouTube video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg"
                    />
                  </div>
                  {/* <h3 className="text-xl font-semibold mb-2">Tech Tutorial</h3> */}
                  {/* <p className="text-muted-foreground">
                    Learn about the latest web development techniques and best
                    practices.
                  </p> */}
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
