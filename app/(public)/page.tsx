'use client';

import React, { useState } from "react";
import Image from "next/image";
import Logo from '../assets/images/tecvit-softwares.png';
import TecVit from '@/app/assets/images/tecvit.png';
import Leticia from '@/app/assets/images/privileged/leticia.png';
import PedidoFacil from '@/app/assets/images/privileged/pedidofacil.png';
import TaskAi from '@/app/assets/images/privileged/taskai.png';
import Firebase from '@/app/assets/images/svgs/firebase.svg';
import Canva from '@/app/assets/images/svgs/canva.svg';
import Hostinger from '@/app/assets/images/svgs/hostinger.svg';
import NextJS from '@/app/assets/images/svgs/nextjs.svg';
import Webflow from '@/app/assets/images/svgs/webflow.svg';
import MercadoPago from '@/app/assets/images/svgs/logo-mercado-pago.svg';

import Link from "next/link";
import './style.css';
import { BadgeCheck, BadgeX, LinkIcon, Plus, X } from "lucide-react";

export default function Landing() {

  const frameworks = [
    {
      image: Firebase,
      text: "Vai cuidar do login dos clientes, dados dos produtos e de todo o sistema do site.",
      url: "https://firebase.google.com",
      color: "#FFA611",
    },
    {
      image: Canva,
      text: "Usado para criar as imagens e artes do seu site e redes sociais com visual profissional.",
      url: "https://canva.com",
      color: "#12acd2",
    },
    {
      image: Hostinger,
      text: "É onde seu site ficará hospedado, garantindo que ele funcione rápido e sem cair.",
      url: "https://hostinger.com",
      color: "#6747c6",
    },
    {
      image: MercadoPago,
      text: "Responsável pelos pagamentos e recebimentos do seu site, com segurança e praticidade.",
      url: "https://mercadopago.com.br",
      color: "#16afbdff",
    },
    {
      image: NextJS,
      text: "É a base do seu site, garantindo que ele seja rápido, moderno e apareça bem no Google.",
      url: "https://nextjs.org",
      color: "#aeaeae",
    },
    {
      image: Webflow,
      text: "Usado para montar páginas com visual atrativo, facilitando a navegação dos seus clientes.",
      url: "https://webflow.com/",
      color: "#4353ff",
    }
  ];

  const plans = [
    {
      name: "Básico",
      price_annually: 659.99,
      description: "Ideal para quem precisa marcar presença online com simplicidade e eficiência.",
      features: [
        "Site com 5 páginas",
        "Suporta até 1000 usuários simultâneos",
        "1 GB de armazenamento",
        "12 meses de hospedagem",
        "Registro de domínio incluso (.com.br ou alternativo)"
      ],
      limitations: [
        "Banco de Dados",
        "Dashboard do Site",
      ],
    },
    {
      name: "Premium",
      price_annually: 1299.99,
      description: "Não importa o que você precise, desde ajuda rápida até grandes problemas, estamos aqui para ajudar.",
      features: [
        "Site Completo",
        "Dashboard Personalizado",
        "Suporta até 10.000 usuários simultâneos",
        "10 GB de armazenamento",
        "12 meses de hospedagem",
        "Otimização SEO avançada",
        "Integração com redes sociais, formulário, e-mail marketing",
        "Registro de domínio incluso (.com.br ou alternativo)"
      ],
    },
    {
      name: "Padrão",
      price_annually: 899.99,
      description: "Do zero ao online com um site bonito, rápido e pronto pra vender.",
      features: [
        "Site com 10 páginas",
        "Dashboard do Site",
        "Suporta até 3000 usuários simultâneos",
        "2 GB de armazenamento",
        "12 meses de hospedagem",
        "Banco de Dados",
        "Registro de domínio incluso (.com.br ou alternativo)"
      ],
    },
  ];

  type TypeFAQ = {
    question: string;
    answer: string;
    status: boolean;
  }

  const [faqs, setFaqs] = useState<TypeFAQ[]>([
    {
      question: "O que está incluso no desenvolvimento do meu site?",
      answer: "Você recebe um site completo, responsivo, com hospedagem, domínio, painel de controle (dependendo do plano) e integração com redes sociais, formulário de contato e mais.",
      status: false,
    },
    {
      question: "Qual é o prazo médio para entrega do site?",
      answer: "O prazo depende da complexidade do projeto, mas geralmente varia entre 7 a 20 dias úteis após alinhamento e envio dos materiais.",
      status: false,
    },
    {
      question: "Preciso saber programar para gerenciar meu site?",
      answer: "Não! Fornecemos um painel simples e intuitivo (nos planos Padrão e Premium) onde você mesmo pode atualizar conteúdos, produtos e informações.",
      status: false,
    },
    {
      question: "Vocês ajudam com o design e identidade visual?",
      answer: "Sim, usamos ferramentas como o Canva para desenvolver artes, imagens e um layout profissional para seu site e redes sociais.",
      status: false,
    },
    {
      question: "Posso contratar só o site e depois evoluir para um SaaS?",
      answer: "Com certeza! Podemos começar com um site institucional e depois transformá-lo em uma plataforma SaaS com login, banco de dados e funcionalidades avançadas.",
      status: false,
    },
  ]);

  
  const mensagemContato = encodeURIComponent(
`Olá! Gostaria de criar um SaaS personalizado com vocês.

Vou contar um pouco sobre a minha loja para que possamos alinhar ideias e planejar como será o site.

Descrição da Loja: [insira aqui a descrição da sua loja]

Instagram: [@seu_instagram]

Fico no aguardo para conversarmos melhor e iniciarmos esse projeto!`
  );

  const urlContato = `https://wa.me/5516996410838?text=${mensagemContato}`;

  return (
    <main className="container-landing">

      {/* Navbar */}
      <header className="container-navbar">
        <div className="content-navbar">
          <Image quality={100} src={TecVit} alt="Logo" width={1000} height={800} />
          <nav className="links">
            <Link href="#projetos">Projetos</Link>
            <Link href="#ferramentas">Ferramentas</Link>
            <Link href="#faqs">FAQs</Link>
            <Link href="#planos">Planos</Link>
          </nav>
          <div className="btns">
            <Link className="btn-white" href={urlContato}>Planejar Meu Site</Link>
          </div>
        </div>
      </header>

      <section id="inicio" className="content-landing">
        <div className="text">
          <h2>👋 É a TecVit, sua parceira de projetos e softwares!</h2>
          <h1 className="title">Seu SaaS complexo, experiência sem esforço.</h1>
          <p>Simplifique produtos SaaS complexos com um design limpo e fácil de usar que impulsiona o envolvimento do usuário e o crescimento dos negócios.</p>
          <div className="btns">
            <Link className="btn-black" href={urlContato}>Entrar em Contato</Link>
            <Link className="btn-white" href={urlContato}>Planejar Meu Site</Link>
          </div>
        </div>
        <div className="privileged">
          <p>Privilegiado em trabalhar com</p>
          <div className="list">
            <Image onClick={() => window.open("https://leticia-family.vercel.app")} quality={100} width={400} height={400} src={Leticia} alt={`Leticia Logo`} />
            <Image quality={100} width={400} height={400} src={TaskAi} alt={`TaskAi Logo`} />
            <Image style={{ height: 50 }} quality={100} width={400} height={400} src={PedidoFacil} alt={`PedidoFacil Logo`} />
          </div>
        </div>
      </section>

      {/* Frameworks */}
      <section id="ferramentas" className="content-frameworks">
        
        <div className="text">
          <div className="tag">
            <p>Ferramentas / Frameworks Usadas</p>
          </div>
          <h1 className="title">Site com as melhores <br /> ferramentas do mercado</h1>
          <p>Tenha um site moderno, rápido e pronto para converter mais clientes.</p>
        </div>

        <ul className="list">
          {frameworks.map((item, i) => (
            <li style={{ "--card-color": item.color } as React.CSSProperties} key={i} className="item">
              <div className="color"></div>
              <Image src={item.image} alt={`${ i }º Logo`} />
              <p>{item.text}</p>
              <div className="row"></div>
              <div className="btns">
                <Link target="_blank" className="btn-gray" href={item.url}>
                  <LinkIcon className="icon" />
                  Website
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Plans */}
      <section id="planos" className="content-plans">
        
        <div className="text">
          <div className="tag">
            <p>Planos Disponíveis</p>
          </div>
          <h1 className="title">Design sob demanda. <br /> Sem compromisso.</h1>
          <p>Começar conosco é um processo fácil graças aos nossos pacotes simples</p>
        </div>

        <ul className="plans">
          {plans.map((plan, i) => (
            <li key={i} className="plan">
              <h2>{plan.name}</h2>
              <h1>{((plan.price_annually).toLocaleString('pt-BR',  { style: 'currency', currency: 'BRL' }))} <span>/ Anual</span></h1>
              <p>{plan.description}</p>
              <button className={`link ${i % 2 != 0 ? 'black' : ''}`}>Entrar em Contato</button>
              <ul className="features">
                {plan.features && plan.features.length > 0 && plan.features.map((feature, j) => (
                  <li className="item" key={`${i}-${j}`}>
                    <BadgeCheck className="icon green" />
                    <p>{feature}</p>
                  </li>
                ))}
              </ul>
              <ul className="features">
                {plan.limitations && plan.limitations.length > 0 && plan.limitations.map((feature, j) => (
                  <li className="item" key={`${i}-${j}`}>
                    <BadgeX className="icon red" />
                    <p>{feature}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      {/* FAQs */}
      <section id="faqs" className="content-faqs">
        
        <div className="text">
          <div className="tag">
            <p>FAQs</p>
          </div>
          <h1 className="title">Perguntas Frequentes</h1>
          <p>Entenda melhor como funciona o desenvolvimento e o que está incluso.</p>
        </div>

        <ul className="faqs">
          {faqs.map((faq, i) => (
            <li key={i} className="faq">
              <div onClick={() => setFaqs(prev => {
                let list = [...prev];
                let obj = { ...list[i] };
                obj.status = !obj.status;
                list[i] = obj;
                return list;
              })} className="top">
                <h1>{faq.question}</h1>
                {faq.status ? (
                  <X className="icon" />
                ) : (
                  <Plus className="icon" />
                )}
              </div>
              {faq.status && (
                <div className="bottom">
                  <p>{faq.answer}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Footer */}
      <footer className="container-footer">
        <div className="content-footer">
          <section className="top">
            <ul className="list">
              <li className="item">
                <Image src={Logo} alt="Logo" />
              </li>
              <li className="item">
                <h1>Páginas</h1>
                <Link href="/#inicio">Início</Link>
                <Link href="/#projetos">Projetos</Link>
                <Link href="/#faqs">FAQs</Link>
                <Link href="/#planos">Planos</Link>
              </li>
              <li className="item">
                <h1>Planos</h1>
                <Link href="/#planos">Básico</Link>
                <Link href="/#planos">Padrão</Link>
                <Link href="/#planos">Premium</Link>
              </li>
              <li className="item">
                <h1>Redes Sociais</h1>
                <Link target="_blank" href="https://instagram.com/tecvit.online">Instagram</Link>
                <Link target="_blank" href="#">Facebook</Link>
                <Link target="_blank" href="https://wa.me/5516996410838">WhatsApp</Link>
                <Link target="_blank" href="https://github.com/tecvit">GitHub</Link>
              </li>
            </ul>
          </section>
          <section className="row"></section>
          <section className="bottom">
            <p>&copy; 2025 TecVit. Todos direitos reservados.</p>
            <p>Criado por <Link href="https://instagram.com/vitin021y">@vitin021y</Link></p>
          </section>
        </div>
      </footer>

    </main>
  );
}