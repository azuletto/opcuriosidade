let example_users_list = [
  {
    feelings: "Tranquilo",
    valors: "Liberdade, Aprendizado",
    time_stamp: "2023-01-10T12:34:00Z",
  },
  {
    name: "Renato Lopes",
    age: "1987-05-20",
    email: "renato.lopes@example.com",
    address: "Av. Brasil, 789, Florianópolis",
    info: "Engenheiro",
    interess: "Tecnologia, Esportes",
    feelings: "Ansioso",
    valors: "Ética, Família",
    id: "b2c3d4e5-f6a7-891b-cdef-234567890123",
    time_stamp: "2023-01-11T08:12:00Z",
    status: "Ativo",
  },
  {
    name: "Tatiane Melo",
    age: "1979-11-01",
    email: "tatiane.melo@example.com",
    address: "Rua das Flores, 156, Porto Alegre",
    info: "Professora",
    interess: "Educação, Leitura",
    feelings: "Calma",
    valors: "Organização, Eficiência",
    id: "c3d4e5f6-a7b8-912c-def0-345678901234",
    time_stamp: "2023-01-12T14:45:00Z",
    status: "Inativo",
  },
  {
    name: "Alfredo Carvalho",
    age: "1995-07-14",
    email: "alfredo.carvalho@example.com",
    address: "Av. Paulista, 312, São Paulo",
    info: "Jornalista",
    interess: "Notícias, Gastronomia",
    feelings: "Curioso",
    valors: "Inovação, Ética",
    id: "d4e5f6a7-b8c9-023d-ef12-456789012345",
    time_stamp: "2023-01-13T10:05:00Z",
    status: "Ativo",
  },
  {
    name: "João Santos",
    age: "1983-02-28",
    email: "joão.santos@example.com",
    address: "Rua das Orquídeas, 85, Salvador",
    info: "Médico",
    interess: "Saúde, Família",
    feelings: "Motivado",
    valors: "Cuidado, Família",
    id: "e5f6a7b8-c9d0-134e-f123-567890123456",
    time_stamp: "2023-01-14T09:30:00Z",
    status: "Inativo",
  },
  {
    name: "Milena Nogueira",
    age: "1990-08-08",
    email: "milena.nogueira@example.com",
    address: "Av. Atlântica, 900, Rio de Janeiro",
    info: "Psicóloga",
    interess: "Mente humana, Meditação",
    feelings: "Calma",
    valors: "Saúde, Crescimento",
    id: "f6a7b8c9-d0e1-245f-2345-678901234567",
    time_stamp: "2023-01-15T22:10:00Z",
    status: "Ativo",
  },
  {
    name: "Caio Oliveira",
    age: "1978-03-30",
    email: "caio.oliveira@example.com",
    address: "Rua das Acácias, 47, Curitiba",
    info: "Advogado",
    interess: "Direito, Política",
    feelings: "Determinado",
    valors: "Igualdade, Ética",
    id: "a7b8c9d0-e1f2-356a-3456-789012345678",
    time_stamp: "2023-01-16T11:55:00Z",
    status: "Inativo",
  },
  {
    name: "Lorena Fernandes",
    age: "1997-01-12",
    email: "lorena.fernandes@example.com",
    address: "Av. das Américas, 233, Rio de Janeiro",
    info: "Estudante",
    interess: "Games, Educação",
    feelings: "Empolgada",
    valors: "Diversão, Aprendizado",
    id: "b8c9d0e1-f2a3-467b-4567-890123456789",
    time_stamp: "2023-01-17T16:40:00Z",
    status: "Ativo",
  },
  {
    name: "Bruno Pereira",
    age: "1985-09-23",
    email: "bruno.pereira@example.com",
    address: "Rua das Palmeiras, 299, Porto Alegre",
    info: "Desenvolvedor",
    interess: "Tecnologia, Música",
    feelings: "Feliz",
    valors: "Inovação, Eficiência",
    id: "c9d0e1f2-a3b4-578c-5678-901234567890",
    time_stamp: "2023-01-18T07:20:00Z",
    status: "Ativo",
  },
  {
    name: "Carla Souza",
    age: "1992-06-15",
    email: "carla.souza@example.com",
    address: "Av. Contorno, 180, Belo Horizonte",
    info: "Empresária",
    interess: "Negócios, Gastronomia",
    feelings: "Confiante",
    valors: "Sucesso, Família",
    id: "d0e1f2a3-b4c5-689d-6789-012345678901",
    time_stamp: "2023-01-19T19:50:00Z",
    status: "Inativo",
  },
  {
    name: "Débora Lima",
    age: "1988-11-29",
    email: "debora.lima@example.com",
    address: "Rua das Flores, 11, Recife",
    info: "Nutricionista",
    interess: "Alimentação saudável",
    feelings: "Inspirada",
    valors: "Saúde, Equilíbrio",
    id: "e1f2a3b4-c5d6-790e-7890-123456789012",
    time_stamp: "2023-01-20T13:22:00Z",
    status: "Ativo",
  },
  {
    name: "Fábio Melo",
    age: "1976-04-05",
    email: "fabio.melo@example.com",
    address: "Av. Paulista, 2540, São Paulo",
    info: "Consultor",
    interess: "Estratégia, Gestão",
    feelings: "Focado",
    valors: "Eficiência, Resultados",
    id: "f2a3b4c5-d6e7-801f-8901-234567890123",
    time_stamp: "2023-01-21T21:10:00Z",
    status: "Inativo",
  },
  {
    name: "Helena Carvalho",
    age: "1994-07-27",
    email: "helena.carvalho@example.com",
    address: "Rua dos Pinheiros, 178, Curitiba",
    info: "Fotógrafa",
    interess: "Arte, Viagens",
    feelings: "Criativa",
    valors: "Expressão, Beleza",
    id: "a3b4c5d6-e7f8-912g-9012-345678901234",
    time_stamp: "2023-01-22T10:05:00Z",
    status: "Ativo",
  },
  {
    name: "Igor Santos",
    age: "1990-10-14",
    email: "igor.santos@example.com",
    address: "Av. Brasil, 640, Salvador",
    info: "Estudante",
    interess: "Programação, Games",
    feelings: "Empolgado",
    valors: "Diversão, Aprendizado",
    id: "b4c5d6e7-f8a9-023h-0123-456789012345",
    time_stamp: "2023-01-23T17:45:00Z",
    status: "Inativo",
  },
  {
    name: "Joana Rocha",
    age: "1981-02-02",
    email: "joana.rocha@example.com",
    address: "Rua das Acácias, 310, Porto Alegre",
    info: "Engenheira",
    interess: "Tecnologia, Inovação",
    feelings: "Motivada",
    valors: "Inovação, Trabalho em equipe",
    id: "c5d6e7f8-a9b0-134i-1234-567890123456",
    time_stamp: "2023-01-24T06:30:00Z",
    status: "Ativo",
  },
  {
    name: "Carlos Silva",
    age: "1982-12-19",
    email: "carlos.silva@example.com",
    address: "Rua 7 de Setembro, 201, Manaus",
    info: "Veterinário",
    interess: "Animais, Natureza",
    feelings: "Calmo",
    valors: "Cuidado, Responsabilidade",
    id: "d6e7f8a9-b0c1-245j-2345-678901234567",
    time_stamp: "2023-01-25T15:25:00Z",
    status: "Inativo",
  },
  {
    name: "Amanda Duarte",
    age: "1993-05-06",
    email: "amanda.duarte@example.com",
    address: "Av. Fernando Corrêa, 333, Cuiabá",
    info: "Publicitária",
    interess: "Marketing, Moda",
    feelings: "Animada",
    valors: "Criatividade, Comunicação",
    id: "e7f8a9b0-c1d2-356k-3456-789012345678",
    time_stamp: "2023-01-26T10:15:00Z",
    status: "Ativo",
  },
  {
    name: "Fernando Gomes",
    age: "1974-10-03",
    email: "fernando.gomes@example.com",
    address: "Rua Bahia, 101, Joinville",
    info: "Motorista",
    interess: "Carros, Corridas",
    feelings: "Disciplinado",
    valors: "Pontualidade, Segurança",
    id: "f8a9b0c1-d2e3-467l-4567-890123456789",
    time_stamp: "2023-01-27T13:42:00Z",
    status: "Inativo",
  },
  {
    name: "Nathalia Ribeiro",
    age: "1989-01-15",
    email: "nathalia.ribeiro@example.com",
    address: "Av. das Rosas, 75, Natal",
    info: "Fisioterapeuta",
    interess: "Corpo humano, Bem-estar",
    feelings: "Empática",
    valors: "Cuidado, Saúde",
    id: "a9b0c1d2-e3f4-578m-5678-901234567890",
    time_stamp: "2023-01-28T09:55:00Z",
    status: "Ativo",
  },
  {
    name: "Lucas Ferreira",
    age: "1991-06-22",
    email: "lucas.ferreira@example.com",
    address: "Rua Amapá, 444, Belém",
    info: "Cozinheiro",
    interess: "Culinária, Cultura",
    feelings: "Alegre",
    valors: "Criatividade, Tradição",
    id: "b0c1d2e3-f4a5-689n-6789-012345678901",
    time_stamp: "2023-01-29T18:10:00Z",
    status: "Inativo",
  },
  {
    name: "Paula Martins",
    age: "2000-03-11",
    email: "paula.martins@example.com",
    address: "Av. Maracanã, 32, Rio de Janeiro",
    info: "Estudante",
    interess: "Cinema, Leitura",
    feelings: "Sonhadora",
    valors: "Imaginação, Dedicação",
    id: "c1d2e3f4-a5b6-790o-7890-123456789012",
    time_stamp: "2023-01-30T07:00:00Z",
    status: "Ativo",
  },
  {
    name: "Rodrigo Teixeira",
    age: "1980-09-05",
    email: "rodrigo.teixeira@example.com",
    address: "Rua Goiás, 19, Campo Grande",
    info: "Arquiteto",
    interess: "Arte, Construção",
    feelings: "Criativo",
    valors: "Estética, Funcionalidade",
    id: "d2e3f4a5-b6c7-801p-8901-234567890123",
    time_stamp: "2023-01-31T14:30:00Z",
    status: "Inativo",
  },
  {
    name: "Juliana Souza",
    age: "1996-04-25",
    email: "juliana.souza@example.com",
    address: "Av. Getúlio Vargas, 289, Maceió",
    info: "Analista de Dados",
    interess: "Tecnologia, Matemática",
    feelings: "Racional",
    valors: "Precisão, Inovação",
    id: "e3f4a5b6-c7d8-912q-9012-345678901234",
    time_stamp: "2023-02-01T11:40:00Z",
    status: "Ativo",
  },
  {
    name: "Marcelo Pinto",
    age: "1986-08-30",
    email: "marcelo.pinto@example.com",
    address: "Rua São Paulo, 59, Teresina",
    info: "Bancário",
    interess: "Finanças, Leitura",
    feelings: "Reservado",
    valors: "Estabilidade, Prudência",
    id: "f4a5b6c7-d8e9-023r-0123-456789012345",
    time_stamp: "2023-02-02T16:15:00Z",
    status: "Inativo",
  },
  {
    name: "Isabela Barros",
    age: "1998-02-19",
    email: "isabela.barros@example.com",
    address: "Rua Paraná, 182, Vitória",
    info: "Cantora",
    interess: "Música, Arte",
    feelings: "Expressiva",
    valors: "Liberdade, Criatividade",
    id: "a5b6c7d8-e9f0-134s-1234-567890123456",
    time_stamp: "2023-02-03T20:05:00Z",
    status: "Ativo",
  },
  {
    name: "Thiago Reis",
    age: "1993-12-08",
    email: "thiago.reis@example.com",
    address: "Av. João Pessoa, 410, São Luís",
    info: "Professor",
    interess: "Educação, História",
    feelings: "Inspirado",
    valors: "Conhecimento, Justiça",
    id: "b6c7d8e9-f0a1-245t-2345-678901234567",
    time_stamp: "2023-02-04T10:25:00Z",
    status: "Inativo",
  },
  {
    name: "Camila Andrade",
    age: "1984-11-16",
    email: "camila.andrade@example.com",
    address: "Rua Rio Branco, 501, Goiânia",
    info: "Dentista",
    interess: "Saúde, Estética",
    feelings: "Atenciosa",
    valors: "Cuidado, Confiança",
    id: "c7d8e9f0-a1b2-356u-3456-789012345678",
    time_stamp: "2023-02-05T13:10:00Z",
    status: "Ativo",
  },
  {
    name: "Diego Monteiro",
    age: "1997-07-09",
    email: "diego.monteiro@example.com",
    address: "Av. Rio das Pedras, 87, Sorocaba",
    info: "Ilustrador",
    interess: "Desenho, Games",
    feelings: "Criativo",
    valors: "Imaginação, Dedicação",
    id: "d8e9f0a1-b2c3-467v-4567-890123456789",
    time_stamp: "2023-02-06T15:45:00Z",
    status: "Inativo",
  },
  {
    name: "Patrícia Ramos",
    age: "1991-01-03",
    email: "patricia.ramos@example.com",
    address: "Rua da Praia, 33, Aracaju",
    info: "Turismóloga",
    interess: "Cultura, Viagem",
    feelings: "Animada",
    valors: "Descoberta, Liberdade",
    id: "e9f0a1b2-c3d4-578w-5678-901234567890",
    time_stamp: "2023-02-07T09:05:00Z",
    status: "Ativo",
  },
  {
    name: "Gustavo Nunes",
    age: "1980-10-20",
    email: "gustavo.nunes@example.com",
    address: "Av. Independência, 144, Bauru",
    info: "Zootecnista",
    interess: "Natureza, Ecologia",
    feelings: "Prático",
    valors: "Sustentabilidade, Responsabilidade",
    id: "f0a1b2c3-d4e5-689x-6789-012345678901",
    time_stamp: "2023-02-08T11:50:00Z",
    status: "Inativo",
  },
  {
    name: "Luciana Bastos",
    age: "1992-03-04",
    email: "luciana.bastos@example.com",
    address: "Rua das Mangueiras, 84, Brasília",
    info: "Gestora de Projetos",
    interess: "Organização, Viagens",
    feelings: "Determinação",
    valors: "Planejamento, Progresso",
    id: "a1b2c3d4-e5f6-790y-7890-123456789012",
    time_stamp: "2023-02-09T10:00:00Z",
    status: "Ativo",
  },
  {
    name: "Rafael Brito",
    age: "1987-06-21",
    email: "rafael.brito@example.com",
    address: "Av. Leste-Oeste, 95, Fortaleza",
    info: "Técnico de Informática",
    interess: "Hardware, Programação",
    feelings: "Concentrado",
    valors: "Resolução, Praticidade",
    id: "b2c3d4e5-f6a7-801z-8901-234567890123",
    time_stamp: "2023-02-10T15:42:00Z",
    status: "Inativo",
  },
  {
    name: "Elaine Figueira",
    age: "1983-08-17",
    email: "elaine.figueira@example.com",
    address: "Rua Tupinambás, 32, Belo Horizonte",
    info: "Consultora Financeira",
    interess: "Economia, Viagens",
    feelings: "Confiante",
    valors: "Estabilidade, Clareza",
    id: "c3d4e5f6-a7b8-912a-9012-345678901234",
    time_stamp: "2023-02-11T12:10:00Z",
    status: "Ativo",
  },
  {
    name: "Douglas Vieira",
    age: "1996-10-30",
    email: "douglas.vieira@example.com",
    address: "Rua Serra Azul, 123, Ribeirão Preto",
    info: "Barista",
    interess: "Café, Cinema",
    feelings: "Entusiasmado",
    valors: "Qualidade, Sabor",
    id: "d4e5f6a7-b8c9-023b-0123-456789012345",
    time_stamp: "2023-02-12T19:30:00Z",
    status: "Inativo",
  },
  {
    name: "Jéssica Moraes",
    age: "1999-09-18",
    email: "jessica.moraes@example.com",
    address: "Av. Nossa Senhora, 77, Campinas",
    info: "Estudante de Moda",
    interess: "Tendências, Arte",
    feelings: "Criativa",
    valors: "Estilo, Expressão",
    id: "e5f6a7b8-c9d0-134c-1234-567890123456",
    time_stamp: "2023-02-13T08:20:00Z",
    status: "Ativo",
  },
  {
    name: "André Santana",
    age: "1985-11-11",
    email: "andre.santana@example.com",
    address: "Rua Ipiranga, 404, São José dos Campos",
    info: "Mecânico",
    interess: "Carros, Trilhas",
    feelings: "Prático",
    valors: "Agilidade, Confiança",
    id: "f6a7b8c9-d0e1-245d-2345-678901234567",
    time_stamp: "2023-02-14T17:00:00Z",
    status: "Inativo",
  },
  {
    name: "Beatriz Lima",
    age: "1994-04-12",
    email: "beatriz.lima@example.com",
    address: "Av. Rio Branco, 9, Teresina",
    info: "Farmacêutica",
    interess: "Saúde, Leitura",
    feelings: "Equilibrada",
    valors: "Conhecimento, Cuidado",
    id: "a7b8c9d0-e1f2-356e-3456-789012345678",
    time_stamp: "2023-02-15T11:25:00Z",
    status: "Ativo",
  },
  {
    name: "Mateus Rocha",
    age: "2000-01-01",
    email: "mateus.rocha@example.com",
    address: "Rua do Sol, 22, João Pessoa",
    info: "Artista Plástico",
    interess: "Pintura, História",
    feelings: "Inovador",
    valors: "Beleza, Inspiração",
    id: "b8c9d0e1-f2a3-467f-4567-890123456789",
    time_stamp: "2023-02-16T13:40:00Z",
    status: "Inativo",
  },
  {
    name: "Daniele Campos",
    age: "1993-03-23",
    email: "daniele.campos@example.com",
    address: "Av. das Torres, 17, Londrina",
    info: "Recepcionista",
    interess: "Leitura, Cinema",
    feelings: "Simples",
    valors: "Empatia, Organização",
    id: "c9d0e1f2-a3b4-578g-5678-901234567890",
    time_stamp: "2023-02-17T10:10:00Z",
    status: "Ativo",
  },
  {
    name: "Victor Mendes",
    age: "1982-07-27",
    email: "victor.mendes@example.com",
    address: "Rua da Paz, 310, Palmas",
    info: "Engenheiro Civil",
    interess: "Construção, Ciclismo",
    feelings: "Determinado",
    valors: "Força, Segurança",
    id: "d0e1f2a3-b4c5-689h-6789-012345678901",
    time_stamp: "2023-02-18T09:30:00Z",
    status: "Inativo",
  },
  {
    name: "Letícia Farias",
    age: "1995-02-16",
    email: "leticia.farias@example.com",
    address: "Rua Maranhão, 601, Boa Vista",
    info: "Jornalista",
    interess: "Leitura, Atualidades",
    feelings: "Perspicaz",
    valors: "Verdade, Comunicação",
    id: "e1f2a3b4-c5d6-790i-7890-123456789012",
    time_stamp: "2023-02-19T13:10:00Z",
    status: "Ativo",
  },
  {
    name: "Eduardo Ramos",
    age: "1980-05-05",
    email: "eduardo.ramos@example.com",
    address: "Av. Central, 88, Blumenau",
    info: "Técnico Agrícola",
    interess: "Campo, Sustentabilidade",
    feelings: "Calmo",
    valors: "Natureza, Produção",
    id: "f2a3b4c5-d6e7-801j-8901-234567890123",
    time_stamp: "2023-02-20T16:22:00Z",
    status: "Inativo",
  },
  {
    name: "Viviane Cardoso",
    age: "1997-12-29",
    email: "viviane.cardoso@example.com",
    address: "Rua Dom Pedro, 150, Salvador",
    info: "Pedagoga",
    interess: "Crianças, Psicologia",
    feelings: "Acolhedora",
    valors: "Educação, Paciência",
    id: "a3b4c5d6-e7f8-912k-9012-345678901234",
    time_stamp: "2023-02-21T08:30:00Z",
    status: "Ativo",
  },
];
export function loadExampleUsers() {
  return example_users_list;
}
