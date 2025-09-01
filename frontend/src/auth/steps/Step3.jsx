export default function Step1({ formData, setFormData, title }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <input
        type="text"
        placeholder="Address"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        className="w-full border px-3 py-2 rounded mb-3"
      />
      <input
        type="text"
        placeholder="Phone"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className="w-full border px-3 py-2 rounded"
      />
    </div>
  );
}
 