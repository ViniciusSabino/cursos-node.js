import { expect } from "chai";
import { sum, sub, mult, div } from "../src/main";

describe("Calculator", () => {
    // smoke tests
    describe("Smoke Tests", () => {
        it("should exist the method 'sum'", () => {
            expect(sum).to.exist;
            expect(sum).to.be.a("function");
        });

        it("should exist the method 'sub'", () => {
            expect(sub).to.exist;
            expect(sub).to.be.a("function");
        });

        it("should exist the method 'mult'", () => {
            expect(mult).to.exist;
            expect(mult).to.be.a("function");
        });

        it("should exist the method 'div'", () => {
            expect(div).to.exist;
            expect(div).to.be.a("function");
        });
    });

    describe("Sum", () => {
        it("should return 4 when 'sum(2,2)'", () => {
            expect(sum(2, 2)).to.be.equal(4);
        });
    });

    describe("Sub", () => {
        it("should return 5 when 'sub(15,10)'", () => {
            expect(sub(15, 10)).to.be.equal(5);
        });
    });

    describe("Mult", () => {
        it("should return 9 when 'mult(3,3)'", () => {
            expect(mult(3, 3)).to.be.equal(9);
        });
    });

    describe("Div", () => {
        it("should return 'não é possivel divisão por 0' when divide by 0", () => {
            expect(div(10, 0)).to.be.equal("não é possivel divisão por 0");
        });
    });
});
