import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";
import filter from "./modules/filter";
import showSizes from "./modules/showSizes";
import collapse from "./modules/collapse";
import burger from "./modules/burger";
import drop from "./modules/drop";



window.addEventListener("DOMContentLoaded", () => {
    "use strict";

    modals();
    sliders(".feedback-slider-item", "horizontal", ".main-prev-btn", ".main-next-btn");
    sliders(".main-slider-item", "vertical");
    forms();
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    showMoreStyles(".button-styles", "#styles .row");
    calc("#size", "#material", "#options", ".promocode", ".calc-price");
    filter();
    showSizes(".sizes-block");
    collapse(".accordion-heading");
    burger(".burger-menu", ".burger");
    drop();
});

