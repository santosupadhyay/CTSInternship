export default function Step1({ formData, setFormData, title }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4"> {title}</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="w-full border px-3 py-2 rounded mb-3"
      />
    </div>
  );
}
 