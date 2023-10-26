var navBar = document.getElementById("navBar");

    function showMenu(){
        navBar.style.right="0";
    }
    function hideMenu(){
        navBar.style.right="-200px";
    }

    function openSocialLink(socialMedia) {
        if (socialMedia === 'facebook') {
            window.open('https://www.facebook.com', '_blank');
        } 
        if (socialMedia === 'twitter') {
            window.open('https://www.twitter.com', '_blank');
        } 
        if (socialMedia === 'linkedin') {
            window.open('https://www.linkedin.com', '_blank');
        } 
        else if (socialMedia === 'instagram') {
            window.open('https://www.instagram.com', '_blank');
        }
    }

    function submit(name){
        if (name === ' '){
            alert('Name is required');
            return;
        }
    }