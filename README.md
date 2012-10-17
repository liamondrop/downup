downup.js
======

A simple jQuery plugin to toggle a dropdown menu.

Adds a `'du-open'` class to the parent element of  button.

Example usage:

```javascript
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

TODO: write better docs