import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
async function main() {
  console.log('🌱 Inserindo comidas no banco...')

  await prisma.comidas.deleteMany()

  // insere 20 comidas
  await prisma.comidas.createMany({
  data: [
    { nome: 'Feijoada', tipo: 'Brasileira', preco: 35.50, descricao: 'Feijão preto com carnes defumadas, servido com arroz e farofa.' },
    { nome: 'Moqueca de Peixe', tipo: 'Brasileira', preco: 42.00, descricao: 'Peixe cozido no leite de coco, azeite de dendê e temperos.' },
    { nome: 'Coxinha', tipo: 'Brasileira', preco: 8.00, descricao: 'Salgado frito recheado com frango desfiado e catupiry.' },
    { nome: 'Pizza Margherita', tipo: 'Italiana', preco: 45.00, descricao: 'Molho de tomate, mussarela e manjericão fresco.' },
    { nome: 'Lasanha à Bolonhesa', tipo: 'Italiana', preco: 39.90, descricao: 'Camadas de massa, molho bolonhesa e queijo gratinado.' },
    { nome: 'Risoto de Cogumelos', tipo: 'Italiana', preco: 48.00, descricao: 'Arroz arbório com cogumelos frescos e parmesão.' },
    { nome: 'Sushi Combo', tipo: 'Japonesa', preco: 60.00, descricao: 'Seleção de sushis variados com peixe fresco e arroz temperado.' },
    { nome: 'Tempurá de Camarão', tipo: 'Japonesa', preco: 55.00, descricao: 'Camarões empanados fritos servidos com molho shoyu.' },
    { nome: 'Yakissoba', tipo: 'Japonesa', preco: 35.00, descricao: 'Macarrão frito com legumes, carne e molho oriental.' },
    { nome: 'Taco de Carne', tipo: 'Mexicana', preco: 25.00, descricao: 'Tortilha crocante recheada com carne e guacamole.' },
    { nome: 'Burrito de Frango', tipo: 'Mexicana', preco: 28.00, descricao: 'Tortilha macia recheada com frango, feijão e queijo.' },
    { nome: 'Nachos com Queijo', tipo: 'Mexicana', preco: 22.00, descricao: 'Chips de milho com molho cheddar derretido.' },
    { nome: 'Hambúrguer Artesanal', tipo: 'Americana', preco: 30.00, descricao: 'Pão brioche, carne bovina e queijo cheddar.' },
    { nome: 'Hot Dog Clássico', tipo: 'Americana', preco: 18.00, descricao: 'Salsicha com ketchup, mostarda e cebola crocante.' },
    { nome: 'Panqueca de Blueberry', tipo: 'Americana', preco: 20.00, descricao: 'Panquecas doces servidas com mel e blueberries.' },
    { nome: 'Curry de Frango', tipo: 'Indiana', preco: 40.00, descricao: 'Frango cozido em molho de curry e leite de coco.' },
    { nome: 'Naan com Alho', tipo: 'Indiana', preco: 10.00, descricao: 'Pão indiano assado com manteiga e alho.' },
    { nome: 'Pad Thai', tipo: 'Tailandesa', preco: 38.00, descricao: 'Macarrão de arroz salteado com camarão, ovo e amendoim.' },
    { nome: 'Falafel', tipo: 'Árabe', preco: 15.00, descricao: 'Bolinhas fritas de grão-de-bico temperado com especiarias.' },
    { nome: 'Kebab de Cordeiro', tipo: 'Árabe', preco: 32.00, descricao: 'Espetinho de cordeiro grelhado com molho de iogurte.' },
    { nome: 'Brigadeiro', tipo: 'Brasileira', preco: 5.00, descricao: 'Doce de chocolate com leite condensado e granulado.' },
    { nome: 'Acarajé', tipo: 'Brasileira', preco: 18.00, descricao: 'Bolinhos de feijão-fradinho fritos no dendê e recheados com vatapá.' },
    { nome: 'Tiramisu', tipo: 'Italiana', preco: 25.00, descricao: 'Sobremesa com camadas de biscoito, café e creme de mascarpone.' },
    { nome: 'Gnocchi ao Sugo', tipo: 'Italiana', preco: 36.00, descricao: 'Nhoque de batata servido com molho de tomate e manjericão.' },
    { nome: 'Sashimi de Salmão', tipo: 'Japonesa', preco: 58.00, descricao: 'Fatias finas de salmão cru, frescas e delicadas.' },
    { nome: 'Ramen Tradicional', tipo: 'Japonesa', preco: 42.00, descricao: 'Macarrão em caldo rico com ovo, carne de porco e algas.' },
    { nome: 'Guacamole com Nachos', tipo: 'Mexicana', preco: 20.00, descricao: 'Creme de abacate temperado servido com chips de milho.' },
    { nome: 'Chili com Carne', tipo: 'Mexicana', preco: 30.00, descricao: 'Ensopado de carne com feijão, pimenta e especiarias.' },
    { nome: 'Mac and Cheese', tipo: 'Americana', preco: 27.00, descricao: 'Massa cremosa com molho de queijo cheddar.' },
    { nome: 'Buffalo Wings', tipo: 'Americana', preco: 32.00, descricao: 'Asinhas de frango fritas com molho picante.' },
    { nome: 'Pão de Queijo', tipo: 'Brasileira', preco: 6.00, descricao: 'Pãozinho de polvilho e queijo, crocante por fora e macio por dentro.' },
    { nome: 'Arroz de Pato', tipo: 'Portuguesa', preco: 45.00, descricao: 'Arroz cozido com pato desfiado e embutidos.' },
    { nome: 'Bacalhau à Gomes de Sá', tipo: 'Portuguesa', preco: 55.00, descricao: 'Bacalhau com batatas, cebolas e ovos cozidos.' },
    { nome: 'Croissant', tipo: 'Francesa', preco: 12.00, descricao: 'Massa folhada amanteigada, leve e dourada.' },
    { nome: 'Crepe de Nutella', tipo: 'Francesa', preco: 18.00, descricao: 'Crepe doce recheado com Nutella e morangos.' },
    { nome: 'Quiche Lorraine', tipo: 'Francesa', preco: 25.00, descricao: 'Torta salgada com creme, bacon e queijo.' },
    { nome: 'Paella Valenciana', tipo: 'Espanhola', preco: 50.00, descricao: 'Arroz com frutos do mar, frango e açafrão.' },
    { nome: 'Tapas Variadas', tipo: 'Espanhola', preco: 35.00, descricao: 'Porções pequenas de petiscos típicos espanhóis.' },
    { nome: 'Gazpacho', tipo: 'Espanhola', preco: 22.00, descricao: 'Sopa fria de tomate, pepino e pimentão.' },
    { nome: 'Shawarma', tipo: 'Árabe', preco: 28.00, descricao: 'Sanduíche de carne grelhada com vegetais e molho tahine.' },
    { nome: 'Tabule', tipo: 'Árabe', preco: 18.00, descricao: 'Salada de trigo, tomate, pepino, salsinha e limão.' },
    { nome: 'Massaman Curry', tipo: 'Tailandesa', preco: 44.00, descricao: 'Curry tailandês suave com carne e batatas.' },
    { nome: 'Tom Yum', tipo: 'Tailandesa', preco: 37.00, descricao: 'Sopa picante de camarão com ervas tailandesas.' },
    { nome: 'Butter Chicken', tipo: 'Indiana', preco: 42.00, descricao: 'Frango ao molho cremoso de tomate e especiarias.' },
    { nome: 'Samosa', tipo: 'Indiana', preco: 12.00, descricao: 'Pastel frito recheado com batata e ervilhas.' },
    { nome: 'Pierogi', tipo: 'Polonesa', preco: 28.00, descricao: 'Massa recheada com batata e cebola caramelizada.' },
    { nome: 'Borscht', tipo: 'Russa', preco: 30.00, descricao: 'Sopa de beterraba servida com creme azedo.' },
    { nome: 'Fish and Chips', tipo: 'Britânica', preco: 38.00, descricao: 'Peixe empanado com batatas fritas e molho tártaro.' },
    { nome: 'Shepherd’s Pie', tipo: 'Britânica', preco: 42.00, descricao: 'Torta de carne moída com purê de batatas gratinado.' },
    { nome: 'Pastel de Nata', tipo: 'Portuguesa', preco: 8.00, descricao: 'Doce de massa folhada e creme de ovos caramelizado.' },
  ],
});

  console.log('20 comidas inseridas com sucesso!')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })