import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronRight,
  Gauge,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Target,
  Waypoints,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

import heroImage from "@/assets/unisoldas-hero.webp";
import engineeringImage from "@/assets/unisoldas-engineering.webp";
import ctaImage from "@/assets/unisoldas-cta.webp";
import logoImage from "@/assets/unisoldas-logo.jpg";
import projectStructure from "@/assets/projeto-estrutura.webp";
import projectAssembly from "@/assets/projeto-montagem.webp";
import projectLoop from "@/assets/projeto-loop.webp";
import projectConveyor from "@/assets/projeto-esteira.webp";

const whatsappMessage =
  "Olá! Vi a UNISOLDAS pelo site e tenho interesse em realizar um orçamento. Gostaria de mais informações sobre as soluções e serviços.";
const whatsappUrl = `https://wa.me/5541987992619?text=${encodeURIComponent(whatsappMessage)}`;

const trustItems = [
  { icon: Target, label: "Precisão" },
  { icon: ShieldCheck, label: "Qualidade" },
  { icon: Gauge, label: "Confiabilidade" },
  { icon: Waypoints, label: "Atendimento" },
];

const services = [
  {
    title: "Solda TIG, MIG e alumínio",
    text: "Soldagens especializadas em aço carbono, inox e alumínio, com precisão, durabilidade e segurança.",
  },
  {
    title: "Solda sanitária",
    text: "Acabamento de alta qualidade para tubulações e equipamentos de setores que exigem limpeza e segurança.",
  },
  {
    title: "Projetos mecânicos",
    text: "Projetos sob medida, incluindo adequações NR12, tubulações, esteiras, skid e loop.",
  },
  {
    title: "Reforma e adequação de equipamentos",
    text: "Reparos, ajustes e melhorias para manter máquinas e equipamentos seguros e confiáveis.",
  },
  {
    title: "Caldeiraria, usinagem e acabamentos",
    text: "Caldeiraria, polimento, usinagem, tornearia e fresagem com acabamento preciso e resistente.",
  },
  {
    title: "Corte, dobra e montagem industrial",
    text: "Dobras, montagens e ajustes em estruturas metálicas para projetos industriais complexos.",
  },
];

