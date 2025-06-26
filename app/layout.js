// app/layout.js
export const metadata = {
  title: "Grandmatales",
  description: "Grandmatales app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}