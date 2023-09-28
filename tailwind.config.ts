import { type Config } from "tailwindcss";
import { withUt } from "uploadthing/tw";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;

export default withUt(config);
