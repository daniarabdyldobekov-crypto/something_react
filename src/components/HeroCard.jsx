export default function HeroCard({ name, img, role, description }) {
  return (
    <div className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden max-w-xl hover:scale-[1.02] transition">
      <img
        src={img}
        alt={name}
        className="w-full h-64 object-cover"
      />

      <div className="p-6">
        <h2 className="text-3xl font-bold mb-2">{name}</h2>
        <h4 className="text-gray-600 text-sm mb-4">{role}</h4>
        <p className="text-gray-800 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}