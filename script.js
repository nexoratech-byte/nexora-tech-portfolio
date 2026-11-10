const translations = {
  pt: {
    navServices:"Serviços",navAbout:"Sobre",navContact:"Contato",
    eyebrow:"TECNOLOGIA • CRIATIVIDADE • SOLUÇÕES",
    heroTitle:'Ideias inteligentes.<br><span class="gradient-text">Soluções digitais.</span>',
    heroDescription:"A Nexora Tech transforma necessidades em soluções digitais práticas — de sites e sistemas a automações e suporte de TI.",
    heroCta:'Fale com a gente <span>↗</span>',heroSecondary:"Conheça os serviços",
    heroNote:"Atendimento a projetos no Brasil e em outros lugares.",artCaption:"TECNOLOGIA SEM LIMITES",
    servicesEyebrow:"O QUE FAZEMOS",servicesTitle:'Tecnologia que trabalha <span class="gradient-text">a seu favor.</span>',
    servicesDescription:"Soluções pensadas para simplificar tarefas, fortalecer sua presença digital e resolver problemas do dia a dia.",
    service1Title:"Desenvolvimento web",service1Text:"Sites responsivos e páginas profissionais para apresentar seu negócio na internet.",
    service2Title:"Automação com Python",service2Text:"Pequenas automações para reduzir tarefas repetitivas e organizar processos.",
    service3Title:"Suporte de TI",service3Text:"Ajuda com configuração, manutenção e resolução de problemas em computadores.",
    service4Title:"Soluções digitais",service4Text:"Apoio na escolha e configuração de ferramentas digitais adequadas à sua necessidade.",
    aboutEyebrow:"SOBRE A NEXORA TECH",aboutTitle:'Pequena no começo.<br><span class="gradient-text">Grande nas ideias.</span>',
    aboutText:"Somos uma iniciativa independente de tecnologia com foco em soluções úteis, comunicação clara e evolução constante. Cada projeto começa entendendo o que você precisa — e termina com uma solução construída com cuidado.",
    value1:"✦ Atendimento próximo",value2:"✦ Soluções práticas",value3:"✦ Aprendizado contínuo",
    contactEyebrow:"VAMOS CONVERSAR?",contactTitle:'Tem uma ideia?<br><span class="gradient-text">Vamos tirar do papel.</span>',
    contactText:"Conte um pouco sobre o que você precisa. Vamos conversar sobre a melhor forma de começar.",
    footerText:"Tecnologia sem limites."
  },
  en: {
    navServices:"Services",navAbout:"About",navContact:"Contact",
    eyebrow:"TECHNOLOGY • CREATIVITY • SOLUTIONS",
    heroTitle:'Smart ideas.<br><span class="gradient-text">Digital solutions.</span>',
    heroDescription:"Nexora Tech turns needs into practical digital solutions — from websites and systems to automation and IT support.",
    heroCta:'Get in touch <span>↗</span>',heroSecondary:"Explore our services",
    heroNote:"Available for projects in Brazil and worldwide.",artCaption:"TECHNOLOGY WITHOUT LIMITS",
    servicesEyebrow:"WHAT WE DO",servicesTitle:'Technology that works <span class="gradient-text">for you.</span>',
    servicesDescription:"Solutions designed to simplify tasks, strengthen your digital presence and solve everyday problems.",
    service1Title:"Web development",service1Text:"Responsive websites and professional pages to present your business online.",
    service2Title:"Python automation",service2Text:"Small automations to reduce repetitive tasks and organize workflows.",
    service3Title:"IT support",service3Text:"Help with computer setup, maintenance and troubleshooting.",
    service4Title:"Digital solutions",service4Text:"Guidance choosing and setting up digital tools for your needs.",
    aboutEyebrow:"ABOUT NEXORA TECH",aboutTitle:'Small at the start.<br><span class="gradient-text">Big on ideas.</span>',
    aboutText:"We are an independent technology initiative focused on useful solutions, clear communication and continuous improvement. Every project starts by understanding your needs and ends with a solution built with care.",
    value1:"✦ Personal support",value2:"✦ Practical solutions",value3:"✦ Continuous learning",
    contactEyebrow:"LET'S TALK",contactTitle:'Have an idea?<br><span class="gradient-text">Let’s make it real.</span>',
    contactText:"Tell us a little about what you need. Let's discuss the best way to get started.",
    footerText:"Technology without limits."
  }
};
let currentLanguage = "pt";
const toggle = document.getElementById("languageToggle");
toggle.addEventListener("click", () => {
  currentLanguage = currentLanguage === "pt" ? "en" : "pt";
  document.documentElement.lang = currentLanguage === "pt" ? "pt-BR" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[currentLanguage][key]) element.innerHTML = translations[currentLanguage][key];
  });
  toggle.textContent = currentLanguage === "pt" ? "EN" : "PT";
});
document.getElementById("year").textContent = new Date().getFullYear();
