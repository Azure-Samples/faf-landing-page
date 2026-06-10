import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ArrowSquareOut,
  GithubLogo,
  Rocket,
  Sparkle,
  CaretLeft,
  CaretRight,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useRef, useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  REPO_URL,
  KB_REPO_URL,
  whatFeatures,
  agents,
  skills,
  scenarios,
  sampleOutputs,
  gettingStartedPaths,
} from "./data";

/* ================================================================
   NAV
   ================================================================ */
function Nav() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-[1200px]">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-background/30 backdrop-blur-md border border-border rounded-full px-6 lg:px-8 h-16 flex items-center justify-between shadow-lg shadow-black/10"
      >
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center">
            <Rocket weight="fill" className="text-white" size={18} />
          </div>
          <span className="font-semibold text-[15px] tracking-tight text-foreground">
            Factory Agents Forge
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {["What", "Agents", "Skills", "Pillars", "Scenarios", "Samples", "Get Started"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-3 py-1.5 text-[13px] text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary/60"
              >
                {item}
              </a>
            )
          )}
        </div>

        <Button variant="ghost" size="sm" asChild>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <GithubLogo weight="fill" size={18} />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </Button>
      </motion.div>
    </nav>
  );
}

/* ================================================================
   HERO
   ================================================================ */
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center pt-24 px-6"
    >
      <motion.div
        style={{ opacity, scale }}
        className="max-w-[1000px] mx-auto text-center space-y-0 py-12 md:py-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex justify-center -mb-8 md:-mb-12"
        >
          <div className="h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden">
            <img
              src={`${import.meta.env.BASE_URL}images/FAF-logo.png`}
              alt="Factory Agents Forge"
              className="h-[120%] w-auto object-contain drop-shadow-[0_0_60px_rgba(43,136,216,0.35)] -mt-[10%]"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="-mt-4 md:-mt-6"
        >
          <h1 className="text-[52px] sm:text-[68px] md:text-[84px] lg:text-[100px] font-semibold tracking-[-0.04em] leading-[0.95]">
            Your AI-powered
            <br />
            <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">
              software factory
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-muted-foreground max-w-[720px] mx-auto leading-relaxed font-light"
        >
          Scope, design, and build generative AI applications with specialized
          agents — grounded in document templates, design guidance, and reusable
          IPs purpose-built for agentic apps.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
        >
          <Button size="lg" asChild>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              View repository
              <ArrowRight weight="bold" size={20} />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#get-started" className="flex items-center gap-2">
              Get started
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}



/* ================================================================
   WHAT IS FAF
   ================================================================ */
