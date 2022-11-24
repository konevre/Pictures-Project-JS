const modals = () => {

    let triggerPressed = false;
    const openByScroll = (selector) => {
        window.addEventListener("scroll", () => {
            if (!triggerPressed && (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight)) {
                document.querySelector(selector).click();
            }
        });
    }

    const bindModals = (triggerSelector, popupSelector, closeSelector, destroy = false) => {
        const trigger = document.querySelectorAll(triggerSelector),
              popup = document.querySelector(popupSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll("[data-modal]");

        // SHOW MODAL
        trigger.forEach(item => {
            item.addEventListener("click", () => {
                triggerPressed = true;
                // clearInterval(id);
                windows.forEach(window => {
                    window.style.display = "none";
                    window.classList.add("animated", "fadeIn");
                });

                if (destroy) {
                    item.remove();
                }

                popup.style.display = "block";
                document.body.style.overflow = "hidden";
            });
        });

        // CLOSE MODAL
        popup.addEventListener("click", (e) => {
            if (e.target === popup || e.target === close) {
                popup.style.display = "none";
                document.body.style.overflow = "visible";
            }

        });
    };

    

    // const id = setTimeout(() => {
    //     document.querySelector(".popup-consultation").style.display = "block";
    //     document.body.style.overflow = "hidden";
    // }, 3000);

    bindModals(".button-design", ".popup-design", ".popup-design .popup-close");
    bindModals(".button-consultation", ".popup-consultation", ".popup-consultation .popup-close");
    bindModals(".fixed-gift", ".popup-gift", ".popup-gift .popup-close", true);
    openByScroll(".fixed-gift");
    

};

export default modals;