function MacaronCard({ name, image, description }) {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
        <div className="relative">
            <img 
                src={image} 
                alt={name} 
                className="w-full aspect-square object-cover" 
            />
        </div> 
        <div className="p-6 text-center">
            <h2 className="text-xl font-bold text-gray-900 mt-1 mb-2">{name}</h2>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-10">Macaron Collection</h1>

        {/* responsive taildwind grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"> 

        <MacaronCard name="Beetroot Macaron" image="src\assets\beetrootmacaron.jpg" description="A earthy, sweet delight." />
        <MacaronCard name="Chocolate Macaron" image="src\assets\chocolatemacaron.webp" description="Rich and decadent." />
        <MacaronCard name="Cotton Candy Macaron" image="src\assets\cottonmacaron.jpg" description="A sweet, creamy treat." />
        <MacaronCard name="Lemon Macaron" image="src\assets\lemonmacaron.jpg" description="Soft and creamy." />
        <MacaronCard name="Matcha Macaron" image="src\assets\matchamacaron.jpg" description="A delicate, green treat." />
        <MacaronCard name="Passionfruit Macaron" image="src\assets\passionfruitmacaron.webp" description="A tropical treat." />
        <MacaronCard name="Strawberry Macaron" image="src\assets\strawberrymacaron.jpg" description="A vibrant and fruity delight." />
      </div>
    </div>
  );
}
