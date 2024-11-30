"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { store } from "../store/store";
import { Provider } from "react-redux";
import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Provider store={store}>
          <div className="container py-4">{children}</div>
        </Provider>
      </body>
    </html>
  );
}
