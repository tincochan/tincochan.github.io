/* Please add this if you like it! */
// 注册service worker，service worker脚本文件为sw.js
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js').then(function () {
        console.log('Service Worker 注册成功');
    });
}

(function ($) {
	"use strict";

	//Page animation
	const element = document.querySelector('.title')
	element.classList.add('animated', 'bounceInDown')

	const element2 = document.querySelector('.logo-wrap')
	element2.classList.add('animated', 'flipInX')

	//Page cursors
	document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
		t.style.left = n.clientX + "px",
			t.style.top = n.clientY + "px",
			e.style.left = n.clientX + "px",
			e.style.top = n.clientY + "px",
			i.style.left = n.clientX + "px",
			i.style.top = n.clientY + "px"
	});
	var t = document.getElementById("cursor"),
		e = document.getElementById("cursor2"),
		i = document.getElementById("cursor3");

	function n(t) {
		e.classList.add("hover"), i.classList.add("hover")
	}

	function s(t) {
		e.classList.remove("hover"), i.classList.remove("hover")
	}
	s();
	for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
		o(r[a])
	}

	function o(t) {
		t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
	}

	//Navigation

	var app = function () {
		var body = undefined;
		var menu = undefined;
		var menuItems = undefined;
		var init = function init() {
			body = document.querySelector('body');
			menu = document.querySelector('.menu-icon');
			menuItems = document.querySelectorAll('.nav__list-item');
			applyListeners();
		};
		var applyListeners = function applyListeners() {
			menu.addEventListener('click', function () {
				return toggleClass(body, 'nav-active');
			});
		};
		var toggleClass = function toggleClass(element, stringClass) {
			if (element.classList.contains(stringClass)) element.classList.remove(stringClass);
			else element.classList.add(stringClass);
		};
		init();
	}();


	//Switch light/dark

	$("#switch").on('click', function () {
		if ($("body").hasClass("light")) {
			$("body").removeClass("light");
			$("#switch").removeClass("switched");
		} else {
			$("body").addClass("light");
			$("#switch").addClass("switched");
		}
	});

})(jQuery);

$('.tm').hover(function () {
	$('.tm').not(this).toggleClass('hover');
})