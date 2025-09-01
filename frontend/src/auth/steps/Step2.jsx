export default function Step1({ formData, setFormData, title }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="w-full border px-3 py-2 rounded mb-3"
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        className="w-full border px-3 py-2 rounded"
      />
    </div>
  );
}
 