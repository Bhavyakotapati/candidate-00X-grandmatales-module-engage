export const metadata = {
  title: 'Grandmatales',
  description: 'Grandmatales App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}