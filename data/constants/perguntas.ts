import Pergunta from '@/data/model/Pergunta'



const perguntas: Pergunta[] = [
  {
    id: 1,
    enunciado: 'Qual é o maior planeta do sistema solar?',
    opcoes: ['Terra', 'Júpiter', 'Saturno', 'Urano'],
    resposta: 1,
    explicacao: 'Júpiter é o maior planeta: ~11 vezes o diâmetro da Terra e ~318 vezes sua massa.'
  },
  {
    id: 2,
    enunciado: 'Quantos planetas existem no sistema solar?',
    opcoes: ['8', '9', '7', '10'],
    resposta: 0,
    explicacao: 'Desde 2006, a União Astronômica Internacional reconhece 8 planetas; Plutão passou a planeta anão.'
  },
  {
    id: 3,
    enunciado: "Qual planeta é conhecido como o 'Planeta Vermelho'?",
    opcoes: ['Marte', 'Vênus', 'Júpiter', 'Saturno'],
    resposta: 0,
    explicacao: 'Marte tem solo rico em óxidos de ferro, que dão coloração avermelhada.'
  },
  {
    id: 4,
    enunciado: 'Qual planeta é famoso pelos seus anéis?',
    opcoes: ['Urano', 'Netuno', 'Saturno', 'Júpiter'],
    resposta: 2,
    explicacao: 'Todos os gigantes têm anéis, mas os de Saturno são muito mais extensos e brilhantes.'
  },
  {
    id: 5,
    enunciado: 'Qual é o planeta mais frio do sistema solar?',
    opcoes: ['Netuno', 'Urano', 'Saturno', 'Plutão'],
    resposta: 1,
    explicacao: 'Urano registra as temperaturas mais baixas na alta atmosfera (~−224 °C).'
  },
  {
    id: 6,
    enunciado: 'Qual planeta é o mais próximo do Sol?',
    opcoes: ['Terra', 'Mercúrio', 'Vênus', 'Marte'],
    resposta: 1,
    explicacao: 'Mercúrio orbita a ~0,39 UA do Sol, o mais interno dos planetas.'
  },
  {
    id: 7,
    enunciado: 'Qual é a maior lua de Saturno?',
    opcoes: ['Titã', 'Europa', 'Ganimedes', 'Calisto'],
    resposta: 0,
    explicacao: 'Titã é maior que Mercúrio e tem atmosfera densa rica em nitrogênio.'
  },
  {
    id: 8,
    enunciado: 'Qual planeta tem um dia mais longo que seu ano?',
    opcoes: ['Vênus', 'Mercúrio', 'Marte', 'Netuno'],
    resposta: 0,
    explicacao: 'Vênus gira muito lentamente (rotação ~243 dias) e orbita o Sol em ~225 dias.'
  },
  {
    id: 9,
    enunciado: "Qual planeta é conhecido como o 'gigante gasoso'?",
    opcoes: ['Júpiter', 'Saturno', 'Netuno', 'Urano'],
    resposta: 0,
    explicacao: 'Júpiter é o maior dos gigantes, composto principalmente de hidrogênio e hélio.'
  },
  {
    id: 10,
    enunciado: 'Qual planeta tem a maior montanha do sistema solar?',
    opcoes: ['Terra', 'Marte', 'Vênus', 'Mercúrio'],
    resposta: 1,
    explicacao: 'O Olympus Mons, em Marte, tem ~22 km de altitude, quase 3x o Everest.'
  },
  {
    id: 11,
    enunciado: 'Qual é o nome da galáxia em que vivemos?',
    opcoes: ['Via Láctea', 'Andrômeda', 'Triângulo', 'Centaurus A'],
    resposta: 0,
    explicacao: 'A Via Láctea é nossa galáxia espiral barrada, com centenas de bilhões de estrelas.'
  },
  {
    id: 12,
    enunciado: 'Quantas luas tem Marte?',
    opcoes: ['1', '2', '3', '4'],
    resposta: 1,
    explicacao: 'Marte possui duas pequenas luas irregulares: Fobos e Deimos.'
  },
  {
    id: 13,
    enunciado: 'Qual é a maior lua do sistema solar?',
    opcoes: ['Titã', 'Ganimedes', 'Calisto', 'Europa'],
    resposta: 1,
    explicacao: 'Ganimedes (de Júpiter) é a maior lua; é maior que Mercúrio.'
  },
  {
    id: 14,
    enunciado: 'Qual planeta é conhecido por ter uma grande mancha vermelha?',
    opcoes: ['Marte', 'Júpiter', 'Saturno', 'Vênus'],
    resposta: 1,
    explicacao: 'A Grande Mancha Vermelha é uma tempestade anticiclônica gigantesca em Júpiter, ativa há séculos.'
  },
  {
    id: 15,
    enunciado: 'Qual é o menor planeta do sistema solar?',
    opcoes: ['Mercúrio', 'Marte', 'Vênus', 'Plutão'],
    resposta: 0,
    explicacao: 'Entre os planetas, Mercúrio é o menor; Plutão é planeta anão.'
  },
  {
    id: 16,
    enunciado: 'Qual é o nome do segundo maior planeta do sistema solar?',
    opcoes: ['Urano', 'Netuno', 'Saturno', 'Júpiter'],
    resposta: 2,
    explicacao: 'Saturno é o 2º em tamanho e massa, atrás apenas de Júpiter.'
  },
  {
    id: 17,
    enunciado: 'Qual é o nome do rover que a NASA enviou a Marte em 2021?',
    opcoes: ['Curiosity', 'Spirit', 'Opportunity', 'Perseverance'],
    resposta: 3,
    explicacao: 'O Perseverance pousou em 2021 na cratera Jezero para buscar sinais de vida passada.'
  },
  {
    id: 18,
    enunciado: 'Quantas estrelas existem na Via Láctea?',
    opcoes: [
      'Cerca de 100 bilhões',
      'Cerca de 200 bilhões',
      'Cerca de 300 bilhões',
      'Cerca de 400 bilhões',
    ],
    resposta: 3,
    explicacao: 'As estimativas variam amplamente (~100–400 bilhões). O valor de 400 bilhões está no topo da faixa.'
  },
  {
    id: 19,
    enunciado: 'Qual é a principal composição da atmosfera de Vênus?',
    opcoes: ['Oxigênio', 'Hidrogênio', 'Nitrogênio', 'Dióxido de carbono'],
    resposta: 3,
    explicacao: 'A atmosfera venusiana é ~96% CO₂, responsável por efeito estufa extremo.'
  },
  {
    id: 20,
    enunciado: 'Qual é a estrela mais próxima da Terra depois do Sol?',
    opcoes: ['Proxima Centauri', 'Betelgeuse', 'Alpha Centauri A', 'Sirius'],
    resposta: 0,
    explicacao: 'Proxima Centauri é a mais próxima (~4,24 anos-luz), parte do sistema Alpha Centauri.'
  },
  {
    id: 21,
    enunciado: 'Qual é a unidade de medida usada para distâncias dentro do sistema solar?',
    opcoes: ['Anos-luz', 'Parsecs', 'Unidade Astronômica', 'Quilômetros'],
    resposta: 2,
    explicacao: '1 UA é a distância média Terra–Sol (~149,6 milhões de km), prática para escalas solares.'
  },
  {
    id: 22,
    enunciado: 'O que é um buraco negro?',
    opcoes: [
      'Uma estrela em colapso',
      'Um planeta sem atmosfera',
      'Uma região de espaço-tempo de onde nada pode escapar',
      'Um tipo de cometa',
    ],
    resposta: 2,
    explicacao: 'É uma região com gravidade tão intensa que nem a luz consegue escapar do horizonte de eventos.'
  },
  {
    id: 23,
    enunciado: 'Qual planeta tem as maiores variações de temperatura entre o dia e a noite?',
    opcoes: ['Mercúrio', 'Marte', 'Terra', 'Vênus'],
    resposta: 0,
    explicacao: 'Sem atmosfera densa, Mercúrio vai de ~430 °C ao dia a ~−180 °C à noite.'
  },
  {
    id: 24,
    enunciado: 'Qual é o nome da maior lua de Netuno?',
    opcoes: ['Titã', 'Europa', 'Tritão', 'Io'],
    resposta: 2,
    explicacao: 'Tritão é retrógrada e provavelmente um objeto capturado do Cinturão de Kuiper.'
  },
  {
    id: 25,
    enunciado: 'Qual planeta tem ventos que podem chegar a 2.100 km/h?',
    opcoes: ['Júpiter', 'Saturno', 'Netuno', 'Urano'],
    resposta: 2,
    explicacao: 'Netuno registra alguns dos ventos mais rápidos do Sistema Solar, superiores a 2.000 km/h.'
  },
  {
    id: 26,
    enunciado: 'Qual é a principal composição das nuvens de Vênus?',
    opcoes: ['Água', 'Metano', 'Ácido sulfúrico', 'Amoníaco'],
    resposta: 2,
    explicacao: 'As nuvens de Vênus são ricas em ácido sulfúrico (H₂SO₄), altamente reflexivas e corrosivas.'
  },
  {
    id: 27,
    enunciado: 'Qual é a maior estrutura conhecida no universo?',
    opcoes: [
      'Superaglomerado de Hércules',
      'Grande Muralha de Sloan',
      'Grande Atrator',
      'Grande Muralha de Bóotes',
    ],
    resposta: 1,
    explicacao: 'A Grande Muralha de Sloan é uma imensa estrutura de galáxias com ~1,4 bilhão de anos-luz.'
  },
  {
    id: 28,
    enunciado: 'Qual planeta tem um sistema de anéis mais complexo?',
    opcoes: ['Júpiter', 'Urano', 'Netuno', 'Saturno'],
    resposta: 3,
    explicacao: 'O sistema de anéis de Saturno é o mais extenso e detalhado, com múltiplos anéis e divisões.'
  },
  {
    id: 29,
    enunciado: 'Qual foi o primeiro satélite artificial lançado ao espaço?',
    opcoes: ['Sputnik 1', 'Explorer 1', 'Vanguard 1', 'Luna 1'],
    resposta: 0,
    explicacao: 'O Sputnik 1 foi lançado pela URSS em 1957, iniciando a Era Espacial.'
  },
  {
    id: 30,
    enunciado: 'Qual é o tempo de rotação da Terra em torno de seu eixo?',
    opcoes: ['24 horas', '23 horas e 56 minutos', '24 horas e 30 minutos', '23 horas'],
    resposta: 1,
    explicacao: 'O dia sideral é ~23h56m; o dia solar médio ~24h devido ao movimento orbital.'
  },

  // ====== Novas perguntas (31–80) ======
  {
    id: 31,
    enunciado: 'O que causa as estações do ano na Terra?',
    opcoes: ['Distância ao Sol', 'Inclinação do eixo da Terra', 'Fases da Lua', 'Ventos solares'],
    resposta: 1,
    explicacao: 'A inclinação de ~23,5° faz variar ângulo e duração de insolação ao longo do ano.'
  },
  {
    id: 32,
    enunciado: 'Qual planeta tem a maior densidade média?',
    opcoes: ['Mercúrio', 'Terra', 'Júpiter', 'Netuno'],
    resposta: 1,
    explicacao: 'A Terra é o mais denso (~5,51 g/cm³) devido ao núcleo metálico grande.'
  },
  {
    id: 33,
    enunciado: 'Como se chama a maior montanha conhecida do sistema solar?',
    opcoes: ['Monte Everest', 'Olympus Mons', 'Maxwell Montes', 'Mauna Kea'],
    resposta: 1,
    explicacao: 'Olympus Mons, em Marte, é um vulcão-escudo colossal com ~600 km de base.'
  },
  {
    id: 34,
    enunciado: 'As auroras ocorrem principalmente em quais regiões da Terra?',
    opcoes: ['Trópicos', 'Regiões polares', 'Desertos', 'Linha do Equador'],
    resposta: 1,
    explicacao: 'Partículas solares guiadas pelo campo magnético interagem com a atmosfera perto dos polos.'
  },
  {
    id: 35,
    enunciado: 'Qual planeta apresenta a Grande Mancha Escura observada pela Voyager 2?',
    opcoes: ['Júpiter', 'Netuno', 'Saturno', 'Urano'],
    resposta: 1,
    explicacao: 'A Grande Mancha Escura é uma tempestade de alta latitude observada em Netuno.'
  },
  {
    id: 36,
    enunciado: 'Qual é o principal componente da atmosfera terrestre?',
    opcoes: ['Oxigênio', 'Nitrogênio', 'Dióxido de carbono', 'Hidrogênio'],
    resposta: 1,
    explicacao: 'O ar é ~78% nitrogênio e ~21% oxigênio; CO₂ é traço.'
  },
  {
    id: 37,
    enunciado: 'Fobos e Deimos são luas de qual planeta?',
    opcoes: ['Júpiter', 'Marte', 'Saturno', 'Urano'],
    resposta: 1,
    explicacao: 'São pequenos satélites irregulares de Marte, provavelmente asteroides capturados.'
  },
  {
    id: 38,
    enunciado: 'Qual planeta “gira de lado” por ter grande inclinação axial (~98°)?',
    opcoes: ['Vênus', 'Urano', 'Netuno', 'Saturno'],
    resposta: 1,
    explicacao: 'Urano tem eixo quase deitado, possivelmente devido a grandes impactos no passado.'
  },
  {
    id: 39,
    enunciado: 'Qual é a estrela mais brilhante do céu noturno terrestre?',
    opcoes: ['Sirius', 'Vega', 'Rigel', 'Canopus'],
    resposta: 0,
    explicacao: 'Sirius (α Canis Majoris) é a mais brilhante vista da Terra, magnitude −1,46.'
  },
  {
    id: 40,
    enunciado: 'Qual cometa é famoso por retornar a cada ~76 anos?',
    opcoes: ['Halley', 'Hale–Bopp', 'Encke', 'Swift–Tuttle'],
    resposta: 0,
    explicacao: 'O cometa Halley é periódico e visível da Terra a cada ~75–76 anos.'
  },
  {
    id: 41,
    enunciado: 'Qual missão levou humanos à Lua pela primeira vez?',
    opcoes: ['Apollo 8', 'Apollo 11', 'Apollo 12', 'Apollo 13'],
    resposta: 1,
    explicacao: 'Apollo 11 pousou em 1969 com Neil Armstrong e Buzz Aldrin.'
  },
  {
    id: 42,
    enunciado: 'Qual planeta completa uma órbita ao redor do Sol mais rapidamente?',
    opcoes: ['Vênus', 'Terra', 'Mercúrio', 'Marte'],
    resposta: 2,
    explicacao: 'Mercúrio tem o menor período orbital: ~88 dias.'
  },
  {
    id: 43,
    enunciado: 'Como se chama o caminho aparente do Sol no céu, base das constelações do zodíaco?',
    opcoes: ['Equador celeste', 'Meridiano', 'Eclíptica', 'Zenite'],
    resposta: 2,
    explicacao: 'A eclíptica é o plano da órbita terrestre projetado no céu; por ela o Sol “percorre” as constelações zodiacais.'
  },
  {
    id: 44,
    enunciado: 'Que instrumento mede o brilho aparente de astros?',
    opcoes: ['Espectrógrafo', 'Fotômetro', 'Telurímetro', 'Radiômetro de solo'],
    resposta: 1,
    explicacao: 'Fotômetros quantificam fluxo luminoso, permitindo determinar magnitudes.'
  },
  {
    id: 45,
    enunciado: 'O que é um eclipse lunar?',
    opcoes: [
      'A Lua entre o Sol e a Terra',
      'O Sol entre a Terra e a Lua',
      'A Terra entre o Sol e a Lua',
      'A Lua atrás do Sol',
    ],
    resposta: 2,
    explicacao: 'Ocorre quando a Terra faz sombra na Lua (alinhamento Sol–Terra–Lua).'
  },
  {
    id: 46,
    enunciado: "Qual planeta é chamado de 'estrela d’alva' quando visível ao amanhecer?",
    opcoes: ['Vênus', 'Mercúrio', 'Marte', 'Saturno'],
    resposta: 0,
    explicacao: 'Vênus aparece brilhante pouco antes do nascer ou após o pôr do Sol.'
  },
  {
    id: 47,
    enunciado: 'Qual telescópio espacial lançado em 1990 revolucionou a astronomia observacional?',
    opcoes: ['Spitzer', 'Hubble', 'James Webb', 'Chandra'],
    resposta: 1,
    explicacao: 'O Hubble forneceu imagens de alta resolução fora da atmosfera por décadas.'
  },
  {
    id: 48,
    enunciado: 'O que é uma galáxia?',
    opcoes: [
      'Um sistema planetário',
      'Uma estrela gigante',
      'Um enorme conjunto de estrelas, gás e poeira ligado pela gravidade',
      'Um aglomerado de cometas',
    ],
    resposta: 2,
    explicacao: 'Galáxias contêm de milhões a trilhões de estrelas, além de gás, poeira e matéria escura.'
  },
  {
    id: 49,
    enunciado: 'Qual é a velocidade da luz no vácuo (aprox.)?',
    opcoes: ['30.000 km/s', '300.000 km/s', '3.000 km/s', '3.000.000 km/s'],
    resposta: 1,
    explicacao: 'c ≈ 299.792 km/s; arredonda-se para ~300.000 km/s.'
  },
  {
    id: 50,
    enunciado: 'Qual planeta possui uma tempestade hexagonal em seu polo norte?',
    opcoes: ['Júpiter', 'Saturno', 'Urano', 'Netuno'],
    resposta: 1,
    explicacao: 'Saturno tem um vórtice hexagonal estável no polo norte observado desde a missão Voyager.'
  },
  {
    id: 51,
    enunciado: 'Qual planeta tem a órbita mais excêntrica entre os planetas clássicos?',
    opcoes: ['Vênus', 'Terra', 'Marte', 'Mercúrio'],
    resposta: 3,
    explicacao: 'Mercúrio tem a maior excentricidade orbital entre os 8 planetas.'
  },
  {
    id: 52,
    enunciado: 'O que é um meteoro?',
    opcoes: [
      'Rocha espacial em órbita da Terra',
      'Fenômeno luminoso ao entrar na atmosfera (estrela cadente)',
      'Fragmento que atingiu o solo',
      'Cometa de curto período',
    ],
    resposta: 1,
    explicacao: 'É o brilho da passagem de um meteoroide pela atmosfera. Se atinge o solo, vira meteorito.'
  },
  {
    id: 53,
    enunciado: 'Qual planeta tem a maior gravidade superficial?',
    opcoes: ['Saturno', 'Júpiter', 'Netuno', 'Terra'],
    resposta: 1,
    explicacao: 'A gravidade efetiva em Júpiter é a maior (~2,5 g terrestres).'
  },
  {
    id: 54,
    enunciado: 'Qual destes NÃO é um planeta anão?',
    opcoes: ['Ceres', 'Éris', 'Haumea', 'Titã'],
    resposta: 3,
    explicacao: 'Titã é uma lua de Saturno; os demais são planetas anões reconhecidos.'
  },
  {
    id: 55,
    enunciado: 'Como se chama a camada visível do Sol que vemos a olho nu (com filtro)?',
    opcoes: ['Cromosfera', 'Fotosfera', 'Coroa', 'Núcleo'],
    resposta: 1,
    explicacao: 'A fotosfera é a “superfície” aparente do Sol, onde se observam manchas solares.'
  },
  {
    id: 56,
    enunciado: 'O Cruzeiro do Sul ajuda a encontrar qual direção no hemisfério sul?',
    opcoes: ['Norte', 'Sul', 'Leste', 'Oeste'],
    resposta: 1,
    explicacao: 'A extensão do eixo maior da constelação aponta próximo ao polo sul celeste.'
  },
  {
    id: 57,
    enunciado: 'O que é um exoplaneta?',
    opcoes: [
      'Planeta fora do Sistema Solar',
      'Lua de outro planeta',
      'Planeta sem estrela',
      'Planeta anão do Cinturão Principal',
    ],
    resposta: 0,
    explicacao: 'Exoplanetas orbitam estrelas que não o Sol.'
  },
  {
    id: 58,
    enunciado: 'Qual é a fonte de energia do Sol?',
    opcoes: [
      'Fissão nuclear',
      'Fusão de hidrogênio em hélio',
      'Combustão química',
      'Energia geotérmica',
    ],
    resposta: 1,
    explicacao: 'No núcleo solar ocorre fusão de H em He, liberando enorme energia.'
  },
  {
    id: 59,
    enunciado: 'Qual planeta possui anéis pouco visíveis, finos e empoeirados, além de Saturno?',
    opcoes: ['Júpiter', 'Mercúrio', 'Vênus', 'Terra'],
    resposta: 0,
    explicacao: 'Júpiter tem anéis tênues de poeira, detectados em 1979 pela Voyager 1.'
  },
  {
    id: 60,
    enunciado: 'A Lua leva aproximadamente quanto tempo para completar um ciclo de fases?',
    opcoes: ['7 dias', '14 dias', '29,5 dias', '31 dias'],
    resposta: 2,
    explicacao: 'O mês sinódico (nova a nova) é de ~29,5 dias.'
  },
  {
    id: 61,
    enunciado: 'Qual planeta tem o campo magnético mais forte?',
    opcoes: ['Terra', 'Júpiter', 'Saturno', 'Netuno'],
    resposta: 1,
    explicacao: 'Júpiter possui o magnetosfera mais intensa do Sistema Solar.'
  },
  {
    id: 62,
    enunciado: 'O que define 1 Unidade Astronômica (UA)?',
    opcoes: [
      'Distância Terra–Lua',
      'Distância média Terra–Sol',
      'Raio do Sol',
      'Distância Sol–Mercúrio',
    ],
    resposta: 1,
    explicacao: '1 UA ≈ 149,6 milhões de km, distância média da Terra ao Sol.'
  },
  {
    id: 63,
    enunciado: 'Que tipo de estrela é Betelgeuse?',
    opcoes: ['Anã branca', 'Gigante azul', 'Supergigante vermelha', 'Anã marrom'],
    resposta: 2,
    explicacao: 'Betelgeuse (em Órion) é uma supergigante vermelha em fase evolutiva avançada.'
  },
  {
    id: 64,
    enunciado: 'Qual planeta mostra frequentes tempestades de poeira que podem cobrir o globo?',
    opcoes: ['Vênus', 'Marte', 'Mercúrio', 'Urano'],
    resposta: 1,
    explicacao: 'Marte tem grandes tempestades sazonais que podem envolver o planeta inteiro.'
  },
  {
    id: 65,
    enunciado: 'O que é um meteorito?',
    opcoes: [
      'Meteoro muito brilhante',
      'Fragmento de rocha espacial que atingiu o solo',
      'Cometa inativo',
      'Asteroide metálico',
    ],
    resposta: 1,
    explicacao: 'Meteorito é o remanescente sólido do meteoroide após atravessar a atmosfera e cair.'
  },
  {
    id: 66,
    enunciado: 'Qual planeta parece mais azul escuro devido ao metano na atmosfera?',
    opcoes: ['Urano', 'Netuno', 'Terra', 'Saturno'],
    resposta: 1,
    explicacao: 'O metano absorve luz vermelha, deixando Netuno com tom azul profundo.'
  },
  {
    id: 67,
    enunciado: 'O que é um ano-luz?',
    opcoes: [
      'Tempo que a Terra leva para orbitar o Sol',
      'Tempo que a luz leva para chegar ao Sol',
      'Distância que a luz percorre em um ano',
      'Distância média Terra–Sol',
    ],
    resposta: 2,
    explicacao: 'É unidade de distância: ~9,46 trilhões de km por ano.'
  },
  {
    id: 68,
    enunciado: 'Qual planeta tem o maior número de vulcões atualmente ativos?',
    opcoes: ['Terra', 'Vênus', 'Marte', 'Io'],
    resposta: 0,
    explicacao: 'Entre os planetas, a Terra concentra a maior atividade vulcânica em curso. (Io, uma lua, é o corpo mais ativo.)'
  },
  {
    id: 69,
    enunciado: 'A Estação Espacial Internacional completa uma órbita em cerca de:',
    opcoes: ['45 minutos', '90 minutos', '180 minutos', '360 minutos'],
    resposta: 1,
    explicacao: 'Em órbita baixa (~400 km), a ISS dá uma volta em ~90 minutos.'
  },
  {
    id: 70,
    enunciado: 'Qual é o segundo planeta mais massivo do Sistema Solar?',
    opcoes: ['Saturno', 'Netuno', 'Urano', 'Terra'],
    resposta: 0,
    explicacao: 'Saturno é o 2º em massa, atrás de Júpiter.'
  },
  {
    id: 71,
    enunciado: 'O que é uma anã branca?',
    opcoes: [
      'Planeta gasoso jovem',
      'Estrela prestes a se formar',
      'Remanescente denso de uma estrela de baixa/média massa',
      'Buraco negro de baixa massa',
    ],
    resposta: 2,
    explicacao: 'É o núcleo residual de uma estrela como o Sol após expulsar suas camadas externas.'
  },
  {
    id: 72,
    enunciado: 'Qual destas é uma constelação do zodíaco?',
    opcoes: ['Órion', 'Escorpião', 'Cassiopeia', 'Cruzeiro do Sul'],
    resposta: 1,
    explicacao: 'As constelações do zodíaco ficam próximas à eclíptica; Escorpião é uma delas.'
  },
  {
    id: 73,
    enunciado: 'Em qual fase da Lua pode ocorrer um eclipse solar total?',
    opcoes: ['Lua Nova', 'Quarto Crescente', 'Lua Cheia', 'Quarto Minguante'],
    resposta: 0,
    explicacao: 'No eclipse solar a Lua fica entre a Terra e o Sol, o que só ocorre em Lua Nova.'
  },
  {
    id: 74,
    enunciado: 'O que é a eclíptica?',
    opcoes: [
      'Plano da órbita da Terra ao redor do Sol',
      'Linha que passa pelo zênite',
      'Meridiano local',
      'Círculo polar celeste',
    ],
    resposta: 0,
    explicacao: 'É o plano orbital da Terra; sua projeção no céu define o caminho aparente do Sol.'
  },
  {
    id: 75,
    enunciado: 'Qual planeta tem o ano (período orbital) mais longo?',
    opcoes: ['Saturno', 'Urano', 'Netuno', 'Júpiter'],
    resposta: 2,
    explicacao: 'Netuno leva ~165 anos terrestres para completar uma órbita.'
  },
  {
    id: 76,
    enunciado: 'Qual método de descoberta de exoplanetas observa o escurecimento periódico de uma estrela?',
    opcoes: ['Velocidade radial', 'Astrometria', 'Trânsito', 'Microlente'],
    resposta: 2,
    explicacao: 'O método de trânsito detecta a queda de brilho quando o planeta passa diante da estrela.'
  },
  {
    id: 77,
    enunciado: 'Qual planeta gira mais rápido (dia mais curto)?',
    opcoes: ['Saturno', 'Júpiter', 'Netuno', 'Terra'],
    resposta: 1,
    explicacao: 'Júpiter tem dia de ~9h56m, o mais curto entre os planetas.'
  },
  {
    id: 78,
    enunciado: 'O que é a Nuvem de Oort?',
    opcoes: [
      'Aglomerado aberto próximo',
      'Região distante repleta de cometas de longo período',
      'Anel de asteroides entre Marte e Júpiter',
      'Cinturão de radiação da Terra',
    ],
    resposta: 1,
    explicacao: 'É um reservatório hipotético esférico, muito além de Plutão, fonte de cometas longos.'
  },
  {
    id: 79,
    enunciado: 'Qual sonda vem estudando Júpiter e suas luas desde 2016?',
    opcoes: ['Cassini', 'Juno', 'New Horizons', 'Voyager 2'],
    resposta: 1,
    explicacao: 'A sonda Juno investiga a estrutura interna e o campo magnético de Júpiter desde 2016.'
  },
  {
    id: 80,
    enunciado: 'Qual é o principal motivo de Vênus ser tão quente?',
    opcoes: [
      'Proximidade ao Sol',
      'Alta atividade vulcânica recente',
      'Efeito estufa intenso por CO₂',
      'Rotação retrógrada',
    ],
    resposta: 2,
    explicacao: 'A atmosfera espessa de CO₂ provoca efeito estufa extremo, elevando a superfície a ~465 °C.'
  },
]

export default perguntas
