//Right Click Disable




var deviceType = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i);
var pageURL, section_array;
var currurl = window.location.pathname;
var res = currurl.split("/");
var index = currurl.lastIndexOf("/") + 1;
var filename = currurl.substr(index);
var otherpagesScrollDone = false, scrollReachedTop = false;
if (window.history.replaceState) {
	window.history.replaceState(null, null, window.location.href);
}


$("body").find("script").each(function () {
	if ($(this).attr("src") == "js/bootstrap.min.js") {
		$(this).after('<script type="text/javascript" src="js/snap.svg-min.js"></script>');
	}
});


var loader_svg = Snap("#loader");
var loader_set;
// Snap.load("../img/loader.svg", function (f) {
// 	loader_set = f.select("svg");
// 	loader_svg.append(loader_set);
// });

$(document).ready(function () {

	//Content Selection Disable
	var element = $("body");

	element.attr({ 'unselectable': 'on' }).css('user-select', 'none').on('selectstart dragstart', false);
	$('body').on('copy', function (e) {
		e.preventDefault();
		return false;
	});

	$("html,body").animate({ scrollTop: 0 }, 600);



	setTimeout(function () {
		$(".loader-wrapper, .blur-div").hide();
	}, 2000);

	$.fn.isOnScreen = function () {
		var win = $(window);
		var viewport = {
			top: win.scrollTop(),
			left: win.scrollLeft()
		};
		viewport.right = viewport.left + win.width();
		viewport.bottom = viewport.top + win.height();
		var bounds = this.offset();
		bounds.right = bounds.left + this.outerWidth();
		bounds.bottom = bounds.top + this.outerHeight();
		return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
	};
	$('[data-toggle="tooltip"]').tooltip();

	$(document).on("click", ".menuIcon, .level2", function () {
		if ($(".menuIcon").hasClass("rotateMenu") == true) {
			$('.overlay-content .sub-ul li:nth-child(3)').animate({ "top": "-40px", "opacity": "0" }, 150);
			setTimeout(function () {
				$('.overlay-content .sub-ul li:nth-child(2)').animate({ "top": "-40px", "opacity": "0" }, 200);
			}, 100);
			setTimeout(function () {
				$('.overlay-content .sub-ul li:first-child').animate({ "top": "-40px", "opacity": "0" }, 200);
			}, 300);
			setTimeout(function () {
				$("#myNav").toggleClass("menuOpen");
				$("body").toggleClass("menuOpen-body");
				$(".menuIcon").toggleClass("rotateMenu");
				$(".menuIcon").children("span").toggle();
				$(".menuIcon").prev(".rippleBlock").toggleClass("active");
				$(".menu-bg").toggleClass("fixed-container");
				if ($(".overlay .level1 .sub-menu").hasClass("visibleSubMenu")) {
					$(".overlay .level1 .sub-menu").css({ "top": "-150%", "opacity": "0" });
					$(".overlay .level1 .sub-menu").removeClass("visibleSubMenu");
				}
			}, 400);
		} else {
			$("#myNav").toggleClass("menuOpen");
			$("body").toggleClass("menuOpen-body");
			$(".menuIcon").toggleClass("rotateMenu");
			$(".menuIcon").children("span").toggle();
			$(".menuIcon").prev(".rippleBlock").toggleClass("active");
			$(".menu-bg").toggleClass("fixed-container");
			if ($(".overlay .level1 .sub-menu").hasClass("visibleSubMenu")) {
				$(".overlay .level1 .sub-menu").css({ "top": "-150%", "opacity": "0" });
				$(".overlay .level1 .sub-menu").removeClass("visibleSubMenu");
			}
			setTimeout(function () {
				$('.overlay-content .sub-ul li:first-child').animate({ "top": 0, 'opacity': 1 }, 300);
				setTimeout(function () {
					$('.overlay-content .sub-ul li:nth-child(2)').animate({ "top": 0, 'opacity': 1 }, 300);
				}, 200);
				setTimeout(function () {
					$('.overlay-content .sub-ul li:nth-child(3)').animate({ "top": 0, 'opacity': 1 }, 300);
				}, 400);
			}, 500);
		}

	});

	$(".goBackBtn").on("click", function () {
		$(this).parent(".sub-menu").css({ "top": "-150%", "opacity": "0" });
	});

	/*Menu Hover Func */

	$(".desktop-menu li").hover(function () {
		$(this).children(".sub-menu-wrapper").stop().fadeIn();
	}, function () {
		$(this).children(".sub-menu-wrapper").stop().fadeOut();
	});


	pageURL = window.location.href;
	pageURL = pageURL.split("/");
	pageURL = pageURL[pageURL.length - 1];

	if (pageURL.search("#") > -1) {
		var has_token = pageURL.split("#");
		has_token = has_token[has_token.length - 1];
		if (has_token != "") {
			if (window.innerWidth > 575) {
				setTimeout(function () {
					$("html,body").animate({ scrollTop: $("#" + has_token).offset().top - 53.38 }, 1000);
				}, 500);
			} else {
				setTimeout(function () {
					$("html,body").animate({ scrollTop: $("#" + has_token).offset().top - 48.19 }, 1000);
				}, 500);
			}
		}
	} else {
		$("html,body").animate({ scrollTop: 0 }, 1000);
	}
	if (pageURL == "index.html" || pageURL == '') {
		section_array = [{ name: "k-services", variable: false }, { name: "k-soa", variable: false }, { name: "k-fp", variable: false }, { name: "k-ol", variable: false }];


		if (window.innerWidth < 576) {
			$("#carousel-example-1z .carousel-item:first-child .view .bannerSVG svg").attr("viewBox", "200 80 667 600");
		}


	} else if (pageURL.search("about-us.html") == 0) {
		section_array = [{ name: "k-aboutus", variable: false }, { name: "k-core-values", variable: false }];
	}

	$("#myNav a.level2").on("click", function () {
		var a_url = $(this).attr("href");
		if (window.innerWidth > 575) {
			setTimeout(function () {
				$("html,body").animate({ scrollTop: $(a_url).offset().top - 53.38 }, 1000);
			}, 500);
		} else {
			setTimeout(function () {
				$("html,body").animate({ scrollTop: $(a_url).offset().top - 48.19 }, 1000);
			}, 500);
		}
	});

	$("footer a").on("click", function () {
		if (filename == "about-us.html") {
			var a_url = $(this).attr("href");
			if (window.innerWidth > 575) {
				setTimeout(function () {
					$("html,body").animate({ scrollTop: $(a_url).offset().top - 53.38 }, 1000);
				}, 500);
			} else {
				setTimeout(function () {
					$("html,body").animate({ scrollTop: $(a_url).offset().top - 48.19 }, 1000);
				}, 500);
			}
		}
	});

	/*Management Team*/
	$(".team-content-block .more-details-block").on("click", function () {
		$(this).siblings(".team-text").find(".show_text").slideToggle();
		$(this).siblings(".team-text").toggleClass("show_more");
		if (!$(this).siblings(".team-text").hasClass("show_more")) {
			$(this).children("p").text("Read More...");
		} else {
			$(this).children("p").text("Read Less...");
		}
	});
	/*Management Team*/

	$(".scrollTopArrow").on("click", function () {
		$("html,body").animate({ scrollTop: 0 }, 600);
	});

	/* To hide and show the scroll bar when model is open or close */
	$('#careerModal').on('show.bs.modal', function (e) {
		$("body").addClass('overflow-visible-block')
	});
	$('#careerModal').on('hide.bs.modal', function (e) {
		$("body").removeClass('overflow-visible-block');

		/*Modal Form Reset*/
		var formElem = $(this).find("form")[0];
		formElem.reset();
		$(".modal-body .error-text").hide();
		$(formElem).children(".md-form").children("input").focusout();
		$(formElem).children(".md-form").children("textarea").focusout();
		$(formElem).children(".md-form").find(".hasError").removeClass("hasError");
		$(formElem).children(".md-form").find(".word-count").children("span").text(150);
		$(formElem).children(".md-form").find(".word-count").css("color", "#34495e");
		$(formElem).children(".md-form").find(".word-count").children("span").css("color", "#333");
		/*Modal Form Reset*/
	});

	/*$(".contact-container .close-icon, .contact-button").on("click",function(){
		$(".contact-container").slideToggle();
	});*/

	/*$(document).on("click",".contact-button",function(){
		if($(this).hasClass("chat-opened") == false){
			$(".contact-container").fadeToggle();
			$(this).addClass("chat-opened");
			$(this).children("#btn_submit").children(".closed.active").removeClass("active").siblings(".opened").addClass("active");
		} else {
			$("#ctnt-btn-value").prop("checked",true);
		}
	});*/

	$(document).on("click", "#btn_submit", function (e) {

		if ($(this).hasClass("chat-opened") == false) {
			e.preventDefault();
			$(".contact-container").fadeToggle();
			$(this).addClass("chat-opened");
			$(this).children(".closed.active").removeClass("active").siblings(".opened").addClass("active");
		} else {
			$("#ctnt-btn-value").prop("checked", true);
		}
	});
	$(document).on("click", ".contact-container .close-icon", function () {
		$(".contact-container").fadeToggle();
		$("#btn_submit").removeClass("chat-opened");
		$("#ctnt-btn-value").prop("checked", false);
		$("#btn_submit .btn-svg-wrapper.opened").removeClass("active");
		$("#btn_submit .btn-svg-wrapper.closed").addClass("active");
	});
	$(document).on("load", ".contact-container .close-icon, .contact-button", function () {
		$('[data-toggle="tooltip"]').tooltip();
	});

	/*NEW JS*/

	$(".sub-menu-wrapper ul li a").on("click", function () {
		var href_value = $(this).attr("href");
		href_value = href_value.split("#");
		if (href_value[href_value.length - 1].length != 0) {
			if (window.innerWidth > 575) {
				setTimeout(function () {
					$("html,body").animate({ scrollTop: $("#" + (href_value[href_value.length - 1])).offset().top - 53.38 }, 1000);
				}, 500);
			} else {
				setTimeout(function () {
					$("html,body").animate({ scrollTop: $("#" + (href_value[href_value.length - 1])).offset().top - 48.19 }, 1000);
				}, 500);
			}
		}
	});

	$(".sub-menu").find(".sub-nav").children("li").children("a").on("click", function () {
		var href_value = $(this).attr("href");
		href_value = href_value.split("#");
		if (href_value[href_value.length - 1].length != 0) {
			$("html,body").animate({ scrollTop: $("#" + (href_value[href_value.length - 1])).offset().top - 53.38 }, 1000);
		}
		$(this).parents().find(".sub-menu").css({ "top": "-150%", "opacity": "0" });
		$("#myNav").removeClass("menuOpen");
		$(".menu-btn a").removeClass("rotateMenu");
		$(".menu-btn a span").show();
	});

	$(".card-header a .read_more_btn").on("click", function () {
		if ($(this).text() == "Read More") {
			$(this).parents(".card-header").parents(".accordion").find(".read_more_btn").text("Read More");
			$(this).parents(".card-header").parents(".accordion").find(".read_more_btn").removeClass("btn-blue-grey");
			$(this).text("Read Less");
			$(this).addClass("btn-blue-grey");
		} else {
			$(this).text("Read More");
			$(this).removeClass("btn-blue-grey");
		}
	});


	$(".card-header .apply_now_btn:not(.inside)").on("click", function () {
		var job_type = $(this).siblings("h5").children("p").text();
		$("#careerModal").find(".modal-body").children(".des-title").text("Fill Details for " + job_type);
		$("#job_type").val(job_type);
		$("#careerModal").modal();
	});
	$(".card-body .apply_now_btn.inside").on("click", function () {
		var job_type = $(this).parents(".career-expand-content").parents(".collapse").siblings(".card-header").find("h5").children("p").text();
		$("#careerModal").find(".modal-body").children(".des-title").text("Fill Details for " + job_type);
		$("#job_type").val(job_type);
		$("#careerModal").modal();
	});

	$(".md-form select").on("click", function () {
		$(this).siblings("label").addClass("active");
		$(this).siblings("i").addClass("active");
		$(this).children("option:first-child").text(" ");
	});
	$(".md-form select").on("focusin", function () {
		$(this).siblings("label").addClass("active");
		$(this).siblings("i").addClass("active");
		$(this).children("option:first-child").text(" ");
	});

	$(".md-form select").on("focusout", function () {
		if ($(this).val() == "") {
			$(this).siblings("label").removeClass("active");
			$(this).siblings("i").removeClass("active");
			$(this).children("option:first-child").text("Reason you are contacting us");
		}
	});

	$(".md-form select").on("change", function () {
		if ($(this).val() != "" && $(this).val() != "undefined") {
			$(this).children("option:first-child").text(" ");
			$(this).siblings("label").addClass("active");
			$(this).siblings("i").addClass("active");
			$(this).removeClass("hasError");
			$(this).siblings("i").removeClass("hasError");
		} else {
			$(this).siblings("label").removeClass("active");
			$(this).siblings("i").removeClass("active");
			$(this).children("option:first-child").text("Reason you are contacting us");
			$(this).addClass("hasError");
			$(this).siblings("i").addClass("hasError");
		}
	});

	$(".md-form input[type='file']").on("change", function () {
		fileValidation($(this));
		if ($(this).val() != "" && $(this).val() != "undefined") {
			$(this).removeClass("hasError");
			$(this).siblings("i").removeClass("hasError");
		} else {
			$(this).addClass("hasError");
			$(this).siblings("i").addClass("hasError");
		}
	});

	$(".md-form .form-control").on("keyup", function () {
		if ($(this).val() != "" && $(this).val() != "undefined") {
			if ($(this).attr("type") == "email") {

				var testValue = $(this).val();
				var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

				if (reg.test(testValue) == false) {
					$(this).addClass("hasError");
					$(this).siblings("i").addClass("hasError");
				} else {
					$(this).removeClass("hasError");
					$(this).siblings("i").removeClass("hasError");
				}
			} else {
				$(this).removeClass("hasError");
				$(this).siblings("i").removeClass("hasError");
			}
		} else {
			$(this).addClass("hasError");
			$(this).siblings("i").addClass("hasError");
		}
	});

	$(".contact-validation .send-btn").on("click", function (e) {
		if ($(this).parents(".contact-validation").attr("id") == "career-form") {
			$(this).parent().siblings(".md-form").each(function () {
				e.preventDefault();
				if ($(this).children(".form-control").val() == "" || $(this).children(".form_control").val() == "undefined") {
					$(this).children(".form-control").addClass("hasError");
					$(this).children("i").addClass("hasError");
				}
			});
		} else {

			$(this).parent().siblings(".md-form").each(function () {
				e.preventDefault();
				if ($(this).children(".form-control").val() == "" || $(this).children(".form_control").val() == "undefined") {
					$(this).children(".form-control").addClass("hasError");
					$(this).children("i").addClass("hasError");
				}
			});
		}
		if ($(".contact-validation").find(".hasError").length == 0) {
			var captcha = grecaptcha.getResponse();
			if (captcha == "") {
				$(".error-text").show();
				$(".error-text").addClass("fadeInDown");
				$(".error-text").html("<i class='icon ion-md-alert'></i>Please verify you are not a robot");
				$("#contact_captcha iframe").addClass("required_captcha");
				return false;
			} else {
				$("#contact_captcha iframe").removeClass("required_captcha");
				$(".contact-validation").submit();
			}
		}
	});

	var classArray = ["one", "two", "three", "four", "five"];

	$("#carousel-example-1z").find(".carousel-item").each(function () {
		var li_length = $(this).find(".banner-logo-list").children("li").length;
		$(this).find(".banner-logo-list").children("li").each(function ($index) {
			$(this).addClass(classArray[li_length - 1] + "-" + ($index + 1));
		});
	});


	/*NEW JS*/

	/* Slider Logo Alignment */
	var classArray = ["one", "two", "three", "four", "five", "six", "seven"];
	$("#carousel-example-1z").find(".carousel-item").each(function () {
		var li_length = $(this).find(".banner-logo-list").children("li").length;
		$(this).find(".banner-logo-list").children("li").each(function ($index) {
			$(this).addClass(classArray[li_length - 1] + "-" + ($index + 1));
		});
	});


	/*Textarea Word Count*/
	$(".md-form textarea").on("keyup", function () {
		var value = $(this).val();
		value = 150 - value.length;
		$(this).siblings(".word-count").children("span").text(value);
		if (value < 10) {
			$(this).siblings(".word-count").css("color", "#4285F4");
			$(this).siblings(".word-count").children("span").css("color", "#ff3636");
		} else {
			$(this).siblings(".word-count").css("color", "#333");
			$(this).siblings(".word-count").children("span").css("color", "#333");
		}
	});

	/*Blog JS 08-05-2019 */
	$(".blog-back-btn").on("click", function () {
		window.location.href = "../index.html"
	});
	/*Blog JS 08-05-2019 */

	$(".blog-item").each(function () {
		var title = $(this).children(".blog-title").children("a").text();
		title = title.charAt(0);
		$(this).find(".big-letter").text(title);
	});
});

