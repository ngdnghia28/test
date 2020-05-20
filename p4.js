const Combinatorics = require("js-combinatorics");
const _ = require("lodash");

function patterns(text) {
  const words = text.split(/\s/);
  //Digit first
  let ds = words.filter((v) => /^\d+[a-zA-Z]+.*$/.test(v));
  //String first
  let ss = words.filter((v) => /^[a-zA-Z]+\d+.*$/.test(v));

  const ptns = [...ds, ...ss];

  const variations = ptns.map((pattern) => insertDash(pattern));
  return {
    ptns,
    variations: _.flatten(variations),
  };
}

function insertDash(str) {
  const runs = spliter(str, []);
  const baseN = Combinatorics.baseN([true, false], runs.length - 1);

  return baseN.map((base) => combineStr(runs, base));
}

function combineStr(runs, variation) {
  return variation.reduce((acc, cur, idx) => {
    return acc + (cur ? `-${runs[idx + 1]}` : `${runs[idx + 1]}`);
  }, runs[0]);
}

function spliter(str, runs) {
  if (str === "") return runs;

  const match = str.match(/^\d+/) || str.match(/^[a-z]+/i);
  return spliter(str.split(match)[1], [...runs, match[0]]);
}

(() => {
  const { ptns, variations } = patterns(
    "Products are created with 132cxvx SKUs and MXX and CSV and 79 and mic7979 and m98opt options"
  );

  console.log(`
Matched Words: ${ptns.join(", ")}
Variations with '-' character: ${_.filter(
    variations,
    (v) => !ptns.includes(v)
  ).join(", ")}
  `);
})();
