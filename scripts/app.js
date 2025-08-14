import { renderHomePage } from '../pages/HomePage.js';

const root = document.getElementById('root');

const routes = {
    '/': renderHomePage
};

const renderContent = () => {
    const path = window.location.pathname;
    const renderFunction = routes[path] || routes['/']; 
    root.innerHTML = renderFunction();
    lucide.createIcons();
};

document.addEventListener('DOMContentLoaded', () => {
    renderContent();
});
