export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <title>HLS Global Group</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}