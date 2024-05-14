import TopBar from "./components/TopBar";
import "./globals.scss";

export const metadata = {
  title: "Food Journal App",
  description: "Food journal app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        {children}
      </body>
    </html>
  );
}
