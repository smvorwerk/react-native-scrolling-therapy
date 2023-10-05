import { Platform } from "react-native";

export const portuguese = {
  shared: {
    cta_continue: "Continuar",
    cta_skip_tutorial: "Pular Tutorial",
    connect_with: "Conecte-se com o {{socialMedia}}",
    statistics: "Estatísticas",
    terms_and_conditions: "Termos e Condições",
    privacy_policy: "Política de Privacidade",
    //TUTORIAL STEPS
    actions_scroll_down: "Rolar para baixo",
    actions_scroll_up: "Rolar para cima",
    actions_like: "Curtir",
    actions_play: "Reproduzir",
    actions_swipe: "Deslizar",
    suprised_message:
      "Olhe surpreso para rolar para baixo\nDica: Abra a boca e levante as sobrancelhas",
    disgusted_message:
      "Faça cara de nojo para rolar para cima\nDica: Mostre a língua e franza o nariz como se estivesse sentindo um cheiro estranho.",
    smile_message:
      "Sorria para curtir\nDica: Mostrar os dentes ajuda na detecção do sorriso.",
    sad_message:
      "Faça uma cara triste para reproduzir.\nDica: Levante um pouco as sobrancelhas enquanto faz essa expressão.",
    angry_message:
      "Faça cara de raiva para deslizar\nDica: Franzir a testa e mostrar os dentes com força",
    scroll_down_success: "Excelente!",
    scroll_up_success: "Ótimo!",
    like_success: "Bom trabalho!",
    play_success: "Incrível!",
    swipe_success: "Maravilhoso!",
    loading: "Carregando",
    english: "Inglês",
    portuguese: "Português",
    spanish: "Espanhol",
  },
  language: {
    title: "Selecione seu idioma preferido",
    subtitle:
      "Uma vez dentro do aplicativo, você pode alterar sua escolha de idioma em CONFIGURAÇÃO",
  },
  home: {
    welcome_title: "Bem-vindo ao\nScrolling Therapy",
    subtitle:
      "Acesse agora a sua rede social favorita e transforme seu tempo nas redes sociais em exercícios para os sintomas de Parkinson.",
  },
  tutorial_start: {
    title: "Vamos começar",
    subtitle:
      "Há 5 expressões faciais que você precisará praticar para navegar com sucesso nas suas mídias sociais. Certifique-se que esteja em um ambiente iluminado e sem objetos ou pessoas ao fundo. Vamos experimentá-las!",
    cta_next: "Próximo",
  },
  tutorial: {
    cannot_skip_message:
      "Complete o Tutorial para aprender os exercícios que irão ajudá-lo com sua fisioterapia.",
    //TUTORIAL MESSAGE
    initial_message:
      "Agora posicione seu rosto dentro da área e vamos começar o Tutorial.",
    repeat_message:
      "Por favor, repita a expressão 3 vezes para confirmar que você entendeu.",
    //RESTART POP-UP
    try_again_title: "Tentar novamente?",
    try_again_description:
      "Não conseguimos detectar nenhuma expressão. Você gostaria de repetir o Tutorial?",
    try_again_yes_cta: "Sim",
    try_again_no_cta: "Não",
    //NO FACE DETECTED POP-UP
    no_face_detection_title: "Nenhum rosto detectado",
    no_face_detection_description:
      "Por favor, posicione seu rosto dentro da área",
  },
  tutorial_completed: {
    title: "Muito bem!",
    subtitle:
      "Agora você só precisa fazer login em suas redes sociais e começar a navegar.",
    checkbox_prefix: "Eu aceito o ",
    checkbox_disclaimer:
      "Eu aceito a seguinte declaração: O aplicativo Scrolling Therapy destina-se apenas a uso geral de bem-estar e não fornece nenhum aconselhamento médico, orientação ou consulta médica. Também não se destina direta ou indiretamente à prevenção, diagnóstico, tratamento ou reabilitação de qualquer doença, estado ou condição. Os conteúdos da Scrolling Therapy, como texto, vídeo, gráficos e imagens, são apenas para fins informativos e não foram avaliados por nenhuma autoridade reguladora. O conteúdo não pretende ser um substituto para aconselhamento médico profissional, prevenção, diagnóstico, tratamento ou reabilitação ou para a cura ou prevenção de qualquer condição médica. Não tente se autodiagnosticar e, em caso de dúvida, sempre procure o seu médico ou outro profissional de saúde qualificado, independentemente de sua condição médica. Confiar em qualquer uma das informações fornecidas no aplicativo é de sua exclusiva responsabilidade.",
    and: " e ",
  },
  social: {
    face_detection: "Reconhecimento facial",
    align_camera:
      "Por favor, alinhe seu rosto com a câmera movendo-o para a esquerda e direita.",
    congrats: "Parabéns!",
    exercise_completed_title:
      "Você terminou sua prática por hoje. Mas você pode continuar. Quanto mais exercícios, melhor.",
    //FACEBOOK FEED
    new_award_title: "Nova conquista!",
    new_award_description:
      "Você chegou a {{count}} minuto de prática. Verifique suas métricas para saber mais sobre seu desempenho.",
    new_award_description_plural:
      "Você chegou a {{count}} minutos de prática. Verifique suas métricas para saber mais sobre seu desempenho.",
    cta_new_award: "IR PARA AS ESTATÍSTICAS",
  },
  menu: {
    connect_with_facebook: "Conecte-se com o Facebook",
    title: "Menu",
    switch_accounts: "Trocar de conta",
    //MENU ITEMS
    dashboard: "Painel de controle",
    tutorial: "Tutorial",
    statistics: "Estatísticas",
    settings: "Configurações",
    how_it_works: "Como funciona",
    logout: "Sair",
  },
  dashboard: {
    section_welcome: "Bem-vindo ao seu painel",
    explore: "Vamos explorar suas redes sociais juntos",
    about_title: "Sobre Scrolling Therapy",
    about_description:
      Platform.OS === "ios"
        ? "Scrolling Therapy é um aplicativo mobile que permite pessoas diagnosticadas com Parkinson a praticar exercícios enquanto navegam em suas redes sociais. Scrolling Therapy não é - e não tem a intenção de ser - uma cura para Parkinson e não substitui nenhum outro tratamento para tal. Em caso de dúvidas sobre os efeitos de uso do aplicativo, consulte seu médico."
        : "Scrolling Therapy é um aplicativo digital que ajuda pessoas que possuem o diagnóstico de doença de Parkinson a realizarem exercícios faciais, sugeridos como parte de seu tratamento físico diário, usando a tecnologia de reconhecimento facial para que transformem expressões faciais em forma de navegar em suas redes sociais.\nScrolling Therapy não é - e nunca pretenderá ser - uma cura para a doença de Parkinson e não substitui nenhum outro tratamento.\nEm caso de dúvidas sobre o seu efeito, consulte o seu médico.",
  },
  stats: {
    weekly: "Semanal",
    no_data: "Você não tem dados suficientes para mostrar",
    minute: "{{count}} minuto",
    minute_plural: "{{count}} minutos",
    second: "{{count}} segundo",
    second_plural: "{{count}} segundos",
    average_time: "Uso diário",
    most_used_actions: "Ações mais usadas",
    chart_time_middle_label: "Min",
    //WEEK CONSTANTS
    sunday: "D",
    monday: "S",
    tuesday: "T",
    wednesday: "Q",
    thursday: "Q",
    friday: "S",
    saturday: "S",
  },
  settings: {
    title: "Configurações",
    front_camera_view: "Visão da câmera frontal",
    language: "Idioma",
  },
  terms_and_conditions: {
    title: "Termos de Uso",
    date: "Data da última atualização: 28/03/2023",
    paragraph:
      'Seja bem-vindo ao aplicativo Scrolling Therapy da Eurofarma ("Aplicativo"). Este Aplicativo é controlado e operado pela Eurofarma Laboratórios S.A. (a "Eurofarma"), empresa com sede na Rodovia Presidente Castelo Branco, 3565, Quadra GL/Lote A – Ingahi / Itapevi - SP, CEP 06696-000, inscrita no CNPJ/MF sob n° 61.190.096/0001-92.\n\nPor favor, leia atentamente os termos e condições abaixo estipulados ("Termos de Uso")para que você possa usufruir de nosso Aplicativo e de todos os serviços disponibilizados por meio dele.\n',
    bold_paragraph:
      "Caso você não concorde com quaisquer dispositivos dos Termos de Uso, não acesse ou utilize o nosso Aplicativo. Seu acesso e utilização representa sua aceitação integral e incondicional aos Termos de Uso. A Política de Privacidade do Aplicativo integra os presentes Termos de Uso.",
    last_paragraph:
      'Para fins destes Termos de Uso, "Usuários" são todas as pessoas físicas cadastradas ou não cadastradas, que de qualquer forma interagem, acessam ou utilizam o Aplicativo.',
    topics: [
      {
        title: "Objetivo do Aplicativo",
        description:
          "A Eurofarma desenvolveu e mantém este Aplicativo para apoio ao tratamento de pacientes diagnosticados com Doença de Parkinson. Este Aplicativo destina-se ao público em geral.\n\nSe você tiver um problema de saúde, você deverá consultar o seu médico ou um profissional de saúde.",
      },
      {
        title: "Sua Participação no Aplicativo",
        description:
          "O acesso ao Aplicativo é oferecido de forma gratuita e poderá ser feito de qualquer dispositivo com acesso à rede mundial de computadores.\n\nVocê pode livremente utilizar o Aplicativo bem como fazer o download do conteúdo disponível no Aplicativo, desde que tal uso seja para fins não comerciais. Você não poderá distribuir, modificar, transmitir, reutilizar, republicar ou usar qualquer conteúdo para finalidades comerciais sem o expresso consentimento por escrito da Eurofarma.\n\nTodos os avisos de direitos autorais e de propriedade intelectual contidos no conteúdo copiado devem ser mantidos e preservados. Os direitos autorais de todo o conteúdo do Aplicativo pertencem à Eurofarma, suas afiliadas ou fornecedores, salvo se diversamente informado no Aplicativo.\n\nAs imagens de pessoas ou lugares disponibilizadas no Aplicativo são de propriedade ou devidamente licenciadas à Eurofarma. É rigorosamente proibido o uso dessas imagens por qualquer Usuário. O uso indevido das imagens poderá infringir direitos da Eurofarma e de terceiros.\n\nO aplicativo se conecta com a câmera do dispositivo para capturar as expressões faciais do usuário. Isso permite que o usuário controle sua experiência de navegação usando dicas faciais específicas que instruem o aplicativo a rolar, curtir, compartilhar e muito mais. O aplicativo é construído na plataforma TensorFlow AI de código aberto, desenvolvida pelo Google, garantindo uma base robusta e confiável para a tecnologia.",
      },
      {
        title: "Cadastro de Usuários",
        description:
          "O aplicativo não possui o cadastro de usuário, a funcionalidade de login através do Instagram e Facebook não armazena as informações pessoais do usuário.",
      },
      {
        title: "Obrigações e Restrições",
        description:
          "Aos Usuários é vedado:\n\n(i) cometer fraude ou estimular a prática de condutas ilícitas;\n\n(ii) disseminar ou tentar enviar vírus de computador, incluindo, mas não se limitando a, cavalos de tróia, worms, keyboard loggers, bombas relógio, spywares, adwares, cancelbots ou qualquer outro código ou programa invasivo ou malicioso;\n\n(iii) disseminar ou tentar enviar spams ou qualquer outro material que possa modificar, interromper ou interferir no funcionamento, operação ou manutenção do Aplicativo, das redes de comunicação, ou, de qualquer forma, prejudicar o uso e qualidade oferecida;\n\n(iv) utilizar o Aplicativo para fins comerciais;\n\n(v) remover, esconder ou prejudicar qualquer nota, banner ou signo distintivo ou marca do Aplicativo;\n\n(vi) utilizar ferramentas ou proxy anônimo com a finalidade de tornar seu endereço de IP anônimo;\n\n(vii) interferir ou quebrar qualquer sistema de segurança do Aplicativo, especialmente aqueles com a finalidade de limitar e controlar o acesso e uso do Aplicativo e seus respectivos conteúdos;\n\n(viii) solicitar informações de login e/ou de acesso de conta pertencente a outro Usuário;\n\nO Usuário reconhece e concorda que todas as informações e conteúdos disponibilizados no Aplicativo pela Eurofarma são de propriedade ou foram devidamente licenciados a Eurofarma e, por isso, não poderão ser disponibilizadas a terceiros.\n\nSalvo se diversamente previsto nestes Termos de Uso, o Usuário concorda em não reproduzir, duplicar, copiar, vender, revender ou explorar qualquer parte das informações e conteúdos do Aplicativo, bem como se obriga a utilizar todo o conteúdo do Aplicativo de forma lícita, sendo vedada a reprodução, distribuição, transformação, comercialização ou modificação do conteúdo, sem a prévia e expressa autorização da Eurofarma, bem como fica vedado o fornecimento de login e senha para terceiros não cadastrados.",
      },
      {
        title: "Links de Terceiros",
        description:
          "O Aplicativo poderá fornecer links para outros aplicativos da internet ou outros recursos, inclusive links de publicações médicas, órgãos públicos de saúde e de sociedades médicas. Assim, estes links serão disponibilizados como uma conveniência ao Usuário e, como a Eurofarma não tem controle sobre tais aplicativos ou recursos externos, o Usuário reconhece e concorda que a Eurofarma não é responsável pela disponibilidade desses e não endossa ou se responsabiliza por qualquer conteúdo, propaganda, produtos, serviços ou outros materiais contidos ou disponibilizados por meio de tais aplicativos ou recursos. Neste sentido, sugerimos que o usuário se informe sobre a política de aplicativos de terceiros antes de acessá-los ou fornecer qualquer tipo de informação.\n\nA Eurofarma poderá armazenar informações sobre os seus acessos a referidos links de terceiros.",
      },
      {
        title: "Propriedade Intelectual",
        description:
          "Os direitos autorais de todo o conteúdo postado pela Eurofarma, pelos usuários e terceiros pertencem aos seus respectivos titulares, salvo se diversamente informado.\n\nTodos os direitos de propriedade intelectual relativos a este Aplicativo são reservados à Eurofarma. Todas as marcas apresentadas neste Aplicativo são de propriedade da Eurofarma, de suas empresas afiliadas ou foram devidamente licenciadas à Eurofarma.\n\nNenhuma disposição será interpretada como concessão aos usuários de qualquer direito, título ou interesse em qualquer propriedade intelectual e marcas da Eurofarma.",
      },
      {
        title: "Limitação de Responsabilidade",
        description:
          'O USO DESTE WEBSITE PELO USUÁRIO CORRE POR SUA CONTA E RISCO. EM NENHUMA CIRCUNSTÂNCIA A EUROFARMA OU QUALQUER OUTRA PARTE ENVOLVIDA NA CRIAÇÃO, PRODUÇÃO E DIVULGAÇÃO DO WEBSITE SERÁ RESPONSÁVEL POR QUAISQUER DANOS (INCLUINDO, ENTRE OUTROS, DANOS DE QUALQUER NATUREZA, LUCROS CESSANTES E DANOS EMERGENTES) DECORRENTES DO SEU ACESSO E USO, OU INCAPACIDADE DE ACESSO E USO DO WEBSITE.\n\nA EUROFARMA NÃO FORNECE QUALQUER GARANTIA COM RELAÇÃO AOS ARQUIVOS DISPONÍVEIS PARA DOWNLOAD. SEM QUALQUER LIMITAÇÃO, TODO CONTEÚDO E FUNCIONALIDADES DO WEBSITE SÃO DISPONIBILIZADOS "NO ESTADO EM QUE SE ENCONTRAM", SEM GARANTIAS DE QUALQUER ESPÉCIE, SEJAM EXPRESSAS OU IMPLÍCITAS, INCLUINDO, ENTRE OUTRAS, GARANTIAS DE ADEQUAÇÃO PARA UM OBJETIVO EM PARTICULAR.\n\nA EUROFARMA NÃO GARANTE QUE O WEBSITE ESTARÁ DISPONÍVEL DE FORMA ININTERRUPTA OU LIVRE DE QUAISQUER ERROS OU FALHAS E TAMPOUCO ASSEGURA A IMPOSSIBILIDADE DO SEU SISTEMA E SERVIDORES PODEREM SER ATACADOS, INVADIDOS, MODIFICADOS OU LESADOS, DE QUALQUER FORMA, POR TERCEIROS.\n\nA EUROFARMA NÃO É NEM SERÁ RESPONSÁVEL (I) PELA QUALIDADE OU DISPONIBILIDADE DA CONEXÃO DO DISPOSITIVO DO USUÁRIO À INTERNET EM QUALQUER CIRCUNSTÂNCIA, (II) PELA IMPOSSIBILIDADE DE UTILIZAÇÃO DE QUAISQUER INFORMAÇÕES OU SERVIÇOS DISPONIVEIS EM RAZÃO DA INCOMPATIBILIDADE DA CONFIGURAÇÃO TÉCNICA DO APARELHO DE CONEXÃO DOS USUÁRIOS, (III) PELA DESOBEDIÊNCIA DE OUTROS USUÁRIOS AOS TERMOS DE USO AQUI ESTABELECIDOS, (IV) POR QUAISQUER DANOS SOFRIDOS PELOS USUÁRIOS EM RAZÃO DA UTILIZAÇÃO DO WEBSITE, E (V) PELA REPARAÇÃO DE DANOS DE QUALQUER NATUREZA CAUSADOS PELA QUEBRA DE PRIVACIDADE OU SEGURANÇA DE DADOS DOS USUÁRIOS DURANTE A CONEXÃO DE SEU APARELHO À INTERNET ATRAVÉS DE TERCEIROS.\n\nA Eurofarma lembra aos Usuários deste Aplicativo que é de inteira responsabilidade desses manter o ambiente de seu computador seguro, com o uso de ferramentas disponíveis como antivírus e firewall, entre outras, de modo a contribuir na prevenção de riscos eletrônicos.\n\nPOR ISSO, A EUROFARMA TAMBÉM NÃO RESPONDERÁ POR DANOS OU VÍRUS QUE POSSAM VIR A INFECTAR O COMPUTADOR OU EQUIPAMENTO OU OUTROS BENS DECORRENTES DO ACESSO DO USUÁRIO AO WEBSITE OU POR DESCARREGAR QUAISQUER MATERIAIS, DADOS, TEXTOS, IMAGENS, VÍDEOS OU ÁUDIOS DISPONIBILIZADOS NO WEBSITE.\n\nO Usuário reconhece e concorda que a Eurofarma terá direito de suspender o acesso do Usuário à Plataforma a qualquer momento e sem notificação prévia, inclusive, como medidas prudentes ou técnicas ou em decorrência de qualquer atividade de fiscalização realizada, caso determine que as obrigações do Usuário previstas nestes Termos não estão sendo atendidas ou em caso de problemas técnicos relevantes que afetem o desempenho do Aplicativo.',
      },
      {
        title: "Infrações",
        description:
          "O Usuário que infringir os presentes Termos de Uso e/ou a Política de Privacidade será responsabilizado pelos danos e prejuízos de qualquer natureza que a Eurofarma venha a sofrer ou aqueles causados a terceiros, sem limitação.\n\nNa hipótese de qualquer Usuário considerar que o Aplicativo esteja sendo utilizado de forma indevida, o Usuário deverá enviar uma comunicação à administração do Aplicativo, através do endereço eletrônico euroatende@eurofarma.com.br, fornecendo os seguintes dados: (i) dados pessoais: nome, endereço, número de telefone e endereço de correio eletrônico do reclamante; (ii) especificação da suposta atividade irregular ocorrida no Aplicativo, incluindo, sem limitação, a descrição dos fatos ou circunstâncias que revelam o caráter irregular de tal atividade; (iii) identificação precisa de onde a violação pode ser encontrada no Aplicativo (com respectiva URL); e (iv) declaração expressa, clara e sob a responsabilidade do reclamante de que a informação contida na comunicação está correta e precisa.\n\nUma vez recebida tal comunicação, a Eurofarma, a seu exclusivo critério e sem necessidade de notificação, reserva-se o direito de retirar o conteúdo supostamente infrator do Aplicativo ou excluir os Usuários infratores.",
      },
      {
        title: "Alterações nos Termos",
        description:
          "A Eurofarma reserva-se ao direito de, a qualquer momento e a seu exclusivo critério, modificar, alterar ou de outra forma atualizar os presentes Termos de Uso. Em caso de modificação, a Eurofarma irá disponibilizar um aviso no Aplicativo e os novos termos de uso entrarão imediatamente em vigor. Caso não concorde com os termos alterados, o Usuário deverá deixar de acessar o Aplicativo. O acesso e utilização do Aplicativo após a publicação das alterações representa a aceitação integral e incondicional aos novos Termos de Uso.\n\nA disponibilização do Aplicativo tem duração indeterminada e a Eurofarma reserva-se ao direito de terminar, suspender ou interromper unilateralmente e a qualquer momento, sem necessidade de prévio aviso ou posterior, a disponibilização do Aplicativo, ou sua inteira transformação e modificação.\n\nQuaisquer dúvidas, críticas, sugestões e /ou reclamações poderão ser feitas pelo e-mail",
      },
    ],
    brazil: "Brasil",
    other_countries: "Demais países da América Latina",
  },
  privacy_policy: {
    title: "POLÍTICA DE PRIVACIDADE",
    date: "Data da última atualização: 28/03/2023",
    intro:
      'A Eurofarma Laboratórios S.A., empresa com sede na Rodovia Presidente Castelo Branco, 3565, Quadra GL/Lote A – Ingahi / Itapevi - SP, CEP 06696-000, inscrita no CNPJ/MF sob n° 61.190.096/0001-92, ( “Eurofarma”) tem o compromisso de respeitar a sua privacidade e criou esta política de privacidade ("Política de Privacidade") para proporcionar a você um claro entendimento de como funciona o aplicativo Scrolling Therapy (“Aplicativo”), e como são tratados os seus dados pessoais. \n\nEsta Política de Privacidade apresenta, de forma simples, objetiva e transparente, as práticas adotadas pela Eurofarma quanto ao tratamento de dados pessoais dos Usuários do Aplicativo. \n\nPara fins desta Política de Privacidade, a Eurofarma não coleta dados pessoais sobre o uso do aplicativo Scrolling Therapy.',
    topics: [
      {
        title: "Quais Dados Pessoais Coletamos",
        description_prefix:
          "Não há dados de identificação pessoal armazenados em nossos servidores. Os logins do Facebook e Intragram não são armazenados por nós em nossos servidores. \n\nAs estatísticas são armazenadas em nosso servidor e vinculadas ao usuário por meio de um ID de usuário anônimo. \n\nApenas no momento do faceApi.js que reconhece as expressões faciais (em torno de 200ms) e retorna seu feedback ao App sem armazenar informações pessoais.",
        subtopics: [
          {
            title: "\n\n• Informações de navegação. ",
            text: "São as informações que coletamos dos Usuários que navegam no Aplicativo: endereço de IP, informações sobre o dispositivo utilizado, data e hora de acesso, data de instalação do aplicativo, idioma de preferência, entre outras.",
          },
          {
            title: "\n\n• Outras informações fornecidas pelos Usuários. ",
            text: "São as demais informações voluntariamente fornecidas pelos Usuários, como por exemplo em comunicações com a Eurofarma por meio do Central de Atendimento.",
          },
        ],
      },
      {
        title: "Como Utilizamos os Dados Pessoais",
        description_prefix:
          "Não há coleta de dados de usuários identificados no aplicativo, portanto a Eurofarma utiliza os Dados Pessoais anonimamente para as finalidades descritas nesta Política de Privacidade e quaisquer outras finalidades previamente informadas. \n\n(i) Diagnosticar e solucionar eventuais problemas técnicos do Aplicativo. \n(ii) Aperfeiçoar e desenvolver uma melhor experiência para os Usuários no uso do Aplicativo. \n(iii) Cumprir obrigações legais e regulatórias, inclusive na comunicação às autoridades competentes de evento adversos ou questões relacionadas à segurança e qualidade dos nossos produtos. \n(iv) Investigar e instruir eventuais processos judiciais, administrativos ou arbitrais e proteger os direitos e interesses da Eurofarma, nossas afiliadas ou terceiros. \n(v) Identificar e disponibilizar materiais informativos de interesse dos Usuários. \n(vi) Realizar análises estatísticas sobre os Usuários para aprimorar e desenvolver novos produtos e serviços.",
      },
      {
        title: "Com Quem Podemos Compartilhar os Dados Pessoais",
        description_prefix:
          "Exceto conforme disposto nesta Política de Privacidade, os Dados Pessoais coletados de forma anônima não serão fornecidos a terceiros não parceiros da Eurofarma, nem tampouco expostos ao público, vendidos ou comercializados. \n\nEm algumas situações, poderemos operar em conjunto com outras empresas em diversas atividades, inclusive para hospedagem de dados, analytics e inteligência de mercado. Desta forma, reservamo-nos o direito de compartilhar suas informações, incluindo Dados Pessoais, tão somente com as empresas abaixo indicadas. Adotaremos, sempre que for possível, mecanismos de anonimização desses dados, visando preservar ao máximo a sua privacidade. \n\nNesse sentido, poderemos vir a compartilhar seus Dados Pessoais com as seguintes empresas:",
        subtopics: [
          {
            title: "\n\n(i) Empresas do Grupo Eurofarma: ",
            text: "Podemos transferir os Dados entre as empresas da Eurofarma, dentro ou fora do Brasil, para realizar o devido atendimento aos nossos clientes e consumidores, além de garantir o cumprimento das obrigações legais e regulatórias da Eurofarma, especialmente quando esses forem únicos e/ou integrados, dentre outros motivos.",
          },
          {
            title: "\n(ii)Nossos fornecedores: ",
            text: "Temos uma série de fornecedores que precisamos contratar para operar nossos serviços, e alguns deles podem tratar os Dados Pessoais que coletamos. Por exemplo, empresas que prestam serviços de hospedagem de dados, de atendimento ao consumidor, de autenticação e validação de cadastros, empresas de publicidades, entre outros. Na medida do possível, buscamos avaliar cuidadosamente nossos fornecedores e firmar com eles obrigações contratuais de segurança da informação e proteção de Dados Pessoais, com o objetivo de minimizar riscos para os Titulares, mas infelizmente não podemos garantir o correto manuseio por terceiros, que utilizam, divulgam e protegem os dados pessoais de acordo com suas respectivas políticas de privacidade.",
          },
          {
            title:
              "\n(iii) Autoridades judiciais, policiais ou administrativas: ",
            text: "No Brasil ou no exterior, em cumprimento de ordem judicial ou obrigação legal ou regulatória.",
          },
          {
            title: "\n(iv) Terceiros: ",
            text: "Em conexão com qualquer reorganização, fusão, venda, joint venture, cessão, transferência ou outra disposição de toda ou parte de nossos negócios, ativos ou ações (inclusive em processo de falência ou semelhante).",
          },
          {
            title: "\n(v) Para resguardar e proteger direitos da Eurofarma: ",
            text: "Reservamo-nos o direito de acessar, ler, preservar e divulgar dados que acreditamos serem necessários para cumprir uma obrigação legal ou uma ordem judicial; atendimento de demandas regulatórias com a Anvisa ou outras entidades; proteger os direitos, propriedade ou segurança da Eurofarma, de nossos colaboradores e clientes.",
          },
        ],
        description_sufix:
          "\n\nRelatórios estatísticos criados a partir de dados agregados, que não revelem a identidade dos titulares, poderão também ser compartilhados com terceiros, tais como afiliadas, subcontratados e/ou parceiros comerciais da Eurofarma.",
      },
      {
        title: "Como Coletamos os Dados Pessoais",
        description_prefix:
          "Utilizamos certas tecnologias como “cookies”, “web beacons” e “IPs” para a coleta de informações no Aplicativo. \n\nAo navegar no Aplicativo ou ao utilizar qualquer um de seus recursos ou ferramentas, um cookie poderá ser enviado para o dispositivo. Um cookie é um fragmento de dado que o identifica como um Usuário único, reconhecendo, acompanhando e armazenando suas informações de navegação. O Aplicativo insere cookies em seu dispositivo contendo um identificador exclusivo usado para melhor compreender o uso do Aplicativo, possibilitando que a Eurofarma identifique quais funcionalidades são preferidas pelos Usuários (por exemplo, com base no número de visitas a essas funcionalidades). \n\nQuando fizer o log-in através do Facebook e Instagram, poderá ser fornecido um cookie, que será mantido pelo Aplicativo, e conterá um identificador anônimo. Este tipo de cookie é usado para identificar o Usuário e fornecer-lhe acesso a áreas do Aplicativo que são limitadas a Usuários logados. \n\nAlém dos cookies, nós poderemos utilizar ou autorizar a utilização de outras tecnologias de coleta de dados e identificação, tais como “beacons” (também conhecidos como “pixel tags” ou “clear gifs”). Os beacons servem para ajudar a gerenciar e aperfeiçoar nossos serviços, sistemas, publicidade e anúncios online e demais ferramentas. Eles são pequenos blocos de código inseridos no Aplicativo que podem coletar informações sobre seu dispositivo, incluindo, por exemplo: modelo de dispositivo, sistema operacional, versão de navegador, horário de acesso, endereço IP e outras informações similares. \n\nColetamos também o endereço IP (Protocolo da Internet), um número automaticamente atribuído ao equipamento pelo seu provedor de conexão à internet sempre que se conecta à Internet. A Eurofarma poderá também usar os endereços IP para coletar informações anônimas e agregadas sobre o número de visitantes e uso do Aplicativo.",
      },
      {
        title: "Comunicações",
        description_prefix:
          "A Eurofarma não solicita informações pessoais por e-mail. Por este motivo, a Eurofarma não se responsabiliza por quaisquer comunicações eletrônicas fraudulentas que coletem seus dados pessoais (técnica comumente conhecida como phishing).",
      },
      {
        title: "Direitos dos Titulares dos Dados Pessoais",
        description_prefix:
          "Os dados recolhidos na aplicação não são identificáveis mas poderá solicitar mais informações através do email privacidade@eurofarma.com.br \n\nTentamos responder a todos os pedidos legítimos no prazo de 10 dias úteis. Ocasionalmente, pode levar mais de 10 dias úteis se sua solicitação for particularmente complexa ou se você tiver feito várias solicitações. Nesse caso, iremos notificá-lo e mantêlo atualizado sobre o andamento de sua solicitação.",
      },
      {
        title: "Alterações a Esta Política de Privacidade",
        description_prefix:
          "A presente Política de Privacidade poderá ser alterada a qualquer tempo pela Eurofarma, a seu exclusivo critério. Recomendamos que ela seja revista de tempos em tempos. \n\nTodas as alterações serão comunicadas por meio de um aviso em destaque na tela inicial do Aplicativo ou qualquer outra forma de comunicação com os Usuários.",
      },
      {
        title: "Entre em Contato Conosco",
        description_prefix:
          "Em caso de dúvidas, comentários, sugestões ou reclamações relacionados a esta Política de Privacidade ou às práticas de proteção de dados da Eurofarma, entre em contato conosco por meio dos nossos Canais de Atendimento disponíveis no aplicativo.",
      },
    ],
  },
  help: {
    title: "Como funciona?",
    faq: [
      {
        question: "Posso utilizar qualquer rede social no Scrolling Therapy?",
        answer:
          "Por enquanto, Scrolling Therapy suporta apenas Facebook e Instagram.",
      },
      {
        question: "Como faço para me conectar as minhas redes sociais?",
        answer:
          "Na tela de bem-vindo e na seção de informações, você encontrará o link para se conectar tanto ao seu Facebook quanto ao seu Instagram.",
      },
      {
        question:
          "Quais expressões faciais posso praticar no aplicativo Scrolling Therapy?",
        answer:
          "As expressões disponíveis no momento são Sorriso, Nojo, Raiva, Surpresa e Tristeza.",
      },
      {
        question:
          "Como posso aprender a usar minhas expressões faciais para controlar o aplicativo?",
        answer:
          "Por favor, vá para a seção Tutorial e vamos guiá-lo através das etapas.",
      },
      {
        question: "E se a câmera não detectar minhas expressões faciais?",
        answer:
          "O aplicativo exibirá uma mensagem tanto no Tutorial quanto em sua navegação nas redes sociais caso suas expressões não sejam detectadas.",
      },
      {
        question: "Como sei quanto tempo passei me exercitando?",
        answer:
          Platform.OS === "ios"
            ? "Scrolling Therapy registra o tempo diário que você utiliza expressões faciais para navegar por suas mídias sociais pelo aplicativo.\nAs informações detalhadas sobre gestos usados e seus exercícios semanais são mostrados na seção de Estatísticas."
            : "O aplicativo Scrolling Therapy rastreia o tempo que você navega nas mídias sociais com suas expressões faciais e mostra o quão perto você está de sua meta diária na parte superior do aplicativo. Informações detalhadas sobre seus objetivos e uso do aplicativo são exibidas na seção Estatísticas.",
      },
      {
        question: "O Scrolling Therapy grava o que eu faço com a câmera?",
        answer:
          "NÃO. O aplicativo só usa a câmera do seu telefone quando e se você der acesso e somente quando estiver se exercitando.",
      },
    ],
  },
  header: {
    daily_goal_achieved: "Parabéns!\nVocê atingiu sua meta diária",
    minute_to_go:
      Platform.OS === "ios" ? "Mais 1 minuto" : "1 minuto para sua meta diária",
    minute_to_go_plural:
      Platform.OS === "ios"
        ? "Mais {{count}} minutos"
        : "{{count}} minutos para sua meta diária",
  },
};
