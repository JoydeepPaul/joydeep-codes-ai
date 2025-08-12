import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Linkedin, Github, Code, Brain, Globe } from "lucide-react";

const Index = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({ title: "Message sent", description: "Thanks for reaching out! I'll get back to you soon." });
    e.currentTarget.reset();
  };

  return (
    <div>
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur border-b">
        <nav className="container flex items-center justify-between py-4">
          <a href="/" className="font-bold tracking-tight">Joydeep Paul</a>
          <div className="hidden md:flex items-center gap-6">
            <a className="text-sm hover:text-primary" href="#about">About</a>
            <a className="text-sm hover:text-primary" href="#experience">Experience</a>
            <a className="text-sm hover:text-primary" href="#skills">Skills</a>
            <a className="text-sm hover:text-primary" href="#services">Services</a>
            <a className="text-sm hover:text-primary" href="#projects">Projects</a>
            <a className="text-sm hover:text-primary" href="#contact">Contact</a>
          </div>
          <div className="flex gap-2">
            <a aria-label="LinkedIn" href="https://www.linkedin.com/in/joydeep-paul-70371724a/" target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon"><Linkedin /></Button>
            </a>
            <a aria-label="GitHub" href="https://github.com/JoydeepPaul" target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon"><Github /></Button>
            </a>
          </div>
        </nav>
      </header>

      <main className="container">
        <section className="grid md:grid-cols-2 gap-10 items-center py-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Hey there, I’m Joydeep</h1>
            <p className="text-lg text-muted-foreground">Full-Stack Developer | AI & ML Enthusiast | Problem Solver</p>
            <p className="mt-4 text-muted-foreground">
              Passionate about building scalable web apps and intelligent systems. I love collaborating on impactful projects and sharing innovative tech solutions.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:joydeep@example.com">
                <Button><Mail /> Email</Button>
              </a>
              <a href="tel:+919999999999">
                <Button variant="secondary"><Phone /> Call</Button>
              </a>
              <a href="#contact">
                <Button variant="outline">Say hi</Button>
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-full bg-accent/40 blur-2xl" aria-hidden />
            <img
              src="/placeholder.svg"
              alt="Profile picture of Joydeep Paul"
              className="mx-auto aspect-square w-64 md:w-80 rounded-full object-cover ring-4 ring-accent"
            />
          </div>
        </section>

        <section id="about" className="py-16 border-t">
          <h2 className="text-2xl font-semibold mb-6">About</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <p>
                I’m a Computer Science Engineering student at Techno Main Salt Lake (2022–2026). I enjoy full‑stack development, AI/ML, and solving real‑world problems with code.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Secondary (2020, Uttarpara Model High School) – 86.7%</li>
                <li>Higher Secondary (2022, UMHS) – 85.54% (CS, Math, Physics, Chemistry)</li>
                <li>B.Tech in CSE (Techno Main Salt Lake, 2022–2026)</li>
              </ul>
              <p>Curious, collaborative, and committed to building products that make a difference.</p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                <a href="https://www.linkedin.com/in/joydeep-paul-70371724a/" target="_blank" rel="noreferrer">
                  <Button variant="outline"><Linkedin /> LinkedIn</Button>
                </a>
                <a href="https://github.com/JoydeepPaul" target="_blank" rel="noreferrer">
                  <Button variant="outline"><Github /> GitHub</Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="experience" className="py-16 border-t">
          <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Internship – IIT Kharagpur (May–July 2025)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Rainfall Prediction using Random Forest under Prof. Pabitra Mitra (CSE Dept).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Online Courses & Certificates</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                <a href="#" target="_blank" rel="noreferrer"><Button variant="secondary">Certificate 1</Button></a>
                <a href="#" target="_blank" rel="noreferrer"><Button variant="secondary">Certificate 2</Button></a>
                <a href="#" target="_blank" rel="noreferrer"><Button variant="secondary">Certificate 3</Button></a>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="skills" className="py-16 border-t">
          <h2 className="text-2xl font-semibold mb-6">Skills</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex items-center gap-2">
                <Code />
                <CardTitle>Technical</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                MERN, Software Development, DSA, C, Java, Python, C++, SQL, AI/ML
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-center gap-2">
                <Brain />
                <CardTitle>Soft Skills</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Communication, Problem Solving
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-center gap-2">
                <Globe />
                <CardTitle>Languages</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Bengali, English
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="services" className="py-16 border-t">
          <h2 className="text-2xl font-semibold mb-6">Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Web Design</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Crafting responsive, modern, and visually appealing websites tailored to your needs.
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="projects" className="py-16 border-t">
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader><CardTitle>OCBS System</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p className="text-muted-foreground">Full‑stack cinema booking app (React, Node/Express, MongoDB).</p>
                <a href="https://github.com/JoydeepPaul" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline"><Github /> GitHub</a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>MERN Stack Project</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p className="text-muted-foreground">End‑to‑end modern web application built with the MERN stack.</p>
                <a href="https://github.com/JoydeepPaul" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline"><Github /> GitHub</a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Rainfall Prediction</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p className="text-muted-foreground">ML‑based weather forecasting model using Random Forest.</p>
                <a href="https://github.com/JoydeepPaul" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline"><Github /> GitHub</a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>House Price Prediction App</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p className="text-muted-foreground">ML/DL pipeline for real‑estate analytics.</p>
                <a href="https://github.com/JoydeepPaul" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline"><Github /> GitHub</a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>DSA Java</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p className="text-muted-foreground">Algorithm and pattern solutions in Java.</p>
                <a href="https://github.com/JoydeepPaul" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline"><Github /> GitHub</a>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="contact" className="py-16 border-t">
          <h2 className="text-2xl font-semibold mb-6">Contact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input name="name" placeholder="Your name" required aria-label="Name" />
              <Input type="email" name="email" placeholder="Your email" required aria-label="Email" />
              <Textarea name="message" placeholder="Your message" required aria-label="Message" />
              <Button type="submit">Send Message</Button>
              <div className="flex gap-4 pt-2">
                <a href="mailto:joydeep@example.com" className="inline-flex items-center gap-2 text-primary hover:underline"><Mail /> joydeep@example.com</a>
                <a href="tel:+919999999999" className="inline-flex items-center gap-2 text-primary hover:underline"><Phone /> +91 99999 99999</a>
              </div>
            </form>
            <div className="rounded-md overflow-hidden border">
              <iframe
                title="Kolkata, India"
                src="https://www.google.com/maps?q=Kolkata,India&output=embed"
                className="w-full h-[320px]"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container py-8 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Joydeep Paul. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/joydeep-paul-70371724a/" className="hover:underline">LinkedIn</a>
            <a href="https://github.com/JoydeepPaul" className="hover:underline">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
