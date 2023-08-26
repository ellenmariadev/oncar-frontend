import "../sass/main.scss";
import type { Metadata } from "next";
import { Inria_Sans } from "next/font/google";

const inriaSans = Inria_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Oncar",
  description: "Bem-vindo a oncar. Aqui você encontra os melhores veículos!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inriaSans.className}>{children}</body>
    </html>
  );
}
