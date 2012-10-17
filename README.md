downup.js
======

A small jQuery plugin to toggle dropdown menus.

Toggles a `du-open` class on the parent of the target element. Actual dropdown behavior can then be controlled by CSS.

Example usage:

```html
<html>
	<head>DownUp Example</head>
		<script src="/path/to/jquery.js"></script>
		<script src="/path/to/downup.js"></script>
		<script>
			$('.dropdown-element').downup();
		</script>
	</head>
	<body>
		<ul>
			<li>
				<a href="#" class="dropdown-element">More Info</a>
				<ul>
					<li>Hidden Item 1</li>
					<li>Hidden Item 2</li>
					<li>Hidden Item 3</li>
				</ul>
			</li>
		</ul>
	</body>
</html>
```

TODO: create example page