/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"]
      },
      colors: {
        brand: {
          indigo: "#4F46E5",
          emerald: "#10B981",
          slate: "#334155",
          mist: "#F8FAFC"
        }
      },
      boxShadow: {
        fintech: "0 22px 70px rgba(15, 23, 42, 0.10)",
        glass: "0 18px 60px rgba(79, 70, 229, 0.16)",
        soft: "0 12px 40px rgba(15, 23, 42, 0.08)"
      },
      backgroundImage: {
        mesh: "radial-gradient(circle at 10% 10%, rgba(79,70,229,.20), transparent 24%), radial-gradient(circle at 85% 12%, rgba(16,185,129,.16), transparent 24%), radial-gradient(circle at 50% 95%, rgba(99,102,241,.12), transparent 30%)"
      }
    }
  },
  plugins: []
};
