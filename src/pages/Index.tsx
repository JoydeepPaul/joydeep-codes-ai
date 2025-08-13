import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Linkedin, Github, Code, Brain, Globe, Trophy, Star } from "lucide-react";

const Index = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({ title: "Message sent", description: "Thanks for reaching out! I'll get back to you soon." });
    e.currentTarget.reset();
  };

  return (
    <div>
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur border-b border-border">
        <nav className="container flex items-center justify-between py-4">
          <a href="/" className="font-bold tracking-tight text-xl text-primary hover:text-primary-glow transition-colors">Joydeep Paul</a>
          <div className="hidden md:flex items-center gap-6">
            <a className="text-sm text-muted-foreground hover:text-foreground transition-colors" href="#about">About</a>
            <a className="text-sm text-muted-foreground hover:text-foreground transition-colors" href="#experience">Experience</a>
            <a className="text-sm text-muted-foreground hover:text-foreground transition-colors" href="#skills">Skills</a>
            <a className="text-sm text-muted-foreground hover:text-foreground transition-colors" href="#services">Services</a>
            <a className="text-sm text-muted-foreground hover:text-foreground transition-colors" href="#projects">Projects</a>
            <a className="text-sm text-muted-foreground hover:text-foreground transition-colors" href="#contact">Contact</a>
          </div>
          <div className="flex gap-2">
            <a aria-label="LinkedIn" href="https://www.linkedin.com/in/joydeep-paul-70371724a/" target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon" className="hover:text-primary transition-colors"><Linkedin /></Button>
            </a>
            <a aria-label="GitHub" href="https://github.com/JoydeepPaul" target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon" className="hover:text-primary transition-colors"><Github /></Button>
            </a>
            <a aria-label="LeetCode" href="https://leetcode.com/u/JOYDEEP_PAUL/" target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon" className="hover:text-primary transition-colors"><Trophy /></Button>
            </a>
          </div>
        </nav>
      </header>

      <main className="container">
        <section className="relative min-h-screen flex flex-col-reverse md:flex-row items-center gap-12 py-20 overflow-hidden">
          {/* Background gradient effects */}
          <div className="absolute inset-0 -z-20" style={{ background: "var(--gradient-hero)" }} />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 -z-10 rounded-full opacity-30 animate-float" style={{ background: "var(--gradient-glow)" }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 -z-10 rounded-full opacity-20 animate-float delay-1000" style={{ background: "var(--gradient-radial)" }} />
          
          <div className="flex-1 space-y-8 text-center md:text-left z-10">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter animate-fade-in-up text-foreground hover:text-primary transition-colors">Hey there, I’m Joydeep</h1>
              <p className="text-lg text-muted-foreground animate-fade-in-up delay-100">Full-Stack Developer | AI & ML Enthusiast | Problem Solver</p>
              <p className="mt-4 text-muted-foreground animate-fade-in-up delay-200">
                Passionate about building scalable web apps and intelligent systems. I love collaborating on impactful projects and sharing innovative tech solutions.
              </p>
              <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3 animate-fade-in-up delay-300">
                <a href="mailto:joydeeppaul791@gmail.com">
                  <Button className="hover:bg-primary/80 transition-colors"><Mail className="mr-2" /> Email</Button>
                </a>
                <a href="tel:8240672326">
                  <Button variant="secondary" className="hover:bg-secondary/80 transition-colors"><Phone className="mr-2" /> Call</Button>
                </a>
                <a href="#contact">
                  <Button variant="outline" className="hover:bg-accent hover:text-accent-foreground transition-colors">Say hi</Button>
                </a>
              </div>
            </div>
          </div>
          
          <div className="relative flex-1 flex justify-center items-center mt-12 md:mt-0">
            {/* Main glow effect */}
            <div 
              className="absolute -inset-8 -z-10 rounded-full animate-glow opacity-60"
              style={{ 
                background: "var(--gradient-glow)",
                boxShadow: "var(--shadow-glow)"
              }} 
            />
            
            {/* Profile image container */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary via-primary-glow to-primary rounded-full opacity-75 group-hover:opacity-100 blur-sm animate-glow transition-opacity duration-500" />
              <div className="relative aspect-square w-72 md:w-96 rounded-full overflow-hidden ring-4 ring-background shadow-2xl transition-all duration-500 group-hover:scale-105">
                <img
                  src="/IMG_20210328_003621.jpg"
                  alt="Profile picture of Joydeep Paul - Full Stack Developer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 border-t border-border">
          <h2 className="text-2xl font-semibold mb-6 hover:text-primary transition-colors">About</h2>
          <div className="animate-fade-in-up delay-100 grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <p className="text-muted-foreground hover:text-foreground transition-colors">
                I’m a Computer Science Engineering student at Techno Main Salt Lake (2022–2026). I enjoy full‑stack development, AI/ML, and solving real‑world problems with code.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-muted-foreground hover:text-foreground transition-colors">Secondary (2020, Uttarpara Model High School) – 86.7%</li>
                <li className="text-muted-foreground hover:text-foreground transition-colors">Higher Secondary (2022, UMHS) – 85.54% (CS, Math, Physics, Chemistry)</li>
                <li className="text-muted-foreground hover:text-foreground transition-colors">B.Tech in CSE (Techno Main Salt Lake, 2022–2026)</li>
              </ul>
              <p className="text-muted-foreground hover:text-foreground transition-colors">Curious, collaborative, and committed to building products that make a difference.</p>
            </div>
            <Card className="hover:shadow-lg transition-shadow shimmer-card">
              <CardHeader>
                <CardTitle className="text-lg hover:text-primary transition-colors">Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                <a href="https://www.linkedin.com/in/joydeep-paul-70371724a/" target="_blank" rel="noreferrer">
                  <Button variant="outline" className="hover:bg-accent hover:text-accent-foreground transition-colors"><Linkedin /> LinkedIn</Button>
                </a>
                <a href="https://github.com/JoydeepPaul" target="_blank" rel="noreferrer">
                  <Button variant="outline" className="hover:bg-accent hover:text-accent-foreground transition-colors"><Github /> GitHub</Button>
                </a>
                <a href="https://leetcode.com/u/JOYDEEP_PAUL/" target="_blank" rel="noreferrer">
                  <Button variant="outline" className="hover:bg-accent hover:text-accent-foreground transition-colors"><Trophy /></Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="experience" className="py-16 border-t border-border">
          <h2 className="text-2xl font-semibold mb-6 hover:text-primary transition-colors">Work Experience</h2>
          <div className="animate-fade-in-up delay-100 space-y-6">
            <Card className="hover:shadow-lg transition-shadow shimmer-card">
              <CardHeader>
                <CardTitle className="text-lg hover:text-primary transition-colors">Internship – IIT Kharagpur (May–July 2025)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Rainfall Prediction using Random Forest under Prof. Pabitra Mitra (CSE Dept).
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow shimmer-card">
              <CardHeader>
                <CardTitle className="text-lg hover:text-primary transition-colors">Online Courses & Certificates</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                <a href="https://www.coursera.org/account/accomplishments/verify/DZ6QHM3B947L" target="_blank" rel="noreferrer"><Button variant="secondary" className="hover:bg-secondary/80 transition-colors">Certificate 1</Button></a>
                <a href="https://www.coursera.org/account/accomplishments/verify/7NXE2K5ARVCB" target="_blank" rel="noreferrer"><Button variant="secondary" className="hover:bg-secondary/80 transition-colors">Certificate 2</Button></a>
                <a href="https://www.coursera.org/account/accomplishments/verify/8XPSWSAJXVV4" target="_blank" rel="noreferrer"><Button variant="secondary" className="hover:bg-secondary/80 transition-colors">Certificate 3</Button></a>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <section id="testimonials" className="py-16 border-t border-border">
          <h2 className="text-2xl font-semibold mb-6 hover:text-primary transition-colors">Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow shimmer-card">
              <CardHeader>
                <div className="flex items-center gap-2 text-primary">
                  <Star className="size-5" />
                  <Star className="size-5" />
                  <Star className="size-5" />
                  <Star className="size-5" />
                  <Star className="size-5" />
                </div>
                <CardTitle className="hover:text-primary transition-colors text-lg">Amazing Work!</CardTitle>
                <CardDescription className="text-muted-foreground">A mentor's perspective.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">"Joydeep is a highly motivated and skilled individual. His work on the project was exceptional, and he consistently exceeded expectations. A true asset to any team."</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow shimmer-card">
              <CardHeader>
                <div className="flex items-center gap-2 text-primary">
                  <Star className="size-5" />
                  <Star className="size-5" />
                  <Star className="size-5" />
                  <Star className="size-5" />
                  <Star className="size-5" />
                </div>
                <CardTitle className="hover:text-primary transition-colors text-lg">Highly Recommended!</CardTitle>
                <CardDescription className="text-muted-foreground">A colleague's review.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">"Working with Joydeep was a pleasure. His problem-solving abilities and dedication to clean code made our collaboration incredibly smooth. I learned a lot from him."</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="skills" className="py-16 border-t border-border">
          <h2 className="text-2xl font-semibold mb-6 hover:text-primary transition-colors">Skills</h2>
          <div className="animate-fade-in-up delay-100 grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow shimmer-card">
              <CardHeader className="flex items-center gap-2">
                <Code className="hover:text-primary transition-colors" />
                <CardTitle className="hover:text-primary transition-colors text-lg">Technical</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                MERN, Software Development, DSA, C, Java, Python, C++, SQL, AI/ML
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow shimmer-card">
              <CardHeader className="flex items-center gap-2">
                <Brain className="hover:text-primary transition-colors" />
                <CardTitle className="hover:text-primary transition-colors text-lg">Soft Skills</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Communication, Problem Solving
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow shimmer-card">
              <CardHeader className="flex items-center gap-2">
                <Globe className="hover:text-primary transition-colors" />
                <CardTitle className="hover:text-primary transition-colors text-lg">Languages</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Bengali, English
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="services" className="py-16 border-t border-border">
          <h2 className="text-2xl font-semibold mb-6 hover:text-primary transition-colors">Services</h2>
          <div className="animate-fade-in-up delay-100 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow shimmer-card">
              <CardHeader>
                <CardTitle className="hover:text-primary transition-colors text-lg">Web Design</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Crafting responsive, modern, and visually appealing websites tailored to your needs.
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="projects" className="py-16 border-t border-border">
          <h2 className="text-2xl font-semibold mb-6 hover:text-primary transition-colors">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow animate-fade-in-up delay-100 shimmer-card">
              <CardHeader><CardTitle className="hover:text-primary transition-colors text-lg">OCBS System</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p className="text-muted-foreground hover:text-foreground transition-colors">Full‑stack cinema booking app (React, Node/Express, MongoDB).</p>
                <a href="https://github.com/JoydeepPaul" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline transition-colors"><Github /> GitHub</a>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow animate-fade-in-up delay-200 shimmer-card">
              <CardHeader><CardTitle className="hover:text-primary transition-colors text-lg">MERN Stack Project</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p className="text-muted-foreground hover:text-foreground transition-colors">End‑to‑end modern web application built with the MERN stack.</p>
                <a href="https://github.com/JoydeepPaul" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline transition-colors"><Github /> GitHub</a>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow animate-fade-in-up delay-300 shimmer-card">
              <CardHeader><CardTitle className="hover:text-primary transition-colors text-lg">Rainfall Prediction</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p className="text-muted-foreground hover:text-foreground transition-colors">ML‑based weather forecasting model using Random Forest.</p>
                <a href="https://github.com/JoydeepPaul" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline transition-colors"><Github /> GitHub</a>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow animate-fade-in-up delay-400 shimmer-card">
              <CardHeader><CardTitle className="hover:text-primary transition-colors text-lg">House Price Prediction App</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p className="text-muted-foreground hover:text-foreground transition-colors">ML/DL pipeline for real‑estate analytics.</p>
                <a href="https://github.com/JoydeepPaul" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline transition-colors"><Github /> GitHub</a>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow animate-fade-in-up delay-500 shimmer-card">
              <CardHeader><CardTitle className="hover:text-primary transition-colors text-lg">DSA Java</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p className="text-muted-foreground hover:text-foreground transition-colors">Algorithm and pattern solutions in Java.</p>
                <a href="https://github.com/JoydeepPaul" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline transition-colors"><Github /> GitHub</a>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="contact" className="py-16 border-t border-border">
          <h2 className="text-2xl font-semibold mb-6 hover:text-primary transition-colors">Contact</h2>
          <div className="animate-fade-in-up delay-100 grid md:grid-cols-2 gap-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input name="name" placeholder="Your name" required aria-label="Name" className="hover:ring-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary" />
              <Input type="email" name="email" placeholder="Your email" required aria-label="Email" className="hover:ring-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary" />
              <Textarea name="message" placeholder="Your message" required aria-label="Message" className="hover:ring-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary" />
              <Button type="submit" className="hover:bg-primary/80 transition-colors">Send Message</Button>
              <div className="flex gap-4 pt-2 text-muted-foreground">
                <a href="mailto:joydeeppaul791@gmail.com" className="inline-flex items-center gap-2 text-primary hover:underline transition-colors"><Mail /> joydeeppaul791@gmail.com</a>
                <a href="tel:8240672326" className="inline-flex items-center gap-2 text-primary hover:underline transition-colors"><Phone /> 8240672326</a>
              </div>
            </form>
            <div className="rounded-md overflow-hidden border border-border">
              <iframe
                title="Home: Bally, Howrah, West Bengal 711201"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.28014529323!2d88.34444537599026!3d22.56942063319086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02796122d25039%3A0x6a1f10c85c2c525f!2sBally%2C%20Howrah%2C%20West%20Bengal%20711201!5e0!3m2!1sen!2sin!4v1692818625902!5m2!1sen!2sin"
                className="w-full h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="container py-8 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Joydeep Paul. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/joydeep-paul-70371724a/" className="hover:underline hover:text-foreground transition-colors">LinkedIn</a>
            <a href="https://github.com/JoydeepPaul" className="hover:underline hover:text-foreground transition-colors">GitHub</a>
            <a href="https://leetcode.com/u/JOYDEEP_PAUL/" className="hover:underline hover:text-foreground transition-colors">LeetCode</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;