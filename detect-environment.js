// detect-environment.js - автоматическое определение платформы
function detectEnvironment() {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /mobile|android|iphone|ipad|phone/i.test(userAgent);
    const isTablet = /tablet|ipad/i.test(userAgent) && !/mobile|phone/i.test(userAgent);
    
    return {
        isMobile: isMobile,
        isTablet: isTablet,
        isDesktop: !isMobile && !isTablet,
        userAgent: userAgent,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height
    };
}

// Экспорт для использования в других файлах
if (typeof module !== 'undefined' && module.exports) {
    module.exports = detectEnvironment;
} else {
    window.detectEnvironment = detectEnvironment;
}
