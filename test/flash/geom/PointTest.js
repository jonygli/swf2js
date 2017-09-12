
describe("Point.js property valid test and clone test", function()
{

    it("valid and clone test", function () {

        // valid
        var p1 = new Point("a", "b");
        p1.x = "a";
        p1.y = "b";

        // clone
        var p2 = p1.clone();
        p2.x = 10;
        p2.y = 20;

        // origin
        expect(p1.x).toBe(0);
        expect(p1.y).toBe(0);

        // clone
        expect(p2.x).toBe(10);
        expect(p2.y).toBe(20);
        expect(p2.length).toBe(22.360679774997898);
        expect(p2.toString()).toBe("(x=10, y=20)");
    });
});


describe("Matrix.js add test", function()
{

    it("add test", function()
    {
        var p1 = new Point(10, 10);
        var p2 = new Point(20, 20);

        var p3 = p1.add(p1);
        var p4 = p2.add(p2);
        var p5 = p1.add(p2);
        var p6 = p2.add(p1);

        expect(p3.toString()).toBe("(x=20, y=20)");
        expect(p4.toString()).toBe("(x=40, y=40)");
        expect(p5.toString()).toBe("(x=30, y=30)");
        expect(p6.toString()).toBe("(x=30, y=30)");
    });
});


describe("Matrix.js copyFrom test", function()
{

    it("copyFrom test", function()
    {
        var p1 = new Point(10, 10);
        var p2 = new Point(20, 20);

        p1.copyFrom(p2);
        p1.x = 10;

        expect(p1.toString()).toBe("(x=10, y=20)");
        expect(p2.toString()).toBe("(x=20, y=20)");
    });
});


describe("Matrix.js distance test", function()
{

    it("distance test", function()
    {
        var p1 = new Point(10, 10);
        var p2 = new Point(20, 20);
        var d  = Point.distance(p1, p2);
        expect(d).toBe(14.142135623730951);
    });
});


describe("Matrix.js equals test", function()
{

    it("equals test", function()
    {
        var p1 = new Point(10, 10);
        var p2 = new Point(10, 10);
        var p3 = new Point(10, 20);
        var p4 = new Point(20, 10);
        var p5 = new Point(20, 20);

        expect(p1.equals(p2)).toBe(true);
        expect(p1.equals(p3)).toBe(false);
        expect(p1.equals(p4)).toBe(false);
        expect(p1.equals(p5)).toBe(false);
    });
});


describe("Matrix.js subtract test", function()
{

    it("subtract test", function()
    {
        var p1 = new Point(6, 8);
        var p2 = new Point(1.5, 2);
        var p3 = p1.subtract(p2);
        expect(p3.toString()).toBe("(x=4.5, y=6)");
    });
});


describe("Matrix.js setTo test", function()
{

    it("setTo test", function()
    {
        var p = new Point(10, 20);
        p.setTo(30, 40);
        expect(p.toString()).toBe("(x=30, y=40)");
    });
});


describe("Matrix.js offset test", function()
{

    it("offset test", function()
    {
        var p = new Point(10, 20);
        p.offset(30, 40);
        expect(p.toString()).toBe("(x=40, y=60)");
    });
});


describe("Matrix.js normalize test", function()
{

    it("normalize test", function()
    {
        var p = new Point(6, 8);
        p.normalize(2.5);
        expect(p.toString()).toBe("(x=1.5, y=2)");
    });
});


describe("Matrix.js polar test", function()
{

    it("polar test", function()
    {
        var angle = Math.PI * 2 * (30 / 360); // 30 degrees
        var p     = Point.polar(4, angle);
        expect(p.toString()).toBe(
            "(x=3.464101615137755, y=1.9999999999999996)"
        );
    });
});


describe("Matrix.js interpolate test", function()
{

    it("interpolate test", function()
    {
        var p1 = new Point();
        var p2 = new Point(6, 8);
        var p3 = Point.interpolate(p1, p2, 0.5);
        expect(p3.toString()).toBe("(x=3, y=4)");
    });
});