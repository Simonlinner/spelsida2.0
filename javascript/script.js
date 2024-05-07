function toggleMenu() { // Funktionen toggleMenu() används för att visa eller dölja menyn

    // Hämtar ett HTML-element med klassen "menu" och tilldelar den till variabeln menu.
    var menu = document.querySelector('.menu');

    // Kontrollera om menyn är synlig eller dold
    // Om menyn är dold (display är 'none'), visa den (display blir 'block')
    // Block = Synlig, none = inte synlig
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block'; 
} 