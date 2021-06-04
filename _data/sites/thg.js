module.exports = {
	name: "thg", // optional, falls back to object key
	description: "THG Brands",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	skip: !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
	options: {
		frequency: 60 * 11 + 30, // 23 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "run"
	},
	urls: [
		"https://www.myprotein.com/",
		"https://www.lookfantastic.com/",
		"https://www.lookfantastic.ie/",
		"https://www.mygeekbox.co.uk/",
		"https://www.braunshop.co.uk/",
		"https://www.dermstore.com/",
		"https://www.growgorgeous.co.uk/",
		"https://www.skinstore.com/",
		"https://www.coggles.com/"
	]
};