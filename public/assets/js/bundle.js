(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var demo_02_03;
(function (demo_02_03) {
    var squareItBasic = function (num, foo) { return num * num; };
    var squareIt;
    squareIt = function (rect) {
        if (rect.w !== undefined) {
            return rect.h * rect.w;
        }
        return rect.h * rect.h;
    };
    var rectA = { h: 7 };
    var rectB = { h: 7, w: 12 };
    console.log(squareIt(rectA));
    console.log(squareIt(rectB));
})(demo_02_03 || (demo_02_03 = {}));

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDRUEsSUFBTyxVQUFVLENBb0NoQjtBQXBDRCxXQUFPLFVBQVUsRUFBQyxDQUFDO0lBT2YsSUFBSSxhQUFhLEdBQW1CLFVBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSyxPQUFBLEdBQUcsR0FBQyxHQUFHLEVBQVAsQ0FBTyxDQUFDO0lBVzFELElBQUksUUFBcUMsQ0FBQztJQUUxQyxRQUFRLEdBQUcsVUFBUyxJQUFJO1FBQ3BCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUEsQ0FBQztZQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzNCLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBRTNCLENBQUMsQ0FBQTtJQUdELElBQUksS0FBSyxHQUFHLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQ2xCLElBQUksS0FBSyxHQUFHLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUM7SUFFeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBR2pDLENBQUMsRUFwQ00sVUFBVSxLQUFWLFVBQVUsUUFvQ2hCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxuXG5tb2R1bGUgZGVtb18wMl8wMyB7XG5cbiAgICBpbnRlcmZhY2UgU3F1YXJlRnVuY3Rpb24ge1xuICAgICAgICAoeDogbnVtYmVyLCB5Om51bWJlcikgOiBudW1iZXI7XG4gICAgfVxuXG5cbiAgICB2YXIgc3F1YXJlSXRCYXNpYzogU3F1YXJlRnVuY3Rpb24gPSAobnVtLCBmb28pID0+IG51bSpudW07XG5cblxuXG4gICAgaW50ZXJmYWNlIFJlY3RhbmdsZSB7XG4gICAgICAgIGg6IG51bWJlcjtcbiAgICAgICAgdz86IG51bWJlcjtcblxuICAgIH1cblxuXG4gICAgdmFyIHNxdWFyZUl0OiAocmVjdDogUmVjdGFuZ2xlKSA9PiBudW1iZXI7XG5cbiAgICBzcXVhcmVJdCA9IGZ1bmN0aW9uKHJlY3Qpe1xuICAgICAgICBpZihyZWN0LncgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICByZXR1cm4gcmVjdC5oICogcmVjdC53O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZWN0LmggKiByZWN0Lmg7XG5cbiAgICB9XG5cblxuICAgIHZhciByZWN0QSA9IHtoOjd9O1xuICAgIHZhciByZWN0QiA9IHtoOjcsIHc6MTJ9O1xuXG4gICAgY29uc29sZS5sb2coc3F1YXJlSXQocmVjdEEpKTtcbiAgICBjb25zb2xlLmxvZyhzcXVhcmVJdChyZWN0QikpO1xuXG5cbn1cbiJdfQ==
