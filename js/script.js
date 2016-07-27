/*
••••••••••••••••••••••••

Powered by Type & Grids™
www.typeandgrids.com

••••••••••••••••••••••••
 */

jQuery.easing.def = "easeOutQuad";

$(document).ready(function() {
	// Move projects to second column
	$(".project:odd").appendTo("#col2");
	
	// Project thumbnail hover
	$(".projectThumbnail").on(
			"mouseenter",
			function(e) {
				$(this).children(".projectThumbnailHover").fadeIn(300);
				$(this).children(".projectThumbnailHover").find("h4").css("display", "block");
				$(this).children(".projectThumbnailHover").find("h4").css("opacity", "0");
				$(this).children(".projectThumbnailHover").find("h4").delay(200).animate({opacity : 1}, 200);
				$(this).children(".projectThumbnailHover").find("h5").css("display", "block");
				$(this).children(".projectThumbnailHover").find("h5").css("opacity", "0");
				$(this).children(".projectThumbnailHover").find("h5").delay(350).animate({opacity : 1}, 200);
			});
	
	$(".projectThumbnail").on(
			"mouseleave",
			function(e) {
				$(this).children(".projectThumbnailHover").fadeOut(200);
				$(this).children(".projectThumbnailHover").find("h4").animate({
							left : '0',
							opacity : 0
						}, 0);
				$(this).children(".projectThumbnailHover").find("h5").animate({
							left : '0',
							opacity : 0
						}, 0);
			});

	$(".projectThumbnail").bind( 'touchstart', function(){
      $(this).children(".projectThumbnailHover").fadeIn(300);
      $(this).children(".projectThumbnailHover").find("h4").css("display", "block");
      $(this).children(".projectThumbnailHover").find("h4").css("opacity", "0");
      $(this).children(".projectThumbnailHover").find("h4").delay(200).animate({opacity : 1}, 200);
      $(this).children(".projectThumbnailHover").find("h5").css("display", "block");
      $(this).children(".projectThumbnailHover").find("h5").css("opacity", "0");
      $(this).children(".projectThumbnailHover").find("h5").delay(350).animate({opacity : 1}, 200);
	  }).bind( 'touchend', function(){
      $(this).children(".projectThumbnailHover").fadeOut(200);
      $(this).children(".projectThumbnailHover").find("h4").animate({
            left : '0',
            opacity : 0
          }, 0);
      $(this).children(".projectThumbnailHover").find("h5").animate({
            left : '0',
            opacity : 0
          }, 0);
	  });

	// Hide hover effect on touch devices
	if (Modernizr.touch) {
		$(".projectThumbnailHover").css("display", "none");
		$(".projectThumbnailHover").css("visibility", "hidden");
		$(".projectThumbnail").unbind("mouseenter");
		$(".projectThumbnail").unbind("mouseleave");
	}
	
	$('a.page-scroll').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop : $($anchor.attr('href')).offset().top
		}, 500, 'easeInOutExpo');
		event.preventDefault();
	});
	
	$('#entryForm, #contactForm').bootstrapValidator({
    	// To use feedback icons, ensure that
    	// you use Bootstrap v3.1.0 or later
    	feedbackIcons : {
    		valid : 'glyphicon glyphicon-ok',
    		invalid : 'glyphicon glyphicon-remove',
    		validating : 'glyphicon glyphicon-refresh'
    	},
    	fields : {
    	  希望職種 : {
          validators : {
            notEmpty : {
              message : '希望職種を選択してください'
            }
          }
        },
        お名前 : {
    			validators : {
    				notEmpty : {
    					message : '入力必須項目です'
    				}
    			}
    		},
    		フリガナ : {
    			validators : {
    				notEmpty : {
    					message : '入力必須項目です'
    				}
    			}
    		},
    		生年月日 : {
          validators : {
            stringLength : {
              min : 8,
              max : 8,
              message : '生年月日は8桁で入力してください'
            },
            notEmpty : {
              message : '入力必須項目です'
            },
            regexp : {
              message: '生年月日は整数8桁で入力してください',
              regexp: /^\d{8}$/
            }
          }
        },
        性別 : {
          validators : {
            notEmpty : {
              message : '入力必須項目です'
            }
          }
        },
        郵便番号 : {
          validators : {
            notEmpty : {
              message : '入力必須項目です'
            },
            regexp : {
              message: '郵便番号は数値で入力してください',
              regexp: /^\d*$/
            }
          }
        },
        都道府県 : {
          validators : {
            notEmpty : {
              message : '入力必須項目です'
            }
          }
        },
        市区町村 : {
          validators : {
            notEmpty : {
              message : '入力必須項目です'
            }
          }
        },
        町名番地 : {
          validators : {
            notEmpty : {
              message : '入力必須項目です'
            }
          }
        },
        建物名 : {
          validators : {
            notEmpty : {
              message : '入力必須項目です'
            }
          }
        },
        連絡先TEL : {
          validators : {
            notEmpty : {
              message : '入力必須項目です'
            },
            regexp : {
              message: '連絡先TELの形式が正しくありません、[-]なしの数値で入力してください',
              regexp: /^\d*$/
            }
          }
        },
        メールアドレス : {
    			validators : {
    				notEmpty : {
    					message : '入力必須項目です'
    				},
    				emailAddress : {
    					message : 'メールアドレスの形式が正しくありません'
    				}
    			}
    		},
    		質問事項 : {
    			validators : {
    				stringLength : {
    					max : 500,
    					message : '500文字以内で入力してください'
    				}
    			}
    		},
    		お問い合わせ内容 : {
          validators : {
            notEmpty : {
              message : '入力必須項目です'
            },
            stringLength : {
              max : 500,
              message : '500文字以内で入力してください'
            }
          }
        }
    	}
    });
});

jQuery(document).ready(function($) {
	var sliderProps = {
		autoScaleSlider : true,
		autoScaleSliderWidth : 460,
		autoScaleSliderHeight : 284,
		captionShowEffects : '',
		controlNavEnabled : false,
		keyboardNavEnabled : true,
		directionNavEnabled : false,
		startSlideIndex : 0,
		imageScaleMode : 'fill'
	}, isAnimating = false, currOpenProject;
});
