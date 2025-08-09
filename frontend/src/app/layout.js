export const metadata = {
  title: 'Doctor Finder',
  description: 'Search and view doctor listings'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Doctor Finder</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
