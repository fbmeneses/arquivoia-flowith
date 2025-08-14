export function ToolCard(tool) {
    const tagsHtml = tool.categories.map(tag => `
        <span class="inline-block bg-gray-700 rounded-full px-3 py-1 text-xs font-semibold text-gray-300">${tag}</span>
    `).join(' ');

    return `
        <div class="bg-gray-800/50 border border-gray-700/50 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/10 hover:border-gray-600 transition-all duration-300 flex flex-col h-full">
            <div class="p-6 flex-grow">
                <div class="flex items-center mb-4">
                    <div class="w-12 h-12 flex items-center justify-center bg-gray-700 rounded-lg mr-4">
                        <i data-lucide="${tool.icon}" class="w-6 h-6 text-cyan-400"></i>
                    </div>
                    <h3 class="text-xl font-bold text-white">${tool.name}</h3>
                </div>
                <p class="text-gray-400 text-sm mb-4 h-20 overflow-hidden">
                    ${tool.description}
                </p>
            </div>
            <div class="px-6 pt-2 pb-4 border-t border-gray-700/50">
                <div class="flex flex-wrap gap-2">
                    ${tagsHtml}
                </div>
            </div>
        </div>
    `;
}
