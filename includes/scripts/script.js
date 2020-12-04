
// ---------------------------- Functions ------------------------
/**
 * Get element by id
 * @param {String} id 
 */
const byId = (id) => document.getElementById(id); // get element by id

/**
 * Get element by query
 * @param {String} query 
 */

const select = (query) => document.querySelector(query); // select element by query

/**
 * Select all elements
 * @param {String} query 
 */

const selectAll = (query) => document.querySelectorAll(query);

/**
 * Show element (by default block)
 * @param {Element} el 
 * @param {String} type 
 */

const show = (el, type) => el.style.display = typeof type === 'undefined' ? 'block' : type; 

/**
 * Hide element
 * @param {Element} el 
 */

const hide = (el) => el.style.display = 'none'; 

/**
 * Toggle an element
 * @param {Element} el 
 * @param {Function} onShow 
 * @param {Function} onHide 
 */
const toggle = (el, onShow, onHide) => {
    let isOnce = true;
    el.addEventListener('click', () => {
        if (isOnce) {
            onShow();
            isOnce = false;
        } else {
            onHide();
            isOnce = true;
        }
    });
}

/**
 * Set a click event listener
 * @param {Element} el 
 * @param {Function} onclick 
 */

const byClicking = (el, onclick) => el.addEventListener('click', onclick);

// ---------------------------- Elements ------------------------
const navIcon = select('.main-page-nav-icon');
const navBox = select('.nav-box');
const navSelectBox = select('.select-box');
const allVideos = selectAll('.video');
const mainPageContent = select('.main-page-content')
const postPage = select('.post-page');
const allNewsMedia = selectAll('.news-media');
const mediaPage = select('.show-media-page');

// ---------------------------- Activity ------------------------
// toggle navbar
toggle(navIcon, () => {
    show(navBox);
}, () => {
    hide(navBox);
});
// toggle selectbox options
toggle(navSelectBox, () => {
    hide(select('.fa.fa-angle-down'));
    show(select('.fa.fa-angle-up'));
    show(select('.options'));
}, () => {
    show(select('.fa.fa-angle-down'));
    hide(select('.fa.fa-angle-up'));
    hide(select('.options'));
});
// by clicking videos
allVideos.forEach(video => {
    byClicking(video, () => {
        show(postPage); // show blog page
        hide(mainPageContent); // hide content 
    });
});
// go home
byClicking(select('.main-page-site-name'), () => {
    hide(postPage); // hide blog page
    hide(mediaPage);
    show(mainPageContent); // show content 
});
byClicking(select('.main-page-logo-holder'), () => {
    hide(postPage); // hide blog page
    hide(mediaPage);
    show(mainPageContent); // show content 
});
// all news media
allNewsMedia.forEach(element => {
    byClicking(element, () => {
        hide(mainPageContent);
        show(mediaPage);
    });
});
// back button
byClicking(select('.back-button'), () => {
    hide(mediaPage);
    show(mainPageContent);
});