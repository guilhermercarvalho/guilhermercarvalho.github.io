import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { Home } from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './components/Blog/BlogPost';
import { About } from './pages/About';
import { Role } from './pages/Roles';
import { Projects } from './pages/Projects';
import Skills from './pages/Skills';
import { Contact } from './pages/Contact';
import { Navigation } from './pages/Navigation';
import { Footer } from './pages/Footer';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<DefaultHome />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="blog/:id" element={<BlogPost />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

function DefaultHome() {
    return (
        <>
            <Home />
            <About />
            <Role />
            <Projects />
            <Skills />
            <Contact />
        </>
    )
}

function Layout() {
    return (
        <div className="min-h-screen static">
            <Navigation />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className="text-4xl font-bold mb-4">404 - Página Não Encontrada</h1>
            <p className="text-lg mb-6">Desculpe, a página que você está procurando não existe.</p>
            <a href="/" className="text-blue-500 hover:underline">
                Voltar para a Página Inicial
            </a>
        </div>
    );
}


export default App;
