const x = [...new Array(20)].map((v, i) => i);
const y = [...new Array(20)].map((v, i) => i);

export const heatMapDataset = [...new Array(40)].map((v, i) => [
  x[Math.floor(Math.random() * 20)],
  y[Math.floor(Math.random() * 20)],
  Math.max(Math.random() * 400, 1),
]);
console.log(heatMapDataset);

function randn() {
  let u = 0,
    v = 0;
  while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
  while (v === 0) v = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}
export const lineDataset = [...new Array(50)].map((v, i) => {
  const n = randn();
  return [i, n];
});

export const pieDataset = [...new Array(5)].map((v, i) => [
  i + "s",
  Math.random() * 100,
]);


export const scatterDataset = [...new Array(400)].map((v) => [Math.ceil(Math.random() * 100), Math.ceil(Math.random() * 40)])


export const  areaDataset = [...new Array(40)].map((v, i) => [i, Math.random() * 9, Math.max(Math.random() * 10, 9)])
export const barDataset = [...new Array(50)].map((v, i) => [i, Math.random() * 100])
 const stackBarDataset1 = [
    {
        "group": "banana2",
        "Nitrogen": (Math.random() * 100)+'',
        "normal":(Math.random() * 100)+'',  "norma2l": (Math.random() * 100)+'',
        "stress": (Math.random() * 100)+''
    },
    {
        "group": "banana",
        "Nitrogen": (Math.random() * 100)+'',
        "normal":(Math.random() * 100)+'',  "norma2l": (Math.random() * 100)+'',
        "stress": (Math.random() * 100)+''
    },
    {
        "group": "poacee",
        "Nitrogen": (Math.random() * 100)+'',
        "normal": (Math.random() * 100)+'',  "norma2l": (Math.random() * 100)+'',
        "stress": (Math.random() * 100)+''
    },
    {
        "group": "poacee2",
        "Nitrogen": (Math.random() * 100)+'',
        "normal": (Math.random() * 100)+'',  "norma2l": (Math.random() * 100)+'',
        "stress": (Math.random() * 100)+''
    },
    {
        "group": "sorgho",
        "Nitrogen":(Math.random() * 100)+'',
        "normal": (Math.random() * 100)+'',  "norma2l": (Math.random() * 100)+'',
        "stress": (Math.random() * 100)+''
    },
    {
        "group": "triticum",
        "Nitrogen": (Math.random() * 100)+'',
        "normal": (Math.random() * 100)+'',
        "norma2l": (Math.random() * 100)+'',
        "stress": (Math.random() * 100)+''
    }
]
export const stackBarDataset = [
   ... stackBarDataset1, 
]