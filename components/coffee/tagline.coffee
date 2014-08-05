$ = require 'jquery'

do fill = (item = 'It is what it is.') ->
	$('.tagline').append "#{item}"
fill