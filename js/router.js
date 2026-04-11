/**
 * JSweb Smart Router
 * Handles Clean URLs (extensionless) and view transitions.
 */

const JSwebRouter = {
    init() {
        this.handleInitialPath();
        this.bindLinks();
        window.addEventListener('popstate', () => this.handleInitialPath());
    },

    handleInitialPath() {
        const path = window.location.pathname;
        
        // Remove trailing slashes and .html
        if (path.endsWith('.html')) {
            const cleanPath = path.replace(/\.html$/, '');
            window.history.replaceState(null, '', cleanPath);
        }
    },

    bindLinks() {
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (link && link.origin === window.location.origin) {
                const href = link.getAttribute('href');
                
                // If the link has .html, clean it and handle internally if needed
                if (href && href.endsWith('.html')) {
                    e.preventDefault();
                    const cleanHref = href.replace(/\.html$/, '');
                    window.history.pushState(null, '', cleanHref);
                    // Force reload or handle SPA view change here
                    window.location.reload(); 
                }
            }
        });
    }
};

document.addEventListener('DOMContentLoaded', () => JSwebRouter.init());
