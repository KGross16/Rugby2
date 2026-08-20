export const metadata = {
  title: 'Rugby Enterprise Pathway',
  description: 'High-Performance Athlete Evaluation & Pathway Tracking',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#f9fafb' }}>
        {children}
      </body>
    </html>
  )
}
