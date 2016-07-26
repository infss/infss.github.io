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
			})
	
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
    	  job : {
          validators : {
            notEmpty : {
              message : '希望職種を選択してください'
            }
          }
        },
    		name : {
    			validators : {
    				notEmpty : {
    					message : '入力必須項目です'
    				}
    			}
    		},
    		nameKana : {
    			validators : {
    				notEmpty : {
    					message : '入力必須項目です'
    				}
    			}
    		},
    		birthday : {
          validators : {
            stringLength : {
              min : 8,
              max : 8,
              message : '生年月日は8桁で入力してください'
            },
            notEmpty : {
              message : '入力必須項目です'
            }
          }
        },
        zipCode : {
          validators : {
            notEmpty : {
              message : '入力必須項目です'
            }
          }
        },
        state : {
          validators : {
            notEmpty : {
              message : '入力必須項目です'
            }
          }
        },
        city : {
          validators : {
            notEmpty : {
              message : '入力必須項目です'
            }
          }
        },
        address : {
          validators : {
            notEmpty : {
              message : '入力必須項目です'
            }
          }
        },
        building : {
          validators : {
            notEmpty : {
              message : '入力必須項目です'
            }
          }
        },
        phone : {
          validators : {
            notEmpty : {
              message : '入力必須項目です'
            }
          }
        },
        email : {
    			validators : {
    				notEmpty : {
    					message : '入力必須項目です'
    				},
    				emailAddress : {
    					message : 'emailの形式が正しくありません'
    				}
    			}
    		},
    		comment : {
    			validators : {
    				stringLength : {
    					max : 500,
    					message : '500文字以内で入力してください'
    				}
    			}
    		},
        message : {
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
