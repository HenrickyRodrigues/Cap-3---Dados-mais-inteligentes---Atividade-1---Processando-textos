var texto = "<html><head><title>Gulliver Traveller - Roteiros</title></head><body><b>->1 - Roteiros para *São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554, a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil. Aqui vão três dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br>       A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905. É considerada oficialmente como uma cidade desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br>; Fremont; Las Vegas Art Museum; Museu Nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital russa fica situada às margens do Rio Moscou e, apesar de ser a cidade mais cosmopolita da Rússia, grande parte de sua história está preservada<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br></body></html>";

// Cidades
var cidade = texto.split("*");

alert(`Cidades: ${cidade[1]}, ${cidade[3]}, ${cidade[5]} `);



// Roteiros

var roteiro = texto.split("#")

alert(`São paulo: ${roteiro[1].split("<br>").join()}

Las Vegas: ${roteiro[4].split("<br>").join()}

Moscou: ${roteiro[7].split("<br>").join()} `);


// Quantidade
var quantidadeLocais1 = roteiro[1].split(";").length
var quantidadeLocais4 = roteiro[4].split(";").length
var quantidadeLocais7 = roteiro[7].split(";").length

alert (`Quantidade de locais em São Paulo: ${quantidadeLocais1}
Quantidade de locais em Las Vegas: ${quantidadeLocais4}
Quantidade de locais em Moscou: ${quantidadeLocais7}
 `)

// O nome dos pontos turísticos localizados no bairro Centro da cidade de São Paulo.

var locais2 = roteiro[2].split("Centro")
alert(`Pontos turísticos no centro de São Paulo: ${locais2[1].split("<br>").join()}`)


// O nome dos pontos turísticos localizados no bairro Downtown da cidade de Los Angeles.

var locaisDowntown= roteiro[5].split("Downtown")
alert(`Pontos turísticos de Downtown em Las Vegas: ${locaisDowntown[1].split("<br>").join()}`)


