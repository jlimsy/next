<<<<<<< HEAD
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

=======
>>>>>>> 8a131ac7b3cf9237c24b1791794fbeed6df50c8c
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body className={`${inter.className} antialiased`}>{children}</body>
=======
      <body>{children}</body>
>>>>>>> 8a131ac7b3cf9237c24b1791794fbeed6df50c8c
    </html>
  );
}
