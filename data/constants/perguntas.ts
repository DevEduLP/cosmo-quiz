import Pergunta from '@/data/model/Pergunta'



const perguntas: Pergunta[] = [
  {
    id: 1,
    nivel: 'iniciante',
    enunciado: 'Qual é o maior planeta do sistema solar?',
    opcoes: ['Terra', 'Júpiter', 'Saturno', 'Urano'],
    resposta: 1,
    explicacao: 'Júpiter é o maior planeta: ~11 vezes o diâmetro da Terra e ~318 vezes sua massa.'
  },
  {
    id: 2,
    nivel: 'iniciante',
    enunciado: 'Quantos planetas existem no sistema solar?',
    opcoes: ['8', '9', '7', '10'],
    resposta: 0,
    explicacao: 'Desde 2006, a União Astronômica Internacional reconhece 8 planetas; Plutão passou a planeta anão.'
  },
  {
    id: 3,
    nivel: 'iniciante',
    enunciado: "Qual planeta é conhecido como o 'Planeta Vermelho'?",
    opcoes: ['Marte', 'Vênus', 'Júpiter', 'Saturno'],
    resposta: 0,
    explicacao: 'Marte tem solo rico em óxidos de ferro, que dão coloração avermelhada.'
  },
  {
    id: 4,
    nivel: 'iniciante',
    enunciado: 'Qual planeta é famoso pelos seus anéis?',
    opcoes: ['Urano', 'Netuno', 'Saturno', 'Júpiter'],
    resposta: 2,
    explicacao: 'Todos os gigantes têm anéis, mas os de Saturno são muito mais extensos e brilhantes.'
  },
  {
    id: 5,
    nivel: 'medio',
    enunciado: 'Qual é o planeta mais frio do sistema solar?',
    opcoes: ['Netuno', 'Urano', 'Saturno', 'Plutão'],
    resposta: 1,
    explicacao: 'Urano registra as temperaturas mais baixas na alta atmosfera (~−224 °C).'
  },
  {
    id: 6,
    nivel: 'iniciante',
    enunciado: 'Qual planeta é o mais próximo do Sol?',
    opcoes: ['Terra', 'Mercúrio', 'Vênus', 'Marte'],
    resposta: 1,
    explicacao: 'Mercúrio orbita a ~0,39 UA do Sol, o mais interno dos planetas.'
  },
  {
    id: 7,
    nivel: 'medio',
    enunciado: 'Qual é a maior lua de Saturno?',
    opcoes: ['Titã', 'Europa', 'Ganimedes', 'Calisto'],
    resposta: 0,
    explicacao: 'Titã é maior que Mercúrio e tem atmosfera densa rica em nitrogênio.'
  },
  {
    id: 8,
    nivel: 'medio',
    enunciado: 'Qual planeta tem um dia mais longo que seu ano?',
    opcoes: ['Vênus', 'Mercúrio', 'Marte', 'Netuno'],
    resposta: 0,
    explicacao: 'Vênus gira muito lentamente (rotação ~243 dias) e orbita o Sol em ~225 dias.'
  },
  {
    id: 9,
    nivel: 'iniciante',
    enunciado: 'Qual destes planetas é um gigante gasoso?',
    opcoes: ['Júpiter', 'Marte', 'Terra', 'Mercúrio'],
    resposta: 0,
    explicacao: 'Júpiter e Saturno são gigantes gasosos, feitos principalmente de hidrogênio e hélio. Urano e Netuno são chamados de gigantes de gelo.'
  },
  {
    id: 10,
    nivel: 'medio',
    enunciado: 'Qual planeta tem a maior montanha do sistema solar?',
    opcoes: ['Terra', 'Marte', 'Vênus', 'Mercúrio'],
    resposta: 1,
    explicacao: 'O Olympus Mons, em Marte, tem ~22 km de altitude, quase 3x o Everest.'
  },
  {
    id: 11,
    nivel: 'iniciante',
    enunciado: 'Qual é o nome da galáxia em que vivemos?',
    opcoes: ['Via Láctea', 'Andrômeda', 'Triângulo', 'Centaurus A'],
    resposta: 0,
    explicacao: 'A Via Láctea é nossa galáxia espiral barrada, com centenas de bilhões de estrelas.'
  },
  {
    id: 12,
    nivel: 'medio',
    enunciado: 'Quantas luas tem Marte?',
    opcoes: ['1', '2', '3', '4'],
    resposta: 1,
    explicacao: 'Marte possui duas pequenas luas irregulares: Fobos e Deimos.'
  },
  {
    id: 13,
    nivel: 'medio',
    enunciado: 'Qual é a maior lua do sistema solar?',
    opcoes: ['Titã', 'Ganimedes', 'Calisto', 'Europa'],
    resposta: 1,
    explicacao: 'Ganimedes (de Júpiter) é a maior lua; é maior que Mercúrio.'
  },
  {
    id: 14,
    nivel: 'iniciante',
    enunciado: 'Qual planeta é conhecido por ter uma grande mancha vermelha?',
    opcoes: ['Marte', 'Júpiter', 'Saturno', 'Vênus'],
    resposta: 1,
    explicacao: 'A Grande Mancha Vermelha é uma tempestade anticiclônica gigantesca em Júpiter, ativa há séculos.'
  },
  {
    id: 15,
    nivel: 'iniciante',
    enunciado: 'Qual é o menor planeta do sistema solar?',
    opcoes: ['Mercúrio', 'Marte', 'Vênus', 'Plutão'],
    resposta: 0,
    explicacao: 'Entre os planetas, Mercúrio é o menor; Plutão é planeta anão.'
  },
  {
    id: 16,
    nivel: 'iniciante',
    enunciado: 'Qual é o nome do segundo maior planeta do sistema solar?',
    opcoes: ['Urano', 'Netuno', 'Saturno', 'Júpiter'],
    resposta: 2,
    explicacao: 'Saturno é o 2º em tamanho e massa, atrás apenas de Júpiter.'
  },
  {
    id: 17,
    nivel: 'medio',
    enunciado: 'Qual é o nome do rover que a NASA enviou a Marte em 2021?',
    opcoes: ['Curiosity', 'Spirit', 'Opportunity', 'Perseverance'],
    resposta: 3,
    explicacao: 'O Perseverance pousou em 2021 na cratera Jezero para buscar sinais de vida passada.'
  },
  {
    id: 18,
    nivel: 'medio',
    enunciado: 'Estima-se que a Via Láctea tenha quantas estrelas?',
    opcoes: ['Cerca de 50 mil', 'Cerca de 1 milhão', 'Entre 100 e 400 bilhões', 'Cerca de 10 quatrilhões'],
    resposta: 2,
    explicacao: 'As estimativas variam entre 100 e 400 bilhões de estrelas, porque muitas são anãs vermelhas pouco brilhantes e difíceis de contar.'
  },
  {
    id: 19,
    nivel: 'iniciante',
    enunciado: 'Qual é a principal composição da atmosfera de Vênus?',
    opcoes: ['Oxigênio', 'Hidrogênio', 'Nitrogênio', 'Dióxido de carbono'],
    resposta: 3,
    explicacao: 'A atmosfera venusiana é ~96% CO₂, responsável por efeito estufa extremo.'
  },
  {
    id: 20,
    nivel: 'iniciante',
    enunciado: 'Qual é a estrela mais próxima da Terra depois do Sol?',
    opcoes: ['Proxima Centauri', 'Betelgeuse', 'Alpha Centauri A', 'Sirius'],
    resposta: 0,
    explicacao: 'Proxima Centauri é a mais próxima (~4,24 anos-luz), parte do sistema Alpha Centauri.'
  },
  {
    id: 21,
    nivel: 'medio',
    enunciado: 'Qual é a unidade de medida usada para distâncias dentro do sistema solar?',
    opcoes: ['Anos-luz', 'Parsecs', 'Unidade Astronômica', 'Quilômetros'],
    resposta: 2,
    explicacao: '1 UA é a distância média Terra–Sol (~149,6 milhões de km), prática para escalas solares.'
  },
  {
    id: 22,
    nivel: 'iniciante',
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
    nivel: 'medio',
    enunciado: 'Qual planeta tem as maiores variações de temperatura entre o dia e a noite?',
    opcoes: ['Mercúrio', 'Marte', 'Terra', 'Vênus'],
    resposta: 0,
    explicacao: 'Sem atmosfera densa, Mercúrio vai de ~430 °C ao dia a ~−180 °C à noite.'
  },
  {
    id: 24,
    nivel: 'medio',
    enunciado: 'Qual é o nome da maior lua de Netuno?',
    opcoes: ['Titã', 'Europa', 'Tritão', 'Io'],
    resposta: 2,
    explicacao: 'Tritão é retrógrada e provavelmente um objeto capturado do Cinturão de Kuiper.'
  },
  {
    id: 25,
    nivel: 'medio',
    enunciado: 'Qual planeta tem ventos que podem chegar a 2.100 km/h?',
    opcoes: ['Júpiter', 'Saturno', 'Netuno', 'Urano'],
    resposta: 2,
    explicacao: 'Netuno registra alguns dos ventos mais rápidos do Sistema Solar, superiores a 2.000 km/h.'
  },
  {
    id: 26,
    nivel: 'medio',
    enunciado: 'Qual é a principal composição das nuvens de Vênus?',
    opcoes: ['Água', 'Metano', 'Ácido sulfúrico', 'Amoníaco'],
    resposta: 2,
    explicacao: 'As nuvens de Vênus são ricas em ácido sulfúrico (H₂SO₄), altamente reflexivas e corrosivas.'
  },
  {
    id: 27,
    nivel: 'medio',
    enunciado: 'Como se chama o superaglomerado de galáxias que abriga a Via Láctea?',
    opcoes: ['Laniakea', 'Shapley', 'Coma', 'Perseu-Peixes'],
    resposta: 0,
    explicacao: 'Laniakea (“céu imenso” em havaiano) foi definido em 2014 e reúne cerca de 100 mil galáxias, incluindo a nossa.'
  },
  {
    id: 28,
    nivel: 'iniciante',
    enunciado: 'Quanto tempo a Terra leva para dar uma volta completa ao redor do Sol?',
    opcoes: ['Cerca de 24 horas', 'Cerca de 30 dias', 'Cerca de 365 dias', 'Cerca de 687 dias'],
    resposta: 2,
    explicacao: 'O ano terrestre dura ~365,25 dias. O quarto de dia que sobra é compensado a cada 4 anos com o ano bissexto.'
  },
  {
    id: 29,
    nivel: 'iniciante',
    enunciado: 'Qual foi o primeiro satélite artificial lançado ao espaço?',
    opcoes: ['Sputnik 1', 'Explorer 1', 'Vanguard 1', 'Luna 1'],
    resposta: 0,
    explicacao: 'O Sputnik 1 foi lançado pela URSS em 1957, iniciando a Era Espacial.'
  },
  {
    id: 30,
    nivel: 'medio',
    enunciado: 'Qual é o tempo de rotação da Terra em torno de seu eixo?',
    opcoes: ['24 horas', '23 horas e 56 minutos', '24 horas e 30 minutos', '23 horas'],
    resposta: 1,
    explicacao: 'O dia sideral é ~23h56m; o dia solar médio ~24h devido ao movimento orbital.'
  },

  // ====== Novas perguntas (31–80) ======
  {
    id: 31,
    nivel: 'iniciante',
    enunciado: 'O que causa as estações do ano na Terra?',
    opcoes: ['Distância ao Sol', 'Inclinação do eixo da Terra', 'Fases da Lua', 'Ventos solares'],
    resposta: 1,
    explicacao: 'A inclinação de ~23,5° faz variar ângulo e duração de insolação ao longo do ano.'
  },
  {
    id: 32,
    nivel: 'medio',
    enunciado: 'Qual planeta tem a maior densidade média?',
    opcoes: ['Mercúrio', 'Terra', 'Júpiter', 'Netuno'],
    resposta: 1,
    explicacao: 'A Terra é o mais denso (~5,51 g/cm³) devido ao núcleo metálico grande.'
  },
  {
    id: 33,
    nivel: 'medio',
    enunciado: 'Qual sonda fez o primeiro sobrevoo de Plutão, em 2015?',
    opcoes: ['Voyager 1', 'New Horizons', 'Cassini', 'Juno'],
    resposta: 1,
    explicacao: 'A New Horizons passou por Plutão em julho de 2015 e revelou a grande planície gelada em forma de coração, a Sputnik Planitia.'
  },
  {
    id: 34,
    nivel: 'iniciante',
    enunciado: 'As auroras ocorrem principalmente em quais regiões da Terra?',
    opcoes: ['Trópicos', 'Regiões polares', 'Desertos', 'Linha do Equador'],
    resposta: 1,
    explicacao: 'Partículas solares guiadas pelo campo magnético interagem com a atmosfera perto dos polos.'
  },
  {
    id: 35,
    nivel: 'medio',
    enunciado: 'Qual planeta apresenta a Grande Mancha Escura observada pela Voyager 2?',
    opcoes: ['Júpiter', 'Netuno', 'Saturno', 'Urano'],
    resposta: 1,
    explicacao: 'A Grande Mancha Escura é uma tempestade de alta latitude observada em Netuno.'
  },
  {
    id: 36,
    nivel: 'iniciante',
    enunciado: 'Qual é o principal componente da atmosfera terrestre?',
    opcoes: ['Oxigênio', 'Nitrogênio', 'Dióxido de carbono', 'Hidrogênio'],
    resposta: 1,
    explicacao: 'O ar é ~78% nitrogênio e ~21% oxigênio; CO₂ é traço.'
  },
  {
    id: 37,
    nivel: 'medio',
    enunciado: 'Qual lua de Saturno lança jatos de água pelo polo sul?',
    opcoes: ['Titã', 'Mimas', 'Encélado', 'Jápeto'],
    resposta: 2,
    explicacao: 'A sonda Cassini observou gêiseres de vapor d’água e gelo saindo de fissuras no polo sul de Encélado, sinal de um oceano sob a crosta.'
  },
  {
    id: 38,
    nivel: 'medio',
    enunciado: 'Qual planeta “gira de lado” por ter grande inclinação axial (~98°)?',
    opcoes: ['Vênus', 'Urano', 'Netuno', 'Saturno'],
    resposta: 1,
    explicacao: 'Urano tem eixo quase deitado, possivelmente devido a grandes impactos no passado.'
  },
  {
    id: 39,
    nivel: 'iniciante',
    enunciado: 'Qual é a estrela mais brilhante do céu noturno terrestre?',
    opcoes: ['Sirius', 'Vega', 'Rigel', 'Canopus'],
    resposta: 0,
    explicacao: 'Sirius (α Canis Majoris) é a mais brilhante vista da Terra, magnitude −1,46.'
  },
  {
    id: 40,
    nivel: 'iniciante',
    enunciado: 'Qual cometa é famoso por retornar a cada ~76 anos?',
    opcoes: ['Halley', 'Hale–Bopp', 'Encke', 'Swift–Tuttle'],
    resposta: 0,
    explicacao: 'O cometa Halley é periódico e visível da Terra a cada ~75–76 anos.'
  },
  {
    id: 41,
    nivel: 'iniciante',
    enunciado: 'Qual missão levou humanos à Lua pela primeira vez?',
    opcoes: ['Apollo 8', 'Apollo 11', 'Apollo 12', 'Apollo 13'],
    resposta: 1,
    explicacao: 'Apollo 11 pousou em 1969 com Neil Armstrong e Buzz Aldrin.'
  },
  {
    id: 42,
    nivel: 'iniciante',
    enunciado: 'Qual planeta completa uma órbita ao redor do Sol mais rapidamente?',
    opcoes: ['Vênus', 'Terra', 'Mercúrio', 'Marte'],
    resposta: 2,
    explicacao: 'Mercúrio tem o menor período orbital: ~88 dias.'
  },
  {
    id: 43,
    nivel: 'medio',
    enunciado: 'Como se chama o caminho aparente do Sol no céu, base das constelações do zodíaco?',
    opcoes: ['Equador celeste', 'Meridiano', 'Eclíptica', 'Zenite'],
    resposta: 2,
    explicacao: 'A eclíptica é o plano da órbita terrestre projetado no céu; por ela o Sol “percorre” as constelações zodiacais.'
  },
  {
    id: 44,
    nivel: 'medio',
    enunciado: 'Que instrumento mede o brilho aparente de astros?',
    opcoes: ['Espectrógrafo', 'Fotômetro', 'Telurímetro', 'Radiômetro de solo'],
    resposta: 1,
    explicacao: 'Fotômetros quantificam fluxo luminoso, permitindo determinar magnitudes.'
  },
  {
    id: 45,
    nivel: 'iniciante',
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
    nivel: 'iniciante',
    enunciado: "Qual planeta é chamado de 'estrela d’alva' quando visível ao amanhecer?",
    opcoes: ['Vênus', 'Mercúrio', 'Marte', 'Saturno'],
    resposta: 0,
    explicacao: 'Vênus aparece brilhante pouco antes do nascer ou após o pôr do Sol.'
  },
  {
    id: 47,
    nivel: 'iniciante',
    enunciado: 'Qual telescópio espacial lançado em 1990 revolucionou a astronomia observacional?',
    opcoes: ['Spitzer', 'Hubble', 'James Webb', 'Chandra'],
    resposta: 1,
    explicacao: 'O Hubble forneceu imagens de alta resolução fora da atmosfera por décadas.'
  },
  {
    id: 48,
    nivel: 'iniciante',
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
    nivel: 'iniciante',
    enunciado: 'Qual é a velocidade da luz no vácuo (aprox.)?',
    opcoes: ['30.000 km/s', '300.000 km/s', '3.000 km/s', '3.000.000 km/s'],
    resposta: 1,
    explicacao: 'c ≈ 299.792 km/s; arredonda-se para ~300.000 km/s.'
  },
  {
    id: 50,
    nivel: 'medio',
    enunciado: 'Qual planeta possui uma tempestade hexagonal em seu polo norte?',
    opcoes: ['Júpiter', 'Saturno', 'Urano', 'Netuno'],
    resposta: 1,
    explicacao: 'Saturno tem um vórtice hexagonal estável no polo norte observado desde a missão Voyager.'
  },
  {
    id: 51,
    nivel: 'medio',
    enunciado: 'Qual planeta tem a órbita mais excêntrica entre os planetas clássicos?',
    opcoes: ['Vênus', 'Terra', 'Marte', 'Mercúrio'],
    resposta: 3,
    explicacao: 'Mercúrio tem a maior excentricidade orbital entre os 8 planetas.'
  },
  {
    id: 52,
    nivel: 'iniciante',
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
    nivel: 'medio',
    enunciado: 'Qual planeta tem a maior gravidade superficial?',
    opcoes: ['Saturno', 'Júpiter', 'Netuno', 'Terra'],
    resposta: 1,
    explicacao: 'A gravidade efetiva em Júpiter é a maior (~2,5 g terrestres).'
  },
  {
    id: 54,
    nivel: 'medio',
    enunciado: 'Qual destes NÃO é um planeta anão?',
    opcoes: ['Ceres', 'Éris', 'Haumea', 'Titã'],
    resposta: 3,
    explicacao: 'Titã é uma lua de Saturno; os demais são planetas anões reconhecidos.'
  },
  {
    id: 55,
    nivel: 'medio',
    enunciado: 'Como se chama a camada visível do Sol que vemos a olho nu (com filtro)?',
    opcoes: ['Cromosfera', 'Fotosfera', 'Coroa', 'Núcleo'],
    resposta: 1,
    explicacao: 'A fotosfera é a “superfície” aparente do Sol, onde se observam manchas solares.'
  },
  {
    id: 56,
    nivel: 'iniciante',
    enunciado: 'O Cruzeiro do Sul ajuda a encontrar qual direção no hemisfério sul?',
    opcoes: ['Norte', 'Sul', 'Leste', 'Oeste'],
    resposta: 1,
    explicacao: 'A extensão do eixo maior da constelação aponta próximo ao polo sul celeste.'
  },
  {
    id: 57,
    nivel: 'iniciante',
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
    nivel: 'iniciante',
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
    nivel: 'medio',
    enunciado: 'Qual planeta possui anéis pouco visíveis, finos e empoeirados, além de Saturno?',
    opcoes: ['Júpiter', 'Mercúrio', 'Vênus', 'Terra'],
    resposta: 0,
    explicacao: 'Júpiter tem anéis tênues de poeira, detectados em 1979 pela Voyager 1.'
  },
  {
    id: 60,
    nivel: 'iniciante',
    enunciado: 'A Lua leva aproximadamente quanto tempo para completar um ciclo de fases?',
    opcoes: ['7 dias', '14 dias', '29,5 dias', '31 dias'],
    resposta: 2,
    explicacao: 'O mês sinódico (nova a nova) é de ~29,5 dias.'
  },
  {
    id: 61,
    nivel: 'medio',
    enunciado: 'Qual planeta tem o campo magnético mais forte?',
    opcoes: ['Terra', 'Júpiter', 'Saturno', 'Netuno'],
    resposta: 1,
    explicacao: 'Júpiter possui o magnetosfera mais intensa do Sistema Solar.'
  },
  {
    id: 62,
    nivel: 'iniciante',
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
    nivel: 'medio',
    enunciado: 'Que tipo de estrela é Betelgeuse?',
    opcoes: ['Anã branca', 'Gigante azul', 'Supergigante vermelha', 'Anã marrom'],
    resposta: 2,
    explicacao: 'Betelgeuse (em Órion) é uma supergigante vermelha em fase evolutiva avançada.'
  },
  {
    id: 64,
    nivel: 'medio',
    enunciado: 'Qual planeta mostra frequentes tempestades de poeira que podem cobrir o globo?',
    opcoes: ['Vênus', 'Marte', 'Mercúrio', 'Urano'],
    resposta: 1,
    explicacao: 'Marte tem grandes tempestades sazonais que podem envolver o planeta inteiro.'
  },
  {
    id: 65,
    nivel: 'iniciante',
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
    nivel: 'iniciante',
    enunciado: 'Qual planeta parece mais azul escuro devido ao metano na atmosfera?',
    opcoes: ['Urano', 'Netuno', 'Terra', 'Saturno'],
    resposta: 1,
    explicacao: 'O metano absorve luz vermelha, deixando Netuno com tom azul profundo.'
  },
  {
    id: 67,
    nivel: 'iniciante',
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
    nivel: 'medio',
    enunciado: 'Qual planeta tem o maior número de vulcões atualmente ativos?',
    opcoes: ['Terra', 'Vênus', 'Marte', 'Io'],
    resposta: 0,
    explicacao: 'Entre os planetas, a Terra concentra a maior atividade vulcânica em curso. (Io, uma lua, é o corpo mais ativo.)'
  },
  {
    id: 69,
    nivel: 'medio',
    enunciado: 'A Estação Espacial Internacional completa uma órbita em cerca de:',
    opcoes: ['45 minutos', '90 minutos', '180 minutos', '360 minutos'],
    resposta: 1,
    explicacao: 'Em órbita baixa (~400 km), a ISS dá uma volta em ~90 minutos.'
  },
  {
    id: 70,
    nivel: 'iniciante',
    enunciado: 'Qual telescópio espacial, lançado em 2021, observa o Universo no infravermelho?',
    opcoes: ['Hubble', 'James Webb', 'Kepler', 'Chandra'],
    resposta: 1,
    explicacao: 'O James Webb foi lançado em dezembro de 2021 e opera no ponto L2, a ~1,5 milhão de km da Terra, observando no infravermelho.'
  },
  {
    id: 71,
    nivel: 'medio',
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
    nivel: 'medio',
    enunciado: 'Qual destas é uma constelação do zodíaco?',
    opcoes: ['Órion', 'Escorpião', 'Cassiopeia', 'Cruzeiro do Sul'],
    resposta: 1,
    explicacao: 'As constelações do zodíaco ficam próximas à eclíptica; Escorpião é uma delas.'
  },
  {
    id: 73,
    nivel: 'medio',
    enunciado: 'Em qual fase da Lua pode ocorrer um eclipse solar total?',
    opcoes: ['Lua Nova', 'Quarto Crescente', 'Lua Cheia', 'Quarto Minguante'],
    resposta: 0,
    explicacao: 'No eclipse solar a Lua fica entre a Terra e o Sol, o que só ocorre em Lua Nova.'
  },
  {
    id: 74,
    nivel: 'medio',
    enunciado: 'Qual é a grande galáxia mais próxima da Via Láctea?',
    opcoes: ['Andrômeda', 'Sombrero', 'Rodamoinho (M51)', 'Centaurus A'],
    resposta: 0,
    explicacao: 'Andrômeda (M31) fica a ~2,5 milhões de anos-luz e está se aproximando: deve colidir com a Via Láctea em alguns bilhões de anos.'
  },
  {
    id: 75,
    nivel: 'iniciante',
    enunciado: 'Qual planeta tem o ano (período orbital) mais longo?',
    opcoes: ['Saturno', 'Urano', 'Netuno', 'Júpiter'],
    resposta: 2,
    explicacao: 'Netuno leva ~165 anos terrestres para completar uma órbita.'
  },
  {
    id: 76,
    nivel: 'medio',
    enunciado: 'Qual método de descoberta de exoplanetas observa o escurecimento periódico de uma estrela?',
    opcoes: ['Velocidade radial', 'Astrometria', 'Trânsito', 'Microlente'],
    resposta: 2,
    explicacao: 'O método de trânsito detecta a queda de brilho quando o planeta passa diante da estrela.'
  },
  {
    id: 77,
    nivel: 'medio',
    enunciado: 'Qual planeta gira mais rápido (dia mais curto)?',
    opcoes: ['Saturno', 'Júpiter', 'Netuno', 'Terra'],
    resposta: 1,
    explicacao: 'Júpiter tem dia de ~9h56m, o mais curto entre os planetas.'
  },
  {
    id: 78,
    nivel: 'medio',
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
    nivel: 'medio',
    enunciado: 'Qual sonda vem estudando Júpiter e suas luas desde 2016?',
    opcoes: ['Cassini', 'Juno', 'New Horizons', 'Voyager 2'],
    resposta: 1,
    explicacao: 'A sonda Juno investiga a estrutura interna e o campo magnético de Júpiter desde 2016.'
  },
  {
    id: 80,
    nivel: 'iniciante',
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
  {
    id: 81,
    nivel: 'iniciante',
    enunciado: "Quem foi o primeiro ser humano a ir ao espaço?",
    opcoes: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"],
    resposta: 2,
    explicacao: "Em 12 de abril de 1961, o soviético Yuri Gagarin deu uma volta completa na Terra a bordo da Vostok 1."
  },
  {
    id: 82,
    nivel: 'iniciante',
    enunciado: "Quem foi o primeiro ser humano a pisar na Lua?",
    opcoes: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"],
    resposta: 1,
    explicacao: "Armstrong pisou na Lua em 20 de julho de 1969 (Apollo 11). Buzz Aldrin desceu logo depois, e Michael Collins ficou em órbita."
  },
  {
    id: 83,
    nivel: 'iniciante',
    enunciado: "Quem foi a primeira mulher a ir ao espaço?",
    opcoes: ["Valentina Tereshkova", "Sally Ride", "Mae Jemison", "Svetlana Savitskaya"],
    resposta: 0,
    explicacao: "A soviética Valentina Tereshkova voou na Vostok 6 em junho de 1963 e deu 48 voltas na Terra."
  },
  {
    id: 84,
    nivel: 'iniciante',
    enunciado: "Qual foi o primeiro animal a orbitar a Terra?",
    opcoes: ["O chimpanzé Ham", "A gata Félicette", "O macaco Albert", "A cadela Laika"],
    resposta: 3,
    explicacao: "Laika foi lançada em novembro de 1957 a bordo do Sputnik 2. Ham e Albert fizeram voos que não chegaram a completar uma órbita."
  },
  {
    id: 85,
    nivel: 'iniciante',
    enunciado: "Quem é o primeiro astronauta brasileiro, que foi à Estação Espacial Internacional em 2006?",
    opcoes: ["Santos Dumont", "César Lattes", "Marcos Pontes", "Bartolomeu de Gusmão"],
    resposta: 2,
    explicacao: "Marcos Pontes passou cerca de 10 dias no espaço na Missão Centenário, entre março e abril de 2006."
  },
  {
    id: 86,
    nivel: 'iniciante',
    enunciado: "O que é o Sol?",
    opcoes: ["Um planeta", "Uma estrela", "Uma galáxia", "Um cometa"],
    resposta: 1,
    explicacao: "O Sol é uma estrela de tamanho médio, como bilhões de outras que vemos à noite. Ele só parece maior porque está muito mais perto."
  },
  {
    id: 87,
    nivel: 'iniciante',
    enunciado: "Qual é o terceiro planeta a partir do Sol?",
    opcoes: ["Terra", "Marte", "Vênus", "Júpiter"],
    resposta: 0,
    explicacao: "A ordem é: Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano e Netuno."
  },
  {
    id: 88,
    nivel: 'iniciante',
    enunciado: "Qual planeta fica entre a Terra e Júpiter?",
    opcoes: ["Vênus", "Saturno", "Mercúrio", "Marte"],
    resposta: 3,
    explicacao: "Marte é o quarto planeta. Depois dele vem o cinturão de asteroides e, então, Júpiter."
  },
  {
    id: 89,
    nivel: 'iniciante',
    enunciado: "Quantas luas naturais a Terra tem?",
    opcoes: ["2", "0", "1", "3"],
    resposta: 2,
    explicacao: "A Terra tem uma única lua natural. Às vezes pequenos asteroides são capturados por alguns meses (\"minilua\"), mas não ficam."
  },
  {
    id: 90,
    nivel: 'iniciante',
    enunciado: "O que causa o dia e a noite na Terra?",
    opcoes: ["A translação da Terra ao redor do Sol", "A rotação da Terra em torno do próprio eixo", "A Lua bloqueando o Sol", "A distância variável entre a Terra e o Sol"],
    resposta: 1,
    explicacao: "Ao girar, a Terra expõe metade da sua superfície ao Sol (dia), enquanto a outra metade fica na sombra (noite)."
  },
  {
    id: 91,
    nivel: 'iniciante',
    enunciado: "Qual planeta é chamado de \"gêmeo\" da Terra por ter tamanho parecido?",
    opcoes: ["Vênus", "Marte", "Mercúrio", "Netuno"],
    resposta: 0,
    explicacao: "Vênus tem cerca de 95% do diâmetro da Terra, mas é um mundo infernal, com superfície a ~465 °C."
  },
  {
    id: 92,
    nivel: 'iniciante',
    enunciado: "O que é uma constelação?",
    opcoes: ["Um conjunto de planetas alinhados", "Uma galáxia pequena", "Uma nuvem de gás", "Um grupo de estrelas que forma um desenho no céu"],
    resposta: 3,
    explicacao: "As estrelas de uma constelação parecem próximas no céu, mas em geral estão a distâncias muito diferentes de nós. Ex.: Escorpião, Leão e Cruzeiro do Sul."
  },
  {
    id: 93,
    nivel: 'iniciante',
    enunciado: "As Três Marias fazem parte de qual constelação?",
    opcoes: ["Escorpião", "Cruzeiro do Sul", "Órion", "Ursa Maior"],
    resposta: 2,
    explicacao: "Alnitak, Alnilam e Mintaka formam o Cinturão de Órion, chamado de Três Marias no Brasil."
  },
  {
    id: 94,
    nivel: 'iniciante',
    enunciado: "Do que os cometas são feitos principalmente?",
    opcoes: ["Ferro e níquel", "Gelo e poeira", "Gás hidrogênio", "Lava solidificada"],
    resposta: 1,
    explicacao: "Cometas são \"bolas de neve sujas\". Perto do Sol, o gelo vira gás e forma a cabeleira e a cauda."
  },
  {
    id: 95,
    nivel: 'iniciante',
    enunciado: "Onde fica o cinturão principal de asteroides?",
    opcoes: ["Entre Marte e Júpiter", "Entre a Terra e Marte", "Depois de Netuno", "Entre Vênus e a Terra"],
    resposta: 0,
    explicacao: "O cinturão principal reúne milhões de asteroides entre as órbitas de Marte e Júpiter."
  },
  {
    id: 96,
    nivel: 'iniciante',
    enunciado: "Quanto tempo a luz do Sol leva para chegar à Terra?",
    opcoes: ["Cerca de 8 segundos", "Cerca de 1 hora", "Cerca de 1 dia", "Cerca de 8 minutos"],
    resposta: 3,
    explicacao: "A luz percorre os ~150 milhões de km entre o Sol e a Terra em cerca de 8 minutos e 20 segundos."
  },
  {
    id: 97,
    nivel: 'iniciante',
    enunciado: "Quantas Terras caberiam, lado a lado, no diâmetro do Sol?",
    opcoes: ["Cerca de 10", "Cerca de 1.000", "Cerca de 109", "Cerca de 1 milhão"],
    resposta: 2,
    explicacao: "O diâmetro do Sol é ~109 vezes o da Terra. Já em volume, caberiam cerca de 1,3 milhão de Terras dentro dele."
  },
  {
    id: 98,
    nivel: 'iniciante',
    enunciado: "Qual é o principal elemento que forma o Sol?",
    opcoes: ["Hélio", "Hidrogênio", "Oxigênio", "Ferro"],
    resposta: 1,
    explicacao: "Cerca de 73% da massa do Sol é hidrogênio e cerca de 25% é hélio."
  },
  {
    id: 99,
    nivel: 'iniciante',
    enunciado: "Quem descobriu as quatro maiores luas de Júpiter, em 1610?",
    opcoes: ["Galileu Galilei", "Isaac Newton", "Nicolau Copérnico", "Johannes Kepler"],
    resposta: 0,
    explicacao: "Io, Europa, Ganimedes e Calisto são chamadas de luas galileanas em homenagem a Galileu."
  },
  {
    id: 100,
    nivel: 'iniciante',
    enunciado: "Qual força mantém os planetas em órbita ao redor do Sol?",
    opcoes: ["O magnetismo", "O vento solar", "A força do atrito", "A gravidade"],
    resposta: 3,
    explicacao: "A gravidade do Sol puxa os planetas, enquanto o movimento deles os impede de cair. O resultado é a órbita."
  },
  {
    id: 101,
    nivel: 'iniciante',
    enunciado: "Quanto você \"pesaria\" na Lua, comparado à Terra?",
    opcoes: ["Metade", "O dobro", "Cerca de 1/6", "O mesmo"],
    resposta: 2,
    explicacao: "A gravidade na superfície da Lua é cerca de 16,5% da terrestre. Sua massa continua igual; só o peso muda."
  },
  {
    id: 102,
    nivel: 'iniciante',
    enunciado: "Qual é a agência espacial dos Estados Unidos?",
    opcoes: ["ESA", "NASA", "JAXA", "Roscosmos"],
    resposta: 1,
    explicacao: "A NASA foi criada em 1958. A ESA é europeia, a JAXA é japonesa e a Roscosmos é russa."
  },
  {
    id: 103,
    nivel: 'iniciante',
    enunciado: "Qual é a idade aproximada do Universo?",
    opcoes: ["13,8 bilhões de anos", "4,6 bilhões de anos", "1 bilhão de anos", "100 bilhões de anos"],
    resposta: 0,
    explicacao: "A idade é calculada principalmente a partir da radiação cósmica de fundo, a luz mais antiga que conseguimos observar."
  },
  {
    id: 104,
    nivel: 'iniciante',
    enunciado: "Qual é a idade aproximada do Sistema Solar?",
    opcoes: ["13,8 bilhões de anos", "500 milhões de anos", "10 mil anos", "4,6 bilhões de anos"],
    resposta: 3,
    explicacao: "A idade vem da datação de meteoritos, os materiais mais antigos do Sistema Solar."
  },
  {
    id: 105,
    nivel: 'iniciante',
    enunciado: "Qual é o nome da teoria mais aceita sobre a origem do Universo?",
    opcoes: ["Estado Estacionário", "Big Crunch", "Big Bang", "Geocentrismo"],
    resposta: 2,
    explicacao: "Segundo o Big Bang, o Universo começou muito quente e denso e vem se expandindo desde então."
  },
  {
    id: 106,
    nivel: 'iniciante',
    enunciado: "Qual é a distância média entre a Terra e a Lua?",
    opcoes: ["Cerca de 38 mil km", "Cerca de 384 mil km", "Cerca de 3,8 milhões de km", "Cerca de 150 milhões de km"],
    resposta: 1,
    explicacao: "Daria para enfileirar todos os outros planetas do Sistema Solar nesse espaço. 150 milhões de km é a distância até o Sol."
  },
  {
    id: 107,
    nivel: 'iniciante',
    enunciado: "O que é uma supernova?",
    opcoes: ["A explosão de uma estrela", "O nascimento de um planeta", "Uma estrela muito jovem", "Um cometa muito brilhante"],
    resposta: 0,
    explicacao: "Uma supernova pode brilhar mais que uma galáxia inteira por semanas e espalha elementos como ferro e ouro pelo espaço."
  },
  {
    id: 108,
    nivel: 'iniciante',
    enunciado: "O que é uma nebulosa?",
    opcoes: ["Um tipo de planeta", "Uma estrela apagada", "Um buraco negro pequeno", "Uma nuvem de gás e poeira no espaço"],
    resposta: 3,
    explicacao: "Muitas nebulosas são berçários de estrelas, como a Nebulosa de Órion."
  },
  {
    id: 109,
    nivel: 'iniciante',
    enunciado: "O que são as manchas solares?",
    opcoes: ["Planetas passando na frente do Sol", "Buracos na superfície do Sol", "Regiões mais frias e escuras da superfície do Sol", "Sombras da Lua no Sol"],
    resposta: 2,
    explicacao: "São áreas com campos magnéticos intensos, até cerca de 2.000 °C mais frias que o resto da superfície, por isso parecem escuras."
  },
  {
    id: 110,
    nivel: 'iniciante',
    enunciado: "Qual é o programa da NASA para levar seres humanos de volta à Lua?",
    opcoes: ["Apollo", "Artemis", "Gemini", "Mercury"],
    resposta: 1,
    explicacao: "Artemis é a irmã gêmea de Apolo na mitologia grega. O programa Apollo levou humanos à Lua entre 1969 e 1972."
  },
  {
    id: 111,
    nivel: 'iniciante',
    enunciado: "Qual planeta tem a lua Europa, que pode esconder um oceano sob o gelo?",
    opcoes: ["Júpiter", "Saturno", "Marte", "Netuno"],
    resposta: 0,
    explicacao: "A sonda Europa Clipper, lançada em 2024, deve chegar a Júpiter em 2030 para estudar essa lua."
  },
  {
    id: 112,
    nivel: 'iniciante',
    enunciado: "O que é um eclipse solar?",
    opcoes: ["Quando a Terra passa entre o Sol e a Lua", "Quando o Sol se apaga por alguns minutos", "Quando uma nuvem cobre o Sol", "Quando a Lua passa entre o Sol e a Terra e esconde o Sol"],
    resposta: 3,
    explicacao: "Num eclipse solar total, o céu escurece em pleno dia. Nunca olhe para o Sol sem um filtro adequado!"
  },
  {
    id: 113,
    nivel: 'iniciante',
    enunciado: "Por que o céu é azul durante o dia?",
    opcoes: ["O céu reflete os oceanos", "O Sol emite apenas luz azul", "A atmosfera espalha mais a luz azul do Sol", "O espaço é azul"],
    resposta: 2,
    explicacao: "As moléculas do ar espalham mais as cores de onda curta, como o azul. É o chamado espalhamento de Rayleigh."
  },
  {
    id: 114,
    nivel: 'iniciante',
    enunciado: "Por que as estrelas parecem \"piscar\"?",
    opcoes: ["Porque elas acendem e apagam", "Por causa da turbulência do ar da atmosfera", "Porque giram muito rápido", "Porque estão se afastando"],
    resposta: 1,
    explicacao: "O ar em movimento desvia a luz das estrelas o tempo todo. Vistas do espaço, elas não piscam."
  },
  {
    id: 115,
    nivel: 'iniciante',
    enunciado: "Por que não há som no espaço?",
    opcoes: ["Porque não há ar para o som se propagar", "Porque é frio demais", "Porque a gravidade é fraca", "Porque a luz bloqueia o som"],
    resposta: 0,
    explicacao: "O som é uma vibração que precisa de um meio, como ar ou água. No vácuo do espaço, não há o que vibrar."
  },
  {
    id: 116,
    nivel: 'iniciante',
    enunciado: "Qual estrela é conhecida como Estrela Polar?",
    opcoes: ["Sirius", "Betelgeuse", "Vega", "Polaris"],
    resposta: 3,
    explicacao: "Polaris fica quase alinhada ao eixo de rotação da Terra, indicando o norte. Ela não aparece em boa parte do hemisfério sul."
  },
  {
    id: 117,
    nivel: 'iniciante',
    enunciado: "Do que são feitos principalmente os anéis de Saturno?",
    opcoes: ["Gás hélio", "Lava", "Pedaços de gelo de água", "Areia de ferro"],
    resposta: 2,
    explicacao: "São bilhões de partículas de gelo, de grãos minúsculos a blocos do tamanho de uma casa."
  },
  {
    id: 118,
    nivel: 'iniciante',
    enunciado: "Quem propôs, no século XVI, que a Terra gira ao redor do Sol?",
    opcoes: ["Ptolomeu", "Nicolau Copérnico", "Aristóteles", "Isaac Newton"],
    resposta: 1,
    explicacao: "Copérnico publicou o modelo heliocêntrico em 1543. Ptolomeu e Aristóteles defendiam a Terra no centro."
  },
  {
    id: 119,
    nivel: 'iniciante',
    enunciado: "Quem formulou a lei da gravitação universal?",
    opcoes: ["Isaac Newton", "Albert Einstein", "Galileu Galilei", "Stephen Hawking"],
    resposta: 0,
    explicacao: "Newton publicou a lei em 1687, no livro Principia. Einstein depois a ampliou com a relatividade geral."
  },
  {
    id: 120,
    nivel: 'iniciante',
    enunciado: "Qual planeta flutuaria na água, por ter densidade menor que ela?",
    opcoes: ["Júpiter", "Netuno", "Terra", "Saturno"],
    resposta: 3,
    explicacao: "A densidade média de Saturno é ~0,69 g/cm³, menor que a da água (1 g/cm³). Só faltaria uma banheira gigante!"
  },
  {
    id: 121,
    nivel: 'iniciante',
    enunciado: "Qual planeta forma, junto com Urano, o grupo dos \"gigantes de gelo\"?",
    opcoes: ["Saturno", "Júpiter", "Netuno", "Marte"],
    resposta: 2,
    explicacao: "Urano e Netuno têm muita água, amônia e metano em forma de \"gelos\", diferente de Júpiter e Saturno, que são quase só hidrogênio e hélio."
  },
  {
    id: 122,
    nivel: 'iniciante',
    enunciado: "Qual foi a nave reutilizável da NASA que voou de 1981 a 2011?",
    opcoes: ["O foguete Saturn V", "O Ônibus Espacial (Space Shuttle)", "A cápsula Soyuz", "A cápsula Dragon"],
    resposta: 1,
    explicacao: "Os ônibus espaciais fizeram 135 missões e ajudaram a construir a Estação Espacial e a consertar o Hubble."
  },
  {
    id: 123,
    nivel: 'iniciante',
    enunciado: "Qual é o foguete gigante da SpaceX, o maior já construído?",
    opcoes: ["Starship", "Falcon 9", "Saturn V", "Ariane 5"],
    resposta: 0,
    explicacao: "Com o propulsor Super Heavy, a Starship tem mais de 120 m de altura e é o foguete mais potente já lançado."
  },
  {
    id: 124,
    nivel: 'iniciante',
    enunciado: "Quanto tempo os astronautas da Apollo levavam para ir da Terra à Lua?",
    opcoes: ["Cerca de 3 horas", "Cerca de 3 meses", "Cerca de 3 anos", "Cerca de 3 dias"],
    resposta: 3,
    explicacao: "A Apollo 11 decolou em 16 de julho de 1969 e entrou em órbita lunar em 19 de julho."
  },
  {
    id: 125,
    nivel: 'iniciante',
    enunciado: "Qual é a diferença entre astronomia e astrologia?",
    opcoes: ["São a mesma coisa", "Astrologia estuda os planetas e astronomia estuda os signos", "Astronomia é uma ciência; astrologia não", "Astronomia só estuda o Sol"],
    resposta: 2,
    explicacao: "A astronomia usa observação e o método científico. A astrologia é uma crença sem comprovação científica."
  },
  {
    id: 126,
    nivel: 'iniciante',
    enunciado: "O que é um solstício?",
    opcoes: ["O dia em que o dia e a noite duram o mesmo", "O dia mais longo ou o mais curto do ano", "Um eclipse do Sol", "O alinhamento de todos os planetas"],
    resposta: 1,
    explicacao: "Os solstícios ocorrem por volta de 21 de junho e 21 de dezembro, quando o Sol atinge o ponto mais ao norte ou mais ao sul no céu."
  },
  {
    id: 127,
    nivel: 'iniciante',
    enunciado: "O que é um equinócio?",
    opcoes: ["Quando o dia e a noite têm quase a mesma duração", "O dia mais longo do ano", "Quando há duas luas cheias no mês", "Quando a Terra está mais perto do Sol"],
    resposta: 0,
    explicacao: "Os equinócios ocorrem por volta de 20 de março e 22 de setembro e marcam o início do outono e da primavera."
  },
  {
    id: 128,
    nivel: 'iniciante',
    enunciado: "Como se chama a fase em que a Lua aparece totalmente iluminada?",
    opcoes: ["Lua nova", "Quarto crescente", "Quarto minguante", "Lua cheia"],
    resposta: 3,
    explicacao: "Na Lua cheia, a Terra fica entre o Sol e a Lua, e vemos todo o lado iluminado dela."
  },
  {
    id: 129,
    nivel: 'iniciante',
    enunciado: "Como se chama um pequeno corpo rochoso que orbita o Sol, como os do cinturão entre Marte e Júpiter?",
    opcoes: ["Cometa", "Satélite", "Asteroide", "Estrela"],
    resposta: 2,
    explicacao: "Asteroides são rochosos ou metálicos. Cometas têm muito gelo e formam cauda perto do Sol."
  },
  {
    id: 130,
    nivel: 'iniciante',
    enunciado: "Qual destes planetas é rochoso?",
    opcoes: ["Júpiter", "Marte", "Saturno", "Netuno"],
    resposta: 1,
    explicacao: "Os planetas rochosos são Mercúrio, Vênus, Terra e Marte. Os outros quatro são gigantes gasosos ou de gelo."
  },
  {
    id: 131,
    nivel: 'iniciante',
    enunciado: "Qual destes é o maior?",
    opcoes: ["Uma galáxia", "Uma estrela", "Um sistema solar", "Um planeta"],
    resposta: 0,
    explicacao: "Uma galáxia reúne bilhões de estrelas, e muitas delas têm seus próprios sistemas de planetas."
  },
  {
    id: 132,
    nivel: 'iniciante',
    enunciado: "Qual cor têm as estrelas mais quentes?",
    opcoes: ["Vermelha", "Amarela", "Laranja", "Azul"],
    resposta: 3,
    explicacao: "As estrelas azuis passam de 10.000 °C na superfície. As vermelhas são as mais frias, com cerca de 3.000 °C."
  },
  {
    id: 133,
    nivel: 'iniciante',
    enunciado: "Que tipo de estrela é o Sol?",
    opcoes: ["Gigante vermelha", "Anã branca", "Anã amarela", "Supergigante azul"],
    resposta: 2,
    explicacao: "O Sol é uma estrela comum da sequência principal, do tipo G, que funde hidrogênio em hélio no núcleo."
  },
  {
    id: 134,
    nivel: 'iniciante',
    enunciado: "O que é o eixo da Terra?",
    opcoes: ["A linha do Equador", "A linha imaginária em torno da qual a Terra gira", "O caminho da Terra ao redor do Sol", "O centro do Sol"],
    resposta: 1,
    explicacao: "O eixo vai do Polo Norte ao Polo Sul e é inclinado cerca de 23,4°, o que causa as estações do ano."
  },
  {
    id: 135,
    nivel: 'iniciante',
    enunciado: "Qual é a principal diferença entre uma estrela e um planeta?",
    opcoes: ["A estrela produz luz própria por fusão nuclear", "O planeta é sempre maior", "A estrela é sempre fria", "O planeta brilha mais"],
    resposta: 0,
    explicacao: "Estrelas geram energia no núcleo. Planetas só brilham porque refletem a luz de uma estrela."
  },
  {
    id: 136,
    nivel: 'iniciante',
    enunciado: "Como são chamados os viajantes espaciais da Rússia?",
    opcoes: ["Taikonautas", "Astronautas", "Espaçonautas", "Cosmonautas"],
    resposta: 3,
    explicacao: "Na Rússia o termo é cosmonauta. Os viajantes espaciais da China costumam ser chamados de taikonautas."
  },
  {
    id: 137,
    nivel: 'iniciante',
    enunciado: "Aquela faixa clara que cruza o céu em noites bem escuras é:",
    opcoes: ["Uma nuvem de chuva", "A cauda de um cometa", "A Via Láctea vista de dentro", "Uma aurora"],
    resposta: 2,
    explicacao: "Como estamos dentro do disco da galáxia, vemos milhões de estrelas distantes formando uma faixa leitosa."
  },
  {
    id: 138,
    nivel: 'iniciante',
    enunciado: "O que é um satélite artificial?",
    opcoes: ["Uma lua natural", "Um objeto feito por humanos que orbita um astro", "Uma estrela pequena", "Um meteoro"],
    resposta: 1,
    explicacao: "Hoje há milhares de satélites em órbita da Terra, usados para GPS, internet, TV e previsão do tempo."
  },
  {
    id: 139,
    nivel: 'iniciante',
    enunciado: "Qual é o maior planeta rochoso do Sistema Solar?",
    opcoes: ["Terra", "Vênus", "Marte", "Mercúrio"],
    resposta: 0,
    explicacao: "A Terra é um pouco maior que Vênus e tem quase o dobro do diâmetro de Marte."
  },
  {
    id: 140,
    nivel: 'iniciante',
    enunciado: "Qual é a estrela mais próxima da Terra?",
    opcoes: ["Proxima Centauri", "Sirius", "Polaris", "O Sol"],
    resposta: 3,
    explicacao: "Pegadinha! O Sol é uma estrela e está a apenas 8 minutos-luz. A segunda mais próxima é Proxima Centauri, a 4,2 anos-luz."
  },
  {
    id: 141,
    nivel: 'medio',
    enunciado: "Por que vemos sempre a mesma face da Lua?",
    opcoes: ["A Lua não gira em torno de si", "A Terra bloqueia o outro lado", "A Lua gira em torno de si no mesmo tempo em que orbita a Terra", "O outro lado está sempre no escuro"],
    resposta: 2,
    explicacao: "É a rotação sincronizada: a gravidade da Terra \"travou\" a Lua, que leva ~27 dias tanto para girar quanto para dar uma volta."
  },
  {
    id: 142,
    nivel: 'medio',
    enunciado: "O que é o \"lado oculto\" da Lua?",
    opcoes: ["O lado que nunca recebe luz do Sol", "O lado que nunca fica voltado para a Terra", "A parte da Lua coberta de gelo", "A sombra da Terra na Lua"],
    resposta: 1,
    explicacao: "Ele recebe luz do Sol como o lado visível; só não o vemos daqui. A China pousou a Chang'e 4 lá em 2019."
  },
  {
    id: 143,
    nivel: 'medio',
    enunciado: "Qual planeta é, em média, o mais próximo da Terra?",
    opcoes: ["Mercúrio", "Vênus", "Marte", "Júpiter"],
    resposta: 0,
    explicacao: "Vênus chega mais perto, mas passa muito tempo do outro lado do Sol. Na média ao longo do tempo, Mercúrio é o mais próximo."
  },
  {
    id: 144,
    nivel: 'medio',
    enunciado: "Qual planeta tem o maior número de luas conhecidas?",
    opcoes: ["Júpiter", "Urano", "Netuno", "Saturno"],
    resposta: 3,
    explicacao: "Em 2025, Saturno passou de 270 luas confirmadas, bem à frente de Júpiter, que tem menos de 100."
  },
  {
    id: 145,
    nivel: 'medio',
    enunciado: "Qual é o maior objeto do cinturão de asteroides?",
    opcoes: ["Vesta", "Palas", "Ceres", "Eros"],
    resposta: 2,
    explicacao: "Ceres tem ~940 km de diâmetro e é classificado como planeta anão. Foi visitado pela sonda Dawn."
  },
  {
    id: 146,
    nivel: 'medio',
    enunciado: "Qual foi a primeira estação espacial da história?",
    opcoes: ["Skylab", "Salyut 1", "Mir", "Estação Espacial Internacional"],
    resposta: 1,
    explicacao: "A soviética Salyut 1 foi lançada em 1971. O Skylab americano veio em 1973 e a Mir em 1986."
  },
  {
    id: 147,
    nivel: 'medio',
    enunciado: "Qual foi o primeiro veículo (rover) a andar em Marte?",
    opcoes: ["Sojourner", "Curiosity", "Spirit", "Perseverance"],
    resposta: 0,
    explicacao: "O pequeno Sojourner, do tamanho de um micro-ondas, chegou em 1997 com a missão Mars Pathfinder."
  },
  {
    id: 148,
    nivel: 'medio',
    enunciado: "Em qual cometa a missão Rosetta pousou o módulo Philae, em 2014?",
    opcoes: ["Halley", "Hale-Bopp", "Shoemaker-Levy 9", "67P/Churyumov–Gerasimenko"],
    resposta: 3,
    explicacao: "Foi o primeiro pouso num cometa. A missão é da Agência Espacial Europeia (ESA)."
  },
  {
    id: 149,
    nivel: 'medio',
    enunciado: "Qual sonda chinesa trouxe as primeiras amostras do lado oculto da Lua, em 2024?",
    opcoes: ["Chang'e 4", "Tianwen-1", "Chang'e 6", "Yutu-2"],
    resposta: 2,
    explicacao: "A Chang'e 6 pousou no lado oculto e devolveu cerca de 2 kg de amostras à Terra em junho de 2024."
  },
  {
    id: 150,
    nivel: 'medio',
    enunciado: "Qual planeta anão tem a lua Caronte?",
    opcoes: ["Ceres", "Plutão", "Éris", "Haumea"],
    resposta: 1,
    explicacao: "Caronte tem cerca de metade do diâmetro de Plutão, e os dois giram em torno de um ponto entre eles."
  },
  {
    id: 151,
    nivel: 'medio',
    enunciado: "Qual é o nome do enorme sistema de cânions de Marte?",
    opcoes: ["Valles Marineris", "Grand Canyon", "Olympus Mons", "Tharsis"],
    resposta: 0,
    explicacao: "O Valles Marineris tem mais de 4.000 km de extensão e até 7 km de profundidade. Olympus Mons é um vulcão."
  },
  {
    id: 152,
    nivel: 'medio',
    enunciado: "Como se chama o limite de um buraco negro do qual nada escapa, nem a luz?",
    opcoes: ["Singularidade", "Disco de acreção", "Fotosfera", "Horizonte de eventos"],
    resposta: 3,
    explicacao: "Depois de cruzar o horizonte de eventos, nada consegue voltar. O disco de acreção é o gás que gira ao redor, do lado de fora."
  },
  {
    id: 153,
    nivel: 'medio',
    enunciado: "Qual cientista mostrou que as órbitas dos planetas são elipses?",
    opcoes: ["Galileu Galilei", "Tycho Brahe", "Johannes Kepler", "Nicolau Copérnico"],
    resposta: 2,
    explicacao: "Kepler publicou sua primeira lei em 1609, usando as observações precisas de Tycho Brahe."
  },
  {
    id: 154,
    nivel: 'medio',
    enunciado: "A primeira imagem de um buraco negro, divulgada em 2019, mostra qual objeto?",
    opcoes: ["Cygnus X-1", "M87*, no centro da galáxia M87", "O centro da galáxia de Andrômeda", "Um buraco negro dentro do Sistema Solar"],
    resposta: 1,
    explicacao: "A imagem foi feita pelo Event Horizon Telescope, uma rede de radiotelescópios espalhados pela Terra."
  },
  {
    id: 155,
    nivel: 'medio',
    enunciado: "Qual observatório detectou ondas gravitacionais pela primeira vez, em 2015?",
    opcoes: ["LIGO", "Hubble", "James Webb", "Arecibo"],
    resposta: 0,
    explicacao: "O LIGO captou a fusão de dois buracos negros, confirmando uma previsão de Einstein. A descoberta ganhou o Nobel de Física de 2017."
  },
  {
    id: 156,
    nivel: 'medio',
    enunciado: "O que é a radiação cósmica de fundo em micro-ondas?",
    opcoes: ["Radiação emitida pelo Sol", "Sinais de rádio de satélites", "A luz das galáxias vizinhas", "A luz que restou do Universo jovem, ~380 mil anos após o Big Bang"],
    resposta: 3,
    explicacao: "É a luz mais antiga que podemos observar, vinda de todas as direções do céu. Foi descoberta por acaso em 1965."
  },
  {
    id: 157,
    nivel: 'medio',
    enunciado: "O que é a matéria escura?",
    opcoes: ["Poeira que bloqueia a luz das estrelas", "O interior dos buracos negros", "Matéria que não emite luz, mas é detectada pela gravidade", "O espaço vazio entre as galáxias"],
    resposta: 2,
    explicacao: "Ela forma cerca de 85% de toda a matéria do Universo, mas ainda não sabemos do que é feita."
  },
  {
    id: 158,
    nivel: 'medio',
    enunciado: "O que é um pulsar?",
    opcoes: ["Uma estrela que muda de tamanho", "Uma estrela de nêutrons que gira muito rápido emitindo feixes de radiação", "Um planeta com anéis", "Um buraco negro em formação"],
    resposta: 1,
    explicacao: "Os feixes varrem o espaço como um farol. O primeiro pulsar foi descoberto por Jocelyn Bell Burnell em 1967."
  },
  {
    id: 159,
    nivel: 'medio',
    enunciado: "No fim da vida, o Sol vai se tornar:",
    opcoes: ["Uma anã branca", "Um buraco negro", "Uma estrela de nêutrons", "Uma supernova"],
    resposta: 0,
    explicacao: "O Sol não tem massa para explodir. Daqui a ~5 bilhões de anos, vai virar uma gigante vermelha e depois uma anã branca."
  },
  {
    id: 160,
    nivel: 'medio',
    enunciado: "Qual é o objeto feito por humanos mais distante da Terra?",
    opcoes: ["Voyager 2", "New Horizons", "Pioneer 10", "Voyager 1"],
    resposta: 3,
    explicacao: "Lançada em 1977, a Voyager 1 está a mais de 165 UA (mais de 24 bilhões de km) e ainda envia dados."
  },
  {
    id: 161,
    nivel: 'medio',
    enunciado: "Qual é o maior planeta anão em diâmetro?",
    opcoes: ["Éris", "Ceres", "Plutão", "Makemake"],
    resposta: 2,
    explicacao: "Plutão (~2.377 km) é um pouco maior que Éris, embora Éris tenha um pouco mais de massa."
  },
  {
    id: 162,
    nivel: 'medio',
    enunciado: "Qual das luas de Marte está mais perto do planeta?",
    opcoes: ["Deimos", "Fobos", "Caronte", "Tritão"],
    resposta: 1,
    explicacao: "Fobos orbita a cerca de 6.000 km da superfície e está se aproximando lentamente. Um dia deve se despedaçar."
  },
  {
    id: 163,
    nivel: 'medio',
    enunciado: "Qual é a temperatura aproximada da superfície do Sol?",
    opcoes: ["Cerca de 5.500 °C", "Cerca de 550 °C", "Cerca de 55.000 °C", "Cerca de 15 milhões °C"],
    resposta: 0,
    explicacao: "A superfície (fotosfera) tem ~5.500 °C. Já o núcleo chega a ~15 milhões °C."
  },
  {
    id: 164,
    nivel: 'medio',
    enunciado: "Que porcentagem da massa do Sistema Solar está no Sol?",
    opcoes: ["Cerca de 50%", "Cerca de 75%", "Cerca de 90%", "Cerca de 99,8%"],
    resposta: 3,
    explicacao: "Todos os planetas, luas, asteroides e cometas juntos somam só ~0,2% da massa. Júpiter é a maior parte disso."
  },
  {
    id: 165,
    nivel: 'medio',
    enunciado: "Por que a Lua fica avermelhada num eclipse lunar total?",
    opcoes: ["A Lua esquenta e brilha", "A poeira lunar reflete Marte", "A atmosfera da Terra desvia luz avermelhada até ela", "O Sol fica vermelho durante o eclipse"],
    resposta: 2,
    explicacao: "É a \"Lua de sangue\": a luz que atravessa a atmosfera da Terra fica avermelhada, pelo mesmo motivo do pôr do sol."
  },
  {
    id: 166,
    nivel: 'medio',
    enunciado: "O que causa chuvas de meteoros como as Perseidas?",
    opcoes: ["Explosões no Sol", "A Terra atravessando restos deixados por um cometa", "Asteroides colidindo com a Lua", "Satélites antigos caindo"],
    resposta: 1,
    explicacao: "Todo ano a Terra cruza a trilha de poeira de um cometa; as Perseidas vêm do cometa Swift-Tuttle e ocorrem em agosto."
  },
  {
    id: 167,
    nivel: 'medio',
    enunciado: "Como se chama a linha que separa o dia da noite em um planeta ou na Lua?",
    opcoes: ["Terminador", "Equador", "Meridiano", "Eclíptica"],
    resposta: 0,
    explicacao: "Perto do terminador, as sombras ficam longas, por isso é a melhor região para ver crateras na Lua com um telescópio."
  },
  {
    id: 168,
    nivel: 'medio',
    enunciado: "Quanto dura um dia solar em Marte (chamado de \"sol\")?",
    opcoes: ["Cerca de 10 horas", "Cerca de 58 dias", "Cerca de 12 horas", "Cerca de 24 h 40 min"],
    resposta: 3,
    explicacao: "Um dia em Marte é só ~40 minutos mais longo que o da Terra. As equipes dos rovers chegam a viver no \"horário marciano\"."
  },
  {
    id: 169,
    nivel: 'medio',
    enunciado: "De que cor é o pôr do sol em Marte?",
    opcoes: ["Vermelho-alaranjado", "Verde", "Azulado", "Roxo"],
    resposta: 2,
    explicacao: "A poeira fina de Marte espalha a luz azul na direção do Sol, criando um brilho azulado ao entardecer."
  },
  {
    id: 170,
    nivel: 'medio',
    enunciado: "Qual sonda fez o primeiro pouso suave na Lua?",
    opcoes: ["Apollo 11", "Luna 9", "Surveyor 1", "Chang'e 3"],
    resposta: 1,
    explicacao: "A soviética Luna 9 pousou em fevereiro de 1966 e enviou as primeiras fotos da superfície lunar."
  },
  {
    id: 171,
    nivel: 'medio',
    enunciado: "Quantas pessoas já caminharam na Lua?",
    opcoes: ["12", "6", "24", "2"],
    resposta: 0,
    explicacao: "Doze astronautas caminharam na Lua em seis missões Apollo, entre 1969 e 1972."
  },
  {
    id: 172,
    nivel: 'medio',
    enunciado: "Qual foi a última missão Apollo a pousar na Lua?",
    opcoes: ["Apollo 13", "Apollo 11", "Apollo 20", "Apollo 17"],
    resposta: 3,
    explicacao: "A Apollo 17 pousou em dezembro de 1972. A Apollo 13 não pousou por causa de uma explosão, e a Apollo 20 foi cancelada."
  },
  {
    id: 173,
    nivel: 'medio',
    enunciado: "O diâmetro da Lua é aproximadamente que fração do diâmetro da Terra?",
    opcoes: ["Cerca de 1/2", "Cerca de 1/10", "Cerca de 1/4", "Cerca de 1/100"],
    resposta: 2,
    explicacao: "A Lua tem ~3.474 km de diâmetro, contra ~12.742 km da Terra, ou seja, cerca de 27%."
  },
  {
    id: 174,
    nivel: 'medio',
    enunciado: "O que é a \"zona habitável\" de uma estrela?",
    opcoes: ["A região onde existe oxigênio", "A região onde um planeta poderia ter água líquida na superfície", "O lugar onde vivem alienígenas", "A área sem nenhuma radiação"],
    resposta: 1,
    explicacao: "Nem quente demais nem fria demais. Estar na zona habitável não garante vida, mas é um bom ponto de partida na busca."
  },
  {
    id: 175,
    nivel: 'medio',
    enunciado: "Qual é a hipótese mais aceita para a origem da Lua?",
    opcoes: ["Uma grande colisão entre a Terra jovem e um corpo do tamanho de Marte", "A Lua foi capturada pela gravidade da Terra", "A Lua se soltou do Oceano Pacífico", "A Lua se formou antes da Terra"],
    resposta: 0,
    explicacao: "O corpo que teria colidido com a Terra foi apelidado de Theia. Os detritos do impacto se juntaram e formaram a Lua."
  },
  {
    id: 176,
    nivel: 'medio',
    enunciado: "Comparada à superfície do Sol, a coroa solar (sua camada externa) é:",
    opcoes: ["Mais fria", "Da mesma temperatura", "Feita de gelo", "Muito mais quente, com mais de 1 milhão de °C"],
    resposta: 3,
    explicacao: "Por que a coroa é tão mais quente que a superfície ainda é um dos grandes mistérios da física solar."
  },
  {
    id: 177,
    nivel: 'medio',
    enunciado: "Em que mês a Terra fica mais perto do Sol?",
    opcoes: ["Julho", "Março", "Janeiro", "Setembro"],
    resposta: 2,
    explicacao: "O periélio ocorre por volta de 3 de janeiro, verão no hemisfério sul e inverno no norte. Prova de que as estações não vêm da distância."
  },
  {
    id: 178,
    nivel: 'medio',
    enunciado: "O que são as Nuvens de Magalhães?",
    opcoes: ["Nebulosas dentro do Sistema Solar", "Galáxias anãs vizinhas da Via Láctea", "Nuvens da atmosfera de Júpiter", "Restos de um cometa"],
    resposta: 1,
    explicacao: "As Grande e Pequena Nuvens de Magalhães são visíveis a olho nu no céu do hemisfério sul."
  },
  {
    id: 179,
    nivel: 'medio',
    enunciado: "Qual é a velocidade de escape da Terra?",
    opcoes: ["Cerca de 11,2 km/s", "Cerca de 1 km/s", "Cerca de 300.000 km/s", "Cerca de 100 km/s"],
    resposta: 0,
    explicacao: "É a velocidade mínima para escapar da gravidade terrestre sem propulsão extra: ~40.000 km/h."
  },
  {
    id: 180,
    nivel: 'medio',
    enunciado: "O que são as Plêiades, também chamadas de Sete Irmãs?",
    opcoes: ["Uma galáxia", "Sete planetas alinhados", "Uma nebulosa planetária", "Um aglomerado aberto de estrelas jovens"],
    resposta: 3,
    explicacao: "O aglomerado fica na constelação de Touro, a cerca de 440 anos-luz, e tem centenas de estrelas."
  },
  {
    id: 181,
    nivel: 'medio',
    enunciado: "Quantas constelações oficiais existem?",
    opcoes: ["12", "48", "88", "110"],
    resposta: 2,
    explicacao: "A União Astronômica Internacional definiu 88 constelações em 1922. As 12 do zodíaco são só uma parte delas."
  },
  {
    id: 182,
    nivel: 'medio',
    enunciado: "O que faz os astronautas flutuarem na Estação Espacial?",
    opcoes: ["Não existe gravidade lá", "Eles estão em queda livre contínua ao redor da Terra", "A estação tem ímãs especiais", "O ar lá dentro é mais denso"],
    resposta: 1,
    explicacao: "A gravidade na altura da estação ainda é ~90% da superfície. A estação e os astronautas \"caem\" juntos o tempo todo, sem nunca atingir o chão."
  },
  {
    id: 183,
    nivel: 'medio',
    enunciado: "Qual é o centro de lançamento de foguetes no Maranhão?",
    opcoes: ["Centro de Lançamento de Alcântara", "Barreira do Inferno", "Kourou", "Cabo Canaveral"],
    resposta: 0,
    explicacao: "Alcântara fica muito perto da Linha do Equador, o que economiza combustível nos lançamentos. A Barreira do Inferno fica no Rio Grande do Norte."
  },
  {
    id: 184,
    nivel: 'medio',
    enunciado: "O que é o Cinturão de Kuiper?",
    opcoes: ["O cinturão entre Marte e Júpiter", "Os anéis de Saturno", "Uma faixa de estrelas da Via Láctea", "Uma região de corpos gelados além de Netuno"],
    resposta: 3,
    explicacao: "Plutão é um dos maiores objetos do Cinturão de Kuiper. Muitos cometas de período curto vêm de lá."
  },
  {
    id: 185,
    nivel: 'medio',
    enunciado: "Quanto vale 1 parsec, aproximadamente?",
    opcoes: ["1 ano-luz", "100 UA", "3,26 anos-luz", "1 milhão de km"],
    resposta: 2,
    explicacao: "O parsec, unidade muito usada por astrônomos, vale ~31 trilhões de km."
  },
  {
    id: 186,
    nivel: 'medio',
    enunciado: "Qual sonda foi a primeira a \"tocar\" o Sol, atravessando sua coroa em 2021?",
    opcoes: ["Solar Orbiter", "Parker Solar Probe", "SOHO", "Voyager 2"],
    resposta: 1,
    explicacao: "A Parker Solar Probe também é o objeto mais rápido já feito por humanos, passando de 690.000 km/h perto do Sol."
  },
  {
    id: 187,
    nivel: 'medio',
    enunciado: "Qual missão da NASA desviou a órbita de um asteroide de propósito, em 2022?",
    opcoes: ["DART", "OSIRIS-REx", "Hayabusa2", "Lucy"],
    resposta: 0,
    explicacao: "A DART colidiu com Dimorphos e encurtou a órbita dele em cerca de 32 minutos: o primeiro teste de defesa planetária."
  },
  {
    id: 188,
    nivel: 'medio',
    enunciado: "Qual missão trouxe à Terra amostras do asteroide Bennu, em 2023?",
    opcoes: ["DART", "Hayabusa2", "Rosetta", "OSIRIS-REx"],
    resposta: 3,
    explicacao: "A cápsula da OSIRIS-REx pousou nos EUA em setembro de 2023. A japonesa Hayabusa2 trouxe amostras de outro asteroide, Ryugu."
  },
  {
    id: 189,
    nivel: 'medio',
    enunciado: "Qual lua de Saturno tem lagos e mares de metano líquido?",
    opcoes: ["Encélado", "Mimas", "Titã", "Reia"],
    resposta: 2,
    explicacao: "Titã é o único lugar além da Terra com líquidos estáveis na superfície. A NASA planeja enviar o drone Dragonfly para lá."
  },
  {
    id: 190,
    nivel: 'medio',
    enunciado: "Qual lua de Saturno lembra a \"Estrela da Morte\" por causa de uma cratera enorme?",
    opcoes: ["Titã", "Mimas", "Encélado", "Jápeto"],
    resposta: 1,
    explicacao: "A cratera Herschel tem ~130 km, cerca de um terço do diâmetro de Mimas."
  },
  {
    id: 191,
    nivel: 'medio',
    enunciado: "Qual é a única sonda que já visitou Urano e Netuno?",
    opcoes: ["Voyager 2", "Voyager 1", "Cassini", "Juno"],
    resposta: 0,
    explicacao: "A Voyager 2 passou por Urano em 1986 e por Netuno em 1989. Nenhuma outra sonda voltou lá desde então."
  },
  {
    id: 192,
    nivel: 'medio',
    enunciado: "Qual missão orbitou Saturno de 2004 a 2017 e terminou mergulhando no planeta?",
    opcoes: ["Galileo", "Juno", "New Horizons", "Cassini"],
    resposta: 3,
    explicacao: "A Cassini levou o módulo Huygens, que pousou em Titã em 2005, e descobriu os jatos de água de Encélado."
  },
  {
    id: 193,
    nivel: 'medio',
    enunciado: "Por que existem anos bissextos?",
    opcoes: ["Porque a Lua atrasa a Terra", "Para compensar os eclipses", "Porque a Terra leva cerca de 365 dias e 6 horas para dar a volta no Sol", "Por causa do horário de verão"],
    resposta: 2,
    explicacao: "As ~6 horas extras somam quase um dia a cada 4 anos, e esse dia vira o 29 de fevereiro."
  },
  {
    id: 194,
    nivel: 'medio',
    enunciado: "O que é um quasar?",
    opcoes: ["Uma estrela gigante azul", "O núcleo extremamente brilhante de uma galáxia, alimentado por um buraco negro supermassivo", "Um tipo de cometa", "Uma nebulosa em forma de anel"],
    resposta: 1,
    explicacao: "Os quasares estão entre os objetos mais luminosos do Universo e podem brilhar mais que toda a sua galáxia."
  },
  {
    id: 195,
    nivel: 'medio',
    enunciado: "Como se chama o buraco negro supermassivo no centro da Via Láctea?",
    opcoes: ["Sagitário A*", "M87*", "Cygnus X-1", "Órion A"],
    resposta: 0,
    explicacao: "Ele tem cerca de 4 milhões de vezes a massa do Sol e foi fotografado pelo Event Horizon Telescope em 2022."
  },
  {
    id: 196,
    nivel: 'medio',
    enunciado: "Qual elemento químico foi descoberto primeiro no Sol, antes de ser encontrado na Terra?",
    opcoes: ["Hidrogênio", "Oxigênio", "Neônio", "Hélio"],
    resposta: 3,
    explicacao: "Foi identificado na luz do Sol durante um eclipse em 1868. O nome vem de Hélios, o Sol na mitologia grega."
  },
  {
    id: 197,
    nivel: 'medio',
    enunciado: "Por que a luz de galáxias distantes chega até nós mais avermelhada?",
    opcoes: ["Por causa de poeira vermelha no caminho", "Porque são galáxias frias", "Por causa da expansão do Universo (desvio para o vermelho)", "Porque giram muito rápido"],
    resposta: 2,
    explicacao: "Com a expansão do espaço, o comprimento de onda da luz se estica. Quanto mais distante a galáxia, maior o desvio."
  },
  {
    id: 198,
    nivel: 'medio',
    enunciado: "Quem mostrou, em 1929, que as galáxias estão se afastando de nós?",
    opcoes: ["Albert Einstein", "Edwin Hubble", "Carl Sagan", "Galileu Galilei"],
    resposta: 1,
    explicacao: "As observações de Hubble deram base à ideia de um Universo em expansão, que Georges Lemaître já havia proposto em 1927."
  },
  {
    id: 199,
    nivel: 'medio',
    enunciado: "Em que ano a Voyager 1 entrou no espaço interestelar?",
    opcoes: ["2012", "1990", "2000", "2020"],
    resposta: 0,
    explicacao: "Em agosto de 2012 ela cruzou a heliopausa, a fronteira da bolha de vento solar que envolve o Sistema Solar."
  },
  {
    id: 200,
    nivel: 'medio',
    enunciado: "Qual sonda europeia está a caminho de Júpiter para estudar suas luas geladas?",
    opcoes: ["Rosetta", "Gaia", "Euclid", "JUICE"],
    resposta: 3,
    explicacao: "Lançada em 2023, a JUICE deve chegar a Júpiter em 2031 e depois entrar em órbita de Ganimedes."
  },
]

export default perguntas
