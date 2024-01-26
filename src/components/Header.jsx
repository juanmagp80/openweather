export default function Header({ city, actualTemp }) {
  return (
    <div className="pt-4 h-30 bg-gray-200 items-start justify-start  font-poppins text-3xl font-bold w-full ">
      <h1>El tiempo en {city}</h1>
      <h2 className="text-2xl font-bold">Hoy {actualTemp}</h2>
    </div>
  );
}
