import { Saira } from "next/font/google";
import "./globals.css";

const fontFamily = Saira({ subsets: ["latin"] });

export const metadata = {
  title: "Projeto Web",
  description: "Eduardo Alves",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fontFamily.className}>{children}</body>
    </html>
  );
}
