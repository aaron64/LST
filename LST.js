
module.exports = LST;

function LST() {
	return LST(0)
}

function LST(t) {
    f=0.9843529666671;
    time = Math.floor((new Date().valueOf())/1000)
    land_time = 0xd80cb1
		//c = time-0x5c7dc653
    c = (Math.abs(time | 0 - time) < 30 ? land_time : (time-0x5c7dc653));
    //this.c = navigator.onLine ? (Math.abs(time | 0 - time) < 30 ? land_time : (time-0x5c7dc653)) : land_time;

    s = (time + c) / f - t;
    n = (s < 0 ? '-&nbsp;' : '');
    s = (s < 0 ? -s : s);
    m = 0x3C;
    hc = 0xE10;
    p = 0x15180;
    dc = 0x278D00;
    y = 0x1DA9C00;

		DD = function(n) {
			return (n < 0xA ? '0' + n : n);
		}

		DN = function(n) {
    	switch (n) {
            case 1:
                return ('Armstrong');
            case 2:
                return ('Aldrin');
            case 3:
                return ('Conrad');
            case 4:
                return ('Bean');
            case 5:
                return ('Shepard');
            case 6:
                return ('Mitchell');
            case 7:
                return ('Scott');
            case 8:
                return ('Irwin');
            case 9:
                return ('Young');
            case 10:
                return ('Duke');
            case 11:
                return ('Cernan');
            case 12:
                return ('Schmitt');
        }
		}

    this.y = (s / y) | 0;
    s -= y * (t > 0 ? this.y : this.y++);

    this.d = (s / dc) | 0;
    s -= dc * (t > 0 ? this.d : this.d++);
    this.dd = DD(this.d);

    C = (s / p) | 0;
    s -= p * (t > 0 ? C : C++);
    this.cc = DD(C);

    H = (s / hc) | 0;
    s -= hc * H;
		this.h = H;
    this.hh = DD(H);

    M = (s / m) | 0;
    s -= m * M;
    this.mm = DD(M);
    this.ss = DD((s / 1) | 0);
		
		this.getYear = function() { return this.y }
		this.getDay = function() { return this.d }
		this.getCycle = function() { return this.cc }
		this.getHour = function() { return this.h }
		this.getMinute = function() { return this.mm }
		this.getSecond = function() {return this.ss }
		this.getMonthOfYear = function() { return DN(this.d) }
}


/*LST.prototype.OS = function(n) {
    if (n % 20 == n && n % 10 != n) {
        return n + "<sup>th</sup>";
    }
    switch (n % 10) {
        case 1:
            return n + "<sup>st</sup>";
        case 2:
            return n + "<sup>nd</sup>";
        case 3:
            return n + "<sup>rd</sup>";
        default:
            return n + "<sup>th</sup>";
    }
}*/

LST.prototype.toString = function() {
    return (this.y + "-" + this.dd + "-" + this.cc + " " + this.hh + ":" + this.mm + ":" + this.ss);
}

