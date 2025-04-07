import { Menu, ShoppingBag, Instagram, Phone } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    { id: 'bolos', name: 'Bolos' },
    { id: 'variedades', name: 'Variedades' },
    { id: 'mini-pizzas', name: 'Mini Pizzas' },
    { id: 'tortas', name: 'Tortas' },
    { id: 'salgados-unidade', name: 'Salgados Unidade' },
    { id: 'salgados-bandeja', name: 'Salgados Bandeja' }
  ];

  return (
    <div className="min-h-screen bg-[#FDF7F2]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#D64933]">Saborear</h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {categories.map(category => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="text-gray-600 hover:text-[#D64933] transition-colors"
              >
                {category.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            {categories.map(category => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="block px-4 py-2 text-gray-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {category.name}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-32 md:pb-24 bg-gradient-to-b from-[#FDF7F2] to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#2B2D42] mb-6">
            Bem-vindo à Saborear
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            A nossa história é baseada em afetos reais transmitidos de geração
            em geração. O amor não se mede em excessos, mas sim, em gestos singelos
            e genuínos. Sabemos que, o que realmente importa são os momentos compartilhados.
          </p>
        </div>
      </section>

      {/* Bolos Section */}
      <section id="bolos" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Bolos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="./Imgs/bolo aniversario.jfif"
                alt="Bolo de Aniversário"
                className="mx-auto max-h-64 w-auto object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Bolo de Aniversário</h3>
                <p className="text-gray-600 mb-4">
                Uma forma singela de expressar amor. 
                        Opções de recheios: mousse de chocolate, mousse de morango, 
                        mousse de leite ninho, trufado ao leite, trufado branco, trufado de nutella,
                        ninho com morango, sonho de valsa e laka/óreo. O valor pode variar de acordo
                        com o recheio.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#D64933] font-bold">R$ 130,00</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="./Imgs/bolo amendoim.jpg"
                alt="Bolo de Amendoim com Paçoca"
                className="mx-auto max-h-64 w-auto object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Amendoim com Paçoca</h3>
                <p className="text-gray-600 mb-4">
                  É conhecido pelo seu rico sabor, pois a combinação de amendoim, chocolate e paçoca remete
                  à memória afetiva. Sua textura densa e úmida proporciona um paladar inesquecível.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#D64933] font-bold">R$ 35,00</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="./Imgs/bolo aveia com banana.jfif"
                alt="Bolo de Aveia com Banana"
                className="mx-auto max-h-64 w-auto object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Aveia com Banana</h3>
                <p className="text-gray-600 mb-4">
                É uma escolha clássica que combina muito bem com o café. A doçura natural das
                        bananas adiciona uma dimensão deliciosa ao sabor do bolo, tornando-o uma opção 
                        versátil para diversos momentos do dia.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#D64933] font-bold">R$ 33,00</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="./Imgs/Bolo de cenoura com chocolate.jfif"
                alt="Bolo de Cenoura"
                className="mx-auto max-h-64 w-auto object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Cenoura com Chocolate</h3>
                <p className="text-gray-600 mb-4">
                Leve e úmido. Uma receita deliciosa para harmonizar um bolo de cenoura,
                notas de chocolates ao leite com o aroma de café. Delicioso né?
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#D64933] font-bold">R$ 29,00</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="./Imgs/bolo chocolate.jfif"
                alt="Chocolate Vulcão"
                className="mx-auto max-h-64 w-auto object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Chocolate Vulcão</h3>
                <p className="text-gray-600 mb-4">
                Um clássico que derrete na boca. Uma solução perfeita para 
                        satisfazer aquele desejo por um doce. Esse bolo vulcão é inesquecível devido ao
                        sabor único do chocolate.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#D64933] font-bold">R$ 25,00</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="./Imgs/bolo chocolate piscina.jfif"
                alt="Chocolate Piscina"
                className="mx-auto max-h-64 w-auto object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Chocolate Piscina</h3>
                <p className="text-gray-600 mb-4">
                É um mimo para presentear. Sua singelesa associada ao
                        sabor de chocolate, leva amor a quem recebe. Um momento para criar
                        memória afetiva.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#D64933] font-bold">R$ 20,00</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="./Imgs/bolo fuba com goiabada.jpg"
                alt="Fubá com Goiabada"
                className="mx-auto max-h-64 w-auto object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Fubá com Goiabada</h3>
                <p className="text-gray-600 mb-4">
                É uma das combinações mais brasileira que existe. É uma escolha deliciosa
                        e única para acompanhar o seu café. Uma textura macia e 
                        levemente adocicada.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#D64933] font-bold">R$ 25,00</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="./Imgs/Fuba com queijo.jpg"
                alt="Fubá com Queijo"
                className="mx-auto max-h-64 w-auto object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Fubá com Queijo</h3>
                <p className="text-gray-600 mb-4">
                Um bolo afetivo que traz carinho e felicidade em cada pedaço.
                Presente nos lares das famílias brasileiras.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#D64933] font-bold">R$ 25,00</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="./Imgs/bolo indiano.jpg"
                alt="Indiano piscina"
                className="mx-auto max-h-64 w-auto object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Indiano piscina</h3>
                <p className="text-gray-600 mb-4">
                É perfeito para receber as pessoas em sua casa. Para 
                        um café. Leve, cremoso e macio. Se destaca por ser um bolo 
                        aromático.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#D64933] font-bold">R$ 35,00</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="./Imgs/bolo laranja.jfif"
                alt="Laranja"
                className="mx-auto max-h-64 w-auto object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Laranja</h3>
                <p className="text-gray-600 mb-4">
                  Um convite para um cafezinho, é um convite aconchegante. O bolo de laranja
                  quando está assando perfuma a casa toda com aroma de felicidade.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#D64933] font-bold">R$ 27,00</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="./Imgs/bolo limao.jfif"
                alt="Limão"
                className="mx-auto max-h-64 w-auto object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Limão</h3>
                <p className="text-gray-600 mb-4">
                  Um bolo que derrete na boca combinado com aroma cítrico do limão. Aquele bolo
                  que a gente nunca esquece. Se acompanhado de sorvete de limão, trasforma-se
                  em uma deliciosa sobremesa.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#D64933] font-bold">R$ 29,00</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="./Imgs/bolo curau.jfif"
                alt="Milho com curau"
                className="mx-auto max-h-64 w-auto object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Milho com curau</h3>
                <p className="text-gray-600 mb-4">
                  O curau de milho verde é uma das receitas mais tradicionais. O toque
                  de canela deixa-o ainda mais saboroso. Uma combinação perfeita!
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#D64933] font-bold">R$ 35,00</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="./Imgs/bolo salgado.jfif"
                alt="Salgado com calabresa"
                className="mx-auto max-h-64 w-auto object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Salgado com calabresa</h3>
                <p className="text-gray-600 mb-4">
                  Quer fazer um lanche especial? O bolo salgado com calabresa é surpreendente
                  e irresistível. Textura crocante com explosão de sabores.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#D64933] font-bold">R$ 35,00</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Variedades Section */}
      <section id="variedades" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Variedades</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="./Imgs/croquete.jfif"
                alt="Croquetes"
                className="mx-auto max-h-64 w-auto object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Croquetes</h3>
                <p className="text-gray-600 mb-4">
                  Imagine um croquete cuja a receita é compartilhada
                  de geração a geração. A combinação dos ingredientes cria uma sintonia
                  perfeita entre o sabor e a suave picância. Irresistível e com sabor inigualável.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#D64933] font-bold">R$ 6,00</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="./Imgs/feijoada.jfif"
                alt="Feijoada"
                className="mx-auto max-h-64 w-auto object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Feijoada</h3>
                <p className="text-gray-600 mb-4">
                  Uma feijoada feita no fogão à lenha é aquele prato perfeito para
                  ser degustado com arroz, couve e laranja. É uma iguaria que deixa todos
                  com água na boca.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#D64933] font-bold">R$ 35,00/kg</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="./Imgs/lasanha.jpeg"
                alt="Lasanha de Frango"
                className="mx-auto max-h-64 w-auto object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Lasanha de Frango</h3>
                <p className="text-gray-600 mb-4">
                  A combinação perfeita de frango desfiado e molho especial, tem
                  como resultado um sabor inconfundível. Essa lasanha não passa por desapercebida
                  aos olhos de quem se propõe a degustar.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#D64933] font-bold">R$ 35,00</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="./Imgs/Lasanha-Palmito.png"
                alt="Lasanha de Palmito com Alho Poró"
                className="mx-auto max-h-64 w-auto object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Lasanha de Palmito com Alho Poró</h3>
                <p className="text-gray-600 mb-4">
                  A combinação perfeita de palmito com alho poró, tem
                  como resultado um sabor inconfundível. Essa lasanha não passa por desapercebida
                  aos olhos de quem se propõe a degustar.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#D64933] font-bold">R$ 40,00</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mini Pizzas Section */}
      <section id="mini-pizzas" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Mini Pizzas</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="./Imgs/mini pizza.jfif"
                alt="Mini Pizza Mussarela com Frango"
                className="mx-auto max-h-64 w-auto object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Mussarela com Frango</h3>
                <p className="text-gray-600 mb-4">
                  Uma massa que derrete na boca com a combinação perfeita do frango
                  e a mussarela que vão encantar o seu paladar.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#D64933] font-bold">R$ 6,00</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="./Imgs/mini pizza presunto.jfif"
                alt="Mini Pizza Mussarela com Presunto"
                className="mx-auto max-h-64 w-auto object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Mussarela com Presunto</h3>
                <p className="text-gray-600 mb-4">
                  Uma massa saborosa, que derrete na boca, com aquele sabor
                  inigualável do presunto, mussarela, tomate e cebola.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#D64933] font-bold">R$ 6,00</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="./Imgs/mini pizza calabresa.jfif"
                alt="Mini Pizza Mussarela com Calabresa"
                className="mx-auto max-h-64 w-auto object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Mussarela com Calabresa</h3>
                <p className="text-gray-600 mb-4">
                  O sabor marcante da calabresa é o destaque dessa delícia. É uma ótima
                  opção para um jantar despojado ou um lanche elaborado.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#D64933] font-bold">R$ 6,00</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Tortas Section */}
      <section id="tortas" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Tortas</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="./Imgs/torta bacalhau.jpeg"
                alt="Torta de Bacalhau"
                className="mx-auto max-h-64 w-auto object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Torta de Bacalhau</h3>
                <p className="text-gray-600 mb-4">
                  Perfeita para qualquer ocasião, a nossa
                  torta de bacalhau é uma celebração da culinária
                  portuguesa, levando você direto ao coração de Portugal
                  em cada mordida. Acompanhe com uma salada verde ou uma
                  taça de vinho branco para uma experiência completa.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#D64933] font-bold">R$ 85,00</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="./Imgs/torta quiche com frango.jpg"
                alt="Quiche de Frango"
                className="mx-auto max-h-64 w-auto object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Quiche com Frango</h3>
                <p className="text-gray-600 mb-4">
                  A palavra Quiche "vem do alemão Küchen" (torta). Uma torta aberta
                  que combina perfeitamente com café, suco, refrigerante. A levedura do vinho branco é uma
                  ótima escolha para harmonizar com a suavidade da quiche.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#D64933] font-bold">R$ 95,00</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="./Imgs/torta alho poro.png"
                alt="Torta de Palmito"
                className="mx-auto max-h-64 w-auto object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Torta de Palmito e Alho Poró</h3>
                <p className="text-gray-600 mb-4">
                  Descubra a nossa Torta de Palmito e Alho-Poró,
                  uma combinação delicada e sofisticada que conquista
                  paladares exigentes. Feita com palmito macio e alho-poró
                  levemente caramelizado, essa torta une a suavidade dos
                  ingredientes a um cremoso recheio de creme de leite fresco,
                  queijo derretido para um sabor único.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#D64933] font-bold">R$ 119,00</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="./Imgs/torta-damasco.png"
                alt="Torta de Quiche com Peito de Peru, Damasco e Abacaxi"
                className="mx-auto max-h-64 w-auto object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Torta de Quiche com Peito de Peru, Damasco e Abacaxi</h3>
                <p className="text-gray-600 mb-4">
                  Surpreenda-se com a nossa Quiche de Peito de Peru,
                  Damasco e Abacaxi, uma combinação única e irresistível que une o
                  sabor suave do peito de peru defumado com a doçura natural do
                  damasco e o toque tropical do abacaxi.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#D64933] font-bold">R$ 119,00</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="./Imgs/torta de frango legumes.jpg"
                alt="Torta de Frango com Quejo e Legumes"
                className="mx-auto max-h-64 w-auto object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Torta de Frango com Quejo e Legumes</h3>
                <p className="text-gray-600 mb-4">
                  Delicie-se com a nossa Torta de Frango com Queijo e
                  Legumes, uma opção reconfortante e saborosa que combina o melhor
                  dos ingredientes em uma receita caseira e irresistível. Ideal para
                  um almoço em família, um jantar aconchegante ou até mesmo para
                  levar para um piquenique, essa torta é a cara do conforto que só a
                  comida caseira proporciona.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#D64933] font-bold">R$ 89,00</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Salgados Unidade Section */}
      <section id="salgados-unidade" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Salgados Unidade</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="./Imgs/quiche grande.jfif"
                alt="Quiche Grande"
                className="mx-auto max-h-64 w-auto object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Quiche Grande</h3>
                <p className="text-gray-600 mb-4">
                  A palavra Quiche "vem do alemão Küchen" (torta). Uma torta aberta
                  que combina perfeitamente com café, suco, refrigerante. A levedura do vinho branco é uma
                  ótima escolha para harmonizar com a suavidade da quiche.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#D64933] font-bold">R$ 7,00</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="./Imgs/tortinha de frango.jfif"
                alt="Tortinha de Frango"
                className="mx-auto max-h-64 w-auto object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Tortinha de Frango</h3>
                <p className="text-gray-600 mb-4">
                  É uma deliciosa opção para uma refeição ou lanche. A massa leve
                  e o sabor do filé de frango especialmente temperado, cria uma experiência
                  única para um lanche individual.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#D64933] font-bold">R$ 8,00</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="./Imgs/tortinha de quiche.jfif"
                alt="Tortinha de quiche"
                className="mx-auto max-h-64 w-auto object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Tortinha de quiche</h3>
                <p className="text-gray-600 mb-4">
                  Ideal para um lanche rápido. A suculência do frango e a cobertura
                  com creme especial é sem dúvida uma combinação perfeita que proporciona um
                  incomparável sabor.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#D64933] font-bold">R$ 9,00</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="./Imgs/empada de queijo.jpg"
                alt="Empada de Queijo"
               className="mx-auto max-h-64 w-auto object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Empada de Queijo</h3>
                <p className="text-gray-600 mb-4">
                  Sucesso em  qualquer festa, a popular empadinha é uma opção certeira
                  de salgado para servir aos convidados. A escolha assertiva do queijo garante um
                  recheio macio e quase cremoso.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#D64933] font-bold">R$ 3,00</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="/Imgs/empada de bacalhau Unidade.jfif"
                alt="Empada de bacalhau"
                className="mx-auto max-h-64 w-auto object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Empada de bacalhau</h3>
                <p className="text-gray-600 mb-4">
                  Comer bacalhau é um hábito saudável para o corpo. Com uma massa
                  deliciosa que desmancha na boca é uma empada surreal. Experimente!
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#D64933] font-bold">R$ 3,50</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="./Imgs/empada palmito.jfif"
                alt="Empada de palmito com alho poró"
                className="mx-auto max-h-64 w-auto object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Empada de palmito com alho poró</h3>
                <p className="text-gray-600 mb-4">
                  Essa empada dispensa falar da massa. Seu recheio leve
                  e marcante pela combinação do palmito com alho poró, proporciona prazer
                  ao saborear.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#D64933] font-bold">R$ 3,50</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Salgados Bandeja Section */}
      <section id="salgados-bandeja" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Salgados Bandeja</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="./Imgs/canape.jfif"
                alt="Bandeja de Canapé"
                className="mx-auto max-h-64 w-auto object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Bandeja de Canapé</h3>
                <p className="text-gray-600 mb-4">
                  Servido como aperitivo ou para um lanche, o canapé é uma
                  combinação de iguaria tendo origem na Grécia e que, nós brasileiros amamos.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#D64933] font-bold">R$ 22,00 (15 un)</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="./Imgs/bandeja croquete pequeno.jfif"
                alt="Bandeja de Croquete pequeno"
                className="mx-auto max-h-64 w-auto object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Bandeja de Croquete pequeno</h3>
                <p className="text-gray-600 mb-4">
                  Imagine um croquete cuja a receita é compartilhada
                  de geração a geração. A combinação dos ingredientes cria uma sintonia
                  perfeita entre o sabor e a suave picância. Irresistível e com sabor inigualável.
                  Sucesso como aperitivo ou em qualquer festa para servir os convidados.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#D64933] font-bold">R$ 26,00 (15 un)</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="./Imgs/bandeja croquete grande.jfif"
                alt="Bandeja de croquete grande"
                className="mx-auto max-h-64 w-auto object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Bandeja de croquete grande</h3>
                <p className="text-gray-600 mb-4">
                  Imagine um croquete cuja a receita é compartilhada
                  de geração a geração. A combinação dos ingredientes cria uma sintonia
                  perfeita entre o sabor e a suave picância. Irresistível e com sabor inigualável.
                  Sucesso como aperitivo ou em qualquer festa para servir os convidados.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#D64933] font-bold">R$ 48,00 (8 un)</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="./Imgs/empada quiche.jfif"
                alt="Bandeja de quiche grande"
                className="mx-auto max-h-64 w-auto object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Bandeja de quiche grande</h3>
                <p className="text-gray-600 mb-4">
                  A palavra Quiche "vem do alemão Küchen" (torta). Uma torta aberta
                  que combina perfeitamente com café, suco, refrigerante. O vinho branco é uma
                  ótima escolha para harmonizar com a levedura e suavidade da quiche.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#D64933] font-bold">R$ 12,00 (2 un)</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="./Imgs/mini quiche peito peru damasco.jpg"
                alt="Bandeja de mini quiche"
                className="mx-auto max-h-64 w-auto object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Bandeja de mini quiche</h3>
                <p className="text-gray-600 mb-4">
                  Apresentamos a nossa Bandeja de Mini Quiches, uma
                  seleção encantadora de pequenas delícias que conquistam tanto os
                  olhos quanto o paladar.Perfeitas para coquetéis, festas ou eventos
                  especiais, essas mini quiches são práticas, elegantes e
                  irresistíveis.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#D64933] font-bold">R$ 30,00 (20 un)</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="./Imgs/mini empada de queijo.jpg"
                alt="Bandeja de mini empada de queijo"
                className="mx-auto max-h-64 w-auto object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Bandeja de mini empada de queijo</h3>
                <p className="text-gray-600 mb-4">
                  Sucesso em  qualquer festa, a popular empadinha é uma opção certeira
                  de salgado para servir aos convidados. A escolha assertiva do queijo garante um
                  recheio massio e quase cremoso.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#D64933] font-bold">R$ 24,00 (20 un)</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="./Imgs/bandeja empada queijo.jfif"
                alt="Bandeja de Empada de queijo"
                className="mx-auto max-h-64 w-auto object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Bandeja de Empada de queijo</h3>
                <p className="text-gray-600 mb-4">
                  Sucesso em  qualquer festa, a popular empadinha é uma opção certeira
                  de salgado para servir aos convidados. A escolha assertiva do queijo garante um
                  recheio massio e quase cremoso.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#D64933] font-bold">R$ 24,00 (8 un)</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="./Imgs/empada bacalhau.jpg"
                alt="Bandeja de empada de bacalhau"
                className="mx-auto max-h-64 w-auto object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Bandeja de empada de bacalhau</h3>
                <p className="text-gray-600 mb-4">
                  Comer bacalhau é um hábito saudável para o corpo. Com uma massa
                  deliciosa que desmancha na boca é uma empada surreal. Experimente!
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#D64933] font-bold">R$ 28,00 (8 un)</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="./Imgs/bandeja palmito com alho poro.jpg"
                alt="Bandeja de empada de palmito com alho poró"
                className="mx-auto max-h-64 w-auto object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Bandeja de empada de palmito com alho poró</h3>
                <p className="text-gray-600 mb-4">
                  Essa empada dispensa falar da massa. Seu recheio leve
                  e marcante pela combinação do palmito com alho poró, proporciona prazer
                  ao saborear.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#D64933] font-bold">R$ 28,00 (8 un)</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2B2D42] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Saborear</h3>
              <p className="text-gray-300">
                Produtos feitos artesanalmente com amor.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <div className="space-y-2">
                <a href="tel:+5537991111223" className="flex items-center gap-2 text-gray-300 hover:text-white">
                  <Phone size={18} />
                  (37) 99111-1223
                </a>
                <a href="https://www.instagram.com/saborear_quituteartesanal" className="flex items-center gap-2 text-gray-300 hover:text-white">
                  <Instagram size={18} />
                  @saborear_quituteartesanal
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Horário</h3>
              <p className="text-gray-300">
                Segunda a Sábado<br />
                8:00 - 18:00
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
            <p>&copy; 2024 Saborear. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;