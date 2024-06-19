import test from "node:test";
import assert from "node:assert";

function add(n, m) { return n + m; }

test("somme de deux nombres positifs", () => {
    assert.strictEqual(add(1, 2), 4);
})