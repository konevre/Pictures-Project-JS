const filter = () => {
    const menu = document.querySelector(".portfolio-menu"),
          menuItems = document.querySelectorAll("li"),
          portfolio = document.querySelector(".portfolio-wrapper"),
          portfolioItems = document.querySelectorAll(".portfolio-block"),
          no = document.querySelector(".portfolio-no");

    const makeActive = (target) => {
        menuItems.forEach(item => {
            item.classList.remove("active");
            target.classList.add("active")
        })
    }

    const showPortfolio = (itemClass) => {
        portfolioItems.forEach(item => {
            item.style.display = "none";
            item.classList.remove("animated", "fadeIn");
            no.style.display = "none";
            no.classList.remove("animated", "fadeIn");
            
            if (item.classList.contains(itemClass)) {
                console.log(item);
                item.classList.add("animated", "fadeIn");
                item.style.display = "block";
                portfolio.style.justifyContent = "center";
            } 
            if (itemClass === "granddad" || itemClass === "grandmother") {
                no.style.display = "block";
                no.classList.add("animated", "fadeIn");
            }
        })
    }

    
    menu.addEventListener("click", (e) => {
        const target = e.target,
              itemClass = target.classList[0];
        
        makeActive(target);
        showPortfolio(itemClass);
    })
};

export default filter;