		// 初始化 swiper
		/*
			兩個參數
			第一參數：抓目標，通常是 id
			第二參數：選項物件(optional object)，主要設定套件的屬性
		*/
		const swiperLightbox = new Swiper("#swiperLightbox", {
			loop: true, //無限循環
			speed: 1500, // 動畫轉場的持續時間
			mousewheel: true, // 使用滾輪
			autoplay: {
				delay: 5000 // 自動播放，幾秒後下一張
			},
			// RWD 斷點控制，在哪個尺寸顯示幾張圖片
			slidesPerView: 1,
			spaceBetween: 10,
			breakpoints: {
				576: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 40,
				},
				1200: {
					slidesPerView: 3,
					spaceBetween: 50,
				}
			},
			// 啟用上一張、下一張功能
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			// 啟用分頁指示器功能
			pagination: {
				el: ".swiper-pagination",
				dynamicBullets: true,
				// type: "fraction", // 分數顯示，例如 1/5
				clickable: true,
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (index + 1) + "</span>";
				},
			},
		});