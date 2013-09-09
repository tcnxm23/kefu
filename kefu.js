(function(){

	var root = this;
	var $W = $(window);

    /*
	*构造函数
	*/
	var KeFu = function () {
	    
		this.init.apply(this, arguments);

	};

	KeFu.fn = KeFu.prototype;

	/*
	*初始化配置
	*/
	KeFu.fn.init = function (config) {

		var default_config = {
		
		    'id' : 'id',
			'width' : 50,
			'height' : 100,
			'cwidth' : 980,
			'offsetl' : 10,
			'offsett' : 100
		}
	
	    if (config && Object.prototype.toString.call(config) == '[object Object]')
	    {
			var this_config = {};
			jQuery.each(default_config, 
				function (item, value) {
			        this_config[item] =  config[item] || value;
			});
			this_config['container'] = document.getElementById(config['id']);
			this.config = this_config;
	    }else{
		    this.config = default_config;
		}

		var dleft = ($W.width() - this_config.cwidth) / 2 + this_config.cwidth + this_config.offsetl;
		var dtop = this_config.offsett ;

		this_config.container.style.top = dtop + 'px';
		this_config.container.style.left = dleft + 'px';
	};

	/*
	*滚动下移
	*/
	KeFu.fn.scroll = function (stop) {
	    
		this.config.container.style.top = this.config.offsett + stop + 'px';
	};

	root.KeFu = KeFu;

}).call(window);
