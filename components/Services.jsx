export default function Services() {
  return (
    <section className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white shadow p-5 rounded">
        <h2 className="font-bold text-lg">Cleaning</h2>
        <p>Professional dental cleaning service.</p>
      </div>

      <div className="bg-white shadow p-5 rounded">
        <h2 className="font-bold text-lg">Whitening</h2>
        <p>Teeth whitening for a bright smile.</p>
      </div>

      <div className="bg-white shadow p-5 rounded">
        <h2 className="font-bold text-lg">Braces</h2>
        <p>Advanced orthodontic solutions.</p>
      </div>
    </section>
  );
}