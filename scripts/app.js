import { onAuthStateChange, getCurrentUser } from './auth.js';
import { renderHomePage } from '../pages/HomePage.js';
import { renderLoginPage } from '../pages/LoginPage.js';
import { renderSignupPage } from '../pages/SignupPage.js';
import { renderPasswordRecoveryPage } from '../pages/PasswordRecoveryPage.js';
import { renderProfilePage } from '../pages/ProfilePage.js';
import { Header, attachHeaderListeners } from '../components/Header.js';

const root = document.getElementById('root');

const routes = {
    '': renderHomePage,
    '/': renderHomePage,
    '#/login': renderLoginPage,
    '#/signup': renderSignupPage,
    '#/recover-password': renderPasswordRecoveryPage,
    '#/profile': renderProfilePage,
};

const protectedRoutes = ['#/profile'];

function showLoading() {
    root.innerHTML = `<div class="flex justify-center items-center h-screen"><i data-lucide="loader-2" class="animate-spin h-10 w-10 text-cyan-400"></i></div>`;
    lucide.createIcons();
}

async function router() {
    showLoading();
    const hash = window.location.hash || '#/';
    const path = hash === '#/' ? '/' : hash;

    const user = getCurrentUser();

    if (protectedRoutes.includes(path) && !user) {
        window.location.hash = '#/login';
        return;
    }

    const renderFunction = routes[path] || routes['/'];
    
    await renderFunction(root);
    lucide.createIcons();
}

function renderHeader() {
    const headerContainer = document.createElement('div');
    headerContainer.innerHTML = Header();
    
    const currentHeader = root.querySelector('header');
    if (currentHeader) {
        currentHeader.parentElement.replaceChild(headerContainer.firstElementChild, currentHeader);
    } else {
        root.prepend(headerContainer.firstElementChild);
    }
    attachHeaderListeners();
}


document.addEventListener('DOMContentLoaded', () => {
    onAuthStateChange((user) => {
        console.log('Auth state changed, user:', user);
        renderHeader();
        router();
    });
    
    window.addEventListener('hashchange', router);
});
