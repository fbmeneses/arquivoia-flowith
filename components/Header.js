export function Header() {
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
                    </div>
                    <div class="hidden md:block">
                        <div class="ml-10 flex items-baseline space-x-4">
                            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Catálogo</a>
                            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Cursos</a>
                            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Notícias</a>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <button class="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                            Login / Admin
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    `;
}
