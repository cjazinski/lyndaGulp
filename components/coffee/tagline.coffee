$ = require 'jquery'

do fill = (item = 'It is what it is... Sucka') ->
	$('.tagline').append "#{item}"
fill