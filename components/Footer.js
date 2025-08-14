export function Footer() {
    return `
        <footer class="bg-gray-900 border-t border-gray-800">
            <div class="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p class="text-sm text-gray-400">&copy; ${new Date().getFullYear()} ArquivoIA. Todos os direitos reservados.</p>
                    <div class="flex space-x-6">
                        <a href="#" class="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                            <i data-lucide="twitter" class="w-5 h-5"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                            <i data-lucide="github" class="w-5 h-5"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                           <i data-lucide="linkedin" class="w-5 h-5"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    `;
}
