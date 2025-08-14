export function SearchBar() {
    return `
        <div class="mt-8 max-w-xl mx-auto">
            <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <i data-lucide="search" class="text-gray-400 w-5 h-5"></i>
                </div>
                <input 
                    type="search" 
                    name="search" 
                    id="search"
                    class="block w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
                    placeholder="Buscar por ferramenta, categoria, função..."
                >
            </div>
        </div>
    `;
}
