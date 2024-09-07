document.addEventListener("DOMContentLoaded", function() {
    var options = {
        strings: ["CREATIVE","fda","CREATIVE"], 
        typeSpeed: 150,
        backSpeed: 150,
        loop: true
    };

    try {
        var typed = new Typed(".title_color", options);
    } catch (error) {
        console.error("Error initializing Typed.js:", error); 
    }
});
