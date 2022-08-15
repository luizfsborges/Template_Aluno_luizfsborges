const http = require('http');
const hostname = '127.0.0.1';
const port = 3011;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<!DOCTYPE html> <meta charset="UTF-8"> <head> <title>Exercício de personalização da Etapa 1 do Tutorial do Módulo 2 </title></head> \
              <body>\
                <div id="main"> \
                       <h1> Luiz Fernando da Silva Borges </h1> \
                       <H2> Engenharia de Computação Inteli | TEDx Speaker | Líder Estudar </div> \
                       <p>Sou graduando em Engenharia de Computação no Inteli Instituto de Tecnologia \
                        e Liderança e Técnico em Informática pelo Instituto Federal Campus Aquidauana. \
                        Desde 2020, sou Líder da Fundação Estudar. </p> \
                       <p>Desenvolvi pesquisas e tecnologias na área de engenharia biomédica com: modelagem \
                       de processos termodinâmicos para amplificação de DNA; controle contínuo de juntas \
                       para próteses robóticas de membro superior com feedback tátil e interfaces \
                       cérebro-computador e cérebro máquina de loop fechado para a comunicação com pessoas \
                       inicialmente classificadas em estado vegetativo e coma.</p> \
                       <p>Fui laureado com mais de 60 prêmios como resultado de minhas participações em feiras \
                       de ciências e engenharia nacionais e internacionais, sendo o primeiro e único brasileiro \
                       a receber os prêmios de primeiro lugar e melhor da categoria, em Engenharia Biomédica, \
                       na maior feira de ciências e engenharia do mundo: a Intel International Science and \
                       Engineering Fair (Intel ISEF). Além disso, recebi também o prêmio concedido pelo MIT \
                       Lincoln Laboratory, por meio do programa Ceres Connection, tendo meu nome submetido \
                       para a International Astronomical Union (IAU), que nomeou o asteroide (33503) Dasilvaborges, \
                       em minha homenagem.</p> \
                       <p>Co-fundei a Hermes Braindeck e a Leventronic. A Hermes Braindeck é uma iniciativa que \
                       visa fazer pacientes em coma se comunicarem por meio de uma interface cérebro-computador \
                       baseada em eletroencefalografia. A Leventronic é uma empresa de tecnologia médica criada \
                       para atender a demanda de equipamentos emergenciais de apoio a respiração, fruto da epidemia \
                       do COVID-19 em 2020. Liderei e integrei, como CTO da Leventronic, uma equipe de engenheiros \
                       que desenvolveu um aparelho emergencial e transitório de suporte à respiração, com patente \
                       BR 102020010303-2 de minha autoria. </p> \
                       <p>Tenho interesse nas áreas de visão computacional, machine learning, circuitos amplificadores \
                       para a aquisição de sinais biológicos (EMG, EEG e ECG), processamento de sinais, interface \
                       cérebro-computador baseada em eletroencefalograma, medicina diagnóstica e engenharia biomédica.</p> \
              </body> \
           </html>');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});