$(window).on("load orientationchange", function () {
	var windowWidth = window.innerWidth;
	if (deviceType) {
		$(".goBackBtn").show();
		$(".overlay .level1 a.level1_a").off("mouseover");
		$(".overlay .level1 a.level1_a").on("click", function () {
			$(".overlay .level1 .sub-menu").css({ "top": "-150%", "opacity": "0" });
			$(".overlay .level1 .sub-menu").removeClass("visibleSubMenu");
			$(this).siblings(".sub-menu").css({ "top": "0", "opacity": "1" });
			$(this).siblings(".sub-menu").addClass("visibleSubMenu");
		});
	} else {

		$(".goBackBtn").hide();
		$(".overlay .level1 a.level1_a").off("click");
		$(".overlay .level1").on("mouseover", function () {
			$(".overlay .level1 .sub-menu").css({ "top": "-150%", "opacity": "0" });
			$(this).children(".sub-menu").css({ "top": "0", "opacity": "1" });
		});
		$(".overlay .level1").on("mouseout", function () {
			$(this).children(".sub-menu").css({ "top": "-150%", "opacity": "0" });
		});
	}
	$("#ol-carousel").carousel();
	setTimeout(function () {
		var max = 0;
		$(".k-ol .carousel .carousel-inner .carousel-item .ol-carousel-content-block").css("min-height", 0);
		var a = $(".k-ol .carousel .carousel-inner .carousel-item:first-child .ol-carousel-content-block").outerHeight();
		if (a > max) {
			max = a;
		} else {
			max = max;
		}
		$(".k-ol .carousel .carousel-inner .carousel-item .ol-carousel-content-block").css("min-height", max);
	}, 1500);

	$(".scrollTopArrow").hide();
});


