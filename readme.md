# kuuurttyy.github.io

Personal portfolio site built using Jekyll.

Uses wow.js and animate.css to add some lovely animations to things but this means classes have to be added in the markdown. Slightly annoying but its the only solution I have at the moment

## Projects
Portfolio projects live under /_data/projects/ where they are .yml files

The name of the file ***must*** be the same as the title, capitals and spaces and everything.

### Example Structure

	title: (title of project)
	tagline: (small description)
	coverImage: (image to show on homepage)
	date: (date posted to order by)
	
	titleLine1: (first word of title)
	titleLine2: (second word if needed, must be broken up to work with the offset BG)
	
	description: |
	the pipe is used to indicate a multi line section.
     
	Double space as usual for paragraphs.
		
	images:
		- url: (link to image)
		  alt: (alt, obviously)
	      caption: (optional, only shows if used)
	
	videos:
		- url: (link to video embed url)
		  caption: (optional caption)

## Blog
I've added support for a header_image in the blog posts, this will appear in the individual post view. Try not to make the pictures too tall as that would just look horrible. The need to be wide too.