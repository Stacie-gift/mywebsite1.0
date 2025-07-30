import AboutMe from '@/components/AboutMe'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Blog from '@/components/Blog'
import Memories from '@/components/Memories'
import Community from '@/components/Community'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <AboutMe />
        <Projects />
        <Blog />
        <Memories />
        <Community />
        <Contact />
      </div>
      
      <Footer />
    </main>
  )
} 