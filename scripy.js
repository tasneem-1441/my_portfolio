// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){
            target.scrollIntoView({
                behavior:"smooth"
            });
        }
    });
});


// Hover glow effect
const cards=document.querySelectorAll(".project-card");

cards.forEach(card=>{
    card.addEventListener("mouseenter",()=>{
        card.style.boxShadow="0 10px 25px rgba(0,0,0,0.15)";
    });

    card.addEventListener("mouseleave",()=>{
        card.style.boxShadow="none";
    });
});


// Dynamic footer year
const footer=document.querySelector("footer p");

if(footer){
    const year=new Date().getFullYear();
    footer.innerHTML=`© ${year} Tasneem Shaikh`;
}


// Fade in sections on scroll

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";
        }
    });
},{
    threshold:0.1
});

sections.forEach(section=>{
    section.style.opacity="0";
    section.style.transform="translateY(30px)";
    section.style.transition="all 0.6s ease";

    observer.observe(section);
});
