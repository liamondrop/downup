downup.js
======

A small jQuery plugin to toggle dropdown menus.

Toggles a `du-open` class on the parent of the target element. Actual dropdown behavior can then be controlled by CSS.

Example usage:

```html
<html>
	<head>
		<title>DownUp Example</title>
	</head>
	<body>
		<ul class="main-list">
			<li>Main Item 1</li>
			<li>Main Item 2</li>
			<li>Main Item 3</li>
			<li>
				<a href="#" class="target-element">More Info</a>
				<ul class="hidden-list">
					<li>Hidden Item 1</li>
					<li>Hidden Item 2</li>
					<li>Hidden Item 3</li>
				</ul>
			</li>
		</ul>

		<script src="/path/to/jquery.js"></script>
		<script src="/path/to/downup.js"></script>
		<script>
			$('.target-element').downup();
		</script>
	</body>
</html>
```

TODO: create example page