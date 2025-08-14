import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';
import { SearchBar } from '../components/SearchBar.js';
import { ToolGrid } from '../components/ToolGrid.js';
import tools from '../data/tools.js';

export function renderHomePage() {
    return `
        <div class="flex flex-col min-h-screen">
            ${Header()}
            <main class="flex-grow">
                <section class="text-center py-20 px-4 sm:px-6 lg:px-8">
                    <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
                        O Universo da Inteligência Artificial em um só Lugar
                    </h1>
                    <p class="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                        Explore, descubra e utilize as melhores ferramentas de IA para otimizar seu trabalho e projetos.
                    </p>
                    ${SearchBar()}
                </section>
                <section class="py-16 px-4 sm:px-6 lg:px-8">
                    ${ToolGrid(tools)}
                </section>
            </main>
            ${Footer()}
        </div>
    `;
}