$(window).on("load scroll", function () {
	if ($(this).scrollTop() > 100) {
		$(".scrollTopArrow").fadeIn();
		$(".contact-block").addClass("scrolled");
		$(".contact-button").not(".chat-opened").addClass("bottomMove");
	} else {
		$(".scrollTopArrow").fadeOut();
		$(".contact-block").removeClass("scrolled");
		$(".contact-button").removeClass("bottomMove");
	}
});


function fileValidation(elem) {
	var fileInput = elem;
	var filePath = fileInput.val();
	var allowedExtensions = /(\.pdf|\.doc|\.docx)$/i;
	if (!allowedExtensions.exec(filePath)) {
		$(".error-text").show();
		$(".error-text").addClass("slideInDown");
		$(".error-text").html("<i class='icon ion-md-alert'></i>Please upload a valid file with these extensions <span>.pdf/.doc/.docx</span> only (max 5MB in size)");
		fileInput.val("");
		return false;
	} else if (elem[0].files[0].size > 5242880 && allowedExtensions.exec(filePath)) {
		$(".error-text").show();
		$(".error-text").html("<i class='icon ion-md-alert'></i>File Size exceed <span>5Mb</span>)");
		fileInput.val("");
		return false;
	} else {
		elem.siblings(".prefix").addClass("active");
		$(".error-text").hide();
	}
} 