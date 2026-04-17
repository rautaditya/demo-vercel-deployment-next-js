import "./globals.css";

export const metadata = {
  title: "Dental Clinic",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}