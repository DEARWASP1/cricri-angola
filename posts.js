const POSTS = [
  {
    id: "o-que-e-o-cricri",
    title: "O que é o Cricri MC-15 e porque é ideal para Angola",
    tag: "Introdução",
    date: "21 Nov 2026",
    read: "6 min",
    icon: "✈️",
    excerpt: "Conheça o Colomban MC-15 Cricri, o menor bimotor do mundo, e descubra porque este pequeno avião de construção amadora pode ser o ponto de partida da aviação desportiva em Angola.",
    content: `
      <p>O <strong>Cricri MC-15</strong> foi desenhado pelo engenheiro francês Michel Colomban nos anos 1970. É conhecido como o <em>menor bimotor do mundo</em>: um monolugar de asa baixa, construído principalmente em alumínio, com dois pequenos motores montados à frente da asa.</p>
      <h2>Porque o Cricri?</h2>
      <ul>
        <li><strong>Leve e simples:</strong> peso vazio à volta de 80 kg, o que facilita o transporte e o hangaragem.</li>
        <li><strong>Construção em casa:</strong> foi pensado para ser montado por amadores numa garagem, com ferramentas comuns.</li>
        <li><strong>Económico:</strong> consome pouco combustível — importante num país onde o acesso a peças e combustível de aviação pode ser difícil fora de Luanda.</li>
        <li><strong>Divertido:</strong> é acrobático e muito ágil, com uma sensação de voo única.</li>
      </ul>
      <h2>O contexto angolano</h2>
      <p>Angola tem um espaço aéreo vasto, muitos aeródromos e pistas de terra em províncias como Huíla, Benguela, Namibe e Cuanza Sul. O clima seco de boa parte do ano favorece o voo visual. Ao mesmo tempo, a importação de materiais e o processo de certificação exigem planeamento — é isso que vamos explorar neste blog.</p>
      <blockquote>"Construir o próprio avião é aprender aviação de dentro para fora." — lema dos construtores amadores</blockquote>
      <div class="info-box">
        <h4>Nota importante</h4>
        <p>Este blog é educativo. Qualquer construção e voo deve seguir as regras da autoridade aeronáutica angolana e ser acompanhado por técnicos e pilotos qualificados.</p>
      </div>
    `
  },
  {
    id: "materiais-e-ferramentas",
    title: "Materiais e ferramentas: o que precisa e onde encontrar em Angola",
    tag: "Materiais",
    date: "18 Nov 2026",
    read: "8 min",
    icon: "🔧",
    excerpt: "Alumínio aeronáutico, rebites, instrumentos e motores. Um guia prático de tudo o que é preciso para montar um Cricri e como importar a partir de Luanda.",
    content: `
      <h2>Lista base de materiais</h2>
      <ul>
        <li><strong>Chapas de alumínio aeronáutico</strong> (liga 2024-T3 ou equivalente indicada nos planos).</li>
        <li><strong>Rebites de cabeça embutida e cega</strong> — milhares deles.</li>
        <li><strong>Tubos e perfis</strong> para longarinas e estrutura do trem.</li>
        <li><strong>Cabos e polias</strong> para os comandos de voo.</li>
        <li><strong>Dois motores</strong> leves (os originais eram motores de 2 tempos de ~15 cv; hoje há versões elétricas e a jato).</li>
        <li><strong>Instrumentos básicos:</strong> velocímetro, altímetro, conta-rotações, bússola.</li>
        <li><strong>Hélices</strong> adequadas a cada motor.</li>
      </ul>
      <h2>Ferramentas essenciais</h2>
      <ol>
        <li>Rebitadora pneumática e compressor</li>
        <li>Berbequim de bancada e brocas de precisão</li>
        <li>Tesouras de chapa, limas e escareadores</li>
        <li>Dobradora de chapa (pode ser construída na oficina)</li>
        <li>Bancada de montagem nivelada — fundamental para a asa</li>
      </ol>
      <h2>Importar para Angola</h2>
      <p>A maioria do material aeronáutico certificado não se encontra no mercado local. As opções mais comuns são encomendar a fornecedores europeus (França e Portugal têm comunidades Cricri ativas) ou sul-africanos, e trazer por carga aérea ou marítima via Luanda.</p>
      <div class="info-box">
        <h4>Dicas de importação</h4>
        <ul>
          <li>Junte encomendas com outros construtores para reduzir custos de frete.</li>
          <li>Guarde todas as faturas e certificados de material — serão pedidos na inspeção.</li>
          <li>Informe-se junto de um despachante sobre a classificação aduaneira de peças aeronáuticas.</li>
        </ul>
      </div>
    `
  },
  {
    id: "construir-a-asa",
    title: "Passo a passo: construir a asa do Cricri",
    tag: "Construção",
    date: "12 Nov 2026",
    read: "10 min",
    icon: "📐",
    excerpt: "A asa é o coração do Cricri. Veja como preparar a bancada, montar a longarina, as nervuras e o revestimento, e os erros mais comuns a evitar.",
    content: `
      <h2>1. Preparar a bancada</h2>
      <p>Uma asa torcida é um avião perigoso. Construa uma bancada longa, rígida e perfeitamente nivelada. Verifique com nível laser ou de água em vários pontos antes de começar.</p>
      <h2>2. A longarina principal</h2>
      <p>A longarina suporta quase toda a carga em voo. Siga as cotas dos planos ao décimo de milímetro, faça os furos-piloto primeiro e só depois alargue para a medida final.</p>
      <h2>3. Nervuras</h2>
      <p>As nervuras são formadas em chapa sobre moldes de madeira. Faça os moldes com cuidado: uma vez certos, todas as nervuras saem iguais.</p>
      <h2>4. Revestimento</h2>
      <p>O revestimento de alumínio é rebitado sobre a estrutura. Trabalhe do centro para as pontas e use grampos (clecos) para segurar a chapa antes de rebitar.</p>
      <h3>Erros comuns</h3>
      <ul>
        <li>Rebitar sem desbarbar os furos — cria fissuras.</li>
        <li>Não proteger o alumínio da humidade costeira (Luanda, Benguela) — use primário anticorrosão.</li>
        <li>Trabalhar ao sol intenso — a dilatação térmica altera as medidas.</li>
      </ul>
      <blockquote>Meça duas vezes, fure uma vez.</blockquote>
    `
  },
  {
    id: "motores-e-helices",
    title: "Motores para o Cricri: dois tempos, elétrico ou jato?",
    tag: "Motores",
    date: "5 Nov 2026",
    read: "7 min",
    icon: "⚙️",
    excerpt: "Comparamos as opções de motorização do Cricri, tendo em conta o calor, a poeira e a disponibilidade de manutenção em Angola.",
    content: `
      <h2>Motores de dois tempos</h2>
      <p>A solução clássica. São leves e simples, mas exigem manutenção regular e sofrem com poeira — filtros de ar de qualidade são obrigatórios em pistas de terra.</p>
      <h2>Motores elétricos</h2>
      <p>Já existem versões elétricas do Cricri. São silenciosas e quase sem manutenção, mas a autonomia é curta e as baterias sofrem com temperaturas altas. Podem ser interessantes se combinadas com carregamento solar, abundante em Angola.</p>
      <h2>Micro-turbinas</h2>
      <p>O Cricri a jato é espetacular, mas o custo, o consumo e a complexidade tornam-no pouco prático para a maioria dos construtores.</p>
      <h2>Considerações para o clima angolano</h2>
      <ul>
        <li><strong>Calor:</strong> verifique o arrefecimento em subida prolongada.</li>
        <li><strong>Altitude:</strong> no planalto (Huambo, Lubango ~1700 m) o desempenho cai — calcule a distância de descolagem com cuidado.</li>
        <li><strong>Poeira:</strong> filtros e inspeções frequentes.</li>
      </ul>
    `
  },
  {
    id: "legalizacao-em-angola",
    title: "Legalizar um avião de construção amadora em Angola",
    tag: "Legislação",
    date: "28 Out 2026",
    read: "9 min",
    icon: "📋",
    excerpt: "Registo, inspeções, licença de piloto e autorização de voo. Um resumo do caminho burocrático junto da autoridade aeronáutica angolana.",
    content: `
      <p>Em Angola, a aviação civil é regulada pela autoridade aeronáutica nacional (ANAC, que sucedeu ao antigo INAVIC). Antes de começar a construir, contacte-a para conhecer as regras atuais para aeronaves experimentais e ultraleves — elas podem mudar.</p>
      <h2>Passos habituais</h2>
      <ol>
        <li><strong>Registar o projeto</strong> antes da construção e manter um diário de construção com fotos.</li>
        <li><strong>Inspeções intermédias</strong> por um técnico autorizado (estrutura, comandos, motores).</li>
        <li><strong>Matrícula</strong> da aeronave no registo aeronáutico nacional.</li>
        <li><strong>Certificado/autorização de voo</strong> para aeronave experimental.</li>
        <li><strong>Licença de piloto</strong> válida e, de preferência, instrução em aeronave semelhante.</li>
        <li><strong>Seguro</strong> de responsabilidade civil.</li>
      </ol>
      <div class="info-box">
        <h4>Atenção</h4>
        <p>Os requisitos acima são indicativos. Confirme sempre diretamente com a autoridade aeronáutica angolana antes de investir em material ou voar.</p>
      </div>
      <h2>Primeiro voo</h2>
      <p>O primeiro voo deve ser feito por um piloto experiente, num aeródromo com boa pista, após testes de rolagem progressivos. Tenha sempre um plano de ensaios escrito.</p>
    `
  }
];
