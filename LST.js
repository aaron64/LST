exports.printMsg = function() {
    console.log("Test message");
}
function LST(t) {
    this.f=0.9843529666671;

    time = Math.floor((new Date().valueOf())/1000)
    land_time = 0xd80cb1
    this.c = navigator.onLine ? (Math.abs(time | 0 - time) < 30 ? land_time : (time-0x5c7dc653)) : land_time;

    s = (time + this.c) / this.f - t;
    n = (s < 0 ? '-&nbsp;' : '');
    s = (s < 0 ? -s : s);
    m = 0x3C;
    h = 0xE10;
    p = 0x15180;
    d = 0x278D00;
    y = 0x1DA9C00;
    this.Y = (s / y) | 0;
    s -= y * (t > 0 ? this.Y : this.Y++);
    this.D = (s / d) | 0;
    s -= d * (t > 0 ? this.D : this.D++);
    this.dd = this.DD(this.D);
    C = (s / p) | 0;
    s -= p * (t > 0 ? C : C++);
    this.cc = this.DD(C);
    H = (s / h) | 0;
    s -= h * H;
    this.hh = this.DD(H);
    M = (s / m) | 0;
    s -= m * M;
    this.mm = this.DD(M);
    this.ss = this.DD((s / 1) | 0);
}

LST.prototype.DD = function(n) {
    return (n < 0xA ? '0' + n : n);
}

LST.prototype.DN = function(n) {
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

LST.prototype.OS = function(n) {
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
}

LST.prototype.toString = function() {
    return (this.Y + "-" + this.dd + "-" + this.cc + "&nbsp;&nabla;&nbsp;" + this.hh + ":" + this.mm + ":" + this.ss);
}



document.write(new LST(0,0))
