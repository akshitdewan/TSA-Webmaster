jQuery(document).ready(function() {

	var survey = {
		1:{
			'question': 'Which of the following areas do you enjoy the most?',
			'result':'hi',
			'answer':{
				1:{
					'type': 'radio',
					'dynamic': true,
					'route': 2,
					'item': 'Engineering & Design'
				},
				2:{
					'type': 'radio',
					'dynamic': true,
					'route': 5,
					'item': 'Programming'
				},
			3:{
					'type': 'radio',
					'dynamic': true,
					'route': 6,
					'item': 'Public Speaking & Debate'
				},
			4: {
				'type': 'radio',
				'dynamic': true,
				'route': 7,
				'item': 'Research'
			},
			5: {
				'type': 'radio',
				'dynamic': true,
				'route': 9,
				'item': 'Writing'
			},
			6: {
				'type': 'radio',
				'dynamic': true,
				'route': 8,
				'item': 'Digital / Media Creation'
			}
			}
		},
		2:{
			'question': 'Which of the following descibes you?',
			'result':'hi',
			'answer':{
				1:{
					'type': 'radio',
					'dynamic': true,
					'route': 3,
					'item': 'I like building and working hands on!'
				},
				2:{
					'type': 'radio',
					'dynamic': true,
					'route': 4,
					'item': 'I like using computer software to design and animate!'
				}
			}
		},
		3:{
			'question': 'How many people do you want to work with?',
			'result':'hi',
			'answer':{
				1:{
					'type': 'radio',
					'dynamic': true,
					'route': 9,
					'item': 'I want to build something individually!'
				},
				2:{
					'type': 'radio',
					'dynamic': true,
					'route': 9,
					'item': 'I want to build something with a team!'
				},
			
			}
		},
		4:{
			'question': 'How many people do you want to work with?',
			'result':'hi',
			'answer':{
			
				1:{
					'type': 'radio',
					'dynamic': true,
					'route': 9,
					'item': 'I want to design something individually!'
				},
				2:{
					'type': 'radio',
					'dynamic': true,
					'route': 9,
					'item': 'I want to design something with a team!'
				},
			}
		},
		5:{
			'question': 'Do you want to work on a long term project or one that is on site?',
			'result':'hi',
			'answer':{
				1:{
					'type': 'radio',
					'dynamic': true,
					'route': 9,
					'item': 'I want to program something long term!'
				},
				2:{
					'type': 'radio',
					'dynamic': true,
					'route': 9,
					'item': 'I want to program on site!'
				},
				
			}
		},
		6:{
			'question': 'Do you want to work individually or as team?',
			'result':'hi',
			'answer':{
				1:{
					'type': 'radio',
					'dynamic': true,
					'route': 9,
					'item': 'I want to work individually!'
				},
				2:{
					'type': 'radio',
					'dynamic': true,
					'route': 9,
					'item': 'I want to work as a team!'
				},
			
			}
		},
		7:{
			'question': 'Which of the following best describes you?',
			'result':'hi',
			'answer':{
				1:{
					'type': 'radio',
					'dynamic': true,
					'route': 9,
					'item': 'I like taking tests and solving problems!'
				},
				2:{
					'type': 'radio',
					'dynamic': true,
					'route': 9,
					'item': 'I like exploring topics and creating a tangible display of my research!'
				},
			
			}
		},
		8:{
			'question': 'Which of the following best suits you?',
			'result':'hi',
			'answer':{
				1:{
					'type': 'radio',
					'dynamic': true,
					'route': 9,
					'item': 'I like singing, writing lyrics, and producing beats.'
				},
				2:{
					'type': 'radio',
					'dynamic': true,
					'route': 9,
					'item': 'I like using cameras and editing software.'
				},
			}
		},
		9:{
			'question': 'Click the submit button to view your results!',
			'result':'hi',
			'answer':{
				
			}
		}
		// 18:{
		// 	'question': 'Great job! Thanks for submitting a quote to WebDevlopr, you should be receiving an email soon.',
		// 	'answer': {}
		// }
	};

	for (var i = 1; i <= Object.keys(survey).length; i++) {

		var data, container, content;
		data = survey[i];
		container = jQuery('.mm-survey-container');
		content = 	'<div class="mm-survey-page mm-survey-page-'+i+'" data-page="'+i+'">'+
						'<div class="mm-survery-content">'+
							'<div class="mm-survey-question"><p>'+data.question+'</p></div>'+
						'</div>'+
					'</div>';
		container.append(content);
		
		if(Object.keys(data.answer).length < 1) {
			jQuery('.mm-survey-page-'+i+' .mm-survery-content').append('<p></p>');
		}
		else {
			for (var ii = 1; ii <= Object.keys(data.answer).length; ii++) {

				var datax, containerx, contentx;
				datax = data.answer[ii];
				containerx = jQuery('.mm-survey-page-'+i+' .mm-survery-content');

				switch(datax.type) {
				    case 'radio':
				        contentx = 	'<div class="mm-survey-item mm-dynamic">'+
										'<input type="radio" id="radio'+i+'0'+ii+'" data-group="'+i+'" data-dynamic="'+datax.route+'" data-item="'+ii+'" name="radio'+i+'" value="'+datax.item+'" />'+
										'<label for="radio'+i+'0'+ii+'"><span></span><p>'+datax.item+'</p></label>'+
									'</div>';
				        break;
				    case 'text':
				        contentx = 	'<div class="mm-survey-item mm-dynamic-input">'+
										'<input type="text" class="'+datax.identity+'" data-group="'+i+'" data-dynamic="'+datax.route+'" placeholder="'+datax.placeholder+'" />'+
									'</div>';
				        break;
				    case 'date':
				        contentx = 	'<div class="mm-survey-item mm-dynamic-datetime">'+
										'<input type="text" class="'+datax.identity+'" id="datetimepicker-'+i+'" data-datetimeid="'+i+'" data-group="'+i+'" data-dynamic="'+datax.route+'" data-format="mm/dd/yyyy hh:mm" />'+
									'</div>';
				        break;
				    case 'form':
				    	contentx = 	'<div class="mm-dynamic-form-item">'+
					    				'<p>'+datax.title+'</p>'+
					    				'<div class="mm-survey-item mm-dynamic-form">'+
											'<input type="text" class="'+datax.identity+'" data-group="'+i+'" data-dynamic="'+datax.route+'" placeholder="'+datax.placeholder+'" />'+
										'</div>'+
									'</div>';
				        break;
				}

				containerx.append(contentx);

			}
		}
	}

	jQuery('.mm-survey-page:first').addClass('active mm-dynamic-active');
	jQuery('.mm-prev-btn').hide();

	var x;
	var xyz;
	var xtx;
	var count;
	var current;
	var percent;
	var z = [];

	init();
	goToNext();
	goToPrev();
	getCount();
	buildStatus();
	deliverStatus();
	submitData();
	goBack();

	function init() {
		
		jQuery('.mm-survey-container .mm-survey-page').each(function() {

			var item;
			var page;

			item = jQuery(this);
			page = item.data('page');

			item.addClass('mm-page-'+page);

		});

	}

	function getCount() {

        count = jQuery('.mm-survey-page').length;
        return count;

    }

    function dynamicForm() {
    	jQuery('.mm-dynamic-form-item').wrapAll('<div class="mm-dynamic-form-wrap">');
    	jQuery('.mm-survey-item input').on('keyup', function() {
    		var item, id, form;
    		item = jQuery(this);
    		id = item.closest('.mm-survey-page').data('page');
    		form = item.closest('.mm-dynamic-form-wrap');
    		form.addClass('mm-dynamic-form-'+id);
    	});
    }

    dynamicForm();

    function checkDate() {
    	jQuery('.mm-dynamic-date').on('dp.change', function() {
			var item, id;
			item = jQuery(this);
			id = item.data('datetimeid');
			// jQuery('.mm-survey-page').removeClass('active');
			xyz = item.data('dynamic');
			jQuery('.mm-page-'+id).addClass('pass');
			item.parent().addClass('bingo');
			// jQuery('.mm-page-'+xyz).addClass('active mm-dynamic-active');
			buttonConfig(id);
		});
    }

    function checkDomain(e,f) {
    	jQuery('.mm-dynamic-domain').on('keyup', function() {

    		var domain, domainVal;

    		domain = jQuery(this);
            domainVal = jQuery(this).val();
            domainVal = domainVal.toLowerCase();

    		if ( domainVal.length > 3 && ( domainVal.indexOf(".com") >= 0 || domainVal.indexOf(".org") >= 0 || domainVal.indexOf(".net") >= 0 || domainVal.indexOf(".io") >= 0 || domainVal.indexOf(".me") >= 0 || domainVal.indexOf(".info") >= 0 ) ) {
    			domain.parent().addClass('bingo');
    			jQuery('.mm-page-'+f).addClass('pass');
    			buttonConfig(f);
    		}
    		else {
    			domain.parent().removeClass('bingo');
    			jQuery('.mm-page-'+f).removeClass('pass');
    			buttonConfig(f);
    		}

    	});
    }

    function checkFirstname(e,f){
    	jQuery('.mm-dynamic-fn').on('keyup', function() {
    		var item, v;
    		item = jQuery(this);
    		v = item.val();
    		if(v.length >= 3){
    			item.parent().addClass('bingo');
    			jQuery('.mm-page-'+f).addClass('pass');
    			buttonConfig(f);
    		}
    		else {
    			item.parent().removeClass('bingo');
    			jQuery('.mm-page-'+f).removeClass('pass');
    			buttonConfig(f);
    		}
    	});
    }

    function checkLastname(e,f){
    	jQuery('.mm-dynamic-ln').on('keyup', function() {
    		var item, v;
    		item = jQuery(this);
    		v = item.val();
    		if(v.length >= 3){
    			item.parent().addClass('bingo');
    			jQuery('.mm-page-'+f).addClass('pass');
    			buttonConfig(f);
    		}
    		else {
    			item.parent().removeClass('bingo');
    			jQuery('.mm-page-'+f).removeClass('pass');
    			buttonConfig(f);
    		}
    	});
    }

    function checkEmail(e,f){
    	jQuery('.mm-dynamic-em').on('keyup', function() {
    		var email, emailVal;

    		email = jQuery(this);
            emailVal = jQuery(this).val();
            emailVal = emailVal.toLowerCase();

            if ( ( emailVal.indexOf("@") >= 0 ) && ( emailVal.length > 6 ) && ( emailVal.indexOf(".com") >= 0 || emailVal.indexOf(".org") >= 0 || emailVal.indexOf(".net") >= 0 || emailVal.indexOf(".io") >= 0 || emailVal.indexOf(".me") >= 0 || emailVal.indexOf(".info") >= 0 ) ) {
    			email.parent().addClass('bingo');
    			jQuery('.mm-page-'+f).addClass('pass');
    			buttonConfig(f);
    		}
    		else {
    			email.parent().removeClass('bingo');
    			jQuery('.mm-page-'+f).removeClass('pass');
    			buttonConfig(f);
    		}
    	});
    }

    function runInputs(e,f) {
    	checkDomain(e,f);
    	checkFirstname(e,f);
    	checkLastname(e,f);
    	checkEmail(e,f);
    }

    function goToSkip() {

        jQuery('.mm-survey-item').on('click', function() {

            var item, input, xyz, y, paragraph, title, page;
            
            item = jQuery(this);
            page = item.closest('.mm-survey-page').data('page');
            jQuery('.mm-page-'+page+' .mm-survey-item').removeClass('bingo');

        	getCount();
            y = (count);

            if(item.hasClass('mm-dynamic')) {
            	jQuery('.mm-survey-page').removeClass('active');
            	input = item.children('input');
				xyz = input.data('dynamic');
				jQuery('.mm-page-'+xyz).addClass('active mm-dynamic-active').attr('data-orgin',page);
				item.addClass('bingo');
				buildButtons(xyz,y);
				buttonConfig(xyz);
            }
            else if(item.hasClass('mm-dynamic-input')) {
            	page = item.closest('.mm-survey-page').data('page');
            	jQuery('.mm-page-'+page).removeClass('pass');
            	input = item.children('input');
				xyz = input.data('dynamic');
				jQuery('.mm-page-'+xyz).attr('data-orgin',page);
				runInputs(xyz,page);
            	buildButtons(page,y);
            }
            else if(item.hasClass('mm-dynamic-datetime')) {
            	page = item.closest('.mm-survey-page').data('page');
            	// jQuery('.mm-page-'+page).removeClass('pass');
            	input = item.children('input');
				xyz = input.data('dynamic');
				jQuery('.mm-page-'+xyz).attr('data-orgin',page);
				checkDate();
            	buildButtons(page,y);
            }
            else if(item.hasClass('mm-dynamic-form')) {
            	page = item.closest('.mm-survey-page').data('page');
            	jQuery('.mm-page-'+page).removeClass('pass');
            	input = item.children('input');
				xyz = input.data('dynamic');
				jQuery('.mm-page-'+xyz).attr('data-orgin',page);
				runInputs(xyz,page);
            	buildButtons(page,y);
            }
            else {
            	jQuery('.mm-survey-page').removeClass('active');
            	page = item.closest('.mm-survey-page').data('page');
            	jQuery('.mm-page-'+(page+1)).addClass('active').attr('data-orgin',page);
            	jQuery('.mm-page-'+page+' .mm-survey-item').addClass('bingo');
            	buildButtons((page+1),y);
            	buttonConfig(page+1);
            }

            return x;

        });

    }

    goToSkip();

    function goToNext() {

        jQuery('.mm-next-btn').on('click', function() {
            var g, y, paragraph, title;

            goToSkip();
            getCurrentSlide();
            getCount();

            current = (x + 1);
            g = current/count;
            y = (count + 1);

            if(jQuery('.mm-page-'+x).hasClass('mm-dynamic-active')) {
            	var xyz;
            	xyz = jQuery('.mm-page-'+x+' .bingo input').data('dynamic');
            	buildButtons(xyz, count);
	            buttonConfig(xyz);
	            
	            jQuery('.mm-survey-page').removeClass('active');
	            jQuery('.mm-page-'+xyz).addClass('active mm-dynamic-active');
            }
            else {
            	buildButtons(current, count);
	            buttonConfig(current);
	            
	            jQuery('.mm-survey-page').removeClass('active');
	            jQuery('.mm-page-'+current).addClass('active');
            }

        });

    }

    function goToPrev() {

        jQuery('.mm-prev-btn').on('click', function() {
            var g, y, paragraph, title, orgin;
            
            goToSkip();
            getCurrentSlide();
            getCount();

            current = (x - 1);
            g = current/count;
            y = count;

            if(jQuery('.mm-page-'+x).hasClass('mm-dynamic-active')) {
            	orgin = jQuery('.mm-page-'+x).data('orgin');
            	jQuery('.mm-page-'+x).removeClass('mm-dynamic-active pass');
            	jQuery('.mm-page-'+x).attr('data-orgin','');
            	jQuery('.mm-page-'+x+' input:radio').removeAttr('checked');
            	jQuery('.mm-survey-page').removeClass('active');
            	jQuery('.mm-page-'+orgin).addClass('active');
            	buildButtons(orgin, count);
            	buttonConfig(orgin);
            }
            else {
            	buildButtons(current, count);
            	buttonConfig(current);
	            jQuery('.mm-survey-page').removeClass('active');
	            jQuery('.mm-page-'+current).addClass('active');

	            paragraph = jQuery('.mm-paragraph-'+current).data('paragraph');
	            jQuery('.mm-paragraph-content p').html(paragraph);
	            title = jQuery('.mm-page-'+current).data('group');
	            jQuery('.mm-project-page-title h3').html(title);

	            jQuery('.mm-slide-page-number').html(current);
            }

        });

    }

    function getCurrentSlide() {

        jQuery('.mm-survey-page').each(function() {

            var item;

            item = jQuery(this);

            if( jQuery(item).hasClass('active') ) {
                x = item.data('page');
                xtx = item.data('page');
            }
            else {
                //
            }

            return x;
            return xtx;

        });

    }

    function buildButtons(a, b) {

        switch(a) {
            case 1:
                jQuery('.mm-next-btn').show();
                jQuery('.mm-prev-btn').hide();
                jQuery('.mm-finish-btn').hide();
            break;
            case b:
                jQuery('.mm-next-btn').hide();
                jQuery('.mm-prev-btn').show();
                jQuery('.mm-finish-btn').show();
            break;
            default:
                jQuery('.mm-next-btn').show();
                jQuery('.mm-prev-btn').show();
                jQuery('.mm-finish-btn').hide();
        }

    }

	function checkStatus() {
		jQuery('.mm-survery-content .mm-survey-item').on('click', function() {
			var item;
			item = jQuery(this);
			item.closest('.mm-survey-page').addClass('pass');
		});
	}

	function buildStatus() {
		jQuery('.mm-survery-content .mm-survey-item').on('click', function() {
			var item;
			item = jQuery(this);
			item.addClass('bingo');
			item.closest('.mm-survey-page').addClass('pass');
			jQuery('.mm-survey-container').addClass('good');
		});
	}

	function deliverStatus() {
		jQuery('.mm-survey-item').on('click', function() {
			if( jQuery('.mm-survey-container').hasClass('good') ){
				jQuery('.mm-survey').addClass('okay');
			}
			else {
				jQuery('.mm-survey').removeClass('okay');	
			}
			buttonConfig();
		});
	}

	function lastPage() {
		if( jQuery('.mm-next-btn').hasClass('cool') ) {
			alert('cool');
		}
	}

	function buttonConfig(mat) {
		if( jQuery('.mm-survey-page-'+mat).hasClass('pass') ) {
			jQuery('.mm-next-btn button').addClass('ready').prop('disabled', false);
		}
		else {
			jQuery('.mm-next-btn button').removeClass('ready').prop('disabled', true);
		}
	}

	function submitData() {
		jQuery('.mm-finish-btn').on('click', function() {
			collectData();
			jQuery('.mm-survey-bottom').slideUp();
			jQuery('.mm-survey-results').slideDown();
		});
	}

	function collectData() {

		
		
		var map = {};
		var ax = ['0','red','mercedes','3.14','3'];
		var answer = '';
		var total = 0;
		var ttl = 0;
		var g;
		var c = 0;
		var newCount = jQuery('.pass .mm-survey-item.bingo').length;



		jQuery('.mm-survey-results-container .mm-survey-results-list').html('');


		jQuery('.mm-survey-item.bingo input').each(function(index, val) {
			var item, id, data, name, n;



			item = jQuery(this);
			id = item.data('group');
			data = item.val();
			name = item.data('item');

	
			if (data == 'I want to build something individually!')
			{
				jQuery('.mm-survey-results-list').append('<li class="mm-survey-results-item correct"><span class="mm-item-number">'+'</span><span class="mm-item-info">'+ ' Architectural Design ' +'</span></li>');
				jQuery('.mm-survey-results-list').append('<li class="mm-survey-results-item correct"><span class="mm-item-number">'+'</span><span class="mm-item-info">'+ ' Dragster Design ' +'</span></li>');
				jQuery('.mm-survey-results-list').append('<li class="mm-survey-results-item correct"><span class="mm-item-number">'+'</span><span class="mm-item-info">'+ ' Flight Endurance ' +'</span></li>');
				jQuery('.mm-survey-results-list').append('<li class="mm-survey-results-item correct"><span class="mm-item-number">'+'</span><span class="mm-item-info">'+ ' Transportation Modeling ' +'</span></li>');
				//jQuery('.mm-survey-results-list').append('<li class="mm-survey-results-item correct"><span class="mm-item-number">'+(index+1)+'</span><span class="mm-item-info">'+survey[id].result + ' - ' + data+'</span></li>');
			}
			else if (data == 'I want to build something with a team!')
			{
				jQuery('.mm-survey-results-list').append('<li class="mm-survey-results-item correct"><span class="mm-item-number">'+'</span><span class="mm-item-info">'+ ' Animatronics ' +'</span></li>');
				jQuery('.mm-survey-results-list').append('<li class="mm-survey-results-item correct"><span class="mm-item-number">'+'</span><span class="mm-item-info">'+ ' Engineering Design ' +'</span></li>');
				jQuery('.mm-survey-results-list').append('<li class="mm-survey-results-item correct"><span class="mm-item-number">'+'</span><span class="mm-item-info">'+ ' Fashion Design and Technology ' +'</span></li>');
				jQuery('.mm-survey-results-list').append('<li class="mm-survey-results-item correct"><span class="mm-item-number">'+'</span><span class="mm-item-info">'+ ' Structural Design and Engineering ' +'</span></li>');
			}
			else if (data == 'I want to design something individually!')
			{
				jQuery('.mm-survey-results-list').append('<li class="mm-survey-results-item correct"><span class="mm-item-number">'+'</span><span class="mm-item-info">'+ ' Computer-Aided Design (CAD), Architecture ' +'</span></li>');
				jQuery('.mm-survey-results-list').append('<li class="mm-survey-results-item correct"><span class="mm-item-number">'+'</span><span class="mm-item-info">'+ ' Computer-Aided Design (CAD), Engineering ' +'</span></li>');
				jQuery('.mm-survey-results-list').append('<li class="mm-survey-results-item correct"><span class="mm-item-number">'+'</span><span class="mm-item-info">'+ ' Scientific Visualization (SciVis)  ' +'</span></li>');
			}
			else if (data == 'I want to design something with a team!')
			{
				jQuery('.mm-survey-results-list').append('<li class="mm-survey-results-item correct"><span class="mm-item-number">'+'</span><span class="mm-item-info">'+ ' Scientific Visualization (SciVis)  ' +'</span></li>');
				jQuery('.mm-survey-results-list').append('<li class="mm-survey-results-item correct"><span class="mm-item-number">'+'</span><span class="mm-item-info">'+ ' Computer Integrated Manufacturing (CIM)' +'</span></li>');
				jQuery('.mm-survey-results-list').append('<li class="mm-survey-results-item correct"><span class="mm-item-number">'+'</span><span class="mm-item-info">'+ ' 3D Animation ' +'</span></li>');
			}
			else if (data == 'I want to program something long term!')
			{
				jQuery('.mm-survey-results-list').append('<li class="mm-survey-results-item correct"><span class="mm-item-number">'+'</span><span class="mm-item-info">'+ ' Video Game Design ' +'</span></li>');
				jQuery('.mm-survey-results-list').append('<li class="mm-survey-results-item correct"><span class="mm-item-number">'+'</span><span class="mm-item-info">'+ ' Webmaster ' +'</span></li>');
				jQuery('.mm-survey-results-list').append('<li class="mm-survey-results-item correct"><span class="mm-item-number">'+'</span><span class="mm-item-info">'+ ' Software Development  ' +'</span></li>');
			}
			else if (data == 'I want to program on site!')
			{
				jQuery('.mm-survey-results-list').append('<li class="mm-survey-results-item correct"><span class="mm-item-number">'+'</span><span class="mm-item-info">'+ ' Coding ' +'</span></li>');
				jQuery('.mm-survey-results-list').append('<li class="mm-survey-results-item correct"><span class="mm-item-number">'+'</span><span class="mm-item-info">'+ ' System Control Technology ' +'</span></li>');
			}
			else if (data == 'I want to work individually!')
			{
				jQuery('.mm-survey-results-list').append('<li class="mm-survey-results-item correct"><span class="mm-item-number">'+'</span><span class="mm-item-info">'+ ' Extemporaneous Speech ' +'</span></li>');
			}
			else if (data == 'I like taking tests and solving problems!')
			{
				jQuery('.mm-survey-results-list').append('<li class="mm-survey-results-item correct"><span class="mm-item-number">'+'</span><span class="mm-item-info">'+ ' Chapter Team' +'</span></li>');
				jQuery('.mm-survey-results-list').append('<li class="mm-survey-results-item correct"><span class="mm-item-number">'+'</span><span class="mm-item-info">'+ ' Technology Bowl' +'</span></li>');
				jQuery('.mm-survey-results-list').append('<li class="mm-survey-results-item correct"><span class="mm-item-number">'+'</span><span class="mm-item-info">'+ ' Technology Problem Solving' +'</span></li>');

			}
			else if (data == 'I like exploring topics and creating a tangible display of my research!')
			{
				jQuery('.mm-survey-results-list').append('<li class="mm-survey-results-item correct"><span class="mm-item-number">'+'</span><span class="mm-item-info">'+ ' Biotechnology Design ' +'</span></li>');
				jQuery('.mm-survey-results-list').append('<li class="mm-survey-results-item correct"><span class="mm-item-number">'+'</span><span class="mm-item-info">'+ ' Future Technology Teacher ' +'</span></li>');
				jQuery('.mm-survey-results-list').append('<li class="mm-survey-results-item correct"><span class="mm-item-number">'+'</span><span class="mm-item-info">'+ ' STEM Careers ' +'</span></li>');

			}
			else if (data == 'Writing')
			{
				jQuery('.mm-survey-results-list').append('<li class="mm-survey-results-item correct"><span class="mm-item-number">'+'</span><span class="mm-item-info">'+ ' Essays on Technology ' +'</span></li>');
				jQuery('.mm-survey-results-list').append('<li class="mm-survey-results-item correct"><span class="mm-item-number">'+'</span><span class="mm-item-info">'+ ' Childrens Stories ' +'</span></li>');
				jQuery('.mm-survey-results-list').append('<li class="mm-survey-results-item correct"><span class="mm-item-number">'+'</span><span class="mm-item-info">'+ ' STEM Careers ' +'</span></li>');
				jQuery('.mm-survey-results-list').append('<li class="mm-survey-results-item correct"><span class="mm-item-number">'+'</span><span class="mm-item-info">'+ ' Biotechnology Design ' +'</span></li>');
			}
			else if (data == 'I like using cameras and editing software.')
			{
				jQuery('.mm-survey-results-list').append('<li class="mm-survey-results-item correct"><span class="mm-item-number">'+'</span><span class="mm-item-info">'+ ' Digital Video Production ' +'</span></li>');
				jQuery('.mm-survey-results-list').append('<li class="mm-survey-results-item correct"><span class="mm-item-number">'+'</span><span class="mm-item-info">'+ ' On Demand Video ' +'</span></li>');
				jQuery('.mm-survey-results-list').append('<li class="mm-survey-results-item correct"><span class="mm-item-number">'+'</span><span class="mm-item-info">'+ ' Photographic Technology ' +'</span></li>');
			}
			else if (data == 'I like singing, writing lyrics, and producing beats.')
			{
				jQuery('.mm-survey-results-list').append('<li class="mm-survey-results-item correct"><span class="mm-item-number">'+'</span><span class="mm-item-info">'+ ' Music Production ' +'</span></li>');
			}

			
		});



	}

	function goBack() {
		jQuery('.mm-back-btn').on('click', function() {
			jQuery('.mm-survey-bottom').slideDown();
			jQuery('.mm-survey-results').slideUp();
		});
	}

	jQuery('#datetimepicker-15').datetimepicker();

});