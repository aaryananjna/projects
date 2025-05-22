const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll', ()=>{
    if (scrollY > 50){
        navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50', 'dark:bg-transparent');
    }else{
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50', 'dark:bg-transparent');
    }
})

document.getElementById('show-more-btn').addEventListener('click', function(event) {
    event.preventDefault();
    let hiddenProjects = document.getElementById('hidden-projects');
    let showMoreBtn = document.getElementById('show-more-btn');

    if (hiddenProjects.classList.contains('hidden')) {
        hiddenProjects.classList.remove('hidden');
        showMoreBtn.innerHTML = `Show Less
            <img src="right-arrow-bold.png" alt="" class="w-4 dark:hidden">
            <img src="right-arrow-bold-dark.png" alt="" class="w-4 hidden dark:block">`;
    } else {
        hiddenProjects.classList.add('hidden');
        showMoreBtn.innerHTML = `Show More
            <img src="right-arrow-bold.png" alt="" class="w-4 dark:hidden">
            <img src="right-arrow-bold-dark.png" alt="" class="w-4 hidden dark:block">`;
    }
});



// light mode and dark mode

if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.
matchMedia('(prefers-color-scheme: dark)').matches)){
    document.documentElement.classList.add('dark')
    } else  {
        document.documentElement.classList.remove('dark')
    }

    function toggleTheme(){
        document.documentElement.classList.toggle('dark');
        if(document.documentElement.classList.contains('dark')){
            localStorage.theme = 'dark';
        }else{
            localStorage.theme = 'light';
        }
    }