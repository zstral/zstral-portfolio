import '@/app/ui/globals.css';
import { roboto } from '@/app/ui/fonts.js';

export const metadata = {
  title: "Portafolio | Rafael Fernández",
  description: "Portafolio de Rafael Fernández con Next.js, React y Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
      </head>
      <body className={`${roboto.className} flex justify-center items-center w-screen h-screen text-white antialiased`}>
        {children}
      </body>
    </html>
  )
};