if (!dmtrack) {
	var dmtrack = {}
}
dmtrack.send_head = document.location.protocol + "//";
dmtrack.MSG_Img;
dmtrack.profile_site = 2;
dmtrack.ver = 30;
dmtrack.err_url = dmtrack.send_head + "stat.china.alibaba.com/dw/error.html";
dmtrack.tracelog_url = dmtrack.send_head
		+ "stat.china.alibaba.com/tracelog/click.html";
dmtrack.acookie_url = dmtrack.send_head + "acookie.alibaba.com/1.gif";
dmtrack.feedback_url = dmtrack.send_head
		+ "page.china.alibaba.com/shtml/static/forfeedbacklog.html";
dmtrack.beacon_url = dmtrack.send_head + "dmtracking.alibaba.com/b.jpg";
dmtrack.beacon2_url = dmtrack.send_head + "dmtracking.alibaba.com/c.jpg";
dmtrack.acookieSupport = true;
dmtrack.getCookieFromAcookie = true;
dmtrack.isgetApacheId = false;
dmtrack.isCheckLogin = true;
dmtrack.SendMessage = function(f, b, e, a) {
	function h(x) {
		var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
		var t, v, q;
		var w, u, s;
		q = x.length;
		v = 0;
		t = "";
		while (v < q) {
			w = x.charCodeAt(v++) & 255;
			if (v == q) {
				t += r.charAt(w >> 2);
				t += r.charAt((w & 3) << 4);
				t += "==";
				break
			}
			u = x.charCodeAt(v++);
			if (v == q) {
				t += r.charAt(w >> 2);
				t += r.charAt(((w & 3) << 4) | ((u & 240) >> 4));
				t += r.charAt((u & 15) << 2);
				t += "=";
				break
			}
			s = x.charCodeAt(v++);
			t += r.charAt(w >> 2);
			t += r.charAt(((w & 3) << 4) | ((u & 240) >> 4));
			t += r.charAt(((u & 15) << 2) | ((s & 192) >> 6));
			t += r.charAt(s & 63)
		}
		return t
	}
	var m = "";
	var n = "";
	var o = new Date();
	var p = f.length;
	try {
		if (b) {
			for (k in b) {
				m += k.toString() + "=" + b[k].toString() + "&"
			}
			m = m.substring(0, m.length - 1)
		}
		m = h(m);
		if (e) {
			for (k in e) {
				n += k.toString() + "=" + e[k].toString() + "&"
			}
			n = n.substring(0, n.length - 1)
		}
		if (f.indexOf("?") == -1) {
			if (!m && n) {
				f += "?" + n + "&ver=" + dmtrack.ver + "&time=" + o.getTime()
			} else {
				if (!n && m) {
					f += "?" + m + "&ver=" + dmtrack.ver + "&time="
							+ o.getTime()
				} else {
					if (n && m) {
						f += "?" + m + "&" + n + "&ver=" + dmtrack.ver
								+ "&time=" + o.getTime()
					}
				}
			}
		} else {
			var l = f.split("?");
			if (!m && n) {
				if (!l[1]) {
					f = "" + l[0] + "?" + l[1] + n + "&ver=" + dmtrack.ver
							+ "&time=" + o.getTime()
				} else {
					f = "" + l[0] + "?" + l[1] + "&" + n + "&ver="
							+ dmtrack.ver + "&time=" + o.getTime()
				}
			} else {
				if (!n && m) {
					if (!l[1]) {
						f = "" + l[0] + "?" + m + l[1] + "&ver=" + dmtrack.ver
								+ "&time=" + o.getTime()
					} else {
						f = "" + l[0] + "?" + m + "&" + l[1] + "&ver="
								+ dmtrack.ver + "&time=" + o.getTime()
					}
				} else {
					if (n && m) {
						if (!l[1]) {
							f = "" + l[0] + "?" + m + l[1] + "&" + n + "&ver="
									+ dmtrack.ver + "&time=" + o.getTime()
						} else {
							f = "" + l[0] + "?" + m + "&" + l[1] + "&" + n
									+ "&ver=" + dmtrack.ver + "&time="
									+ o.getTime()
						}
					}
				}
			}
		}
		if (f.length == p) {
			if (f.indexOf("?") == -1) {
				f += "?ver=" + dmtrack.ver + "&time=" + o.getTime()
			} else {
				if (f.indexOf("?") == f.length - 1) {
					f += "ver=" + dmtrack.ver + "&time=" + o.getTime()
				} else {
					f += "&ver=" + dmtrack.ver + "&time=" + o.getTime()
				}
			}
		}
		if (a == "docwrite") {
			document.write("<img style='display:none' src = " + f + ">")
		} else {
			if (a == "newimg" || !a) {
				var j = new Image();
				j.onload = function() {
					j = null;
					delete j
				};
				if (dmtrack.send_head.indexOf("http") != -1
						&& dmtrack.send_url != "") {
					j.src = f
				}
			}
		}
	} catch (i) {
		var c = dmtrack.getErrInfo(i);
		var g = dmtrack.err_url + "?type=send&exception="
				+ encodeURIComponent(c.toString());
		if (a == "docwrite") {
			document.write("<img style='display:none' src = " + g + ">")
		} else {
			if (a == "newimg" || !a) {
				var j = new Image();
				j.onload = function() {
					j = null;
					delete j
				};
				j.src = g
			}
		}
	}
};
dmtrack.getRand = function() {
	var a;
	try {
		a = dmtrack_pageid
	} catch (g) {
		a = ""
	}
	if (!a) {
		a = "001" + Math.round(Math.random() * 10000000000) + ""
				+ Math.round(Math.random() * 10000000000)
	} else {
		a = a.substr(0, 20)
	}
	var j = new Date();
	var f = [ a, j.getTime() ].join("");
	if (f.length < 42) {
		var h = "" + Math.round(Math.random() * 10000000000)
				+ Math.round(Math.random() * 10000000000)
				+ Math.round(Math.random() * 10000000000);
		var b = 0;
		h = h.split("");
		for ( var c = f.length; c < 42; c++) {
			f = f + h[b];
			b++
		}
	} else {
		for ( var c = f.length; c > 42; c--) {
			f = f.substring(0, c - 1)
		}
	}
	return f
};
String.prototype.Trim = function() {
	return this.replace(/(^\s*)|(\s*$)/g, "")
};
dmtrack.get_cookie = function(c) {
	var b = "(?:; )?" + c + "=([^;]*);?";
	var a = new RegExp(b);
	if (a.test(document.cookie)) {
		var e = decodeURIComponent(RegExp["$1"]);
		if (e.Trim().length > 0) {
			return e
		} else {
			return "-"
		}
	} else {
		return "-"
	}
};
dmtrack.set_cookie = function(g, h, b, c, a, f) {
	var e = g + "=" + encodeURIComponent(h);
	if (b) {
		e += "; expires=" + b.toGMTString()
	}
	if (c) {
		e += "; path=" + c
	}
	if (a) {
		e += "; domain=" + a
	}
	if (f) {
		e += "; secure"
	}
	document.cookie = e
};
dmtrack.del_cookie = function(f, a) {
	var e = document.domain, b = e.split("."), g = "";
	dmtrack.set_cookie(f, "", new Date(0), a);
	for ( var c = b.length - 1; c > 0; c--) {
		g = "." + b[c] + g;
		dmtrack.set_cookie(f, "", new Date(0), a, g)
	}
	g = "." + b[c] + g;
	dmtrack.set_cookie(f, "", new Date(0), a, g)
};
dmtrack.getDomainCookie = function(c, f) {
	c = c.replace(/\"/g, "");
	var e = dmtrack.get_cookie(f), b = c.split("|");
	if (b[0] && b[0] == "-") {
		b = []
	}
	b.push(f + "=" + e);
	var a = b.join("|");
	return a
};
dmtrack.tracking = function() {
	try {
		var m = document.referrer;
		try {
			m = "" == m ? opener.location : m;
			m = "" == m ? "-" : m
		} catch (l) {
			m = "-"
		}
		m = encodeURI(m);
		var a = "GET";
		var j = document.URL.indexOf("://");
		var c = document.URL.substr(j + 2);
		c = encodeURI(c);
		var f = dmtrack.get_cookie("ali_apache_track");
		if (dmtrack.getCookieFromAcookie) {
			f = dmtrack.getDomainCookie(f, "cna")
		}
		if (dmtrack.isgetApacheId) {
			f = dmtrack.getDomainCookie(f, "ali_apache_id")
		}
		var i = dmtrack.beacon_url;
		try {
			if (!dmtrack_c) {
				dmtrack_c = "{-}"
			}
		} catch (l) {
			dmtrack_c = "{-}"
		}
		if (dmtrack.isCheckLogin) {
			dmtrack._checkLogin()
		}
		dmtrack_c = dmtrack.addCookieC();
		dmtrack.redirect_c();
		dmtrack.change_pid();
		dmtrack.SendMessage(i, {
			p : "{" + dmtrack.profile_site + "}",
			u : "{" + c + "}",
			m : "{" + a + "}",
			s : "{200}",
			r : "{" + m + "}",
			a : "{" + f + "}",
			b : "{-}",
			c : dmtrack_c
		}, {
			pageid : dmtrack_pageid
		})
	} catch (h) {
		var b = dmtrack.getErrInfo(h);
		var g = dmtrack.err_url + "?type=dmtrack&exception="
				+ encodeURIComponent(b.toString());
		dmtrack.SendMessage(g)
	}
	dmtrack.isDmTracked = true
};
dmtrack.redirect_c = function() {
	var b = "aliBeacon_bcookie";
	var a = dmtrack.get_cookie(b);
	a = a.replace(/ali_resin_trace=/, "");
	if ("{-}" == dmtrack_c) {
		dmtrack_c = "{" + a + "}"
	} else {
		dmtrack_c = dmtrack_c.split("}");
		if ("-" == a) {
			dmtrack_c[1] = "}"
		} else {
			dmtrack_c[1] = "|";
			dmtrack_c.push(a);
			dmtrack_c.push("}")
		}
		dmtrack_c = dmtrack_c.join("")
	}
	dmtrack.del_cookie(b, "/")
};
dmtrack.change_pid = function() {
	var a = document.domain;
	if (-1 != a.indexOf("alibado.com")) {
		dmtrack.profile_site = 4
	}
};
dmtrack.beacon_click = function(g, l) {
	try {
		var m = l;
		if (m == "-" || !m) {
			m = encodeURI(document.URL)
		}
		d = new Date();
		var j = g.indexOf("://");
		var c = g.substr(j + 2);
		var a = "GET";
		var e = dmtrack.get_cookie("ali_apache_track");
		var i = dmtrack.beacon2_url;
		dmtrack.SendMessage(i, {
			p : "{" + dmtrack.profile_site + "}",
			u : "{" + c + "}",
			m : "{" + a + "}",
			s : "{200}",
			r : "{" + m + "}",
			a : "{" + e + "}",
			b : "{-}",
			c : "{-}"
		})
	} catch (h) {
		var b = dmtrack.getErrInfo(h);
		var f = dmtrack.err_url + "?type=beaconclick&exception="
				+ encodeURIComponent(b.toString());
		dmtrack.SendMessage(f)
	}
};
dmtrack.tracelog = function(c) {
	var b = dmtrack.tracelog_url;
	var a = {
		tracelog : c
	};
	dmtrack.clickstat(b, a)
};
dmtrack.clickstat = function(c, f, l) {
	try {
		if (!window.dmtrack_pageid) {
			window.dmtrack_pageid = ""
		}
		if (typeof (f) == "string") {
			if ("?" == c.substring(c.length - 1, c.length)) {
				c = c.replace("?", "")
			}
			if ("?" == f.substring(0, 1)) {
				f = f.replace("?", "")
			}
			var o = f.split("&");
			var b = {};
			for ( var h = 0; h < o.length; h++) {
				var j = o[h].split("=");
				var n = j[0];
				var m = j[1];
				b[n] = m
			}
			b.st_page_id = window.dmtrack_pageid;
			dmtrack.SendMessage(c, {}, b)
		} else {
			if (typeof (f) == "object") {
				f.st_page_id = window.dmtrack_pageid;
				dmtrack.SendMessage(c, {}, f)
			}
		}
	} catch (g) {
		var a = dmtrack.getErrInfo(g);
		var e = dmtrack.err_url + "?type=clickstat&exception="
				+ encodeURIComponent(a.toString());
		dmtrack.SendMessage(e)
	}
};
dmtrack.flash_dmtracking = function(c, l) {
	try {
		dmtrack_pageid = dmtrack.getRand();
		var a = "GET";
		var f = dmtrack.get_cookie("ali_apache_track");
		var i = dmtrack.beacon_url;
		try {
			if (!dmtrack_c) {
				dmtrack_c = "{-}"
			}
		} catch (j) {
			dmtrack_c = "{-}"
		}
		dmtrack.SendMessage(i, {
			p : "{" + dmtrack.profile_site + "}",
			u : "{" + c + "}",
			m : "{" + a + "}",
			s : "{200}",
			r : "{" + l + "}",
			a : "{" + f + "}",
			b : "{-}",
			c : dmtrack_c
		}, {
			pageid : dmtrack_pageid,
			dmtrack_type : "xuanwangpu"
		})
	} catch (h) {
		var b = dmtrack.getErrInfo(h);
		var g = dmtrack.err_url + "?type=flash&exception="
				+ encodeURIComponent(b.toString());
		dmtrack.SendMessage(g)
	}
	dmtrack.isDmTracked = true
};
dmtrack.feedback = function(c) {
	var f = dmtrack.feedback_url;
	if (c.indexOf("?") > -1) {
		f = f + c
	} else {
		f = f + "?" + c
	}
	var a = "";
	try {
		a = document.cookie.match(/track_cookie[^;]*cosite=(\w+)/)[1]
	} catch (b) {
	}
	if (a.length > 0) {
		f = f + "&fromsite=" + a
	}
	dmtrack.beacon_click(f, "-");
	dmtrack.SendMessage(f, {}, {});
	return true
};
dmtrack.feedbackTraceLog = function(b, a) {
	return true
};
dmtrack.acookie = function() {
	function a(c) {
		return Math.floor(Math.random() * c) + 1
	}
	var b = escape(document.referrer);
	dmtrack.SendMessage(dmtrack.acookie_url, {}, {
		cache : a(9999),
		pre : b
	})
};
function sk_dmtracking() {
	if (dmtrack.isDmTracked) {
		return
	}
	dmtrack_pageid = dmtrack.getRand();
	try {
		if (dmtrack.acookieSupport) {
			dmtrack.acookie()
		}
	} catch (c) {
		var b = dmtrack.getErrInfo(c);
		var a = dmtrack.err_url + "?type=acookie&exception="
				+ encodeURIComponent(b.toString());
		dmtrack.SendMessage(a)
	}
	dmtrack.tracking()
}
dmtrack.getErrInfo = function(b) {
	var c = "";
	for ( var a in b) {
		c += a + "=" + b[a] + ";"
	}
	return c
};
dmtrack.isSupportCookie = function() {
	var c = "testIsSupportCookie";
	var b = document.domain;
	var a = "";
	dmtrack.set_cookie(c, "true", "", "/", b);
	a = dmtrack.get_cookie(c);
	if (a == "true") {
		dmtrack.del_cookie(c, "/");
		return true
	}
	return false
};
dmtrack._checkLogin = function() {
	if (!window.beacon) {
		window.beacon = {}
	}
	function a() {
		if (typeof window._last_loginid_info != "undefined") {
			return window._last_loginid_info
		}
		var b = function(c) {
			var f = "";
			try {
				f = document.cookie.match("(?:^|;)\\s*" + c + "=([^;]*)")
			} catch (g) {
			} finally {
				return f ? unescape(f[1]) : ""
			}
		};
		window._last_loginid_info = b("__cn_logon__")
				&& b("__cn_logon__") === "true" ? b("__last_loginid__") : false;
		return window._last_loginid_info
	}
	if (a() != false) {
		window.beacon.c_signed = 1
	} else {
		window.beacon.c_signed = 0
	}
};
dmtrack.addCookieC = function() {
	var c = dmtrack_c.substring(1, dmtrack_c.length - 1);
	var a = [];
	if (c != "-") {
		a = c.split("|")
	}
	for ( var b in window.beacon) {
		a.push(b + "=" + window.beacon[b])
	}
	a = a.length == 0 ? "-" : a.join("|");
	return "{" + a + "}"
};
