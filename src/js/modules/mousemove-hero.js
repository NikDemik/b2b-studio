function mousemoveHero(){ 

    document.addEventListener("mousemove", parallax);
    function parallax(event) {
        this.querySelectorAll(".hero__img-left").forEach((shift) => {
            const position = shift.getAttribute("value");
            const x = (window.innerWidth - event.pageX * position) / 100;
            const y = (window.innerHeight - event.pageY * position) / 100;
        
            shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
            });
        this.querySelectorAll(".hero__img-right").forEach((shift) => {
            const position = shift.getAttribute("value");
            const x = (window.innerWidth - event.pageX * position) / 90;
            const y = (window.innerHeight - event.pageY * position) / 90;
        
            shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
            });
    };
}

export default mousemoveHero;