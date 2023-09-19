import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return andrew id information', () => {
        const query = "andrew id";
        const response: string = QueryProcessor(query);
        expect(response).toBe(
          "The Andrew ID of the supporter of this site is yinqis."
        );
    });

    test('should return name of the creator', () => {
        const query = "your name";
        const response: string = QueryProcessor(query);
        expect(response).toBe(
          "My name is Emma."
        );
    });

    test ('should add two numbers asked', () => {
        const query1 = "What is 35 plus 1";
        const response1: string = QueryProcessor(query1);
        expect(response1).toBe(
          "36"
        )
        const query2 = "What is 98 plus 55";
        const response2: string = QueryProcessor(query2);
        expect(response2).toBe(
          "153"
        )
    })

    test ('should multiply two numbers asked', () => {
        const query = "What is 3 multiplied by 10?";
        const response: string = QueryProcessor(query);
        expect(response).toBe(
          "30"
        )      
    })
});