const projects = [
  {
    title: "Estrutura soldada",
    category: "Soldagem de precisão",
    image: projectStructure,
    className: "project-a",
  },
  {
    title: "Montagem industrial",
    category: "Estruturas metálicas",
    image: projectAssembly,
    className: "project-b",
  },
  {
    title: "Loop de tratamento de água",
    category: "Tubulação industrial",
    image: projectLoop,
    className: "project-c",
  },
  {
    title: "Esteira transportadora",
    category: "Projetos mecânicos",
    image: projectConveyor,
    className: "project-d",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UNISOLDAS | Soldagem e Soluções Industriais em Curitiba" },
      {
        name: "description",
        content:
          "Engenharia mecânica, soldagem especializada e manutenção industrial em Curitiba. Solicite um orçamento com a UNISOLDAS.",
      },
      { property: "og:title", content: "UNISOLDAS | Soluções Industriais" },
      {
        property: "og:description",
        content:
          "Precisão em soldagem, projetos mecânicos e manutenção industrial para a sua operação.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Brand() {
  return (
    <a href="#inicio" className="brand" aria-label="UNISOLDAS Soluções Industriais — início">
      <img src={logoImage} width="859" height="816" alt="UNISOLDAS Soluções Industriais" />
    </a>
  );
}

function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#inicio">Início</a>
            <a href="#empresa">A empresa</a>
            <a href="#solucoes">Soluções</a>
            <a href="#projetos">Projetos</a>
            <a href="#diferenciais">Diferenciais</a>
            <a href="#contato">Contato</a>
          </nav>
          <a className="quote-link header-quote" href={whatsappUrl} target="_blank" rel="noreferrer">
            Solicitar orçamento <ArrowRight aria-hidden="true" />
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
          {[
            ["Início", "#inicio"],
            ["A empresa", "#empresa"],
            ["Soluções", "#solucoes"],
            ["Projetos", "#projetos"],
            ["Diferenciais", "#diferenciais"],
            ["Contato", "#contato"],
          ].map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="quote-link" href={whatsappUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
            Solicitar orçamento <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero">
          <img className="hero-image" src={heroImage} alt="Profissional realizando soldagem de precisão em equipamento industrial" width="1920" height="1280" />
          <div className="hero-shade" />
          <div className="technical-grid" aria-hidden="true" />
          <span className="hero-coordinate" aria-hidden="true">25°26′S · 49°16′W</span>
          <div className="hero-content">
            <div className="eyebrow light"><span /> Engenharia mecânica · Soldagem · Manutenção</div>
            <h1>Precisão que transforma<br /><em>desafios em soluções.</em></h1>
            <p>Soluções em soldagem e serviços especializados para atender às necessidades da sua operação.</p>
            <div className="hero-actions">
              <a className="quote-link quote-large" href={whatsappUrl} target="_blank" rel="noreferrer">
                Solicitar orçamento <ArrowRight aria-hidden="true" />
              </a>
              <a className="text-link light-link" href="#empresa">
                Conheça a UNISOLDAS <ArrowDownRight aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="trust-strip">
            {trustItems.map(({ icon: ItemIcon, label }) => {
              return <div className="trust-item" key={label}><ItemIcon aria-hidden="true" /><span>{label}</span></div>;
            })}
          </div>
          <a className="scroll-mark" href="#empresa" aria-label="Ir para a próxima seção"><span /> Role para explorar</a>
        </section>

        <section id="empresa" className="positioning section-pad">
          <div className="section-index" aria-hidden="true">01 / 04</div>
          <div className="positioning-copy" data-reveal>
            <div className="eyebrow"><span /> UNISOLDAS Soluções</div>
            <h2>Engenharia, precisão<br />e experiência.</h2>
            <p className="lead">Soluções completas e sob medida para empresas que buscam qualidade, segurança e eficiência em seus processos produtivos.</p>
            <p>Unimos experiência técnica, inovação e dedicação para entregar resultados consistentes e duradouros. Cada projeto é tratado como único, com precisão, agilidade e responsabilidade.</p>
            <a className="text-link" href="#solucoes">Conheça nossas soluções <ArrowRight aria-hidden="true" /></a>
          </div>
          <figure className="positioning-image" data-reveal>
            <img src={engineeringImage} loading="lazy" width="1408" height="1104" alt="Engenheiro inspecionando sistema industrial em aço inox" />
            <figcaption><span>Engenharia aplicada</span><span>Precisão em cada detalhe</span></figcaption>
          </figure>
        </section>

        <section id="solucoes" className="solutions section-pad">
          <div className="section-index" aria-hidden="true">02 / 04</div>
          <div className="section-heading" data-reveal>
            <div>
              <div className="eyebrow"><span /> Capacidade técnica</div>
              <h2>Nossas soluções.</h2>
            </div>
            <p>Da soldagem especializada ao desenvolvimento de projetos mecânicos, entregamos soluções industriais com rigor técnico.</p>
          </div>
          <div className="services-list">
            {services.map((service, index) => (
              <a className="service-row" href={whatsappUrl} target="_blank" rel="noreferrer" key={service.title} data-reveal>
                <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span className="service-arrow" aria-hidden="true"><ArrowRight /></span>
              </a>
            ))}
          </div>
          <a className="quote-link section-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
            Fale com nossa equipe <ArrowRight aria-hidden="true" />
          </a>
        </section>

        <section id="projetos" className="projects section-pad">
          <div className="section-index" aria-hidden="true">03 / 04</div>
          <div className="projects-heading" data-reveal>
            <div className="eyebrow light"><span /> Trabalhos realizados</div>
            <h2>Projetos que<br /><em>falam por si.</em></h2>
            <p>Execução técnica, acabamento e robustez aplicados a diferentes necessidades da indústria.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <figure className={`project-card ${project.className}`} key={project.title} data-reveal>
                <img src={project.image} loading="lazy" width={index === 3 ? 1080 : 500} height={index === 3 ? 1080 : 500} alt={`${project.title} realizado pela UNISOLDAS`} />
                <figcaption>
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                  <ArrowDownRight aria-hidden="true" />
                </figcaption>
              </figure>
            ))}
          </div>
          <a className="text-link light-link project-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
            Quero um projeto assim <ArrowRight aria-hidden="true" />
          </a>
        </section>

        <section id="diferenciais" className="differences section-pad">
          <div className="section-index" aria-hidden="true">04 / 04</div>
          <div className="difference-title" data-reveal>
            <div className="eyebrow light"><span /> O padrão UNISOLDAS</div>
            <h2>Por que<br />UNISOLDAS?</h2>
          </div>
          <div className="difference-list">
            {[
              ["01", "Precisão", "Rigor técnico em cada etapa da execução."],
              ["02", "Qualidade técnica", "Acabamento e durabilidade orientam cada entrega."],
              ["03", "Compromisso", "Agilidade, segurança e responsabilidade em cada projeto."],
              ["04", "Soluções sob medida", "Cada desafio recebe uma resposta adequada à operação."],
            ].map(([number, title, text]) => (
              <div className="difference-item" key={number} data-reveal>
                <span>{number}</span><Check aria-hidden="true" /><h3>{title}</h3><p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contato" className="contact-cta">
          <img src={ctaImage} loading="lazy" width="1920" height="1088" alt="Soldagem TIG em estrutura de aço inox" />
          <div className="contact-shade" />
          <div className="contact-content" data-reveal>
            <div className="eyebrow light"><span /> Seu próximo projeto começa aqui</div>
            <h2>Vamos encontrar a solução<br /><em>para o seu projeto.</em></h2>
            <p>Entre em contato com nossa equipe e solicite um orçamento.</p>
            <a className="quote-link quote-xl" href={whatsappUrl} target="_blank" rel="noreferrer">
              Solicitar orçamento <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <Brand />
            <p>Engenharia mecânica, soldagem e manutenção industrial com precisão e responsabilidade.</p>
          </div>
          <nav className="footer-nav" aria-label="Links do rodapé">
            <strong>Navegação</strong>
            <a href="#inicio">Início</a><a href="#empresa">Empresa</a><a href="#solucoes">Soluções</a><a href="#projetos">Projetos</a><a href="#contato">Contato</a>
          </nav>
          <address>
            <strong>Contato</strong>
            <a href={whatsappUrl} target="_blank" rel="noreferrer"><Phone aria-hidden="true" /> +55 41 98799-2619</a>
            <a href="mailto:comercial@unisoldasolucoes.com.br"><Mail aria-hidden="true" /> comercial@unisoldasolucoes.com.br</a>
            <p><MapPin aria-hidden="true" /> Rua Rodolpho Hatschbach, 1855<br />Cidade Industrial de Curitiba — PR<br />CEP 81460-030</p>
          </address>
        </div>
        <div className="footer-bottom">
          <span>© UNISOLDAS SOLUÇÕES. Todos os direitos reservados.</span>
          <span>CNPJ 49.679.479/0001-23</span>
        </div>
      </footer>

      <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Solicite seu orçamento pelo WhatsApp">
        <span className="whatsapp-tooltip">Solicite seu orçamento</span>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12.04 2a9.84 9.84 0 0 0-8.52 14.76L2 22l5.38-1.41A9.9 9.9 0 1 0 12.04 2Zm5.76 13.98c-.24.67-1.4 1.28-1.93 1.35-.5.07-1.14.1-1.84-.11-.43-.14-.98-.32-1.69-.62-2.97-1.28-4.9-4.28-5.05-4.48-.14-.2-1.2-1.6-1.2-3.06s.76-2.18 1.03-2.48c.27-.3.59-.37.79-.37h.57c.18 0 .43-.07.67.51.24.59.83 2.03.9 2.18.08.15.13.32.03.51-.1.2-.14.32-.29.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.61.17.29.76 1.26 1.64 2.04 1.13 1 2.08 1.31 2.37 1.46.3.15.47.13.64-.08.17-.22.73-.86.93-1.15.2-.3.39-.25.66-.15.27.1 1.72.81 2.01.96.3.15.49.22.56.34.08.12.08.69-.17 1.36Z" /></svg>
      </a>
    </div>
  );
}