import { ToolCard } from './ToolCard.js';
import tools from '../data/tools.js';

export function ToolGrid() {
    const toolsHtml = tools.map(tool => ToolCard(tool)).join('');

    return `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            ${toolsHtml}
        </div>
    `;
}
