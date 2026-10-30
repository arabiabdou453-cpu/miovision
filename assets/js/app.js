(()=>{var e,r={80:()=>{window.addEventListener("load",(function(){var e=document.querySelector("#primary-menu");document.querySelector("#primary-menu-toggle").addEventListener("click",(function(r){r.preventDefault(),e.classList.toggle("hidden")}))}))},662:()=>{},797:()=>{}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={exports:{}};return r[e](i,i.exports,n),i.exports}n.m=r,e=[],n.O=(r,t,o,i)=>{if(!t){var a=1/0;for(u=0;u<e.length;u++){for(var[t,o,i]=e[u],l=!0,s=0;s<t.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](t[s])))?t.splice(s--,1):(l=!1,i<a&&(a=i));if(l){e.splice(u--,1);var v=o();void 0!==v&&(r=v)}}return r}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[t,o,i]},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={773:0,842:0,170:0};n.O.j=r=>0===e[r];var r=(r,t)=>{var o,i,[a,l,s]=t,v=0;if(a.some((r=>0!==e[r]))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(s)var u=s(n)}for(r&&r(t);v<a.length;v++)i=a[v],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},t=self.webpackChunktailpress=self.webpackChunktailpress||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),n.O(void 0,[842,170],(()=>n(80))),n.O(void 0,[842,170],(()=>n(662)));var o=n.O(void 0,[842,170],(()=>n(797)));o=n.O(o)})();

document.addEventListener('DOMContentLoaded', function() {
    // Function to adjust the top of header
    function adjustHeaderTop() {
        const stickyBar = document.querySelector('.mysticky-welcomebar-fixed');
        const header = document.querySelector('header');

        if (stickyBar) {
            const stickyBarStyles = window.getComputedStyle(stickyBar);
            const stickyBarHeight = stickyBar.offsetHeight;

            if (stickyBarStyles.display !== 'none') {
                if (header) {
                    header.style.top = (stickyBarHeight - 1) + 'px';
                }
            } else {
                if (header) {
                    header.style.top = '0';
                }
            }
        }
    }
    adjustHeaderTop();
    window.addEventListener('resize', adjustHeaderTop);
});

//navbar with img update
jQuery(document).ready(function($) {
		
	// add class navbar-with-img
    var currentUrl = window.location.href;
    if (currentUrl.indexOf('home-nav-menu-update') !== -1) {
        $('#mega-menu-wrap-primary').addClass('navbar-with-img');
    }
	
	// "columns" to .mega-menu-row
	document.querySelector('.navbar-with-img>#mega-menu-primary>li>ul>li.mega-menu-row').classList.add('columns');
	
	// for 2nd layer on the navmenu for product
	
	document.querySelectorAll('.navbar-with-img>#mega-menu-primary>li>ul>li.mega-menu-row>ul.mega-sub-menu>li>ul>li>a.mega-menu-link').forEach(function(link) {
		link.addEventListener('click', function(e) {
			e.preventDefault();
			// Remove 'active' class from all links
			document.querySelectorAll('.navbar-with-img>#mega-menu-primary>li>ul>li.mega-menu-row>ul.mega-sub-menu>li>ul>li>a.mega-menu-link').forEach(function(item) {
				item.classList.remove('active');
			});

			// Add 'active' class to the clicked link
			this.classList.add('active');

			// Remove 'menu-open' class from all siblings
			document.querySelectorAll('.navbar-with-img>#mega-menu-primary>li>ul>li.mega-menu-row>ul.mega-sub-menu>li>ul>li>a.mega-menu-link + ul.mega-sub-menu').forEach(function(sibling) {
				sibling.classList.remove('active');
			});

			// Add 'menu-open' class to the sibling right next to the clicked link
			var nextSibling = this.nextElementSibling;
			if (nextSibling) {
				nextSibling.classList.add('active');
			}
			
			// Check if the clicked link is the first child of its parent <ul>
			var parentUl = this.closest('ul');
			if (this.parentElement === parentUl.firstElementChild) {
				// Add 'columns' class to the closest 'mega-menu-row' ancestor
				var megaMenuRow = this.closest('.mega-menu-row');
				if (megaMenuRow) {
					megaMenuRow.classList.add('columns');
				}
			} else {
				// If not the first child, remove 'columns' class from 'mega-menu-row'
				var megaMenuRow = this.closest('.mega-menu-row');
				if (megaMenuRow) {
					megaMenuRow.classList.remove('columns');
				}
			}
			// Change the src of the img based on which link is clicked
        var productImg = document.querySelector('.nav-product-img>ul>li>img');
        if (productImg) {
			if (this.closest('li').matches(':nth-child(1)')) {
					productImg.src = "https://miovision.com/wp-content/uploads/2024/09/nav-product-img.png";
					productImg.srcset = "https://miovision.com/wp-content/uploads/2024/09/nav-product-img.png";
				} else if (this.closest('li').matches(':nth-child(2)')) {
					productImg.src = "https://miovision.com/wp-content/uploads/2024/09/Frame-98-2.png";
					productImg.srcset = "https://miovision.com/wp-content/uploads/2024/09/Frame-98-2.png";
				} else if (this.closest('li').matches(':nth-child(3)')) {
					productImg.src = "https://miovision.com/wp-content/uploads/2024/09/Frame-98.png";
					productImg.srcset = "https://miovision.com/wp-content/uploads/2024/09/Frame-98.png";
				}
			}
		});
	});
	
	// setting first one as default
	document.querySelector('.navbar-with-img>#mega-menu-primary>li>ul>li.mega-menu-row>ul.mega-sub-menu>li>ul>li:first-child>a.mega-menu-link').classList.add('active');
	document.querySelector('.navbar-with-img>#mega-menu-primary>li>ul>li.mega-menu-row>ul.mega-sub-menu>li>ul>li>a.mega-menu-link').classList.add('active');
	document.querySelector('.navbar-with-img>#mega-menu-primary>li>ul>li.mega-menu-row>ul.mega-sub-menu>li>ul>li>a.mega-menu-link + ul.mega-sub-menu').classList.add('active');
});

// mena language toggle btn
    function toggleURL() {
        let url = window.location.href;
        let newUrl;

        if (url.includes('#')) {
            url = url.split('#')[0];  
        }

            if (url.endsWith('/ar') || url.endsWith('/ar/')) {
                // Remove '/ar' or '/ar/' from the URL
                newUrl = url.replace(/\/ar\/?$/, '');
            } else {
                // Add '/ar' to the URL
                newUrl = url + (url.endsWith('/') ? 'ar' : '/ar');
            }
            window.location.href = newUrl;
    }

    function checkURL() {
        let url = window.location.href;
        const toggleButton = document.querySelector('.toggle-btn');
        const englishButton = document.querySelector('.toggle-btn--english');
        const arabicButton = document.querySelector('.toggle-btn--arabic');
        const button = document.getElementById('toggleBtn');
        if ((url.includes('/opticom-evp-emergency-response-mena') || url.includes('/scout-plus-safety-mena'))) {
                toggleButton.style.display = 'flex';
            if (url.endsWith('/ar') || url.endsWith('/ar/')) {
                englishButton.classList.remove('active');
                arabicButton.classList.add('active');
            } else {
                arabicButton.classList.remove('active');
                englishButton.classList.add('active');
            }
        }
    }

    // Run checkURL when the page loads
    window.onload = checkURL;
    // $( document ).ready(function() {
    //     checkURL()
    // });