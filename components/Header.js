import { getCurrentUser, signOutUser } from '../scripts/auth.js';

export function Header() {
    const user = getCurrentUser();

    const loggedOutLinks = `
        <a href="#/login" class="text-gray-300 hover:text-white transition-colors duration-200">Login</a>
        <a href="#/signup" class="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 text-sm">
            Cadastre-se
        </a>
    `;

    const loggedInLinks = `
        <a href="#/profile" class="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">Minha Conta</a>
        <button id="logout-button" class="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">Sair</button>
    `;

    return `
        <header class="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800">
            <nav class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-20">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                           <a href="#" class="text-2xl font-bold text-white">
                                Arquivo<span class="text-cyan-400">IA</span>
                           </a>
                        </div>
                         <div class="hidden md:block">
                            <div class="ml-10 flex items-baseline space-x-4">
                                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Catálogo</a>
                                <a href="#/cursos" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Cursos</a>
                                <a href="#/noticias" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Notícias</a>
                                <a href="#/admin" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Admin</a>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        ${user ? loggedInLinks : loggedOutLinks}
                    </div>
                </div>
            </nav>
        </header>
    `;
}

export function attachHeaderListeners() {
    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', async (e) => {
            e.preventDefault();
            await signOutUser();
            window.location.hash = '#/login';
            window.dispatchEvent(new HashChangeEvent("hashchange"));
        });
    }
}