function WhatSection() {
  return (
    <section id="what" className="py-32 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <SectionHeader
          title="What is FAF"
          subtitle="An agentic development platform that helps you scope, design, and build generative AI applications — powered by specialized agents grounded in document templates, design guidance, and reusable IPs purpose-built for agentic apps."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whatFeatures.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-10 rounded-3xl bg-card border border-border text-center space-y-6"
            >
              <div className="inline-flex p-4 rounded-2xl bg-accent-muted">
                <f.icon weight="duotone" size={40} className="text-accent" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold tracking-tight">
                  {f.title}
                </h3>
                <p className="text-[17px] text-muted-foreground leading-relaxed font-light">
                  {f.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   AGENTS CATALOG
   ================================================================ */
function AgentsSection() {
  return (
    <section id="agents" className="py-32 md:py-40 bg-muted/30">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <SectionHeader
          title="Agents"
          subtitle="Seven role-specific agents spanning pre-engagement, scoping, and delivery — each designed to produce structured outputs that flow to the next."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, i) => {
            const href = agent.docPath
              ? `${REPO_URL}/blob/main/${agent.docPath}`
              : undefined;
            const Tag = href ? motion.a : motion.div;
            return (
              <Tag
                key={agent.name}
                {...(href
                  ? {
                      href,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {})}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group p-8 rounded-3xl bg-card border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-1 space-y-5"
              >
                <div className="flex items-start justify-between">
                  <div className="p-3 rounded-2xl bg-accent-muted group-hover:bg-accent/20 transition-colors duration-300">
                    <agent.icon
                      weight="duotone"
                      size={28}
                      className="text-accent"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={agent.status}>
                      {agent.status === "active"
                        ? "Active"
                        : agent.status === "development"
                          ? "In Dev"
                          : agent.status === "preview"
                            ? "Preview"
                            : "Planned"}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold tracking-tight group-hover:text-accent transition-colors duration-300">
                    {agent.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {agent.description}
                  </p>
                </div>

                <div className="flex items-center pt-2">
                  <Badge variant="outline">{agent.phase}</Badge>
                </div>
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   SKILLS CATALOG
   ================================================================ */
function SkillsSection() {
  return (
    <section id="skills" className="py-32 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <SectionHeader
          title="Skills"
          subtitle="Composable capabilities that agents invoke during generation — from Azure architecture diagrams and pricing estimates to document manipulation."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, i) => {
            const href = skill.docPath
              ? `${REPO_URL}/blob/main/${skill.docPath}`
              : undefined;
            const Tag = href ? motion.a : motion.div;
            return (
              <Tag
                key={skill.name}
                {...(href
                  ? {
                      href,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {})}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group p-8 rounded-3xl bg-card border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-1 space-y-5"
              >
                <div className="flex items-start justify-between">
                  <div className="p-3 rounded-2xl bg-accent-muted group-hover:bg-accent/20 transition-colors duration-300">
                    <skill.icon
                      weight="duotone"
                      size={28}
                      className="text-accent"
                    />
                  </div>
                  <Badge variant="outline">
                    {skill.provider === "faf" ? "FAF" : "Anthropic"}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold tracking-tight group-hover:text-accent transition-colors duration-300">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   TECHNOLOGY PILLARS
   ================================================================ */
function TechnologyPillarsSection() {
  return (
    <section id="pillars" className="py-32 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <SectionHeader
          title="Technology Pillars"
          subtitle="Two foundational technologies that power every FAF agent — GitHub Copilot's agentic platform and curated knowledge bases with production-ready patterns for building AI apps."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ── GitHub Copilot Agents ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative p-10 rounded-3xl bg-card border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5 space-y-8 overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors duration-700" />

            <div className="relative flex items-center gap-5">
              {/* GitHub Copilot logo */}
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#1F2328] flex items-center justify-center shadow-lg">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 2C10.8 2 5 6.4 3.4 12.4C2 17.6 3 23.2 6.4 27.4C8 29.6 10 31.2 12.4 32.2C13 32.4 13.8 32 13.8 31.2V29C13.8 29 13 29.2 12 29.2C10 29.2 9.2 27.4 9 26.6C8.8 26.2 8.4 25.6 8 25.4C7.6 25.2 7.4 25 7.4 24.8C7.4 24.4 7.8 24.4 8 24.4C8.8 24.4 9.4 25.4 9.8 25.8C10.4 26.8 11.2 27 11.8 27C12.4 27 13 26.8 13.2 26.6C13.4 25.6 13.8 24.8 14.6 24.2C11.2 23.6 9.2 21.8 9.2 19C9.2 17.6 9.8 16.2 10.8 15C10.6 14.4 10.4 13.4 10.4 12.2C10.4 11.6 10.4 10.8 10.8 10C10.8 10 12.6 10 14.6 11.6C15.6 11.4 16.8 11.2 18 11.2C19.2 11.2 20.4 11.4 21.4 11.6C23.4 10 25.2 10 25.2 10C25.6 10.8 25.6 11.6 25.6 12.2C25.6 13.4 25.4 14.4 25.2 15C26.2 16.2 26.8 17.6 26.8 19C26.8 21.8 24.8 23.6 21.4 24.2C22.2 24.8 22.6 26 22.6 27V31.2C22.6 32 23.4 32.4 24 32.2C28.8 30.4 32.4 26 33.2 20.8C34.4 13.4 30 6 23 3C21.4 2.4 19.6 2 18 2Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">
                  GitHub Copilot Agents
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Built on GitHub Copilot's extensibility platform
                </p>
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Every FAF agent is a{" "}
                <span className="text-foreground font-medium">GitHub Copilot custom agent</span>{" "}
                that runs inside VS Code. Agents leverage Copilot's native capabilities — code understanding, multi-file editing, terminal execution — and extend them with domain-specific instructions, skills, and tool integrations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  { label: "Custom Agents (.agent.md)", desc: "Role-specific agents with scoped instructions and tool access" },
                  { label: "Custom Skills (SKILL.md)", desc: "Composable capabilities agents invoke during generation" },
                  { label: "MCP Servers", desc: "External tool integrations for Azure, diagrams, pricing, and more" },
                  { label: "Custom Prompts (.prompt.md)", desc: "Reusable prompt templates for common workflows" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-4 rounded-xl bg-muted/40 border border-border/50 space-y-1"
                  >
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-4">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-custom-agents"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.998 1C4.87 1 2.28 3.066 1.52 5.934c-.608 2.2-.225 4.566 1.008 6.142.728 1.012 1.576 1.74 2.752 2.214.292.118.584-.088.584-.512v-.882s-.39.098-.78.098c-.878 0-1.268-.878-1.366-1.268-.098-.195-.293-.585-.488-.683-.195-.098-.293-.195-.293-.293s.195-.098.293-.098c.39 0 .78.488.976.78.488.683.975.878 1.268.878.39 0 .683-.098.78-.293.098-.488.39-.878.78-1.17-1.463-.39-2.438-1.268-2.438-2.634 0-.683.293-1.366.878-1.95-.098-.293-.195-.78-.195-1.366 0-.293 0-.683.195-.878 0 0 .878 0 1.853.78.488-.098 1.073-.195 1.658-.195s1.073.098 1.658.195c.878-.78 1.853-.78 1.853-.78.195.195.195.585.195.878 0 .585-.098 1.073-.195 1.366.585.585.878 1.268.878 1.95 0 1.366-.975 2.244-2.438 2.634.39.39.585.975.585 1.56v2.05c0 .424.292.63.584.512 2.049-.878 3.677-2.828 3.97-5.372.585-3.609-1.853-7.022-5.274-8.094C9.363 1.195 8.681 1 7.998 1Z" fill="currentColor"/>
                    </svg>
                    Powered by GitHub Copilot custom agents
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* ── Code Knowledge Bases ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group relative p-10 rounded-3xl bg-card border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5 space-y-8 overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors duration-700" />

            <div className="relative flex items-center gap-5">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-accent-muted flex items-center justify-center shadow-lg">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 256 256"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16ZM40 56h40v56H40Zm0 72h40v56H40v-56Zm56-72h120v144H96Z"
                    fill="#2b88d8"
                    opacity="0.3"
                  />
                  <path
                    d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16ZM80 200H40V56h40Zm136 0H96V56h120Z"
                    fill="#2b88d8"
                  />
                  <circle cx="60" cy="84" r="8" fill="#2b88d8" />
                  <circle cx="60" cy="116" r="8" fill="#2b88d8" />
                  <circle cx="60" cy="148" r="8" fill="#2b88d8" />
                  <circle cx="60" cy="180" r="8" fill="#2b88d8" />
                  <line x1="120" y1="88" x2="200" y2="88" stroke="#2b88d8" strokeWidth="8" strokeLinecap="round" />
                  <line x1="120" y1="120" x2="180" y2="120" stroke="#2b88d8" strokeWidth="8" strokeLinecap="round" opacity="0.6" />
                  <line x1="120" y1="152" x2="192" y2="152" stroke="#2b88d8" strokeWidth="8" strokeLinecap="round" />
                  <line x1="120" y1="184" x2="168" y2="184" stroke="#2b88d8" strokeWidth="8" strokeLinecap="round" opacity="0.6" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">
                  Code Knowledge Bases
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Curated IPs that ground every agent's output
                </p>
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Agents are only as good as the knowledge they're grounded in.{" "}
                <span className="text-foreground font-medium">FAF Knowledge Bases</span>{" "}
                are versioned packages of reference architectures, code patterns, and design templates maintained in a dedicated repository — ensuring agents always generate production-quality, up-to-date code for agentic apps.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  { label: "Reference Architectures", desc: "Proven patterns for multi-agent systems, RAG, and orchestration" },
                  { label: "Code Templates", desc: "Production-ready starters across Python, TypeScript, Java, C#, and Bicep" },
                  { label: "Design Guidance", desc: "Best practices for agentic app patterns, security, and observability" },
                  { label: "Versioned Packages", desc: "Install, update, and lock KB versions per project with faf-kb.yaml" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-4 rounded-xl bg-muted/40 border border-border/50 space-y-1"
                  >
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={KB_REPO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <GithubLogo weight="fill" size={16} />
                    Explore Knowledge Bases repo
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   AGENTIC SCENARIOS (S1–S6 timeline)
   ================================================================ */
function ScenariosSection() {
  return (
    <section id="scenarios" className="py-32 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <SectionHeader
          title="Agentic Scenarios"
          subtitle="Five engagement scenarios that map where you are in the lifecycle to the recommended sequence of agents and workflows."
        />
        <div className="max-w-[1000px] mx-auto space-y-6">
          {scenarios.map((scenario, i) => (
            <motion.div
              key={scenario.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex gap-6 md:gap-8"
            >
              {/* Connector line */}
              {i < scenarios.length - 1 && (
                <div className="absolute left-[27px] top-[76px] w-px h-[calc(100%-40px)] bg-gradient-to-b from-accent/40 to-transparent" />
              )}

              {/* Scenario badge */}
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-accent/20">
                {scenario.id}
              </div>

              {/* Content card */}
              <div className="flex-1 p-8 rounded-3xl bg-card border border-border space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {scenario.title}
                  </h3>
                </div>
                <p className="text-sm font-medium text-accent">
                  {scenario.startingPoint}
                </p>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  {scenario.description}
                </p>
                <div className="flex gap-1.5 flex-wrap pt-2">
                  {scenario.keyAgents.map((agent) => (
                    <Badge key={agent} variant="outline">
                      {agent}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <a
            href={`${REPO_URL}/blob/main/docs/agentic-development-scenarios.md`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg">
              View Full Scenarios Guide
              <ArrowRight weight="bold" size={16} />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   SAMPLE OUTPUTS (Carousel)
   ================================================================ */
function SampleOutputsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="samples" className="py-32 md:py-40 bg-muted/30">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        <SectionHeader
          title="Sample Outputs"
          subtitle="Real examples of what FAF agents produce — from PRDs and solution specs to feature backlogs and architecture diagrams."
        />

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-6">
              {sampleOutputs.map((sample) => (
                <div
                  key={sample.title}
                  className="flex-[0_0_100%] min-w-0 pl-6 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_28%]"
                >
                  <div className="group h-full p-8 rounded-3xl bg-card border border-border hover:border-accent/30 transition-all duration-500 flex flex-col">
                    {/* Preview area */}
                    <a
                      href={sample.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative h-56 rounded-2xl bg-gradient-to-br from-accent/5 via-background to-accent/10 border border-border/50 overflow-hidden flex items-center justify-center cursor-pointer hover:border-accent/40 transition-colors"
                    >
                      {sample.previewImage ? (
                        <img
                          src={sample.previewImage}
                          alt={sample.title}
                          className="absolute inset-0 w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      ) : (
                        <>
                          <div className="absolute inset-0 opacity-30">
                            <div className="absolute top-3 left-3 right-3 h-2 rounded-full bg-accent/20" />
                            <div className="absolute top-8 left-3 w-1/3 h-1.5 rounded-full bg-accent/15" />
                            <div className="absolute top-12 left-3 w-2/3 h-1.5 rounded-full bg-accent/10" />
                            <div className="absolute bottom-3 left-3 right-3 h-8 rounded-lg bg-accent/10" />
                          </div>
                          <sample.icon
                            weight="duotone"
                            size={48}
                            className="text-accent relative z-10"
                          />
                        </>
                      )}
                    </a>

                    <div className="space-y-3 mt-6 flex-1">
                      <h3 className="text-xl font-semibold tracking-tight group-hover:text-accent transition-colors duration-300">
                        {sample.title}
                      </h3>
                      <p className="text-xs font-medium text-accent">
                        {sample.agentName}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {sample.description}
                      </p>
                    </div>

                    <div className="flex gap-1.5 flex-wrap mt-6">
                      {sample.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <a
                      href={sample.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-accent/10 text-accent text-sm font-medium hover:bg-accent/20 transition-colors duration-300"
                    >
                      <ArrowSquareOut weight="bold" size={16} />
                      View on GitHub
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canScrollPrev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-secondary transition-colors disabled:opacity-30 disabled:cursor-default cursor-pointer hidden md:flex"
          >
            <CaretLeft weight="bold" size={18} />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canScrollNext}
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-secondary transition-colors disabled:opacity-30 disabled:cursor-default cursor-pointer hidden md:flex"
          >
            <CaretRight weight="bold" size={18} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {sampleOutputs.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === selectedIndex
                  ? "bg-accent w-6"
                  : "bg-border hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   GETTING STARTED
   ================================================================ */
function GettingStartedSection() {
  return (
    <section id="get-started" className="py-32 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <SectionHeader
          title="Get Started"
          subtitle="Two ways to start using Factory Agents Forge with GitHub Copilot."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
          {gettingStartedPaths.map((path, i) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-card border border-border space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-accent-muted">
                  <path.icon
                    weight="duotone"
                    size={24}
                    className="text-accent"
                  />
                </div>
                <h3 className="text-xl font-semibold tracking-tight">
                  {path.title}
                </h3>
              </div>

              <div className="space-y-4">
                {path.steps.map((step, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                      <span className="text-xs font-bold text-accent">
                        {j + 1}
                      </span>
                    </div>
                    <p className="text-[15px] text-muted-foreground leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>

              <Button variant="accent" size="default" asChild>
                <a
                  href={path.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  {path.cta}
                  <ArrowRight weight="bold" size={16} />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   CTA
   ================================================================ */
function CTASection() {
  return (
    <section className="py-32 md:py-40 bg-foreground text-background overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-[900px] mx-auto px-6 text-center space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <div className="inline-flex p-4 rounded-2xl bg-accent/20 backdrop-blur-sm">
            <Sparkle weight="duotone" size={40} className="text-background" />
          </div>

          <h2 className="text-[48px] md:text-[64px] font-semibold tracking-[-0.03em] leading-tight">
            From intake
            <br />
            to deployed solution
          </h2>

          <p className="text-xl md:text-2xl text-background/70 leading-relaxed font-light max-w-[650px] mx-auto">
            Stop context-switching between tools. Let specialized agents handle
            the heavy lifting while you stay in control at every step.
          </p>

          <p className="text-base md:text-lg text-background/50 leading-relaxed max-w-[700px] mx-auto">
            Apply agentic engineering and spec-driven development practices
            end-to-end — from first customer call to deploy in the cloud.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Button
            size="lg"
            className="bg-background hover:bg-background/90 text-foreground px-8 h-14 text-[17px] font-medium rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
            asChild
          >
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Rocket weight="fill" size={22} />
              Get Started
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   FOOTER
   ================================================================ */
function Footer() {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center">
              <Sparkle weight="fill" className="text-white" size={14} />
            </div>
            <span>Factory Agents Forge</span>
          </div>

          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            {[
              { label: "About", path: "docs/ABOUT.md" },
              { label: "Scenarios", path: "docs/agentic-development-scenarios.md" },
              { label: "Install", path: "docs/marketplace/INSTALL.md" },
            ].map((link) => (
              <a
                key={link.label}
                href={`${REPO_URL}/blob/main/${link.path}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ================================================================
   SHARED: Section Header
   ================================================================ */
function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center space-y-6 mb-20 md:mb-28 max-w-[800px] mx-auto"
    >
      <h2 className="text-[48px] md:text-[64px] font-semibold tracking-[-0.03em] leading-tight">
        {title}
      </h2>
      <p className="text-lg md:text-[22px] text-muted-foreground leading-relaxed font-light">
        {subtitle}
      </p>
    </motion.div>
  );
}

/* ================================================================
   APP
   ================================================================ */
export default function App() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <WhatSection />
        <AgentsSection />
        <SkillsSection />
        <TechnologyPillarsSection />
        <ScenariosSection />
        <SampleOutputsSection />
        <GettingStartedSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
