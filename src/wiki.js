var rp = require("request-promise");

function pushToArray(data, array) {
	for (const page in data) {
		array.push({
			title: data[page].title,
			url: `https://en.wikipedia.org/wiki/${encodeURIComponent(data[page].title)}`,
		});
	}
}

async function randomwikis(articleCount = 10) {
	var options = {
		uri: "https://en.wikipedia.org/w/api.php",
		qs: {
			format: "json",
			action: "query",
			generator: "random",
			grnnamespace: "0",
			prop: "revisions",
			rvprop: "content",
			grnlimit: articleCount,
		},
		json: true,
	};
	if (articleCount > 500)
		throw new Error(
			"To prevent API spam this package only makes one request limited to 500 pages, use a loop to fetch more."
		);
	var rData = await rp(options);
	var data = rData.query.pages;
	var pages = [];
	pushToArray(data, pages);
	return Promise.all(pages);
}

module.exports = randomwikis;
