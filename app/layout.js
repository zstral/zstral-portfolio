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
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${roboto.className} text-white antialiased`}>
        {children}
      </body>
    </html>
  )
};