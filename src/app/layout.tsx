// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import '../app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LLM Project Lifecycle Tracker',
  description: 'Track and manage your LLM project lifecycle efficiently',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
          <main className="min-h-screen bg-background">
            {children}
          </main>
          <Toaster />
          <footer className="bg-background border-t py-4">
              <div className="container mx-auto text-center text-sm text-muted-foreground">
                © 2024 AI Project Lifecycle Tracker
              </div>
            </footer>
           </div>
        </ThemeProvider>
      </body>
    </html>
  )
}