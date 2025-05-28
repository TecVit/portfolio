'use client';

import Image from "next/image";
import Logo from '@/app/assets/images/tecvit-softwares.png';
import TecVit from '@/app/assets/images/tecvit.png';
import Leticia from '@/app/assets/images/privileged/leticia.png';
import PedidoFacil from '@/app/assets/images/privileged/pedidofacil.png';
import TaskAi from '@/app/assets/images/privileged/taskai.png';
import Firebase from '@/app/assets/images/svgs/firebase.svg';
import Canva from '@/app/assets/images/svgs/canva.svg';
import Hostinger from '@/app/assets/images/svgs/hostinger.svg';
import NextJS from '@/app/assets/images/svgs/nextjs.svg';
import Webflow from '@/app/assets/images/svgs/webflow.svg';


import Link from "next/link";
import './style.css';
import { LinkIcon } from "lucide-react";

export default function Landing() {

  const frameworks = [
    {
      image: Firebase,
      text: "Vai cuidar do login dos clientes, dados dos produtos e de todo o sistema do site.",
      url: "https://firebase.google.com"
    },
    {
      image: Canva,
      text: "Usado para criar as imagens e artes do seu site e redes sociais com visual profissional.",
      url: "https://canva.com"
    },
    {
      image: Hostinger,
      text: "É onde seu site ficará hospedado, garantindo que ele funcione rápido e sem cair.",
      url: "https://hostinger.com"
    },
    {
      image: NextJS,
      text: "É a base do seu site, garantindo que ele seja rápido, moderno e apareça bem no Google.",
      url: "https://nextjs.org"
    },
    {
      image: Webflow,
      text: "Usado para montar páginas com visual atrativo, facilitando a navegação dos seus clientes.",
      url: "https://webflow.com/"
    }
  ];
  
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
            <li key={i} className="item">
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
                <Link href="/#">Basic</Link>
                <Link href="/#projetos">Standard</Link>
                <Link href="/#faqs">Premium</Link>
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