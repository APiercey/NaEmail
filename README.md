# NaEmail
A simple javascript script to "replace" email markup with a real email. Fight spam!

## Why
I built this for a friend who was concerned about getting spam in their e-mail. So, I decided to make a script for fun to help them :)

Now, I release it into the wild!

## What's with the name?
'Na' means 'after' in Dutch. When I built this, I was soon leaving to visit The Netherlands and needed a name, so it was just inspirational.

## Getting Started
Include `na-email.js` or `'na-email.min.js` (if small things is your fancy ;]) script onto your webpage and you're ready to start!

To use this, add the CSS class `na-email` to your HTML tag with the follow attributes and values:
* `data-email-name`: the `example` in `example@someworld.com`
* `data-email-domain`: the `someworld` in `example@someworld.com`
* `data-email-top-level`: the `com` in `example@someworld.com`. Don't add the first period!
* `data-email-dont-replace`: Adding this makes the script not replace your content within the tag. Default is true.

If there is any confusion, please see `index.html` for a demo :)

Cheers!